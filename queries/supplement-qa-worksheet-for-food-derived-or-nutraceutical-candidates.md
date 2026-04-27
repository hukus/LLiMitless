---
title: Supplement QA Worksheet for Food-Derived or Nutraceutical Candidates
created: 2026-04-28
updated: 2026-05-03
type: query
tags: [domain-medicine, cognition, comparison, safety, dosage, clinical-trial, protocol, controversy]
sources: [https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/current-good-manufacturing-practices-cgmps-food-and-dietary-supplements, https://www.fda.gov/food/dietary-supplements, https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements, https://www.fda.gov/drugs/medication-health-fraud/avoiding-products-contaminated-hidden-ingredients, https://www.fda.gov/food/dietary-supplements/how-report-problem-dietary-supplements, https://ods.od.nih.gov/factsheets/dietarysupplements-Consumer/, https://ods.od.nih.gov/HealthInformation/ODS_Frequently_Asked_Questions.aspx?ct=39988, https://ods.od.nih.gov/Research/Dietary_Supplement_Label_Database.aspx, https://www.usp.org/services/verification-services, https://www.usp.org/verification-services/verified-mark]
confidence: medium
---

# Supplement QA Worksheet for Food-Derived or Nutraceutical Candidates

## Summary

This page is the fillable front page for food-derived and nutraceutical branches. It sits above the efficacy table and below product identity capture: first decide whether the product in the paper can actually be reproduced, then decide whether the label, lot, and supply chain are clean enough to make the result transportable.

Use [[supplement-identity-evidence-map]] as the current branch-level transportability gate, [[botanical-standardization-gate]] for herbal extract pass/hold decisions, and [[food-derived-cognition-leads-2026-scan]] for the evidence cluster that motivated this tighter quality-control layer.

The worksheet is deliberately more mechanical than narrative. It is designed to stop the wiki from turning a product-specific signal into a broad ingredient recommendation before the quality layer is checked.

## What Changed Since 2024

- FDA still treats dietary supplements as products the manufacturer must get right before marketing, not products FDA preapproves for safety or effectiveness. The burden remains on the firm to prevent adulteration and misbranding, and FDA can act after market entry if the product is unsafe or mislabeled.^[https://www.fda.gov/food/dietary-supplements]^[https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements]
- FDA's dietary-supplement CGMP framework still makes quality, packaging, labeling, process controls, and identity testing core manufacturing obligations. In practice, that means the worksheet has to ask for more than a brand name.^[https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/current-good-manufacturing-practices-cgmps-food-and-dietary-supplements]
- FDA continues to warn that hidden ingredients and contamination are real risks in products sold as supplements or "natural" health products, especially in online marketplaces and weight-loss/sexual-enhancement style categories. That matters for cognition branches too, because product-class signals often travel across categories before the label catches up.^[https://www.fda.gov/drugs/medication-health-fraud/avoiding-products-contaminated-hidden-ingredients]
- NIH ODS still says a label is not a reliable quality proxy and that "standardized" is not a legal quality guarantee for supplements. The worksheet therefore treats standardization as a question to verify, not a trust signal to accept at face value.^[https://ods.od.nih.gov/factsheets/dietarysupplements-Consumer/]^[https://ods.od.nih.gov/HealthInformation/ODS_Frequently_Asked_Questions.aspx?ct=39988]
- USP verification remains the cleanest public third-party quality signal in the current stack because it checks content, contaminants, disintegration, and manufacturing practice. It helps with transportability, but it does not establish efficacy.^[https://www.usp.org/services/verification-services]^[https://www.usp.org/verification-services/verified-mark]

## Worksheet Logic

If the page cannot say what the active unit is, what matrix it came from, who made it, whether the lot can be traced, whether the label is plausible, and whether contamination or adulteration risk was checked, the product description is incomplete.

That sounds strict because it is. The comparison pages in this wiki already show why:

- a supplement label can be specific without being trustworthy,
- a standardized extract can still be product-family-specific,
- and commercial availability does not mean the trial product is reproducible.

This worksheet is the front-end form for those distinctions.

## Core Header

| Field | What to record | Why it matters |
|---|---|---|
| `candidate_name` | Short label for the ingredient, extract, or finished product | Keeps the scan anchored to one object |
| `active_unit` | Molecule, extract, phospholipid mix, peptide, or yeast-derived fraction | The active unit determines transportability |
| `source_matrix` | Whole mushroom, yeast extract, seed extract, dairy matrix, isolated compound, or blended formula | Matrix can dominate bioavailability and reproducibility |
| `product_identity` | Brand, manufacturer, lot, version, or formulation details | Product identity can outrank the ingredient class |
| `marker_or_standardization` | Assay percentage, named marker, identity test, or extract ratio | Standardization is not the same as quality, but it is a necessary input |
| `label_evidence` | Supplement Facts details, ingredient list, serving size, and added ingredients | The label is a starting point, not a proof of quality |
| `lot_or_COA` | Certificate of analysis, lot trace, or batch test | Needed to know whether the tested material can be reproduced |
| `third_party_verification` | USP, NSF, Informed Choice, or other independent verification if present | Independent verification is a stronger quality signal than self-claiming |
| `contaminant_screen` | Heavy metals, microbes, pesticides, solvents, mycotoxins, or species mismatch | Supplements can fail on contamination even when the ingredient is plausible |
| `adulterant_screen` | Undeclared drugs, stimulants, hormone analogs, or other hidden actives | Hidden ingredients can make the result unsafe or non-transportable |
| `excipient_or_allergen_flags` | Gelatin, soy, dairy, shellfish, dyes, sweeteners, preservatives, or other relevant excipients | Excipients can matter for tolerability and matching the RCT product |
| `interaction_flags` | Serotonergic, hypotensive, sedative, anticoagulant, hypoglycemic, or stimulant interactions | Safety and comparability are inseparable |
| `regulatory_status` | Supplement, food ingredient, prescription, research chemical, or gray-market product | Status changes how the branch should be read |
| `commercial_reproducibility` | Whether the exact tested product exists and can be purchased or compounded again | A positive result that cannot be recreated is hard to act on |
| `transport_verdict` | Pass, hold, or reject | Final routing decision |
| `confidence` | High, medium, or low | Keeps the scan honest about certainty |

## Copy/Paste Header

```text
candidate | active_unit | source_matrix | product_identity | marker_or_standardization | label_evidence | lot_or_COA | third_party_verification | contaminant_screen | adulterant_screen | excipient_or_allergen_flags | interaction_flags | regulatory_status | commercial_reproducibility | transport_verdict | confidence
```

## Practical Rules

1. Keep mechanism and quality separate. A plausible mechanism is not a reproducible product.
2. If the label says "standardized," record the marker and method before treating that as meaningful.
3. If the trial product was a named commercial item, preserve the brand and lot when possible.
4. If the product class is known for hidden ingredients or contamination, treat that as a branch-level safety issue, not just a one-off adverse event.
5. If the tested product is a matrix formulation, do not generalize the signal to the isolated molecule without a reason.
6. If the branch has serotonergic, stimulant, anticoagulant, or glucose effects, record the interaction profile before the efficacy summary.
7. If commercial reproducibility is unclear, hold the candidate even if the paper result looks clean.

## Pass / Hold / Reject

| Verdict | Typical signal | What to do next |
|---|---|---|
| Pass | Named product or ingredient, plausible identity controls, lot trace or COA, and no obvious adulteration problem | Route into a comparison page or entity page |
| Hold | Ingredient class is plausible but product identity, standardization, or lot trace is incomplete | Keep it in the comparison layer and collect more QA detail |
| Reject | Hidden ingredient risk, identity conflict, irreproducible product, or source quality is too weak to trust | Route to a negative-evidence or safety page instead of an efficacy ranking |

## Open Contradictions

- A clean ingredient name is not the same thing as a clean product.
- "Standardized" is a manufacturing description, not a guarantee of quality.
- A public verification mark is stronger than a self-claim, but it still does not prove efficacy.
- A product can be commercially available and still not match the exact trial formulation.
- A positive human signal can still be non-transportable if the matrix or lot is missing.

## Related Pages

- [[supplement-identity-evidence-map]]
- [[botanical-standardization-gate]]
- [[food-derived-cognition-leads-2026-scan]]
- [[autophagy-mitophagy-nutraceutical-2026-scan]]
- [[traditional-medicine-cognition-2026-scan]]
- [[regulatory-and-sports-visibility-map]]
- [[implementation-friction-scorecard]]
- [[molecule-triage-worksheet-for-online-scans]]

## Top Sources

1. [FDA Current Good Manufacturing Practices (CGMPs) for Food and Dietary Supplements](https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/current-good-manufacturing-practices-cgmps-food-and-dietary-supplements)
2. [FDA Dietary Supplements](https://www.fda.gov/food/dietary-supplements)
3. [FDA 101: Dietary Supplements](https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements)
4. [FDA Avoiding Products Contaminated with Hidden Ingredients](https://www.fda.gov/drugs/medication-health-fraud/avoiding-products-contaminated-hidden-ingredients)
5. [FDA How to Report a Problem with Dietary Supplements](https://www.fda.gov/food/dietary-supplements/how-report-problem-dietary-supplements)
6. [NIH ODS Background Information: Dietary Supplements](https://ods.od.nih.gov/factsheets/dietarysupplements-Consumer/)
7. [NIH ODS FAQ on dietary supplement labels and standardization](https://ods.od.nih.gov/HealthInformation/ODS_Frequently_Asked_Questions.aspx?ct=39988)
8. [NIH ODS Dietary Supplement Label Database](https://ods.od.nih.gov/Research/Dietary_Supplement_Label_Database.aspx)
9. [USP Verification Services](https://www.usp.org/services/verification-services)
10. [USP Verified Mark](https://www.usp.org/verification-services/verified-mark)

## Actionable Wiki Updates

- Add this page to `index.md` under Queries.
- Link [[supplement-identity-evidence-map]] to this page so the transportability gate has a reusable intake form.
- Link [[food-derived-cognition-leads-2026-scan]] to this page so the branch-level scan and the QA worksheet stay paired.
- Use this worksheet whenever a future supplement or food-derived scan needs product identity, lot trace, standardization, and contamination checks before efficacy language is promoted.
