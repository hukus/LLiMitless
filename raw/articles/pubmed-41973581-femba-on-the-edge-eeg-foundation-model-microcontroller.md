---
source_url: https://pubmed.ncbi.nlm.nih.gov/41973581/
ingested: 2026-04-30
sha256: 2be2e9d35bc251b8b2903bf49306cc057c24af03353d84d10c20da40f95d867c
---

# FEMBA on the Edge: Physiologically-Aware Pre-Training, Quantization, and Deployment of a Bidirectional Mamba EEG Foundation Model on an Ultra-Low Power Microcontroller

- PMID: 41973581
- Published: 2026-04-13
- Journal: IEEE Transactions on Biomedical Engineering
- Authors: Anna Tegon, Nicolas Lehmann, Yawei Li, Andrea Cossettini, Luca Benini, Thorir Mar Ingolfsson

## Abstract Notes

- Objective: enable continuous, long-term neuro-monitoring on wearable devices by addressing the compute and quantization bottlenecks of EEG foundation models.
- Model: FEMBA, a bidirectional Mamba architecture pretrained on more than 21,000 hours of EEG.
- Pretraining: a physiologically aware objective using reconstruction with low-pass filtering to prioritize neural oscillations over high-frequency artifacts.
- Compression: quantization-aware training reduced the model to 2-bit weights for edge deployment.
- Deployment: the framework runs on a GAP9 ultra-low-power RISC-V microcontroller with a custom double-buffered memory streaming scheme.
- Performance: low-pass pretraining improved TUAB downstream AUROC to 0.893 and AUPR to 0.898 versus the best contrastive baseline; standard post-training quantization degraded accuracy by roughly 30%.
- Efficiency: embedded inference is reported at 1.70 s per 5 s window, with about 2 MB memory footprint and up to 27x fewer FLOPs than transformer benchmarks.

## Research Value

- This is one of the clearest immediate-utility papers in the branch because it is not just a benchmark model.
- The practical output is deployable, continuous EEG monitoring for epilepsy and sleep-disorder workflows.
- It strengthens the case that foundation models can move from offline prediction to embedded neuro-monitoring infrastructure.
