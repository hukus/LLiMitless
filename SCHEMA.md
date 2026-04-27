# Wiki Schema

## Domain
Latest advances in medicine, with emphasis on cognitive improvement. Includes peptides, light therapy, ultrasound, psychedelic-adjacent compounds, traditional/eastern medicine, and adjacent interventions. The wiki also treats anecdotally evidenced categories from nootropic, biohacker, patient, and self-experimenter communities as first-class hypothesis-generation lanes, while keeping them separate from formal research.

## Conventions
- File names: lowercase, hyphens, no spaces.
- Every wiki page starts with YAML frontmatter.
- Use wikilinks to link between pages; minimum 2 outbound links per page.
- When updating a page, always bump the `updated` date.
- Every new page must be added to `index.md` under the correct section.
- Every action must be appended to `log.md`.
- Include anecdotal evidence when relevant, but mark it clearly and keep confidence low or medium unless corroborated.
- Keep evidence layers separate when a topic spans anecdote, traditional medicine, preclinical work, case reports, and controlled trials; link them rather than collapsing them together.
- For every anecdotal claim, clearly mark `anecdote`, name the source type, give the exact source URL/file when possible, and state signal size/strength.
- Do not let community enthusiasm upgrade a recommendation above `confidence: low` unless independent formal evidence supports the same claim.
- On pages synthesizing 3+ sources, append provenance markers like `^[raw/articles/source-file.md]` at the end of paragraphs whose claims come from a specific source.
- Favor clear distinctions between human anecdote, case reports, preclinical work, and controlled trials.

## Anecdote Evidence Rules

Any agent using anecdotal evidence must include an `Anecdote Ledger` table or equivalent bullets. Minimum fields:

| Claim or candidate | Evidence layer | Source and source type | Signal size/strength | Context | Confidence | Caveat |
|---|---|---|---|---|---|---|
| Example compound | `anecdote` / `community survey` | URL or raw note; forum, survey, case report, clinician note | report count, rating count, survey `n`, thread count, or `unknown`; weak/moderate/strong/very-high | dose/route/population/use case if known | usually low | bias, placebo, sourcing, safety, or missing replication |

Signal-strength labels:
- `weak`: isolated report, single thread, vendor claim, or sample size unknown.
- `moderate`: repeated independent reports or a small structured survey, but no clear denominator.
- `strong`: structured community survey, many independent reports, or repeated reports with consistent direction and safety details.
- `very-high`: large survey or multiple independent datasets with explicit participant/rating counts, still treated as anecdote unless controlled.

Anecdotal evidence can prioritize research and safety monitoring, but it cannot by itself establish efficacy, dose, mechanism, or medical recommendation status.

## Frontmatter
```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [from taxonomy below]
sources: [raw/articles/source-name.md]
confidence: high | medium | low
contested: true
contradictions: [other-page-slug]
---
```

## raw/ Frontmatter
```yaml
---
source_url: https://example.com/article
ingested: YYYY-MM-DD
sha256: <hex digest of the raw content below the frontmatter>
---
```

## Tag Taxonomy
- domain-medicine
- cognition
- neuroscience
- peptides
- light-therapy
- ultrasound
- psychedelic
- psychoplastogen
- traditional-medicine
- herbal-medicine
- ethnomedicine
- metabolism
- sleep
- inflammation
- longevity
- recovery
- performance
- safety
- dosage
- mechanism
- clinical-trial
- preclinical
- case-report
- anecdote
- comparison
- timeline
- controversy
- protocol
- biomarker
- device

Rule: every tag on a page must appear in this taxonomy. Add new tags here before using them.

## Page Thresholds
- Create a page when an entity/concept appears in 2+ sources or is central to one source.
- Add to an existing page when a source mentions something already covered.
- Don't create a page for passing mentions or minor details.
- Split a page when it exceeds ~200 lines.
- Exception: `IDEAS.md` and `TODO.md` are allowed to exceed 200 lines because they are working synthesis and coordination documents.
- Archive a page when it is fully superseded.

## Entity Pages
Include:
- Overview / what it is
- Key facts and dates
- Relationships to other entities
- Source references

## Concept Pages
Include:
- Definition / explanation
- Current state of knowledge
- Open questions or debates
- Related concepts

## Comparison Pages
Include:
- What is being compared and why
- Dimensions of comparison
- Verdict or synthesis
- Sources

## Update Policy
When new information conflicts with existing content:
1. Check the dates — newer sources generally supersede older ones.
2. If genuinely contradictory, note both positions with dates and sources.
3. Mark the contradiction in frontmatter.
4. Flag for user review in the lint report.
