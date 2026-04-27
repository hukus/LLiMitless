---
source_url: https://arxiv.org/abs/2604.22018v1
ingested: 2026-04-27
sha256: e55afa02ef7db6dee95fa5040ae226d67e4f1d86c42e8b56a7e4c61aa3ab3d06
---
# Foundation models for discovering robust biomarkers of neurological disorders from dynamic functional connectivity

Query cluster: sleep-circadian
ArXiv ID: 2604.22018v1
Published: 2026-04-23
Updated: 2026-04-23
Authors: Deepank Girish, Yi Hao Chan, Sukrit Gupta, Jing Xia, Jagath C. Rajapakse
Categories: q-bio.NC, cs.AI, cs.LG, eess.SP
Abstract: Several brain foundation models (FM) have recently been proposed to predict brain disorders by modelling dynamic functional connectivity (FC). While they demonstrate remarkable model performance and zero- or few-shot generalization, the salient features identified as potential biomarkers are yet to be thoroughly evaluated. We propose RE-CONFIRM, a framework for evaluating the robustness of potential biomarker candidates elucidated by deep learning (DL) models including FMs. From experiments on five large datasets of Autism Spectrum Disorder (ASD), Attention-deficit Hyperactivity Disorder (ADHD), and Alzheimer's Disease (AD), we found that although commonly used performance metrics provide an intuitive assessment of model predictions, they are insufficient for evaluating the robustness of biomarkers identified by these models. RE-CONFIRM metrics revealed that simply finetuning FMs leads to models that fail to capture regional hubs effectively, even in disorders where hubs are known to be implicated, such as ASD and ADHD. In view of this, we propose Hub-LoRA (Low-Rank Adaptation) as a fine-tuning technique that enables FMs to not only outperform customised DL models but also produce neurobiologically faithful biomarkers supported by meta-analyses. RE-CONFIRM is generalizable and can be easily applied to ascertain the robustness of DL models trained on functional MRI datasets. Code is available at: https://github.com/SCSE-Biomedical-Computing-Group/RE-CONFIRM.

Source: https://arxiv.org/abs/2604.22018v1
