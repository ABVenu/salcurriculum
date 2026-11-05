# Resources — S01: AI for Everyday Work: Analytics & Decision-Making

Small, pre-aggregated tables for the class to paste directly into an AI chat tool during the live exercises. Every number here was computed and double-checked from the underlying Groww event dataset (1,000 simulated users, ~23,500 events, 1 April – 15 July 2026, synthetic — not real user data), so each file has a known-correct answer to check the AI's output against.

| File | Used in | What it shows |
|------|---------|-----------------|
| `onboarding-funnel-summary.csv` | Scene 1 | The 7-step onboarding funnel (Sign Up Started → First Deposit Completed): users reaching each step and step-over-step conversion |
| `daily-signups.csv` | Scene 1 | 90 days of daily sign-up counts, for the anomaly-spotting exercise |
| `onboarding-conversion-by-channel.csv` | Scene 1 & 2 | Overall onboarding conversion rate by acquisition channel (6 channels) |
| `conversion-by-other-segments.csv` | Scene 2 | Overall conversion by platform, city tier, and user type — the "flat variable" comparison set |
| `weekly-signups-by-channel.csv` | Scene 2 | Weekly sign-up counts by channel across all 13 weeks, for the guided EDA prompt-chain exercise |
| `investing-funnel-summary.csv` | Scene 2 (optional extension) | The 6-step investing funnel (Explore Screen Viewed → Order Executed) |
| `kyc-timing-and-rejection.csv` | Scene 3 | KYC approval turnaround time and rejection rate, for the arithmetic sanity-check exercise |
| `retention-by-cohort.csv` | Scene 3 | Week 1/4/8/12 retention for all signups, activated users, and never-deposited users |
| `retention-by-channel.csv` | Scene 3 (optional extension) | Week 1/4/8 retention by acquisition channel |
| `activation-hypothesis-retention.csv` | Scene 3 | The two activation-hypothesis comparisons: invested-within-7-days vs. invested-later, and SIP starters vs. investors without a SIP — the correlation-vs-causation teaching moment |

All figures are internally consistent with each other (e.g. the same 1,000 → 479 onboarding funnel numbers appear in both `onboarding-funnel-summary.csv` and are restated inside `Lecture Notes.md`), so instructors can safely mix and match tables across exercises without numbers disagreeing.
