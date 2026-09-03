# Lecture Script: Building a Product with AI - Part 1: From Idea to Prototype

**Session duration (recorded clips):** 150 minutes  
**Audience:** Absolute beginners (Indian students; any background, not necessarily tech)  
**Type:** Facilitated theory with short paper / chat / website-builder activities — no coding required  
**Source of truth for content:** `Lecture Notes.md`  
**In-class quizzes:** `Checkpoint Questions/` (see each clip)

---

**How to use this file**  
This file is for **timing, camera, and facilitation only**. It is not a second textbook. Definitions, tables, images, and full examples stay in the **Lecture Notes** (and your slides). Teach from the notes; use this script to know *what the room is doing* and *when the clip ends*.

**Do not say on camera or in chat**

- Scene IDs such as 1.1, 1.2, 2.1, subscene, or “clip two.”
- Routing codes: do **not** ask anyone to type `1`, `0`, `true`, `false`, or yes/no codes in chat.
- Organisation names or logos (including in slides).
- The lecture-notes file, GitHub, or this script on screen.

**Interactive recording (every teaching clip)**  
Feel like a live class. Read chat. Cold-call. Ask for thumbs up. Resolve topic doubts in the moment. Keep annotation ready (arrows, circles). Hide date and time on the laptop. Same outfit, hairstyle, and background for the **whole** recording day — record all clips in one go.

**Break rule (not a numbered teaching block)**  
There is **one student break** in the whole session: **5 minutes** (SAL allows 5–8; this plan uses **5** so the recorded total stays 150). Take it **inside the second teaching clip**, after the first 25 minutes of that clip (you will be past 60 minutes of student clock: 40 + 25). **Say clearly that this is a break** — stretch, water, step away from the screen. Put a **Break** slide and a **timer** on screen. Camera may be off during the break. Do not teach. Do not split into several breaks.

**Quiz-end rule (every quiz)**  
When the quiz is released and the **timer is on**: **camera off**. When the timer ends: **stop the recording**. Do not speak a closing line.

**Quiz file map (instructor only)**

| Teaching clip | Quiz file (5 questions, 5 min) | Revision clip | Quiz file (3 questions, 3 min) |
|---------------|--------------------------------|---------------|--------------------------------|
| First main clip | `Checkpoint Questions/Scene 1.1.md` | First revision clip | `Checkpoint Questions/Scene 1.2.md` |
| Second main clip | `Checkpoint Questions/Scene 2.1.md` | Second revision clip | `Checkpoint Questions/Scene 2.2.md` |
| Third main clip | `Checkpoint Questions/Scene 3.1.md` | Third revision clip | `Checkpoint Questions/Scene 3.2.md` |

---

## Clip plan (instructor only — never read scene IDs aloud)

| Clip | What you record | Minutes |
|------|-----------------|--------:|
| **1.1** | Core teaching — idea, stress-test, value line | 35 |
| **1.1** | In-class quiz | 5 |
| **2.1** | Core teaching — wireframe, four bands, CTA (first half) | 25 |
| **2.1** | **Student break** — say it is a break; Break slide + timer on screen; camera may be off | 5 |
| **2.1** | Core teaching — website builder, waitlist, copy and visuals (second half) | 25 |
| **2.1** | In-class quiz | 5 |
| **3.1** | Core teaching — good enough, testable vs polished, feedback plan | 25 |
| **3.1** | In-class quiz | 5 |
| **1.2** | Quick revision + quiz | 5 |
| **2.2** | Quick revision + quiz | 5 |
| **3.2** | Quick revision + quiz | 5 |
| **Doubt** | Chat support slide (once for the whole session) | 5 |
| | **Total** | **150** |

The second teaching half of clip **2.1** is **25 minutes**. Scene 2 in the notes is longer than this clip; the paper wireframe happens **before** the break, and the live builder work happens **after**. If you skip the break, put those 5 minutes back into the website-builder block.

---

# Scene 1.1 — Idea generation and refinement (40 minutes)

**Record as one clip:** 35 minutes teaching + 5 minutes quiz.  
**Camera:** Opening slide **off** for 20 seconds → then **on** until the quiz timer starts.

---

## 1. Open the session and why this lesson exists (5 minutes)

- Share the **title + agenda** slide. **Camera off. Hold 20 seconds.** Then **camera on**.
- Greet. Say: **“How are you?”** Pause for chat. Reply: **“I am doing fine.”** Then: **“How was the previous session?”** Pause. One line of continuity: last time you learned what AI and language models are, how they predict text, and how to brief them with **Role–Context–Format** — and to check a reply before you use it.
- One-line promise: today you put that skill on a **product path** — idea → one-line offer → a page you can show. Not a finished business. Not a full product.
- Agenda in three phrases only (do not number them as scenes): stress-test an idea; put it on one page; decide if that page is good enough to test later.
- Tell the **Kabir / Meera** story from the notes (90 seconds): `make a laundry app` → 12-feature wishlist and logos never shown vs one page, three steps, a waitlist button. Point: same tool, **size of the first version** was different.
- Fence, spoken once: sharing the page, collecting replies, and changing the product is **upcoming work**. Today you stop at a testable prototype and a written plan.
- **Thumbs up:** everyone can see your slides / notes images.
- Scan chat; answer “do I need to write a program today?” — **No.** Website builder only.

**Bridge:** “Volume from a chatbot is easy. The skill is turning a vague wish into a concept a stranger can understand.”

---

## 2. What counts as a product idea (8 minutes)

- Screen-share **What Counts as a Product Idea?** Official definition, then the **simple words** line. One pass each.
- Four-way mix-up from the notes: **complaint / theme / feature / product idea**. Flash the four-row table. One sentence per row.
- Show image **What counts as a product idea** (four boxes). Annotate the last box: named user + named pain + something you can show this week.
- Name **WashQ** as the running teaching example (hostel laundry slot). Students may use **their own** idea in activities.
- Put the empty **idea card** on screen. They will fill it by the end of this clip. Show the filled WashQ idea-card image for 15 seconds — “this is the destination, not where we start.”
- Doubt to close: a WhatsApp group is often today’s **workaround**, not the product. The idea must say what is still painful.
- **Cold-call (1 student):** “Is ‘college life is messy’ a product idea?” Target: no — it is a theme or a complaint.

**Bridge:** “A chatbot can list twenty ideas in a minute. You still have to pick one and make it sharper.”

---

## 3. Brainstorm, filter, then refine (8 minutes)

- Official + simple **AI-assisted idea generation**. Step one is volume. Step two is **you** filter. Step three is a tighter prompt on the winner.
- Remind: use **Role–Context–Format** from the previous lesson so the model does not invent a startup pitch or survey percentages.
- Screen-share the **volume prompt** from the notes. Do **not** type a live dump of eight ideas unless you are ahead — show a sample table and how a careful student marks Keep / No.
- Filter questions, spoken slowly: real person this week? showable on a website builder in one sitting? willing to show a rough version to a roommate?
- Refine prompt: what the first version **does**, what it **must not** do, one risk if the idea is wrong. WashQ must-not list: payments, riders, ratings, a city map.
- If the reply invents “87% of hostels,” **delete that line**. Same check as last time.
- **Chat poll:** “Who chooses the idea — you or the model?” Wait. Confirm: **you**.

**Bridge:** “Open a chat tool. You will generate a list, then kill most of it.”

---

## 4. Activity — Brainstorm Then Pick One (5 minutes)

- Put the activity steps on screen. Setting they know: hostel, commute, mess, library, or a family shop — or WashQ if they want to follow you.
- Start a **timer (3 minutes)**. Students run the volume prompt, copy ideas, cross out anything that needs a team, a payment gateway, or a month. Circle **one**. **Camera may be off** while the timer runs.
- Camera on. They do **not** need to paste eight ideas in chat. Cold-call **one** circled idea: “Who is the user in one breath?”
- **Thumbs up** if they have one circled idea on paper or in a notes app.

**Bridge:** “A refined paragraph can still be fluffy. Next we try to break the idea with three questions.”

---

## 5. Stress-test — target user, problem, why now (5 minutes)

- Official + simple **idea stress-testing**. You question the idea the way you would question a confident chatbot reply.
- Show image **Stress-test the idea** (three checks). Walk **weak vs strong** under each column. Do not read the whole WashQ table cell by cell.
- **Target user** is not “students” or “everyone with a phone.” **Problem** is a real moment plus today’s workaround. **Why now** is why that workaround is failing *this year* — “because AI exists” is not a why now.
- Sceptical-roommate prompt from the notes: on screen, not a live 20-line role-play. Point: praise is not a test.
- Skip the full “Repair This Fluffy Idea” write-up live. **Chat (30 seconds):** rewrite `An AI-powered smart campus ecosystem for all students` into user / problem / first version in their head. Read two replies. If they cannot fill the blanks, it was a theme.
- **Cold-call:** “Why is ‘because AI exists’ a weak why now?”

**Bridge:** “If the idea survives, you still need one sentence a stranger can put at the top of a page.”

---

## 6. One-line value proposition (4 minutes)

- Official + simple **value proposition**. Skeleton on screen: `[Product] helps [user] [do this job] without [this pain].`
- Show image **One-line value proposition** (three parts + reject jargon).
- Read the **kept** WashQ line once. Flash the reject table (ecosystem / Fast Easy Modern / revolutionary) — do not debate slogans.
- Students write **one** line for their circled idea (or copy WashQ). No live generation of five AI options unless you have spare time — the notes prompt is for them after class if needed.
- **Thumbs up:** “A classmate could repeat my line after hearing it once.”
- Point at the mermaid path: raw wish → brainstorm → you pick → stress-test → one-line value. That sentence becomes the page next.

**Bridge:** “Quiz is next. Camera will go off when the timer starts — stay and attempt it.”

---

## 7. In-class quiz (5 minutes)

- Release **Scene 1.1** questions (five items).
- **Camera off** as soon as the timer is on.
- **Stop recording** when the timer ends. **No closing speech.**

---

# Scene 2.1 — Building the prototype (60 minutes on the 150 plan)

**Record as one clip:** 25 minutes teaching → **5-minute student break** (announce it) → 25 minutes teaching → 5 minutes quiz.  
**Camera:** **On** from the first second (no opening-slide hold). Off during the **break** (optional) and when the quiz timer starts.

---

## 8. Wireframe, prototype, landing page — not a full product (8 minutes)

- Start camera on. One sentence of continuity (do **not** recap the whole first clip): “You have a one-line offer. Now it has to become something a person can **see**.”
- Three definitions, one breath each: **prototype**, **wireframe**, **landing page**. Paper-menu / chalk-on-shutter / fest-poster examples from the notes — do not extend them into stories.
- Screen-share the artefact table. Hit three rows only: wireframe = boxes; landing page = a real link; full product = login, payments, admin — **out of scope**.
- Show image **From paper plan to a page you can share** (four bands + scope cards). Annotate **Out of scope here** on the full-product card.
- Fence: you do **not** write programs. A **website builder** works like a slide: type, click Publish. **AI-assisted** means a chat tool drafts words; you still choose structure and facts.
- **Chat poll:** “Is a 20-page company site the first prototype?” Confirm: **no**.

**Bridge:** “The visitor notices three things first: the shout at the top, the one-breath explanation, and the button.”

---

## 9. Four bands — headline, value, how it works, CTA (9 minutes)

- Official + simple for **headline**, **value line on the page**, **how it works**, **call-to-action**. One example each from the notes (WashQ is fine here).
- Show the four-band mermaid or the **four bands on a phone** image. First view on a phone: headline, value, CTA if you can; three steps can sit just below.
- One primary CTA. Extra buttons split attention. Dead **Learn more** is not a CTA.
- Flash the weak/strong CTA table. Do not rewrite all four live unless you are ahead — pick **Click here** → **Join the waitlist** as the one you annotate.
- Optional extras stay short: “who this is for / is not.” Fake “200 students already joined” is the same class of error as last time’s invented survey.
- **Cold-call:** “How many primary buttons should the first page have?” Target: **one**.

**Bridge:** “Before any website, you will draw the page. Boxes only — no logo.”

---

## 10. Activity — Box the Page on Paper (8 minutes)

- Put the four labels on screen: Headline / Value line / Three steps / Button.
- Start a **timer (4 minutes)**. Students draw a tall phone rectangle and label the four bands for **their** idea (or WashQ). No decoration. **Camera may be off**.
- Camera on. If time remains, 90-second **Rewrite These CTAs** from the notes (`Click here`, `Submit`, `Learn more`, `Get started`) — under four words, names the job. Skip if the room is slow; assign it as a private think.
- **Thumbs up** if they have four labeled bands on paper.
- Scan chat for “can I add Login?” — **Not on page one.**

**Bridge (then announce the break):** “After the break we paste those four bands into a real website builder and attach a tiny waitlist. This is a **break** for you — not a quiz.”

---

### Student break (5 minutes) — not a numbered teaching block

You should now be past **60 minutes** of student clock (40 + 25). **Tell students this is their break.** Do not call it a pause, a timer-only gap, or “stay on the call and listen.”

**Say this before you leave (camera still on):**

> This is a **five-minute break**. Stretch, drink water, step away from the screen if you need to. The timer is on the slide. We are **not** teaching and there is **no** quiz during this time. Please be back when the timer hits zero.

- Share a **Break** slide (title: **Break — 5 minutes**) with a **visible countdown timer**.  
- **Camera may be off** once the break has been announced.  
- Do not teach. Do not take new content doubts (chat can wait).  
- Same background when you return.

**Return line (camera on):** “Welcome back from the break. Words first, then layout — we put the four bands on a page people can open.”

---

## 11. Website builders — words first, then layout (10 minutes)

- Two layers from the notes: **Layer 1 words** (any chat tool), **Layer 2 layout** (one builder). Decorating an empty story is the trap.
- Screen-share the copy prompt. Show the **raw AI vs edited** four-row table (next-gen / seamlessly / commence → plain lines). You still delete invented counts.
- Official + simple **website builder**. Show image **website builders** (Google Sites, Canva, Carrd, Durable; Google Forms behind the button).
- **Google Sites** is the default starting site (`sites.google.com`). Canva / Carrd / Durable are fine if they can log in today. They pick **one**.
- Four steps, same in every tool: blank one-page site → four bands as text boxes → button points at something real → publish and open on a **phone**.
- If Durable invents pricing, fake team, blog — **delete** those sections.
- **Cold-call:** “Is Google Forms the landing page?” Target: **no** — it is the button target.

**Bridge:** “A pretty page with a dead button is not testable. The waitlist is part of the prototype.”

---

## 12. Tiny waitlist, phone check, assemble (8 minutes)

- Three fields only from the notes: name; hostel block / floor (or local context); “I want this — yes / no.” Not Aadhaar, passwords, parent numbers, payments.
- Phone preview checklist: headline readable without pinch-zoom; **one** obvious button that opens; three steps without a novel; no invented numbers.
- **Activity: Assemble the Four Bands** — start a **timer (4 minutes)**. Students open **Google Sites** (or their chosen builder) and paste headline, value line, three steps, CTA. Connecting the form can finish after class the same day if the builder is slow; a clear photo of the paper wireframe plus a form link still counts as a first prototype **only if** they finish the live page the same day. **Camera may be off**.
- Camera on. You do **not** live-build a perfect WashQ site. Spot-check chat: “Does your button open anything?”
- **Thumbs up** if they have a published link **or** four bands typed and a form started.

**Bridge:** “The skeleton is up. Supporting lines and one visual make the page easier to scan — they must not steal the headline’s job.”

---

## 13. Supporting copy and visuals (7 minutes)

- Official + simple **supporting copy**. Who this is for / is not. FAQ as **clarity**, not a sales script. Delete “live in 40 hostels” if they did not give that fact.
- Official + simple **visual direction**: subject, setting, what to avoid. Prefer a **photo they can take** or a **3-icon row**. Generated pictures are placeholders — not fake customers.
- Flash the visual-choice table. Skip a live image-generator demo.
- Skip the full Copy + One Visual Plan write-up if behind; **chat:** “Photo I can take today, or three icons?” Read two replies.
- Fence: no second page. No testimonials you invented.
- **Thumbs up:** “I will not put a number on the page that I did not supply.”

**Bridge:** “Quiz on the prototype. Camera off when the timer starts.”

---

## 14. In-class quiz (5 minutes)

- Release **Scene 2.1** questions (five items).
- **Camera off.** Timer on. **Stop** when time ends. **No talk.**

---

# Scene 3.1 — Evaluating the prototype (30 minutes)

**Record as one clip:** 25 minutes teaching + 5 minutes quiz.  
**Camera:** **On** from the start; off when the quiz timer starts.

---

## 15. Good enough to test (8 minutes)

- Continuity in one line: “You have a page. The question is not ‘does it look expensive?’ It is ‘can this version teach you something if you share it later?’”
- Official + simple **good enough to test**. Roommate who never heard the idea can explain it back and tap something.
- Screen-share the five-row gate table. Walk **pass vs fail** for offer, user, next step, you can learn, scope is small. Do not role-play a full roommate interview — sharing is upcoming.
- Failed WashQ page from the notes, as a **list** (Welcome headline, Login + Shop, fake stars, Aadhaar field). Fixing it is rewrite and cut — not a new theme.
- Skip a full timed Roommate Read-Back. **30-second private think:** open the link in their head, say the offer without the notebook. Thumbs up if they could.
- **Cold-call:** “If friends clap at the template, is that good enough?” Target: **no** — a **new** person must understand.

**Bridge:** “Polished and testable look similar on a laptop. They are not the same thing.”

---

## 16. Polished vs testable (8 minutes)

- Official + simple contrast. Polished = extra work that does **not** change first learning. Testable = clear, small, reaction can be recorded.
- Show image **testable versus polished-but-late**.
- Screen-share the signal table. Park list from the notes: logo animation, login, extra pages, UPI, dark mode. **Login is a trap** — you learn signup, not the offer.
- Mermaid on screen if it is already in the slide: offer clear? button works? then ready to test. If not, rewrite or fix the link — do not add features to hide.
- **Activity (2 minutes, timer):** Sort three “want to add” items as **Needed for understanding** vs **Decoration**. Camera may be off. Recite: working form and readable headline stay; custom logo animation parks.
- If ahead, flash the nine-item sort from the notes (typical: 1, 3, 5, maybe 7 need-to-test). If behind, skip it.
- **Chat poll:** “Should the first page require an account?” Confirm: **no**.

**Bridge:** “If you share first and decide later what to ask, you will only collect compliments. Write the plan now.”

---

## 17. Planned feedback and simple counts (9 minutes)

- Official + simple **planned feedback**. You are **defining the plan**. You are not running interviews, not generating fake users, and not changing the product yet.
- Show image **Good enough to test, then plan what to learn** (gate + three layers).
- Three layers: **Understanding / Desire / Confusion**. Sample questions from the notes. Weak versions to avoid: “Cool page, right?”, feature shopping, fake love for an ‘ecosystem’.
- Counts table: opens, form fills, yes/maybe/no — **not** proof of a paying business.
- Put the empty **collection sheet** on screen. Students copy it. **Activity (3 minutes, timer):** fill prototype name, one-liner, three first names they *could* show (do not show yet), three questions, counts they will tally, what they will not ask and will not collect. **Camera may be off**.
- Camera on. Recite **Mark These Questions** quickly if you have 60 seconds (Keep 2, 4, 5; Drop 1 and 6; Drop or rewrite 3). Otherwise assign it as a private check.
- Fence: upcoming work uses this sheet. This lesson stops here.

**Bridge:** “Quiz on evaluating the prototype. Camera off when the timer starts.”

---

## 18. In-class quiz (5 minutes)

- Release **Scene 3.1** questions (five items).
- **Camera off.** Timer on. **Stop** when time ends. **No talk.**

---

# Scene 1.2 — Revision (5 minutes)

**Camera on** from the start.  
**Open with this line (do not use scene IDs):**

> Still some students have issues in the concept. I will help you by revising the concepts.

- **Already on screen:** all **Scene 1.2** quiz items with options (three questions). Leave them visible while you revise.
- **Revision (about 2 minutes)** — four bullets only, pointing at the screen:
  1. A **product idea** = named user + named pain + a small offer you can show. A complaint, a theme, or a feature is not that.
  2. AI gives **volume**; **you** filter and pick. Refine names the first version and what it must **not** do.
  3. **Stress-test** = target user, problem, why now. “Everyone” and “because AI exists” fail.
  4. A **value proposition** names who, the job, and the pain avoided — not jargon.
- Release the quiz. **Allot 3 minutes.** Camera **off** when the timer is on. **Stop** at zero. **No talk.**

---

# Scene 2.2 — Revision (5 minutes)

**Camera on.** Same opening line as the previous revision clip (do not change the wording).

- **On screen:** all **Scene 2.2** quiz items with options.
- **Revision (about 2 minutes):**
  1. **Prototype** = early version to show and learn. **Wireframe** = boxes. **Landing page** = one link, one action. Full product is out of scope.
  2. Four bands: headline, value line, how it works, **one** working CTA.
  3. **Website builder** = type into boxes and Publish (Google Sites is the default start). Words first, then layout. Tiny waitlist behind the button — not Aadhaar.
  4. Supporting copy and visuals must not invent counts; edit jargon; visual direction = subject, setting, what to avoid.
- Quiz **3 minutes**. Camera off. Silent stop.

---

# Scene 3.2 — Revision (5 minutes)

**Camera on.** Same opening line.

- **On screen:** all **Scene 3.2** quiz items with options.
- **Revision (about 2 minutes):**
  1. **Good enough to test** = a new person understands the offer, sees a next step, and you can record a reaction — not “friends clapped.”
  2. **Testable** beats early polish. A dead button fails. A login wall tests signup, not the offer.
  3. **Plan** understanding, desire, and confusion **before** anyone sees the page. Opens and form fills are not proof of a paying business.
- Quiz **3 minutes**. Camera off. Silent stop.

---

# Doubt resolution (5 minutes) — once for the whole session

Record **only one** doubt clip for the entire session (not once per topic).

1. **Camera on.** Say this (do not use scene IDs):

   > Since still some students need some support as you didn’t pass the quiz — no issues. The chat support is open. Please ask doubts and get them clarified.

2. **Close the camera.**
3. Keep the **doubt resolution time** slide on screen.
4. End the recording after **5 minutes**. Do not add a closing speech.

---

# 150-minute recording table

| # | Clip (instructor ID) | What happens | Minutes |
|---|----------------------|--------------|--------:|
| 1 | Scene **1.1** | Core teaching — product idea, brainstorm/refine, stress-test, value line | 35 |
| 2 | Scene **1.1** | In-class quiz (`Scene 1.1.md`) | 5 |
| 3 | Scene **2.1** | Core teaching — prototype vs wireframe vs landing page, four bands, paper wireframe | 25 |
| 4 | Scene **2.1** | **Student break** — announce it; Break slide + timer; camera may be off | 5 |
| 5 | Scene **2.1** | Core teaching — website builder, waitlist, supporting copy and visuals | 25 |
| 6 | Scene **2.1** | In-class quiz (`Scene 2.1.md`) | 5 |
| 7 | Scene **3.1** | Core teaching — good enough, polished vs testable, planned feedback | 25 |
| 8 | Scene **3.1** | In-class quiz (`Scene 3.1.md`) | 5 |
| 9 | Scene **1.2** | Revision + quiz (`Scene 1.2.md`) | 5 |
| 10 | Scene **2.2** | Revision + quiz (`Scene 2.2.md`) | 5 |
| 11 | Scene **3.2** | Revision + quiz (`Scene 3.2.md`) | 5 |
| 12 | **Doubt resolution** | Opening line + 5-minute support slide | 5 |
| | | **Total** | **150** |

**Check:** 35+5 + 25+5+25+5 + 25+5 + 5+5+5+5 = **150**.

Wall clock for students who take the break is the same 150, because the **student break** is row 4. If you ever take an 8-minute break, cut 3 minutes from block **13** (copy and visuals) so the file still lands near 150.

---

### Timing flex

- **If behind in 1.1:** Skip live brainstorming in the chat tool; they circle WashQ. Keep the four-way idea mix-up and the three stress-test checks — those are non-negotiable. Cut the fluffy-ecosystem chat to one sentence.
- **If behind in 2.1 first half:** Drop the full CTA rewrite activity; keep four bands and “one working button.” Paper wireframe can be 2 minutes instead of 4.
- **If behind in 2.1 second half:** You screen-share Google Sites and paste four bands; students finish publish + form after the clip the same day. Keep “dead button is not testable” and the three waitlist fields. Skip visual-generator talk except “photo or three icons.”
- **If behind in 3.1:** Skip the nine-item sort and the Keep/Rewrite/Drop list; keep the five-row good-enough table, login-as-trap, and the three feedback layers. Collection sheet can be 90 seconds of copying, not a full fill-in.
- **If ahead:** Run Repair This Fluffy Idea on screen in 1.1; live-edit one AI headline in 2.1; run Sort These Nine Items in 3.1.
- **If chat explodes during a main clip:** Take **one** conceptual doubt live (idea vs feature, one CTA, good enough vs pretty). Park “which paid Canva plan?” and “how do I get users next week?” — the second is upcoming work. Do not extend a clip past the table.
- **If a quiz platform is slow:** Still **camera off** at timer start; do not fill the five minutes with extra teaching (SAL end rule).
- **If the builder login fails for many students:** Photograph the paper wireframe, open Google Forms, and say the live page is the same-day finish. Do not switch the lesson into HTML or code.
