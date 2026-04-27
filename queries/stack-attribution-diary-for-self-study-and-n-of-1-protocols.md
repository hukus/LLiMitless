---
title: Stack Attribution Diary for Self-Study and N-of-1 Protocols
created: 2026-04-28
updated: 2026-05-03
type: query
tags: [cognition, protocol, safety, comparison, controversy, sleep]
sources: [raw/articles/pubmed-449002-adverse-drug-reactions-operational-assessment.md, raw/articles/pubmed-7249508-adverse-drug-reactions-probability-scale.md, raw/articles/who-causality-assessment-2013.md, raw/articles/pubmed-2297206-n-of-1-randomized-controlled-trial-clinical-usefulness.md, raw/articles/pubmed-38622638-methodological-review-randomized-n-of-1-trials.md, raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md, raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md, raw/articles/pubmed-30214966-tdcs-tacs-adverse-events-review.md, raw/articles/pubmed-40984126-sleep-extension-cognitive-performance-military-aged-adults.md]
confidence: medium
---

# Stack Attribution Diary for Self-Study and N-of-1 Protocols

## Summary

This page turns the wiki's adverse-event and blinding logic into a dedicated attribution diary.

The purpose is simple: if a stack goes wrong, the most useful question is usually not "was there an adverse event?" but "which change, at what time, under what state, and with what competing causes?"

The diary is meant to sit between the daily log and the final interpretation. It captures the evidence that causality tools want to see: onset timing, dechallenge, rechallenge, alternative causes, objective state markers, and whether the symptom coincided with a sleep or mood shift.

The main design rule is to keep attribution separate from outcome. A person can feel activated, sleep worse, or have a higher heart rate without that automatically proving benefit or harm on the cognitive endpoint.

## What Changed Since 2024

- Recent blinding and expectancy work makes it more important to keep raw guess data, state shifts, and symptom timing separate instead of folding them into a generic "worked" or "did not work" label.^[raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md]^[raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md]
- Newer self-study and n-of-1 guidance still favors multiple periods and explicit logging rather than one long before/after note, which supports a diary layer rather than free-text memory.^[raw/articles/pubmed-2297206-n-of-1-randomized-controlled-trial-clinical-usefulness.md]^[raw/articles/pubmed-38622638-methodological-review-randomized-n-of-1-trials.md]
- Sleep remains one of the fastest ways to lose interpretability. If a stack changes next-night sleep, the apparent effect may be mediated or confounded by the sleep shift rather than by the intervention itself.^[raw/articles/pubmed-40984126-sleep-extension-cognitive-performance-military-aged-adults.md]
- Device and wakefulness literature keep showing mild activation, rare mood effects, and state-dependent tolerability, which is exactly why mood, HR, BP, and sleep belong in the attribution layer.^[raw/articles/pubmed-30214966-tdcs-tacs-adverse-events-review.md]
- The older causality-assessment literature still gives the right structure for self-study: timing, alternative causes, dechallenge, and rechallenge are the core fields, even if no single scoring system is universal.^[raw/articles/pubmed-449002-adverse-drug-reactions-operational-assessment.md]^[raw/articles/pubmed-7249508-adverse-drug-reactions-probability-scale.md]^[raw/articles/who-causality-assessment-2013.md]

## Why This Exists

Most stack failures are attribution failures first.

If several things changed at once, the diary should say so explicitly. If the active condition relieved a withdrawal or sleep deficit, the diary should say so explicitly. If the event improved when the variable was stopped and returned when it was restarted, the diary should say so explicitly.

That is the practical lesson from the causality-assessment literature: the record must preserve enough structure for a later reviewer to decide whether the event was probably caused by the stack, merely associated with it, or better explained by something else.

## Recommended Diary Layers

| Layer | What it records | Why it matters |
|---|---|---|
| Daily change log | Which variables changed today, and whether more than one new variable changed at once | Prevents a multi-change stack from masquerading as a single intervention |
| Event log | Symptom, timing, severity, duration, and immediate action | Keeps the raw adverse-event record separate from later interpretation |
| Attribution review | Dechallenge, rechallenge, next-night sleep, mood activation, BP/HR, and alternative causes | Gives the causal review enough structure to classify the event conservatively |
| State markers | Sleep, caffeine, HRV, meals, exercise, and baseline mood | Helps distinguish a true drug/device effect from a state shift |

## Suggested Fields

### Daily change log

- `new_variables_changed_count`
- `new_variables_note`
- `dose_changed`
- `timing_changed`
- `sleep_schedule_changed`

### Event log

- `event_id`
- `date`
- `time`
- `symptom`
- `severity`
- `duration_h`
- `relation_to_dose`
- `action_taken`
- `resolved`
- `comment`

### Attribution review

- `event_id`
- `suspected_driver`
- `onset_hours_from_change`
- `dechallenge_action`
- `dechallenge_result`
- `rechallenge_action`
- `rechallenge_result`
- `next_night_sleep_h`
- `next_night_sleep_latency_min`
- `next_night_awakenings`
- `mood_activation`
- `bp_systolic`
- `bp_diastolic`
- `hr_bpm`
- `other_new_variables_changed_count`
- `alternative_causes`
- `causality_tier`
- `attribution_note`

## Practical Rules

1. Record the change before the symptom, not after it.
2. If more than one new variable changed, mark attribution confidence as low.
3. Use dechallenge first when the symptom is mild and the protocol allows it.
4. Do not force a rechallenge if the symptom is severe or safety-relevant.
5. Treat next-night sleep as part of the causal story, not just background data.
6. Treat mood activation, palpitations, blood-pressure rise, and insomnia as state-shift signals, not as proof of benefit.
7. If the event only appears in the context of caffeine withdrawal, sleep debt, or another deficit, record that as the likely competing explanation.

## Open Contradictions

- A symptom can be real even when causality is unclear.
- A positive dechallenge does not prove the stack caused the event; it only strengthens the case.
- A rechallenge is informative but may be unethical or unsafe, so the diary must work even when rechallenge is absent.
- The same symptom can be a side effect, a nocebo response, or a useful state marker depending on context.

## Related Pages

- [[30-day-self-study-template-for-nonprescription-interventions]]
- [[blinding-failure-detector-for-self-study-and-sham-capable-protocols]]
- [[self-experimentation-stop-rules]]
- [[active-comparator-and-caffeine-scheduling-confound-audit]]
- [[safety-interaction-matrix-for-multi-modal-stacks]]
- [[practical-cognitive-measurement-stack]]

## Actionable Wiki Updates

- Add this page to `index.md` under Queries.
- Cross-link this page from [[30-day-self-study-template-for-nonprescription-interventions]] so the attribution layer is visible in the template.
- Use this page to extend the daily log and adverse-event review fields in the self-study template.
- Keep the attribution diary separate from the blinding review so causal review and guess accuracy do not get mixed together.

## Sources

- raw/articles/pubmed-449002-adverse-drug-reactions-operational-assessment.md
- raw/articles/pubmed-7249508-adverse-drug-reactions-probability-scale.md
- raw/articles/who-causality-assessment-2013.md
- raw/articles/pubmed-2297206-n-of-1-randomized-controlled-trial-clinical-usefulness.md
- raw/articles/pubmed-38622638-methodological-review-randomized-n-of-1-trials.md
- raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md
- raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md
- raw/articles/pubmed-30214966-tdcs-tacs-adverse-events-review.md
- raw/articles/pubmed-40984126-sleep-extension-cognitive-performance-military-aged-adults.md
