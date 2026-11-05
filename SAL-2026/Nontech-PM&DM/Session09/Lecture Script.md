# Lecture Script: Intro to Automation — Getting Started with n8n

**Session duration (recorded clips):** 150 minutes  
**Audience:** Students from any background (not necessarily tech), who have completed the earlier AI sessions  
**Type:** Facilitated concept block, a live tour of the n8n editor, and a hands-on build of a first two-step automation — no coding  
**Source of truth for content:** `Lecture Notes.md`  
**In-class quizzes:** `Checkpoint Questions/` (see each clip)  
**Files used live:** `resources/` (sample JSON, sheet template). `resources/setup-checklist.md` must be finished by every learner **before** class. `resources/instructor-answer-key.md` is for you only — never show it on screen.

---

**How to use this file**  
This file is for **timing, camera, and facilitation only**. It is not a second textbook. Definitions, tables and the step-by-step build stay in the **Lecture Notes** (and your slides). Teach from the notes; use this script to know *what the room is doing* and *when the clip ends*.

**Do not say on camera or in chat**

- Scene IDs such as 1.1, 1.2, 2.1, subscene, or "clip two."
- Routing codes: do **not** ask anyone to type `1`, `0`, `true`, `false`, or yes/no codes in chat.
- Organisation names or logos (including in slides), **except** the tools being taught: n8n, Zapier, Make, Google Sheets (and Slack or email if you do the stretch goal). Show the tools in use, not their marketing.
- The lecture-notes file, GitHub, the answer key, or this script on screen.
- Anything about real customers, real accounts or real passwords. Test data only.

**Interactive recording (every teaching clip)**  
Feel like a live class. Read chat. Cold-call. Ask for thumbs up. Resolve topic doubts in the moment. Keep annotation ready (arrows, circles). Hide date and time on the laptop. Same outfit, hairstyle, and background for the **whole** recording day — record all clips in one go.

**Live n8n window**  
Keep n8n open in a second window with an **empty workflow**, plus a **second finished copy** of the Course Enquiry Logger in a separate workflow. If a live step fails on camera, narrate the symptom, look it up in the troubleshooting table, fix it, and carry on — that is a better lesson than a perfect take. If something is stuck for more than two minutes, switch to the finished copy, show the result, and return to the empty one for the next step. Hide your credential screens and any account email before sharing.

**Break rule (not a numbered teaching block)**  
There is **one student break** in the whole session: **5 minutes**. Take it **inside the second teaching clip**, after the first 25 minutes of that clip (about 60 minutes into the session: the 35-minute first clip plus the first 25 minutes of this one). **Say clearly that this is a break** — stretch, water, step away from the screen. Put a **Break** slide and a **timer** on screen. Camera may be off. Do not teach. Do not split into several breaks.

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
| **1.1** | Core teaching — what automation is, n8n vs other tools, what to automate | 30 |
| **1.1** | In-class quiz | 5 |
| **2.1** | Core teaching — editor tour and building blocks (first half) | 25 |
| **2.1** | **Student break** — say it is a break; Break slide + timer on screen; camera may be off | 5 |
| **2.1** | Core teaching — data items and reading JSON (second half) | 10 |
| **2.1** | In-class quiz | 5 |
| **3.1** | Core teaching — build, test, troubleshoot and verify the two-step workflow | 45 |
| **3.1** | In-class quiz | 5 |
| **1.2** | Quick revision + quiz | 5 |
| **2.2** | Quick revision + quiz | 5 |
| **3.2** | Quick revision + quiz | 5 |
| **Doubt** | Chat support slide (once for the whole session) | 5 |
| | **Total** | **150** |

**Why this split differs from earlier sessions.** The notes give the three scenes 40 / 45 / 45 minutes, and earlier sessions recorded them as 40 / 45 / 25. Here the recording is **30 / 35 / 45**, because the hands-on build is the heart of this session and cannot be squeezed into 25 minutes. The concept and tour blocks are tighter, so teach from the tables and cut narration, not activities.

---

# Scene 1.1 — Understanding Automation & The Power of n8n (35 minutes)

**Record as one clip:** 30 minutes teaching + 5 minutes quiz.  
**Camera:** Opening slide **off** for 20 seconds → then **on** until the quiz timer starts.

---

## 1. Open the session and why this lesson exists (5 minutes)

- Share the **title + agenda** slide. **Camera off. Hold 20 seconds.** Then **camera on**.
- Greet. Say: **"How are you? Did you finish the setup list I sent?"** Pause for chat. Note anyone who did not; they will follow your screen.
- One-line promise: by the end of today you will have a workflow that runs by itself.
- Agenda in three phrases only (do not number them as scenes): what automation is and when to use it; finding your way around the tool; building and testing your first one.
- Tell the **Neha and Ishaan** story from the notes (60–90 seconds): 90 minutes of copy-paste against a form that logs itself.
- Say once: **test data only, never real accounts.**
- **Thumbs up:** everyone has n8n open in a tab.

**Bridge:** "Ishaan's whole trick fits in one sentence. Let's find it."

---

## 2. What an automation workflow is, and why teams build them (7 minutes)

- Teach the definition: **"When this happens, do that."**
- Walk the four-part table (trigger, data, action, result) with the enquiry example. Trace the diagram once with your cursor.
- Walk the benefits table quickly, one real example per row.
- Land the limits in one breath: **fix the process first; judgement stays with people; someone watches it.**
- **Cold-call:** ask one student for a task they repeat that has a clear trigger.

---

## 3. n8n, and how it compares (9 minutes)

- Teach n8n at a glance: a canvas, nodes, hosted or self-hosted.
- Walk the comparison table for Zapier, Make and n8n. Spend your time on the **billing row**: task, operation, execution.
- Say both clarifications aloud: "linear" fits Zapier best, and prices change so check the vendor page.
- Teach **fair-code**: public source, Sustainable Use License, free for your own internal use, **not** for reselling. Land: **do not call it open source without that note.**

---

## 4. Activity — pick the tool (3 minutes)

- Show the four cases on a slide. Give 60 seconds.
- Reveal answers. For case 3 ask: "Is that a features question or a licence question?"

---

## 5. Spotting work worth automating (4 minutes)

- Teach the four-point test: clear trigger, rule-based, digital, frequent.
- Walk the BrightPath table. Pause on the two "No" rows and ask why.
- **Activity — Spot the Candidates:** learners write three tasks. Take two answers from chat. Praise any that name the trigger.

---

## 6. Chat check (2 minutes)

- Read two chat questions aloud. Answer briefly.
- Remind the room, without naming the next scene: "Next we open the tool and meet its parts."

---

## 7. In-class quiz (5 minutes)

- Release `Checkpoint Questions/Scene 1.1.md` (5 questions, 5-minute timer).
- **Camera off** the moment the timer starts. **Stop recording** when the timer ends. No closing line.

---

# Scene 2.1 — Navigating the n8n Interface & Core Building Blocks (45 minutes)

---

## 8. Live tour of the editor (10 minutes)

- Camera on. Quick re-greet. No previous-session question.
- Share the n8n window with an **empty workflow**. Say aloud: labels vary by version; look for the same idea.
- Walk the interface table in the order you would use it: side menu, workflow name and top bar, the **Add first step…** prompt and **What triggers this workflow?**, the **+** nodes panel, **Execute workflow**, zoom controls and **Tidy Up**, sticky note, and the import menu.
- **Thumbs up:** everyone can see the same buttons on their own screen.

---

## 9. Activity — interface treasure hunt (4 minutes)

- Give 2 minutes for the seven finds. Ask the first finisher to share their screen.
- Reveal anything missed. Note it if a button sits somewhere different in your version.

---

## 10. The core building blocks (11 minutes)

- Teach the definition: trigger, action, data item, parameter. Use the parcel-on-a-conveyor line.
- Walk the building-blocks table against the Course Enquiry Logger.
- Show the trigger options: **On form submission**, **On webhook call**, **On a schedule**, **Trigger manually**. One line each.
- Teach **Fixed vs Expression** live: type "Sheet1" as fixed, then show an expression such as `{{ $json.Email }}`. Land: **a fixed email sends every message to the same person.**
- **Cold-call:** "which of these changes every time the workflow runs, a fixed value or an expression?"

### Student break (5 minutes) — not a numbered teaching block

- Say clearly: **"Let's take our one break for today — 5 minutes, stretch, grab water."**
- Break slide + timer on screen. Camera may go off. No teaching during this block.

---

## 11. Data items and a JSON primer (6 minutes)

- Camera on. Teach: n8n passes a **list of items**; each item's fields sit under `json`.
- Show the two-item example on a slide. Say: **"on screen you see the part inside `json`."**
- Walk the JSON reading guide in one pass: object, key and value, list, nested value.
- Teach the key idea: **most nodes run once per item**, so three items means three rows.
- Show the three views (**Schema**, **Table**, **JSON**) and **Pin data** in one sentence each.

---

## 12. Activity — read the JSON (4 minutes)

- Open the sample files on a slide. Give 90 seconds for the five questions.
- Reveal answers. Spend extra time on question 2: **keys are case-sensitive**, so `Email` and `email` differ.

---

## 13. In-class quiz (5 minutes)

- Release `Checkpoint Questions/Scene 2.1.md` (5 questions, 5-minute timer).
- **Camera off** at timer start. **Stop recording** at timer end.

---

# Scene 3.1 — Building & Testing Your First Two-Step Automation (50 minutes)

**Record as one clip:** 45 minutes teaching + 5 minutes quiz. Learners **follow along on their own screens**; you demonstrate each step, then give a short window for them to catch up. Never move on while more than a few people are stuck.

---

## 14. Pre-flight (4 minutes)

- Camera on. Show the finished sheet headers on screen: `Submitted at`, `Full name`, `Email`, `Course`, `Message`.
- Ask for a thumbs up from everyone who has: n8n open, an empty Google Sheet with those headers, and a Google account ready.
- Anyone without a ready sheet follows your screen for now and fixes it afterwards (do not delay the room).

---

## 15. Step 1 — the trigger (12 minutes)

- Create the workflow, name it **Course Enquiry Logger**.
- Add **On form submission** from the **What triggers this workflow?** prompt. Set the title and description.
- Add the four form elements live. Narrate each type (Text, Email, Dropdown, Textarea) and why.
- **Execute step**. Open the **Test URL**, submit the form as "Test Learner One".
- Open the **Output** panel. Show **Table** and **JSON**. Point at `submittedAt` and `formMode`.
- Explain **Test URL vs Production URL** with the notes' two sentences. Say: **"mixing these up is the most common first-day problem."**
- **Check-in:** ask for thumbs up from everyone who now sees their own submission in the Output panel.

---

## 16. Step 2 — the action and the mapping (13 minutes)

- Click **+** on the trigger and add **Google Sheets**. Choose **Append Row**.
- Create the credential and sign in. Hide your account details while you do it. If a learner's sign-in fails, note it and carry on; they fix it with the helper after class or use your finished copy.
- Pick the **Document** and **Sheet** from the lists.
- Under **Columns**, keep **Map Each Column Manually**. Drag fields from the **Input** panel into the five boxes. Show that each box turns into an **Expression**.
- Read the mapping table aloud once. Point out the square-bracket form for `Full name`.
- Briefly show **Map Automatically** and say why it relies on names matching exactly.
- **Execute step** on the Sheets node. Switch to the sheet tab and show the row.

---

## 17. Test, publish and verify in both tools (9 minutes)

- Click **Execute workflow**. Submit "Test Learner Two" on the Test URL. Watch the nodes run.
- Click **Publish**. Open the **Production URL** and submit "Test Learner Three".
- Explain: production runs do **not** show in the editor. Open **Executions** and find the run with status **Succeeded**.
- Return to the sheet and show **three rows**.
- Land the line: **"Verify in both tools, every time."** Name what proves success in each.

---

## 18. Troubleshoot — break it on purpose (5 minutes)

- Show the troubleshooting table on a slide. Read the symptoms, not the fixes, and let the room guess the cause.
- **Activity — Break It on Purpose:** in pairs, one changes one thing, the other diagnoses. Give 3 minutes total, then take one story from chat. If time is short, run it as a demonstration: you change one thing and the room diagnoses.

---

## 19. Housekeeping and wrap (2 minutes)

- Say it plainly: a published form is open to anyone with the link. **Unpublish or delete the practice workflow, delete the test sheet, remove the credential** if it was only for practice.
- Mention the stretch goals (a third node that sends a message; a Schedule trigger) as take-home.

---

## 20. In-class quiz (5 minutes)

- Release `Checkpoint Questions/Scene 3.1.md` (5 questions, 5-minute timer).
- **Camera off** at timer start. **Stop recording** at timer end.

---

# Scene 1.2 — Revision (5 minutes)

- Camera on. One-line recap: "Automation is 'when this happens, do that' — and the best candidates are frequent, rule-based and digital."
- Cold-call one student: "name one difference between n8n and Zapier."
- Release `Checkpoint Questions/Scene 1.2.md` (3 questions, 3-minute timer). Camera off at timer start; stop recording at timer end.

---

# Scene 2.2 — Revision (5 minutes)

- Camera on. One-line recap: "Trigger starts it, actions do the work, items carry the data, and parameters are the settings."
- Cold-call one student: "what is the difference between a fixed value and an expression?"
- Release `Checkpoint Questions/Scene 2.2.md` (3 questions, 3-minute timer). Camera off at timer start; stop recording at timer end.

---

# Scene 3.2 — Revision (5 minutes)

- Camera on. One-line recap: "Test URL while building, Production URL after Publish, and always check both tools."
- Cold-call one student: "where do you look for a production run?"
- Release `Checkpoint Questions/Scene 3.2.md` (3 questions, 3-minute timer). Camera off at timer start; stop recording at timer end.

---

# Doubt resolution (5 minutes) — once for the whole session

- Camera on. Put up the doubt-resolution / chat-support slide.
- Read 2–3 chat questions aloud and answer them plainly. If someone's build is stuck, say who to contact for help.
- Close: **"Keep learning and keep growing."** No further teaching after this line.

---

# 150-minute recording table

| Block | Minutes | Running total |
|-------|--------:|--------------:|
| Clip 1: core teaching (sections 1–6) | 30 | 30 |
| Clip 1: quiz | 5 | 35 |
| Clip 2: first half (sections 8–10) | 25 | 60 |
| Clip 2: student break | 5 | 65 |
| Clip 2: second half (sections 11–12) | 10 | 75 |
| Clip 2: quiz | 5 | 80 |
| Clip 3: core teaching (sections 14–19) | 45 | 125 |
| Clip 3: quiz | 5 | 130 |
| Revision clip 1 (recap + quiz) | 5 | 135 |
| Revision clip 2 (recap + quiz) | 5 | 140 |
| Revision clip 3 (recap + quiz) | 5 | 145 |
| Doubt resolution | 5 | 150 |

### Timing flex

- If the **build** runs long (sign-in problems are the usual cause), trim section 18's activity to a demonstration and shorten section 19 to one sentence. Do **not** cut the production-URL test or the verify-in-both-tools step.
- If the **tour** in section 8 runs long, cut the import menu and sticky note; keep the interface table's first five rows.
- Never cut the **student break**, the **Test URL vs Production URL** explanation, or the **read the JSON** activity.
