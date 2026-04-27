---
title: Blinding-Failure Detector for Self-Study and Sham-Capable Protocols
created: 2026-04-28
updated: 2026-04-29
type: concept
tags: [cognition, protocol, safety, controversy, comparison]
sources: [raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md, raw/articles/pubmed-34861421-blinding-assessment-antidepressant-rcts-meta-analysis.md, raw/articles/pubmed-35053802-blinding-in-tdcs-studies-end-of-study-guess-working-memory.md, raw/articles/pubmed-31228880-time-course-ineffective-sham-blinding-low-intensity-tdcs.md, raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md, raw/articles/pubmed-11502230-placebo-expectancy-glucose-cognition.md, raw/articles/pubmed-38733772-nocebo-expectations-topical-pain-relief.md, raw/articles/pubmed-41008346-auricular-ultrasonic-vagus-nerve-stimulation-blinding-effectiveness.md, raw/articles/pubmed-39124651-taVNS-autonomic-function.md, raw/articles/pubmed-39423445-transcranial-photobiomodulation-cognition-bdnf.md, raw/articles/pubmed-40939031-tpbm-mci-ad-sham-controlled.md]
confidence: medium
---

# Blinding-Failure Detector for Self-Study and Sham-Capable Protocols

This page is a workflow, not a single statistic.

The goal is to decide whether a self-study or sham-capable protocol is actually blind enough to trust. That means tracking raw guess data, confidence, sensory leakage, withdrawal reversal, and activation side-channels instead of reducing the result to a generic `double blind` label.^[raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md]^[raw/articles/pubmed-34861421-blinding-assessment-antidepressant-rcts-meta-analysis.md]

The detector is most useful when paired with [[sham-control-feasibility-for-cognition-interventions]], [[active-sham-and-inertness-taxonomy]], and [[30-day-self-study-template-for-nonprescription-interventions]]. A protocol can be sham-capable in principle and still fail in practice because the active and control states feel different, last different lengths of time, or change withdrawal state rather than true performance.

## What Changed Since 2024

- Blinding measurement has become more explicit: recent work compares multiple blinding indices and emphasizes that they answer different questions, so raw guess data should be preserved rather than collapsed into a single label.^[raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md]
- Blinding failure is not hypothetical. A 2025 meta-analysis in antidepressant trials found blinding was rarely assessed and often unsuccessful when it was measured.^[raw/articles/pubmed-34861421-blinding-assessment-antidepressant-rcts-meta-analysis.md]
- In tDCS, above-chance sham guessing can appear quickly when sham timing is shorter than active timing, which makes duration itself a side-channel.^[raw/articles/pubmed-31228880-time-course-ineffective-sham-blinding-low-intensity-tdcs.md]
- The reverse caution also matters: correct end-of-study guesses do not automatically explain the cognitive outcome, so blinding assessment and outcome interpretation must stay separate.^[raw/articles/pubmed-35053802-blinding-in-tdcs-studies-end-of-study-guess-working-memory.md]
- Expectancy effects are strong enough to change cognition-linked readouts in balanced-placebo designs, including glucose and caffeine paradigms.^[raw/articles/pubmed-11502230-placebo-expectancy-glucose-cognition.md]^[raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md]
- Nocebo can amplify adverse events and blunt perceived benefit even when treatment assignment is unchanged, so tolerability logs need a belief context.^[raw/articles/pubmed-38733772-nocebo-expectations-topical-pain-relief.md]
- A well-matched sham device can still achieve high blinding, so the detector should not assume all neuromodulation is unblindable.^[raw/articles/pubmed-41008346-auricular-ultrasonic-vagus-nerve-stimulation-blinding-effectiveness.md]

## Detector Inputs

The detector should preserve raw fields rather than collapsing everything into a single blinding score. Different blinding indices answer different questions, so the safest workflow is to keep the underlying guess data and derive summaries later.^[raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md]

| Field | Why it is captured |
|---|---|
| `condition_guess` | Baseline blinding check for active vs control |
| `guess_confidence` | Distinguishes weak uncertainty from strong assignment detection |
| `guess_reason` | Identifies whether the leak is timing, sensation, mood, noise, taste, or something else |
| `operator_guess` | Catches cue leakage when the participant is not the only person who can see the condition |
| `sensory_leakage` | Makes cutaneous, auditory, or other perceptual leaks visible |
| `activation_side_channel` | Separates direct perception of the condition from state change after the condition |
| `withdrawal_confound` | Flags rescue effects that can look like enhancement |

## Failure Modes

| Failure mode | What it looks like | What to log | Why it matters |
|---|---|---|---|
| Guess above chance | Participants or raters reliably identify active vs sham | End-of-block guess, confidence, and reason for the guess | Above-chance guessing is the first sign that the blind is leaking.^[raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md]^[raw/articles/pubmed-34861421-blinding-assessment-antidepressant-rcts-meta-analysis.md] |
| Timing leakage | Sham ends earlier, ramps faster, or has a different session length | Exact onset, ramp, duration, and perceived completion time | Timing alone can create a detectable active/sham difference.^[raw/articles/pubmed-31228880-time-course-ineffective-sham-blinding-low-intensity-tdcs.md] |
| Sensory leakage | Tingling, itch, warmth, pressure, sound, odor, taste, redness | Symptom inventory plus device observations | Sensory cues are often enough to reveal assignment in device studies.^[raw/articles/pubmed-31228880-time-course-ineffective-sham-blinding-low-intensity-tdcs.md]^[raw/articles/pubmed-39124651-taVNS-autonomic-function.md] |
| Activation side-channel | Feeling more awake, stimulated, irritable, or insomniac after active blocks | Sleep, HR/HRV, mood, BP, headache, and time-of-day notes | A protocol can be unblinded because it changes state, not because the participant consciously solves it.^[raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md]^[raw/articles/pubmed-38733772-nocebo-expectations-topical-pain-relief.md] |
| Withdrawal reversal | Active condition mainly relieves an induced deficit | Baseline dependence, washout symptoms, abstinence timing | The apparent benefit may be withdrawal correction, not enhancement.^[raw/articles/pubmed-30861208-expectancy-caffeine-withdrawal-balanced-placebo-design.md] |
| Expectancy amplification | Belief changes performance, symptoms, or adverse-event reporting | Pre/post belief, confidence, and how strongly the participant expected benefit or harm | Expectancy can move some cognitive and symptom outcomes even when the physical treatment is unchanged.^[raw/articles/pubmed-11502230-placebo-expectancy-glucose-cognition.md]^[raw/articles/pubmed-38733772-nocebo-expectations-topical-pain-relief.md] |
| Operator cue leakage | The person running the protocol can see, hear, or feel condition cues | Device logs, cues visible to the operator, and assessor masking status | If the operator knows the condition, the study is not truly self-blinded.^[raw/articles/pubmed-41142043-blinding-indices-comparison-and-application.md] |

## Minimal Detector Workflow

1. Pre-register whether the protocol is supposed to be blinded, sham-controlled, or merely randomized.
2. Record a guess at the end of every block, not just at the end of the study.
3. Record confidence in that guess on a fixed scale.
4. Record the reason for the guess in a structured field: sensation, timing, mood shift, device noise, taste, skin redness, or something else.
5. Track adverse events separately from efficacy so nocebo does not get mixed into response.
6. Compare active and sham blocks for both guess rate and symptom pattern.
7. Compare the result against the withdrawal baseline: if active only restores a deficit, treat that as rescue rather than enhancement.
8. If active and sham are distinguishable by timing, sensation, or state change, downgrade the protocol to `partially blinded` or `open-label`.

## Recommended Readout

| Output | Meaning | Default action |
|---|---|---|
| Green | Guessing near chance, no strong leakage, no obvious withdrawal correction | Treat the comparison as plausibly blinded |
| Yellow | Some leakage, mixed expectancy, or modest state shifts | Keep the result provisional and sensitivity-test it |
| Red | Above-chance guessing, strong sensory cues, or clear withdrawal reversal | Do not describe the result as well-blinded |

## Practical Rules

- Use one blinding question for the participant and, if relevant, one for the operator or assessor.
- Keep the exact wording of the guess question fixed across blocks.
- Capture confidence separately from the guess itself.
- Log whether the active and sham conditions were physically matched on duration, appearance, sound, heat, and ramp.
- Do not rely on a single blinding index if the raw response pattern is obviously asymmetric.
- Do not treat a successful sham device as proof that the mechanism is inert; it only shows that the control was matched well enough to hide assignment.^[raw/articles/pubmed-41008346-auricular-ultrasonic-vagus-nerve-stimulation-blinding-effectiveness.md]

## Open Contradictions

- A good blinding index does not prove biological inertness.
- A correct guess does not automatically invalidate the outcome.
- Some sham conditions are active enough to move physiology, so a null result may reflect an active control rather than a true placebo.
- Self-study protocols often collapse belief, withdrawal, and stimulation into one effect unless those fields are separated in the log.

## Related Pages

- [[sham-control-feasibility-for-cognition-interventions]]
- [[active-sham-and-inertness-taxonomy]]
- [[30-day-self-study-template-for-nonprescription-interventions]]
- [[stack-attribution-diary-for-self-study-and-n-of-1-protocols]]
- [[delivery-validation-checklist-for-cognition-interventions]]
- [[practical-cognitive-measurement-stack]]
- [[endpoint-dictionary-for-cognition-interventions]]
- [[self-experimentation-stop-rules]]

## Actionable Wiki Updates

- Add this page to `index.md` under Concepts.
- Link `PR-06` in `TODO.md` to this detector before extending the self-study template.
- Add a brief cross-link from [[30-day-self-study-template-for-nonprescription-interventions]] so every future self-study can inherit the same blinding-integrity fields.
- Keep [[sham-control-feasibility-for-cognition-interventions]] as the feasibility gate and this page as the failure detector.
