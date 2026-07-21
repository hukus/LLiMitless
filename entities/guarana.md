---
title: Guarana
created: 2026-05-03
updated: 2026-06-12
type: entity
tags: [domain-medicine, cognition, herbal-medicine, performance, clinical-trial, safety, dosage, anecdote, mechanism, comparison, controversy]
sources: [raw/articles/pmc-9865053-guarana-cognition-meta-analysis.md, raw/articles/pubmed-36678305-guarana-cognition-meta-analysis.md, raw/articles/pubmed-16533867-guarana-acute-multidose-rct.md, raw/articles/pubmed-18077056-guarana-multivitamin-fatigue-rct.md, raw/articles/pubmed-24067387-guarana-multivitamin-fmri-rct.md, raw/articles/pubmed-26225993-mvm-guarana-fasted-exercise-rct.md, raw/articles/pmc-11206275-guarana-caffeine-mental-performance-rct.md, raw/articles/ncbi-bookshelf-2023-livertox-guarana.md, raw/articles/fda-caffeine-too-much-safety.md, raw/articles/reddit-2020-guarana-vs-extract-thread.md, raw/articles/reddit-2021-guarana-extract-caffeine-stack-thread.md]
confidence: low
contested: true
contradictions: []
---

# Guarana

Guarana is the wiki's product-specific branch for Paullinia cupana seed powder, standardized guarana extracts, energy-drink guarana, and multivitamin / guarana combinations. It is also a caffeine-source problem: guarana contains caffeine plus other xanthines and polyphenolic compounds, so the relevant question is not "does guarana stimulate cognition?" but whether a defined guarana product improves cognition beyond matched [[caffeine]], with acceptable sleep and cardiovascular burden.

Medicinal cognition signal: `low/caffeine-confounded`. The 2023 meta-analysis is the cleanest formal anchor: eight placebo-controlled studies, 328 participants, and 272 cognitive dependent variables produced a non-significant overall effect and a small response-time signal without accuracy improvement. Older small guarana-alone work reported secondary-memory and alert/content mood improvements at lower PC-102 doses, and several multivitamin / guarana products reported sustained-attention, Serial Threes, or exercise-state working-memory signals. The current confidence governor is the 2024 crossover trial: 500 mg guarana, independently measured at 130 mg caffeine despite a 100 mg label, did not improve Simon or 2N-back performance versus low-dose caffeine or placebo, including after physical fatigue.^[raw/articles/pubmed-36678305-guarana-cognition-meta-analysis.md]^[raw/articles/pubmed-16533867-guarana-acute-multidose-rct.md]^[raw/articles/pubmed-18077056-guarana-multivitamin-fatigue-rct.md]^[raw/articles/pubmed-24067387-guarana-multivitamin-fmri-rct.md]^[raw/articles/pubmed-26225993-mvm-guarana-fasted-exercise-rct.md]^[raw/articles/pmc-11206275-guarana-caffeine-mental-performance-rct.md]

The practical signal is therefore narrower than [[caffeine]]. Guarana may be worth tracking for response time, sustained mental demand, perceived energy, or exercise/fatigue contexts, but product lanes must be separated: low-dose PC-102 extract, guarana powder, guarana extract standardized for caffeine, energy drinks, multivitamin/mineral products, and caffeine-matched capsules are not interchangeable. "Guaranine" should be treated as caffeine for routing purposes unless a source proves a distinct pharmacological exposure.

Anecdote signal: `weak-moderate salience, weak efficacy`. Captured /r/Nootropics threads mostly compare guarana with caffeine pills, coffee, or energy products. Users sometimes describe guarana as smoother, cleaner, longer-lasting, or different from pure caffeine, while others report no meaningful difference. The threads are useful for product-identity and tolerability hypotheses, not for efficacy upgrading.^[raw/articles/reddit-2020-guarana-vs-extract-thread.md]^[raw/articles/reddit-2021-guarana-extract-caffeine-stack-thread.md]

Safety and product-quality signal: `moderate caffeine-product caution`. LiverTox does not identify guarana as a convincing liver-injury cause at conventional doses, but it describes caffeine-like cardiovascular and CNS effects and warns about high-dose tremor, jitteriness, agitation, confusion, hypertension, dehydration, and caffeine toxicity from combining products. FDA caffeine guidance makes the same practical point: most adults are not generally expected to have negative effects at about 400 mg/day caffeine, but sensitivity varies and excess intake can cause palpitations, high blood pressure, sleep disruption, anxiety, jitters, nausea, and headache. The 2024 guarana trial's label mismatch reinforces the product-QA problem: a supplement labeled as 100 mg caffeine delivered 130 mg by independent assay.^[raw/articles/ncbi-bookshelf-2023-livertox-guarana.md]^[raw/articles/fda-caffeine-too-much-safety.md]^[raw/articles/pmc-11206275-guarana-caffeine-mental-performance-rct.md]

## Signal Split

| Layer | Signal | Readout |
|---|---|---|
| 2023 guarana cognition meta-analysis | `low/mixed` | Overall pooled cognition effect non-significant; small response-time benefit without accuracy improvement |
| Older PC-102 multidose RCT | `low/product-specific` | 37.5 mg and 75 mg looked better than higher doses for secondary memory and alert/content mood |
| Multivitamin / guarana sustained-demand products | `low/combination-confounded` | RVIP, Serial Threes, fMRI activation, or fatigue/exercise signals, but not isolated guarana proof |
| 2024 guarana vs caffeine trial | `negative/low-dose comparator` | 500 mg guarana with measured 130 mg caffeine did not improve Simon or 2N-back outcomes versus caffeine/placebo |
| Anecdote | `weak-moderate salience, weak efficacy` | Smoother/different caffeine-source claims are visible but inconsistent and unblinded |
| Safety / quality | `moderate caffeine-product caution` | Cumulative caffeine, label mismatch, energy-drink stacking, sleep disruption, cardiovascular symptoms, and stimulant sensitivity dominate |

## Anecdote Ledger

| Claim or candidate | Evidence layer | Source and source type | Signal size / strength | Context | Confidence | Caveat |
|---|---|---|---|---|---|---|
| Guarana feels smoother or different than caffeine pills | anecdote / product-comparison salience | raw/articles/reddit-2020-guarana-vs-extract-thread.md; Reddit /r/Nootropics thread | about +8 visible votes; `weak` salience, `weak` efficacy | Guarana extract, guarana powder, caffeine-equivalent tablets, claimed delayed release | low | Mixed comments; one user reported guarana and caffeine tablets felt identical; no blinding or objective task |
| Guarana extract can be a more pleasant low-caffeine stack ingredient | anecdote / stack salience | raw/articles/reddit-2021-guarana-extract-caffeine-stack-thread.md; Reddit /r/Nootropics thread | low visible vote count; `weak` | Guarana extract with about 44 mg caffeine, taurine, L-theanine, coffee alternatives | low | Mostly cost/tolerability discussion; "guaranine" framed as caffeine; no denominator or product verification |

## Practical Interpretation

Guarana belongs below [[caffeine]] in [[molecule-intake-triage-table]]. Its most defensible use in the wiki is as a caffeine-containing botanical whose extra compounds may modify tolerability, response time, or fatigue-state performance in some products, not as an independent memory enhancer. Any future upgrade requires matched-caffeine trials with verified caffeine/xanthine content, sleep timing, tolerance/withdrawal controls, and objective cognitive endpoints.

For future updates, route guarana reports through [[safety-interaction-matrix-for-multi-modal-stacks]] and keep these exposures separate: guarana seed powder, standardized PC-102-like extract, caffeine-standardized guarana extract, energy-drink guarana, multivitamin / mineral / guarana products, and isolated caffeine controls. If a product label reports caffeine, treat that as a hypothesis until assay or reliable certification confirms the actual dose. The main interpretation gates are cumulative caffeine/methylxanthine load, label mismatch, sleep timing, tolerance or withdrawal reversal, BP/HR, anxiety or panic sensitivity, energy-drink/preworkout co-use, and whether the report is really about avoiding coffee rather than adding guarana.

## Related Pages

- [[caffeine]]
- [[l-theanine]]
- [[theacrine]]
- [[stimulant-adjacent-dopamine-precursor-watchlist]]
- [[safety-interaction-matrix-for-multi-modal-stacks]]
- [[plant-active-substance-product-watchlist]]
- [[polyphenol-nrf2-cognition-watchlist]]
- [[molecule-intake-triage-table]]
- [[cognitive-improvement-molecule-signal-atlas]]

## Sources

- raw/articles/pmc-9865053-guarana-cognition-meta-analysis.md
- raw/articles/pubmed-36678305-guarana-cognition-meta-analysis.md
- raw/articles/pubmed-16533867-guarana-acute-multidose-rct.md
- raw/articles/pubmed-18077056-guarana-multivitamin-fatigue-rct.md
- raw/articles/pubmed-24067387-guarana-multivitamin-fmri-rct.md
- raw/articles/pubmed-26225993-mvm-guarana-fasted-exercise-rct.md
- raw/articles/pmc-11206275-guarana-caffeine-mental-performance-rct.md
- raw/articles/ncbi-bookshelf-2023-livertox-guarana.md
- raw/articles/fda-caffeine-too-much-safety.md
- raw/articles/reddit-2020-guarana-vs-extract-thread.md
- raw/articles/reddit-2021-guarana-extract-caffeine-stack-thread.md
