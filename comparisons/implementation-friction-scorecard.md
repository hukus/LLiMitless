---
title: Implementation Friction Scorecard for Cognition Interventions
created: 2026-04-28
updated: 2026-05-12
type: comparison
tags: [comparison, cognition, protocol, safety, controversy, performance, device]
sources: [raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md, raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md, raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md, raw/articles/pubmed-39905569-tdcs-dosage-parameters.md, raw/articles/pubmed-31228880-time-course-ineffective-sham-blinding-low-intensity-tdcs.md, raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md, raw/articles/pubmed-39815765-taVNS-memory-pupil-dilation.md, raw/articles/pubmed-39124651-taVNS-autonomic-function.md, raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md, raw/articles/pubmed-40195962-intranasal-insulin-ad-systematic-review-meta-analysis.md, raw/articles/pubmed-41979527-hyperbaric-oxygen-therapy-traumatic-brain-injury.md, raw/articles/pubmed-26403017-hbot-tbi-sham-rct.md, raw/articles/pubmed-40676541-rtms-cognitive-impairment-neurodegenerative-diseases.md, raw/articles/pubmed-38410648-itrusst-standardised-reporting-transcranial-ultrasound-stimulation.md, raw/articles/pubmed-41072763-itrusst-biophysical-safety-transcranial-ultrasound-stimulation.md, raw/articles/pubmed-40470501-transcranial-ultrasound-stimulation-parameters-neurological-diseases.md, raw/articles/pubmed-22992376-caffeine-attention-withdrawn-consumers.md, raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md, raw/articles/dailymed-sunosi-solriamfetol-tablet-label.md, raw/articles/dailymed-wakix-pitolisant-tablet-label.md, raw/articles/fda-dietary-supplements-regulatory-baseline-2026.md, raw/articles/fda-hidden-ingredients-supplement-risk-2026.md, raw/articles/fda-bulk-drug-substances-peptide-risk-2026.md, raw/articles/fda-compounder-supplier-quality-warning-2026.md, raw/articles/wada-2026-prohibited-list-general.md, raw/articles/wada-2026-monitoring-program.md, raw/articles/nature-2026-emf-working-memory-alpha-healthy-adults.md, raw/articles/pubmed-41120157-tpemf-depression-headband-protocol.md, raw/articles/clinicaltrials-nct02125032-tpemf-parkinsons.md]
confidence: medium
---

# Implementation Friction Scorecard for Cognition Interventions

This page compresses the deployment burden of an intervention into one practical score: how hard it is to validate delivery, keep the blind intact, run the protocol alone, monitor safety, source the material, and absorb the participant time cost.

It is not an efficacy ranking. A low-friction intervention can still be a weak enhancer, and a high-friction intervention can still have a real signal. The point is to separate "what might work" from "what is actually deployable without a research infrastructure."

Implementation friction is a composite inference built from the surrounding wiki layers:

- [[delivery-validation-checklist-for-cognition-interventions]]
- [[sham-control-feasibility-for-cognition-interventions]]
- [[ecological-robustness-table]]
- [[endpoint-fragility-ledger]]
- [[regulatory-and-sports-visibility-map]]
- [[peptide-safety-and-sourcing-risk-map]]
- [[device-dose-and-session-structure-ontology]]

## What Changed Since 2024

- tPBM now has enough home-capable data that it reads as the clearest low-friction device family, but the evidence is still device-specific rather than universal.^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]^[raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md]
- Intranasal insulin now has a PET validation paper showing that the device changes brain exposure, so the delivery device is part of the pharmacology instead of a cosmetic detail.^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-40195962-intranasal-insulin-ad-systematic-review-meta-analysis.md]
- tDCS/tACS are now clearly parameter-sensitive and sham-leakage-sensitive, so the intervention is better understood as a field configuration than as a generic "stim" label.^[raw/articles/pubmed-39905569-tdcs-dosage-parameters.md]^[raw/articles/pubmed-31228880-time-course-ineffective-sham-blinding-low-intensity-tdcs.md]
- Structured EMF / PEMF adds a new moderate-high-friction device lane: even when headbands or solenoid arrays are home-capable, the meaningful exposure is hidden in field pattern, coil placement, sham programming, and contraindication screening.^[raw/articles/nature-2026-emf-working-memory-alpha-healthy-adults.md]^[raw/articles/pubmed-41120157-tpemf-depression-headband-protocol.md]^[raw/articles/clinicaltrials-nct02125032-tpemf-parkinsons.md]
- taVNS remains easy to start but hard to hide from the participant because sensory and autonomic cues can still move under sham.^[raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md]^[raw/articles/pubmed-39815765-taVNS-memory-pupil-dilation.md]^[raw/articles/pubmed-39124651-taVNS-autonomic-function.md]
- tFUS crossed into clearer reporting and safety discipline, which raises the friction floor: the method now looks more like a calibrated research platform than a casual home device.^[raw/articles/pubmed-38410648-itrusst-standardised-reporting-transcranial-ultrasound-stimulation.md]^[raw/articles/pubmed-41072763-itrusst-biophysical-safety-transcranial-ultrasound-stimulation.md]^[raw/articles/pubmed-40470501-transcranial-ultrasound-stimulation-parameters-neurological-diseases.md]
- Peptide and supplement branches now have a sharper sourcing and regulatory layer, so deployment friction is increasingly dominated by identity, purity, compounding, and anti-doping visibility rather than by the headline biology alone.^[raw/articles/fda-dietary-supplements-regulatory-baseline-2026.md]^[raw/articles/fda-hidden-ingredients-supplement-risk-2026.md]^[raw/articles/fda-bulk-drug-substances-peptide-risk-2026.md]^[raw/articles/fda-compounder-supplier-quality-warning-2026.md]^[raw/articles/wada-2026-prohibited-list-general.md]^[raw/articles/wada-2026-monitoring-program.md]

## Friction Rubric

| Component | What pushes friction up |
|---|---|
| Delivery validation | Exposure needs imaging, calibration, model-based targeting, or device-specific evidence to be trustworthy. |
| Sham feasibility | Sensory cues, withdrawal reversal, or state changes make the control easy to detect. |
| Operator dependence | The protocol requires a clinic, a trained operator, or real-time targeting rather than self-administration. |
| Monitoring burden | Contraindication screening, vitals, labs, imaging, sleep EEG, or ongoing adverse-event review are part of safe use. |
| Sourcing / regulatory risk | The material is a bulk peptide, an unapproved research chemical, a hidden-ingredient-prone supplement, or a sports-visible prescription drug. |
| Participant time cost | The schedule is long, frequent, sleep-disruptive, or adherence-sensitive enough to dominate practical use. |

## Scorecard

| Family | Composite friction | Main sources of friction | Practical read |
|---|---|---|---|
| Oral capsules and matched powders | Low | Mostly time and adherence; the main deployment issue is not administration but expectancy, withdrawal, and comparator design | Easiest to deploy, but not necessarily easiest to interpret. Caffeine and nicotine are the classic cases where low delivery friction can hide high comparator confounding.^[raw/articles/pubmed-22992376-caffeine-attention-withdrawn-consumers.md]^[raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md] |
| Prescription wake-promoters | Low-moderate | Simple oral use, but regulatory visibility, side effects, and state-restoration confounding matter | Good comparator class, not a clean "enhancement" bucket. Solriamfetol and pitolisant are easy to take but still need label-aware interpretation.^[raw/articles/dailymed-sunosi-solriamfetol-tablet-label.md]^[raw/articles/dailymed-wakix-pitolisant-tablet-label.md] |
| tPBM | Low-moderate | Device-specific exposure, site placement, light/heat cues, and modest monitoring burden | Best current low-friction device family, especially because a home-use MCI study now exists.^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]^[raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md] |
| tDCS / tACS | Moderate | Montage and field configuration matter, sham can leak, and the real intervention is parameter-sensitive | Still home-capable, but the setup is more fragile than the label suggests.^[raw/articles/pubmed-39905569-tdcs-dosage-parameters.md]^[raw/articles/pubmed-31228880-time-course-ineffective-sham-blinding-low-intensity-tdcs.md] |
| Structured EMF / PEMF | Moderate-high | Field waveform, coil/solenoid geometry, active-field verification, coded sham hardware, and active-implant / epilepsy / scalp-condition exclusions | Not a casual self-experiment branch; the 2026 healthy-adult anchor is cognitive-disruption-sensitive, so delivery validation comes before any efficacy interpretation.^[raw/articles/nature-2026-emf-working-memory-alpha-healthy-adults.md]^[raw/articles/clinicaltrials-nct02125032-tpemf-parkinsons.md] |
| taVNS | Moderate | Ear sensation, autonomic activation, and sensory leakage make the blind shaky | Easy to run, harder to keep biologically inert or participant-blind.^[raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md]^[raw/articles/pubmed-39815765-taVNS-memory-pupil-dilation.md]^[raw/articles/pubmed-39124651-taVNS-autonomic-function.md] |
| Intranasal insulin | Moderate-high | Device choice changes exposure, phenotype matters, and metabolic monitoring may be relevant | The delivery device is part of the pharmacology, so this is not a generic nasal intervention.^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-40195962-intranasal-insulin-ad-systematic-review-meta-analysis.md] |
| Closed-loop acoustic stimulation / TMR | Moderate-high | Sleep setup, cue timing, and EEG/audio logistics raise time cost and operator burden | Viable in a research-style home setup, but not a trivial self-study. Use [[ecological-robustness-table]] alongside it.^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md] |
| rTMS | High | Coil noise, scalp sensation, operator dependence, and clinic workflow | Sham trials exist, but the method is not a solo deployable protocol.^[raw/articles/pubmed-40676541-rtms-cognitive-impairment-neurodegenerative-diseases.md]^[raw/articles/pmid-31901449-rtms-guidelines.md] |
| HBOT | High | Chamber access, staff, pressure cues, and screening burden | Trial-feasible, but inherently infrastructure-heavy.^[raw/articles/pubmed-41979527-hyperbaric-oxygen-therapy-traumatic-brain-injury.md]^[raw/articles/pubmed-26403017-hbot-tbi-sham-rct.md] |
| Peptides and bioregulators | High to very high | Sourcing chain, purity, compounding risk, injection burden, and regulatory visibility | The biology can be interesting while the deployment risk is dominated by identity and supply chain.^[raw/articles/fda-bulk-drug-substances-peptide-risk-2026.md]^[raw/articles/fda-compounder-supplier-quality-warning-2026.md]^[raw/articles/wada-2026-prohibited-list-general.md] |
| Botanicals and supplements | Moderate | Product identity, hidden ingredients, contaminant risk, and lot-to-lot variability | Low delivery friction does not mean low practical friction if the product cannot be reproduced or trusted.^[raw/articles/fda-dietary-supplements-regulatory-baseline-2026.md]^[raw/articles/fda-hidden-ingredients-supplement-risk-2026.md] |
| tFUS / FUS-BBBO | Very high | Calibration, skull modeling, imaging, safety thresholds, and operator workflow | Research-grade only. This is the strongest case in the set for "not a casual at-home protocol."^[raw/articles/pubmed-38410648-itrusst-standardised-reporting-transcranial-ultrasound-stimulation.md]^[raw/articles/pubmed-41072763-itrusst-biophysical-safety-transcranial-ultrasound-stimulation.md]^[raw/articles/pubmed-40470501-transcranial-ultrasound-stimulation-parameters-neurological-diseases.md] |
| Behavior-first interventions (CBT-I, sleep extension, exercise) | Moderate | Time cost and adherence are the friction, not device setup | Easy to conceptualize and hard to blind. Deployability is high in equipment terms, but participant time cost is real and should be counted explicitly. |

## Practical Interpretation

- Use the friction score after you already know whether a branch has a signal.
- A low-friction branch is not automatically a high-value branch.
- A high-friction branch can still be worth studying if the effect size is large enough or the recovery phenotype is strong enough.
- If the branch is source-sensitive, the friction score should include product identity and chain-of-custody risk, not just the protocol shape.
- If the branch is state-dependent, the friction score should include comparator and withdrawal burden, not just the intervention itself.

## Open Contradictions

- Low delivery friction can hide high interpretive friction when withdrawal, expectancy, or comparator design drive the result.
- A sham-controlled protocol can still be operationally expensive if the device requires calibration or repeated screening.
- Some oral interventions are easy to take but hard to interpret because the control condition is not inert.
- Some device interventions are easy to start but not practical once the full monitoring and safety layer is counted.
- Research-grade sourcing risk can be the dominant friction even when the human biology looks attractive.

## Related Pages

- [[delivery-validation-checklist-for-cognition-interventions]]
- [[sham-control-feasibility-for-cognition-interventions]]
- [[ecological-robustness-table]]
- [[endpoint-fragility-ledger]]
- [[regulatory-and-sports-visibility-map]]
- [[peptide-safety-and-sourcing-risk-map]]
- [[blinding-failure-detector-for-self-study-and-sham-capable-protocols]]
- [[device-dose-and-session-structure-ontology]]
- [[structured-electromagnetic-field-neuromodulation]]

## Actionable Wiki Updates

- Add this page to `index.md` under Comparisons.
- Keep the friction score separate from efficacy and freshness when future comparison pages need a practical deployment view.
- Use this page as the shared "can we really run this?" layer for new device, peptide, and comparator pages.
