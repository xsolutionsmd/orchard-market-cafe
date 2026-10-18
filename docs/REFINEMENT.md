# Orchard frontend refinement

2026-10-18 · `derek-dev` · base `de3a780615f08faaead99c09285846310c754182`.

Claude Opus 5.5 began this refinement, then stopped after the provider reported “Claude API rate limit reached. Try again later.” The coordinator verified termination and transferred the existing work to Astra Extra High. Astra completed the changes and all checks below; this was refinement of Sol's populated implementation, not another reconstruction.

## Changes and reference fit

- Retained Claude's official Persian Style Paella portrait for tall Home viewports, stronger photographic overlay, compact mobile tabs, transparent desktop Home action strip and basic page-specific Open Graph text. The immersive photograph, serif wordmark, charcoal/cream inner pages, two-column desktop menu, full-screen navigation and bottom actions remain consistent with the inspected Crema reference. There are still only two system font families and three separate pages.
- Compared the original Paella photo, optimized file and rendered crop with its exact official menu-card identification. Its shells, seafood and rice remain recognizable on 390/320px screens. Desktop continues to use official Lamb Kebob and Chicken Panir Sabzi; Visit retains the authentic storefront and Home the small source logo. Recorded Paella selection and site path in the provenance manifest and regenerated `kb/media.md`.
- Fixed the initial slideshow flash by setting the first frame before enabling fades. The tall-screen first image is not lazy-loaded. Hidden slides no longer expose their descriptions to assistive technology, and changing motion preferences preserves an explicit visitor pause.
- Added explicit forward/reverse navigation focus wrapping while retaining native Escape, inert background and focus return. Added Space activation for the enhanced menu tabs.
- Kept the narrow-phone pause target at 44px with room for its focus ring above the fixed actions. Corrected the current Visit button's hover contrast. No new backend requirements.

## Actual validation

T3 collaborative browser used the existing `http://localhost:4310/` service. Compared retained reference Home/Menu/Contact captures and blueprint with rendered implementation views; no REA operation is claimed.

- Home, Menu and Visit inspected at **1280×800, 1440×900, 390×844 and 320×568**. No horizontal overflow or failing menu-tab/item-header/hours containment. Real images loaded; Paella, Lamb Kebob, Chicken Panir Sabzi and storefront crops inspected. Narrow navigation fits within the viewport. No application console errors observed.
- Lunch click, ArrowRight, Home, End and Space work: **17 lunch / 40 dinner** listings. All **57 exact keys, categories, names, descriptions and prices** independently reconcile with the official menu, asset index and accepted content. Eleven categories remain; the contradictory vegan heading remains neutral **Salads & sides**. Menu remains text-only.
- Home Menu and navigation Visit links actually navigated. Direct page loads worked. Navigation forward/reverse wrap, Escape, initial focus and trigger-focus restoration passed on desktop/phone. Visible focus and Visit hover contrast checked.
- Photo pause remained stable beyond the 8-second interval. Play produced an observed 1.8-second crossfade: intermediate opacities and settled frame were captured; intro geometry stayed identical. Opening navigation suspended slide advancement beyond an interval.
- Actual application code in a temporary browser iframe with synthetic `matchMedia` exercised reduced-motion startup (no slideshow interval), preference changes and preservation of manual pause. Fixture removed. OS-level media emulation was unavailable; the CSS reduced-motion rule was inspected, not claimed as an emulated runtime pass.
- Simulated 200% CSS zoom on all three pages contained text/controls. At 320px the final pause control is 44px high, with 8px above and 14px below for focus clearance. Menu/Visit final content clears the fixed action strip.
- Final `npm --prefix app run check` passed: generator, Vite production build and static checks, **11 built files**. `git diff --check` passed. Deterministic title, description and noindex tags remain on every page; no canonical/og:url falsely assigns ownership to another domain. Basic OG text is retained; hosted social-card rendering belongs to publication checks.

Private screenshots, measurements, motion checks and exact menu reconciliation are retained in the coordinator's refinement evidence. Earlier discovered failures are recorded alongside their passing corrections.

## Handoff boundary and retention

No push, publication, Docker/runtime, server, Slack, pipeline-state or parent HANDOFF/design-brief edits. The coordinator owns stage acceptance, final runtime/revision checks, publication and later independent live review. No real order or inquiry was submitted; already accepted external-system evidence remains authoritative.

Reused the existing preview and dependencies; no duplicate environment, dependency installation or Docker resource was created. Retain `app/node_modules`, `app/dist` and the existing preview for the immediate coordinator readiness/publication handoff, then recheck and clean disposable output. Keep the optimized site image and private provenance/review evidence as required deliverables.
