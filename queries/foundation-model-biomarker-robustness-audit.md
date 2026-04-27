---
title: Foundation-Model Biomarker Robustness Audit
created: 2026-04-28
updated: 2026-05-03
type: query
tags: [cognition, biomarker, comparison, controversy, neuroscience]
sources: [raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md, raw/articles/pmc-11928716-ml-models-alzheimers-neuroimaging-survey-reproducibility-generalizability.md, raw/articles/pubmed-38523679-foundation-model-for-cancer-imaging-biomarkers.md, raw/articles/pmc-12154149-foundation-model-embeddings-quantitative-tumor-imaging-biomarkers.md, raw/articles/pubmed-40460008-adfound-diagnosis-prognosis-alzheimers-disease.md, raw/articles/pubmed-41601916-physiological-foundation-modeling-subclinical-disease-assessment.md]
confidence: medium
---

# Foundation-Model Biomarker Robustness Audit

## Summary

Foundation models can improve phenotype prediction, but that is not the same thing as producing a biologically stable biomarker that should drive intervention selection. The current audit split is simple: benchmark scores tell you whether a model predicts labels, while robustness checks tell you whether the salient feature is stable, reproducible, interpretable, and plausibly biological. RE-CONFIRM is the clearest methodological warning in this branch, because it shows that high-performing foundation models can still fail to recover known regional hubs after fine-tuning.^[raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md]

The practical take is that foundation models are already useful as candidate generators, screening backbones, and phenotype-transfer tools, but they are not yet decision-grade intervention-selection biomarkers by default. The strongest evidence for that claim comes from three directions: a reproducibility/generalizability survey in AD neuroimaging, a cancer-imaging foundation model that explicitly tested stability to input variation and biological association, and a quantitative tumor-biomarker benchmark that separated prediction from robustness and interpretability.^[raw/articles/pmc-11928716-ml-models-alzheimers-neuroimaging-survey-reproducibility-generalizability.md]^[raw/articles/pubmed-38523679-foundation-model-for-cancer-imaging-biomarkers.md]^[raw/articles/pmc-12154149-foundation-model-embeddings-quantitative-tumor-imaging-biomarkers.md]

## What Changed Since 2024

- RE-CONFIRM formalized a robustness lens for biomarkers learned from dynamic functional connectivity and showed that standard performance metrics can miss biologically weak feature sets.^[raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md]
- The AD neuroimaging survey made generalizability failures explicit across cohorts and modalities, which is the right failure mode to watch before using a model for enrichment or screening.^[raw/articles/pmc-11928716-ml-models-alzheimers-neuroimaging-survey-reproducibility-generalizability.md]
- Cancer-imaging foundation-model work now reports stability to input variation and stronger biology association, showing that robustness can be measured separately from raw downstream accuracy.^[raw/articles/pubmed-38523679-foundation-model-for-cancer-imaging-biomarkers.md]
- TumorImagingBench pushed the comparison question further by benchmarking robustness, saliency interpretability, and embedding similarity across ten models, not just endpoint prediction.^[raw/articles/pmc-12154149-foundation-model-embeddings-quantitative-tumor-imaging-biomarkers.md]
- ADFound and the Bioprofile pilot show that foundation-model style representations can help diagnosis/prognosis and prospective screening, but they still sit closer to prediction and candidate selection than to validated intervention-response biomarkers.^[raw/articles/pubmed-40460008-adfound-diagnosis-prognosis-alzheimers-disease.md]^[raw/articles/pubmed-41601916-physiological-foundation-modeling-subclinical-disease-assessment.md]

## Audit Grid

| Dimension | Benchmark-only answer | Robustness answer | Current read |
|---|---|---|---|
| Prediction | Does the model classify or regress well? | Not enough. | Many foundation models stop here.
| Stability | Does performance survive input noise, scan shifts, or reader variation? | Needed for biomarker use. | Cancer-imaging work shows this is measurable and separable from accuracy.^[raw/articles/pubmed-38523679-foundation-model-for-cancer-imaging-biomarkers.md]^[raw/articles/pmc-12154149-foundation-model-embeddings-quantitative-tumor-imaging-biomarkers.md]
| Saliency / feature fidelity | Is the model explainable? | Are the highlighted features biologically credible? | RE-CONFIRM warns that fine-tuning can miss known hubs even when performance looks good.^[raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md]
| External generalizability | Does it work on the training-like cohort? | Does it hold across cohorts, sites, and modalities? | The AD survey says this remains a major barrier.^[raw/articles/pmc-11928716-ml-models-alzheimers-neuroimaging-survey-reproducibility-generalizability.md]
| Prospective utility | Does it predict a held-out label? | Does it improve recruitment, triage, or enrichment in the wild? | Bioprofile is the closest example here, but in a screening context.^[raw/articles/pubmed-41601916-physiological-foundation-modeling-subclinical-disease-assessment.md]

## Bottom Line

The right standard for a foundation-model biomarker is stricter than "good AUROC." A marker has to be stable across perturbations, reproducible across cohorts, aligned with known biology, and useful enough in prospective settings that it changes who gets screened, enriched, or treated. Until a model passes those filters, its output should be treated as a hypothesis-generating phenotype score rather than an intervention-selection biomarker.^[raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md]^[raw/articles/pmc-11928716-ml-models-alzheimers-neuroimaging-survey-reproducibility-generalizability.md]^[raw/articles/pubmed-38523679-foundation-model-for-cancer-imaging-biomarkers.md]^[raw/articles/pmc-12154149-foundation-model-embeddings-quantitative-tumor-imaging-biomarkers.md]

## Top Sources

1. [RE-CONFIRM](/Users/peterhucik/wiki/raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md) - biomarker robustness framework for foundation models and DL.
2. [AD neuroimaging survey](/Users/peterhucik/wiki/raw/articles/pmc-11928716-ml-models-alzheimers-neuroimaging-survey-reproducibility-generalizability.md) - generalizability and reproducibility limits across cohorts and modalities.
3. [Cancer-imaging foundation model](/Users/peterhucik/wiki/raw/articles/pubmed-38523679-foundation-model-for-cancer-imaging-biomarkers.md) - stability to input variation and stronger biology association.
4. [TumorImagingBench](/Users/peterhucik/wiki/raw/articles/pmc-12154149-foundation-model-embeddings-quantitative-tumor-imaging-biomarkers.md) - robustness, saliency, and embedding comparison across ten models.
5. [ADFound](/Users/peterhucik/wiki/raw/articles/pubmed-40460008-adfound-diagnosis-prognosis-alzheimers-disease.md) - multimodal AD diagnosis/prognosis backbone, useful but still prediction-first.
6. [Bioprofile](/Users/peterhucik/wiki/raw/articles/pubmed-41601916-physiological-foundation-modeling-subclinical-disease-assessment.md) - prospective screening example for model-guided candidate selection.

## Open Contradictions

- A model can have excellent benchmark performance while producing biologically weak saliency maps or unstable biomarker candidates.^[raw/papers/arxiv-2604.22018v1-foundation-models-for-discovering-robust-biomarkers-of-neuro.md]
- A stable biomarker is not automatically useful for intervention selection unless it survives a prospective cohort shift and actually changes enrollment or treatment decisions.^[raw/articles/pmc-11928716-ml-models-alzheimers-neuroimaging-survey-reproducibility-generalizability.md]^[raw/articles/pubmed-41601916-physiological-foundation-modeling-subclinical-disease-assessment.md]
- Prediction-first papers may look translational, but without external validation they still sit below decision-grade biomarker status.^[raw/articles/pubmed-40460008-adfound-diagnosis-prognosis-alzheimers-disease.md]

## Actionable Wiki Updates

- Link this audit from [[foundation-model-neuroscience-2026-scan]], [[biomarker-enriched-enrollment-and-cognition-effect-sizes]], and [[digital-phenotype-and-biomarker-responder-atlas]].
- Keep [[negative-evidence-watchlist-for-cognition-interventions]] explicit about prediction-vs-biomarker mismatch.
- Use this page as the governance layer for any future model-derived enrichment hypothesis.
- If more prospective selection studies accumulate, split out a separate page for model-guided recruitment versus true biomarker validation.
