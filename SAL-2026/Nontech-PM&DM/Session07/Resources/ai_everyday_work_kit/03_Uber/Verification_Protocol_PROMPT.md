# Systematic Verification Protocol: Prompt Pack
**Scene 3, LO1 · run on `Uber_Competitor_Market_Research_Report.md`**

Use a tool **with web search enabled** (Gemini, ChatGPT with search, Perplexity, or Claude with web search). Run the three prompts in order, in the same chat.

---

## PROMPT 1: Claim Extraction (build the "claim ledger")
```
You are a fact-checker preparing a report for professional distribution.
Do NOT verify anything yet.

Extract EVERY checkable claim from the report below into a table:
| ID | Exact claim (verbatim) | Section | Claim type | Risk level |

Claim types: NUMBER / DATE / QUOTE / CITATION / EVENT / COMPARISON /
CALCULATION / OPINION-PRESENTED-AS-FACT
Risk level: HIGH if a wrong value would embarrass us or change a decision
(financials, quotes from named people, market share, recommendations);
otherwise MEDIUM/LOW.

Rules:
- One claim per row. Split compound sentences.
- Include claims inside tables.
- Flag any CALCULATION so it can be recomputed.
- Flag any sentence that is an opinion dressed as fact.

REPORT:
<paste report>
```

## PROMPT 2: Verify Against Primary Sources
```
Now verify each HIGH and MEDIUM claim in the ledger. For each, follow this
protocol strictly:

1. SOURCE TIER — find the best available source:
   Tier 1 = primary (company filing/earnings release, regulator, the
   person's verbatim interview/video). Tier 2 = reputable news citing a
   primary source. Tier 3 = blogs/aggregators. Never accept Tier 3 alone
   for a HIGH-risk claim.
2. QUOTES — find the original verbatim quote and its venue. If you cannot
   find the exact wording, verdict = "UNVERIFIED — DO NOT PUBLISH".
3. CITATIONS — confirm the cited report actually exists and contains the
   figure. If you cannot locate the document, say so. Do not assume it
   exists.
4. CALCULATIONS — recompute and show the arithmetic.
5. RECENCY — note the date of the source. Flag anything older than 12
   months as possibly OUTDATED.
6. UNITS — check currency (₹ vs $), crore vs billion, %, and the metric
   definition (e.g., Revenue vs Gross Bookings).

Output table:
| ID | Claim | Verdict (✅ Verified / ⚠️ Partially true / ❌ False /
❓ Unverifiable / 🕒 Outdated) | Correct value | Source (name, date, URL)
| Tier | Notes |

Be honest: "I could not verify" is a valid and preferred answer over a
guess.
```

## PROMPT 3: Distribution Readiness Check
```
Based on the verified ledger:
1. List every claim that MUST be removed or corrected before distribution.
2. Identify any recommendation or conclusion in the report that depended
   on a false or outdated claim — and state how the conclusion changes.
3. Flag biased or unsupported language (e.g., "unsustainable", "clear
   leader", "never worked") and suggest neutral, evidence-based wording.
4. Give a final verdict: READY / READY WITH EDITS / NOT READY.
5. Produce a corrected Executive Summary (max 150 words), with an
   inline source for every number.
```

---

## Human checklist (run it even when the AI says "verified")
- [ ] I opened the source link myself for every HIGH-risk claim.
- [ ] Every quote attributed to a real person traces to a verbatim original.
- [ ] Every percentage set that should add to 100 does.
- [ ] I recomputed every ratio.
- [ ] Every "latest" figure is actually the latest available.
- [ ] ₹/$ and crore/billion conversions are correct.
- [ ] The recommendation still holds once the corrections are made.
