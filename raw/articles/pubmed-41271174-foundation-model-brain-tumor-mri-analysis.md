---
source_url: https://pubmed.ncbi.nlm.nih.gov/41271174/
ingested: 2026-04-30
sha256: 8781d67e76894d3c58a558c50053ddfd1b114579cb2d67e3f73215871542626e
---

# A foundation model for brain tumor MRI analysis: WHO grading and subtype classification

- PMID: 41271174
- Published: 2026-01
- Journal: Radiotherapy and Oncology
- Authors: Junxian Li, Renhe Liu, Yuchen Xing, Ximin Gao, Qiang Yin, Qian Su

## Abstract Notes

- Objective: develop a self-supervised foundation model from routine MRI and evaluate it on brain tumor grading and pathological subtype classification.
- Model: Unified Multimodal Brain Imaging Foundation (UMBIF), pretrained on 51,029 MRI images from multiple institutions.
- Pretraining: contrastive masked image modeling to extract robust feature representations.
- Fine-tuning: glioma grading and histological classification on multi-center cohorts.
- Performance: the pretrained classifier reported accuracies of 0.840 for grade II, 0.684 for grade III, 0.775 for grade IV gliomas, and 0.903 for histological classification, with corresponding AUCs of 0.723, 0.854, 0.743, and 0.966.

## Research Value

- This is a clinically useful foundation-model paper because it reduces annotation dependence while improving decision-making for routine MRI.
- It is relevant to the branch as a practical imaging backbone, even though it is not a cognition intervention.
- It strengthens the pattern that foundation models are becoming workflow tools in neuro-oncology rather than benchmark-only papers.
