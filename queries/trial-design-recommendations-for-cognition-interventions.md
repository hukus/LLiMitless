---
title: Trial Design Recommendations for Cognition Interventions
created: 2026-04-27
updated: 2026-05-03
type: query
tags: [comparison, cognition, clinical-trial, protocol, controversy, biomarker, device, metabolism, sleep]
sources: [raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md, raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md, raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md, raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md, raw/articles/pubmed-40774161-mpfc-rtms-chronic-insomnia.md, raw/articles/pubmed-34648425-cbt-i-pap-sequence-daytime-performance.md, raw/articles/pubmed-32128593-dcbt-i-cognitive-function-rct.md, raw/articles/pubmed-35691208-cbt-i-objective-sleep-cognition.md, raw/articles/pubmed-39528111-solriamfetol-sharp-osa-cognition.md, raw/articles/pubmed-41962614-successful-closed-loop-neurofeedback-alpha-attention.md, raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md, raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md, raw/articles/pubmed-40626105-targeting-sleep-spindles-closed-loop-auditory-stimulation.md, raw/articles/pubmed-41110657-auditory-stimulation-sleep-varies-thalamocortical-spindle-phase.md, raw/articles/clinicaltrials-nct06948149-creatine-resistance-training-mci.md, raw/articles/clinicaltrials-nct07472426-creatine-heat-exercise-cognition.md, raw/articles/pubmed-39070254-creatine-cognition-adults-meta-analysis.md, raw/articles/pubmed-40822571-tpbm-systematic-review-sleep-wakefulness-cognition.md, raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md, raw/articles/pubmed-40253245-intranasal-insulin-ms-null.md, raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md, raw/articles/pubmed-39905569-tdcs-dosage-parameters.md, raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md]
confidence: medium
---

# Trial Design Recommendations for Cognition Interventions

This page turns the wiki's evidence into a research plan instead of another modality ranking. The main design lesson is simple: the next useful studies will be phenotype-enriched, sequence-aware, and built around delayed follow-up, not broad one-shot enhancement claims. Sleep stabilization, energy priming, and phase-locked consolidation are the three most defensible combination families right now. Biomarkers should be used to reduce variance, not to pretend the intervention is stronger than it is.^[raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md]^[raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md]^[raw/articles/pubmed-34648425-cbt-i-pap-sequence-daytime-performance.md]^[raw/articles/pubmed-41962614-successful-closed-loop-neurofeedback-alpha-attention.md]^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md]^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]

What changed since 2024:

- Biomarker enrichment now has a real cognition example in MCI, but also a clean reminder that enrichment does not rescue a weak intervention.^[raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md]^[raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md]
- The sleep literature now includes an explicit sequencing analog, so "stabilize sleep first" is more than a slogan.^[raw/articles/pubmed-34648425-cbt-i-pap-sequence-daytime-performance.md]^[raw/articles/pubmed-32128593-dcbt-i-cognitive-function-rct.md]^[raw/articles/pubmed-35691208-cbt-i-objective-sleep-cognition.md]
- Solriamfetol now has a direct cognition result in OSA with EDS, which strengthens the case for using disorder-context wake-promoters as comparator benchmarks when a protocol targets arousal or fatigue rather than durable enhancement.^[raw/articles/pubmed-39528111-solriamfetol-sharp-osa-cognition.md]
- Closed-loop sleep work now has both positive phase-specific lab data and a home/ecological null, plus a personalization proof-of-concept, which is exactly the kind of contradiction a design page should preserve.^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md]^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]^[raw/articles/pubmed-40626105-targeting-sleep-spindles-closed-loop-auditory-stimulation.md]^[raw/articles/pubmed-41110657-auditory-stimulation-sleep-varies-thalamocortical-spindle-phase.md]^[raw/articles/pubmed-40691439-personalized-targeted-memory-reactivation.md]
- tPBM and creatine now both have enough human signal to justify a combination hypothesis, even though the synergy itself is still unproven.^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]^[raw/articles/clinicaltrials-nct06948149-creatine-resistance-training-mci.md]^[raw/articles/pubmed-39070254-creatine-cognition-adults-meta-analysis.md]
- Intranasal insulin looks phenotype-sensitive and mechanistically interesting, but it is not yet a first-wave combination candidate because delivery and responder selection are still too unstable.^[raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md]^[raw/articles/pubmed-40253245-intranasal-insulin-ms-null.md]

## Immediate Trial Shortlist

| Rank | Combination protocol | Why it deserves immediate design | Suggested structure |
|---|---|---|---|
| 1 | `CBT-I -> rTMS/tACS` | Sleep correction has direct cognition-facing evidence, and the closest sequencing analog already exists in CBT-I plus PAP. rTMS can also shift insomnia state, so this is the cleanest "stabilize first, then amplify" test.^[raw/articles/pubmed-32128593-dcbt-i-cognitive-function-rct.md]^[raw/articles/pubmed-35691208-cbt-i-objective-sleep-cognition.md]^[raw/articles/pubmed-34648425-cbt-i-pap-sequence-daytime-performance.md]^[raw/articles/pubmed-40774161-mpfc-rtms-chronic-insomnia.md] |
| 2 | `Creatine + tPBM` | Both branches have plausible energy-throughput biology, low-to-moderate safety burden, and enough human signal to justify a factorial test. The key question is whether the combination is better than either component alone under high load or low baseline reserve.^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]^[raw/articles/clinicaltrials-nct06948149-creatine-resistance-training-mci.md]^[raw/articles/clinicaltrials-nct07472426-creatine-heat-exercise-cognition.md]^[raw/articles/pubmed-39070254-creatine-cognition-adults-meta-analysis.md] |
| 3 | `Closed-loop sleep consolidation` (`CLAS` / `TMR` +/- phase-specific adjunct) | Phase-specific sleep cueing already has the strongest timing story in the wiki, and the lab-vs-home split means the design problem is now obvious. The new personalized paper adds a cue-policy question too: does recall-difficulty weighting beat fixed cue counts for hard memories?^[raw/articles/pubmed-40102385-phase-specific-enhancement-motor-memory-consolidation-closed-loop-tmr.md]^[raw/articles/pubmed-40691439-personalized-targeted-memory-reactivation.md]^[raw/articles/pubmed-40575621-tmr-rem-negative-images-lpp.md]^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md]^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]^[raw/articles/pubmed-40626105-targeting-sleep-spindles-closed-loop-auditory-stimulation.md]^[raw/articles/pubmed-41110657-auditory-stimulation-sleep-varies-thalamocortical-spindle-phase.md] |

The reserve candidate is `intranasal insulin + stimulation`, but it should stay in the second wave until the field has a cleaner delivery standard and a better way to enrich by insulin resistance, APOE, or disease state.^[raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md]^[raw/articles/pubmed-40253245-intranasal-insulin-ms-null.md]^[raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md]^[raw/articles/pubmed-39905569-tdcs-dosage-parameters.md]

## Platform Architecture

- Use a shared control/sham backbone so every arm is comparable against the same battery and the same timing rules.
- Predefine phenotype strata before randomization: sleep quality, chronotype, APOE / polygenic risk, insulin resistance, baseline reserve, learner status for adaptive systems, and the challenge-state label itself.^[raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md]^[raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md]^[raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md]^[raw/articles/pubmed-41962614-successful-closed-loop-neurofeedback-alpha-attention.md]
- Declare the challenge state before randomization and keep it fixed across arms: rested baseline, sleep loss, acute stress, hypoxia, postprandial load, exercise / heat fatigue, perioperative recovery, or injury recovery. Use [[state-challenge-matrix-for-cognition-interventions]] as the shared label set.
- Separate same-day arousal from next-day learning, consolidation, transfer, and resilience. A brief PVT, working-memory task, switching task, delayed recall, EMA, sleep tracking, HRV, and optional CGM are the backbone. [[practical-cognitive-measurement-stack]]
- If the claim is about alertness or fatigue resilience, include a wake-promoting comparator benchmark such as caffeine, modafinil/armodafinil, methylphenidate, or solriamfetol before inferring broad enhancement. [[pharmacology-comparator-map]]
- Keep delayed follow-up in every design. A 30-day checkpoint is the minimum useful durability read; 90 days is better when the intervention is supposed to alter learning or retention. [[washout-durability-for-cognition-interventions]]
- Use washout or off-days when testing arousal-heavy interventions so withdrawal reversal does not masquerade as enhancement. [[anti-tolerance-periodization-in-cognitive-enhancement]]^[raw/articles/pubmed-22992376-caffeine-attention-withdrawn-consumers.md]

## Top Sources

1. `raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md` - direct enrichment example in MCI.
2. `raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md` - enriched cohort with a null primary endpoint.
3. `raw/articles/pubmed-32128593-dcbt-i-cognitive-function-rct.md` - cognition-facing CBT-I trial.
4. `raw/articles/pubmed-35691208-cbt-i-objective-sleep-cognition.md` - objective sleep plus cognition in CBT-I.
5. `raw/articles/pubmed-34648425-cbt-i-pap-sequence-daytime-performance.md` - sequencing analog for sleep-first design.
6. `raw/articles/pubmed-40774161-mpfc-rtms-chronic-insomnia.md` - rTMS as a sleep-state modifier.
7. `raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md` - positive older-adult tPBM signal.
8. `raw/articles/clinicaltrials-nct06948149-creatine-resistance-training-mci.md` - 2x2 creatine + resistance-training factorial design.
9. `raw/articles/pubmed-41962614-successful-closed-loop-neurofeedback-alpha-attention.md` - learner-dependent adaptive neuromodulation.
10. `raw/articles/pubmed-40691439-personalized-targeted-memory-reactivation.md` - personalized cue-policy proof-of-concept for difficult memories.
11. `raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md` - closed-loop sleep retention preprint.
12. `raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md` - home delivery null.
13. `raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md` - phenotype-linked metabolic physiology.

## Evidence Tiering

| Tier | What it supports | Design implication |
|---|---|---|
| Randomized trials | CBT-I, rTMS insomnia, tPBM, creatine-related studies, CLAS/TMR, intranasal insulin physiology | These are the direct anchors for a platform trial. |
| Trial protocols | CYCLE-AD and the creatine factorial trial | The wiki already has examples of enrichment and factorial design in the cognition space. |
| Mechanistic human physiology | Closed-loop theta connectivity, tPBM-BDNF, intranasal-insulin connectivity, spindle-phase timing | Biomarker movement should be measured, but not mistaken for efficacy. |
| Null / contradiction layer | tPBM concussion null, intranasal insulin MS null, home CLAS null, tDCS durability null | Every recommended trial needs a failure mode that it is designed to distinguish from success. |

## Effect Size Snapshot

| Protocol | Expected signal type | Current read |
|---|---|---|
| `CBT-I -> rTMS/tACS` | Likely small-to-moderate improvement in state-dependent cognition or daytime performance if sleep improves first | Strongest route to separate sleep rescue from stimulation benefit, but no direct combo cognition RCT yet.^[raw/articles/pubmed-32128593-dcbt-i-cognitive-function-rct.md]^[raw/articles/pubmed-40774161-mpfc-rtms-chronic-insomnia.md] |
| `Creatine + tPBM` | Possible additive fatigue-resilience or working-memory benefit under high load | Plausible but unproven synergy; each component looks context-sensitive rather than universal.^[raw/articles/pubmed-39070254-creatine-cognition-adults-meta-analysis.md]^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md] |
| `Closed-loop sleep consolidation` | Most likely to affect delayed retention and consolidation, not same-day throughput | Timing seems to be the real dose; lab effects exist, home replication is fragile.^[raw/articles/pubmed-40102385-phase-specific-enhancement-motor-memory-consolidation-closed-loop-tmr.md]^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md] |
| `Intranasal insulin + stimulation` | Could be larger in insulin-resistant or AD/MCI-like phenotypes | Reserve candidate only; signal and delivery remain too phenotype-sensitive for first wave.^[raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md]^[raw/articles/pubmed-40253245-intranasal-insulin-ms-null.md] |

## Safety / Adverse Events

- The main safety issue is additive state burden: sleep disruption, anxiety, blood pressure elevation, or headaches can stack when arousal interventions are combined with stimulation. [[safety-interaction-matrix-for-multi-modal-stacks]]
- tPBM is generally low-burden, but low burden is not the same as low uncertainty; the concussion null shows that a tolerated protocol can still fail where the wiki wants it to work.^[raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md]
- Closed-loop sleep protocols can fragment sleep if timing is off, and the home/ecological null suggests that convenience may come at a behavior cost.^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]
- Intranasal insulin is not a safety-free placeholder. Even when tolerated, its response pattern depends on phenotype and delivery context.^[raw/articles/pubmed-40253245-intranasal-insulin-ms-null.md]^[raw/articles/pubmed-41091693-long-acting-intranasal-insulin-delirium-rct.md]
- Creatine is relatively straightforward, but heat and exertion protocols still need hydration and kidney-risk awareness when the design adds physiological stress.^[raw/articles/clinicaltrials-nct07472426-creatine-heat-exercise-cognition.md]

## Responder Phenotypes

- `Sleep-fragmented` or `insomnia` phenotypes are the best candidates for the sleep-first sequence.
- `Low reserve`, `APOE / PRS-enriched`, or other biomarker-stratified cohorts are the best place to test whether enrichment truly changes effect size.^[raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md]^[raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md]
- `High demand`, `sleep loss`, or `low dietary creatine` phenotypes are the most plausible creatine/tPBM responders.^[raw/articles/clinicaltrials-nct07472426-creatine-heat-exercise-cognition.md]^[raw/articles/pubmed-40822571-tpbm-systematic-review-sleep-wakefulness-cognition.md]
- `Learners` are the clear responder class in adaptive neurofeedback, so closed-loop designs should predefine learning success before claiming efficacy.^[raw/articles/pubmed-41962614-successful-closed-loop-neurofeedback-alpha-attention.md]
- `Phase-window` responders are the central closed-loop sleep phenotype; timing is part of the intervention, not a minor implementation detail.^[raw/articles/pubmed-40626105-targeting-sleep-spindles-closed-loop-auditory-stimulation.md]^[raw/articles/pubmed-41110657-auditory-stimulation-sleep-varies-thalamocortical-spindle-phase.md]
- `Insulin resistance` and metabolic dysfunction are the main enrichment hypotheses for intranasal insulin, but they still belong in the reserve lane.^[raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md]

## Protocol Parameters

- `CBT-I -> rTMS/tACS`: stage 1 sleep stabilization, stage 2 stimulation, then 30- and 90-day cognition follow-up.
- `Creatine + tPBM`: 2x2 factorial or crossover design, ideally with a load condition such as sleep loss, heat stress, or high learning demand.
- `Closed-loop sleep consolidation`: phase-specific cueing, bounded cue count, stable NREM windows, and behavior tested after the sleep period rather than immediately.
- Every protocol should keep one fixed primary endpoint cluster and one fixed adverse-event cluster; do not swap tasks mid-study.
- Use block randomization and stratify on phenotype variables that the wiki already treats as plausible moderators: sleep quality, chronotype, reserve, APOE / PRS, insulin resistance, and learner status.
- Include washout or off-days when the intervention can trigger withdrawal, rebound, or tolerance confounding. [[anti-tolerance-periodization-in-cognitive-enhancement]]

## Open Contradictions

- Biomarker enrichment can sharpen a signal, but it can also hide that the intervention was weak to begin with.
- Physiology wins do not guarantee cognition wins. The wiki now has multiple examples of biomarker-positive, endpoint-negative studies.^[raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md]^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]^[raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md]
- Home delivery can erase a lab signal, especially for sleep-state interventions.
- Phase-specific or learner-specific effects can look broad if the design does not predefine the responder class.
- Intranasal insulin is still mechanistically attractive, but the wiki should not move it into the immediate-design lane until delivery and enrichment are sharper.

## Actionable Wiki Updates

- Add this page to `index.md` under Queries.
- Link this page from [[medicine-cognition-summary]] and [[most-promising-methods-for-cognition]] so the design layer is easy to find.
- Add a short pointer from [[practical-cognitive-measurement-stack]] so the endpoint backbone is visible in the trial-design layer.
- Add a state-declaration step from [[state-challenge-matrix-for-cognition-interventions]] so every future protocol says whether it targets rested baseline, sleep loss, stress, hypoxia, postprandial load, exercise / heat fatigue, perioperative recovery, or injury recovery before endpoints are chosen.
- Keep [[negative-evidence-watchlist-for-cognition-interventions]] and [[washout-durability-for-cognition-interventions]] adjacent to this page because they define the main failure modes.
- Use this page as the landing spot for the "three combination protocols" work item in `TODO.md`.
