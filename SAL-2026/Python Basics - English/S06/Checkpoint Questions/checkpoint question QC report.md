# Checkpoint Questions QC Report — S06

## Summary

| Metric | Result |
|--------|--------|
| Total questions | 16 (Scene 1.0: 5, Scene 1.1: 3, Scene 2.0: 5, Scene 2.1: 3) |
| Correct option verified | **16 / 16 Pass** |
| Relevancy to lecture topic | **16 / 16 Yes** |
| Code outputs executed & matched | **11 / 11 Pass** |
| Out of syllabus | **None** |
| Notes-example reuse | **None** |
| Logical mistakes | **False** |
| Presentation mistakes | **False** |

| Rating | Score |
|--------|-------|
| Content Coverage | 5 |
| Creativity | 5 |
| Structural Adherence | 5 |
| No Logical Mistakes | True |
| No Presentation Mistakes | True |

---

## LO / Scene Coverage

| Scene | Topic | LOs covered |
|-------|-------|-------------|
| 1.0 | Sets & tuples basics | LO1 set uniqueness + tuple lock, LO2 `add()`, LO3 tuple index / `len()` |
| 1.1 | Sets & tuples applied | LO4 `set(list)` / `tuple(list)`, empty `set()` vs `{}` |
| 2.0 | Dictionaries basics | LO1 key–value + unique keys, LO2 create/read, LO3 loop pattern, LO4 update / add key |
| 2.1 | Dictionaries applied | update without growing, loop pair count, `len(dict)` vs `len(dict[key])` |

---

## Question-wise QC

| Question | Type | Correct Option | Option Correct? | Relevancy | Remarks |
|----------|------|----------------|-----------------|-----------|---------|
| Scene 1.0 Q1 | MCQ – concept | b | Yes | Yes | Set keeps unique values; distractors cover order/index myths. |
| Scene 1.0 Q2 | MCQ – code output | c | Yes | Yes | Executed: duplicate dropped → `len` `3`. |
| Scene 1.0 Q3 | MCQ – code output | b | Yes | Yes | Executed: new `add` grows; repeat `add` does not. |
| Scene 1.0 Q4 | MCQ – concept | d | Yes | Yes | Tuple = fixed ordered pack. |
| Scene 1.0 Q5 | MCQ – code output | a | Yes | Yes | Executed: `3`, `15`, `3`. |
| Scene 1.1 Q1 | MCQ – code output | d | Yes | Yes | Executed: `set(list)` → unique length `3`. |
| Scene 1.1 Q2 | MCQ – code output | a | Yes | Yes | Executed: `tuple(...)[1]` → `south`. |
| Scene 1.1 Q3 | MCQ – concept | c | Yes | Yes | Empty set is `set()`; `{}` is dict. |
| Scene 2.0 Q1 | MCQ – concept | c | Yes | Yes | Dictionary = key–value lookup. |
| Scene 2.0 Q2 | MCQ – concept | b | Yes | Yes | Duplicate key → latest value wins. |
| Scene 2.0 Q3 | MCQ – code output | a | Yes | Yes | Executed: `"Nova"` and `len` `3`. |
| Scene 2.0 Q4 | MCQ – code output | d | Yes | Yes | Executed: update + new key → `35`, `3`. |
| Scene 2.0 Q5 | MCQ – concept | a | Yes | Yes | Loop keys, then read `dict[key]`. |
| Scene 2.1 Q1 | MCQ – code output | d | Yes | Yes | Executed: city update keeps pair count `3`. |
| Scene 2.1 Q2 | MCQ – count | a | Yes | Yes | Executed: 3 keys → 3 print lines. |
| Scene 2.1 Q3 | MCQ – code output | b | Yes | Yes | Executed: `len(report)=2`, `len(topics)=3`. |

---

## Code Verification Log

| Question | Expected (marked answer) | Actual runtime output | Match |
|----------|--------------------------|----------------------|-------|
| 1.0 Q2 | `3` | `3` | Yes |
| 1.0 Q3 | `3` | `3` | Yes |
| 1.0 Q5 | `3` / `15` / `3` | same | Yes |
| 1.1 Q1 | `3` | `3` | Yes |
| 1.1 Q2 | `south` | `south` | Yes |
| 1.1 Q3 | `set()` empty set; `{}` dict | confirmed | Yes |
| 2.0 Q2 | latest key wins / len `1` | confirmed | Yes |
| 2.0 Q3 | `Nova` / `3` | same | Yes |
| 2.0 Q4 | `35` / `3` | same | Yes |
| 2.1 Q1 | `Indore` / `3` | same | Yes |
| 2.1 Q2 | 3 lines | 3 | Yes |
| 2.1 Q3 | `2` then `3` | same | Yes |

---

## Option Fairness

| Check | Result |
|-------|--------|
| Answer letter mix (a/b/c/d) | 5 / 4 / 3 / 4 — no dominant letter |
| Always-same-letter pattern | No (Scene 2.1 consecutive-`d` fixed during QC) |
| Longest option always right | No |
| Shortest option always right | No |
| Lecture-note examples reused | No (fresh examples throughout) |

---

## Distractor QC

| Question | Distractors sound? | Notes |
|----------|-------------------|-------|
| All 16 | Yes | Wrong options use common slips (set indexing, `{}` as empty set, tuple rewrite, `len` counting inner list items with pairs). No second correct option found. |

---

## QC Fix Applied During Review

| Item | Action |
|------|--------|
| Scene 2.1 Q1 + Q2 both marked `d` | Reordered Q2 options so correct answer is `a` |

---

## Final Verdict

**PASS** — All marked answers are correct and relevant to S06 topics (sets, `add()`, tuples, list conversions, dictionaries, key lookup, updates, looping pairs). Ready for use.
