# Checkpoint Questions QC Report — Session 01 (AI Fundamentals)

**Family IDs (after rename):** `.0` → `.1` (core teaching quiz), `.1` → `.2` (revision quiz).

## Family count rule

| Family | Role | Required count | Actual | Result |
|--------|------|----------------|--------|--------|
| Scene 1.1 | Main (`.1`) | 5 | 5 | **Pass** |
| Scene 1.2 | Subscene (`.2`) | 3 | 3 | **Pass** |
| Scene 2.1 | Main (`.1`) | 5 | 5 | **Pass** |
| Scene 2.2 | Subscene (`.2`) | 3 | 3 | **Pass** |
| Scene 3.1 | Main (`.1`) | 5 | 5 | **Pass** |
| Scene 3.2 | Subscene (`.2`) | 3 | 3 | **Pass** |

All six files match the SAL rule: **5 questions on `.1` clips (5 min), 3 questions on `.2` clips (3 min).** No add/cut needed.

## Summary

| Metric | Result |
|--------|--------|
| Total questions | 24 (Scene 1.1: 5, Scene 1.2: 3, Scene 2.1: 5, Scene 2.2: 3, Scene 3.1: 5, Scene 3.2: 3) |
| Correct option verified | **24 / 24 Pass** |
| Relevancy to lecture topic | **24 / 24 Yes** |
| Lecture examples / code reused as stems | **None** |
| Out of syllabus | **None** |
| Logical mistakes | **False** |
| Presentation mistakes | **False** |
| Predictable answer-pattern check | **Pass** |
| Longest / shortest option bias | **Pass** |
| File naming vs SAL `.1` / `.2` families | **Pass** |

| Rating | Score |
|--------|-------|
| Content Coverage | 5 |
| Creativity | 5 |
| Structural Adherence | 5 |
| No Logical Mistakes | True |
| No Presentation Mistakes | True |

---

## Correct-Answer Distribution (anti-pattern check)

| File | Q1 | Q2 | Q3 | Q4 | Q5 |
|------|----|----|----|----|-----|
| Scene 1.1 | c | a | d | b | a |
| Scene 1.2 | d | c | b | — | — |
| Scene 2.1 | b | d | c | a | c |
| Scene 2.2 | d | a | b | — | — |
| Scene 3.1 | c | d | a | b | c |
| Scene 3.2 | b | d | c | — | — |

**Overall counts:** a = 5, b = 6, c = 7, d = 6 — varied distribution; no letter is always correct. Option lengths within each item are close; the marked answer is not systematically the longest or the shortest.

---

## LO / concept coverage

| Scene | LO | Questions |
|-------|----|-----------|
| 1 | LO1 AI vs traditional software | 1.1 Q1, 1.1 Q2, 1.2 Q1 |
| 1 | LO2 next-token prediction, not thinking/retrieval; hallucination | 1.1 Q3, 1.1 Q4, 1.2 Q2 |
| 1 | LO3 tokenization (working idea, length limit) | 1.1 Q5, 1.2 Q3 |
| 2 | LO1 Generative AI vs recognition; life change | 2.1 Q1, 2.1 Q2 |
| 2 | LO2 prompt; Role–Context–Format | 2.1 Q3, 2.1 Q4 |
| 2 | LO3 specificity, constraints, format; few-shot | 2.1 Q5, 2.2 Q1, 2.2 Q2 |
| 2 | LO4 revise a vague prompt | 2.2 Q3 |
| 3 | LO1 draft partner / task range | 3.1 Q1, 3.2 Q2 |
| 3 | LO2 well-suited vs unreliable vs unsuitable | 3.1 Q2, 3.1 Q3, 3.1 Q4 |
| 3 | LO3 accuracy, relevance, fitness | 3.1 Q5, 3.2 Q1, 3.2 Q3 |

---

## Question-wise QC

| Question | Type | Correct Option | Option Correct? | Relevancy | Remarks |
|----------|------|----------------|-----------------|-----------|---------|
| 1.1 Q1 | MCQ – concept | c | Yes | Yes | AI = software imitating useful abilities. Not a person, not search, not hardware. |
| 1.1 Q2 | MCQ – concept | a | Yes | Yes | Traditional software: error / blank / invalid on unknown cases. |
| 1.1 Q3 | MCQ – concept | d | Yes | Yes | LLM core = next-piece prediction from training patterns. |
| 1.1 Q4 | MCQ – concept | b | Yes | Yes | Hallucination = fluent specific untrue content. |
| 1.1 Q5 | MCQ – concept | a | Yes | Yes | Token = small piece of text; internals out of scope. |
| 1.2 Q1 | MCQ – applied | d | Yes | Yes | Exact DB record = traditional; fingerprint match = recognition AI. |
| 1.2 Q2 | MCQ – concept | c | Yes | Yes | Generation ≠ retrieval of one stored page. |
| 1.2 Q3 | MCQ – concept | b | Yes | Yes | Message-too-long = token budget, not fatigue or passwords. |
| 2.1 Q1 | MCQ – concept | b | Yes | Yes | Creating new text = GenAI; unlock / spam / face = recognise or decide. |
| 2.1 Q2 | MCQ – concept | d | Yes | Yes | Life change is faster first drafts; truth and official systems stay human. |
| 2.1 Q3 | MCQ – concept | c | Yes | Yes | Prompt = instruction that shapes generation. |
| 2.1 Q4 | MCQ – concept | a | Yes | Yes | RCF = role, situation/limits, output shape. |
| 2.1 Q5 | MCQ – concept | c | Yes | Yes | Audience + goal + scope = specificity, not format or constraints. |
| 2.2 Q1 | MCQ – concept | d | Yes | Yes | Constraints allow warning/silence instead of invented facts. |
| 2.2 Q2 | MCQ – concept | a | Yes | Yes | Two samples before a new item = few-shot, not zero-shot. |
| 2.2 Q3 | MCQ – applied | b | Yes | Yes | Repair path is RCF: audience, situation, limits, shape. |
| 3.1 Q1 | MCQ – concept | c | Yes | Yes | Draft partner; human still owns and checks. |
| 3.1 Q2 | MCQ – concept | d | Yes | Yes | Unreliable → verify; unsuitable → other system or do not paste. |
| 3.1 Q3 | MCQ – applied | a | Yes | Yes | Live prices are unreliable without a primary source. Fresh stem (not gold rate / cricket). |
| 3.1 Q4 | MCQ – applied | b | Yes | Yes | Secrets / unpublished lists = unsuitable. Other three are well-suited drafts. |
| 3.1 Q5 | MCQ – concept | c | Yes | Yes | Accuracy = check hard facts against a primary source. Specific ≠ true. |
| 3.2 Q1 | MCQ – applied | b | Yes | Yes | Neighbouring topic + ignored length = relevance failure. Fresh stem (not laptop repair). |
| 3.2 Q2 | MCQ – applied | d | Yes | Yes | Agenda from supplied points is well-suited; medical / portal / cheating are not. |
| 3.2 Q3 | MCQ – applied | c | Yes | Yes | Fitness: cut bias, drop unverified claims, edit voice; do not paste IDs. |

---

## Distractor QC (incorrect options are actually wrong)

| Check | Result |
|-------|--------|
| Second correct option in any item | **None found** |
| Distractors map to taught misconceptions | Yes — thinking vs retrieval vs prediction; GenAI vs recognition; unreliable vs unsuitable; fluency ≠ truth |
| Lecture story stems reused (Priya survey, leave-mail RCF, toy Python, 29 states, E-Eye, “On my way”) | **Not used** |

---

## Final Verdict

**PASS** — Files now use SAL family IDs (`.1` main, `.2` revision). All `.1` files have 5 questions and all `.2` files have 3. All 24 items are concept-based, marked answers match the lecture definitions, options are length-balanced with a mixed answer key, and stems are new scenarios rather than copied note examples.
