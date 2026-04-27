---
title: Foundation-Model Neuroscience 2026 Scan
created: 2026-04-27
updated: 2026-05-03
type: query
tags: [cognition, biomarker, comparison, neuroscience]
sources: [raw/articles/pubmed-40205215-foundation-model-of-neural-activity-predicts-response-to-new-stimulus-types.md, raw/articles/pubmed-40030291-fm-app-any-phenotype-prediction-fmri-smri-knowledge-transfer.md, raw/articles/pubmed-40460008-adfound-diagnosis-prognosis-alzheimers-disease.md, raw/articles/pubmed-41289093-bdfm-segmentation-classification-brain-diseases.md, raw/articles/pubmed-41479845-neural-networks-foundation-models-eeg-to-fmri-prediction.md, raw/articles/pubmed-41644653-brainiac-generalized-brain-mri-analysis.md, raw/articles/pubmed-41495409-sleepfm-disease-prediction.md, raw/articles/pubmed-40912188-epilepsyfm-eeg-foundation-model.md, raw/articles/pubmed-41271174-foundation-model-brain-tumor-mri-analysis.md, raw/articles/pubmed-41973581-femba-on-the-edge-eeg-foundation-model-microcontroller.md, raw/articles/pubmed-40917653-foundation-model-for-learning-genetic-associations-from-brain-imaging-phenotypes.md, raw/articles/pubmed-40366849-foundational-fmri-model-representing-continuous-brain-states.md, raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md, raw/papers/arxiv-2604.13281v1-attention-to-task-structure-for-cognitive-flexibility.md, raw/papers/arxiv-2604.12683v1-brain-dit-a-universal-multi-state-fmri-foundation-model-with.md, raw/papers/arxiv-2506.18314v2-brainsymphony-a-parameter-efficient-multimodal-foundation-mo.md]
confidence: medium
---

# Foundation-Model Neuroscience 2026 Scan

## Summary

Foundation models in neuroscience are starting to show immediate experimental utility, but the useful cases are narrower than the marketing implies. The strongest branch is not "generic brain AI"; it is phenotype prediction, biomarker robustness, cross-modal transfer, mechanistic in silico generalization, and small-scale EEG-to-fMRI decoding for neurotechnology research. The newest additions make that shift more concrete: generalized brain MRI backbones, sleep-PSG risk models, clinically useful glioma classifiers, domain-specific EEG models, continuous brain-state representation, and genotype-to-imaging association mining now point toward low-label disease stratification, wearable neuro-monitoring, state tracking, and responder-enrichment infrastructure rather than direct cognition enhancement. The best current papers help answer four practical questions: can the model generalize across stimuli or subjects, can it identify biologically plausible markers, can it reduce annotation burden or transfer signal into cheaper modalities, and can the task/environment structure itself change what looks like a stable or generalizable signal?^[raw/articles/pubmed-40205215-foundation-model-of-neural-activity-predicts-response-to-new-stimulus-types.md]^[raw/articles/pubmed-40030291-fm-app-any-phenotype-prediction-fmri-smri-knowledge-transfer.md]^[raw/articles/pubmed-40460008-adfound-diagnosis-prognosis-alzheimers-disease.md]^[raw/articles/pubmed-41289093-bdfm-segmentation-classification-brain-diseases.md]^[raw/articles/pubmed-41479845-neural-networks-foundation-models-eeg-to-fmri-prediction.md]^[raw/articles/pubmed-41644653-brainiac-generalized-brain-mri-analysis.md]^[raw/articles/pubmed-41495409-sleepfm-disease-prediction.md]^[raw/articles/pubmed-40912188-epilepsyfm-eeg-foundation-model.md]^[raw/articles/pubmed-41271174-foundation-model-brain-tumor-mri-analysis.md]^[raw/articles/pubmed-41973581-femba-on-the-edge-eeg-foundation-model-microcontroller.md]^[raw/articles/pubmed-40917653-foundation-model-for-learning-genetic-associations-from-brain-imaging-phenotypes.md]^[raw/articles/pubmed-40366849-foundational-fmri-model-representing-continuous-brain-states.md]^[raw/papers/arxiv-2604.13281v1-attention-to-task-structure-for-cognitive-flexibility.md]

What changed since 2024:

- The 2025 Nature paper on neural activity foundation modeling moved the field from generic prediction to stimulus generalization, new-mouse adaptation, and connectomics-linked feature prediction, which is a real experimental workflow rather than a leaderboard exercise.^[raw/articles/pubmed-40205215-foundation-model-of-neural-activity-predicts-response-to-new-stimulus-types.md]
- FM-APP pushed the clinical-imaging branch toward zero-shot phenotype prediction and fMRI-to-sMRI transfer, which matters because it converts a model into a phenotype screen and cost-reduction tool.^[raw/articles/pubmed-40030291-fm-app-any-phenotype-prediction-fmri-smri-knowledge-transfer.md]
- ADFound made the AD branch more translational by combining diagnosis and prognosis in one multimodal framework, with unlabeled paired and unpaired 3D imaging rather than narrow supervised task labels.^[raw/articles/pubmed-40460008-adfound-diagnosis-prognosis-alzheimers-disease.md]
- BDFM showed that self-supervised pretraining can help segmentation and classification on small annotated disease datasets, which is practically useful in low-label clinical settings.^[raw/articles/pubmed-41289093-bdfm-segmentation-classification-brain-diseases.md]
- A late-2025 EEG-to-fMRI paper added a more interface-facing use case: predicting atlas-level fMRI changes from EEG in a neurofeedback task, with both conventional models and foundation-model prompting showing signal, but with fine-tuning still described as an open problem.^[raw/articles/pubmed-41479845-neural-networks-foundation-models-eeg-to-fmri-prediction.md]
- BrainIAC pushed the human brain-MRI branch into a broader clinical backbone role, with low-data gains across sequence classification, brain-age prediction, mutation classification, and survival analysis on 48,519 scans from 35 datasets.^[raw/articles/pubmed-41644653-brainiac-generalized-brain-mri-analysis.md]
- SleepFM showed that sleep foundation models can predict future disease risk from PSG embeddings, including dementia and stroke, which makes the branch useful for enrichment and risk stratification even outside sleep medicine.^[raw/articles/pubmed-41495409-sleepfm-disease-prediction.md]
- EpilepsyFM showed that domain-specific EEG foundation models can support seizure detection, seizure typing, forecasting, and treatment-analysis tasks, which is a useful proof of concept for neural-signal transfer learning.^[raw/articles/pubmed-40912188-epilepsyfm-eeg-foundation-model.md]
- UMBIF extended the MRI-backbone lane with a glioma-grade and histology classifier trained on routine images, showing that foundation models can already sit in the diagnostic decision loop for brain tumors.^[raw/articles/pubmed-41271174-foundation-model-brain-tumor-mri-analysis.md]
- FEMBA moved the EEG branch from representation learning toward embedded deployment, with low-power on-device neuro-monitoring for epilepsy and sleep workflows instead of offline scoring alone.^[raw/articles/pubmed-41973581-femba-on-the-edge-eeg-foundation-model-microcontroller.md]
- COMICAL extended the utility lane beyond pure phenotype prediction by mining many-to-many genetic-marker and imaging-phenotype associations, then using those learned representations for disease and unseen outcome prediction.^[raw/articles/pubmed-40917653-foundation-model-for-learning-genetic-associations-from-brain-imaging-phenotypes.md]
- BrainSN pushed the fMRI backbone toward continuous brain-state representation, with zero-shot autism and attention-disorder classification and high-accuracy mental-state decoding from sequence-sensitive embeddings.^[raw/articles/pubmed-40366849-foundational-fmri-model-representing-continuous-brain-states.md]
- The RE-CONFIRM paper is the key methodological correction: high benchmark scores are not enough if the model's salient features are not robust or biologically faithful.^[raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md]
- The task-structure paper adds a separate design lesson: richer task graphs improved both generalization and stability, so environmental structure is itself a variable that can shift what looks like a cognitive-flexibility gain.^[raw/papers/arxiv-2604.13281v1-attention-to-task-structure-for-cognitive-flexibility.md]
- Brain-DiT and BrainSymphony extend the same idea into multi-state and multimodal fMRI settings, but they still look like tool-building papers rather than validated outcome-changing interventions.^[raw/papers/arxiv-2604.12683v1-brain-dit-a-universal-multi-state-fmri-foundation-model-with.md]^[raw/papers/arxiv-2506.18314v2-brainsymphony-a-parameter-efficient-multimodal-foundation-mo.md]

## Top Sources

- [PMID 40205215](https://pubmed.ncbi.nlm.nih.gov/40205215/): foundation model of neural activity in mice, new stimulus types, and connectomics-linked predictions.
- [PMID 40030291](https://pubmed.ncbi.nlm.nih.gov/40030291/): FM-APP for any-phenotype prediction and fMRI-to-sMRI transfer.
- [PMID 40460008](https://pubmed.ncbi.nlm.nih.gov/40460008/): ADFound for AD diagnosis and prognosis.
- [PMID 41289093](https://pubmed.ncbi.nlm.nih.gov/41289093/): BDFM for disease segmentation and classification with limited labels.
- [PMID 41479845](https://pubmed.ncbi.nlm.nih.gov/41479845/): EEG-to-fMRI prediction with both classical models and foundation-model prompting.
- [PMID 41644653](https://pubmed.ncbi.nlm.nih.gov/41644653/): BrainIAC for generalized brain MRI analysis across multiple neurological tasks.
- [PMID 41495409](https://pubmed.ncbi.nlm.nih.gov/41495409/): SleepFM for disease prediction from multimodal PSG embeddings.
- [PMID 40912188](https://pubmed.ncbi.nlm.nih.gov/40912188/): EpilepsyFM for domain-specific EEG representation learning.
- [PMID 41271174](https://pubmed.ncbi.nlm.nih.gov/41271174/): UMBIF for glioma grading and subtype classification.
- [PMID 41973581](https://pubmed.ncbi.nlm.nih.gov/41973581/): FEMBA for wearable EEG monitoring and edge deployment.
- [PMID 40917653](https://pubmed.ncbi.nlm.nih.gov/40917653/): COMICAL for genetic-marker and imaging-phenotype association mining.
- [PMID 40366849](https://pubmed.ncbi.nlm.nih.gov/40366849/): BrainSN for continuous brain-state representation and zero-shot diagnosis.
- [RE-CONFIRM](../raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md): biomarker robustness framework for DL and foundation models.
- [Task-structure](../raw/papers/arxiv-2604.13281v1-attention-to-task-structure-for-cognitive-flexibility.md): environmental structure and task connectivity as determinants of generalization and stability.
- [Brain-DiT](../raw/papers/arxiv-2604.12683v1-brain-dit-a-universal-multi-state-fmri-foundation-model-with.md): multi-state fMRI foundation model spanning rest, task, disease, and sleep.
- [BrainSymphony](../raw/papers/arxiv-2506.18314v2-brainsymphony-a-parameter-efficient-multimodal-foundation-mo.md): multimodal fMRI + diffusion model with interpretability on psilocybin data.

## Evidence Tiering

- Mechanistic neuroscience / model generalization: strong for the Nature neural-activity paper, but still preclinical and not a human cognition intervention.
- Clinical imaging / biomarker prediction: ADFound, BDFM, and FM-APP are the most immediately useful for translational work.
- Neurotechnology bridge tasks: EEG-to-fMRI decoding is promising for multimodal interface research, but it remains constrained to specific tasks and atlas-level outputs.
- Clinical imaging / neural signal backbones: BrainIAC, SleepFM, and EpilepsyFM remain the clearest 2026 additions because they move from benchmark-style modeling into disease-risk, low-data, or domain-specific clinical workflows.
- Deployment utility now matters: FEMBA shows that a foundation model can be compressed to edge hardware without losing all practical signal, which is closer to a usable monitoring pipeline than a pure benchmark.
- Neuro-oncology joins the same utility lane: UMBIF shows routine MRI foundation modeling can support tumor grading and subtype classification with reduced annotation dependence.
- State modeling and multiomics association are the newest utility-adjacent layers: BrainSN helps with continuous state representation, while COMICAL helps generate gene-image association hypotheses that can feed downstream biomarker work.
- Methodological guardrail: RE-CONFIRM is a meta-level tool for judging whether model-derived biomarkers are biologically credible.
- Experimental guardrail: task structure can materially change generalization and stability, so a model that looks good in one environment may not transfer to a sparser or less connected one.
- Multimodal fMRI foundation models: Brain-DiT and BrainSymphony are useful backbones, but the evidence is still mostly model-development and downstream-task performance.

## Effect Size Snapshot

- Nature neural-activity model: the useful result is cross-stimulus and cross-animal generalization plus prediction of cell type, dendrite, and connectivity labels; the abstract does not reduce this to a single clinical effect size.
- FM-APP: the key claim is strong zero-shot inference on HCP and HCP Aging, with improved phenotype prediction versus prior methods.
- ADFound: the key claim is unified diagnosis/prognosis performance from multimodal unlabeled 3D neuroimaging.
- BDFM: the key claim is generalization to segmentation and classification on small annotated datasets.
- EEG-to-fMRI prediction: the useful claim is that atlas-level fMRI activity can be inferred from EEG in a neurofeedback setting, with LLM/LMM prompting making the task semantically legible.
- Task-structure paper: richer environments improved both generalization and stability, which is a design-level effect rather than a clinical effect size.
- Brain-DiT / BrainSymphony: the abstract-level signal is improved downstream performance and interpretability, not a human-outcome delta.
- UMBIF: clinically useful diagnostic classification for glioma grade and histology, with the main value in annotation reduction and decision support.
- FEMBA: wearable EEG monitoring with edge inference and quantization, which makes deployment the key result rather than a new cognitive effect size.

## Safety / Adverse Events

There are no direct patient adverse events in these ML papers. The practical safety issue is epistemic: overtrusting a foundation model that scores well but learns unstable or non-neurobiological features. RE-CONFIRM exists specifically because that failure mode is real.^[raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md]

## Responder Phenotypes

- Phenotype-prediction models matter most when the target is heterogeneous and labels are expensive, such as AD progression, fluid intelligence, or other individual-level traits.
- Biomarker utility is highest when there are latent subtypes, limited annotations, or a need to transfer signal from expensive to cheaper modalities.
- The neural-activity foundation model is most relevant where the task is generalization across stimulus domains, subjects, and anatomical labels rather than patient classification.

## Protocol Parameters

- Nature neural-activity model: trained on large-scale mouse visual-cortex recordings and tested on new mice, new stimulus domains, and MICrONS connectomics labels.
- FM-APP: fMRI-to-sMRI knowledge transfer with PTMB, APP, and F2SKT modules, evaluated on HCP and HCP Aging.
- ADFound: multimodal 3D neuroimaging with paired and unpaired unlabeled data.
- BDFM: masked-image-modeling pretraining on BD-15k, then transfer to segmentation and classification.
- EEG-to-fMRI paper: neurofeedback-task dataset, Harvard-Oxford cortical atlas regions, and two modeling strategies (classical ML/DL vs pre-trained LLM/LMM prompting) aimed at region-level classification and regression.
- BrainIAC: 48,519 human brain MRIs from 35 datasets, trained with self-supervised contrastive learning and adapted to sequence classification, brain age, mutation prediction, and survival tasks.
- SleepFM: over 585,000 hours of PSG from about 65,000 participants, contrastive learning on any montage, and downstream prediction of 130 future diseases.
- EpilepsyFM: clinical EEG plus TUH EEG Corpus, discrete tokenizer plus region masking, and downstream seizure detection, forecasting, and treatment-analysis tasks.
- UMBIF: 51,029 MRI images from multiple institutions, contrastive masked image modeling, and downstream glioma grading / histological classification.
- FEMBA: more than 21,000 hours of EEG, bidirectional Mamba pretraining, low-pass physiologic pretraining, 2-bit quantization, and RISC-V GAP9 deployment.
- Brain-DiT: 349,898 sessions from 24 datasets spanning resting, task, naturalistic, disease, and sleep states.
- BrainSymphony: parameter-efficient multimodal training on fMRI and diffusion-derived structural connectivity, with psilocybin attention-map interpretation.

## Open Contradictions

- Benchmark performance is not the same thing as biomarker robustness; RE-CONFIRM is the clearest warning against collapsing those two.
- The papers are more promising for imaging phenotypes and mechanistic neuroscience than for direct cognition enhancement in healthy adults.
- Semantic prompting helps with cross-modal reasoning, but direct fine-tuning of LLMs on EEG-fMRI remains unresolved and may not be the right integration path.
- SleepFM and BrainIAC strengthen the case for foundation models as phenotype backbones, but they still do not prove that a model-guided intervention improves cognition.
- Several models claim generalization, but external validation, deployment calibration, and biological faithfulness remain the real bottlenecks.
- Edge deployment is now a real differentiator: a model that can run in a wearable or clinic pipeline is more actionable than a model that only improves offline AUC.

## Actionable Wiki Updates

- Link this scan from [[medicine-cognition-summary]], [[biomarker-enriched-enrollment-and-cognition-effect-sizes]], [[digital-phenotype-and-biomarker-responder-atlas]], and [[negative-evidence-watchlist-for-cognition-interventions]].
- For the robustness-specific read, see [[foundation-model-biomarker-robustness-audit]].
- Consider a follow-on comparison page for "foundation models for biomarkers versus foundation models for mechanism" if more papers accumulate.
- Keep the branch separate from any healthy-adult cognition ranking until there is a foundation-model-guided intervention study, not just a predictive model.
- Add future raw notes for new papers only when they change deployment, biomarker robustness, or phenotype-transfer claims.
