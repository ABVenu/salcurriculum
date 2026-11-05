# Lecture Notes QC Report

Session folder: `Other_Courses_Apart_From_IIT/SAL-2026/Nontech-PM&DM/Session03`  
File checked: `Lecture Notes.md`  
Title: Building a Product with AI - Part 2: Refining & Validating

---

## QC Iteration 1

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 5 |
| **Creativity** | 5 |
| **Structural Adherence** | 4 |
| **No Logical Mistakes** | False |
| **No Presentation Mistakes** | False |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### What passed

- All nine learning outcomes across the three scenes are present and clearly nested (`## Scene 1 / 2 / 3` with `###` topics): AI test scenarios + simulated feedback, questions that test the intended problem, simulated vs real limits, MVP include/exclude, iteration from findings, Now/Next/Later under time pressure, rationale presentation, change log tied to feedback, and design/feature trade-offs.
- Continues the previous lesson’s WashQ page, collection sheet, four bands, and website builders without naming a session number. Upcoming work is only “real people,” not a session index.
- Student-facing activities, definition triples, connecting sentences, Indian running example, takeaways, and a terminology table are in place. No images (deferred until notes are approved). No target-audience, duration, or “lite” language in headings or body.

### Gaps found

- **Logic:** Scene 1 said the **job** question layer should wait until iteration, while LO:2 requires testing the intended problem in this scene (Q5 was already included). Students would not know whether job questions belong now or later.
- **Logic:** MVP activity line “Check every exclude: would dropping it still let you test…” was ambiguous (drop the feature vs drop it from the exclude list).
- **Logic:** Iteration said “keep the same four bands” while the worked table also rewrote supporting copy as a fifth row.
- **Presentation:** Opening of Scene 1 used “on the call” (live-class framing). Real-life example named **ChatGPT** instead of a generic chatbot. Trade-off row pointed at “the previous lesson’s logic.” Full dry-run assumed a live listener / classmate (group-shaped) instead of a single-student voice note.

### Action

Notes were revised: job questions sit in Scene 1; exclude-list check clarified; four bands vs supporting copy distinguished; Zoom/brand/group wording removed.

---

## QC Iteration 2

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 5 |
| **Creativity** | 5 |
| **Structural Adherence** | 5 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### Recheck notes

- **Scene 1:** Scenario prompt + keep/drop table; Priya / Rohan / Aarav simulations; five questions that test understanding, desire, confusion, and the intended problem; limitations table vs real user testing; trust-label activity. No claim that simulation equals a survey.
- **Scene 2:** MVP card with include/exclude; findings → before/after page rewrite; recheck prompt; Now/Next/Later plus effort filter under a time cap. Calendar and UPI stay out of the MVP.
- **Scene 3:** Six-line rationale spine; change log that includes refused edits; spoken trade-off pattern; single-student dry run on a voice note.
- References are “previous lesson” and “upcoming work” only. No images. Mermaid diagrams remain in-note. Title is the professional Part 2 name (no session number in the student document).

**Expected QC result achieved.** No further revision required for this QC cycle.

---

# Lecture Notes Released.md — QC Report

File checked: `Lecture Notes Released.md`  
Title: From Idea to Prototype with AI  
Source of truth: live `Transcript.md` (PhonePe Trusted Pay), not the WashQ planned notes.

WashQ images from the original `Lecture Notes.md` were **not** reused: the taught example (PhonePe Trusted Pay, Google Stitch, Storybook) does not match those visuals. Scene numbers, LO names, Mentimeter, and quizzes are omitted.

---

## QC Iteration 1

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 5 |
| **Creativity** | 4 |
| **Structural Adherence** | 4 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | False |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### What passed

- Transcript path is covered: idea → problem/persona/friction → Uber-style journey → user story → low-fi vs high-fi (house plot) → alpha/beta (Play Store) → design consistency → PhonePe refine (UPI Circle vs running tab) → Arjun Mehta persona → Trusted Pay journey → Google Storybook → low-fi screens and edge cases → landing/CTA → happy-path MVP → Stitch / Lovable / Replit → HTML/CSS frontend vs backend → instant prototype and iteration → what to ask / not ask → rationale spine and trade-offs.
- Same class examples and prompts (PhonePe, Uber, go-karting/khata, Storybook Koramangala story, Stitch paste-ready prompt). Quizzes and Mentimeter omitted.
- No scene labels, LO names, session numbers, duration, or “lite” language. Previous work is “previous lesson” only.
- Definition triples, student-facing activities, takeaways, and terminology table are present.

### Gaps found

- **Presentation:** Several paragraphs broke the three-sentence rule. Live-class phrasing (“in class”, “class used”, “glitched in class”) leaked into student documentation.
- **Presentation:** One list item had broken bold markdown on the product-name line.
- **Creativity:** First draft was overlong; after a hard cut, connecting tissue and a few taught details (design markdown, QR, heatmap, Hindi/Google Pay restyle) were thin.
- **Structural:** Length swung outside the target band before the presenting/trade-off block and paragraph splits were balanced.

### Action

Paragraphs split; live-class wording removed; markdown fixed; instant-prototype and present/trade-off material restored; WashQ images still omitted on purpose.

---

## QC Iteration 2

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 5 |
| **Creativity** | 5 |
| **Structural Adherence** | 5 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### Recheck notes

- **Coverage vs transcript:** Journey and “do not jump to prototype”; persona and friction; Uber awareness → growth loop; storytelling; low-fi/high-fi and consistency; alpha/beta; PhonePe Trusted Pay refine including UPI Circle distinction; persona Arjun Mehta; journey stages; Storybook + PDF; staying current with tools; low-fi screens, landing, CTA, edge cases; MVP as happy path; builders and pivot when credits/models fail; frontend/backend; Stitch iteration, instant prototype, decline screen; ask/don’t-ask; present spine and trade-offs. No quiz protocol.
- **Creativity:** PhonePe running example, Uber and house analogies, reusable prompts, two mermaid flows, include/park table, trade-off table. WashQ S3 images correctly skipped.
- **Structure:** `#` title, previous-lesson context, direct `##` headings (no Scene/Part labels), definition triples, connecting sentences, individual activities, key takeaways, terminology table.
- **Logic:** Empty-balance vs UPI Circle is correct; MVP = happy path with value to user and business; CTA is the first tap; testers are a filter not a census.
- **Presentation:** Three-sentence rule restored; no scene/LO/session index; no Mentimeter; “previous lesson” / “upcoming work” only.

**Expected QC result achieved.** No further revision required for this QC cycle.

---

# Session 03 Lecture Notes Released.md — QC Report

File checked: `Lecture Notes Released.md`  
Title: Refining and Validating Ideas with AI  
Source of truth: live `Transcript.md` (PhonePe Trusted Pay — feedback, PQRSTU, Mom Test, simulated users, MVP, iteration, presentation). Mentimeter / post-lecture quiz omitted.

---

## QC Iteration 1

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 5 |
| **Creativity** | 5 |
| **Structural Adherence** | 4 |
| **No Logical Mistakes** | False |
| **No Presentation Mistakes** | False |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### What passed

- All nine learning outcomes are covered without Scene/LO labels: test scenarios + AI simulation, questions that test the intended job (Q1–Q5, Mom Test), simulated vs real limits, MVP include/exclude, iteration from the post-request trail, Now/Next/Later, rationale spine, change log, trade-offs.
- Transcript examples kept: laundry vs 31st-of-month feedback, WhatsApp then PhonePe PQRSTU, birthday Five Whys, intended/sceptic/wrong/regulator, 40/60 mix, separate chats, Ria–Vikram patterns, Dropbox 75k / Airbnb / Zomato PDF / Ola booth / Razorpay, failed MVPs, Rahul Sharma four-step trail, Third Wave POS, Raj presentation.
- No Mentimeter, quiz, session index, duration, or “lite” language. Previous work is “previous lesson” only. Length target 480–500 lines.

### Gaps found

- **Logic:** Change log parked “CTA / not a loan copy” while the Now board and before/after headline table already applied that copy. Students would not know whether the CTA change shipped.
- **Logic:** MVP activity “dropping an exclude” was ambiguous (drop the feature vs drop it from the exclude list).
- **Presentation:** Several paragraphs broke the three-sentence rule (iteration-path follow-up, wrong vs sceptic, Raj real-life example, Lock Five Questions / dry-run activities).
- **Presentation:** Official definition of **intended problem** was PhonePe-specific instead of general-then-example.

### Action

Notes were revised: change log now matches the shipped copy vs parked lending; exclude-list wording clarified; long paragraphs and activities split or compacted; intended-problem definition generalised.

---

## QC Iteration 2

| Criterion | Result |
|-----------|--------|
| **Content Coverage** | 5 |
| **Creativity** | 5 |
| **Structural Adherence** | 5 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / internal reference in student notes** | True |

### Recheck notes

- **Coverage vs transcript:** Weak vs strong scenarios; functional/non-functional + PQRSTU (WhatsApp and Trusted Pay); five-step questions + Mom Test; AI scenario prompt and Google Pay / cash / parent rows; user types and pattern table; Q1–Q5; AI limits vs real money/alternatives; Now/Next/Later; MVP card plus success/failure stories; Stitch iteration and four-step trail; presentation spine, change log, X-instead-of-Y trade-offs. No quiz protocol.
- **Creativity:** Same class names and tools (Rahul, Priya, Third Wave, Stitch/Lovable/Replit/AI Studio), reusable prompts, mermaid filter, include/exclude and trade-off tables, individual activities.
- **Structure:** `#` title, previous-lesson PhonePe context, direct `##` headings, definition triples, connecting sentences, takeaways, terminology table. **500 lines** (within 480–500).
- **Logic:** Status trail + settle-later copy are Now/shipped; lending and auto other-app detection are parked; real findings outrank simulated extras; wrong ≠ sceptic; separate chats required.
- **Presentation:** Three-sentence rule restored on flagged blocks; no scene/LO/session index; no Mentimeter; “previous lesson” / “upcoming work” only.

**Expected QC result achieved.** No further revision required for this QC cycle.
