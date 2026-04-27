---
source_url: https://pubmed.ncbi.nlm.nih.gov/41479845/
ingested: 2026-04-28
sha256: ada608430fa1c91363932653206d0d1e2aefcaf98b7edb8fbb5b3e497ea62cec
---

# Neural networks and foundation models: two strategies for EEG-to-fMRI prediction

- PMID: 41479845
- Venue: Frontiers in Systems Biology
- Published: 2025-12-17

## Abstract Notes

- The paper treats EEG-to-fMRI prediction as both a classification problem and a regression problem.
- It compares two routes: classical ML/DL models trained on EEG-fMRI data, and prompt-driven use of pre-trained LLMs/LMMs.
- The setting is a neurofeedback task with outputs mapped to Harvard-Oxford cortical atlas regions.
- Both strategies show promising signal, with a chain-of-thought variant helping the model infer cognitive functions from EEG before predicting fMRI activity.
- The authors frame the work as an early step toward a multimodal foundation model for neuroscience.

## Research Value

- Useful as a proof-of-concept for cross-modal neural decoding.
- More relevant to neurotechnology and measurement pipelines than to direct cognition enhancement.
- Not yet a validated deployment recipe; the fine-tuning path is explicitly described as nontrivial.
