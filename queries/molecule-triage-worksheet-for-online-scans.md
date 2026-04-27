---
title: Molecule Triage Worksheet for Online Scans
created: 2026-04-28
updated: 2026-04-28
type: query
tags: [comparison, cognition, protocol, safety, controversy, clinical-trial, biomarker]
sources: [raw/articles/pubmed-2297206-n-of-1-randomized-controlled-trial-clinical-usefulness.md, raw/articles/pubmed-38622638-methodological-review-randomized-n-of-1-trials.md, raw/articles/pubmed-20846444-practice-effects-frequent-repetitive-cognitive-testing.md, raw/articles/pubmed-29126328-repeated-administration-effects-psychomotor-vigilance-test.md, raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md, raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md, raw/articles/pubmed-11502230-placebo-expectancy-glucose-cognition.md, raw/articles/pubmed-32709551-pharmaceutical-cognitive-enhancement-healthy-adults.md, raw/articles/pubmed-39070254-creatine-cognition-adults-meta-analysis.md, raw/articles/pubmed-38565814-exenatide-mci-proof-of-concept-negative.md, raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md, raw/articles/pubmed-39528111-solriamfetol-sharp-osa-cognition.md, raw/articles/pubmed-40347153-5ht6-receptors-contemporary-views-neuropsychiatric-disorders.md, raw/articles/pubmed-39579950-breaking-up-sitting-postprandial-glucose-regulation.md]
confidence: medium
---

# Molecule Triage Worksheet for Online Scans

## Summary

This page is the fillable front page for online molecule scans. It sits above the evidence table and below raw source capture: first decide what the candidate is, what it is trying to change, who it was tested in, what state it was tested under, what it was compared against, and whether the product and regulatory status are actually clear.

Use [[molecule-intake-triage-table]] to route the candidate into comparator, state-restoration, disease-modifying clinical, nutraceutical proxy, preclinical-only, or negative-class buckets. Use [[endpoint-dictionary-for-cognition-interventions]] to keep arousal, throughput, learning slope, consolidation, transfer, and resilience separate. Use [[state-challenge-matrix-for-cognition-interventions]] so the participant state is named before the endpoint is interpreted.

The worksheet is deliberately more mechanical than narrative. It is designed to stop the wiki from turning a raw online scan into a fuzzy opinion before the scan has enough metadata to be compared fairly.

## What Changed Since 2024

- Short-block and n-of-1 methods now make it obvious that candidate, comparator, and block structure have to be fixed up front. Recent methodological reviews found many randomized n-of-1 trials, but reporting of periods, blinding, and analysis remains inconsistent.^[raw/articles/pubmed-2297206-n-of-1-randomized-controlled-trial-clinical-usefulness.md]^[raw/articles/pubmed-38622638-methodological-review-randomized-n-of-1-trials.md]
- Practice-effect papers now show why a molecule worksheet needs an endpoint-tier field. Repeating the same task can move the score before the intervention does, especially for short protocols and brief vigilance tasks.^[raw/articles/pubmed-20846444-practice-effects-frequent-repetitive-cognitive-testing.md]^[raw/articles/pubmed-29126328-repeated-administration-effects-psychomotor-vigilance-test.md]
- Expectancy and withdrawal can masquerade as benefit, especially for caffeine-like comparators and meal/glucose interventions, so comparator class and washout are not optional metadata.^[raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md]^[raw/articles/pubmed-11502230-placebo-expectancy-glucose-cognition.md]
- The current comparator stack is explicit enough that healthy enhancement, state rescue, and disease modification need separate routing. Exenatide and semaglutide are the cautionary examples, while solriamfetol and the muscarinic / serotonergic comparator lanes show how easy it is to overgeneralize from a single phenotype.^[raw/articles/pubmed-38565814-exenatide-mci-proof-of-concept-negative.md]^[raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md]^[raw/articles/pubmed-39528111-solriamfetol-sharp-osa-cognition.md]^[raw/articles/pubmed-40347153-5ht6-receptors-contemporary-views-neuropsychiatric-disorders.md]
- Product identity matters as much as mechanism for supplements and reformulations. A worksheet has to record the exact active, formulation, or product identity before a scan is filed, because broad category labels can hide quality and reproducibility problems.^[raw/articles/pubmed-32709551-pharmaceutical-cognitive-enhancement-healthy-adults.md]^[raw/articles/pubmed-39070254-creatine-cognition-adults-meta-analysis.md]
- State-specific effects are now common enough that the worksheet has to capture the challenge condition, not just the endpoint. Postprandial and dysglycemic load, for example, can change interpretation even when the same broad intervention class is being discussed.^[raw/articles/pubmed-39579950-breaking-up-sitting-postprandial-glucose-regulation.md]

## Worksheet Logic

The worksheet is not the ranking table. It is the metadata gate that decides whether a candidate should be compared as a comparator, rescue intervention, disease-context therapy, nutraceutical proxy, preclinical lead, or failure exemplar.

If the page cannot say what the molecule is, what population it was tested in, what state was challenged, what endpoint tier moved, and what the control actually was, the scan is incomplete.

That sounds strict because it is. The wiki already shows why:

- a placebo can still be active,
- a state rescue can be mistaken for a broad enhancer,
- and a product label can hide a reproducibility problem.

## Routing Table

| Route | Use when | Downstream home |
|---|---|---|
| Comparator baseline | The candidate already functions as a practical human baseline for wakefulness, attention, or short-term performance comparison. | [[pharmacology-comparator-map]], [[cognition-intervention-master-table]] |
| State-restoration | The effect is best read as rescue from sleep loss, abstinence, hypersomnolence, metabolic strain, or another depleted state. | [[clinical-recovery-vs-healthy-enhancement-translation-map]], [[state-challenge-matrix-for-cognition-interventions]] |
| Disease-modifying clinical | The molecule has a real human disease or recovery program, and the cognition endpoint is tied to that clinical context. | [[clinical-recovery-vs-healthy-enhancement-translation-map]], [[negative-evidence-watchlist-for-cognition-interventions]] |
| Nutraceutical proxy | The active unit is a standardized extract, food-derived compound, or other product where identity and QA matter as much as mechanism. | [[supplement-identity-evidence-map]], [[standardized-herbal-extracts-for-cognition]] |
| Preclinical-only | There is no convincing human cognition program, or the human evidence is too thin to support ranking. | [[translational-gap-table]], [[target-specificity-gate-for-plasticity-molecules]] |
| Negative-class exemplar | Repeated nulls, failed phase programs, or mechanism families have already shown that the intuitive story does not survive human testing. | [[negative-evidence-watchlist-for-cognition-interventions]], [[small-molecule-biomarker-behavior-failure-library]] |

## Core Header

| Field | What to record | Why it matters |
|---|---|---|
| `candidate_name` | Short label for the molecule, formulation, or product | Keeps the scan anchored to one object |
| `product_identity` | Salt, extract, prodrug, vendor, cartridge, lot, or formulation details | Identity can dominate reproducibility |
| `source_type` | RCT, meta-analysis, registry, label, case report, preclinical, anecdote | Source type determines how hard the claim can be read |
| `mechanism_class` | Cholinergic, glutamatergic, metabolic, neurotrophic, wake-promoting, anti-inflammatory, etc. | Prevents mechanism language from outrunning the evidence |
| `evidence_tier` | Meta-analysis, RCT, observational, case report, preclinical, anecdote | Keeps formal evidence separate from hype |
| `primary_endpoint` | Exact prespecified or best-supported outcome | Prevents endpoint drift |
| `endpoint_tier` | Arousal, throughput, learning slope, consolidation, transfer, or resilience | Clarifies what kind of cognition moved |
| `population_or_phenotype` | Healthy adult, older adult, MCI, AD, OSA, abstinent smoker, perioperative, etc. | Phenotype often decides whether the signal survives |
| `challenge_state` | Rested baseline, sleep pressure, stress, hypoxia, postprandial load, exercise/heat, perioperative recovery, injury recovery | State rescue is not the same as baseline enhancement |
| `comparator_class` | Placebo, active sham, active comparator, withdrawal comparator, state control | Comparator class changes the claim |
| `washout_or_spacing` | If relevant, record washout length or block spacing | Carryover and withdrawal can fake a signal |
| `safety_exclusions` | QT risk, BP/HR, serotonergic stack risk, seizure risk, hypoglycemia, sensory leakage, etc. | Safety belongs in the intake form, not only later |
| `regulatory_status` | Prescription, schedule-controlled, supplement, research chemical, device-like, investigational | Status changes how the branch should be read |
| `approval_geography` | U.S., EU, China, or none found | Geography splits should stay visible |
| `results_status` | Posted, unpublished, terminated, suspended, missing, or registry-only | A registry is not the same as a result table |
| `route` | Comparator, rescue, disease, nutraceutical, preclinical, or negative-class | The final routing decision |
| `confidence` | High, medium, or low | Keeps the scan honest about certainty |

## Copy/Paste Header

```text
candidate | product_identity | source_type | mechanism_class | evidence_tier | primary_endpoint | endpoint_tier | population_or_phenotype | challenge_state | comparator_class | washout_or_spacing | safety_exclusions | regulatory_status | approval_geography | results_status | route | confidence
```

## Practical Rules

1. Keep mechanism and endpoint separate. A mechanism story is not a result.
2. If the same molecule spans rescue and enhancement, split by phenotype instead of collapsing the branches.
3. If product identity is uncertain, stop at sourcing and QA before you start comparing efficacy.
4. If the comparator is active, withdrawal-reversing, or state-changing, label it explicitly.
5. If the only signal is anecdote, keep confidence low and route it through the anecdote-specific ledger rather than the ranking pages.
6. If registry status and publication status disagree, keep both visible.
7. If the state is doing most of the work, treat that state as part of the intervention.

## Open Contradictions

- Mechanism-positive is not efficacy-positive.
- Rescue effects are often mistaken for generic enhancement.
- Product identity can dominate molecule name for supplements and other non-API products.
- Approval geography and trial status can diverge.
- A credible scan can still be low-confidence if the source quality is thin.

## Related Pages

- [[molecule-intake-triage-table]]
- [[pharmacology-comparator-map]]
- [[state-challenge-matrix-for-cognition-interventions]]
- [[endpoint-dictionary-for-cognition-interventions]]
- [[regulatory-and-sports-visibility-map]]
- [[delivery-validation-checklist-for-cognition-interventions]]
- [[evidence-credibility-gate-for-cognition-interventions]]
- [[anecdote-to-trial-mismatch-map]]
- [[biohacker-anecdote-methodology]]
- [[online-evidence-freshness-dashboard]]

## Sources

- [PubMed 2297206](https://pubmed.ncbi.nlm.nih.gov/2297206/) - n-of-1 trial proof of concept.
- [PubMed 38622638](https://pubmed.ncbi.nlm.nih.gov/38622638/) - methodological review of randomized n-of-1 trials.
- [PubMed 20846444](https://pubmed.ncbi.nlm.nih.gov/20846444/) - practice effects in frequent cognitive testing.
- [PubMed 29126328](https://pubmed.ncbi.nlm.nih.gov/29126328/) - repeated administration effects on PVT.
- [PubMed 41142043](https://pubmed.ncbi.nlm.nih.gov/41142043/) - blinding indices comparison and application.
- [PubMed 30861208](https://pubmed.ncbi.nlm.nih.gov/30861208/) - expectancy and caffeine withdrawal in balanced-placebo design.
- [PubMed 11502230](https://pubmed.ncbi.nlm.nih.gov/11502230/) - placebo expectancy and glucose-cognition effects.
- [PubMed 32709551](https://pubmed.ncbi.nlm.nih.gov/32709551/) - pharmaceutical cognitive enhancement in healthy adults.
- [PubMed 39070254](https://pubmed.ncbi.nlm.nih.gov/39070254/) - creatine cognition meta-analysis.
- [PubMed 38565814](https://pubmed.ncbi.nlm.nih.gov/38565814/) - exenatide in MCI, negative proof-of-concept.
- [PubMed 41865758](https://pubmed.ncbi.nlm.nih.gov/41865758/) - semaglutide EVOKE / EVOKE+ phase 3.
- [PubMed 39528111](https://pubmed.ncbi.nlm.nih.gov/39528111/) - solriamfetol SHARP cognition trial.
- [PubMed 40347153](https://pubmed.ncbi.nlm.nih.gov/40347153/) - 5-HT6 contemporary review.
- [PubMed 39579950](https://pubmed.ncbi.nlm.nih.gov/39579950/) - breaking up sitting and postprandial glucose regulation.

## Actionable Wiki Updates

- Add this page to `index.md` under Queries.
- Link [[molecule-intake-triage-table]] to this page so the intake gate has a fillable companion.
- Use this worksheet before future online scans so mechanism, endpoint tier, population, comparator, safety, and regulatory status are captured in one pass.
- Keep anecdote-heavy scans routed through the anecdote ledger and mismatch map before they are promoted into comparator pages.
