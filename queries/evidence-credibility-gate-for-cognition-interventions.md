---
title: Evidence Credibility Gate for Cognition Interventions
created: 2026-04-28
updated: 2026-04-28
type: query
tags: [comparison, controversy, clinical-trial, safety, protocol, cognition]
sources: [raw/articles/pubmed-33050752-hbot-severe-tbi-randomized-trial.md, raw/articles/pubmed-38217421-hbot-severe-tbi-retraction-notice.md, raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md, raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md, raw/articles/clinicaltrials-nct04466345-semaglutide-mdd-cognitive-dysfunction.md, raw/articles/clinicaltrials-nct04777396-semaglutide-evoke.md, raw/articles/clinicaltrials-nct04777409-semaglutide-evoke-plus.md, raw/articles/clinicaltrials-nct02380573-methylene-blue-results-posted.md, raw/articles/clinicaltrials-nct05163808-bpn14770-adolescent-watch.md, raw/articles/pubmed-40253245-intranasal-insulin-ms-null.md, raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md, raw/articles/pubmed-40822571-tpbm-systematic-review-sleep-wakefulness-cognition.md, raw/articles/pubmed-39905569-tdcs-dosage-parameters.md, raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md, raw/articles/pubmed-38465461-pentoxifylline-negative-symptoms-retraction.md, raw/articles/clinicaltrials-nct04094207-pentoxifylline-negative-symptoms-schizophrenia.md]
confidence: medium
contested: true
---

# Evidence Credibility Gate for Cognition Interventions

This page separates integrity problems from ordinary scientific disagreement. The current audit found one true branch-level integrity failure, several endpoint-framing risks, and a few places where the literature is simply too phenotype- and parameter-sensitive to read as a clean yes/no.

## Checklist

Use this gate before promoting a cognition branch:

- [ ] Retraction screen: exclude any paper that has an official retraction, expression of concern, or correction that changes the results.
- [ ] Registry alignment screen: compare study status, completion dates, primary endpoint, and results-posted state against the paper.
- [ ] Primary-endpoint screen: do not upgrade a branch on secondary composites, post-hoc slices, or biomarker-only wins when the prespecified primary outcome is negative.
- [ ] Independence screen: note sponsor funding, employee authorship, steering-committee roles, and whether any independent replication exists.
- [ ] PubPeer / commentary screen: search for formal outside critique before treating a result as settled.
- [ ] Source-separation screen: keep sponsor-led, same-lab, and independent replication evidence in separate confidence buckets.
- [ ] Phenotype screen: require the same population, state, device, and follow-up window before comparing studies.
- [ ] Date screen: newer higher-quality evidence can supersede older positive signals, especially when follow-up or outcome definitions changed.

## What Changed Since 2024

- The HBOT severe-TBI branch is no longer just controversial; the headline-positive 2020 randomized trial was retracted, so it must be removed from any current efficacy synthesis.^[raw/articles/pubmed-33050752-hbot-severe-tbi-randomized-trial.md]^[raw/articles/pubmed-38217421-hbot-severe-tbi-retraction-notice.md]
- Semaglutide now has direct cognition trials and completed AD registries, but the main problem is endpoint framing: the MDD trial missed its primary executive-function endpoint while the secondary global-cognition composite favored semaglutide, and EVOKE/EVOKE+ were negative on the primary AD progression endpoint.^[raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md]^[raw/articles/clinicaltrials-nct04466345-semaglutide-mdd-cognitive-dysfunction.md]^[raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md]^[raw/articles/clinicaltrials-nct04777396-semaglutide-evoke.md]^[raw/articles/clinicaltrials-nct04777409-semaglutide-evoke-plus.md]
- Pentoxifylline's schizophrenia branch now has a retraction-aware integrity problem: the 2023 negative-symptom trial was retracted, and the associated registry record is completed with no results posted while the prespecified primary endpoint was PANSS total rather than the paper's more favorable symptom framing.^[raw/articles/pubmed-37466276-pentoxifylline-schizophrenia-cognition.md]^[raw/articles/pubmed-38465461-pentoxifylline-negative-symptoms-retraction.md]^[raw/articles/clinicaltrials-nct04094207-pentoxifylline-negative-symptoms-schizophrenia.md]
- tPBM, tDCS, and tACS did not surface as integrity problems in this pass, but they remain interpretation traps because small-study effects, dosage sensitivity, and phenotype mismatch can make the evidence look cleaner than it is.^[raw/articles/pubmed-40822571-tpbm-systematic-review-sleep-wakefulness-cognition.md]^[raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md]^[raw/articles/pubmed-39905569-tdcs-dosage-parameters.md]^[raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md]

## Credibility Matrix

| Branch | Integrity / registry check | Main credibility risk | Working action |
|---|---|---|---|
| HBOT | Severe-TBI efficacy trial retracted; the branch now has an explicit invalidated paper in the source layer.^[raw/articles/pubmed-33050752-hbot-severe-tbi-randomized-trial.md]^[raw/articles/pubmed-38217421-hbot-severe-tbi-retraction-notice.md] | Retraction-aware synthesis and comparator quality | Exclude the retracted trial from any effect-size table and keep sham/no-treatment distinctions explicit. |
| Semaglutide / incretins | Registry endpoints match the papers I checked; the MDD trial missed its primary executive-function endpoint but had a positive secondary composite, while EVOKE/EVOKE+ were negative on the primary AD progression endpoint and remain completed with no results posted in the registry.^[raw/articles/clinicaltrials-nct04466345-semaglutide-cognitive-dysfunction.md]^[raw/articles/pubmed-41218611-semaglutide-mdd-cognitive-dysfunction-rct.md]^[raw/articles/clinicaltrials-nct04777396-semaglutide-evoke.md]^[raw/articles/clinicaltrials-nct04777409-semaglutide-evoke-plus.md]^[raw/articles/pubmed-41865758-semaglutide-evoke-evokeplus-ad-phase3.md] | Primary-endpoint downgrades and secondary-composite overread | Weight the prespecified primary outcome above biomarker movement or favorable secondary composites. |
| MB2 / methylene blue | Registry results were posted in 2024, but the public study snapshot in this sweep did not expose numeric outcome tables and no independent peer-reviewed cognition paper was located.^[raw/articles/clinicaltrials-nct02380573-methylene-blue-results-posted.md] | Registry-paper lag and hidden outcome tables | Do not promote the branch on registry posting alone; wait for the journal layer or a transparent downloadable table. |
| BPN14770 adolescent FXS | The adolescent study is active, not recruiting, and past its estimated completion dates without posted results.^[raw/articles/clinicaltrials-nct05163808-bpn14770-adolescent-watch.md] | Result lag relative to estimated completion | Keep the branch in the watchlist until the registry or journal layer changes. |
| Pentoxifylline / schizophrenia | The adjacent negative-symptom trial was retracted; the registry record still shows a completed, no-results study with a PANSS-total primary endpoint.^[raw/articles/pubmed-38465461-pentoxifylline-negative-symptoms-retraction.md]^[raw/articles/clinicaltrials-nct04094207-pentoxifylline-negative-symptoms-schizophrenia.md] | Retraction plus primary-endpoint framing mismatch | Treat the published signal as invalidated evidence and keep the registry record as an endpoint-design example only. |
| Intranasal insulin | No clear integrity flag surfaced in this pass; the issue is more phenotype and delivery sensitivity than validity.^[raw/articles/pubmed-40253245-intranasal-insulin-ms-null.md] | Device/state mismatch | Keep device, vascular-metabolic state, and phenotype separate from the class label. |
| tPBM | No clear integrity flag surfaced; the branch is still small-study sensitive.^[raw/articles/pubmed-40822571-tpbm-systematic-review-sleep-wakefulness-cognition.md]^[raw/articles/pubmed-38109202-tpbm-concussion-null-rct.md] | Recovery phenotype and follow-up window | Treat the branch as modest and context-dependent, not a settled enhancer. |
| tDCS / tACS | No clear integrity flag surfaced; the branch remains parameter-sensitive.^[raw/articles/pubmed-39905569-tdcs-dosage-parameters.md]^[raw/articles/pubmed-41034500-tacs-older-adults-meta-2025.md] | Montage, intensity, and durability mismatch | Require exact protocol details before comparing studies. |

## Readout Rules

- A retracted paper is not a weak positive; it is invalid evidence.
- A negative primary endpoint with a positive secondary composite is not a clean efficacy win.
- A registry that matches the paper but has no results posted is still useful, but it does not strengthen the efficacy claim by itself.
- A registry result posting is not a substitute for a peer-reviewed paper when the outcome tables are missing or inaccessible.
- A small, phenotype-specific signal is not the same thing as a broad branch-level effect.
- No targeted PubPeer thread surfaced in this pass for the branches I checked, but that is a limited search result, not proof of absence.

## Top Sources

1. [HBOT severe-TBI trial](https://pubmed.ncbi.nlm.nih.gov/33050752/)
2. [HBOT retraction notice](https://pubmed.ncbi.nlm.nih.gov/38217421/)
3. [Semaglutide MDD RCT](https://pubmed.ncbi.nlm.nih.gov/41218611/)
4. [Semaglutide EVOKE/EVOKE+](https://pubmed.ncbi.nlm.nih.gov/41865758/)
5. [Semaglutide MDD registry](https://clinicaltrials.gov/study/NCT04466345)
6. [EVOKE registry](https://clinicaltrials.gov/study/NCT04777396)
7. [EVOKE Plus registry](https://clinicaltrials.gov/study/NCT04777409)
8. [MB2 results posted record](https://www.clinicaltrials.gov/study/NCT02380573)
9. [BPN14770 adolescent registry](https://clinicaltrials.gov/study/NCT05163808)
10. [Pentoxifylline retraction notice](https://pubmed.ncbi.nlm.nih.gov/38465461/)
11. [Pentoxifylline registry](https://clinicaltrials.gov/study/NCT04094207)
12. [Intranasal insulin MS null](https://pubmed.ncbi.nlm.nih.gov/40253245/)
13. [tPBM systematic review](https://pubmed.ncbi.nlm.nih.gov/40822571/)
14. [tDCS dosage meta-analysis](https://pubmed.ncbi.nlm.nih.gov/39905569/)
15. [tACS older-adults meta-analysis](https://pubmed.ncbi.nlm.nih.gov/41034500/)

## Actionable Wiki Updates

- Keep [[hbot-evidence-quality-review]] and [[hyperbaric-oxygen-neurocognitive-recovery]] retraction-aware.
- Keep [[incretin-therapies-brain-health]] and [[incretin-therapies-brain-health-2026-scan]] focused on primary outcomes, not just secondary composites.
- Keep [[pde-camp-creb-cognition-2026-scan]] retraction-aware when citing pentoxifylline or adjacent PDE branch papers.
- Use [[negative-evidence-watchlist-for-cognition-interventions]] for branch-level nulls and this page for integrity-specific screening.
- Use [[contradiction-log-for-cognition-interventions]] when the issue is scientific disagreement rather than evidence validity.
- Use [[online-evidence-freshness-dashboard]] for registry status changes that may later turn into credibility or endpoint issues.
