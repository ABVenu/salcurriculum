function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderMermaid(chart) {
  if (!chart) return "";
  return `<div class="mermaid-panel"><pre class="mermaid">${chart}</pre></div>`;
}

function renderBullets(items, className = "") {
  const cls = className ? ` class="${className}"` : "";
  return `<ul${cls}>${items.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
}

function renderDefinition(text) {
  if (!text) return "";
  return `<p class="slide-definition">${escapeHtml(text)}</p>`;
}

function renderLoCards(items) {
  return `<div class="lo-grid">${items
    .map(
      (item, i) => `
    <div class="lo-card">
      <span class="lo-num">${String(i + 1).padStart(2, "0")}</span>
      <p>${escapeHtml(item)}</p>
    </div>`
    )
    .join("")}</div>`;
}

function renderCompareColumn(col, variant) {
  const items = col.items.map((b) => `<li>${escapeHtml(b)}</li>`).join("");
  const example = col.example
    ? `<div class="compare-example"><span class="compare-example-label">Example</span><p>${escapeHtml(col.example)}</p></div>`
    : "";
  return `
    <div class="compare-col ${variant}">
      <h3>${escapeHtml(col.heading)}</h3>
      <ul>${items}</ul>
      ${example}
    </div>
  `;
}

function renderTopicPills(subtitle) {
  return subtitle
    .split(",")
    .map((t) => `<span class="topic-pill">${escapeHtml(t.trim())}</span>`)
    .join("");
}

function renderSlide(slide, index) {
  const el = document.createElement("article");
  el.className = "slide";
  el.dataset.index = index;
  if (slide.theme) el.classList.add(`theme-${slide.theme}`);

  if (slide.type === "title") {
    el.classList.add("title-slide");
    el.innerHTML = `
      <div class="title-bg"></div>
      <div class="title-content">
        <div class="python-badge">🐍</div>
        <h1>${escapeHtml(slide.title)}</h1>
        <div class="accent-bar"></div>
        <div class="topic-pills">${renderTopicPills(slide.subtitle)}</div>
        ${renderMermaid(slide.mermaid)}
      </div>
      ${slide.instructor ? `<p class="title-byline">by ${escapeHtml(slide.instructor)}</p>` : ""}
    `;
    return el;
  }

  if (slide.type === "scene") {
    el.classList.add("section-slide");
    el.innerHTML = `
      <div class="section-accent"></div>
      <div class="section-body">
        <div class="section-left">
          <p class="section-label">In this section</p>
          <h1>${escapeHtml(slide.title)}</h1>
          ${renderLoCards(slide.los)}
        </div>
        <div class="section-right">
          ${renderMermaid(slide.mermaid)}
        </div>
      </div>
    `;
    return el;
  }

  if (slide.type === "end") {
    el.classList.add("section-slide", "theme-summary");
    el.innerHTML = `
      <div class="section-body end-layout">
        <div class="section-left">
          <p class="section-label">Summary</p>
          <h1>${escapeHtml(slide.title)}</h1>
          ${renderDefinition(slide.definition)}
          ${renderBullets(slide.bullets, "takeaway-list")}
        </div>
        <div class="section-right">
          ${renderMermaid(slide.mermaid)}
        </div>
      </div>
    `;
    return el;
  }

  const hasImage = Boolean(slide.image);
  if (hasImage) el.classList.add("slide-has-image");
  else el.classList.add("slide-text-only");

  const code = slide.code ? `<pre class="slide-code">${escapeHtml(slide.code)}</pre>` : "";

  if (slide.layout === "compare" && slide.compare) {
    el.classList.add("slide-compare");
    const takeaways = slide.bullets?.length
      ? `<div class="compare-takeaways">${slide.bullets
          .map((b) => `<div class="takeaway-chip">${escapeHtml(b)}</div>`)
          .join("")}</div>`
      : "";
    el.innerHTML = `
      <h1>${escapeHtml(slide.title)}</h1>
      ${renderDefinition(slide.definition)}
      <div class="compare-layout">
        <div class="compare-row">
          ${renderCompareColumn(slide.compare.left, "human")}
          <div class="compare-divider" aria-hidden="true"><span>VS</span></div>
          ${renderCompareColumn(slide.compare.right, "computer")}
        </div>
        ${slide.mermaid ? `<div class="compare-diagram">${renderMermaid(slide.mermaid)}</div>` : ""}
        ${takeaways}
      </div>
    `;
    return el;
  }

  const bullets = renderBullets(slide.bullets || []);
  const definition = renderDefinition(slide.definition);
  const image = hasImage
    ? `<div class="slide-image"><img src="${slide.image}" alt="" loading="eager" decoding="sync"></div>`
    : renderMermaid(slide.mermaid);

  el.innerHTML = `
    <h1>${escapeHtml(slide.title)}</h1>
    <div class="slide-body ${hasImage ? "has-image" : "has-diagram"}">
      <div class="slide-content">
        ${definition}
        ${bullets}
        ${code}
      </div>
      ${image}
    </div>
  `;
  return el;
}

function buildDeck(container, slides) {
  container.innerHTML = "";
  slides.forEach((slide, i) => container.appendChild(renderSlide(slide, i)));
}

async function renderMermaidIn(container) {
  if (typeof mermaid === "undefined") return;
  const nodes = container.querySelectorAll(".mermaid:not([data-processed])");
  if (!nodes.length) return;
  try {
    await mermaid.run({ nodes: Array.from(nodes) });
  } catch (e) {
    console.warn("Mermaid render:", e);
  }
}

function whenImagesLoaded(container) {
  const imgs = Array.from(container.querySelectorAll("img"));
  return Promise.all(
    imgs.map((img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise((resolve) => {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      });
    })
  );
}

function initPresenter(options = {}) {
  const { container, counterEl, mode = "single" } = options;
  const slides = container.querySelectorAll(".slide");
  let current = 0;

  async function show(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    if (counterEl) counterEl.textContent = `${current + 1} / ${slides.length}`;
    if (mode === "single") await renderMermaidIn(slides[current]);
  }

  if (mode === "single") {
    show(0);

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        show(current + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        show(current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        show(0);
      } else if (e.key === "End") {
        e.preventDefault();
        show(slides.length - 1);
      }
    });
  }

  let ready = Promise.resolve();
  if (mode !== "single") {
    slides.forEach((s) => s.classList.add("active"));
    ready = Promise.all([renderMermaidIn(container), whenImagesLoaded(container)]);
  }

  return {
    show,
    getCurrent: () => current,
    getTotal: () => slides.length,
    ready: () => ready,
  };
}
