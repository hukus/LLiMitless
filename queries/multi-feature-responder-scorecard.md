---
title: Multi-Feature Responder Scorecard for Cognition Interventions
created: 2026-04-28
updated: 2026-04-29
type: query
tags: [cognition, biomarker, clinical-trial, comparison, protocol, performance, sleep, metabolism, neuroscience, controversy]
sources: [raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md, raw/articles/pubmed-40316664-tms-connectomics-response-cud.md, raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md, raw/articles/pubmed-40629377-taVNS-primary-insomnia-bf-fc.md, raw/articles/pubmed-40436987-superagers-major-biomarkers-machine-learning.md, raw/articles/pubmed-37574121-sleep-eeg-multivariate-cognitive-performance.md, raw/articles/pubmed-40221238-chronotype-cognitive-decline.md, raw/articles/pubmed-40018197-sleep-duration-chronotype-health-lifestyle-cognition.md, raw/articles/pubmed-40633904-tdcs-variability-age-2025.md, raw/articles/pubmed-33842683-galantamine-basal-forebrain-predictor.md, raw/articles/pubmed-40292419-tdcs-stress-working-memory-2025.md, raw/articles/pubmed-41309064-hrv-cv-digital-biomarker-behavior.md, raw/articles/pubmed-41435616-digital-phenotyping-depression-treatment-response.md, raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md, raw/articles/pubmed-41707474-digital-phenotypes-mdd-passive-sensing.md, raw/articles/pubmed-39833903-digital-biomarkers-cognitive-assessment-older-adults.md, raw/articles/pubmed-41357423-passive-sensors-digital-markers-alzheimers.md, raw/articles/pubmed-41322085-game-based-cognitive-aging-assessment.md, raw/articles/pubmed-39706190-digital-phenotyping-wearables-ai-psychiatric-disorders-genetic-associations.md, raw/articles/pubmed-41876851-digital-physiological-biomarkers-predict-within-person-symptom-changes-complex-chronic-illness.md, raw/articles/pubmed-41223069-digital-phenotype-allostatic-load-military-training.md, raw/articles/pubmed-41909060-terminological-clarity-digital-biomarker-research.md, raw/articles/pubmed-41646388-home-based-tdcs-eeg-biomarkers-response.md, raw/articles/pubmed-40493989-ml-response-emotional-disorders-meta-analysis.md]
confidence: low
---

# Multi-Feature Responder Scorecard for Cognition Interventions

This page is a design tool, not a validated clinical biomarker panel. It combines the wiki's best-supported responder signals into one screen so sleep, chronotype, HRV, metabolic state, genotype, connectivity, and baseline performance can be judged together instead of pretending any single marker is decisive. The strongest current lesson is that response prediction works best when the marker is close to the intervention mechanism, but state markers and baseline reserve still matter enough to change how a study should be enriched, stratified, or timed. The newer reserve papers make the split more concrete: basal forebrain anatomy predicted galantamine response in healthy older adults, older adults showed larger tDCS response variability than younger adults, and stress-state target choice changed whether prefrontal stimulation rescued working memory.^[raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md]^[raw/articles/pubmed-40316664-tms-connectomics-response-cud.md]^[raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md]^[raw/articles/pubmed-40629377-taVNS-primary-insomnia-bf-fc.md]^[raw/articles/pubmed-40436987-superagers-major-biomarkers-machine-learning.md]^[raw/articles/pubmed-37574121-sleep-eeg-multivariate-cognitive-performance.md]^[raw/articles/pubmed-33842683-galantamine-basal-forebrain-predictor.md]^[raw/articles/pubmed-40633904-tdcs-variability-age-2025.md]^[raw/articles/pubmed-40292419-tdcs-stress-working-memory-2025.md]

What changed since 2024:

- Multi-feature biomarker panels can now predict cognitive phenotype in a proof-of-concept way, as shown by the SuperAgers model that selected 15 key blood biomarkers from a larger set and reached 76% accuracy for cognitive-domain prediction.^[raw/articles/pubmed-40436987-superagers-major-biomarkers-machine-learning.md]
- Sleep physiology is not just noise. A multivariate sleep-EEG model explained 2.5-10% of cognitive-performance variance in independent validation samples, with NREM sigma and REM beta power pointing in the favorable direction.^[raw/articles/pubmed-37574121-sleep-eeg-multivariate-cognitive-performance.md]
- Chronotype now looks more like a causal risk-state variable than a pure label, because a 10-year cohort linked it to cognitive decline through sleep quality and health behaviors, and a large UK Biobank analysis tied cognition to the broader sleep/chronotype/health-lifestyle bundle rather than to chronotype alone.^[raw/articles/pubmed-40221238-chronotype-cognitive-decline.md]^[raw/articles/pubmed-40018197-sleep-duration-chronotype-health-lifestyle-cognition.md]
- Nocturnal HRV variability has become a scalable behavior-sensitive state marker, not just a recovery metric, because HRV-CV tracks alcohol, sleep regularity, physical activity, and BMI.^[raw/articles/pubmed-41309064-hrv-cv-digital-biomarker-behavior.md]
- Morning wearable physiology now adds a closer-to-real-time state marker: HR and HRV shifts can improve prediction of same-day symptom worsening when added to prior-day symptoms.^[raw/articles/pubmed-41876851-digital-physiological-biomarkers-predict-within-person-symptom-changes-complex-chronic-illness.md]
- Baseline anatomy and target choice now sit on the same responder map as genotype and connectivity: basal forebrain volume predicted who benefited from galantamine, and vmPFC stimulation outperformed dlPFC under stress-induced working-memory deficit.^[raw/articles/pubmed-33842683-galantamine-basal-forebrain-predictor.md]^[raw/articles/pubmed-40292419-tdcs-stress-working-memory-2025.md]
- Genotype and connectomics still provide the clearest intervention-response signal in cognition-adjacent work: APOE ε4 and polygenic risk modified MCI intervention response, while baseline resting-state connectomics improved rTMS response prediction in cocaine use disorder.^[raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md]^[raw/articles/pubmed-40316664-tms-connectomics-response-cud.md]
- Passive sensing has become useful for state estimation and treatment-response stratification, but the current literature still stops short of showing that digital phenotype alone predicts healthy-adult cognition gain.^[raw/articles/pubmed-41435616-digital-phenotyping-depression-treatment-response.md]^[raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md]^[raw/articles/pubmed-41707474-digital-phenotypes-mdd-passive-sensing.md]^[raw/articles/pubmed-39833903-digital-biomarkers-cognitive-assessment-older-adults.md]^[raw/articles/pubmed-41357423-passive-sensors-digital-markers-alzheimers.md]^[raw/articles/pubmed-41322085-game-based-cognitive-aging-assessment.md]

## Scorecard

| Layer | Inputs | What it should decide | Current weight |
|---|---|---|---|
| Mechanistic fit | EEG, connectivity, anatomy close to target, genotype when disease-risk biology is relevant | Whether the intervention is biologically aligned enough to justify enrichment or stratification | High |
| State fit | Sleep quality, chronotype, HRV, insulin resistance / CGM, current fatigue or stress | Whether the participant is in a response-susceptible state and when to sample | Medium |
| Reserve fit | Baseline cognitive performance, ceiling/floor risk, prior learning slope | Whether the endpoint can still move and whether regression-to-the-mean will dominate | High as covariate |
| Ecological context | EMA, passive sensing, adherence, routine stability, activity patterns | Whether the study can be interpreted cleanly in real life rather than only in the lab | Low to medium |

The scorecard is additive only as evidence triangulation. It is not meant to generate a single summed biomarker score, and no current source validates a universal weighting scheme for cognition interventions. That is an inference from the current responder, sleep, digital-phenotype, and biomarker literature rather than a direct trial result.^[raw/articles/pubmed-40436987-superagers-major-biomarkers-machine-learning.md]^[raw/articles/pubmed-37574121-sleep-eeg-multivariate-cognitive-performance.md]^[raw/articles/pubmed-40221238-chronotype-cognitive-decline.md]^[raw/articles/pubmed-41309064-hrv-cv-digital-biomarker-behavior.md]^[raw/articles/pubmed-40633904-tdcs-variability-age-2025.md]

## Practical Rule

1. Use mechanistic fit to decide whether a marker belongs in enrichment, not to decide that the intervention is already "proven."
2. Use state fit to decide timing, stratification, or washout handling when sleep, chronotype, HRV, or metabolic state is unstable.
3. Use reserve fit to decide whether the study should even expect a measurable change on the chosen endpoint.
4. Treat ecological context as a confounder screen, not as proof of responder biology.
5. If only one marker is positive, keep it as a covariate or scheduling variable unless the intervention is explicitly target-matched to that marker.
6. If a digital phenotype is the only positive signal, do not upgrade it into a responder biomarker without prospective validation.

## Decision Ladder

| Strongest signal you have | Best use | Examples | What not to do |
|---|---|---|---|
| Mechanistic fit | Enrich or stratify for target proximity | N100 for rTMS, basal forebrain volume for galantamine, connectomics for stimulation response | Treat it as proof the intervention will work in everyone |
| State fit | Time the intervention or adjust the block | Sleep debt, chronotype, HRV-CV, insulin resistance, stress state | Collapse it into a trait label |
| Reserve fit | Set floor/ceiling expectations and choose endpoints | Baseline task performance, older age, cognitive reserve, prior learning slope | Read ceiling-limited change as a negative intervention |
| Ecological context | Screen for confounding and adherence drift | Passive sensing, EMA, routine stability, activity rhythm | Convert it into causal responder biology |

## Suggested Weights

These weights are a working heuristic for study design, not a clinical diagnostic scale.

| Category | Default role | Suggested weight |
|---|---|---|
| Genotype / PRS | Enrichment in disease-risk or reserve-linked cohorts | 2 |
| Connectivity / EEG / anatomy | Mechanistic responder marker | 2 |
| Baseline task performance | Covariate and ceiling/floor guardrail | 2 |
| Sleep quality / chronotype / sleep debt | State moderator and timing variable | 1 |
| HRV / autonomic recovery | State moderator and scheduling variable | 1 |
| Metabolic state | State moderator and phenotype filter | 1 |
| Passive sensing / EMA | Context and feasibility layer | 0.5 |

The useful pattern is not "highest score wins." It is "do the mechanistic, state, and reserve layers all point in the same direction?" If they do, the candidate becomes a plausible enrichment or stratification target. If they do not, the scorecard should be used to avoid mis-timed sampling, not to force a positive responder story.

## Top Sources

1. [PubMed 41388319](https://pubmed.ncbi.nlm.nih.gov/41388319/) - APOE ε4 and polygenic risk shaped intervention response in MCI.
2. [PubMed 40316664](https://pubmed.ncbi.nlm.nih.gov/40316664/) - baseline connectomics improved rTMS response prediction in cocaine use disorder.
3. [PubMed 40392946](https://pubmed.ncbi.nlm.nih.gov/40392946/) - insulin resistance shifted resting-state connectivity during intranasal-insulin work.
4. [PubMed 40629377](https://pubmed.ncbi.nlm.nih.gov/40629377/) - taVNS insomnia trial with a baseline connectivity predictor.
5. [PubMed 40436987](https://pubmed.ncbi.nlm.nih.gov/40436987/) - multi-feature biomarker model in SuperAgers.
6. [PubMed 37574121](https://pubmed.ncbi.nlm.nih.gov/37574121/) - multivariate sleep-EEG prediction of cognitive performance.
7. [PubMed 40221238](https://pubmed.ncbi.nlm.nih.gov/40221238/) - chronotype and 10-year cognitive decline cohort.
8. [PubMed 41309064](https://pubmed.ncbi.nlm.nih.gov/41309064/) - nocturnal HRV-CV as a behavior-sensitive digital biomarker.
9. [PubMed 33842683](https://pubmed.ncbi.nlm.nih.gov/33842683/) - basal forebrain anatomy predicting galantamine response.
10. [PubMed 40633904](https://pubmed.ncbi.nlm.nih.gov/40633904/) - tDCS response variability is larger in older adults.
11. [PubMed 40292419](https://pubmed.ncbi.nlm.nih.gov/40292419/) - stress-state target choice changes tDCS working-memory rescue.

## Open Contradictions

- Multi-feature models can predict current phenotype better than they predict treatment response.
- A biomarker-rich panel can make a weak intervention look more interpretable without making it more effective.
- State markers often reflect behavior, which means they are useful for timing and stratification even when they are not causal predictors.
- Passive sensing is good at context and weak at proving causal responder biology.
- The more features you add, the easier it is to overfit small cognition cohorts, especially when the sample size is not much larger than the number of candidate predictors.
- A strong state marker can be clinically useful without being a stable trait marker.
- Age, chronotype, and sleep debt can all inflate response variance without telling you which subject will improve from a specific intervention.

## Related Pages

- [[digital-phenotype-and-biomarker-responder-atlas]]
- [[biomarker-enriched-enrollment-and-cognition-effect-sizes]]
- [[practical-cognitive-measurement-stack]]
- [[endpoint-dictionary-for-cognition-interventions]]
- [[trial-design-recommendations-for-cognition-interventions]]

## Actionable Wiki Updates

- Add this page to `index.md` under Queries.
- Link it from [[digital-phenotype-and-biomarker-responder-atlas]] and [[biomarker-enriched-enrollment-and-cognition-effect-sizes]] so the combined design rule is easy to find.
- Use it as the decision layer for the `TODO` item on a multi-feature responder scorecard.
- Keep the measurement layer in [[practical-cognitive-measurement-stack]] and the endpoint language in [[endpoint-dictionary-for-cognition-interventions]] synchronized with this page.
- Cross-link [[chronotype-specific-response-across-sleep-stimulation-interventions]] so timing and state rules stay aligned with the scorecard.
