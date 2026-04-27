---
title: Cognitive Operating System State-Machine Spec
created: 2026-04-29
updated: 2026-05-03
type: query
tags: [cognition, protocol, comparison, performance, sleep, metabolism, neuroscience, clinical-trial, device, controversy]
sources: [raw/articles/pubmed-41962614-successful-closed-loop-neurofeedback-alpha-attention.md, raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md, raw/articles/pubmed-41070261-adaptive-tablet-based-cognitive-training-stroke-survivors.md, raw/articles/pubmed-40895105-ai-driven-cognitive-telerehabilitation-for-stroke-rct.md, raw/articles/pubmed-39774282-home-based-computerized-adaptive-cognitive-training-post-stroke-cognitive-impairment.md, raw/articles/pubmed-37574121-sleep-eeg-multivariate-cognitive-performance.md, raw/articles/pubmed-41309064-hrv-cv-digital-biomarker-behavior.md, raw/articles/pubmed-40221238-chronotype-cognitive-decline.md, raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md, raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md, raw/articles/pubmed-40575621-tmr-rem-negative-images-lpp.md]
confidence: low
---

# Cognitive Operating System State-Machine Spec

The wiki now has most of the component parts of a cognitive operating system, but they are scattered across separate pages: state markers, endpoint labels, adaptive delivery, closed-loop stimulation, and responder prediction. The missing layer is the controller that decides which intervention class to deploy when the participant is in a specific state, and which endpoint should be treated as primary for that state.

This page treats the COS idea as a decision layer, not as a validated treatment. The current literature supports pieces of the loop, but not a single integrated controller that is proven to outperform ordinary study design or manual scheduling.^[raw/articles/pubmed-41962614-successful-closed-loop-neurofeedback-alpha-attention.md]^[raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md]^[raw/articles/pubmed-41070261-adaptive-tablet-based-cognitive-training-stroke-survivors.md]^[raw/articles/pubmed-40895105-ai-driven-cognitive-telerehabilitation-for-stroke-rct.md]^[raw/articles/pubmed-39774282-home-based-computerized-adaptive-cognitive-training-post-stroke-cognitive-impairment.md]

## What Changed Since 2024

- Closed-loop attention control now has a clearer behavioral anchor: IAF neurofeedback improved attention, but only in learners who successfully changed the target rhythm.^[raw/articles/pubmed-41962614-successful-closed-loop-neurofeedback-alpha-attention.md]
- State estimation is more defensible than it used to be. Sleep EEG, HRV variability, chronotype, and passive sensing all now have enough signal to act as scheduling inputs, even if they are not treatment-response proof on their own.^[raw/articles/pubmed-37574121-sleep-eeg-multivariate-cognitive-performance.md]^[raw/articles/pubmed-41309064-hrv-cv-digital-biomarker-behavior.md]^[raw/articles/pubmed-40221238-chronotype-cognitive-decline.md]^[raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md]
- Adaptive cognitive training moved from generic digital-app framing into explicit controller logic. The stroke rehab literature now includes adaptive tablet training and AI-driven telerehabilitation, both of which are closer to an operating-system model than a fixed protocol.^[raw/articles/pubmed-41070261-adaptive-tablet-based-cognitive-training-stroke-survivors.md]^[raw/articles/pubmed-40895105-ai-driven-cognitive-telerehabilitation-for-stroke-rct.md]^[raw/articles/pubmed-39774282-home-based-computerized-adaptive-cognitive-training-post-stroke-cognitive-impairment.md]
- Sleep-state closed-loop work now shows the gap between lab control and ecological transfer more clearly. Phase-correct stimulation can move sleep physiology, but home delivery and some TMR-style paradigms still fail to produce a durable behavioral win.^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md]^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]^[raw/articles/pubmed-40575621-tmr-rem-negative-images-lpp.md]

## State Machine

| State | Input vector | Best-fit intervention class | Primary endpoint | Main failure mode |
|---|---|---|---|---|
| `Recovery` | Sleep debt, fatigue, low HRV, high stress, metabolic strain, post-load decline | Sleep banking, load reduction, low-burden resilience interventions, rescue comparators | PVT, next-day resilience, symptom relief | Treating rescue as baseline enhancement |
| `Acquisition` | Stable arousal, acceptable baseline performance, enough practice headroom | Adaptive cognitive training, neurofeedback, task-guided stimulation | Learning slope, task acquisition, near transfer | Practice effects and task-specific gains masquerading as general improvement |
| `Consolidation` | Post-learning sleep opportunity, cueable memories, stable sleep stage target | CLAS/TMR, sleep-stage targeting, post-learning rest | Delayed recall, overnight retention | Physiology-only success without behavioral transfer |
| `Stress-Resilience` | Acute autonomic load, time pressure, perturbation exposure | State-targeted stimulation, autonomic modulation, challenge-specific support | Performance under challenge | Arousal gain without precision, transfer, or delayed retention |

The central rule is that the participant state must be explicit before the intervention is chosen. Otherwise the wiki will keep collapsing rescue, learning, and consolidation into one generic "cognition" bucket.

## Evidence Tiering

### State Estimation Layer

- Sleep EEG and chronotype work support sleep-state and circadian context as useful inputs, not as direct performance claims.^[raw/articles/pubmed-37574121-sleep-eeg-multivariate-cognitive-performance.md]^[raw/articles/pubmed-40221238-chronotype-cognitive-decline.md]
- HRV variability and passive sensing add a lower-cost context layer that can help with timing and stratification.^[raw/articles/pubmed-41309064-hrv-cv-digital-biomarker-behavior.md]^[raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md]
- None of these markers, by themselves, validate a universal COS controller. They are closer to input features than output targets.

### Action Layer

- Closed-loop neurofeedback shows the cleanest healthy-adult closed-loop behavioral signal in the current slice, but it is learner-dependent rather than universal.^[raw/articles/pubmed-41962614-successful-closed-loop-neurofeedback-alpha-attention.md]
- Adaptive tablet training and AI-driven telerehabilitation show that controller logic can be embedded in cognition training, especially in stroke recovery, where ecological validity is easier to justify than in healthy enhancement.^[raw/articles/pubmed-41070261-adaptive-tablet-based-cognitive-training-stroke-survivors.md]^[raw/articles/pubmed-40895105-ai-driven-cognitive-telerehabilitation-for-stroke-rct.md]^[raw/articles/pubmed-39774282-home-based-computerized-adaptive-cognitive-training-post-stroke-cognitive-impairment.md]
- Closed-loop sleep cueing has mixed evidence: phase targeting matters, but ecological delivery can erase the behavioral signal.^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md]^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]^[raw/articles/pubmed-40575621-tmr-rem-negative-images-lpp.md]

### Integration Layer

- No current source validates a full daily COS that senses state, classifies the state, selects intervention output, and then swaps the endpoint definition accordingly.
- That missing integration is exactly why the wiki needs the COS layer: to keep state markers, delivery logic, and endpoint labels from bleeding into one another.

## Open Contradictions

- Physiology can move without behavior, especially in sleep-stimulation work.
- Learner-dependent effects are real, which means closed-loop success can be conditional on training the controller itself.
- Rehabilitation evidence is informative, but it does not automatically transfer to high-performing healthy adults.
- Digital phenotype is stronger as a state marker than as a proof of responder biology.
- The more adaptive the system becomes, the easier it is to overfit small cohorts and call the result personalization.

## Top Sources

1. `raw/articles/pubmed-41962614-successful-closed-loop-neurofeedback-alpha-attention.md` - 2026 healthy-adult closed-loop alpha neurofeedback with attention outcomes.
2. `raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md` - longitudinal passive sensing as a state-marker example.
3. `raw/articles/pubmed-41070261-adaptive-tablet-based-cognitive-training-stroke-survivors.md` - adaptive tablet training with ecological design.
4. `raw/articles/pubmed-40895105-ai-driven-cognitive-telerehabilitation-for-stroke-rct.md` - direct AI-driven cognitive telerehabilitation RCT.
5. `raw/articles/pubmed-39774282-home-based-computerized-adaptive-cognitive-training-post-stroke-cognitive-impairment.md` - explicit computer-adaptive training in stroke-related impairment.
6. `raw/articles/pubmed-37574121-sleep-eeg-multivariate-cognitive-performance.md` - multivariate sleep-EEG state input.
7. `raw/articles/pubmed-41309064-hrv-cv-digital-biomarker-behavior.md` - HRV variability as a behavior-sensitive state input.
8. `raw/articles/pubmed-40221238-chronotype-cognitive-decline.md` - chronotype as a long-horizon state variable.
9. `raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md` - phase-timed sleep stimulation plus modulation.
10. `raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md` - ecological null that keeps the COS from overclaiming.
11. `raw/articles/pubmed-40575621-tmr-rem-negative-images-lpp.md` - REM TMR physiology shift without a broad behavioral win.

## Practical COS Draft

1. Sense the current state with a minimal vector: sleep, HRV, a brief performance probe, and any relevant metabolic or stress marker.
2. Classify the state into `Recovery`, `Acquisition`, `Consolidation`, or `Stress-Resilience`.
3. Choose the intervention family that matches the state, not the one with the loudest mechanism.
4. Choose the endpoint family that matches the state and the intervention.
5. Re-check after the block and declassify the state if the input vector changes.

This is useful as a research scaffold even if the optimal controller remains unknown.

## Related Pages

- [[closed-loop-and-adaptive-neuromodulation-for-cognitive-performance]]
- [[multi-feature-responder-scorecard]]
- [[endpoint-dictionary-for-cognition-interventions]]
- [[state-challenge-matrix-for-cognition-interventions]]
- [[practical-cognitive-measurement-stack]]
- [[digital-phenotype-and-biomarker-responder-atlas]]
- [[ai-adaptive-vr-cognitive-training-2026-scan]]

## Actionable Wiki Updates

- Add this page to `index.md` under Queries.
- Link it from [[closed-loop-and-adaptive-neuromodulation-for-cognitive-performance]], [[multi-feature-responder-scorecard]], [[endpoint-dictionary-for-cognition-interventions]], and [[state-challenge-matrix-for-cognition-interventions]] so the controller layer is easy to find.
- Use it as the synthesis landing page for the new `TODO` item on the cognitive operating system state-machine spec.
- Keep the state inputs in [[multi-feature-responder-scorecard]] and the outcome labels in [[endpoint-dictionary-for-cognition-interventions]] synchronized with this page.
