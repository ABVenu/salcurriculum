# Lecture Script: AI Fundamentals — What It Is, How to Prompt It, What It Can Do

**Session duration (recorded clips):** 150 minutes  
**Audience:** Absolute beginners (Indian students; any background, not necessarily tech)  
**Type:** Facilitated theory with short paper/chat activities — no coding required  
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
There is **one student break** in the whole session: **5 minutes** (SAL allows 5–8; this plan uses **5** so the recorded total stays 150). Take it **inside the second teaching clip**, after the first 25 minutes of that clip (you will be past 60 minutes of student clock: 45 + 25). **Say clearly that this is a break** — stretch, water, step away from the screen. Put a **Break** slide and a **timer** on screen. Camera may be off during the break. Do not teach. Do not split into several breaks.

**Quiz-end rule (every quiz)**  
When the quiz is released and the **timer is on**: **camera off**. When the timer ends: **stop the recording**. Do not speak a closing line.

**Quiz file map (instructor only)**

| Teaching clip | Quiz file (5 questions, 5 min) | Revision clip | Quiz file (3 questions, 3 min) |
|---------------|--------------------------------|---------------|--------------------------------|
| First main clip | `Checkpoint Questions/Scene 1.0.md` | First revision clip | `Checkpoint Questions/Scene 1.1.md` |
| Second main clip | `Checkpoint Questions/Scene 2.0.md` | Second revision clip | `Checkpoint Questions/Scene 2.1.md` |
| Third main clip | `Checkpoint Questions/Scene 3.0.md` | Third revision clip | `Checkpoint Questions/Scene 3.1.md` |

---

## Clip plan (instructor only — never read scene IDs aloud)

| Clip | What you record | Minutes |
|------|-----------------|--------:|
| **1.1** | Core teaching — Understanding AI & LLMs | 40 |
| **1.1** | In-class quiz | 5 |
| **2.1** | Core teaching — GenAI + prompting (first half) | 25 |
| **2.1** | **Student break** — say it is a break; Break slide + timer on screen; camera may be off | 5 |
| **2.1** | Core teaching — RCF, prompt parts, repair (second half) | 20 |
| **2.1** | In-class quiz | 5 |
| **3.1** | Core teaching — real tasks + judgement | 25 |
| **3.1** | In-class quiz | 5 |
| **1.2** | Quick revision + quiz | 5 |
| **2.2** | Quick revision + quiz | 5 |
| **3.2** | Quick revision + quiz | 5 |
| **Doubt** | Chat support slide (once for the whole session) | 5 |
| | **Total** | **150** |

The second teaching half of clip **2.1** is **20 minutes** (not 25) so the student break and both quizzes still fit **150**. If you skip the break, put those 5 minutes back into the Role–Context–Format block.

---

# Scene 1.1 — Understanding AI & LLMs (45 minutes)

**Record as one clip:** 40 minutes teaching + 5 minutes quiz.  
**Camera:** Opening slide **off** for 20 seconds → then **on** until the quiz timer starts.

---

## 1. Open the session and why this lesson exists (5 minutes)

- Share the **title + agenda** slide. **Camera off. Hold 20 seconds.** Then **camera on**.
- Greet. Say: **“How are you?”** Pause for chat. Reply: **“I am doing fine.”** (Session 1 — do **not** ask about a previous session.)
- One-line promise: this is a **practical tool**, not magic and not a computer-science degree.
- Agenda in three phrases only (do not number them as scenes): what AI and language models are; how to brief a chat tool; how to stay in charge of the result.
- Tell the **Priya** story from the notes (90 seconds): vague prompt → fake “survey of 200 students” → roommate who **checks**. Point: same tool, different way of using it.
- **Thumbs up:** everyone can see your slides / notes images.
- Scan chat; answer anything about “do I need coding today?” — **No.**

**Bridge:** “You already use AI every day — most of it never prints the word AI on the screen.”

---

## 2. What AI is — and what already sits in your pocket (8 minutes)

- Screen-share **What Is Artificial Intelligence?** Official definition, then the **simple words** line. Do not lecture both as essays — one pass each.
- Show image **Everyday AI in your pocket** (face unlock, fingerprint, keyboard prediction, next-video).
- Flash the four-row table (keyboard / face / fingerprint / chatbot). One sentence per row.
- **Poll (chat):** “Name one AI behaviour you used today.” Validate keyboard, unlock, Maps, suggestions — even if the app never says “AI.”
- Three fences, spoken slowly: AI is **not** a person inside the computer; **confident language is not a verified fact**; AI is **not** “the internet” (search is an extra product feature).
- **Cold-call (1 student):** “Is face unlock writing a poem, or matching a pattern?”

**Bridge:** “If AI learns patterns, what is the other kind of software you still use for bookings and marks?”

---

## 3. Traditional software vs AI — including the railway clip (10 minutes)

- One line: **traditional software** = predefined rules; exact input → exact result or error.
- Vending-machine analogy from the notes (press 12, get a bottle).
- Screen-share the **Traditional software vs AI** table. Hit four rows only: how it works, input it likes, unknown situation, best at.
- **Play the E-Eye video** (opens in a new tab in the notes). If the file is long, play **60–90 seconds** that show recognition, then pause and narrate: a simple motion sensor lights up for *any* large object; E-Eye **learns a pattern** and can treat the shape as an elephant and alert. You still need exact tools (PNR lookup) beside this.
- Show image **traditional vs AI — railway**.
- **Cold-call:** “Why do we still use a calculator or a booking form if AI is ‘smart’?” Target answer: those jobs must be **exact**.
- Chat: “Banks cannot run on ‘maybe this is the PNR.’” Invite a thumbs up.

**Bridge:** “Let’s label real tools so this table is in your hands, not only on my slide.”

---

## 4. Activity — Label the Tool (4 minutes)

- Put the **eight-item list** from the notes on screen (calculator, Swiggy suggestion, UPI QR, chatbot resume, FASTag, face, fingerprint, keyboard).
- Start a **timer (3 minutes)**. Students mark Traditional / AI-powered / Both on paper or in a notes app. **Camera may be off** while the timer runs.
- Camera on. Recite the check from the notes (do not reopen a debate): 1 Traditional, 2 Both, 3 Traditional, 4 AI, 5 Traditional, 6–8 AI.
- **Thumbs up** if their sheet matches at least six of eight.

**Bridge:** “Chat tools are one kind of AI — the kind that works with language at a large scale. That is a large language model.”

---

## 5. Large language models — prediction, not a librarian (9 minutes)

- Unpack **Large / Language / Model** in three breaths (huge text; words not fingerprints; mathematical system, not a person).
- Name tools only as examples (ChatGPT, Gemini, Claude, Copilot) — not as a product pitch.
- Official + simple definition of **next-token prediction**. Keyboard word-bar = cousin; chat = same idea until a paragraph appears.
- Screen-share image **next word to paragraph**. Do **not** walk the rain-on-the-roof table cell by cell unless chat asks — one example continuation is enough.
- Three-column mix-up table: **Thinking** vs **Retrieval** vs **Prediction**. Spend the time here. This is the misconception that causes both fear and blind trust.
- **Hallucination** in one line: fluent, specific, **not true** — not lying with intent.
- **Pair-share (60 seconds):** “Prediction or retrieval — Google showing the official railway site vs a chatbot writing a poem.” Debrief in 20 seconds (retrieval vs prediction).
- Skip the toy Python block unless someone asks “is it a lookup table?” — then: “That snippet is **not** how a real chat model is built; it only shows ‘continue the sentence.’”

**Bridge:** “You will hear the word token on product screens. You need a working picture, not the engineering.”

---

## 6. Tokens — working idea only (4 minutes)

- Definition: a **token** is a small piece of text; **tokenization** is cutting text into those pieces.
- Roti / small bites image — internals **out of scope**. Say that out loud so nobody panics.
- Why the word exists for a **user**: pattern machine; clear short ask beats a two-page dump; “message too long” = a **limit**.
- Optional 45-second phone beat: type `On my way` and notice the suggested word — same family as next-piece guessing.
- **Thumbs up:** “I do **not** need to know how the cutting works to use AI.”

**Bridge:** “Quiz is next. Camera will go off when the timer starts — stay and attempt it.”

---

## 7. In-class quiz (5 minutes)

- Release **Scene 1.0** questions (five items).
- **Camera off** as soon as the timer is on.
- **Stop recording** when the timer ends. **No closing speech.**

---

# Scene 2.1 — Generative AI and prompting (55 minutes on the 150 plan)

**Record as one clip:** 25 minutes teaching → **5-minute student break** (announce it) → 20 minutes teaching → 5 minutes quiz.  
**Camera:** **On** from the first second (no opening-slide hold). Off during the **break** (optional) and when the quiz timer starts.

---

## 8. Generative AI vs recognition (8 minutes)

- Start camera on. One sentence of continuity (do **not** recap the whole first clip): “We know AI guesses the next piece of text. Now: which AI *creates*, and how do you brief it?”
- Screen-share **recognition vs generative** image (face unlock vs a new leave email).
- Official + simple GenAI definition. Family picture: AI umbrella → learning from data → Generative AI → chat/draft tools. **No** model sizes, hardware, or deep-learning architecture.
- Table: everyday AI (match / decide) vs GenAI (create). Risk-if-it-fails row: PIN backup vs fluent wrong text.
- **Chat poll:** “Face unlock — generative or recognition?” Wait. Confirm: **recognition**.
- Doubts to close: ChatGPT-like tools are **not** all of AI; unlock, maps, fraud flags were AI earlier.

**Bridge:** “Creating text got cheap. That changed who writes the first draft — not who owns the truth.”

---

## 9. How everyday life changed — and what did not (8 minutes)

- Show **first-draft life change** image. One line: blank page vs checked first draft; IRCTC still sits beside the chatbot.
- Markers, not a history exam: chess / recommendations / old voice assistants → around **2022** chat in a browser → habit of **ask first, then edit**.
- Walk one ordinary day from the notes (unlock, keyboard, college mail, evening booking) in **four sentences**.
- Two mini-tables spoken, not fully read: student/work/small-business **gains**; then **what did not change** (truth, permission, high-stakes, trust).
- **Cold-call:** “Who still owns the send button?”
- Skip the full “Life Before and After” notebook activity; assign it as a 30-second private think: one task from *their* week.

**Bridge:** “The brief you type is now a professional skill. That brief is called a prompt.”

---

## 10. What a prompt is — vague vs aimed (9 minutes)

- Official + simple definition. Shop-painter analogy (paint it nice vs colour, finish, deadline, photo).
- Rule: the model **cannot see unspoken goals**. Formal mail, 120 words — write that.
- Prompting is **specifying the task**, not cheating at thinking. First reply is a draft; **one revision** is normal.
- Contrast `Tell me about trees` vs the notes’ pollution / three bullets / school students version — **do not** type a live essay; show both lines on a slide.
- **Thumbs up:** “A vague prompt wastes the speed we just talked about.”

**Bridge (then announce the break):** “We will lock a three-part pattern after the break: who to be, what is going on, how the answer should look. This is a **break** for you — not a quiz.”

---

### Student break (5 minutes) — not a numbered teaching block

You should now be past **60 minutes** of student clock (45 + 25). **Tell students this is their break.** Do not call it a pause, a timer-only gap, or “stay on the call and listen.”

**Say this before you leave (camera still on):**

> This is a **five-minute break**. Stretch, drink water, step away from the screen if you need to. The timer is on the slide. We are **not** teaching and there is **no** quiz during this time. Please be back when the timer hits zero.

- Share a **Break** slide (title: **Break — 5 minutes**) with a **visible countdown timer**.  
- **Camera may be off** once the break has been announced.  
- Do not teach. Do not take new content doubts (chat can wait).  
- Same background when you return.

**Return line (camera on):** “Welcome back from the break. We brief the tool the way you would brief an intern — role, context, format.”

---

## 11. Role–Context–Format (10 minutes)

- Official + simple RCF. Senior-student briefing example from the notes (placement volunteer / 10-minute HR slot / numbered questions) — read **roles of the three parts**, not a long role-play.
- **Role** = hat, not magic. “Supreme Court lawyer” still does not replace legal advice.
- **Context** = what an intern would need, including facts the model cannot know, plus constraints (“do not invent statistics”).
- **Format** = shape (bullets, table, email). Skip format → you get an essay when you needed a checklist.
- Screen-share **prompt and check** image and the RCF flowchart (Role → Context → Format → draft → **you** review).
- Put **weak** `write a mail for leave` on screen, then the **RCF leave-mail** block from the notes. Do **not** read every line. Annotate four upgrades: who, dates/reason, what not to invent, exact shape.
- **Pair-share (90 seconds):** “Which of the three parts is missing most often in your own chats?” Hands: Role / Context / Format.

**Bridge:** “RCF is the skeleton. Three more pieces make it strong: specificity, constraints, and the output shape in more detail.”

---

## 12. Specificity, constraints, format — and repairing a vague prompt (10 minutes)

- **Specificity:** audience, goal, scope. Weak `tell me about marketing` vs a tight first-year example — one contrast only.
- **Constraints:** length, style, content bans, process (“if uncertain, say please verify”). Constraints give permission for **silence or a warning**.
- **Format:** list vs table vs WhatsApp plain text. If they will paste into chat apps, say “no markdown tables.”
- Flash the weak/strong three-row table. Do not invent a new case live unless you have 2 spare minutes.
- Extra habits in **four labels only** (no new software): **zero-shot**, **few-shot** (two to five samples), **step-by-step** for calculations, **self-check** as a second message. Skip reading the Gandhi Jayanti sample emails; point to that block in the notes for later.
- **Live repair (3 minutes):** take `make PPT` or `fix my English` from the notes’ activity. You rewrite **one** of them as RCF on screen (under 12 lines). Students type their version in chat or on paper. Cold-call **one** good line of context.
- Skip “what should I do in life” unless you are ahead — if you use it, force a **small weekend** frame, not destiny.

**Bridge:** “Quiz on prompting. Camera off when the timer starts.”

---

## 13. In-class quiz (5 minutes)

- Release **Scene 2.0** questions (five items).
- **Camera off.** Timer on. **Stop** when time ends. **No talk.**

---

# Scene 3.1 — Applying AI to real tasks (30 minutes)

**Record as one clip:** 25 minutes teaching + 5 minutes quiz.  
**Camera:** **On** from the start; off when the quiz timer starts.

---

## 14. What AI can help with — a map, not a promise (7 minutes)

- Continuity in one line: “You can brief the tool. Now: where it saves time, where it is shaky, and how you check a reply.”
- Screen-share the **task family** table. Walk **four families** live (writing, study, research first pass, analysis of *given* text). Name the rest (planning, language/coding, brainstorming) as a flash.
- Repeat the mantra: **draft partner**. You remain the author.
- PDF summary only if the tool **actually received** the file — skim original for names, dates, numbers.
- Job fear, one line from the notes: nearer risk is being **slower than people who can brief and check**.
- Skip the full “Map Your Week” write-up; **chat:** “One task from the next seven days — draft, brainstorm-only, or without AI?” Read two replies.

**Bridge:** “Same model can be excellent at one job and dangerous at another. Failure cost and real data decide which.”

---

## 15. Well-suited, unreliable, unsuitable (10 minutes)

- Screen-share **well / verify / unsuitable** image.
- **Well:** first drafts when **you** supply facts; rewrite; summarise text **in the prompt**; practice questions; option lists; low-cost recognition (unlock) with a PIN backup.
- **Unreliable:** live facts; citations and neat-looking maths; personal/local data never given. Workaround: “Give me a template; I fill the real number.”
- **Unsuitable:** high-stakes advice you will act on blindly; cheating and secrets (passwords, Aadhaar, OTPs, unpublished data); harm.
- Table of five situations — read **Use AI?** and **Better move** for two rows live (reminder mail vs attendance portal); students infer the rest.
- Vocabulary lock: **unreliable** = you may use it if you **verify**; **unsuitable** = another system, a professional, or do not paste that.
- **Activity (3 minutes, timer):** Sort the six-item list from the notes (MCQs from a pasted chapter, job-offer “yes,” packing list, tomorrow’s exam paper, rephrase own paragraph, paste customer data). Camera may be off. Recite typical answers quickly.

**Bridge:** “Speed without a quality gate is Priya’s fake survey. Last habit: evaluate before you paste, send, or submit.”

---

## 16. Evaluate output — accuracy, relevance, fitness (8 minutes)

- Official + simple **output evaluation**. Intern metaphor: helpful, fast, capable of confident mistakes.
- **Accuracy:** circle numbers, dates, names, URLs, laws, quotes → **primary source**. Over-specific ≠ true.
- **Relevance:** this request vs a neighbouring one; ignored length; wrong audience.
- **Fitness:** would HOD/manager/parent read this? Cut stereotypes; discard pressure advice.
- Five-point checklist from the notes (source, verify, voice, rules, harm) — one breath each.
- **Activity (3 minutes):** read the **Class 6 / states** fake reply from the notes. Students mark accurate / outdated / wrong, relevance, next move. You do **not** need the official count on screen — the point is **catch the helpful-sounding error** and look it up later.
- **Thumbs up:** “I will not send a number I cannot source.”

**Bridge:** “Quiz on judgement. Camera off when the timer starts.”

---

## 17. In-class quiz (5 minutes)

- Release **Scene 3.0** questions (five items).
- **Camera off.** Timer on. **Stop** when time ends. **No talk.**

---

# Scene 1.2 — Revision (5 minutes)

**Camera on** from the start.  
**Open with this line (do not use scene IDs):**

> Still some students have issues in the concept. I will help you by revising the concepts.

- **Already on screen:** all **Scene 1.1** quiz items with options (three questions). Leave them visible while you revise.
- **Revision (about 2 minutes)** — four bullets only, pointing at the screen:
  1. AI = pattern software; traditional software = exact rules or error.
  2. A phone often uses **both** (balance from a database vs fingerprint match).
  3. An LLM **predicts** the next piece of text; it is not a librarian and not a human mind.
  4. Tokens = small bites of text; “too long” means a **limit**, not a tired person.
- Release the quiz. **Allot 3 minutes.** Camera **off** when the timer is on. **Stop** at zero. **No talk.**

---

# Scene 2.2 — Revision (5 minutes)

**Camera on.** Same opening line as the previous revision clip (do not change the wording).

- **On screen:** all **Scene 2.1** quiz items with options.
- **Revision (about 2 minutes):**
  1. Generative AI **creates**; unlock and spam filters **recognise or decide**.
  2. Life change = faster first draft; truth and send-button still yours.
  3. Prompt = the brief. RCF = who to be, situation/limits, shape of the reply.
  4. Specificity / constraints / format; two samples = **few-shot**; a vague three-word prompt must be repaired, not repeated.
- Quiz **3 minutes**. Camera off. Silent stop.

---

# Scene 3.2 — Revision (5 minutes)

**Camera on.** Same opening line.

- **On screen:** all **Scene 3.1** quiz items with options.
- **Revision (about 2 minutes):**
  1. AI is a **draft partner** for writing, study, first-pass research, and planning — you still own the result.
  2. **Unreliable** (live prices, local data) → verify. **Unsuitable** (secrets, high-stakes, cheating) → other system or do not paste.
  3. Check **accuracy** against a primary source, **relevance** to *this* ask, **fitness** (bias, voice, rules).
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
| 1 | Scene **1.1** | Core teaching — AI, traditional vs AI, LLMs, prediction, tokens | 40 |
| 2 | Scene **1.1** | In-class quiz (`Scene 1.0.md`) | 5 |
| 3 | Scene **2.1** | Core teaching — GenAI, life change, what a prompt is | 25 |
| 4 | Scene **2.1** | **Student break** — announce it; Break slide + timer; camera may be off | 5 |
| 5 | Scene **2.1** | Core teaching — RCF, prompt components, repair | 20 |
| 6 | Scene **2.1** | In-class quiz (`Scene 2.0.md`) | 5 |
| 7 | Scene **3.1** | Core teaching — task map, well / unreliable / unsuitable, evaluation | 25 |
| 8 | Scene **3.1** | In-class quiz (`Scene 3.0.md`) | 5 |
| 9 | Scene **1.2** | Revision + quiz (`Scene 1.1.md`) | 5 |
| 10 | Scene **2.2** | Revision + quiz (`Scene 2.1.md`) | 5 |
| 11 | Scene **3.2** | Revision + quiz (`Scene 3.1.md`) | 5 |
| 12 | **Doubt resolution** | Opening line + 5-minute support slide | 5 |
| | | **Total** | **150** |

**Check:** 40+5 + 25+5+20+5 + 25+5 + 5+5+5+5 = **150**.

Wall clock for students who take the break is the same 150, because the **student break** is row 4. If you ever take an 8-minute break, cut 3 minutes from block **12** (constraints/repair) so the file still lands near 150.

---

### Timing flex

- **If behind in 1.1:** Cut the E-Eye clip to 60 seconds of playback + narration; skip the phone `On my way` beat; keep the mix-up table (thinking / retrieval / prediction) — that is non-negotiable.
- **If behind in 2.1 first half:** Drop the ordinary-day walk-through; keep GenAI vs recognition and “what did not change.”
- **If behind in 2.1 second half:** Show the leave-mail RCF on screen without reading it; repair **one** vague prompt only; skip extra habits except few-shot vs zero-shot in one sentence.
- **If behind in 3.1:** Skip “Map Your Week” chat; keep well / unreliable / unsuitable and the five-point checklist. The fake states reply can be 90 seconds instead of 3 minutes.
- **If ahead:** Run the notes’ “Prediction vs Retrieval” five-item oral sort in 1.1, or repair a second vague prompt (`fix my English`) in 2.1.
- **If chat explodes during a main clip:** Take **one** conceptual doubt live; park “which tool should I download?” for after recording. Do not extend a clip past the table.
- **If a quiz platform is slow:** Still **camera off** at timer start; do not fill the five minutes with extra teaching (SAL end rule).
