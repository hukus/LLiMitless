---
source_url: https://api.fda.gov/drug/drugsfda.json?search=openfda.substance_name:%22EMOXYPINE%22&limit=1
ingested: 2026-05-03
sha256: d1fbc2ac2efb967048faa7c7d02aa6d36e3c2f14fa8686ece0267786707cc949
---

# openFDA Drugs@FDA: Emoxypine / Mexidol no-match check

On 2026-05-03, an openFDA Drugs@FDA query for `openfda.substance_name:"EMOXYPINE"` returned `NOT_FOUND` with message `No matches found!`.

A parallel openFDA Drugs@FDA query for `openfda.brand_name:"MEXIDOL"` also returned `NOT_FOUND` with message `No matches found!`.

FDA describes Drugs@FDA / openFDA Drugs@FDA as an official source for FDA-approved drug-product information, while the FDA GSRS identity record separately warns that substance identifiers do not imply regulatory review or approval.

Interpretation for the wiki: this is a negative database check, not proof about every regulatory database or every compounded/unapproved market product. It supports the cautious claim that this pass found identity records but no matching FDA-approved Drugs@FDA product entry for emoxypine or Mexidol.

Relevance: U.S. regulatory guardrail for [[emoxypine-mexidol]] and regional-drug sourcing cautions.
