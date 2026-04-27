---
title: Failed-Mechanism Atlas for Cognition Interventions
created: 2026-04-30
updated: 2026-05-03
type: comparison
tags: [comparison, cognition, biomarker, clinical-trial, controversy, mechanism, safety, protocol, device, performance]
sources: [raw/articles/pubmed-31264943-donepezil-fragile-x-biomarker-null.md, raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md, raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md, raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md, raw/articles/pubmed-40908377-taVNS-mental-stressor.md, raw/articles/pubmed-39759424-iclepertin-cct-schizophrenia-phase2.md, raw/articles/pubmed-41233083-iclepertin-connex-phase3-schizophrenia.md, raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md, raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md, raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md, raw/articles/pubmed-37948381-near-transfer-inhibition-training-rct.md, raw/articles/pubmed-29408453-rapamycin-older-human-cohort-cognitive-effects.md, raw/articles/nature-s43856-025-00904-9-rapamycin-adrd-phase1-clinical-trial.md, raw/articles/pubmed-39070254-creatine-cognition-adults-meta-analysis.md, raw/articles/pubmed-32928279-sodium-oligomannate-phase2.md, raw/articles/clinicaltrials-nct04520412-gv971-green-memory-global.md, raw/articles/greenvalley-2022-gv971-global-phase3-termination.md, raw/articles/pubmed-40650226-ampa-kainate-modulators-cns-review.md, raw/articles/pubmed-21940760-cx717-night-shift-work.md, raw/articles/pubmed-17487227-cx516-schizophrenia-rct.md]
confidence: medium
---

# Failed-Mechanism Atlas for Cognition Interventions

This atlas is the top-level map for branches that look mechanistically plausible but keep failing where it matters most: objective cognition, durable retention, transfer, or global replication. It sits above the detailed pattern libraries in [[parameterized-null-evidence-library]] and [[small-molecule-biomarker-behavior-failure-library]], and it is the page to read when a branch seems "almost positive" but you need the failure shape, not the headline.

## What Changed Since 2024

- Biomarker-positive / endpoint-negative failures are now common enough to be a reusable branch label rather than a one-off warning: donepezil in fragile X, semaglutide in early symptomatic AD, intranasal insulin PET work, taVNS under acute stress, and rapamycin phase 1 all show the same split.^[raw/articles/pubmed-31264943-donepezil-fragile-x-biomarker-null.md]^[raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md]^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-40908377-taVNS-mental-stressor.md]^[raw/articles/nature-s43856-025-00904-9-rapamycin-adrd-phase1-clinical-trial.md]
- The wiki now has repeated examples of primary-negative / secondary-positive reading traps, especially semaglutide in MDD and the 5-HT6 / glutamatergic comparator lanes that never converted into a durable cognition story.^[raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md]^[raw/articles/pubmed-39759424-iclepertin-cct-schizophrenia-phase2.md]^[raw/articles/pubmed-41233083-iclepertin-connex-phase3-schizophrenia.md]
- Healthy-null / disease-positive splits are now explicit for stimulation and metabolic branches, so the atlas must label phenotype and state before it labels a mechanism as good or bad.^[raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md]^[raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md]^[raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md]
- Geography-limited replication is no longer a theoretical issue. GV-971 / sodium oligomannate now needs its own evidentiary lane because the China signal, global registry status, and termination status do not line up cleanly.^[raw/articles/pubmed-32928279-sodium-oligomannate-phase2.md]^[raw/articles/clinicaltrials-nct04520412-gv971-green-memory-global.md]^[raw/articles/greenvalley-2022-gv971-global-phase3-termination.md]

## Reading Rules

1. Classify the weakest honest failure first.
2. Allow multiple layers to apply to the same branch.
3. Do not promote a biomarker, subjective state, or trained-task gain into a general cognition win.
4. Do not treat a disease-state or rescue-state result as healthy-adult enhancement.
5. Do not treat a single-country or suspended registry package as global confirmation.
6. Use the detailed null libraries for branch-specific examples; use this page for the cross-branch failure shape.

## Atlas

| Failure layer | Representative branches | What moved | What failed | Common wrong inference |
|---|---|---|---|---|
| `biomarker-positive / endpoint-negative` | Donepezil in fragile X; semaglutide EVOKE/EVOKE+; intranasal insulin PET; taVNS stress; rapamycin phase 1 | fMRI activation, PET uptake, autonomic measures, inflammatory markers, or exposure/PK | Prespecified cognition or progression endpoint | A brain-state shift is not automatically a cognition shift.^[raw/articles/pubmed-31264943-donepezil-fragile-x-biomarker-null.md]^[raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md]^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-40908377-taVNS-mental-stressor.md]^[raw/articles/nature-s43856-025-00904-9-rapamycin-adrd-phase1-clinical-trial.md] |
| `primary-negative / secondary-positive` | Semaglutide MDD; post hoc rescue logic; iclepertin adjunctive training | Secondary composite, post hoc, or timepoint signal | Prespecified primary endpoint | A prettier secondary endpoint does not rescue a negative primary outcome.^[raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md]^[raw/articles/pubmed-39759424-iclepertin-cct-schizophrenia-phase2.md]^[raw/articles/pubmed-41233083-iclepertin-connex-phase3-schizophrenia.md] |
| `healthy-null / disease-positive` | tACS older adults vs impairment meta-analysis; tDCS older-adult/MCI follow-up; tPBM concussion null | Disease-context or early rescue signals | Healthy-adult generalization or recovery durability | A disorder-state signal does not automatically become a broad enhancer claim.^[raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md]^[raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md]^[raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md] |
| `trained-task-positive / transfer-negative` | Near-transfer inhibition training; creatine domain effects | Trained or near-transfer task, speed, or one subdomain | Untrained transfer, executive breadth, or overall cognition | Practice gains are not the same thing as durable generalization.^[raw/articles/pubmed-37948381-near-transfer-inhibition-training-rct.md]^[raw/articles/pubmed-39070254-creatine-cognition-adults-meta-analysis.md] |
| `durable-null / immediate-positive` | tDCS older adults/MCI; tPBM concussion; rapamycin human aging branch | Small acute or early signals | 1-month durability, concussion recovery, or later cognition win | A short-horizon signal is not enough to call a branch durable.^[raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md]^[raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md]^[raw/articles/pubmed-29408453-rapamycin-older-human-cohort-cognitive-effects.md] |
| `geography-limited / registry-limited` | GV-971 / sodium oligomannate | China-phase program or local approval | Global confirmation or posted multinational efficacy | Approval geography and registry status are part of the evidence.^[raw/articles/pubmed-32928279-sodium-oligomannate-phase2.md]^[raw/articles/clinicaltrials-nct04520412-gv971-green-memory-global.md]^[raw/articles/greenvalley-2022-gv971-global-phase3-termination.md] |
| `mechanism-positive / human-null` | 5-HT6 antagonists; AMPAkines (CX516/CX717); GlyT1/NMDA comparator lane | Receptor rationale, target engagement, or state rescue in animals | Durable human cognition win | Mechanistic plausibility is not translational success.^[raw/articles/pubmed-40650226-ampa-kainate-modulators-cns-review.md]^[raw/articles/pubmed-17487227-cx516-schizophrenia-rct.md]^[raw/articles/pubmed-21940760-cx717-night-shift-work.md]^[raw/articles/pubmed-39759424-iclepertin-cct-schizophrenia-phase2.md]^[raw/articles/pubmed-41233083-iclepertin-connex-phase3-schizophrenia.md] |

## Pattern Notes

### Biomarker Without Behavior

This is the most common mistake in the current wiki. The branch can look active because the target moved, the tissue signal moved, or the physiology moved. That still does not answer the user-relevant question: did cognition, progression, transfer, or durability improve? Semaglutide, intranasal insulin, taVNS, and rapamycin are the clearest current examples.^[raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md]^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-40908377-taVNS-mental-stressor.md]^[raw/articles/nature-s43856-025-00904-9-rapamycin-adrd-phase1-clinical-trial.md]

### The Headline Trap

A branch can look better in the headline than in the prespecified endpoint. Semaglutide in MDD and the iclepertin adjunctive-training / phase 3 sequence both show why the wiki keeps primary and secondary outcomes separate.^[raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md]^[raw/articles/pubmed-39759424-iclepertin-cct-schizophrenia-phase2.md]^[raw/articles/pubmed-41233083-iclepertin-connex-phase3-schizophrenia.md]

### Phenotype Matters

Some branches are not "positive" or "negative" in the abstract; they are state-dependent. That is the right way to read tACS, tDCS, tPBM, and intranasal insulin, where disease state, rescue state, metabolic state, or delivery context changes the result materially.^[raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md]^[raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md]^[raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md]^[raw/articles/pubmed-32928279-sodium-oligomannate-phase2.md]

### Translation Is Harder Than Mechanism

The mechanism can still be elegant while the human package stays weak. The AMPAkine lane and the 5-HT6 / GlyT1 comparator lanes are the current cautionary examples: a plausible receptor story does not guarantee a durable human cognition win.^[raw/articles/pubmed-40650226-ampa-kainate-modulators-cns-review.md]^[raw/articles/pubmed-17487227-cx516-schizophrenia-rct.md]^[raw/articles/pubmed-21940760-cx717-night-shift-work.md]^[raw/articles/pubmed-39759424-iclepertin-cct-schizophrenia-phase2.md]^[raw/articles/pubmed-41233083-iclepertin-connex-phase3-schizophrenia.md]

## Top Sources

1. raw/articles/pubmed-31264943-donepezil-fragile-x-biomarker-null.md - clean biomarker/behavior split.
2. raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md - biomarker-active but primary-negative AD branch.
3. raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md - primary-negative / secondary-positive split.
4. raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md - physiology shift without direct cognition proof.
5. raw/articles/pubmed-40908377-taVNS-mental-stressor.md - autonomic movement without PASAT benefit.
6. raw/articles/pubmed-39759424-iclepertin-cct-schizophrenia-phase2.md - adjunctive training null with glutamatergic rationale.
7. raw/articles/pubmed-41233083-iclepertin-connex-phase3-schizophrenia.md - phase 3 negative comparator.
8. raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md - healthy-adult stimulation null.
9. raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md - recovery-phenotype null.
10. raw/articles/pubmed-29408453-rapamycin-older-human-cohort-cognitive-effects.md - durability failure despite aging plausibility.
11. raw/articles/pubmed-39070254-creatine-cognition-adults-meta-analysis.md - domain gains without broad enhancement.
12. raw/articles/pubmed-32928279-sodium-oligomannate-phase2.md - geography-sensitive interpretation.
13. raw/articles/clinicaltrials-nct04520412-gv971-green-memory-global.md - registry / status context.
14. raw/articles/pubmed-40650226-ampa-kainate-modulators-cns-review.md - mechanism-positive but translation-weak class review.

## Open Contradictions

- A branch can live in more than one failure layer at once.
- A disease-state or rescue-state signal can be real and still fail to generalize.
- A local approval or country-specific positive trial is not the same thing as global replication.
- A biomarker move can be a useful target-engagement finding even when it is not a cognition win.

## Related Pages

- [[parameterized-null-evidence-library]]
- [[small-molecule-biomarker-behavior-failure-library]]
- [[negative-evidence-watchlist-for-cognition-interventions]]
- [[evidence-credibility-gate-for-cognition-interventions]]
- [[endpoint-fragility-ledger]]
- [[target-engagement-to-behavior-mediation-audit]]
- [[cognitive-fidelity-split]]
- [[molecule-intake-triage-table]]

## Actionable Wiki Updates

- Add this page to `index.md` under Comparisons.
- Cross-link it from [[parameterized-null-evidence-library]] and [[small-molecule-biomarker-behavior-failure-library]] as the top-level atlas.
- Use the failure-layer labels in future scan pages so new nulls get filed into a reusable bucket on first pass.
- Keep geography-limited and registry-limited results distinct from ordinary nulls.
