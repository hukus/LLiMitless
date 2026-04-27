---
title: Responder Atlas: Biomarker, Genotype, and State Predictors
created: 2026-04-27
updated: 2026-04-28
type: query
tags: [cognition, biomarker, clinical-trial, comparison, controversy, protocol, neuroscience, device]
sources: [raw/articles/pubmed-40925485-tms-eeg-biomarkers-response-review.md, raw/articles/pubmed-39033822-n100-response-biomarker-rtms-mdd.md, raw/articles/pubmed-33842683-galantamine-basal-forebrain-predictor.md, raw/articles/pubmed-40629377-taVNS-primary-insomnia-bf-fc.md, raw/articles/pubmed-40633904-tdcs-variability-age-2025.md, raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md, raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md, raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md, raw/articles/pubmed-40292419-tdcs-stress-working-memory-2025.md, raw/articles/pubmed-41435616-digital-phenotyping-depression-treatment-response.md, raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md, raw/articles/pubmed-41707474-digital-phenotypes-mdd-passive-sensing.md, raw/articles/pubmed-40316664-tms-connectomics-response-cud.md, raw/articles/pubmed-39833903-digital-biomarkers-cognitive-assessment-older-adults.md, raw/articles/pubmed-40459924-digital-phenotyping-ms-severity.md, raw/articles/pubmed-41357423-passive-sensors-digital-markers-alzheimers.md, raw/articles/pubmed-41322085-game-based-cognitive-aging-assessment.md, raw/articles/pubmed-39706190-digital-phenotyping-wearables-ai-psychiatric-disorders-genetic-associations.md, raw/articles/pubmed-41876851-digital-physiological-biomarkers-predict-within-person-symptom-changes-complex-chronic-illness.md, raw/articles/pubmed-41223069-digital-phenotype-allostatic-load-military-training.md, raw/articles/pubmed-41909060-terminological-clarity-digital-biomarker-research.md, raw/articles/pubmed-41646388-home-based-tdcs-eeg-biomarkers-response.md, raw/articles/pubmed-40493989-ml-response-emotional-disorders-meta-analysis.md, raw/articles/pubmed-40564472-anatomical-characteristics-predict-response-tdcs-computational-pipeline.md, raw/articles/pubmed-41633263-test-anxiety-tdcs-erp.md, raw/articles/pubmed-41840032-insulin-resistance-prediction-wearables-routine-blood-biomarkers.md, raw/articles/pubmed-41921090-multimodal-digital-biomarkers-fatigue-cognition-mental-health-feasibility.md, raw/articles/pubmed-41171882-qeeg-biomarkers-rtms-mci-protocol.md, raw/articles/pubmed-41971354-spatially-resolved-eeg-theta-modulation-itbs-aging-mci.md]
confidence: low
---

# Digital Phenotype and Biomarker Responder Atlas

This branch is about a narrow question: which baseline signals actually help predict who benefits from a cognition intervention, stimulation protocol, or state-restoration stack. The current answer is that the strongest responder markers are still classical biomarkers and physiology measurements, not pure passive-sensing features. EEG, fMRI connectivity, structural MRI, genotype, anatomy, and a few state markers are doing the heaviest lifting; digital phenotype is useful mainly as a state stratifier and as ecological context around sleep, mobility, HRV, and daily routine. The 2026 literature strengthens the state layer, the terminology layer, and the response-prediction layer, and it now adds morphology-based personalization and multimodal capture, but it still stops short of proving that digital phenotype alone predicts healthy-adult nootropic response.^[raw/articles/pubmed-40925485-tms-eeg-biomarkers-response-review.md]^[raw/articles/pubmed-40629377-taVNS-primary-insomnia-bf-fc.md]^[raw/articles/pubmed-33842683-galantamine-basal-forebrain-predictor.md]^[raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md]^[raw/articles/pubmed-41435616-digital-phenotyping-depression-treatment-response.md]^[raw/articles/pubmed-39833903-digital-biomarkers-cognitive-assessment-older-adults.md]^[raw/articles/pubmed-40459924-digital-phenotyping-ms-severity.md]^[raw/articles/pubmed-41357423-passive-sensors-digital-markers-alzheimers.md]^[raw/articles/pubmed-41322085-game-based-cognitive-aging-assessment.md]^[raw/articles/pubmed-39706190-digital-phenotyping-wearables-ai-psychiatric-disorders-genetic-associations.md]^[raw/articles/pubmed-41876851-digital-physiological-biomarkers-predict-within-person-symptom-changes-complex-chronic-illness.md]^[raw/articles/pubmed-41909060-terminological-clarity-digital-biomarker-research.md]^[raw/articles/pubmed-41646388-home-based-tdcs-eeg-biomarkers-response.md]^[raw/articles/pubmed-40493989-ml-response-emotional-disorders-meta-analysis.md]^[raw/articles/pubmed-40564472-anatomical-characteristics-predict-response-tdcs-computational-pipeline.md]^[raw/articles/pubmed-41633263-test-anxiety-tdcs-erp.md]^[raw/articles/pubmed-41840032-insulin-resistance-prediction-wearables-routine-blood-biomarkers.md]^[raw/articles/pubmed-41921090-multimodal-digital-biomarkers-fatigue-cognition-mental-health-feasibility.md]^[raw/articles/pubmed-41171882-qeeg-biomarkers-rtms-mci-protocol.md]^[raw/articles/pubmed-41971354-spatially-resolved-eeg-theta-modulation-itbs-aging-mci.md]

What changed since 2024:

- The TMS biomarker review pulled the depression signal into a clearer shape: baseline N100 is the most consistent predictive marker so far, with theta-connectivity changes acting more as mechanistic readouts.^[raw/articles/pubmed-40925485-tms-eeg-biomarkers-response-review.md]^[raw/articles/pubmed-39033822-n100-response-biomarker-rtms-mdd.md]
- taVNS now has a concrete baseline-connectivity predictor in insomnia, which makes it one of the better examples of a stimulus-response phenotype map outside depression.^[raw/articles/pubmed-40629377-taVNS-primary-insomnia-bf-fc.md]
- Structural MRI has joined the responder stack: basal forebrain volume predicted who benefited from single-dose galantamine in healthy older adults, which is a clean example of anatomy-linked enrichment rather than a pure passive-sensing story.^[raw/articles/pubmed-33842683-galantamine-basal-forebrain-predictor.md]
- tDCS now has two useful modifiers: a variability meta-analysis showing that older adults are more heterogeneous responders, and a stress-WM study where vmPFC stimulation helped while dlPFC did not under the same stress load.^[raw/articles/pubmed-40633904-tdcs-variability-age-2025.md]^[raw/articles/pubmed-40292419-tdcs-stress-working-memory-2025.md]
- The MCI genetic reanalysis shows that APOE ε4 and polygenic risk can reshape the apparent effect of a multidomain intervention, but it remains a post hoc signal rather than a prospective enrichment trial; PENSA is the cautionary counterexample because even a biomarker-enriched cohort can miss its primary endpoint.^[raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md]^[raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md]
- Intranasal-insulin work points to physiology as a moderator rather than a background variable: insulin resistance shifts connectivity, so phenotype matters before response analysis.^[raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md]
- Connectomics is now a responder candidate outside depression too: baseline craving plus resting-state connectivity improved prediction of rTMS response in cocaine use disorder more than craving alone.^[raw/articles/pubmed-40316664-tms-connectomics-response-cud.md]
- Digital phenotyping has become predictive in a treatment-response sense in depression, and the 2026 symptom-monitoring paper shows that morning HR/HRV/respiratory-rate features can predict later crash/fatigue/brain fog shifts better than prior-day symptom reports alone.^[raw/articles/pubmed-41435616-digital-phenotyping-depression-treatment-response.md]^[raw/articles/pubmed-41876851-digital-physiological-biomarkers-predict-within-person-symptom-changes-complex-chronic-illness.md]^[raw/articles/pubmed-41707474-digital-phenotypes-mdd-passive-sensing.md]
- Digital phenotype is already useful for cognition-state estimation in schizophrenia-spectrum disorders, and the 2025 wearable-GWAS paper strengthens the phenotype-extractor story more than the response story.^[raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md]^[raw/articles/pubmed-39706190-digital-phenotyping-wearables-ai-psychiatric-disorders-genetic-associations.md]^[raw/articles/pubmed-41707474-digital-phenotypes-mdd-passive-sensing.md]
- Passive sensing now has a clearer cognitive-status signal in older adults and MS, and game-based features can estimate cognitive aging with usable error, but none of those papers shows that passive sensing alone predicts who will benefit from a nootropic or stim protocol.^[raw/articles/pubmed-39833903-digital-biomarkers-cognitive-assessment-older-adults.md]^[raw/articles/pubmed-40459924-digital-phenotyping-ms-severity.md]^[raw/articles/pubmed-41357423-passive-sensors-digital-markers-alzheimers.md]^[raw/articles/pubmed-41322085-game-based-cognitive-aging-assessment.md]^[raw/articles/pubmed-41223069-digital-phenotype-allostatic-load-military-training.md]
- Morphology-based personalization is now a real tDCS responder lane: a computational pipeline linked skull, CSF, and tissue composition to field exposure and responsiveness, and a test-anxiety ERP study showed that the same stimulation can separate high- and low-anxiety responders.^[raw/articles/pubmed-40564472-anatomical-characteristics-predict-response-tdcs-computational-pipeline.md]^[raw/articles/pubmed-41633263-test-anxiety-tdcs-erp.md]
- A direct MCI rTMS biomarker protocol now exists, which makes qEEG a formal responder-prediction candidate instead of a vague mechanistic label.^[raw/articles/pubmed-41171882-qeeg-biomarkers-rtms-mci-protocol.md]
- Wearable physiology plus routine blood biomarkers can now estimate insulin-resistance phenotype at scale, which is useful for metabolic state enrichment even though it is not cognition-specific by itself.^[raw/articles/pubmed-41840032-insulin-resistance-prediction-wearables-routine-blood-biomarkers.md]
- Multimodal conversational capture can collect fatigue, cognition, and mental-health signals from video, audio, and text, but that remains feasibility-stage digital phenotyping rather than a validated responder model.^[raw/articles/pubmed-41921090-multimodal-digital-biomarkers-fatigue-cognition-mental-health-feasibility.md]
- Spatially resolved EEG now offers a cleaner network-level readout after iTBS in aging and MCI, which strengthens the target-engagement layer even if it does not yet prove prediction.^[raw/articles/pubmed-41971354-spatially-resolved-eeg-theta-modulation-itbs-aging-mci.md]

## Responder Map

| Baseline variable | Best-supported context | What it seems to predict | Confidence |
|---|---|---|---|
| Baseline N100 amplitude | rTMS in depression | Larger likelihood of response to right DLPFC rTMS / iTBS | Medium |
| Basal forebrain-visual connectivity | taVNS in primary insomnia | Better symptom response to taVNS | Medium |
| Basal forebrain structural integrity | Galantamine in healthy older adults | Better attention-dependent filtering during working-memory encoding | Low-moderate |
| CSF / skull / tissue composition and field exposure | tDCS personalization modeling | Better predicted tDCS responsiveness and cortical excitability | Medium |
| High test anxiety | Left DLPFC tDCS in test-anxious individuals | ERP-level inhibitory-control modulation appears mainly in the high-anxiety subgroup | Low-moderate |
| Baseline resting-state connectomics + craving | rTMS in cocaine use disorder | Better stimulation-response prediction than symptom screening alone | Low-moderate |
| Baseline QEEG | rTMS in MCI | Better responder classification in a formal biomarker protocol | Low |
| APOE ε4 / polygenic risk | MCI multidomain prevention / lifestyle intervention | Differential gain, not universal benefit | Low-moderate |
| Older age / lower reserve | tDCS and other protocol-sensitive stimulation | Greater response variability, so average effects hide responders | Medium |
| Acute stress state / cortisol burden | tDCS under stress-induced working-memory impairment | Target choice matters; vmPFC outperformed dlPFC in one stress state | Low-moderate |
| Sleep regularity / low HRV / low social engagement | Passive-sensing depression cohorts | Symptom burden and treatment-response stratification | Medium |
| Home-time / screen duration / entropy | Schizophrenia-spectrum cognition tracking | Current and future cognitive performance state | Medium |
| Activity rhythmicity / variability | Older-adult digital biomarker cohorts | Cognitive-status estimation and enrichment screening | Medium |
| Passive sensing + EMA | Multiple sclerosis severity monitoring | Short-horizon symptom burden, fatigue, and sleep state | Medium |
| Wearable physiology + routine blood biomarkers | Insulin-resistance prediction | Better metabolic state estimation for phenotype enrichment | Medium |
| Game-derived performance features | Cognitive-aging assessment | Chronological-age / cognitive-health estimation | Medium |
| Morning HR / HRV / respiratory rate | Complex chronic illness / fatigue / brain fog | Same-day symptom worsening and crash risk | Low-moderate |
| Wearable digital phenotypes + genetics | Psychiatric disorder characterization | Disorder state and genetic association mapping | Medium for phenotype, low for response |
| Baseline alpha power + TMS-EEG | Home-based tDCS in TRD | Likely responder vs non-responder separation | Low-moderate |

The repeated pattern is not "one magic biomarker." It is that response tends to be visible when the signal is close to the mechanism: cholinergic anatomy for a cholinergic drug, network connectivity for a network-level autonomic intervention, EEG excitability markers for stimulation, and genotype when the intervention is acting on a disease-risk gradient rather than a single acute task score.

## Top Sources

1. [PubMed 40925485](https://pubmed.ncbi.nlm.nih.gov/40925485/) - systematic review of TMS-EEG and resting-state EEG biomarkers of TMS response.
2. [PubMed 39033822](https://pubmed.ncbi.nlm.nih.gov/39033822/) - baseline N100 predicting accelerated right DLPFC rTMS response in major depression.
3. [PubMed 33842683](https://pubmed.ncbi.nlm.nih.gov/33842683/) - basal forebrain volume predicting galantamine response in healthy older adults.
4. [PubMed 40629377](https://pubmed.ncbi.nlm.nih.gov/40629377/) - taVNS insomnia trial with baseline basal forebrain-visual connectivity predicting response.
5. [PubMed 40633904](https://pubmed.ncbi.nlm.nih.gov/40633904/) - older adults show greater tDCS response variability than younger adults.
6. [PubMed 40292419](https://pubmed.ncbi.nlm.nih.gov/40292419/) - stress-induced working-memory deficits respond differently by tDCS target.
7. [PubMed 41388319](https://pubmed.ncbi.nlm.nih.gov/41388319/) - APOE ε4 and polygenic risk reshape multidomain intervention response in MCI.
8. [PubMed 41435616](https://pubmed.ncbi.nlm.nih.gov/41435616/) - passive-sensing treatment-response prediction in major depressive disorder.
9. [PubMed 40669149](https://pubmed.ncbi.nlm.nih.gov/40669149/) - passive sensing markers track cognitive performance in schizophrenia-spectrum disorders.
10. [PubMed 41707474](https://pubmed.ncbi.nlm.nih.gov/41707474/) - digital phenotypes in MDD based on sleep, HRV, screen time, and social engagement.
11. [PubMed 40316664](https://pubmed.ncbi.nlm.nih.gov/40316664/) - resting-state connectomics plus craving improved rTMS response prediction in cocaine use disorder.
12. [PubMed 39833903](https://pubmed.ncbi.nlm.nih.gov/39833903/) - wrist-activity digital biomarkers for cognitive assessment in older adults.
13. [PubMed 40459924](https://pubmed.ncbi.nlm.nih.gov/40459924/) - passive sensing plus EMA for longitudinal MS severity tracking.
14. [PubMed 41357423](https://pubmed.ncbi.nlm.nih.gov/41357423/) - operational guidance for passive sensors as reproducible AD neurobehavioral markers.
15. [PubMed 41322085](https://pubmed.ncbi.nlm.nih.gov/41322085/) - game-based cognitive aging assessment with a scalable digital biomarker output.
16. [PubMed 40493989](https://pubmed.ncbi.nlm.nih.gov/40493989/) - machine-learning response prediction in emotional disorders across 155 studies.
17. [PubMed 41646388](https://pubmed.ncbi.nlm.nih.gov/41646388/) - home-based tDCS preprint with EEG/TMS-EEG response biomarkers in TRD.
18. [PubMed 41876851](https://pubmed.ncbi.nlm.nih.gov/41876851/) - morning wearable physiology predicts within-day symptom worsening and brain fog.
19. [PubMed 39706190](https://pubmed.ncbi.nlm.nih.gov/39706190/) - wearable digital phenotypes classify psychiatric disorders and support GWAS.
20. [PubMed 41909060](https://pubmed.ncbi.nlm.nih.gov/41909060/) - terminology paper distinguishing digital biomarkers from digital phenotypes.
21. [PubMed 41223069](https://pubmed.ncbi.nlm.nih.gov/41223069/) - wearable physiology during military training as a digital phenotype of allostatic load.
22. [PubMed 40564472](https://pubmed.ncbi.nlm.nih.gov/40564472/) - tDCS response modeling based on skull, CSF, and tissue composition.
23. [PubMed 41633263](https://pubmed.ncbi.nlm.nih.gov/41633263/) - test-anxiety phenotype shapes the neural effect of left-DLPFC tDCS.
24. [PubMed 41840032](https://pubmed.ncbi.nlm.nih.gov/41840032/) - wearables plus routine blood biomarkers predict insulin resistance at scale.
25. [PubMed 41921090](https://pubmed.ncbi.nlm.nih.gov/41921090/) - multimodal conversational digital biomarkers for fatigue, cognition, and mental health.
26. [PubMed 41171882](https://pubmed.ncbi.nlm.nih.gov/41171882/) - qEEG biomarker protocol for predicting rTMS response in MCI.
27. [PubMed 41971354](https://pubmed.ncbi.nlm.nih.gov/41971354/) - spatially resolved EEG theta-band modulation after iTBS in aging and MCI.

## Evidence Tiering

- Strongest direct responder evidence: EEG/fMRI biomarkers in stimulation, especially depression, insomnia, and one cocaine-use-disorder rTMS trial.
- Moderate responder evidence: genotype-driven enrichment in MCI, anatomy-linked drug response in older adults, and response-variability meta-analysis for tDCS.
- Strongest digital-phenotype evidence: depression treatment-response prediction, cognition-state tracking, and digital biomarkers of cognitive status in older-adult, MS, and AD-adjacent cohorts.
- Weakest layer: true nootropic response prediction in healthy adults. That remains largely unproven.

## Responder Atlas

| Baseline variable | Best-supported context | What it seems to predict | Confidence |
|---|---|---|---|
| Baseline N100 amplitude | rTMS in depression | Larger likelihood of response to right DLPFC rTMS / iTBS | Medium |
| Basal forebrain-visual connectivity | taVNS in primary insomnia | Better symptom response to taVNS | Medium |
| APOE ε4 / polygenic risk | MCI multidomain prevention / lifestyle intervention | Differential gain, not universal benefit | Low-medium |
| Older age / lower reserve | tDCS and other protocol-sensitive stimulation | Greater response variability, so average effects hide responders | Medium |
| Insulin resistance / HOMA-IR | Intranasal insulin and metabolic-brain interventions | Connectivity shift and likely effect modification | Low-medium |
| Acute stress state / cortisol burden | tDCS under stress-induced working-memory impairment | Target choice matters; vmPFC outperformed dlPFC in one stress state | Low-medium |
| Sleep regularity / low HRV / low social engagement | Passive-sensing depression cohorts | Symptom burden and treatment-response stratification | Medium |
| Home-time / screen duration / entropy | Schizophrenia-spectrum cognition tracking | Current and future cognitive performance state | Medium |

## Responder Signals

- Baseline N100 amplitude is the clearest current EEG responder marker for rTMS in depression.^[raw/articles/pubmed-39033822-n100-response-biomarker-rtms-mdd.md]^[raw/articles/pubmed-40925485-tms-eeg-biomarkers-response-review.md]
- Baseline basal forebrain-visual connectivity appears to mark taVNS responders in primary insomnia.^[raw/articles/pubmed-40629377-taVNS-primary-insomnia-bf-fc.md]
- Basal forebrain structural integrity appears to shape galantamine response in healthy older adults.^[raw/articles/pubmed-33842683-galantamine-basal-forebrain-predictor.md]
- Head morphology and electric-field exposure appear to shape tDCS response more than fixed dose alone.^[raw/articles/pubmed-40564472-anatomical-characteristics-predict-response-tdcs-computational-pipeline.md]
- High test anxiety appears to alter the neural effect of left-DLPFC tDCS on inhibitory control.^[raw/articles/pubmed-41633263-test-anxiety-tdcs-erp.md]
- Resting-state connectomics plus craving appear to improve rTMS response prediction in cocaine use disorder.^[raw/articles/pubmed-40316664-tms-connectomics-response-cud.md]
- Baseline QEEG is now being tested prospectively as a responder classifier in MCI rTMS.^[raw/articles/pubmed-41171882-qeeg-biomarkers-rtms-mci-protocol.md]
- Older age increases tDCS heterogeneity, so baseline state and target selection matter more than one-size-fits-all dosing.^[raw/articles/pubmed-40633904-tdcs-variability-age-2025.md]
- Under stress, vmPFC stimulation outperformed dlPFC for working-memory rescue, which means target choice is itself a responder variable.^[raw/articles/pubmed-40292419-tdcs-stress-working-memory-2025.md]
- APOE ε4 and polygenic risk may enrich multidomain cognitive interventions in MCI, but the evidence is not yet prospective.^[raw/articles/pubmed-41388319-polygenicity-apoe-e4-shape-response-intervention-mci.md]^[raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md]
- Digital phenotyping features such as mobility, sleep regularity, HRV, social engagement, screen behavior, and activity rhythmicity are promising state markers, but their role as causal responder biomarkers is still emerging.^[raw/articles/pubmed-41435616-digital-phenotyping-depression-treatment-response.md]^[raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md]^[raw/articles/pubmed-41707474-digital-phenotypes-mdd-passive-sensing.md]^[raw/articles/pubmed-39833903-digital-biomarkers-cognitive-assessment-older-adults.md]^[raw/articles/pubmed-40459924-digital-phenotyping-ms-severity.md]^[raw/articles/pubmed-41357423-passive-sensors-digital-markers-alzheimers.md]^[raw/articles/pubmed-41322085-game-based-cognitive-aging-assessment.md]
- Wearable physiology plus routine biomarkers now extend the state layer into metabolic screening, but that is still enrichment rather than cognition proof.^[raw/articles/pubmed-41840032-insulin-resistance-prediction-wearables-routine-blood-biomarkers.md]
- Multimodal conversational capture is a new low-burden digital phenotype source, but it is still feasibility-stage.^[raw/articles/pubmed-41921090-multimodal-digital-biomarkers-fatigue-cognition-mental-health-feasibility.md]
- Insulin resistance is a useful example of a state variable that changes the apparent intervention target, not just the measured outcome.^[raw/articles/pubmed-40392946-intranasal-insulin-t2d-rsfc.md]

## What Digital Phenotyping Adds

Digital phenotype is most useful as an enrichment layer when the intervention is state-dependent. If an intervention depends on sleep pressure, autonomic tone, mobility, circadian regularity, or daily cognitive load, passive sensing can help define the baseline phenotype more cheaply than a lab-only biomarker panel. The current downside is that digital markers are often correlates rather than validated causal predictors, so they should be treated as screening features, not as proof of who will respond. The new older-adult, MS, AD-operational, and game-based papers make the state-estimation case stronger, but they still do not close the loop on healthy-adult nootropic response prediction.^[raw/articles/pubmed-41435616-digital-phenotyping-depression-treatment-response.md]^[raw/articles/pubmed-40669149-digital-phenotyping-cognitive-performance-schizophrenia.md]^[raw/articles/pubmed-41707474-digital-phenotypes-mdd-passive-sensing.md]^[raw/articles/pubmed-39833903-digital-biomarkers-cognitive-assessment-older-adults.md]^[raw/articles/pubmed-40459924-digital-phenotyping-ms-severity.md]^[raw/articles/pubmed-41357423-passive-sensors-digital-markers-alzheimers.md]^[raw/articles/pubmed-41322085-game-based-cognitive-aging-assessment.md]

The practical split is:

- Trait-like markers: N100, connectivity, genotype, reserve.
- State-like markers: sleep regularity, HRV, mobility, stress, insulin resistance.
- Mixed markers: age and broader baseline functioning, which often act as proxies for protocol sensitivity rather than direct biological causation.

## Working Rule

The atlas should treat response prediction as a hierarchy:

1. Direct mechanistic biomarkers first, because they are closest to the intervention.
2. Structural or genetic modifiers next, because they often explain heterogeneity but rarely guarantee benefit.
3. Passive sensing last, because it is best at state detection and weakest at causally predicting who will improve.

## Open Contradictions

- Biomarkers can improve prediction without creating a stronger intervention effect.
- Digital phenotype can track state well without distinguishing cause from consequence.
- Depression has the best responder-prediction literature, but that does not automatically transfer to healthy-adult nootropic use.
- The most practical responder variables may be mixed stacks: sleep, HRV, cognition baseline, genotype, connectivity, and target choice rather than one marker.
- A "good" biomarker can still be useless if the intervention target, dose, or task state is wrong.
- Behavioral correlates should not be promoted to biomarker status without biological validation, even when prediction is strong.

## Actionable Wiki Updates

- Update [[biomarker-enriched-enrollment-and-cognition-effect-sizes]] with the direct responder-prediction distinction between classical biomarkers and passive sensing.
- Update [[healthy-adult-cognition-signals]] so digital phenotype is framed as an enrichment aid, not a proven enhancer.
- Update [[noninvasive-brain-stimulation-for-cognition]] with the N100, taVNS connectivity, and tDCS heterogeneity layers.
- Update [[adjunctive-interventions-for-cognition]] to show that biomarker enrichment is now a real comparison dimension.
- Use [[multi-feature-responder-scorecard]] as the combined screening layer when more than one responder signal is available.
- Keep the state-enrichment side synchronized with [[practical-cognitive-measurement-stack]] and [[endpoint-dictionary-for-cognition-interventions]].
- If this branch keeps growing, split out a dedicated responder atlas for healthy-adult enhancement versus disorder-context response.
