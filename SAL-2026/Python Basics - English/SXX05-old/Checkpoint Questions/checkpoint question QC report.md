# Checkpoint Questions QC Report — S05

## Summary

| Metric | Result |
|--------|--------|
| Total questions | 32 (Scene 1.0: 5, Scene 1.1: 3, Scene 2.0: 5, Scene 2.1: 3, Scene 3.0: 5, Scene 3.1: 3, Scene 4.0: 5, Scene 4.1: 3) |
| Correct option verified | **32 / 32 Pass** |
| Relevancy to lecture topic | **32 / 32 Yes** |
| Code outputs executed & matched | **18 / 18 Pass** |
| Out of syllabus | **None** |
| Logical mistakes | **False** |
| Presentation mistakes | **False** |
| Predictable answer-pattern check | **Pass** |
| Technical / non-anecdotal wording | **Pass** |

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
| Scene 1.0 | b | d | a | c | b |
| Scene 1.1 | d | b | a | — | — |
| Scene 2.0 | c | a | d | b | c |
| Scene 2.1 | b | a | c | — | — |
| Scene 3.0 | a | c | b | d | a |
| Scene 3.1 | d | c | b | — | — |
| Scene 4.0 | b | c | d | a | d |
| Scene 4.1 | b | c | d | — | — |

**Overall counts:** a = 6, b = 8, c = 7, d = 7 — varied distribution; no longest/shortest-option bias.

---

## Code Verification Log

| Question | Expected (marked answer) | Actual runtime output | Match |
|----------|--------------------------|----------------------|-------|
| 1.0 Q2 | `443` | `443` | Yes |
| 1.0 Q3 | `4` | `4` | Yes |
| 1.0 Q4 | `40` | `40` | Yes |
| 1.0 Q5 | `5` items | `5` | Yes |
| 1.1 Q1 | `HTU` | `HTU` | Yes |
| 1.1 Q3 | `25 15 5` | `25 15 5` | Yes |
| 2.0 Q2 | `02468` | `02468` | Yes |
| 2.0 Q4 | `GHIJ` | `GHIJ` | Yes |
| 2.0 Q5 | `Error Code`, `True` | same | Yes |
| 2.1 Q1 | `9876543210` | same | Yes |
| 2.1 Q3 | `True`, `False`, `Active` | same | Yes |
| 3.0 Q2 | `3` | `3` | Yes |
| 3.0 Q5 | `(40, 50)`, `(10, 30, 50)` | same | Yes |
| 3.1 Q1 | `3` | `3` | Yes |
| 3.1 Q3 | `4`, `<class 'tuple'>` | same | Yes |
| 4.0 Q2 | `5`, `100` | same | Yes |
| 4.0 Q3 | `3`, `3` | same | Yes |
| 4.0 Q5 | `None`, `disabled`, `8080` | same | Yes |
| 4.1 Q1 | `('z', 3)`, `{}`, `0` | same | Yes |
| 4.1 Q3 | `2` | `2` | Yes |

---

## Final Verdict

**PASS** — All 32 checkpoint questions use technical, code-focused scenarios (ports, buffers, protocols, config dictionaries, coordinate tuples, string indexing/slicing) with no personal names, food items, or place-based anecdotes. All marked answers verified.
