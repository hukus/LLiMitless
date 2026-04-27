---
source_url: https://arxiv.org/abs/2604.12683v1
ingested: 2026-04-27
sha256: f1d8980818868d2b86d6dca8106cc6b86743b84a7a8a7d158e63e2b6cc089339
---
# Brain-DiT: A Universal Multi-state fMRI Foundation Model with Metadata-Conditioned Pretraining

Query cluster: sleep-circadian
ArXiv ID: 2604.12683v1
Published: 2026-04-14
Updated: 2026-04-14
Authors: Junfeng Xia, Wenhao Ye, Xuanye Pan, Xinke Shen, Mo Wang, Quanying Liu
Categories: cs.CV, q-bio.NC
Abstract: Current fMRI foundation models primarily rely on a limited range of brain states and mismatched pretraining tasks, restricting their ability to learn generalized representations across diverse brain states. We present \textit{Brain-DiT}, a universal multi-state fMRI foundation model pretrained on 349,898 sessions from 24 datasets spanning resting, task, naturalistic, disease, and sleep states. Unlike prior fMRI foundation models that rely on masked reconstruction in the raw-signal space or a latent space, \textit{Brain-DiT} adopts metadata-conditioned diffusion pretraining with a Diffusion Transformer (DiT), enabling the model to learn multi-scale representations that capture both fine-grained functional structure and global semantics. Across extensive evaluations and ablations on 7 downstream tasks, we find consistent evidence that diffusion-based generative pretraining is a stronger proxy than reconstruction or alignment, with metadata-conditioned pretraining further improving downstream performance by disentangling intrinsic neural dynamics from population-level variability. We also observe that downstream tasks exhibit distinct preferences for representational scale: ADNI classification benefits more from global semantic representations, whereas age/sex prediction comparatively relies more on fine-grained local structure. Code and parameters of Brain-DiT are available at \href{https://github.com/REDMAO4869/Brain-DiT}{Link}.

Source: https://arxiv.org/abs/2604.12683v1
