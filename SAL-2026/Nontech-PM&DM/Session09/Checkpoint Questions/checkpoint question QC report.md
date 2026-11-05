# Checkpoint Questions QC Report — Session 06 (Intro to Automation: Getting Started with n8n)

**Family IDs:** `.1` (core teaching quiz), `.2` (revision quiz).

**Wording note:** the stems and options use short, plain wording with a little added context (about 2–3 words more per stem and per option than the earlier, terser version). Concepts, correct facts, answer letters and explanations are unchanged. Option lengths were also balanced: the correct option is now the longest in 6 of 24 items (25%, in line with chance), down from 14 of 24 before this pass.

## Family count rule

| Family | Role | Required count | Actual | Result |
|--------|------|----------------|--------|--------|
| Scene 1.1 | Main (`.1`) | 5 | 5 | **Pass** |
| Scene 1.2 | Subscene (`.2`) | 3 | 3 | **Pass** |
| Scene 2.1 | Main (`.1`) | 5 | 5 | **Pass** |
| Scene 2.2 | Subscene (`.2`) | 3 | 3 | **Pass** |
| Scene 3.1 | Main (`.1`) | 5 | 5 | **Pass** |
| Scene 3.2 | Subscene (`.2`) | 3 | 3 | **Pass** |

All six files match the SAL rule: **5 questions on `.1` clips (5 min), 3 questions on `.2` clips (3 min).**

## Summary

| Metric | Result |
|--------|--------|
| Total questions | 24 (Scene 1.1: 5, Scene 1.2: 3, Scene 2.1: 5, Scene 2.2: 3, Scene 3.1: 5, Scene 3.2: 3) |
| Correct option verified | **24 / 24 Pass** — checked against the notes and the n8n documentation and node definitions |
| Relevancy to lecture topic | **24 / 24 Yes** |
| Stem / option length | Stems are one to three short sentences (longest 90 characters including markup); options are short phrases (longest 56 characters) |
| Lecture examples reused as stems | **None** — stems test the concept, not the BrightPath enquiry example |
| Version-sensitive content | Interface-label questions use labels verified in the 2.x editor (Execute workflow, Publish, Tidy Up, Zoom to Fit, Executions). Pricing and plan details are deliberately **not** asked, because they change |
| Out of syllabus | **None** |
| Logical mistakes | **False** |
| Presentation mistakes | **False** |
| Predictable answer-pattern check | **Pass** — 6/6/6/6 across a/b/c/d |
| Longest / shortest option bias | **Pass** — the correct option is the longest in 6 of 24 items (25%), in line with chance, so length is not a cue |
| File naming vs SAL `.1` / `.2` families | **Pass** |
| MD ⇔ CSV question/answer parity | **Pass** — checked programmatically |

| Rating | Score |
|--------|-------|
| Content Coverage | 5 |
| Creativity | 4 |
| Structural Adherence | 5 |
| No Logical Mistakes | True |
| No Presentation Mistakes | True |

---

## Correct-Answer Distribution (anti-pattern check)

| File | Q1 | Q2 | Q3 | Q4 | Q5 |
|------|----|----|----|----|-----|
| Scene 1.1 | b | c | a | d | c |
| Scene 1.2 | d | b | a |  |  |
| Scene 2.1 | a | d | b | c | a |
| Scene 2.2 | c | a | d |  |  |
| Scene 3.1 | b | d | c | a | b |
| Scene 3.2 | d | c | b |  |  |

**Overall counts:** a = 6, b = 6, c = 6, d = 6. No letter repeats back to back within any file.

---

## LO / concept coverage

| Scene | LO | Questions |
|-------|----|-----------|
| 1 | LO1 define an automation workflow and why teams use tools like n8n | 1.1 Q1, 1.2 Q1 |
| 1 | LO2 fair-code/self-hosted n8n vs hosted iPaaS tools | 1.1 Q2, 1.1 Q3, 1.2 Q2 |
| 1 | LO3 identify processes worth automating | 1.1 Q4, 1.1 Q5, 1.2 Q3 |
| 2 | LO1 navigate the canvas and interface controls | 2.1 Q1, 2.2 Q1 |
| 2 | LO2 triggers, action nodes, data items, parameters | 2.1 Q2, 2.1 Q3, 2.2 Q2 |
| 2 | LO3 inspect JSON data passed between nodes | 2.1 Q4, 2.1 Q5, 2.2 Q3 |
| 3 | LO1 configure a trigger node | 3.1 Q1, 3.1 Q2, 3.2 Q1 |
| 3 | LO2 connect an action node and map fields | 3.1 Q3, 3.2 Q2 |
| 3 | LO3 test, troubleshoot and verify in both tools | 3.1 Q4, 3.1 Q5, 3.2 Q3 |

All nine Learning Objectives from `Scenes&LOs.md` are covered by at least two questions across the main and revision quizzes.

---

## Question-wise QC

| Question | Type | Correct Option | Option Correct? | Relevancy | Remarks |
|----------|------|----------------|-----------------|-----------|---------|
| 1.1 Q1 | MCQ – concept | b | Yes | Yes | Workflow definition. |
| 1.1 Q2 | MCQ – concept | c | Yes | Yes | Fair-use boundary. |
| 1.1 Q3 | MCQ – concept | a | Yes | Yes | Fair-code vs open source. |
| 1.1 Q4 | MCQ – applied | d | Yes | Yes | Candidate selection. |
| 1.1 Q5 | MCQ – concept | c | Yes | Yes | Candidate criteria. |
| 1.2 Q1 | MCQ – concept | d | Yes | Yes | Trigger definition. |
| 1.2 Q2 | MCQ – applied | b | Yes | Yes | Hosting choice. |
| 1.2 Q3 | MCQ – applied | a | Yes | Yes | Judgement vs rules. |
| 2.1 Q1 | MCQ – concept | a | Yes | Yes | Editor control. |
| 2.1 Q2 | MCQ – concept | d | Yes | Yes | Trigger role. |
| 2.1 Q3 | MCQ – concept | b | Yes | Yes | Fixed vs expression. |
| 2.1 Q4 | MCQ – applied | c | Yes | Yes | One run per item. |
| 2.1 Q5 | MCQ – concept | a | Yes | Yes | Item structure. |
| 2.2 Q1 | MCQ – concept | c | Yes | Yes | Finding Executions. |
| 2.2 Q2 | MCQ – concept | a | Yes | Yes | Credential definition. |
| 2.2 Q3 | MCQ – applied | d | Yes | Yes | Case sensitivity. |
| 3.1 Q1 | MCQ – applied | b | Yes | Yes | Trigger choice. |
| 3.1 Q2 | MCQ – concept | d | Yes | Yes | Test vs production URL. |
| 3.1 Q3 | MCQ – concept | c | Yes | Yes | Mapping. |
| 3.1 Q4 | MCQ – applied | a | Yes | Yes | Finding production runs. |
| 3.1 Q5 | MCQ – applied | b | Yes | Yes | Verify in both tools. |
| 3.2 Q1 | MCQ – concept | d | Yes | Yes | Production URL. |
| 3.2 Q2 | MCQ – applied | c | Yes | Yes | Mapping mismatch. |
| 3.2 Q3 | MCQ – applied | b | Yes | Yes | Housekeeping. |

---

## Distractor QC (incorrect options are actually wrong)

| Check | Result |
|-------|--------|
| Second correct option in any item | **None found** |
| Distractors map to taught misconceptions | Yes: calling n8n public domain or fully open source, confusing Publish with Execute workflow, mixing up fixed values and expressions, forgetting one-run-per-item, confusing Test and Production URLs, leaving published practice workflows running |

---

## Final Verdict

**PASS.** All 24 items are concept- or application-based, every marked answer matches the lecture content and the n8n behaviour checked for this session, stems and options are concise and clear, the correct answer is the longest option in only 6 of 24 items, and the answer key is evenly split 6/6/6/6 with the MD and CSV files verified identical.
