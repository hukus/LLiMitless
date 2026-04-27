---
title: Practical Cognitive Measurement Stack
created: 2026-04-27
updated: 2026-05-03
type: query
tags: [cognition, performance, protocol, biomarker, safety, comparison]
sources: [raw/articles/pubmed-15354700-validity-pvt-less-than-10-min.md, raw/articles/pubmed-17190720-shorter-pvt-substitute.md, raw/articles/pubmed-19767297-n-back-validity.md, raw/articles/pubmed-20804238-task-switching-review.md, raw/articles/pubmed-21073136-delayed-recall-screening-mci.md, raw/articles/pubmed-20846444-practice-effects-frequent-repetitive-cognitive-testing.md, raw/articles/pubmed-16840238-practice-effects-cogstate-battery-test-retest-intervals.md, raw/articles/pubmed-25994156-written-symbol-digit-modalities-test-alternate-forms-practice-effects.md, raw/articles/pubmed-29126328-repeated-administration-effects-psychomotor-vigilance-test.md, raw/articles/pubmed-39749768-smart-ema-completion-meta-analysis.md, raw/articles/bmc-digital-health-2025-smartphone-cognitive-testing-ema-insomnia.md, raw/articles/pubmed-30706234-portable-hrv-meta-analysis.md, raw/articles/pubmed-29991438-aasm-actigraphy-review.md, raw/articles/pubmed-26784127-cgm-review.md, raw/articles/pubmed-40844017-short-term-practice-effects-cognition-daily-functioning-older-adults.md, raw/articles/pubmed-40911708-practice-effects-digital-cognitive-assessment-tools.md, raw/articles/pubmed-41999492-sleep-deprivation-pvt-visuomotor-tracking.md, raw/articles/pubmed-41309064-hrv-cv-digital-biomarker-behavior.md]
confidence: medium
---

# Practical Cognitive Measurement Stack

## Summary

The wiki has enough evidence to define a compact research battery that separates arousal, working memory, executive control, consolidation, and state markers.

Use [[endpoint-dictionary-for-cognition-interventions]] as the naming layer so the measure selected always matches the endpoint being claimed.

Use [[state-challenge-matrix-for-cognition-interventions]] as the state layer so the battery is interpreted in the right rescue context. A brief PVT can mean sleep-loss rescue, stress rescue, or ordinary wakefulness depending on the challenge state.

Best-supported core:
- brief PVT for vigilance and sleep-pressure sensitivity.
- n-back for working memory.
- task switching for executive flexibility.
- delayed recall for consolidation.
- sparse smartphone EMA for subjective state and adherence context.
- objective sleep tracking and resting HRV as state markers.
- optional CGM when metabolic state is part of the hypothesis.

The key design principle is to keep each measure tied to a different failure mode so one score does not masquerade as "overall cognition."

## What Changed Since 2024

- EMA completion-rate evidence is now strong enough to justify sparse, low-burden smartphone prompts rather than dense sampling.^[raw/articles/pubmed-39749768-smart-ema-completion-meta-analysis.md]
- A 2025 insomnia feasibility study shows that smartphone cognitive testing plus EMA can work in older adults, but the measurement layer still needs guardrails against strategic responding and technical drop-off.^[raw/articles/bmc-digital-health-2025-smartphone-cognitive-testing-ema-insomnia.md]
- The actigraphy literature still supports objective sleep-duration and timing tracking, but not sleep staging as a substitute for PSG.^[raw/articles/pubmed-29991438-aasm-actigraphy-review.md]
- The short-PVT literature remains the practical anchor for repeated vigilance testing in field-style batteries.^[raw/articles/pubmed-15354700-validity-pvt-less-than-10-min.md]^[raw/articles/pubmed-17190720-shorter-pvt-substitute.md]
- Newer practice-effect papers show that repeated testing still moves scores on memory, functional, and digital tasks, so the stack needs an explicit warm-up and alternate-form rule rather than assuming stability from repetition.^[raw/articles/pubmed-40844017-short-term-practice-effects-cognition-daily-functioning-older-adults.md]^[raw/articles/pubmed-40911708-practice-effects-digital-cognitive-assessment-tools.md]^[raw/articles/pubmed-25994156-written-symbol-digit-modalities-test-alternate-forms-practice-effects.md]
- Even short PVTs accumulate administration effects, so the vigilance anchor should be warmed up before it is treated as a baseline endpoint.^[raw/articles/pubmed-29126328-repeated-administration-effects-psychomotor-vigilance-test.md]
- Sleep-loss comparison work still favors PVT over continuous visuomotor tracking for overall sensitivity, so tracking is a supplementary resilience readout rather than a replacement for the vigilance anchor.^[raw/articles/pubmed-41999492-sleep-deprivation-pvt-visuomotor-tracking.md]
- Portable HRV remains useful, but nocturnal wearable biomarker work suggests that HRV variability becomes more defensible when standardized and accumulated over multiple nights instead of pulled from a single opportunistic reading.^[raw/articles/pubmed-30706234-portable-hrv-meta-analysis.md]^[raw/articles/pubmed-41309064-hrv-cv-digital-biomarker-behavior.md]

## Recommended Stack

| Layer | Measure | Why it is in the stack | Notes |
|---|---|---|---|
| Arousal | Brief PVT | Highest signal-to-burden ratio for sleep loss and vigilance degradation. | Prefer a 3-5 minute format if repeated daily; keep it first and fixed if sleep loss is the challenge. |
| Working memory | n-back | Compact computer task with established convergent validity. | Use a fixed level and do not over-interpret transfer. |
| Executive control | Task switching | Captures set-shifting and control interference. | Keep cueing and block structure stable; do not swap paradigms mid-block. |
| Consolidation | Delayed recall | Detects memory retention rather than same-day throughput. | Standardize encoding and delay length. |
| Subjective state | EMA mood/fatigue/stress | Context for drift, adherence, and responder phenotypes. | Keep prompts sparse to preserve completion; daily or twice-daily is usually enough. |
| Sleep state | Actigraphy or consumer wearable sleep timing | Tracks sleep duration, timing, and regularity. | Treat staging as secondary or exploratory. |
| Physiologic state | Morning resting HRV | Proxy for autonomic state and recovery load. | Standardize posture, timing, and breathing conditions; if you use nocturnal variability metrics, accumulate multiple nights before interpretation. |
| Metabolic state | CGM | Captures glycemic variability and rapid excursions. | Optional unless metabolism is part of the intervention model. |

## Minimal Daily Battery

If the goal is a daily battery under 12 minutes, the cleanest design is a morning core plus a split delayed-recall probe.

### Under-12-Minute Core

| Order | Measure | Target duration | Purpose | Implementation note |
|---|---|---|---|---|
| 1 | Brief PVT | 3-4 min | Arousal / vigilance | Keep the same device, same start time, and same instructions. |
| 2 | n-back | 2-3 min | Working memory | Fix the level and do not change difficulty mid-block. |
| 3 | Task switching | 2-3 min | Executive flexibility | Use one stable cue/block structure throughout the study. |
| 4 | Delayed recall probe | 1-2 min | Consolidation proxy | Run as a separate timed recall after a fixed delay; if possible, keep encoding standardized and the delay identical across days. |

That leaves the daily active testing time at roughly 8-11 minutes, depending on the PVT length and the exact task implementation.^[raw/articles/pubmed-15354700-validity-pvt-less-than-10-min.md]^[raw/articles/pubmed-17190720-shorter-pvt-substitute.md]^[raw/articles/pubmed-19767297-n-back-validity.md]^[raw/articles/pubmed-20804238-task-switching-review.md]^[raw/articles/pubmed-21073136-delayed-recall-screening-mci.md]

### Practical Rule For Delayed Recall

- If you need a strict same-day battery, treat the recall task as a short-delay consolidation proxy, not as a full overnight memory endpoint.
- If the research question is true consolidation, keep the recall as a separate session at a fixed delay or the next morning.
- Do not let the recall task drift in timing; the delay is part of the measure.

### Repeated-Testing QC

- Use alternate forms for recall and speed tasks whenever available, because the retest interval and form identity can materially change the size of the practice effect.
- Keep the within-session task order fixed and log it so order drift can be separated from intervention effect.
- Give each repeated task at least one familiarization run before interpreting change; if the task is still moving after that, mark it as unsuitable for a short-block primary endpoint.
- Treat digital batteries the same way as legacy batteries: stable retest intervals, alternate forms, and a warm-up phase still matter.
- If the endpoint is a delayed-recall probe, fix the encoding script and delay window, then keep them unchanged across all days in the block.

1. `PVT`, 2-5 minutes, first thing after waking or at a fixed morning time.
2. `n-back`, 2-5 minutes, same device and same difficulty level.
3. `Task switching`, 2-4 minutes, using one stable protocol.
4. `EMA`, 1-3 prompts per day, ultra-short mood/fatigue/sleepiness items.
5. `Resting HRV`, once daily in standardized conditions.
6. `Sleep summary`, from actigraphy or wearable, logged daily.
7. `Delayed recall`, 1 fixed probe per day or every few days, depending on burden.
8. `CGM`, optional continuous layer when metabolic hypotheses matter.

## Cadence Rules

- Keep primary endpoints fixed for at least one full block; do not swap tasks mid-study.
- Declare the challenge state first: rested baseline, sleep loss, acute stress, hypoxia, postprandial load, exercise / heat fatigue, perioperative recovery, or injury recovery.
- Separate same-day arousal from next-day learning or delayed recall.
- Use the same encoding schedule for every delayed-recall session.
- Collect objective sleep before interpreting cognitive drift.
- Do not compare a noisy EMA-heavy week against a sparse week without accounting for adherence.
- If a repeated task still shows strong drift after familiarization, downgrade it to a secondary readout or replace it with a more stable endpoint.
- If the intervention is being tested under sleep-loss challenge, keep PVT as the primary arousal endpoint and use tracking-style tasks only as supplementary readouts.

## Evidence Tiering

- Meta/systematic review: short PVT, EMA completion, actigraphy, CGM, HRV portability.
- Validation / construct validity: n-back, task switching, delayed recall battery, sleep-loss comparison of PVT versus tracking.
- Translation layer: the full stack assembled as a pragmatic self-study or small-n research battery is still a synthesis rather than a single validated instrument.

## Open Contradictions

- Shorter PVTs are practical, but very short versions can lose stability relative to the 10-minute reference.
- Wearable HRV is usable, but device and metric choices can alter accuracy.
- Actigraphy is excellent for sleep timing and duration, but weak as a sleep-staging substitute.
- n-back and task switching are useful, but each is a partial view of executive control rather than a whole-cognition measure.
- Delayed recall is the hardest task to keep inside a compact daily block because the delay has to stay fixed; if the delay drifts, the signal stops being comparable.
- Tracking-style tasks can detect sleep-loss degradation, but they do not replace PVT as the arousal anchor.

## Actionable Wiki Updates

- Add this page to `index.md` under Queries.
- Use this page as the endpoint backbone for `PR-03` and `PR-05` in `TODO.md`.
- Cross-link to [[endpoint-dictionary-for-cognition-interventions]] so endpoint labels and measures stay synchronized.
- Cross-link to [[state-challenge-matrix-for-cognition-interventions]] so the battery is interpreted inside the correct rescue state.
- Cross-link to [[30-day-self-study-template-for-nonprescription-interventions]] so the battery is easy to place inside a real protocol.
- Treat the spreadsheet schema in [[30-day-self-study-template-for-nonprescription-interventions]] as the logging wrapper for this battery.
- When new intervention pages are added, link them to this measurement stack so outcomes stay comparable.

## Sources

- `raw/articles/pubmed-15354700-validity-pvt-less-than-10-min.md`
- `raw/articles/pubmed-17190720-shorter-pvt-substitute.md`
- `raw/articles/pubmed-19767297-n-back-validity.md`
- `raw/articles/pubmed-20804238-task-switching-review.md`
- `raw/articles/pubmed-21073136-delayed-recall-screening-mci.md`
- `raw/articles/pubmed-20846444-practice-effects-frequent-repetitive-cognitive-testing.md`
- `raw/articles/pubmed-16840238-practice-effects-cogstate-battery-test-retest-intervals.md`
- `raw/articles/pubmed-25994156-written-symbol-digit-modalities-test-alternate-forms-practice-effects.md`
- `raw/articles/pubmed-29126328-repeated-administration-effects-psychomotor-vigilance-test.md`
- `raw/articles/pubmed-39749768-smart-ema-completion-meta-analysis.md`
- `raw/articles/bmc-digital-health-2025-smartphone-cognitive-testing-ema-insomnia.md`
- `raw/articles/pubmed-30706234-portable-hrv-meta-analysis.md`
- `raw/articles/pubmed-29991438-aasm-actigraphy-review.md`
- `raw/articles/pubmed-26784127-cgm-review.md`
