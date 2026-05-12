---
title: Parameterized Null Evidence Library for Cognition Interventions
created: 2026-04-29
updated: 2026-05-12
type: comparison
tags: [comparison, cognition, biomarker, clinical-trial, controversy, device, performance, protocol, safety]
sources: [raw/articles/pubmed-31264943-donepezil-fragile-x-biomarker-null.md, raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md, raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md, raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md, raw/articles/pubmed-40908377-taVNS-mental-stressor.md, raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md, raw/articles/pubmed-41507453-tacs-cognitive-impairment-meta.md, raw/articles/pubmed-37948381-near-transfer-inhibition-training-rct.md, raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md, raw/articles/pubmed-40004217-tdcs-cognitive-stimulation-amci-null.md, raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md, raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md, raw/articles/pubmed-29408453-rapamycin-older-human-cohort-cognitive-effects.md, raw/articles/nature-s43856-025-00904-9-rapamycin-adrd-phase1-clinical-trial.md, raw/articles/pubmed-40394335-rapamycin-adrd-phase1-open-label.md, raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md, raw/articles/nature-2026-al002-trem2-agonistic-antibody-early-ad-phase2.md, raw/articles/jama-2026-exercise-intensive-vascular-risk-cognition-null.md, raw/articles/springer-2026-exercise-brain-volume-cognition-dose-response-meta.md]
confidence: medium
---

# Parameterized Null Evidence Library for Cognition Interventions

This page turns recurring failure shapes into reusable labels. The goal is not to say a branch is useless; the goal is to stop the wiki from relearning the same lesson in different modalities. It generalizes the small-molecule failure library into a cross-domain pattern set for molecules, devices, and training paradigms, and it sits next to [[endpoint-fragility-ledger]], [[negative-evidence-watchlist-for-cognition-interventions]], [[contradiction-log-for-cognition-interventions]], and [[evidence-credibility-gate-for-cognition-interventions]].

## What Changed Since 2024

- Biomarker movement without a cognition win is now a repeatable pattern rather than a rare curiosity: semaglutide, AL002/TREM2, intranasal insulin, taVNS, and rapamycin all show versions of this split.^[raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md]^[raw/articles/nature-2026-al002-trem2-agonistic-antibody-early-ad-phase2.md]^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-40908377-taVNS-mental-stressor.md]^[raw/articles/pubmed-40394335-rapamycin-adrd-phase1-open-label.md]
- Transfer failure is now explicit in the wiki rather than being smuggled in as a generic "cognition" miss; near transfer and trained-task gains need separate labels.^[raw/articles/pubmed-37948381-near-transfer-inhibition-training-rct.md]
- Healthy-adult and impairment-phenotype results now diverge more clearly in stimulation meta-analyses, so branch labels need a phenotype field, not just a modality name.^[raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md]^[raw/articles/pubmed-41507453-tacs-cognitive-impairment-meta.md]
- Lab-positive / home-null mismatches are now a first-order delivery problem, not a side note, especially for closed-loop sleep stimulation and related state-dependent devices.^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]
- Acute-positive / long-duration-null now has a clean reserve example: acute exercise and structural-reserve meta-analyses look favorable, while a 24-month exercise plus intensive vascular-risk-reduction trial missed cognition endpoints in older at-risk adults.^[raw/articles/springer-2026-exercise-brain-volume-cognition-dose-response-meta.md]^[raw/articles/jama-2026-exercise-intensive-vascular-risk-cognition-null.md]

## How To Use It

1. Tag the weakest honest pattern first.
2. Allow multiple tags if one paper clears more than one bucket.
3. Do not upgrade a biomarker or subjective change into a cognition win.
4. Do not upgrade a trained-task improvement into transfer.
5. Do not upgrade an acute win into durability without a real delay or washout.
6. Do not upgrade a lab-positive result into home-replicated efficacy unless the delivery context also changed cleanly.

## Pattern Table

| Pattern | Current examples | What moved | What failed | Common wrong inference |
|---|---|---|---|---|
| `biomarker-positive / endpoint-negative` | Donepezil in fragile X; semaglutide EVOKE/EVOKE+; AL002/TREM2; intranasal insulin PET; taVNS stress-regulation; rapamycin phase 1 | fMRI activation, PET uptake, autonomic measures, CSF target-engagement markers, or inflammatory/biomarker readouts | Prespecified cognition, clinical, or progression endpoints | A biological effect is not the same thing as a cognitive effect.^[raw/articles/pubmed-31264943-donepezil-fragile-x-biomarker-null.md]^[raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md]^[raw/articles/nature-2026-al002-trem2-agonistic-antibody-early-ad-phase2.md]^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-40908377-taVNS-mental-stressor.md]^[raw/articles/nature-s43856-025-00904-9-rapamycin-adrd-phase1-clinical-trial.md] |
| `primary-negative / secondary-positive` | Semaglutide MDD trial; PENSA APOE4/SCD multimodal RCT | Secondary composite or post-washout signal | Prespecified primary endpoint | A prettier secondary endpoint does not rescue a negative primary outcome.^[raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md]^[raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md] |
| `healthy-null / disease-positive` | tACS older-adults meta-analysis versus impairment meta-analysis | Disease-context performance in impaired cohorts | Healthy-adult generalization | A disorder-state signal does not automatically become a healthy-enhancement signal.^[raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md]^[raw/articles/pubmed-41507453-tacs-cognitive-impairment-meta.md] |
| `trained-task-positive / transfer-negative` | Near-transfer inhibition training RCT | Performance on the trained or near-transfer task | Broader generalization | Practice gains are not broad transfer until an untrained task moves.^[raw/articles/pubmed-37948381-near-transfer-inhibition-training-rct.md] |
| `durable-null / immediate-positive` | tDCS older-adults/MCI follow-up; tPBM concussion null; rapamycin human aging branch | Small acute or early signals | 1-month durability, concussion recovery, or later cognition win | A short-horizon signal is not enough to call a branch durable.^[raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md]^[raw/articles/pubmed-40004217-tdcs-cognitive-stimulation-amci-null.md]^[raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md]^[raw/articles/pubmed-29408453-rapamycin-older-human-cohort-cognitive-effects.md] |
| `acute-positive / long-duration-null` | Acute exercise and exercise brain-volume preservation versus 24-month exercise / intensive vascular-risk reduction | Same-day cognition or structural-reserve association | Long-duration global cognition endpoint | A favorable acute or mechanistic reserve signal does not guarantee prevention-scale cognition improvement.^[raw/articles/springer-2026-exercise-brain-volume-cognition-dose-response-meta.md]^[raw/articles/jama-2026-exercise-intensive-vascular-risk-cognition-null.md] |
| `home-null / lab-positive` | Closed-loop auditory stimulation ecological-memory study | Sleep physiology or lab-state engagement | Ecological memory performance at home | A home deployment is not validated just because the lab physiology moved.^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md] |

## Top Sources

1. raw/articles/pubmed-31264943-donepezil-fragile-x-biomarker-null.md - biomarker/behavior split anchor.
2. raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md - primary-negative biomarker-active AD branch.
3. raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md - secondary-positive / primary-negative split.
4. raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md - delivery and target-engagement example.
5. raw/articles/pubmed-40908377-taVNS-mental-stressor.md - autonomic movement without PASAT benefit.
6. raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md - healthy-adult tACS split.
7. raw/articles/pubmed-41507453-tacs-cognitive-impairment-meta.md - impairment-phenotype tACS comparator.
8. raw/articles/pubmed-37948381-near-transfer-inhibition-training-rct.md - transfer-negative training example.
9. raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md - durability failure example.
10. raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md - home-null / lab-positive example.
11. raw/articles/pubmed-29408453-rapamycin-older-human-cohort-cognitive-effects.md - human rapamycin cognition flatness.
12. raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md - washout and secondary-signal caution.
13. raw/articles/nature-2026-al002-trem2-agonistic-antibody-early-ad-phase2.md - target-engagement / clinical-endpoint split.
14. raw/articles/jama-2026-exercise-intensive-vascular-risk-cognition-null.md - long-duration exercise / vascular-risk null.

## Open Contradictions

- One paper can belong to more than one pattern, so the labels are not mutually exclusive.
- A branch can be biomarker-positive and still fail on the outcome the user actually cares about.
- A disease-positive or state-rescue signal can be real and still fail to generalize to healthy adults.
- A transfer-positive training result still needs an untrained probe before it counts as generalization.
- A home deployment can fail even when the lab version looks biologically active.

## Related Pages

- [[endpoint-fragility-ledger]]
- [[small-molecule-biomarker-behavior-failure-library]]
- [[failed-mechanism-atlas-for-cognition-interventions]]
- [[negative-evidence-watchlist-for-cognition-interventions]]
- [[contradiction-log-for-cognition-interventions]]
- [[evidence-credibility-gate-for-cognition-interventions]]
- [[cognitive-fidelity-split]]
- [[target-engagement-to-behavior-mediation-audit]]

## Actionable Wiki Updates

- Page is already indexed and cross-linked from [[endpoint-fragility-ledger]], [[negative-evidence-watchlist-for-cognition-interventions]], [[failed-mechanism-atlas-for-cognition-interventions]], and [[small-molecule-biomarker-behavior-failure-library]].
- Reuse the pattern labels in future scans so nulls get filed consistently instead of as one-off prose.
- Keep the page aligned with the existing small-molecule failure library rather than duplicating branch-specific examples there.
