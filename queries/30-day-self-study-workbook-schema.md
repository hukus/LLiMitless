---
title: 30-Day Self-Study Workbook Schema
created: 2026-05-03
updated: 2026-05-03
type: query
tags: [cognition, performance, protocol, safety, comparison]
sources: [raw/articles/pubmed-38622638-methodological-review-randomized-n-of-1-trials.md, raw/articles/pubmed-40016097-n-of-1-tests-general-practice-pharmacological-considerations.md, raw/articles/pubmed-40585136-practice-effects-persist-over-two-decades-cognitive-testing.md, raw/articles/pubmed-20846444-practice-effects-frequent-repetitive-cognitive-testing.md, raw/articles/pubmed-29126328-repeated-administration-effects-psychomotor-vigilance-test.md, raw/articles/pubmed-22992376-caffeine-attention-withdrawn-consumers.md, raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md, raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md, raw/articles/pubmed-41008346-auricular-ultrasonic-vagus-nerve-stimulation-blinding-effectiveness.md]
confidence: medium
---

# 30-Day Self-Study Workbook Schema

This page holds the spreadsheet schema for [[30-day-self-study-template-for-nonprescription-interventions]]. Keep it aligned with [[practical-cognitive-measurement-stack]], [[endpoint-dictionary-for-cognition-interventions]], [[30-day-self-study-validity-controls]], and [[stack-attribution-diary-for-self-study-and-n-of-1-protocols]].

## Sheet 1: `Protocol`

One row only. Treat this as the immutable study header.

| Field | Type | Notes |
|---|---|---|
| `study_id` | text | Short unique label for the experiment. |
| `intervention_name` | text | What is being tested. |
| `comparator` | text | Placebo, baseline, or alternate condition. |
| `randomization_seed` | text / number | Optional, but useful if blocks are randomized. |
| `challenge_state` | text | One canonical label from [[state-challenge-matrix-for-cognition-interventions]]. |
| `challenge_state_note` | text | Secondary state or short rationale if more than one state applies. |
| `primary_endpoint` | text | One endpoint from [[endpoint-dictionary-for-cognition-interventions]]. |
| `secondary_endpoints` | text | Comma-separated list or JSON-style note. |
| `planned_start_date` | date | ISO format. |
| `planned_end_date` | date | ISO format. |
| `block_length_days` | integer | The randomized block length, if applicable. |
| `washout_days` | integer | Required washout if the intervention carries over. |
| `sleep_window_target` | text | Expected bedtime / wake-time window. |
| `caffeine_rule` | text | Fixed dose, cap, or abstinence rule. |
| `caffeine_window` | text | Fixed intake window relative to wake time and first meal. |
| `abstinence_run_in_days` | integer | Run-in days used to stabilize baseline intake before analysis. |
| `familiarization_runs` | integer | Minimum warm-up sessions before the endpoint counts as analytic. |
| `alternate_form_rule` | text | Whether alternate forms are required, preferred, or unavailable. |
| `fixed_delay_window_min` | integer | Fixed delay for delayed-recall probes. |
| `test_order_rule` | text | Fixed within-session task order or other order rule. |
| `withdrawal_scale` | text | Short ordinal scale used for caffeine-withdrawal symptoms. |
| `balanced_placebo_note` | text | Separate told-condition from actual condition when used. |
| `meal_glucose_rule` | text | Fixed fasting, first-meal, and postprandial timing rule. |
| `stop_flags` | text | Short list of stop conditions from the safety page. |

## Sheet 2: `Daily_Log`

One row per calendar day. Keep this sheet flat and complete; avoid free-text where a coded field will do.

| Field | Type | Notes |
|---|---|---|
| `date` | date | Primary row key. |
| `block_id` | text | Randomization block or study phase. |
| `condition` | text | A/B, active/control, or named condition. |
| `planned_dose` | number | Intervention dose or session count. |
| `dose_unit` | text | mg, puffs, minutes, mA, sessions, etc. |
| `dose_taken` | number | Actual dose if different from planned. |
| `dose_taken_unit` | text | Keep units explicit. |
| `dose_time` | time | Time the intervention actually started. |
| `dose_end_time` | time | End time if the intervention has duration. |
| `device_name` | text | Device or product identifier. |
| `device_settings` | text | Short coded summary of the active settings. |
| `sleep_duration_h` | number | Total sleep in hours. |
| `sleep_onset` | time | Optional if available. |
| `wake_time` | time | Optional if available. |
| `sleep_quality` | number / text | Keep the scale fixed across the study. |
| `hrv_rmssd` | number | Morning resting HRV if used. |
| `hrv_time` | time | When HRV was collected. |
| `caffeine_total_mg` | number | Total caffeine for the day. |
| `caffeine_last_time` | time | Last caffeine intake. |
| `meal_timing` | text | Simple anchors such as first meal / last meal / fasting window. |
| `caffeine_window_start` | time | Start of the fixed caffeine window. |
| `caffeine_window_end` | time | End of the fixed caffeine window. |
| `withdrawal_symptom_score` | number | Fixed caffeine-withdrawal severity score. |
| `withdrawal_symptom_notes` | text | Short note on headache, fatigue, craving, or irritability. |
| `test_order` | text | Logged order of tasks in the session. |
| `form_id` | text | Alternate form identifier for repeated tasks. |
| `familiarization_phase` | 0/1 | Mark `1` if the row is still warm-up, not analytic. |
| `first_meal_time` | time | First meal anchor for the day. |
| `fasting_window_h` | number | Length of the fasting window before the primary test. |
| `postprandial_test_time` | time | Time of any meal-state or glucose-sensitive test. |
| `exercise_type` | text | None, walking, strength, cardio, etc. |
| `exercise_duration_min` | number | Minutes of exercise. |
| `exercise_intensity` | text / number | RPE, zone, or simple low/medium/high code. |
| `new_variables_changed_count` | integer | Count of new stack variables introduced or removed that day. |
| `new_variables_note` | text | Short note on which variables changed at once. |
| `pvt_score` | number | Raw or normalized vigilance score. |
| `n_back_score` | number | Primary working-memory score. |
| `task_switch_score` | number | Executive-control score. |
| `delayed_recall_score` | number | Consolidation probe. |
| `ema_mood` | number | Use a fixed scale. |
| `ema_fatigue` | number | Use a fixed scale. |
| `ema_stress` | number | Use a fixed scale. |
| `adverse_event_count` | integer | Count of events that day. |
| `stop_flag` | 0/1 | Mark `1` if a stop rule was triggered. |
| `delay_window_min` | number | Actual delay used for the recall probe that day. |
| `qc_issue_flag` | 0/1 | Mark `1` if the day had a timing, form, or order QC issue. |
| `notes` | text | Keep short; move detail to `Adverse_Events` and `Attribution_Review`. |

## Sheet 3: `Adverse_Events`

One row per event. This is where the safety detail belongs, not in the daily log.

| Field | Type | Notes |
|---|---|---|
| `date` | date | When the event was noticed. |
| `time` | time | Approximate onset if known. |
| `symptom` | text | Headache, insomnia, irritability, visual symptom, etc. |
| `system` | text | Sleep, mood, cardiovascular, neurologic, GI, allergic, other. |
| `severity` | integer | Use a fixed ordinal scale, usually 0-3 or 0-4. |
| `duration_h` | number | Approximate duration. |
| `relation_to_dose` | text | After dose, during wear-off, unrelated, unknown. |
| `action_taken` | text | None, dose reduced, paused, stopped, clinician contacted. |
| `resolved` | 0/1 | Whether the event cleared. |
| `comment` | text | Short note only. |

## Sheet 4: `Attribution_Review`

One row per adverse event or attribution question. This is the causal diary layer.

| Field | Type | Notes |
|---|---|---|
| `event_id` | text | Links to the event row in `Adverse_Events`. |
| `suspected_driver` | text | The intervention, comparator, or change most likely involved. |
| `onset_hours_from_change` | number | Best estimate of time from change to symptom onset. |
| `dechallenge_action` | text | Stopped, reduced, delayed, or unchanged. |
| `dechallenge_result` | text | Better, worse, unchanged, unknown. |
| `rechallenge_action` | text | Restarted, reintroduced, or not attempted. |
| `rechallenge_result` | text | Better, worse, unchanged, unknown. |
| `next_night_sleep_h` | number | Sleep duration after the event. |
| `next_night_sleep_latency_min` | number | Time to fall asleep after the event. |
| `next_night_awakenings` | number | Count of awakenings after the event. |
| `mood_activation` | text | Calm, neutral, activated, irritable, anxious, sped up, or depressed. |
| `bp_systolic` | number | Post-event or next-morning systolic blood pressure. |
| `bp_diastolic` | number | Post-event or next-morning diastolic blood pressure. |
| `hr_bpm` | number | Post-event or next-morning heart rate. |
| `other_new_variables_changed_count` | integer | How many other variables changed around the same time. |
| `alternative_causes` | text | Sleep debt, caffeine withdrawal, illness, alcohol, stress, meals, etc. |
| `causality_tier` | text | Possible, probable, doubtful, or custom note. |
| `attribution_note` | text | Short causal summary without overexplaining. |

## Sheet 5: `Blinding_Review`

One row per randomized block. Complete this after the block ends, before looking at the outcome.

| Field | Type | Notes |
|---|---|---|
| `block_id` | text | Links back to the randomized block. |
| `condition_guess` | text | Active, control, or uncertain. |
| `guess_confidence` | integer | Use one fixed scale for the whole study. |
| `guess_reason` | text | Sensation, timing, mood, noise, taste, etc. |
| `sensory_leakage` | text | Tingling, warmth, odor, pressure, redness, or similar cues. |
| `activation` | text | Alerting, sedating, anxious, irritable, insomniac, or neutral. |
| `withdrawal_confound` | text | Whether the active block may just be relieving a deficit. |
| `operator_guess` | text | If someone else administered the block. |
| `operator_confidence` | integer | Optional, on the same scale as `guess_confidence`. |
| `blinding_note` | text | Short summary of why the block felt blind or not. |
| `unstable_for_short_block` | 0/1 | Mark `1` if the endpoint never stabilized enough for short-block inference. |
| `stability_note` | text | Why the endpoint was or was not suitable for a 30-day block. |

## Sheet 6: `Analysis`

Optional, but useful if you want formulas separated from raw logging.

| Field | Type | Notes |
|---|---|---|
| `block_mean_primary` | formula | Block-level average for the primary endpoint. |
| `rolling_sleep_7d` | formula | Short rolling sleep summary. |
| `adherence_pct` | formula | Share of planned doses actually taken. |
| `ae_rate` | formula | Adverse events per day or per block. |
| `guess_rate` | formula | Share of blocks guessed correctly. |
| `mean_guess_confidence` | formula | Average confidence in the guess. |
| `leakage_flag_count` | formula | Count of blocks with sensory leakage or activation. |
| `z_primary` | formula | Normalized endpoint score if you standardize within-person. |

## Coding Rules

- Use ISO dates and 24-hour times.
- Keep units in separate columns, not inside the numeric field.
- Prefer blank cells over `0` for missing data.
- Use `0/1` for stop flags and other binary fields.
- Keep raw values and derived values on separate sheets.
- Treat the blinding sheet as a measurement layer, not a verdict. A correct guess, wrong guess, or high confidence can all be informative.
- If a scale changes mid-study, restart the study or treat the run as non-comparable.
