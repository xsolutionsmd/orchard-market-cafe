# Validation

2026-10-18: identity, official menu depth (57 listings, 11 categories), posted hours, telephone, direction destination and external ordering/inquiry UI inspected in browser. No real order, payment or inquiry submitted.

Sol's populated frontend revision `7fe6ed163f53e84d585c93c65d6c621cc9ad5299` passed build/check and exact 57-record menu reconciliation. Desktop, 390px, 320px, keyboard navigation and 200% CSS zoom checks are detailed in [RECONSTRUCTION.md](RECONSTRUCTION.md). Astra inspected rendered desktop Home and phone Home/Menu/Visit; authentic images loaded and the observed phone layouts contained their content.

Independent runtime preparation passed `python scripts/app.py check` and an isolated rehearsal of the actual production Compose file: healthy read-only container, exact revision, all three pages, noindex headers, no-store version/health and real 404s. Order and inquiry actions reached their existing official interfaces without submitting data. See [API.md](API.md).

Reconstruction and backend accepted under Derek's October 18 browser/devtools fallback. Automatic execution review had rejected the REA helper launch with `rejected: blocked by policy`; it is not retried or treated as an acceptance gate. Actual T3 rendered views, DOM/computed styles/layout and interactions provide the evidence; no REA capture is claimed.

Refinement, production runtime readiness, first publication and infrastructure are accepted. Independent Sol live review of `1e179b6d003dccfd285c7e575a6bfb9c4ba178f7` exercised 39 cases across 1440px, 390px and 320px: 38 passed and one minor breakpoint-motion finding was returned. Native Chrome reduced-motion emulation, modal focus/keyboard behavior, all 57 menu entries, external destinations and both preview environments passed. No real transaction or inquiry was submitted.

The correction switches hero photos atomically when the aspect-ratio breakpoint changes, then restores the normal 1.8-second slideshow fade. Local rendered checks measured replacement opacity 1 in every sampled frame in both resize directions while manual pause remained active; resuming retained complementary-opacity crossfades. `npm run check` passed. Published through PR2 at5076621; the independent live recheck confirmed the paused-resize correction and35passing cases, but found a remaining active-crossfade resize edge case. The next local correction explicitly cancels in-flight opacity animations before restoring normal fades. Actual20frame samples in each direction stay fully opaque and npm run check passes; this second correction was published through protected PR #3, merged as `8aacf81f419b3a34a598d10d54955c5195a3d537`, and independently rechecked at the product-equivalent `e2e666f38b7cd9041cc60639f932cf47a0366ba4`.


## Accepted live recheck and normal handoff — October 18, 2026

The coordinator accepted independent Sol r3: **73/73 pass, zero findings**, on the frozen Derek preview at `e2e666f38b7cd9041cc60639f932cf47a0366ba4`. Actual desktop/mobile views at 1440, 390 and 320 pixels, keyboard/focus navigation, menu tabs, Back/hash refresh, all 57 menu records, external destinations, containment, reduced motion and slideshow playback/pausing passed. The original paused-resize and active-crossfade resize findings both pass; sampled replacement frames remain opaque and normal complementary fades resume. Actual case receipts, timing frames and captures remain in the private QA record.

Five original/source/hash-to-rendered-crop associations passed: Chicken Panir Sabzi, Lamb Kebob, Persian Style Paella, storefront and brand mark. Their five live optimized files byte-match source. No menu-item photos are displayed. No new research cycle or transactional submission was needed.

Final changes are public handoff/validation/media/state records only. Application, assets, runtime, Docker/Compose, server/deployment configuration and Actions remain unchanged from the reviewed revision. Final branch-head HTTPS health/version, Home/Menu/Visit and noindex verification runs after the last push; actual environment SHAs and meaningful source parity are retained separately in final operating receipts. This paragraph records the normal handoff before the separately scoped Derek-only photo variation below.

Limits: Chromium CSS viewports are not physical-device testing; earliest noninstrumented network paint remains unknown. Existing external ordering/inquiry UI was verified without a real transaction. This landing release does not add a custom backend or establish client operating approval.

## Accepted Derek-only photo variation — October 18, 2026

The normal handoff was accepted at `0f99d3cd9ef88a4aa1bf2c92115a857abf012cb7`. The scoped Derek-only product revision `8cb1086bf858b776720edabbc8d60faa97dafc36` preserves all 57 exact menu names, descriptions and prices, navigation and external destinations. It adds 55 associations: 40 confirmed and 15 likely, using 45 originals and 46 optimized 480px WebP crops totaling 1,761,792 bytes. Filet Mignon & Provolone pita and Grilled Persian Portobello pita remain text-only. Main and Abdul retain their accepted normal product.

Independent deployed review passed **34/34 cases, no findings**; all **55/55 photo identities and final crops** were checked against source evidence and the canonical index. All 46 deployed crop hashes matched their indexed copies. The unchanged-version narrow recheck passed **10/10 cases, no findings**, with exact uncached live revision at start and end. The coordinator accepted those receipts and fresh branch-head/runtime verification at the same product revision.

At 1440px, 390px and 320px CSS viewports, lunch retained 17 rows/15 loaded images and dinner 40 rows/40 loaded images, with no containing-row text/price/photo or page overflow. Applicable pointer/keyboard tabs, selected panel/hash refresh, dialog Escape/focus restoration, scrolling, Home, Visit and external ordering destinations passed. Existing likely/portion qualifications were retained. The narrow recheck reused the accepted original identity evidence; no repeat research or full photo audit was needed.

Final changes are documentation and private library metadata/package records only. Source comparison against `8cb1086` must contain only `kb/HANDOFF.md`, `kb/media.md` and this validation record; application/assets/runtime/configuration remain identical. After the final Derek-only push, fresh successful CI/release, exact GitHub branch head and uncached HTTPS version/health, Home/Menu/Visit, noindex and 57-row/55-photo checks are retained in final operating receipts. No production/Abdul promotion, hosting change, real transaction or inquiry submission is included.

Limits: Chromium viewports are not physical-device tests. Menu availability, business operating approval and historical portion differences remain qualified; the two unsupported pita photos remain genuine coverage gaps.
