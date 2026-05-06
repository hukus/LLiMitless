---
title: Community Nootropic Rating Datasets
created: 2026-04-28
updated: 2026-05-06
type: query
tags: [comparison, anecdote, cognition, safety, performance, controversy]
sources: [raw/articles/github-leogrin-nootroflix-repo.md, raw/articles/troof-nootropics-ratings-analysis.md, raw/articles/slatestarcodex-2016-nootropics-survey-results.md, raw/articles/astralcodexten-2020-nootropics-survey-results.md, raw/articles/darktka-2017-nootropics-survey-on-r-nootropics.md, raw/articles/gwern-modafinil-community-survey.md]
confidence: medium
---

# Community Nootropic Rating Datasets

This page is a provenance layer for [[anecdote-led-chemical-heat-map]] and related ranking pages. These datasets are useful for prioritization, but they are all open-label, self-selected, and vulnerable to expectation and selection bias. Treat them as "where to look next", not as causal effect estimates.

The current public stack is better than a single survey: Troof now has a public code/data backend, the older SSC and ACX surveys still provide a stable baseline, the 2017 /r/Nootropics survey gives an extra Reddit-wide anchor, and Gwern's modafinil survey adds a large single-compound comparator with tolerance and adverse-event detail.
The Troof backend repo now resolves the merged-data files explicitly, which makes the ranking provenance auditable instead of just a blog-level summary.

## What changed since 2024

- No new controlled community dataset has replaced the old SSC / ACX surveys as the main public open-label benchmark.
- The practical update is not a higher signal, but a cleaner separation between "felt effect" and true cognition benefit.
- The best use remains candidate triage for branches like phenylpiracetam, PRL-8-53, bromantane, tianeptine, phenibut, NSI-189, [[noopept]] / racetams, methylene blue, modafinil, nicotine, Semax, Selank, Cerebrolysin, and BPC-157.
- The extra public anchors mainly sharpen ranking hygiene: Troof's repo confirms the merged-data backend, the 2017 Reddit survey broadens the community sample, and the modafinil survey supplies a detailed side-effect/tolerance comparator.

## Dataset Snapshot

| Source | Year | Sample | Method | Main strengths | Main limitations |
|---|---:|---:|---|---|---|
| Troof nootropic ratings analysis | 2022 | 2,802 people / 36,163 ratings | Recommender analysis with a random-intercept Bayesian model | Broad coverage, many compounds, includes lifestyle items and under-discussed peptides | Self-selected, open-label, causal ambiguity |
| Troof backend repo / nootroflix | active repo | same merged dataset as Troof | Public code/data repository | Confirms the merged SSC + newer-user backend and data-file structure | Not an independent signal; analytic choices matter |
| SSC nootropics survey | 2016 | 850 respondents | Open-label survey on a 0-10 scale | Bigger follow-up sample than the earlier 150-person run; useful relative ordering | Self-selected, no placebo control, product-identity confounds |
| ACX nootropics survey | 2020 run, posted 2021 | 852 respondents | Open-label survey with ad hoc Bayesian adjustment | Good update anchor; useful tolerance and use-pattern detail | Mostly SSC readers, open-label, several items with tiny counts |
| /r/Nootropics survey | 2017 | 380 participants / 63 substances | Seven-point subjective-effect survey | Broader Reddit sample and a useful extra ranking anchor | Smaller sample, noisy dose reports, no blinding |
| Modafinil community survey | 2015-10 fielding / later analysis | 3,835 QA-passing responses; 216 genotyped | Multi-section user survey | Strong comparator for tolerance and side-effect patterns | Single-substance, self-selected, recall bias |

## Signals Worth Carrying Forward

- Phenylpiracetam: the strongest racetam-style signal in Troof, and one of the most persistent "feels real" community branches.
- The 2017 /r/Nootropics survey lines up with Troof on the general stimulant / study-stack side: adrafinil, caffeine, phenylpiracetam, modafinil, armodafinil, methylphenidate, and Adderall all scored as focus-positive, while tianeptine and phenibut dominated the anxiety / mood edges.
- Gwern's modafinil survey is mostly useful as a comparator anchor: it gives a large tolerance and adverse-event baseline, and it weakens the idea that a simple COMT-based moderator explains subjective benefit.
- PRL-8-53: one-study-plus-lore territory; survey signal is positive, but the human evidence base is still tiny.
- Bromantane: looks more like a stimulant / task-activation signal than a clean cognition enhancer.
- Tianeptine: high subjective effect, but mood and withdrawal relief are hard to separate from cognition.
- Phenibut: strong acute signal with tolerance and addiction issues that should keep it in a risk-first bucket.
- NSI-189 and [[noopept]] / racetams: still better treated as lore-heavy hypothesis nodes than durable enhancement branches.
- Methylene blue: unusual because anecdote and actual human imaging / memory signals overlap.
- Modafinil and nicotine: best kept as comparator anchors, not novelty claims.
- Semax, Selank, Cerebrolysin, and BPC-157: Troof's peptide cluster is the main reason these remain worth tracking, with BPC-157 reading more like a recovery-performance node than a clean cognition node.
- The 2017 /r/Nootropics survey gives Semax a median reported dose of 0.6 mg and Selank 0.25 mg, which is a useful map of where the crowd concentrates peptide curiosity even though it is not dose guidance.
- Zembrin: a standout in the 2020 survey, but still not the same thing as controlled evidence.

## Candidate Ledger

| Candidate | Dataset signal |
|---|---|
| Phenylpiracetam | Strong focus-positive signal in the 2017 survey and a persistent high-rank racetam in Troof. |
| PRL-8-53 | Small but positive survey signal; still a one-study curiosity in the formal literature. |
| Bromantane | Reads as task activation / fatigue rescue rather than broad cognition. |
| Tianeptine | High mood / anxiolysis signal, but relief and reinforcement are hard to separate from cognition. |
| Phenibut | Strong acute anxiety-relief signal with tolerance and dependence risk. |
| NSI-189 | Mood / anhedonia curiosity; not a mature cognition branch. |
| [[noopept]] / racetams | Legacy nootropic lore with weak transportability across products and users. |
| Methylene blue | Unusual overlap between anecdote and narrow human imaging / memory data. |
| Modafinil | Comparator anchor with clear tolerance / adverse-event detail. |
| Nicotine | Focus / motivation signal with addiction confounding. |
| Semax | Strong peptide-cluster signal, especially in the Troof layer. |
| Selank | Same peptide-cluster signal, but more anxiety-adjacent than activation-heavy. |
| Cerebrolysin | Strong peptide-cluster signal and recurring community curiosity. |
| BPC-157 | One of the clearest peptide-community salience nodes, but still recovery-adjacent rather than cognition proof. |

## Safety / Adverse Events

- These are not safety studies, so adverse-event capture is incomplete by design.
- Tianeptine and phenibut are risk-first branches because dependence, withdrawal, and redosing can dominate interpretation.
- Nicotine, methylphenidate, amphetamine-class stimulants, and modafinil should stay in comparator space rather than casual nootropic space.
- A high community rating is not a safety signal.

## Open Contradictions

- Survey rankings measure "felt effect" and willingness to keep taking something, which can reflect stimulation, anxiolysis, placebo, or withdrawal reversal rather than improved cognition.
- The Reddit survey and the modafinil survey both show that public datasets are better at surfacing salience, tolerance, and adverse effects than at estimating causal cognitive gain.
- High community scores do not automatically mean broad enhancement; they often mean the substance is noticeable.
- The best community datasets are still much better at narrowing the search space than at ranking true effect sizes.

## Use Rule

- Keep these datasets in the anecdote layer.
- Promote a candidate only when the community signal agrees with controlled evidence or with a strong safety/regulatory reason to keep it on the map.
- Do not let anecdote alone lift confidence above `low`.

## Related Pages

- [[anecdote-led-chemical-heat-map]]
- [[anecdotal-evidence-in-cognitive-intervention-research]]
- [[biohacker-anecdote-methodology]]
