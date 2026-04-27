---
title: Ecological Robustness Table for Cognition Interventions
created: 2026-04-28
updated: 2026-04-28
type: comparison
tags: [comparison, cognition, device, protocol, controversy, safety]
sources: [raw/articles/pubmed-40482941-tpbm-healthy-older-adults-working-memory-fnirs.md, raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md, raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md, raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md, raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md, raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md, raw/articles/pubmed-41040248-temporal-interference-memory-encoding.md, raw/articles/pubmed-41723237-safe-focused-ultrasound-bbb-opening-tight-junctions.md, raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md, raw/articles/pubmed-39124651-taVNS-autonomic-function.md, raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md, raw/articles/pubmed-39905569-tdcs-cognitive-impairments-dosage-parameters.md, raw/articles/pubmed-40470501-transcranial-ultrasound-stimulation-parameters-neurological-diseases.md]
confidence: medium
---

# Ecological Robustness Table for Cognition Interventions

This page separates exposure validity from ecological durability. A method can be sham-controlled, biologically active, and still fail once delivery moves from a lab-style setup into home use or a real-world cognitive context. The cleanest current split is closed-loop sleep stimulation: the home ecological study moved slow-oscillation amplitude, but memory and vigilance stayed flat. By contrast, tPBM now has both a controlled older-adult signal and a small home MCI pilot, which makes it the closest current home-capable behavior-positive candidate even though replication is still thin.^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md]^[raw/articles/pubmed-40482941-tpbm-healthy-older-adults-working-memory-fnirs.md]^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]^[raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md]

Delivery validation and ecological robustness are different gates. Intranasal insulin can be shown to reach brain tissue on PET, tFUS can be bounded for safety and target access, and temporal interference can modulate human memory and fMRI, but none of those facts by themselves prove durable enhancement.^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-41723237-safe-focused-ultrasound-bbb-opening-tight-junctions.md]^[raw/articles/pubmed-41040248-temporal-interference-memory-encoding.md]

## How To Read It

- `Physiology-only` means target engagement, biomarkers, or neural state move, but behavioral improvement is absent or untested.
- `Lab-positive` means a cognition or behavior result exists in a controlled setting.
- `Home-replicated` means the effect survives ecological delivery.
- `Behavior-positive` means the outcome moves on a meaningful cognitive task or clinical endpoint.
- These labels are not mutually exclusive, but a branch should only be promoted after it clears the stricter bucket.

## Robustness Ladder

| Bucket | What counts | Current examples | Current read |
|---|---|---|---|
| Physiology-only | Neural state, target exposure, or biomarker movement without a durable behavior win | Closed-loop auditory stimulation at home increased slow-oscillation amplitude but did not improve memory or vigilance; intranasal insulin PET showed brain uptake; tFUS work is still dominated by safety, reporting, and field-control questions | Useful for mechanism and delivery validation, but not enough to rank as an efficacy-positive intervention.^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-41723237-safe-focused-ultrasound-bbb-opening-tight-junctions.md]^[raw/articles/pubmed-40470501-transcranial-ultrasound-stimulation-parameters-neurological-diseases.md] |
| Lab-positive | Behavior improves under controlled conditions | tPBM improved working memory in healthy older adults; CLAS plus cathodal tDCS improved overnight retention in a small preprint; tACS meta-analyses suggest age- and disease-state sensitivity; taVNS has a small but real healthy-adult meta signal | Real signal, but the result usually depends on timing, phenotype, or protocol details.^[raw/articles/pubmed-40482941-tpbm-healthy-older-adults-working-memory-fnirs.md]^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md]^[raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md]^[raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md]^[raw/articles/pubmed-39124651-taVNS-autonomic-function.md]^[raw/articles/pubmed-39905569-tdcs-cognitive-impairments-dosage-parameters.md] |
| Home-replicated | The effect survives home or ecological delivery | tPBM in MCI due to AD is the closest current example: a home-use sham-controlled study reported week-13 K-MoCA improvement, with the medRxiv pilot adding metabolic and network-level support | This bucket is still thin; tPBM is the only clear near-term candidate, and it still needs independent replication.^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]^[raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md] |
| Behavior-positive and durable | Meaningful cognitive benefit survives enough settings and follow-up to feel hard to dismiss | No device family is clearly here yet | The wiki should treat this as an empty bucket for now; the closest candidate is tPBM, but the field has not yet shown broad ecological hardening. |

## Branch Map

| Branch | Best bucket | Why it sits there |
|---|---|---|
| tPBM | Lab-positive, with a home-replicated candidate signal | Healthy older adults showed working-memory gains, and a home MCI study added a positive signal with mechanistic biomarker movement.^[raw/articles/pubmed-40482941-tpbm-healthy-older-adults-working-memory-fnirs.md]^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]^[raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md] |
| Closed-loop auditory stimulation / TMR | Home-delivered physiology-only | The ecological study moved physiology but not memory or vigilance, which is exactly the lab-vs-home fragility this page is meant to surface.^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md] |
| CLAS plus cathodal tDCS | Lab-positive behavior-positive | The preprint improved overnight retention in a small, controlled setting, but the result has not yet been shown to survive ecological delivery.^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md] |
| Intranasal insulin | Physiology-first, phenotype-specific behavior-positive | PET proves delivery, and the broader branch has mixed behavioral effects that depend on phenotype, setting, and device details rather than a generic intranasal class effect.^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md] |
| tACS / taVNS | Lab-positive but state-sensitive | Both branches have human signals, but the effect is small, protocol-sensitive, and not yet hardened into a home-robust enhancer story.^[raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md]^[raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md]^[raw/articles/pubmed-39124651-taVNS-autonomic-function.md] |
| Temporal interference / tFUS | Target-engagement first | Human TI can move memory and fMRI, while tFUS work is still dominated by safety, parameter control, and target-access questions rather than stable cognition benefit.^[raw/articles/pubmed-41040248-temporal-interference-memory-encoding.md]^[raw/articles/pubmed-41723237-safe-focused-ultrasound-bbb-opening-tight-junctions.md]^[raw/articles/pubmed-40470501-transcranial-ultrasound-stimulation-parameters-neurological-diseases.md] |

## Practical Read

- Do not call a branch practical just because it is biologically active.
- Do not call a branch home-robust just because it has one home trial.
- Promote a branch only when the behavior signal survives the setting change and the follow-up window is long enough to matter.
- Use [[delivery-validation-checklist-for-cognition-interventions]] before you ask whether a signal is real.
- Use [[sham-control-feasibility-for-cognition-interventions]] before you ask whether a signal is blindable.
- Use [[trial-design-recommendations-for-cognition-interventions]] when you want the next study to test robustness instead of re-running the same lab effect.

## Open Contradictions

- Physiology can improve without behavior, which is why the home CLAS result matters more than a slogan about closed-loop precision.
- A home study can be positive and still not be enough to harden the branch if replication is thin.
- A delivery paper can be strong and still say nothing about cognition durability.
- A protocol can be promising in the lab and still fail in ecological delivery.

## Related Pages

- [[delivery-validation-checklist-for-cognition-interventions]]
- [[sham-control-feasibility-for-cognition-interventions]]
- [[closed-loop-and-adaptive-neuromodulation-for-cognitive-performance]]
- [[focused-ultrasound-at-home-feasibility-and-safety]]
- [[translational-gap-table]]
- [[trial-design-recommendations-for-cognition-interventions]]
- [[implementation-friction-scorecard]]

## Actionable Wiki Updates

- Add this page to `index.md` under Comparisons.
- Use this table whenever a future page needs a `lab positive` versus `home replicated` distinction.
- Keep `lab-positive`, `home-replicated`, `physiology-only`, and `behavior-positive` separate in future synthesis pages so the wiki does not flatten delivery into efficacy.
