---
title: Device-Parameter Worksheet for Self-Study and Protocol Review
created: 2026-04-28
updated: 2026-04-28
type: query
tags: [cognition, performance, protocol, device, dosage, safety, comparison]
sources: [raw/articles/pubmed-39905569-tdcs-dosage-parameters.md, raw/articles/pubmed-41219988-tdcs-optimal-parameters-corticospinal-excitability.md, raw/articles/pubmed-40082256-guideline-for-clinical-application-transcranial-alternating-current-stimulation.md, raw/articles/pubmed-40822571-tpbm-systematic-review-sleep-wakefulness-cognition.md, raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md, raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md, raw/articles/pubmed-40535058-tavns-insomnia-clinical-practice-recommendations.md, raw/articles/pubmed-39124651-taVNS-autonomic-function.md, raw/articles/pubmed-41167554-human-applications-temporal-interference-stimulation.md, raw/articles/pubmed-40925398-temporal-interference-experimental-studies-human-review.md, raw/articles/clinicaltrials-nct07339072-temporal-interference-methods-study-1-2.md, raw/articles/pubmed-38410648-itrusst-standardised-reporting-transcranial-ultrasound-stimulation.md, raw/articles/pubmed-41072763-itrusst-biophysical-safety-transcranial-ultrasound-stimulation.md, raw/articles/pubmed-40470501-transcranial-ultrasound-stimulation-parameters-neurological-diseases.md, raw/articles/pubmed-41610842-transcranial-focused-ultrasound-in-the-human-brain.md, raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md, raw/articles/pubmed-40102385-phase-specific-enhancement-motor-memory-consolidation-closed-loop-tmr.md, raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md]
confidence: medium
---

# Device-Parameter Worksheet for Self-Study and Protocol Review

## Summary

This page is the protocol header that sits above the daily log and below the delivery gate.

Its job is to stop the wiki from treating a device label as if it were already a protocol description. For device-adjacent cognition studies, the worksheet should record the actual exposure, the session structure, the target state, and the control class before anyone tries to interpret the outcome.

Use [[device-dose-and-session-structure-ontology]] to normalize the native dose language, [[delivery-validation-checklist-for-cognition-interventions]] to check whether delivery was actually credible, [[sham-control-feasibility-for-cognition-interventions]] to decide whether a single person can really blind the study, and [[blinding-failure-detector-for-self-study-and-sham-capable-protocols]] to inspect the failure modes after the fact.

For self-study work, this worksheet is the missing front page for [[30-day-self-study-template-for-nonprescription-interventions]].

## What Changed Since 2024

- tDCS and tACS now have enough parameter-sensitive evidence that a montage-only description is no longer acceptable; current density, polarity, waveform, frequency, ramping, and session structure all matter to interpretation, and the 2025 tDCS parameter meta-analysis gives concrete duration/intensity anchors.^[raw/articles/pubmed-41219988-tdcs-optimal-parameters-corticospinal-excitability.md]^[raw/articles/pubmed-39905569-tdcs-dosage-parameters.md]^[raw/articles/pubmed-40082256-guideline-for-clinical-application-transcranial-alternating-current-stimulation.md]
- tPBM has become a home-capable but still device-specific family, which means wavelength, irradiance, fluence, spot size, and thermal management are the real exposure variables, not the brand label.^[raw/articles/pubmed-40822571-tpbm-systematic-review-sleep-wakefulness-cognition.md]^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]
- taVNS now looks like a sensory-and-state intervention as much as a stimulation intervention, so ear site, current threshold, pulse width, frequency, and autonomic side effects belong in the worksheet; the 2025 insomnia review still says duration, site, and parameters lack consensus.^[raw/articles/pubmed-40535058-tavns-insomnia-clinical-practice-recommendations.md]^[raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md]^[raw/articles/pubmed-39124651-taVNS-autonomic-function.md]
- Temporal interference has moved into human target-validation work, but the literature still treats carrier/envelope geometry and task pairing as part of the exposure, not a generic `deep stimulation` label.^[raw/articles/pubmed-41167554-human-applications-temporal-interference-stimulation.md]^[raw/articles/pubmed-40925398-temporal-interference-experimental-studies-human-review.md]^[raw/articles/clinicaltrials-nct07339072-temporal-interference-methods-study-1-2.md]
- tFUS now has explicit reporting and safety guidance, so skull modeling, acoustic calibration, pressure bounds, and monitoring are protocol fields rather than optional methods prose.^[raw/articles/pubmed-38410648-itrusst-standardised-reporting-transcranial-ultrasound-stimulation.md]^[raw/articles/pubmed-41072763-itrusst-biophysical-safety-transcranial-ultrasound-stimulation.md]^[raw/articles/pubmed-40470501-transcranial-ultrasound-stimulation-parameters-neurological-diseases.md]^[raw/articles/pubmed-41610842-transcranial-focused-ultrasound-in-the-human-brain.md]
- Intranasal insulin now has PET evidence that the delivery device changes brain exposure, which makes device choice part of the pharmacology rather than a cosmetic detail.^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]
- Closed-loop sleep cueing and TMR continue to show that the dose can be event timing rather than a static intensity, so phase latency and cue count need explicit fields.^[raw/articles/pubmed-40102385-phase-specific-enhancement-motor-memory-consolidation-closed-loop-tmr.md]^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md]

## Worksheet Logic

If the page cannot say what the device is, where it acted, how much was delivered, when it was delivered, and how the control differed, the protocol description is incomplete.

That sounds strict because it is. The comparison pages in this wiki already show that:

- a sham can still be active,
- a home-capable device can still be under-specified,
- and session timing can matter as much as nominal dose.

This worksheet is the front-end form for those distinctions.

## Core Header

| Field | What to record | Why it matters |
|---|---|---|
| `study_id` | Short unique label | Keeps the worksheet tied to the log and analysis files. |
| `intervention_family` | tDCS, tACS, tPBM, taVNS, tTIS, tFUS, rTMS, CLAS, TMR, intranasal insulin | The family determines which native dose units apply. |
| `target_site` | Cortex, auricular site, sleep stage, deep target, nasal delivery, etc. | Target and dose are inseparable in device work. |
| `device_model` | Product name, version, firmware if relevant | Device identity often changes exposure. |
| `native_dose_unit` | mA, Hz, nm, J/cm2, puffs, IU, pulses, pressure, cue count, etc. | Prevents fake comparisons across incompatible units. |
| `dose_amount` | Exact delivered value | The actual exposure, not the intended one. |
| `session_length` | Minutes, trains, cue windows, or burst duration | Session structure often changes the effect. |
| `session_count` | Total sessions planned and delivered | Cumulative exposure matters. |
| `spacing_rule` | Daily, nightly, weekly, block-based, etc. | Timing and spacing alter interpretation. |
| `task_or_sleep_coupling` | Online task, offline after-training, sleep-stage gated, recovery-only | Many effects are state-coupled, not unconditional. |
| `control_class` | Placebo, sham, active sham, active comparator, rescue comparator | Control class changes the claim. |
| `sensory_leakage_risk` | Tingling, warmth, noise, nasal sensation, pressure, light, sleep disruption, etc. | A good sham can still leak assignment. |
| `operator_dependence` | Solo, clinician, technician, imaging-guided, calibration-heavy | Some methods are not realistic solo protocols. |
| `calibration_or_QA` | Ramp, montage check, skull model, hydrophone, device QA, thresholding | Exposure validity depends on this layer. |
| `monitoring_burden` | Vitals, sleep, HRV, questionnaire, imaging, glucose, AE review | Monitoring is part of the intervention burden. |
| `stop_rules` | Insomnia, headache, palpitations, mood activation, BP rise, visual symptoms, etc. | Safety belongs in the protocol header. |
| `source_identity` | Lot, extract, cartridge, battery, or nasal-device details if relevant | Product identity can dominate reproducibility. |

## Family Addenda

| Family | Add fields that should not be omitted | Common omission | Why it matters |
|---|---|---|---|
| tDCS / tACS | Montage, electrode size, polarity, current density, waveform, frequency, ramp-up/down | Only `anode/cathode` or `alpha/theta` | The field configuration is the intervention. |
| rTMS / TBS | Coil type, target, pulse count, train length, inter-train interval, navigation method | Only `rTMS` or `iTBS` | Pulses and target geometry drive the dose. |
| tPBM | Wavelength, irradiance, fluence, spot size, pulse structure, thermal management | Only `red light` or `infrared` | The same label can hide very different exposure. |
| taVNS | Ear site, laterality, current threshold, pulse width, frequency, duty cycle, duration | Only `vagus stimulation` | Sensory and autonomic cues can leak the condition. |
| tTIS | Carrier pair, envelope frequency, electrode arrangement, modeled target, task pairing | Only `deep stimulation` | Field geometry is the actual exposure. |
| tFUS / FUS-BBBO | Transducer, pressure, MI/MI_tc, PRF, duty cycle, skull model, temperature rise, navigation | Only `ultrasound` | Calibration and anatomy determine what the brain gets. |
| Intranasal insulin | Device model, spray geometry, dose per nostril, timing, glucose/state context | Only `nasal insulin` | Delivery device changes brain exposure. |
| CLAS / TMR | Cue modality, cue intensity, cue count, phase latency, sleep stage target, adaptation algorithm | Only `sleep cueing` | Dose is event timing, not a static intensity. |

## Copy/Paste Header

```text
Family | target/site | device model | native dose | session length | session count | timing/coupling | control class | sensory leakage | calibration/QA | monitoring burden
```

## Practical Rules

1. Fill the worksheet before the first session, not after the first result.
2. If the device changes the state, record the state coupling in the header.
3. If the control is sensory-matched but not inert, label it `active sham`.
4. If the exposure depends on modeling or calibration, record the method and not just the nominal device.
5. If the timing or schedule changes, treat it as a different protocol.
6. If the study is self-run, use the worksheet before you trust the protocol to be blindable or reproducible.

## Open Contradictions

- A single device label can hide multiple exposures.
- A sham can be well masked and still move physiology.
- Home-capable does not mean reproducible without calibration.
- Monitoring is part of the protocol, not an optional appendix.
- Event timing can be the dose.

## Related Pages

- [[device-dose-and-session-structure-ontology]]
- [[delivery-validation-checklist-for-cognition-interventions]]
- [[sham-control-feasibility-for-cognition-interventions]]
- [[blinding-failure-detector-for-self-study-and-sham-capable-protocols]]
- [[active-sham-and-inertness-taxonomy]]
- [[30-day-self-study-template-for-nonprescription-interventions]]
- [[practical-cognitive-measurement-stack]]

## Actionable Wiki Updates

- Add this page to `index.md` under Queries.
- Link [[30-day-self-study-template-for-nonprescription-interventions]] to this page so the protocol header is explicit for device-adjacent studies.
- Link [[delivery-validation-checklist-for-cognition-interventions]] to this page so protocol review and header capture stay separate.
- Link [[device-dose-and-session-structure-ontology]] to this page so the ontology has a practical worksheet companion.
- Use this page whenever a future scan needs a protocol-review header instead of just a narrative methods summary.
