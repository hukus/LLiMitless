---
title: 30-Day Self-Study Template for Nonprescription Interventions
created: 2026-04-27
updated: 2026-05-03
type: query
tags: [cognition, performance, protocol, safety, comparison]
sources: [raw/articles/pubmed-2297206-n-of-1-randomized-controlled-trial-clinical-usefulness.md, raw/articles/pubmed-30124759-n-of-1-randomized-intervention-trials-health-psychology-review-critique.md, raw/articles/pubmed-38622638-methodological-review-randomized-n-of-1-trials.md, raw/articles/pubmed-40071868-two-arm-crossover-rct-vs-meta-analysis-of-n-of-1-studies.md, raw/articles/pubmed-40016097-n-of-1-tests-general-practice-pharmacological-considerations.md, raw/articles/pubmed-40585136-practice-effects-persist-over-two-decades-cognitive-testing.md, raw/articles/pubmed-20846444-practice-effects-frequent-repetitive-cognitive-testing.md, raw/articles/pubmed-16840238-practice-effects-cogstate-battery-test-retest-intervals.md, raw/articles/pubmed-25994156-written-symbol-digit-modalities-test-alternate-forms-practice-effects.md, raw/articles/pubmed-29126328-repeated-administration-effects-psychomotor-vigilance-test.md, raw/articles/pubmed-40844017-short-term-practice-effects-cognition-daily-functioning-older-adults.md, raw/articles/pubmed-40911708-practice-effects-digital-cognitive-assessment-tools.md, raw/articles/pubmed-22992376-caffeine-attention-withdrawn-consumers.md, raw/articles/pubmed-35791877-repeated-low-dose-caffeine-sleep-deprivation-cognition.md, raw/articles/pubmed-38830861-repeated-caffeine-intake-sleep-restriction-gm.md, raw/articles/pubmed-15319017-weekend-holidays-methylphenidate-adhd.md, raw/articles/pubmed-15354700-validity-pvt-less-than-10-min.md, raw/articles/pubmed-17190720-shorter-pvt-substitute.md, raw/articles/pubmed-39749768-smart-ema-completion-meta-analysis.md, raw/articles/pubmed-40087245-wakeful-rest-memory-consolidation-meta-analysis.md, raw/articles/pubmed-21073136-delayed-recall-screening-mci.md, raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md, raw/articles/pubmed-34861421-blinding-assessment-antidepressant-rcts-meta-analysis.md, raw/articles/pubmed-35053802-blinding-in-tdcs-studies-end-of-study-guess-working-memory.md, raw/articles/pubmed-31228880-time-course-ineffective-sham-blinding-low-intensity-tdcs.md, raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md, raw/articles/pubmed-11502230-placebo-expectancy-glucose-cognition.md, raw/articles/pubmed-39579950-breaking-up-sitting-postprandial-glucose-regulation.md, raw/articles/pubmed-41522270-glucose-extremes-cognitive-function-type1-diabetes.md, raw/articles/pubmed-38733772-nocebo-expectations-topical-pain-relief.md, raw/articles/pubmed-41008346-auricular-ultrasonic-vagus-nerve-stimulation-blinding-effectiveness.md]
confidence: medium
---

# 30-Day Self-Study Template for Nonprescription Interventions

## Summary

This page turns the wiki's measurement layer into a conservative 30-day n-of-1 template for low-risk nonprescription interventions.

The template now treats blinding and expectancy as first-class measurements: condition guess, guess confidence, sensory leakage, activation, and withdrawal confounds are logged block-by-block before analysis.

The default design is deliberately boring:

- one intervention at a time,
- one pre-specified primary endpoint,
- a fixed sleep and caffeine schedule,
- a short run-in to absorb practice effects,
- randomized blocks rather than day-by-day improvisation,
- and a simple adverse-event log.

The goal is not to prove a universal enhancer. The goal is to make a small self-study interpretable enough that a future decision is based on evidence instead of vibes.

For device-adjacent studies, pair this template with [[device-parameter-worksheet-for-self-study-and-protocol-review]] so the protocol header is explicit before the daily log starts.

## Design Selection

This template is the default for a short, low-risk, single-person question with repeated blocks and manageable carry-over.

| Situation | Better default | Why |
|---|---|---|
| Low-risk intervention, fast onset, short washout | 30-day six-block n-of-1 | Repeated periods and a run-in are enough to see whether the effect repeats |
| Two-condition question with a plausible carry-over model | Two-arm crossover or aggregated N-of-1 series | Recent simulation work suggests aggregation can reach power earlier in some settings.^[raw/articles/pubmed-40071868-two-arm-crossover-rct-vs-meta-analysis-of-n-of-1-studies.md] |
| Slow onset, long washout, or titration pressure | Longer N-of-1 blocks | There is no fixed maximum period length; half-life and time-to-efficacy should drive the period.^[raw/articles/pubmed-40016097-n-of-1-tests-general-practice-pharmacological-considerations.md] |

If the candidate cannot fit the block length without turning the analysis into a carry-over problem, the answer is not to compress the blocks. The answer is to lengthen the design or choose a different question.

## Validity Controls

The detailed methods update and control checklist now live in [[30-day-self-study-validity-controls]]. Use that page before day 1 to check practice effects, sleep, caffeine, expectancy, blinding, meal state, repeated-test QC, and safety stop rules.

## Recommended 30-Day Structure

| Phase | Days | Purpose | Default rule |
|---|---|---|---|
| Run-in | 1-6 | Absorb practice effects and stabilize sleep/caffeine habits | Do not interpret these days as efficacy data. |
| Randomized blocks | 7-30 | Compare intervention vs control in a balanced order | Use six 4-day blocks with a pre-generated random order. |

### Why six 4-day blocks

- It matches the current n-of-1 literature's tendency toward several periods rather than one long before/after comparison.^[raw/articles/pubmed-38622638-methodological-review-randomized-n-of-1-trials.md]
- It keeps the full protocol inside 30 days without turning every day into a fresh randomization problem.
- It gives enough repetition to see whether a result repeats or only appears once.

If the intervention has obvious carryover or slow onset, extend the study rather than pretending a 4-day block can solve it.

## Template Rules

1. Test one intervention only.
2. Pre-generate a balanced random order before day 1 and do not change it mid-study.
3. Keep wake time, bedtime, and caffeine timing as stable as possible.
4. Declare the challenge state with [[state-challenge-matrix-for-cognition-interventions]] before choosing the endpoint.
5. Use a single primary endpoint from [[endpoint-dictionary-for-cognition-interventions]].
6. Keep secondary measures fixed and short: brief PVT, one working-memory task, one delayed-recall probe, sparse EMA, and sleep tracking from [[practical-cognitive-measurement-stack]].
7. Record adverse effects daily.
8. Do not add new supplements, new exercise blocks, travel, or sleep restriction unless the protocol is explicitly about those factors.
9. Before choosing the candidate, check [[sham-control-feasibility-for-cognition-interventions]] so you do not label an open-label intervention as sham-controlled.
10. Before interpreting the result, run [[blinding-failure-detector-for-self-study-and-sham-capable-protocols]] and inspect the guess/confidence/sensory-leakage fields.
11. Record blinding and expectancy data at block end so guess rate, sensory leakage, activation, and withdrawal confounds are visible before analysis.
12. Build in a warm-up or familiarization phase for any repeated cognitive task that is prone to practice effects, and do not count those sessions as efficacy data.

## Endpoint Selection

Pick the primary endpoint before starting.

| If the intervention mainly targets... | Primary endpoint to pre-register |
|---|---|
| Alertness or sleep pressure | Arousal via brief PVT |
| Same-day output under load | Throughput |
| Acquisition across repeated sessions | Learning slope |
| Delayed memory | Consolidation |
| Untrained-task benefit | Transfer |
| Resistance to sleep, stress, or metabolic strain | Resilience |

If the intervention is only expected to make you feel better, do not upgrade that to a cognition claim unless the objective endpoint moves too.

## State-Challenge Selection Module

Choose the challenge state before you lock the endpoint. If the state is not explicit, the endpoint choice is probably wrong.

| Challenge state | Endpoint family to prioritize | Typical claim you can make | Common failure mode |
|---|---|---|---|
| Rested baseline | Throughput, transfer, learning slope | Broad enhancement or task-specific improvement | Practice effects or comparator drift |
| Sleep loss / sleep pressure | Arousal, resilience | Rescue of vigilance or performance under fatigue | Benefit disappears when sleep normalizes |
| Acute stress / autonomic load | Arousal, resilience, autonomic markers | Stress-buffering or state modulation | Physiology moves without cognition win |
| Postprandial / dysglycemic load | Resilience, throughput, metabolic markers | Better performance under fed or glucose-challenged conditions | Fed and fasted days are not comparable |
| Exercise / heat fatigue | Resilience, fatigue preservation | Better preservation under exertion | Hydration and workload confounds |
| Perioperative / inflammatory recovery | Consolidation, resilience, delayed follow-up | Recovery aid or delirium / POD rescue | Recovery cohort does not generalize to healthy adults |
| Injury recovery / neurologic deficit | Consolidation, resilience, transfer | Rehabilitation or deficit rescue | Recovery signal is misread as baseline enhancement |

- If more than one label fits, name the manipulated state first and the secondary state second.
- If the state is uncertain, postpone endpoint ranking until the protocol can state it explicitly.
- Do not compare a rescue-state result to a rested-baseline result without naming the mismatch.

## Controls That Matter Most

Use [[30-day-self-study-validity-controls]] for the full checklist. The short rule is to stabilize sleep, treat caffeine as part of the protocol, warm up repeated tests, log task order and alternate forms, and stop early for meaningful adverse effects.

## Analysis Rules

1. Lock the endpoint and analysis plan before starting.
2. Compare block-level averages or medians, not one-off daily spikes.
3. Plot outcome, sleep, and caffeine on the same timeline before concluding anything.
4. Ask whether any apparent gain could be withdrawal reversal, practice effect, or a sleep shift.
5. Ask whether any apparent gain could be driven by caffeine timing, meal timing, nicotine abstinence, or active-comparator carryover.
6. If the study cannot survive a sensitivity analysis that removes the worst-sleep days, the result is fragile.
7. If the endpoint still drifts after warm-up or alternate forms, set `unstable_for_short_block = yes` and move the study to a longer design or a different endpoint.

## Spreadsheet Schema

The workbook schema now lives in [[30-day-self-study-workbook-schema]] so this template stays readable. Use that child page for sheet-level fields covering `Protocol`, `Daily_Log`, `Adverse_Events`, `Attribution_Review`, `Blinding_Review`, and `Analysis`.

## Open Contradictions

- Four-day blocks are practical, but some interventions need longer exposure or washout than a 30-day design can honestly provide.
- Randomization improves interpretability, but predictability can still creep in if the schedule is too simple.
- A short PVT is feasible, but the shortest versions are still less stable than the full reference task.
- Caffeine is a useful comparator and a major confounder at the same time.
- Sparse EMA helps adherence, but dense enough context is still needed to explain a drift in results.
- The blinding module is only useful if it stays separate from the efficacy outcome; otherwise expectancy and performance get mixed again.

## Related Pages

- [[practical-cognitive-measurement-stack]]
- [[endpoint-dictionary-for-cognition-interventions]]
- [[blinding-failure-detector-for-self-study-and-sham-capable-protocols]]
- [[active-comparator-and-caffeine-scheduling-confound-audit]]
- [[stack-attribution-diary-for-self-study-and-n-of-1-protocols]]
- [[device-parameter-worksheet-for-self-study-and-protocol-review]]
- [[30-day-self-study-validity-controls]]
- [[30-day-self-study-workbook-schema]]
- [[healthy-adult-cognition-signals]]
- [[washout-durability-for-cognition-interventions]]
- `IDEAS.md`
- `TODO.md`

## Actionable Wiki Updates

- Add this page to `index.md` under Queries.
- Cross-link this page from [[practical-cognitive-measurement-stack]] and [[endpoint-dictionary-for-cognition-interventions]] so the measurement language stays synced.
- Cross-link this page from [[stack-attribution-diary-for-self-study-and-n-of-1-protocols]] so adverse-event attribution has its own review layer.
- Use this as the default template reference for `PR-01` and the logging schema reference for `PR-05` in `TODO.md`.
- Keep [[30-day-self-study-workbook-schema]] aligned with [[practical-cognitive-measurement-stack]] so every field maps to an actual measure or state marker.
- Route device-adjacent protocols through [[device-parameter-worksheet-for-self-study-and-protocol-review]] before the daily log begins.
- When a future intervention page needs an n-of-1 example, link back here instead of rewriting the protocol from scratch.

## Sources

- `raw/articles/pubmed-2297206-n-of-1-randomized-controlled-trial-clinical-usefulness.md`
- `raw/articles/pubmed-30124759-n-of-1-randomized-intervention-trials-health-psychology-review-critique.md`
- `raw/articles/pubmed-38622638-methodological-review-randomized-n-of-1-trials.md`
- `raw/articles/pubmed-20846444-practice-effects-frequent-repetitive-cognitive-testing.md`
- `raw/articles/pubmed-16840238-practice-effects-cogstate-battery-test-retest-intervals.md`
- `raw/articles/pubmed-25994156-written-symbol-digit-modalities-test-alternate-forms-practice-effects.md`
- `raw/articles/pubmed-29126328-repeated-administration-effects-psychomotor-vigilance-test.md`
- `raw/articles/pubmed-40844017-short-term-practice-effects-cognition-daily-functioning-older-adults.md`
- `raw/articles/pubmed-40911708-practice-effects-digital-cognitive-assessment-tools.md`
- `raw/articles/pubmed-22992376-caffeine-attention-withdrawn-consumers.md`
- `raw/articles/pubmed-35791877-repeated-low-dose-caffeine-sleep-deprivation-cognition.md`
- `raw/articles/pubmed-38830861-repeated-caffeine-intake-sleep-restriction-gm.md`
- `raw/articles/pubmed-15354700-validity-pvt-less-than-10-min.md`
- `raw/articles/pubmed-17190720-shorter-pvt-substitute.md`
- `raw/articles/pubmed-39749768-smart-ema-completion-meta-analysis.md`
- `raw/articles/pubmed-40087245-wakeful-rest-memory-consolidation-meta-analysis.md`
- `raw/articles/pubmed-21073136-delayed-recall-screening-mci.md`
