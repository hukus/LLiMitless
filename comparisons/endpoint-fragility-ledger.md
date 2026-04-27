---
title: Endpoint Fragility Ledger for Cognition Interventions
created: 2026-04-28
updated: 2026-05-03
type: comparison
tags: [comparison, cognition, biomarker, clinical-trial, controversy, device, performance, protocol, sleep]
sources: [raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md, raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md, raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md, raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md, raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md, raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md, raw/articles/pubmed-40087245-wakeful-rest-memory-consolidation-meta-analysis.md, raw/articles/pubmed-37948381-near-transfer-inhibition-training-rct.md, raw/articles/pubmed-32128593-dcbt-i-cognitive-function-rct.md, raw/articles/pubmed-40958978-taVNS-stress-regulation-eeg-questionnaire.md, raw/articles/pubmed-40908377-taVNS-mental-stressor.md, raw/articles/pubmed-41040248-temporal-interference-memory-encoding.md, raw/articles/pubmed-41723237-safe-focused-ultrasound-bbb-opening-tight-junctions.md, raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md, raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md, raw/articles/pubmed-22992376-caffeine-attention-withdrawn-consumers.md, raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md, raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md, raw/articles/pubmed-40121525-lf-rtms-glymphatic-cognition.md]
confidence: medium
---

# Endpoint Fragility Ledger for Cognition Interventions

This ledger assigns each claim to the weakest endpoint it has actually cleared. A branch should not move upward just because it is biologically active, more plausible, or better tolerated. The wiki already has separate pages for endpoint language, target-to-behavior mediation, ecological robustness, and washout durability; this page is the claim-level ledger that keeps those layers from collapsing into one another.^[raw/articles/pubmed-40087245-wakeful-rest-memory-consolidation-meta-analysis.md]^[raw/articles/pubmed-37948381-near-transfer-inhibition-training-rct.md]^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md]

## What Changed Since 2024

- Consolidation is now a first-class endpoint in the wiki because the wakeful-rest meta-analysis reinforced that delayed retention should be labeled separately from same-day throughput.^[raw/articles/pubmed-40087245-wakeful-rest-memory-consolidation-meta-analysis.md]
- Transfer is harder to earn than trained-task improvement: the inhibition-training RCT found near transfer but not broader generalization, which is exactly the kind of false promotion this ledger is meant to prevent.^[raw/articles/pubmed-37948381-near-transfer-inhibition-training-rct.md]
- tPBM now has both a controlled older-adult signal and a home-use MCI signal with follow-up, so it can be tagged beyond simple same-day performance rescue.^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]^[raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md]^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]
- The home CLAS study showed that physiology can move without behavior, which keeps `physiology-only` from being treated as an efficacy label.^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]
- Intranasal insulin PET validation and the newer tFUS safety literature show that target engagement and delivery control are not the same thing as durable cognition benefit.^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-41723237-safe-focused-ultrasound-bbb-opening-tight-junctions.md]
- tDCS durability remains weak enough that a 1-month follow-up still matters, even when immediate gains look real.^[raw/articles/pubmed-38452749-tdcs-older-adults-mci-2024.md]
- PENSA is a cautionary example that a post-washout signal can coexist with a primary null, so `durable-after-washout` must stay stricter than "interesting after treatment ends."^[raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md]

## How To Use It

1. Tag the claim at the weakest endpoint it honestly clears.
2. Allow multiple tags when a paper clears more than one box.
3. Do not upgrade a trained-task improvement into transfer unless an untrained task moved.
4. Do not upgrade a state or symptom change into cognition unless an objective performance endpoint moved.
5. Do not call an effect durable unless it survives a meaningful delay or washout.
6. Do not call an ecological result home-replicated unless the delivery context actually changed.

## Ledger

| Tag | What counts | Current wiki examples | Why it matters |
|---|---|---|---|
| `physiology-only` | Target engagement, biomarker movement, or autonomic change without a behavioral cognition win | Closed-loop auditory stimulation increased slow-oscillation amplitude but not memory or vigilance; intranasal insulin reached multiple brain regions on PET; taVNS shifted autonomic readouts without PASAT improvement; FUS-BBBO is still a delivery and safety platform | Useful for mechanism and target validation, but not enough to rank a branch as efficacy-positive.^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md]^[raw/articles/pubmed-40703476-intranasal-insulin-pet-aging-mci.md]^[raw/articles/pubmed-40908377-taVNS-mental-stressor.md]^[raw/articles/pubmed-41723237-safe-focused-ultrasound-bbb-opening-tight-junctions.md] |
| `subjective-only` | Self-report, mood, stress, or symptom improvement without a clear objective cognition win | dCBT-I used self-reported cognitive impairment as the primary outcome, and taVNS stress-regulation work changed perceived stress or questionnaire state more than objective performance | Keep the state/symptom layer separate from the cognition layer; self-report can be useful without being a cognitive endpoint.^[raw/articles/pubmed-32128593-dcbt-i-cognitive-function-rct.md]^[raw/articles/pubmed-40958978-taVNS-stress-regulation-eeg-questionnaire.md] |
| `same-day-endpoint-positive` | Immediate performance improves in the tested window | tPBM improved MoCA or working-memory measures in older-adult / MCI studies; acute caffeine still improves reaction time and detection even when withdrawal is part of the background; tACS and taVNS remain small and protocol-sensitive rather than universal | This is the most common overread bucket; a same-day win can still fade quickly or stay task-specific.^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]^[raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md]^[raw/articles/pubmed-22992376-caffeine-attention-withdrawn-consumers.md]^[raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md]^[raw/articles/pubmed-34043386-taVNS-healthy-cognition-meta-analysis.md] |
| `delayed-retention-positive` | A benefit survives a real delay, overnight interval, or follow-up | Wakeful rest supports consolidation; CLAS plus cathodal tDCS improved overnight retention in a small preprint; tPBM MCI studies report follow-up persistence; LF-rTMS and glymphatic work add a plausible delayed-retention chain | Retention is a stricter test than same-day throughput, and it is the first place many branches weaken.^[raw/articles/pubmed-40087245-wakeful-rest-memory-consolidation-meta-analysis.md]^[raw/articles/pubmed-41497605-closed-loop-acoustic-stimulation-cathodal-tdcs-retention.md]^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]^[raw/articles/pubmed-40121525-lf-rtms-glymphatic-cognition.md] |
| `transfer-positive` | An untrained but related task improves | The inhibition-training RCT found near transfer but not broad transfer, so the bucket remains hard to earn | If only the trained task improves, the result is not transfer; it is practice or task-specific learning.^[raw/articles/pubmed-37948381-near-transfer-inhibition-training-rct.md] |
| `home-replicated` | The effect survives ecological or home delivery | Home-use tPBM in MCI due to AD is the clearest current example; home CLAS moved physiology without behavior, which is why home delivery must be separated from efficacy | Delivery realism matters. A lab-positive effect can disappear when the setting changes.^[raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]^[raw/articles/medrxiv-25333989-tpbm-mci-cognitive-metabolic-neuroimaging-pilot.md]^[raw/articles/pubmed-41229102-closed-loop-auditory-stimulation-ecological-memory-null.md] |
| `durable-after-washout` | The benefit remains after treatment ends and a meaningful washout or long follow-up | tPBM MCI follow-up is the strongest current candidate; PENSA is the counterexample that shows why post-washout signals must be read cautiously when the primary endpoint is null | This is the rarest and most decision-relevant bucket because it says the branch has changed more than the immediate post-dose state.^[raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md]^[raw/articles/pubmed-40664536-pensa-apoe-e4-scd-egcg-multimodal-rct.md] |

## Open Contradictions

- Biomarker movement is much easier to prove than behavioral transfer, and the wiki should not collapse those into one label.
- A subjective win can be real, but it may only reflect mood, stress, or expectancy rather than cognition.
- A same-day win can coexist with a null follow-up; that is why the retention and washout buckets exist.
- A home trial can be positive on physiology and still fail on behavior.
- A post-washout signal can reflect delayed adaptation, adherence decay, or regression to the mean rather than durable efficacy.

## Related Pages

- [[endpoint-dictionary-for-cognition-interventions]]
- [[target-engagement-to-behavior-mediation-audit]]
- [[ecological-robustness-table]]
- [[washout-durability-for-cognition-interventions]]
- [[negative-evidence-watchlist-for-cognition-interventions]]
- [[trial-design-recommendations-for-cognition-interventions]]
- [[active-comparator-and-caffeine-scheduling-confound-audit]]

## Actionable Wiki Updates

- Add this page to `index.md` under Comparisons.
- Reuse these tags in future scan pages so claims do not drift upward by implication.
- Cross-link this page from the endpoint, mediation, durability, and ecological robustness pages when a future pass can spare the edits.
- Use this ledger to decide whether a scan deserves `physiology-only`, `same-day-endpoint-positive`, or a stronger claim label before ranking it.
