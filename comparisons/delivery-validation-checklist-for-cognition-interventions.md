---
title: Delivery Validation Checklist for Cognition Interventions
created: 2026-04-28
updated: 2026-06-15
type: comparison
tags: [comparison, cognition, peptides, device, protocol, safety, dosage, controversy, biomarker]
sources: [raw/articles/pubmed-38410648-itrusst-standardised-reporting-transcranial-ultrasound-stimulation.md, raw/articles/pubmed-41072763-itrusst-biophysical-safety-transcranial-ultrasound-stimulation.md, raw/articles/pubmed-40470501-transcranial-ultrasound-stimulation-parameters-neurological-diseases.md, raw/articles/pubmed-41610842-transcranial-focused-ultrasound-in-the-human-brain.md, raw/articles/pubmed-41046632-transcranial-ultrasound-stimulation-ad-rct.md, raw/articles/pubmed-41723237-safe-focused-ultrasound-bbb-opening-tight-junctions.md, raw/articles/pubmed-39449176-wearable-steerable-transcranial-low-intensity-focused-ultrasound-system.md, raw/articles/pubmed-31401074-safety-of-transcranial-focused-ultrasound-stimulation.md, raw/articles/pubmed-36215339-hydrophone-measurements-for-biomedical-ultrasound-applications.md, raw/articles/pubmed-28777075-numerical-evaluation-of-the-skull-for-human-neuromodulation-with-transcranial-focused-ultrasound.md, raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md, raw/articles/pubmed-40195962-intranasal-insulin-ad-systematic-review-meta-analysis.md, raw/articles/pubmed-39905569-tdcs-dosage-parameters.md, raw/articles/pubmed-41219988-tdcs-optimal-parameters-corticospinal-excitability.md, raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md, raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md, raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md, raw/articles/pubmed-40822571-tpbm-systematic-review-sleep-wakefulness-cognition.md, raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md, raw/articles/pubmed-39815765-taVNS-memory-pupil-dilation.md, raw/articles/pubmed-40535058-tavns-insomnia-clinical-practice-recommendations.md, raw/articles/pubmed-41973311-taVNS-military-exercise-sleep-deprivation.md, raw/articles/pubmed-40958978-taVNS-stress-regulation-eeg-questionnaire.md, raw/articles/pubmed-39124651-taVNS-autonomic-function.md, raw/articles/pubmed-41167554-human-applications-temporal-interference-stimulation.md, raw/articles/pubmed-40925398-temporal-interference-experimental-studies-human-review.md, raw/articles/reddit-2026-04-29-semax-selank-cerebrolysin-advice-thread.md, raw/articles/reddit-2026-bromantane-thread-trail.md, raw/articles/clinicaltrials-nct07437547-bpc157-hamstring-repair-record-2026-05-06.md, raw/articles/reddit-2025-03-06-pinealon-tbi-recovery-sleep-cognition.md, raw/articles/reddit-2026-04-29-dihexa-thread.md, raw/articles/fda-bulk-drug-substances-peptide-risk-2026.md]
confidence: medium
---

# Delivery Validation Checklist for Cognition Interventions

The common failure mode in cognition research is treating a treatment label as if it already implied delivery. This page is a pre-efficacy gate: before a page claims benefit, it should answer five questions clearly.

1. Was the intended target exposure actually delivered?
2. Are the device and session parameters reported well enough to reproduce?
3. Is sham leakage or sensory unblinding small enough to trust the contrast?
4. Does the intervention depend on specialist operators, imaging, or calibration?
5. Does safe use require more monitoring than the page currently admits?

That framing is intentionally stricter than "sham-controlled." A method can have a sham arm and still be weak on exposure, calibration, or blinding.

Delivery validation is necessary, but it is not the same thing as ecological robustness. A branch can satisfy the exposure gate and still fail once the setting shifts from a lab workflow to home or daily life; see [[ecological-robustness-table]] for that next gate.

June 2026 peptide/nootropic addendum: route and formulation are now first-class delivery variables, not afterthoughts. For peptide and gray-market nootropic pages, the gate is not only whether a molecule was named; it is whether the report separates exact molecule or fragment, intranasal/subcutaneous/oral/transdermal route, injection or nasal-spray context, fixed blend, salt/formulation, source/COA, dose timing, washout or stable background, recovery/sleep phenotype, stack order, co-interventions, adverse events, and regulatory/sports status. This matters most for [[semax]] / [[selank]] stacks, [[cerebrolysin]] medical-product claims, recovery-bound [[bpc-157]], non-peptide [[bromantane]] activation reports, [[pinealon]] / [[epithalon]] sleep-recovery anecdotes, [[mots-c]] metabolic claims, and [[dihexa]] route-improvisation lore. Use [[molecule-triage-worksheet-for-online-scans]], [[peptide-stack-topology-ledger]], [[peptide-safety-and-sourcing-risk-map]], [[peptide-regulatory-live-watch-board]], [[safety-interaction-matrix-for-multi-modal-stacks]], and [[oral-vs-subq-epithalon-pinealon-dihexa]] before treating any peptide or adjacent gray-market anecdote as delivered exposure.^[raw/articles/reddit-2026-04-29-semax-selank-cerebrolysin-advice-thread.md]^[raw/articles/reddit-2026-bromantane-thread-trail.md]^[raw/articles/clinicaltrials-nct07437547-bpc157-hamstring-repair-record-2026-05-06.md]^[raw/articles/reddit-2025-03-06-pinealon-tbi-recovery-sleep-cognition.md]^[raw/articles/reddit-2026-04-29-dihexa-thread.md]^[raw/articles/fda-bulk-drug-substances-peptide-risk-2026.md]

## What Changed Since 2024

- Transcranial ultrasound now has both a standardized reporting consensus and a biophysical safety consensus, so the field has crossed from "useful idea" into "must document exposure."^[raw/articles/pubmed-38410648-itrusst-standardised-reporting-transcranial-ultrasound-stimulation.md]^[raw/articles/pubmed-41072763-itrusst-biophysical-safety-transcranial-ultrasound-stimulation.md]
- The 2026 mild-AD pilot RCT shows supervised tFUS can be run repeatedly without serious clinical or radiographic adverse events, but the sample is too small to generalize to home use or broad efficacy.^[raw/articles/pubmed-41046632-transcranial-ultrasound-stimulation-ad-rct.md]
- The biophysical safety consensus is concrete rather than vague: it treats MI or MI_tc <= 1.9 as nonsignificant-risk for mechanical effects and uses thermal bounds such as <= 2 C peak temperature rise or <= 39 C peak absolute temperature, but only under participant assumptions that already exclude several real-world risk states.^[raw/articles/pubmed-41072763-itrusst-biophysical-safety-transcranial-ultrasound-stimulation.md]
- The tFUS literature also makes the operator burden explicit: calibration, skull modeling, hydrophone measurement discipline, and neuronavigation-like workflows are part of the intervention, not optional extras.^[raw/articles/pubmed-40470501-transcranial-ultrasound-stimulation-parameters-neurological-diseases.md]^[raw/articles/pubmed-36215339-hydrophone-measurements-for-biomedical-ultrasound-applications.md]^[raw/articles/pubmed-28777075-numerical-evaluation-of-the-skull-for-human-neuromodulation-with-transcranial-focused-ultrasound.md]^[raw/articles/pubmed-39449176-wearable-steerable-transcranial-low-intensity-focused-ultrasound-system.md]
- Intranasal insulin now has human imaging evidence that device choice changes brain exposure, which means delivery validation is part of the pharmacology, not just the engineering.^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]
- tDCS/tACS are now clearly parameter-sensitive: current density, duration, session count, target, montage, and frequency all matter enough to change the interpretation of a result, and the 2025 tDCS parameter meta-analysis gives concrete duration/intensity anchors.^[raw/articles/pubmed-41219988-tdcs-optimal-parameters-corticospinal-excitability.md]^[raw/articles/pubmed-39905569-tdcs-dosage-parameters.md]
- tPBM is increasingly defensible as a home-capable device family, but the field still lacks a single, universal reporting standard comparable to ITRUSST, so exposure reporting remains partly author-dependent.^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]^[raw/articles/pubmed-40822571-tpbm-systematic-review-sleep-wakefulness-cognition.md]
- tPBM now has a small home-use sham-controlled MCI due to AD study plus a multimodal pilot with metabolics and neuroimaging, so home-capable delivery is no longer hypothetical even though the evidence remains thin and device-specific.^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]^[raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md]
- taVNS remains a sensory-leaky autonomic intervention: recent memory and stress studies show that pupil dilation, arousal, and task-state effects can move under both real and sham stimulation, so the blind and the exposure story stay harder to separate than the label implies.^[raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md]^[raw/articles/pubmed-39815765-taVNS-memory-pupil-dilation.md]^[raw/articles/pubmed-40958978-taVNS-stress-regulation-eeg-questionnaire.md]^[raw/articles/pubmed-39124651-taVNS-autonomic-function.md]
- taVNS also still lacks parameter consensus in a 2025 insomnia review, which reinforces that auricular site, thresholding, and schedule must be explicit before any protocol claim looks reproducible; a 2026 military-exercise sleep-deprivation field study suggests the branch is better read as vigilance rescue under state challenge than as broad enhancement.^[raw/articles/pubmed-40535058-tavns-insomnia-clinical-practice-recommendations.md]^[raw/articles/pubmed-41973311-taVNS-military-exercise-sleep-deprivation.md]
- Temporal interference has crossed into real human target-validation work, and the newer cognition papers make the phenotype dependence explicit: target, load, and working-memory capacity can change the sign or size of the effect, so the branch is still parameter-sensitive rather than a generic enhancer.^[raw/articles/pubmed-41167554-human-applications-temporal-interference-stimulation.md]^[raw/articles/pubmed-40925398-temporal-interference-experimental-studies-human-review.md]^[raw/articles/pubmed-41808199-temporal-interference-cognitive-control.md]^[raw/articles/pubmed-40751659-temporal-interference-verbal-working-memory.md]
- tFUS now reads as three separate human toolsets rather than one broad label: lesioning, BBB opening, and low-intensity circuit stimulation, with the BBB-opening branch showing pressure-sensitive safety tradeoffs rather than a generic "safe if low intensity" story.^[raw/articles/pubmed-41610842-transcranial-focused-ultrasound-in-the-human-brain.md]^[raw/articles/pubmed-41723237-safe-focused-ultrasound-bbb-opening-tight-junctions.md]
- Peptide and gray-market nootropic delivery have become nootropic-specific gates: community reports often change molecule, route, source, dose timing, and stack at the same time, so "Semax," "Selank," "Cerebrolysin," "BPC-157," "Bromantane," "Pinealon," "Dihexa," or "MOTS-c" alone is not enough to interpret exposure. Intranasal advice threads, Bromantane activation trails, BPC-157 recovery records, Pinealon recovery stacks, and Dihexa route troubleshooting should be treated as delivery-confounded until exact identity, route, source/COA, formulation, washout, adverse events, and co-interventions are explicit.^[raw/articles/reddit-2026-04-29-semax-selank-cerebrolysin-advice-thread.md]^[raw/articles/reddit-2026-bromantane-thread-trail.md]^[raw/articles/clinicaltrials-nct07437547-bpc157-hamstring-repair-record-2026-05-06.md]^[raw/articles/reddit-2025-03-06-pinealon-tbi-recovery-sleep-cognition.md]^[raw/articles/reddit-2026-04-29-dihexa-thread.md]^[raw/articles/fda-bulk-drug-substances-peptide-risk-2026.md]

## Top Sources

1. [ITRUSST consensus on standardised reporting for transcranial ultrasound stimulation](https://pubmed.ncbi.nlm.nih.gov/38410648/) - reporting consensus for tFUS exposure and device description.
2. [ITRUSST consensus on biophysical safety for transcranial ultrasound stimulation](https://pubmed.ncbi.nlm.nih.gov/41072763/) - biophysical safety thresholds and contraindication assumptions for tFUS.
3. [Hydrophone measurements for biomedical ultrasound applications](https://pubmed.ncbi.nlm.nih.gov/36215339/) - calibration, uncertainty, and reporting guidance for acoustic exposure measurement.
4. [Numerical evaluation of the skull for human neuromodulation with transcranial focused ultrasound](https://pubmed.ncbi.nlm.nih.gov/28777075/) - CT/MR skull-model work showing individual anatomy changes delivered pressure.
5. [Transcranial ultrasound stimulation parameters in neurological diseases](https://pubmed.ncbi.nlm.nih.gov/40470501/) - parameter review showing wide human TUS variation.
6. [Wearable steerable transcranial low-intensity focused ultrasound system](https://pubmed.ncbi.nlm.nih.gov/39449176/) - wearable prototype that still depends on specialist workflow.
7. [First-in-human positron emission tomography study of intranasal insulin in aging and MCI](https://pubmed.ncbi.nlm.nih.gov/40703476/) - first-in-human PET validation showing device-dependent intranasal insulin uptake.
8. [Transcranial direct current stimulation dosage parameters](https://pubmed.ncbi.nlm.nih.gov/39905569/) - tDCS dose-response meta-analysis that isolates current density, duration, and sessions.
9. [Transcranial photobiomodulation increases cognition and serum BDNF levels in adults over 50 years](https://pubmed.ncbi.nlm.nih.gov/39423445/) - tPBM RCT showing objective cognitive and biomarker change.
10. [The efficacy and safety of transcranial photobiomodulation for mild cognitive impairment due to Alzheimer's disease](https://pubmed.ncbi.nlm.nih.gov/40939031/) - home-use sham-controlled tPBM study with short-term cognitive gain.
11. [A multimodal evaluation of transcranial photobiomodulation in mild cognitive impairment](https://www.medrxiv.org/content/10.1101/2025.08.19.25333989.full) - pilot RCT adding metabolic and neuroimaging support.
12. [Enhancing sleep, wakefulness, and cognition with transcranial photobiomodulation](https://pubmed.ncbi.nlm.nih.gov/40822571/) - tPBM systematic review framing the modality as protocol-sensitive.
13. [The effects of transcutaneous auricular vagal nerve stimulation on cognition in healthy individuals](https://pubmed.ncbi.nlm.nih.gov/34043386/) - taVNS healthy-adult cognition meta-analysis.
14. [Stimulate to remember? The effects of short burst of transcutaneous vagus nerve stimulation on memory performance and pupil dilation](https://pubmed.ncbi.nlm.nih.gov/39815765/) - taVNS memory study with clear sensory-confound warnings.
15. [Effect of transcutaneous auricular vagus nerve stimulation on stress regulation](https://pubmed.ncbi.nlm.nih.gov/40958978/) - taVNS stress-resilience readout with EEG/questionnaire effects.
16. [The effect of transcutaneous auricular vagus nerve stimulation on autonomic function](https://pubmed.ncbi.nlm.nih.gov/39124651/) - taVNS autonomic-function study showing state effects.
17. [Human applications of transcranial temporal interference stimulation](https://pubmed.ncbi.nlm.nih.gov/41167554/) - human temporal-interference systematic review.
18. [Temporal interference experimental studies in humans](https://pubmed.ncbi.nlm.nih.gov/40925398/) - experimental human TI review focused on target engagement and envelopes.
19. [Transcranial focused ultrasound in the human brain](https://pubmed.ncbi.nlm.nih.gov/41610842/) - review that splits human FUS into lesioning, BBB opening, and circuit stimulation branches.
20. [Safe focused ultrasound-mediated blood-brain barrier opening is driven primarily by transient reorganization of tight junctions](https://pubmed.ncbi.nlm.nih.gov/41723237/) - pressure-sensitive BBB-opening safety result.

## Evidence Tiering

| Tier | What it tells us | How to use it |
|---|---|---|
| Reporting consensus | What must be disclosed for a result to be interpretable | Use as a hard gate for device pages |
| Safety consensus | Which exposure windows are non-significant-risk under stated assumptions | Use for governance, not efficacy claims |
| Parameter meta-analysis | Which dosage variables move the result | Use to avoid flattening settings into one generic treatment |
| First-in-human validation | Whether the delivery system actually reaches the brain/target | Use before calling any protocol biologically plausible |
| Sham-controlled cognition studies | Whether the exposure changes behavior beyond expectancy | Use only after delivery is already credible |
| Target-engagement review | Whether the intervention hits the intended circuit | Use to separate mechanism from outcome |

## Universal Checklist

| Gate | Minimum question | Fail condition | Reporting items that should appear on the page |
|---|---|---|---|
| Target exposure | Can we verify that the intended tissue or circuit received the intervention? | Exposure is only assumed, not measured or modeled | Target, delivery device, position, calibration method, and exposure estimate |
| Parameter completeness | Can another group replicate the exact protocol? | The page only names the intervention class | Dose, session length, session count, timing, frequency, current/intensity, wavelength, waveform, or other family-specific values |
| Sham leakage | Could participants tell active from control? | Sensory cues, withdrawal, heat, sound, congestion, or other side effects dominate | Sensory threshold, blind integrity, guess-rate, and active/sham similarity |
| Operator dependence | Does the method require specialist targeting or real-time calibration? | Home or solo use is presented as though it were equivalent to a lab workflow | MRI/neuronavigation, model-based targeting, acoustic calibration, device QA, or clinician supervision |
| Monitoring burden | Does safety depend on labs, vitals, imaging, or contraindication screening? | The page omits the screening and follow-up burden | Contraindications, adverse-event plan, biomarker checks, imaging, and stop rules |

## Family-Specific Matrix

| Family | Target exposure | Parameter reporting | Sham leakage | Operator dependence | Monitoring burden | Bottom line |
|---|---|---|---|---|---|---|
| Intranasal insulin | High priority; brain uptake depends on delivery system and state | Device model, spray geometry, dose, timing, and metabolic context | Moderate; nasal sensation and metabolic effects can reveal condition | Medium; the device is part of the intervention | Medium to high; glucose and phenotype matter | Do not treat "intranasal" as a complete description. The device is the exposure.^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md] |
| tPBM | High priority; scalp site, wavelength, irradiance, and fluence matter | Wavelength, irradiance, fluence, pulse structure, site, and session count | Moderate; heat, light leakage, and device cues can matter | Low to medium | Medium; skin/scalp tolerability and dose consistency matter | Home-capable, and now home-replicated enough to deserve real delivery scrutiny, but still device-specific and under-replicated.^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]^[raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md]^[raw/articles/pubmed-40822571-tpbm-systematic-review-sleep-wakefulness-cognition.md] |
| taVNS | Medium priority; auricular site and threshold matter | Ear site, current, pulse width, frequency, duty cycle, and duration | High; ear sensation and autonomic arousal are hard to mask | Low to medium | Medium; tolerability and state effects matter | Sham-controlled in trials, but recent memory and stress work plus the 2025 insomnia review show sensory leakage, arousal confounds, and missing parameter consensus can all move the outcome under both real and sham.^[raw/articles/pubmed-40535058-tavns-insomnia-clinical-practice-recommendations.md]^[raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md]^[raw/articles/pubmed-39815765-taVNS-memory-pupil-dilation.md]^[raw/articles/pubmed-40958978-taVNS-stress-regulation-eeg-questionnaire.md]^[raw/articles/pubmed-39124651-taVNS-autonomic-function.md] |
| tDCS/tACS | Medium to high; target and field modeling matter | Montage, current density, duration, frequency, sessions, and timing | Moderate; tingling, itching, and phosphenes can reveal assignment | Low to medium | Medium; adverse effects are usually mild but protocol-sensitive | Parameter reporting is the real gate; montage names alone are too blunt, and the 2025 tDCS parameter meta-analysis gives concrete duration/intensity anchors.^[raw/articles/pubmed-41219988-tdcs-optimal-parameters-corticospinal-excitability.md]^[raw/articles/pubmed-39905569-tdcs-dosage-parameters.md] |
| Temporal interference | High; field geometry and envelope frequency determine the effect | Carrier/envelope settings, electrode arrangement, modeling, and task pairing | Low to moderate; the bigger issue is target validity, not just sensation | High | High; validation usually needs imaging or task-linked readouts | Research-grade until target engagement and behavioral efficacy are both clear.^[raw/articles/pubmed-41167554-human-applications-temporal-interference-stimulation.md]^[raw/articles/pubmed-40925398-temporal-interference-experimental-studies-human-review.md] |
| tFUS | Very high; skull and acoustic field control are central | Transducer, drive settings, MI/TI, thermal estimates, skull model, and target plan | Low to moderate; the bigger risk is calibration failure | Very high | Very high; MRI/neuronavigation and formal safety workflow are hard to avoid | The strongest no-home-use case in the set; a 2026 review now splits lesioning, BBB opening, and low-intensity circuit stimulation into distinct branches, while BBB-opening work shows that pressure control changes whether tight junctions transiently reorganize or are persistently damaged.^[raw/articles/pubmed-41610842-transcranial-focused-ultrasound-in-the-human-brain.md]^[raw/articles/pubmed-41723237-safe-focused-ultrasound-bbb-opening-tight-junctions.md]^[raw/articles/pubmed-38410648-itrusst-standardised-reporting-transcranial-ultrasound-stimulation.md]^[raw/articles/pubmed-41072763-itrusst-biophysical-safety-transcranial-ultrasound-stimulation.md]^[raw/articles/pubmed-36215339-hydrophone-measurements-for-biomedical-ultrasound-applications.md]^[raw/articles/pubmed-28777075-numerical-evaluation-of-the-skull-for-human-neuromodulation-with-transcranial-focused-ultrasound.md]^[raw/articles/pubmed-31401074-safety-of-transcranial-focused-ultrasound-stimulation.md]^[raw/articles/pubmed-39449176-wearable-steerable-transcranial-low-intensity-focused-ultrasound-system.md] |
| Peptide nootropic / recovery reports plus adjacent gray-market nootropics | Very high; route, formulation, source identity, dose timing, and stack order often decide plausibility | Exact molecule/fragment, salt/formulation, route, dose timing, course length, source/COA, washout, co-interventions, phenotype, and objective endpoint | High; noticeable arousal, calmness, sleep change, injection/nasal sensations, pain relief, training return, and expectancy can reveal condition | Medium to high; compounding, fixed blends, sterile technique, medical-product handling, and sourcing make "home use" uneven | High; adverse-event, allergic, cardiovascular, sleep, interaction, regulatory/sports, and stop-rule fields are needed | Do not treat a peptide or adjacent nootropic label as delivered exposure. Route [[semax]], [[selank]], [[cerebrolysin]], recovery-bound [[bpc-157]], [[bromantane]], [[pinealon]], [[epithalon]], [[mots-c]], [[dihexa]], [[pe-22-28]], and [[adamax]] through [[molecule-triage-worksheet-for-online-scans]], [[peptide-stack-topology-ledger]], [[peptide-safety-and-sourcing-risk-map]], and [[peptide-regulatory-live-watch-board]] before scoring cognition signal.^[raw/articles/reddit-2026-04-29-semax-selank-cerebrolysin-advice-thread.md]^[raw/articles/reddit-2026-bromantane-thread-trail.md]^[raw/articles/clinicaltrials-nct07437547-bpc157-hamstring-repair-record-2026-05-06.md]^[raw/articles/reddit-2025-03-06-pinealon-tbi-recovery-sleep-cognition.md]^[raw/articles/reddit-2026-04-29-dihexa-thread.md]^[raw/articles/fda-bulk-drug-substances-peptide-risk-2026.md] |

## Practical Rules

- If target exposure is unverified, label the page as mechanistic, feasibility, or hypothesis-generating, not efficacy-positive.
- If sham leakage is large, separate `state change` from `cognition change`.
- If operator dependence is high, do not describe the method as a casual home protocol.
- If a page cannot name the native dose and session structure in one sentence, route it through [[device-dose-and-session-structure-ontology]] before treating the result as comparable.
- If the page cannot list the key parameters in one sentence, the delivery description is not finished.
- If monitoring burden is omitted, the safety picture is incomplete.
- If a peptide or adjacent nootropic report lacks exact identity, route, formulation, source/COA, dose timing, washout, stack order, adverse-event detail, and objective endpoint, treat it as delivery-confounded even when the anecdote is vivid.

## Open Contradictions

- Some methods are sham-controlled but still not well delivered; `sham` does not imply `validated exposure`.
- Some methods are biologically active yet too operator-dependent to be practical outside a research setting.
- tPBM and taVNS are both plausibly home-capable, but one is more exposure-reproducible while the other is more sensory-leaky.
- tDCS/tACS are often treated as easy to describe, yet the parameter literature shows that the real intervention is the field configuration, not the label.
- TI and tFUS have strong target-engagement narratives, but the field still has not converted that into a stable cognition claim.
- Intranasal insulin is a useful reminder that device choice can change the pharmacology itself.
- Peptide and adjacent gray-market nootropic anecdotes are a parallel reminder that route choice can change the intervention identity itself; an oral Dihexa mouse result, intranasal Semax/Selank report, medical-product Cerebrolysin course, Bromantane activation report, subcutaneous Pinealon self-test, and BPC-157/TB-500 recovery stack are not interchangeable evidence units.

## Related Pages

- [[sham-control-feasibility-for-cognition-interventions]]
- [[device-dose-and-session-structure-ontology]]
- [[device-parameter-worksheet-for-self-study-and-protocol-review]]
- [[ecological-robustness-table]]
- [[target-engagement-to-behavior-mediation-audit]]
- [[focused-ultrasound-at-home-feasibility-and-safety]]
- [[implementation-friction-scorecard]]
- [[intranasal-insulin-2024-2025-scan]]
- [[transcranial-photobiomodulation-2025-2026-scan]]
- [[transcutaneous-auricular-vagus-nerve-stimulation-2025-2026-scan]]
- [[tdcs-tacs-parameter-response-2025-2026-scan]]
- [[temporal-interference-stimulation-and-cognition]]
- [[molecule-triage-worksheet-for-online-scans]]
- [[peptide-stack-topology-ledger]]
- [[peptide-safety-and-sourcing-risk-map]]
- [[peptide-regulatory-live-watch-board]]
- [[safety-interaction-matrix-for-multi-modal-stacks]]
- [[oral-vs-subq-epithalon-pinealon-dihexa]]

## Actionable Wiki Updates

- Add this page to `index.md` under Comparisons.
- Link [[sham-control-feasibility-for-cognition-interventions]] and [[focused-ultrasound-at-home-feasibility-and-safety]] back to this checklist so delivery and blinding stay separated.
- Use this page as the default pre-efficacy gate when a future intervention page needs a "can we actually tell what was delivered?" section.
- Use [[device-parameter-worksheet-for-self-study-and-protocol-review]] as the fillable protocol-header companion when a future page needs a worksheet rather than a narrative summary.
- Pair this page with [[ecological-robustness-table]] whenever a future page needs a "did it still work outside the lab?" section.
- Pair this page with [[target-engagement-to-behavior-mediation-audit]] whenever a future page needs a "did delivery translate into behavior?" section.
