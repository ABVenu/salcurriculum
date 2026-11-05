# Lecture Script: AI for Everyday Work — Analytics & Decision-Making

**Session duration (recorded clips):** 150 minutes  
**Audience:** Students from any background (not necessarily tech), who have already completed the AI Fundamentals and prototyping sessions  
**Type:** Facilitated theory with hands-on AI-chat prompting exercises — no coding, no specialist analytics tool, no paid AI features required  
**Source of truth for content:** `Lecture Notes.md`  
**In-class quizzes:** `Checkpoint Questions/` (see each clip)  
**Data resources used live:** `resources/*.csv` (paste into the class's AI chat tool on screen)

---

**How to use this file**  
This file is for **timing, camera, and facilitation only**. It is not a second textbook. Definitions, tables, and full prompt examples stay in the **Lecture Notes** (and your slides). Teach from the notes; use this script to know *what the room is doing* and *when the clip ends*.

**Do not say on camera or in chat**

- Scene IDs such as 1.1, 1.2, 2.1, subscene, or "clip two."
- Routing codes: do **not** ask anyone to type `1`, `0`, `true`, `false`, or yes/no codes in chat.
- Organisation names or logos (including in slides).
- The lecture-notes file, GitHub, or this script on screen.
- The name of any specific paid or specialist analytics product. This session teaches the skill using a general AI chat tool only.

**Interactive recording (every teaching clip)**  
Feel like a live class. Read chat. Cold-call. Ask for thumbs up. Resolve topic doubts in the moment. Keep annotation ready (arrows, circles). Hide date and time on the laptop. Same outfit, hairstyle, and background for the **whole** recording day — record all clips in one go.

**Live AI chat window**  
Have a real AI chat tool open in a second window throughout. When an exercise says "paste this table," actually paste it on screen and let the class watch the reply generate — do not pre-record a fake reply and read it out. If the live reply differs slightly from the notes' example reply, that is a *good* teaching moment: read it together and check it against the answer key.

**Break rule (not a numbered teaching block)**  
There is **one student break** in the whole session: **5 minutes**. Take it **inside the second teaching clip**, after the first 25 minutes of that clip (you will be past 65 minutes of student clock: 45 + 25... i.e. roughly 70 minutes in). **Say clearly that this is a break** — stretch, water, step away from the screen. Put a **Break** slide and a **timer** on screen. Camera may be off during the break. Do not teach. Do not split into several breaks.

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
| **1.1** | Core teaching — Data Summarization & Plain-Language Insights | 40 |
| **1.1** | In-class quiz | 5 |
| **2.1** | Core teaching — Trend Extraction & Targeted Querying (first half) | 25 |
| **2.1** | **Student break** — say it is a break; Break slide + timer on screen; camera may be off | 5 |
| **2.1** | Core teaching — prompt chains, EDA, filtering noise (second half) | 20 |
| **2.1** | In-class quiz | 5 |
| **3.1** | Core teaching — Human Verification & AI-Assisted Report Creation | 25 |
| **3.1** | In-class quiz | 5 |
| **1.2** | Quick revision + quiz | 5 |
| **2.2** | Quick revision + quiz | 5 |
| **3.2** | Quick revision + quiz | 5 |
| **Doubt** | Chat support slide (once for the whole session) | 5 |
| | **Total** | **150** |

The core teaching for the third clip is compressed to 25 minutes (from the 45-minute content block in the notes) so the full recording still fits 150 minutes with both quizzes, the break, and the revision clips. Cover the Scene 3 **definitions and both activities** live; if time is short, summarise the Insight Memo template from the slide rather than narrating every row of it.

---

# Scene 1.1 — Data Summarization & Plain-Language Insights (45 minutes)

**Record as one clip:** 40 minutes teaching + 5 minutes quiz.  
**Camera:** Opening slide **off** for 20 seconds → then **on** until the quiz timer starts.

---

## 1. Open the session and why this lesson exists (5 minutes)

- Share the **title + agenda** slide. **Camera off. Hold 20 seconds.** Then **camera on**.
- Greet. Say: **"How are you? How did the last session's prototype work go?"** Pause for chat, react briefly.
- One-line promise: today you turn a pile of numbers into a decision — using AI as a fast first-draft partner, never as the final word.
- Agenda in three phrases only (do not number them as scenes): turning data into a plain-language summary; asking sharp follow-up questions; catching the AI when it's wrong and writing the report.
- Tell the **Meera vs. Arjun** story from the notes (90 seconds): Meera pastes a whole sheet, forwards an invented "steadily improving" claim, gets caught with no baseline; Arjun pastes a clean table, asks specific questions, and catches an AI rounding error before it ships. Point: same tool, different habits.
- **Thumbs up:** everyone can see your slides / notes images.
- Scan chat; answer anything about "do I need to know statistics for this?" — **No**, just careful reading.

**Bridge:** "We're going to use one running dataset for the whole session, so you can build on what you find, clip after clip."

---

## 2. Meet the running example — the Groww dataset (6 minutes)

- Introduce the dataset from the notes: a stock-investing app, 1,000 simulated users, ~23,500 events, April–July. **Say clearly it is synthetic data built to resemble a real fintech product, not real user data.**
- Show the two journeys on slide: **Onboarding** (Sign Up → ... → First Deposit) and **Investing** (browse → watchlist → order). One line each — do not read the full event list aloud.
- Point out: every table used today lives in `resources/` and has already been double-checked, so students always have a correct answer to compare against.
- **Thumbs up:** everyone understands this is one dataset used across all three scenes today.

**Bridge:** "First skill: getting this kind of data into an AI tool and getting a summary you can actually trust."

---

## 3. Two ways to hand data to an AI tool (6 minutes)

- Teach the **paste vs. upload** table from the notes. Emphasise: today we paste small, pre-aggregated tables — never dump 23,000 raw rows and hope.
- Say the "shrink the data to the question" line — this is the single most important habit in this scene.
- Show the mermaid workflow diagram on slide (raw data → shrink → prompt → summary → verify → report). Trace it with your finger/cursor once.

**Bridge:** "Let's actually do this, live, with the real onboarding numbers."

---

## 4. Live demo — RCF prompt on the onboarding funnel (7 minutes)

- Open the AI chat tool on screen. Paste `resources/onboarding-funnel-summary.csv`.
- Type the Role–Context–Format prompt from the notes, live, so the class sees you build it (Role / Context / Format labelled explicitly).
- Read the reply together. Check it against the notes' example reply: overall conversion 47.9%, biggest drop PAN → KYC Document Uploaded (85.1%).
- Call out explicitly: "Notice it did NOT invent a cause for the drop. If your reply invents one, that's a red flag — hold that thought for the next clip's session."
- **Cold-call:** ask one student to read the reply's headline number back to you.

**Bridge:** "A summary needs three things to be complete. Let's name them."

---

## 5. What a strong summary must include (6 minutes)

- Teach the three-part table: overall performance, macro pattern, anomalies. One real-life line each (weather forecast example).
- Walk the Groww row of the table on slide: 47.9% headline; flat-ish weekly signups; 8 June anomaly.
- **Activity — Spot the Anomaly:** paste `resources/daily-signups.csv` live, ask the class's suggested prompt, reveal the answer (8 June = 21 vs ~11 average). Ask chat: "is 13 signups in one day also worth flagging?" — guide them to **no**, that's within normal range.

**Bridge:** "Now the harder skill — checking whether the AI's summary is actually telling the truth."

---

## 6. Evaluating AI summary accuracy (7 minutes)

- Teach the definition + real-life caption example (sales "doubled" — 40 to 60, not 40 to 80).
- **Activity — Catch the Distorted Summary:** show the Referral/Facebook-Instagram Ads AI reply from the notes on slide. Give the room 90 seconds to mark accurate / overstated / unsupported on paper or chat.
- Reveal the answer: the two percentages are accurate; "cut that budget entirely" goes beyond what a conversion table alone can prove.
- Land the line: "A table can tell you which channel converts best. It cannot, by itself, tell you which channel is worth the money." Say this will come back in the next clip.

**Bridge:** "That's summarising. Next: asking the AI sharper questions instead of 'analyze this.'" *(Do not preview scene numbers.)*

---

## 7. In-class quiz (5 minutes)

- Release `Checkpoint Questions/Scene 1.1.md` (5 questions, 5-minute timer).
- **Camera off** the moment the timer starts. **Stop recording** when the timer ends. No closing line.

---

# Scene 2.1 — Trend Extraction & Targeted Querying (55 minutes on the 150 plan)

---

## 8. Targeted queries vs. "analyze this" (8 minutes)

- Camera on. Quick re-greet, no previous-session question this time (same session).
- Teach the vague-vs-targeted prompt table from the notes. Read all three rows aloud, pausing after each targeted version.
- Real-life line: "how's business?" vs. "which product sold least last week?"
- **Thumbs up:** everyone can see the difference between a vague and a targeted prompt.

---

## 9. Prompt chains and guided exploration (8 minutes)

- Teach the definition + doctor real-life example.
- Live demo: paste `resources/onboarding-conversion-by-channel.csv`, run the three-step prompt chain from the notes on screen — rank, then gap size, then compare against `resources/conversion-by-other-segments.csv`.
- Reveal the answer key: ~80-point channel spread vs. much narrower platform/tier/user-type spreads.
- **Cold-call:** ask a student which of the four variables they'd take to their manager first, and why.

---

## 10. What a "strong" trend actually needs (9 minutes)

- Teach the noise-filtering table: small sample size, flat spread, one-off single day.
- Point at the Affiliate row (n=44) vs. Organic Search (n=299) on slide — say the smaller number out loud so it registers.
- Set up (do not yet run) the "Which Finding Would You Act On?" activity — read Claim A and Claim B aloud, ask the room to vote in chat before revealing the answer.

### Student break (5 minutes) — not a numbered teaching block

- Say clearly: **"Let's take our one break for today — 5 minutes, stretch, grab water."**
- Break slide + timer on screen. Camera may go off. No teaching during this block.

---

## 11. Reveal the noise-filtering activity + guided EDA pattern (10 minutes)

- Reveal the Claim A / Claim B answer: Claim A (channel spread) is worth a follow-up meeting; Claim B (Web vs. iOS, an 8-point gap on only 46 Web signups) should be set aside.
- Teach the three-question EDA pattern from the notes using `resources/weekly-signups-by-channel.csv`: trend over time → compare across groups → a follow-up the answer suggests. Run all three prompts live if time allows; otherwise run the first two live and talk through the third.
- Land the line: "Each question got sharper because it reacted to the last answer — that's the whole skill."

---

## 12. Recap the two Scene-2 discussion hooks (10 minutes)

- Quick re-read of the table: sample size, flat spread, one-off day — cold-call three different students, one row each, to explain it in their own words.
- Open chat for questions on anything from trend extraction or prompt chaining before the quiz.
- Remind the room (without naming the next scene): "next, we make sure we never send a wrong number to a manager."

---

## 13. In-class quiz (5 minutes)

- Release `Checkpoint Questions/Scene 2.1.md` (5 questions, 5-minute timer).
- **Camera off** at timer start. **Stop recording** at timer end.

---

# Scene 3.1 — Human Verification & AI-Assisted Report Creation (30 minutes)

**Record as one clip:** 25 minutes teaching + 5 minutes quiz. Content here is compressed from the notes' full 45-minute block — prioritise the two activities over reading every table row aloud.

---

## 14. Where AI data analysis breaks down (7 minutes)

- Teach hallucination-in-data-analysis definition + the 48.2/48.9 "wrong average" real-life example.
- Teach correlation vs. causation using the two retention tables from the notes: "invest within 7 days" (flat, no real effect) vs. "SIP starters" (a real ~1.5× gap at Week 8). Say both numbers aloud once, slowly — this is the class's favourite "aha" moment historically, give it room.
- Land the careful-wording line: "SIP starters retain better" is provable from this table; "SIPs cause retention" is not — say why in one sentence (already-committed users may just be more likely to do both).

---

## 15. Running sanity checks (8 minutes)

- Teach the three-check table: verify calculations, check sample sizes, validate domain logic. One Groww example per row, read straight from the notes table.
- **Activity — Catch the Arithmetic Error:** show the AI's "25% rejection rate" claim on slide. Give the room 60 seconds to compute 25 ÷ 675 themselves (calculator or phone is fine).
- Reveal: **≈3.7%**, not 25%. Land the line: "one misplaced decimal turns 'a minor edge case' into 'a quarter of everyone' — always recompute the headline number yourself."

---

## 16. From verified findings to a decision-ready report (8 minutes)

- Show the Insight Memo Template table on slide — name all five rows once, do not over-explain.
- Show the example completed memo from the notes. Read the headline and recommendation lines aloud; point out that the "root cause read" line explicitly separates the backend KYC delay from something the product team can fix directly.
- Close with the 5-point mini checklist from the notes — read all five, slowly, as the actual takeaway of the whole session.

---

## 17. In-class quiz (5 minutes)

- Release `Checkpoint Questions/Scene 3.1.md` (5 questions, 5-minute timer).
- **Camera off** at timer start. **Stop recording** at timer end.

---

# Scene 1.2 — Revision (5 minutes)

- Camera on. One-line recap: "Scene one was about turning a table into a trustworthy plain-language summary — overall number, pattern, and any anomaly."
- Cold-call one student: "what are the three things a strong summary must include?"
- Release `Checkpoint Questions/Scene 1.2.md` (3 questions, 3-minute timer). Camera off at timer start; stop recording at timer end.

---

# Scene 2.2 — Revision (5 minutes)

- Camera on. One-line recap: "Scene two was about asking sharp, targeted questions and chaining them — and knowing which findings are real signal versus noise."
- Cold-call one student: "name one warning sign that a finding might just be noise."
- Release `Checkpoint Questions/Scene 2.2.md` (3 questions, 3-minute timer). Camera off at timer start; stop recording at timer end.

---

# Scene 3.2 — Revision (5 minutes)

- Camera on. One-line recap: "Scene three was about catching the AI when it's wrong, before a number ever reaches a report."
- Cold-call one student: "what's the difference between saying two things are correlated versus saying one caused the other?"
- Release `Checkpoint Questions/Scene 3.2.md` (3 questions, 3-minute timer). Camera off at timer start; stop recording at timer end.

---

# Doubt resolution (5 minutes) — once for the whole session

- Camera on. Put up the doubt-resolution / chat-support slide.
- Read 2–3 chat questions aloud and answer them plainly, tying back to the running Groww numbers where possible.
- Close: **"Keep learning and keep growing."** No further teaching after this line.

---

# 150-minute recording table

| Block | Minutes | Running total |
|-------|--------:|---------------:|
| Open + running example + paste/upload | 17 | 17 |
| Live demo + strong-summary table + anomaly activity | 13 | 30 |
| Evaluate-accuracy teaching + activity | 7 | 37 |
| Quiz 1.1 | 5 | 42 |
| ~~(clip boundary — teaching clock above is 40, quiz brings clip to 45)~~ | — | 45 |
| Targeted queries + prompt chains | 16 | 61 |
| Noise-filtering table + activity setup | 9 | 70 |
| Student break | 5 | 75 |
| Reveal activity + EDA pattern | 10 | 85 |
| Recap + chat | 10 | 95 |
| Quiz 2.1 | 5 | 100 |
| Hallucination + correlation/causation | 7 | 107 |
| Sanity checks + arithmetic activity | 8 | 115 |
| Report template + example memo + checklist | 8 | 123 |
| Quiz 3.1 | 5 | 128 |
| Revision 1.2 + quiz | 5 | 133 |
| Revision 2.2 + quiz | 5 | 138 |
| Revision 3.2 + quiz | 5 | 143 |
| Doubt resolution | 5 | 148 |
| Wrap buffer | 2 | 150 |

### Timing flex

- If the room is slow on the **arithmetic activity** (Section 15), let it run 2 minutes over and trim 2 minutes from Section 12's recap — the sanity-check habit matters more than a full recap read-through.
- If the **live demo** (Section 4) runs long because the AI reply differs from the notes' example, that is fine — reading a *real* live reply against the answer key is a stronger lesson than a perfectly-timed clip. Trim Section 6's setup instead.
- Never cut the **student break** or either **correlation-vs-causation** table in Section 14 — both are load-bearing for later sessions.
