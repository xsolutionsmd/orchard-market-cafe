# Orchard reconstruction blueprint

Reference inspected 2026-10-18: [Home](https://crema-93cba7-fba5c5b8dd3798bb307970b48a.webflow.io/), [Menu](https://crema-93cba7-fba5c5b8dd3798bb307970b48a.webflow.io/menu), [Contact](https://crema-93cba7-fba5c5b8dd3798bb307970b48a.webflow.io/contact). Original implementation; no reference code, fonts, imagery or identity copied.

## Evidence and limits

Direct T3 browser inspection at 1280×800 and 390×844 CSS pixels confirms the layouts below. Private captures and complete snapshots are retained by the coordinator in `private/runs/template-analysis/`. Reference-selection captures provide additional matching views. The task-owned REA compatibility helper's one current launch was rejected by automatic execution review (`rejected: blocked by policy`). No endpoint or target ID exists and no REA Evidence ID was returned. **REA remains blocked; this blueprint is browser evidence, not completed REA acceptance.** Hidden server behavior, booking completion and unpublished states remain unknown.

## Observed system

- Home fills the viewport with moving edge-to-edge imagery under a dark overlay. Centered italic serif wordmark sits around 40% viewport height, with a short centered cuisine sentence and address beneath it. Desktop wordmark approximately 265×71; copy about 516px wide, 16/20px. Image train moves horizontally behind fixed content.
- Header has 40px desktop / 20px mobile side insets, a small three-line menu at left and thin bordered contact action at right. Inner pages add a small centered wordmark; reference hides it on narrow mobile.
- Full-screen dark navigation overlays the page. Desktop links begin around x84/y130, approximately 56px bold sans, 105px vertical rhythm; mobile links are about 34px. Address and small links follow. Menu icon changes to close. Transition capture can precede the visible panel; settled desktop capture confirms it.
- Inner background is near #111111, bright pale yellow-green accent near #e5eb7e, white body. Reference menu category headings are bold italic sans (28px desktop /24px mobile), names about 24px desktop /18px mobile, descriptions 16/20px. The proprietary font is not reused.
- Menu tabs center at y156 desktop; first category starts near y300. Two columns each 560px at 1280px viewport, 80px gutter and 40px side padding. Categories have approximately 60px separation, entries 124px rhythm. Prices align at the far right of each item. Mobile uses one column with 20–25px inset, 18px names and 16px descriptions. **No item images.** Eat/Drink controls navigate to distinct pages; no cart or editable quantities observed.
- Contact is a plain dark text page: heading around y170 desktop, short introduction, location/hours/telephone/inquiry blocks with generous 50–60px separation. Mobile stacks all information with the same small side inset.
- Persistent bottom action strip is about 72px desktop /60px mobile, split by a fine vertical rule, with two compact actions. Inner desktop has a fine top border; mobile accent-filled strip. Reference contains branding/template links and some malformed destinations; these are not carried over.

## Orchard mapping and intentional adaptations

Sources: [company](company-profile.md), [offerings](offerings.md), [contact/hours](contact-and-hours.md), [media](media.md), [source register](sources.md), [open questions](open-questions.md).

- Home `/`: Orchard wordmark in Georgia italic plus Arial interface/body (two system families). Real official Lamb Kebob and Chicken Panir Sabzi landscape photos occupy the immersive background; keep grilled vegetables/rice and chicken sauce recognizable. Use crossfade rather than the reference's continuous lateral train, avoiding portrait crop movement. Explicit pause and reduced-motion static state. Source logo remains small at its original aspect ratio.
- Menu `/menu/`: complete 57 source listings in 11 original groups. Two modes, Lunch (17 entries) and Dinner & specials (40 entries), replace unsupported drink content. Preserve names, descriptions and prices verbatim, with exact stable keys from the item index. Group heading `FOR OUR VEGAN VEGETARIANS` becomes **Salads & sides** because feta is explicitly present. Other headings use sentence case. No menu photos; the mapped library is retained for a later separate variation.
- Visit `/visit/`: practical address, official directions, telephone, dining Tue–Sun 11am–9pm, carryout until 8:30pm, Monday closed. Official storefront photo supports arrival recognition; its historical date is unknown, so no current-renovation or parking claim. Existing inquiry form stays external. No email/history/testimonials invented.
- Verified Menufy Order online replaces Reservations, alongside Menu in the persistent strip. Home/Visit/menu navigation uses real separate HTML routes and direct-refresh support. Header Visit link replaces Contact us. Active links, focus visibility, keyboard dialog handling and touch sizes improve reference accessibility. Long tab labels wrap within their controls; content reserves space for the bottom strip.
- Orchard palette adapts the pale accent toward warm orchard/saffron cream on charcoal, preserving the observed contrast and restraint. No decorative ordinals, moving ribbons or visitor demo banners.

## Functional and runtime boundaries

Static HTML contains all menu content before JavaScript; mode switching enhances it and print reveals both modes. Navigation has open/closed states, Escape, focus trap and focus restoration. Motion pauses on request, hidden document or reduced-motion preference. No local forms, fake loading/success states, cart, booking, payment or message records are needed. Order/inquiry availability, validations, totals and completion belong to the external provider; only destination links are implemented. Astra still owns production-container `/health`, uncached `/version.json`, noindex and release checks. This pass preserves those files.
