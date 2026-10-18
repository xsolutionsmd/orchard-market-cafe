# Design brief

## Visitor need and selected scope

Present Persian/Middle Eastern food and atmosphere, full menu, practical Towson visit details and established ordering/inquiry services. Landing build with separate Home, Menu, Visit URLs. [S1–S4]

Functionality decided BEFORE reference search: separate-page navigation, full readable menu by category, external Menufy Order online, telephone/directions, accurate dining/carryout hours, external existing inquiry form. No custom checkout, booking, admin or messaging backend.

## Page/content plan

- `/`: cuisine introduction, authentic food/atmosphere hero and images, menu and visit/order actions.
- `/menu/`: all 57 source listings in 11 categories, preserving lunch/dinner, descriptions and posted prices. Neutral wording for contradictory vegan category. Provider owns availability/checkout.
- `/visit/`: address, phone, dining/carryout hours, directions and inquiry link. No invented parking details.

## Standing rules

No Stitch. No decorative numbering/counters. Separate pages; restrained typography with at most two complementary families. Use real company imagery in rendered pages and inspect crops. Derek's request confirms owner permission for gathered assets in authorized previews/production; retain provenance, no repeat clearance. Main/Abdul follow reference menu-photo treatment; if text-only, Derek-only photo variation last after normal delivery. Check controls inside cards at narrow mobile width, keyboard, reduced motion and enlarged text. No visitor demo banner; noindex everywhere.

## Template site

Primary reference selected by Astra after verifying the restaurant's presentation-only scope and inspecting its usable real library: https://crema-93cba7-fba5c5b8dd3798bb307970b48a.webflow.io/ (Crema Bistro). Source discovery: https://webflow.com/templates/html/cremabistro-restaurant-website-template. Inspected live home, /menu and /contact at desktop and 390px mobile on 2026-10-18. Navigation opens a full-screen dark panel with large links. This is a visual/behavior reference for original source implementation, not imported proprietary code or assets.

The home uses immersive full-viewport photography, centered italic serif wordmark, compact centered introduction/address, restrained top controls, and a persistent bottom pair of primary links. The dark menu uses two desktop columns, single mobile column, large category spacing, names/descriptions/prices and Eat/Drink tabs; it has NO per-item photos. Contact is a separate page with direct address, hours and inquiry information. The reference was also compared with https://www.sofrehnyc.com/ (live desktop inspected): its Persian context is relevant but its long chef-biography/press structure depends on material Orchard has not verified; Crema's compact hierarchy better fits the actual scope.

Preserve Crema's immersive home, dark inner pages, generous menu rhythm, understated borders, full-screen navigation and compact bottom actions. Naturally adapt:
- Wordmark to Orchard / Market & Cafe, with the authentic source logo used at suitable small size; no invented crest.
- Primary actions to verified Order online and Menu, top Visit link. External inquiry belongs on Visit; no reservation or invented contact form.
- Two menu modes Lunch / Dinner & specials use the full 57 official listings instead of unsupported Eat/Drink content. All offerings remain reachable and printed/readable.
- Dark charcoal with restrained pale orchard/saffron accent and off-white body text; coherent serif wordmark plus one sans-serif text family, following reference proportions.
- Source imagery: official labeled landscape Lamb Kebob (84e4c242...), Chicken Panir Sabzi (f662b38d...) and official landscape gallery (13a6b02b...) are strong hero candidates; inspect original crops before selecting. The authentic storefront (325378b0...) belongs on Visit and adds practical arrival recognition. Food image identity follows the asset index.
- Menu remains text-only on main and Abdul. After normal delivery, a separately reviewed Derek-only menu-photo variation uses verified item mappings.
- Add accessible pause control if home photos move; no decorative slide numbering. Respect reduced motion. Omit reference's unrelated social links, legal-template links, unavailable events, malformed email and badge. Keep mobile actions contained, with content clear of the fixed bottom bar.

Candidate evidence captures are retained privately in reference-selection. Sol completed its own rendered reference, DOM/computed-style/layout and interaction inspection plus blueprint and populated implementation. Astra accepted this browser/devtools fallback under Derek's October 18 correction: unavailable REA is not a gate and rejected helper attempts are not retried. Asset coverage, content sufficiency, reconstruction and checked static integrations are accepted; refinement is next and later phases remain ordered.
