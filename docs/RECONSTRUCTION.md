# Orchard populated frontend reconstruction

2026-10-18 · Sol 6.1 High · branch `derek-dev` · base `ab9bcfd00178a70b3c212cb253e08e3dff202fe0`.

## Delivered source

- Original static Vite implementation of Home `/`, Menu `/menu/`, Visit `/visit/`, each with a generated HTML entry. Refresh does not depend on a client router.
- Templates: `app/scripts/generate-pages.mjs`; canonical public menu fixture: `app/src/menu.json`; behavior and style: `app/src/main.js`, `app/src/styles.css`. `npm run dev`, build and check regenerate the HTML. Edit the generator rather than the emitted HTML for structural changes.
- Full text-only menu: 57 unique source keys, 11 source categories, 17 lunch and 40 dinner/special listings. Names/descriptions/prices and original ordering match the accepted official JSON exactly (explicit UTF-8 comparison). Categories preserve ingredient facts; conflicting source vegan heading is neutrally displayed as Salads & sides. Desktop uses source-order row pairs rather than the reference's separate column lists so mobile and keyboard reading order stay consistent.
- Four real official assets: `84e4c242…` Lamb Kebob and `f662b38d…` Chicken Panir Sabzi as full-viewport Home crossfade; `325378b0…` storefront on Visit; `9c6d0201…` original logo at 25–30 CSS px. Images were inspected, optimized to WebP where appropriate, rendered and crops checked. No competitor/generated art. Selection and paths recorded with `xs_assets.py update --select yes --site-path`, then report. Provenance is in `kb/media.md` and the private manifest.
- Native full-screen modal navigation with Escape/focus return; keyboard menu tabs; two persistent actions; SVG icons; explicit photo pause; hidden-document/modal pause and reduced-motion branch. Two system font families, no decorative numbering or visitor banner.
- Titles/descriptions/noindex/theme/favicon supplied on all pages. Canonical/social publication metadata awaits the release owner choosing environment policy; no production hostname is falsely assigned to a local preview.

## Evidence and validation

The [blueprint](../kb/template-blueprint.md) records the reference system and adaptations. Private evidence is under the company folder's `private/runs/template-analysis/`:

- `browser-evidence.json`: complete reference snapshots and exact REA blocker. Live T3 tab `tab_34_b8d4afac-2058-4647-9b26-14c84c5e8a78`; reference inspected at 1280×800 /390×844 CSS pixels. Captures are in `captures/ref-*`.
- `local-validation.json`: 40 dinner keys, 17 lunch keys, 320px containment and simulated 200% CSS zoom results. `captures/local-*` includes all three pages desktop/mobile, settled modal, narrow menu and end-of-page content clearance.
- `npm ci`: 14 packages installed, audit reported zero vulnerabilities. `npm run build` passed. `npm run check` passed (10 built files). The starter blanket price prohibition was narrowed only for dedicated price spans, with a separate strict 57-record name/description/price check; all other generic guards retained. Checks also verify no menu images, no placeholders, required external destinations, no unapproved external resources and existing local asset/routes.
- Browser: Home→Menu link, Lunch click (17), keyboard ArrowRight→Dinner (40), direct Visit/Menu loads, native Escape and trigger-focus restoration all passed. All populated images loaded. No application console errors observed. No horizontal overflow at 1280,390,320; menu labels/item headers fit their own containers. Simulated 200% CSS zoom at 1280 also passed menu/control containment. Visit and final Menu content remain above the fixed bar after scrolling to the bottom.
- Reduced-motion CSS and JavaScript branch inspected; OS media emulation was not exposed by the collaborative preview, so no emulated reduced-motion runtime pass is claimed. No real inquiry, cart, order or payment submitted.

## Boundaries and next owner

**REA acceptance remains unresolved.** One legitimate current launch of the documented dedicated compatibility helper was rejected before execution by automatic execution review: `rejected: blocked by policy`. There is no more specific reason, no discovered endpoint/target and no genuine REA Evidence ID. No bypass or alternative launch was attempted. Browser evidence is genuine, but is not labeled REA. Coordinator must decide how to resolve that stage blocker.

No custom backend is required. Real Menufy ordering/inquiry, telephone and official Maps destinations are implemented as links using already accepted evidence. Astra owns container `/health`, uncached `/version.json`, deployed noindex/HTTPS, external-provider checks and release validation; these are not claimed by this local frontend pass. Runtime/deployment/state/HANDOFF files were left to their owner. No push, GitHub, server, Slack or stage progression performed.

Local review server: `http://localhost:4310/` (Vite, strict port; process session 96593). Retain this server, `app/node_modules` and `app/dist` only for the immediate coordinator/Astra/Claude handoff; recheck at that handoff and stop/recycle disposable output after it. No Docker resources created. Original library and private evidence remain required provenance/review artifacts. Frontend write ownership returns to the coordinator at delivery; Claude refines this existing implementation after Astra, rather than rebuilding it.
