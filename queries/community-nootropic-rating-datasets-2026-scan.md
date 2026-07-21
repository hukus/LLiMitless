---
title: Community Nootropic Rating Datasets
created: 2026-04-28
updated: 2026-06-15
type: query
tags: [comparison, anecdote, cognition, safety, performance, controversy]
sources: [raw/articles/github-leogrin-nootroflix-repo.md, raw/articles/troof-nootropics-ratings-analysis.md, raw/articles/slatestarcodex-2016-nootropics-survey-results.md, raw/articles/astralcodexten-2020-nootropics-survey-results.md, raw/articles/darktka-2017-nootropics-survey-on-r-nootropics.md, raw/articles/gwern-modafinil-community-survey.md, raw/articles/reddit-2026-bromantane-thread-trail.md, raw/articles/reddit-2026-04-29-semax-selank-cerebrolysin-advice-thread.md, raw/articles/clinicaltrials-nct07437547-bpc157-hamstring-repair-record-2026-05-06.md, raw/articles/fda-bulk-drug-substances-peptide-risk-2026.md]
confidence: medium
---

# Community Nootropic Rating Datasets

This page is a provenance layer for [[anecdote-led-chemical-heat-map]], [[gray-zone-nootropic-community-signal-ledger]], and related ranking pages. These datasets are useful for prioritization, but they are all open-label, self-selected, and vulnerable to expectation and selection bias. Treat them as "where to look next", not as causal effect estimates.

The current public stack is better than a single survey: Troof now has a public code/data backend, the older SSC and ACX surveys still provide a stable baseline, the 2017 /r/Nootropics survey gives an extra Reddit-wide anchor, and Gwern's modafinil survey adds a large single-compound comparator with tolerance and adverse-event detail.
The Troof backend repo now resolves the merged-data files explicitly, which makes the ranking provenance auditable instead of just a blog-level summary.
For peptides in particular, these datasets are one of the main reasons the class should stay on the serious-candidate map. They do not prove that peptide nootropics work, but they do show that several different peptide branches are repeatedly salient enough to survive open-label community filtering rather than remaining one-thread curiosities.^[raw/articles/troof-nootropics-ratings-analysis.md]^[raw/articles/darktka-2017-nootropics-survey-on-r-nootropics.md]

June 2026 interpretation update: the community-dataset layer now feeds a sharper split. [[cerebrolysin]], [[semax]], [[selank]], [[bpc-157]], and [[bromantane]] are the strongest current nootropic/peptide anecdote-priority nodes because structured ratings, older survey signal, and thread captures point in broadly consistent directions. [[dihexa]], [[pe-22-28]], [[adamax]], [[epithalon]], and [[pinealon]] remain visible, but the current wiki treats them as de-ranked frontier or state-bound hypotheses unless stronger human, source, route, stack-attribution, regulatory/sports, adverse-event, and objective-endpoint evidence appears.^[comparisons/gray-zone-nootropic-community-signal-ledger.md]^[queries/nootropic-peptide-anecdote-frontier-2026-scan.md]^[queries/most-promising-methods-for-cognition.md]

Dataset salience is not delivered exposure. For peptide and gray-market nootropic reports, a rating should not change rank language unless the follow-up record captures exact molecule or fragment, source/COA, route/formulation, dose timing, stack order, washout or stable background, sleep/recovery phenotype, stimulant/anxiolytic/nootropic co-use where relevant, adverse events, WADA/FDA or sports/regulatory status, stop rules, and objective endpoints. Use [[molecule-triage-worksheet-for-online-scans]], [[delivery-validation-checklist-for-cognition-interventions]], [[peptide-stack-topology-ledger]], [[peptide-regulatory-live-watch-board]], [[peptide-safety-and-sourcing-risk-map]], [[stack-attribution-diary-for-self-study-and-n-of-1-protocols]], [[self-experimentation-stop-rules]], [[safety-interaction-matrix-for-multi-modal-stacks]], and [[regulatory-and-sports-visibility-map]] before upgrading a community dataset signal.^[raw/articles/reddit-2026-bromantane-thread-trail.md]^[raw/articles/reddit-2026-04-29-semax-selank-cerebrolysin-advice-thread.md]^[raw/articles/clinicaltrials-nct07437547-bpc157-hamstring-repair-record-2026-05-06.md]^[raw/articles/fda-bulk-drug-substances-peptide-risk-2026.md]

## What changed since 2024

- No new controlled community dataset has replaced the old SSC / ACX surveys as the main public open-label benchmark.
- The practical update is not a higher signal, but a cleaner separation between "felt effect" and true cognition benefit.
- The peptide cluster matters more than it did in earlier wiki passes because Semax, Selank, Cerebrolysin, and BPC-157 keep recurring as salient nodes across public datasets despite thin or uneven formal packages; the interpretation still has to stay source-, route-, stack-, safety-, and regulatory-gated.
- Bromantane now belongs in the same provenance frame as the peptide cluster rather than only in the older racetam/actoprotector lore bucket: the current read is repeated state-bound activation and fatigue-rescue salience, not broad healthy-adult cognition proof.^[raw/articles/reddit-2026-bromantane-thread-trail.md]^[raw/articles/troof-nootropics-ratings-analysis.md]^[raw/articles/darktka-2017-nootropics-survey-on-r-nootropics.md]
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
- Bromantane: looks more like a state-bound actoprotector / task-activation / fatigue-rescue signal than a clean cognition enhancer; route, sleep debt, stimulant history, exercise load, and WADA visibility are part of the signal, not afterthoughts.
- Tianeptine: high subjective effect, but mood and withdrawal relief are hard to separate from cognition.
- Phenibut: strong acute signal with tolerance and addiction issues that should keep it in a risk-first bucket.
- NSI-189 and [[noopept]] / racetams: still better treated as lore-heavy hypothesis nodes than durable enhancement branches.
- Methylene blue: unusual because anecdote and actual human imaging / memory signals overlap.
- Modafinil and nicotine: best kept as comparator anchors, not novelty claims.
- Semax, Selank, Cerebrolysin, and BPC-157: Troof's peptide cluster is one of the strongest reasons the peptide category remains worth serious attention. The same open-label system independently keeps several peptide branches alive at once, which is harder to dismiss than a single charismatic-compound spike. Read Semax as focus/strain-state salience, Selank as calm/anxiety-state salience, Cerebrolysin as polarized medical-neurorecovery salience, and BPC-157 as recovery/pain/training-continuity salience rather than direct cognition proof; require source/COA, route/formulation, stack order, washout, adverse-event, regulatory, and objective-endpoint fields before promotion.
- The 2017 /r/Nootropics survey gives Semax a median reported dose of 0.6 mg and Selank 0.25 mg, which is a useful map of where the crowd concentrates peptide curiosity even though it is not dose guidance.
- Dihexa, PE-22-28, Adamax, Epithalon, and Pinealon remain useful search labels, but this provenance page should route them through [[nootropic-peptide-anecdote-frontier-2026-scan]] and [[peptide-stack-topology-ledger]] rather than promoting them from dataset salience alone.
- Zembrin: a standout in the 2020 survey, but still not the same thing as controlled evidence.

## Candidate Ledger

| Candidate | Dataset signal |
|---|---|
| Phenylpiracetam | Strong focus-positive signal in the 2017 survey and a persistent high-rank racetam in Troof. |
| PRL-8-53 | Small but positive survey signal; still a one-study curiosity in the formal literature. |
| Bromantane | Moderate-strong state-bound activation / fatigue-rescue salience; better routed through [[gray-zone-nootropic-community-signal-ledger]], [[safety-interaction-matrix-for-multi-modal-stacks]], and [[regulatory-and-sports-visibility-map]] than treated as broad cognition. |
| Tianeptine | High mood / anxiolysis signal, but relief and reinforcement are hard to separate from cognition. |
| Phenibut | Strong acute anxiety-relief signal with tolerance and dependence risk. |
| NSI-189 | Mood / anhedonia curiosity; not a mature cognition branch. |
| [[noopept]] / racetams | Legacy nootropic lore with weak transportability across products and users. |
| Methylene blue | Unusual overlap between anecdote and narrow human imaging / memory data. |
| Modafinil | Comparator anchor with clear tolerance / adverse-event detail. |
| Nicotine | Focus / motivation signal with addiction confounding. |
| Semax | Strong peptide-cluster signal, especially in the Troof layer; enough repeated salience to justify continued focus-state tracking, but only through source, delivery, stack, washout, safety, and endpoint gates. |
| Selank | Same peptide-cluster signal, but more anxiety-adjacent than activation-heavy; still too recurrent to treat as a niche footnote, but indirect cognition claims need anxiety/sleep/stress mediation separated. |
| Cerebrolysin | Strong peptide-cluster signal and recurring community curiosity; unusually persistent for a medical peptide with route burden, but medical-product status, injection setting, hypersensitivity, co-rehabilitation, and adverse-event capture dominate interpretation. |
| BPC-157 | One of the clearest peptide-community salience nodes, reading more as recovery-performance heat than cognition proof; route through injury natural history, rehab/training changes, TB-500 / [[thymosin-beta-4]] co-use, WADA/FDA status, and recovery-mediator gates. |
| Dihexa / PE-22-28 / Adamax | Frontier visibility without a comparable structured human signal; route to [[nootropic-peptide-anecdote-frontier-2026-scan]] as de-ranked peptide hypotheses until identity, route, source/COA, safety, and human cognition evidence improves. |
| Epithalon / Pinealon | State-bound sleep, circadian, TBI-recovery, or subtle bioregulator anecdotes; useful for monitoring, not top-tier nootropic ranking, and not allowed to inherit the stronger Semax/Selank/Cerebrolysin/BPC-157 signal. |

## Safety / Adverse Events

- These are not safety studies, so adverse-event capture is incomplete by design.
- Tianeptine and phenibut are risk-first branches because dependence, withdrawal, and redosing can dominate interpretation.
- Nicotine, methylphenidate, amphetamine-class stimulants, and modafinil should stay in comparator space rather than casual nootropic space.
- A high community rating is not a safety signal.
- Peptide ratings need separate sourcing, sterility, allergy/hypersensitivity, injection/nasal-route, fixed-blend, regulatory, sports, and drug-interaction review before they are useful for safety or protocol discussion.

## Open Contradictions

- Survey rankings measure "felt effect" and willingness to keep taking something, which can reflect stimulation, anxiolysis, placebo, or withdrawal reversal rather than improved cognition.
- The Reddit survey and the modafinil survey both show that public datasets are better at surfacing salience, tolerance, and adverse effects than at estimating causal cognitive gain.
- High community scores do not automatically mean broad enhancement; they often mean the substance is noticeable.
- A large peptide signal does not tell you whether the branch is a direct nootropic, a recovery amplifier, an anxiolytic, or a sourcing-driven placebo story. It does tell you the branch deserves structured follow-up.
- A large peptide signal also does not mean all peptide labels are equivalent. The current wiki separates stronger repeated nodes from de-ranked frontier labels because vendor naming, route changes, blends, and recovery-state confounds can create the appearance of a class-wide effect.
- The best community datasets are still much better at narrowing the search space than at ranking true effect sizes.

## Use Rule

- Keep these datasets in the anecdote layer.
- Promote a candidate only when the community signal agrees with controlled evidence or with a strong safety/regulatory reason to keep it on the map.
- Do not let anecdote alone lift confidence above `low`.

## Related Pages

- [[anecdote-led-chemical-heat-map]]
- [[gray-zone-nootropic-community-signal-ledger]]
- [[nootropic-peptide-anecdote-frontier-2026-scan]]
- [[peptide-stack-topology-ledger]]
- [[peptide-safety-and-sourcing-risk-map]]
- [[peptide-regulatory-live-watch-board]]
- [[regulatory-and-sports-visibility-map]]
- [[safety-interaction-matrix-for-multi-modal-stacks]]
- [[anecdotal-evidence-in-cognitive-intervention-research]]
- [[biohacker-anecdote-methodology]]
