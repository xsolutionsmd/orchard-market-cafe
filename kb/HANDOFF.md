# Orchard Market & Cafe ? handoff

Workflow: server-first. Endpoint: full. Updated October 18, 2026.

## Current state

Home, the complete text-only Menu and Visit are published with authentic company photos and the existing external Menufy ordering/inquiry destinations. The public repository is https://github.com/xsolutionsmd/orchard-market-cafe. Main is protected; production and the two personal previews have independent Actions, packages and managed Oracle services.

- Production: https://orchardcafe.xsolutionsmd.com
- Derek: https://d-orchardcafe.xsolutionsmd.com
- Abdul: https://a-orchardcafe.xsolutionsmd.com

The coordinator accepted independent Sol live recheck r3 on October 18: **73/73 cases pass, no findings**, at reviewed application revision `e2e666f38b7cd9041cc60639f932cf47a0366ba4`. The second slideshow correction (`72e15b6`) is published through protected PR #3, merged as `8aacf81f419b3a34a598d10d54955c5195a3d537`. The two earlier resize findings are resolved. See [validation](../docs/VALIDATION.md).

These final handoff records contain no product changes. Documentation commits change the deployed revision; compare each environment's own branch head with its uncached `/version.json`. Application, runtime, assets, deployment configuration and workflow parity with the reviewed revision are checked separately. Final runtime and Slack receipts remain in the private operating record. The coordinator retains overall final-handoff acceptance.

## Next step

Coordinator: inspect the final branch-head, source-parity, runtime and persisted Slack delivery receipts in the private operating record, then accept the normal handoff. After normal acceptance, Astra completes the separately scoped **Derek-only menu-photo variation** and its focused Sol review. That variation is unfinished and must not be merged into main or Abdul. Preserve production and Abdul's accepted text-only menu.

## Scope and evidence

Accepted scope: separate Home, Menu and Visit; all 57 sourced menu entries across 11 categories; external ordering/inquiry, phone and directions. No custom checkout or message backend. No actual order, payment, inquiry or call was submitted. All environments remain noindex. Hosting is not client approval or a sale.

The normal library has 52 images: website 38, Yelp 7, DoorDash 6 and third-party Instagram 1. It maps 49 of 57 menu entries (38 confirmed, 11 likely), with eight honest photo gaps. The complete originals/index ZIP was delivered once to Abdul in the existing first-live Slack thread and verified after reload. Reuse that receipt; do not duplicate the upload. [Media and source limits](media.md). Additional photo research is separate collection staging and does not change this delivered library or current app.

Quick identity review reused actual originals, provenance, hashes and displayed crops for Chicken Panir Sabzi, Lamb Kebob, Persian Style Paella, the storefront and the original mark. All five optimized live files matched reviewed source. Main and both previews currently contain zero menu-item photos.

## Decisions and dated history

The October 18 19:25 UTC coordinator checkpoint established PR #3's successful required checks and merge, production/Abdul at `8aacf81`, and Derek frozen at `e2e666f` for independent recheck. That recheck subsequently passed and was accepted; the earlier ?publication/recheck pending? directions are superseded.

Derek explicitly resumed the remaining build-scoped releases; the abandoned advisory dispatcher/release-slot loop stays stopped. Preserve protected checks, the technical updater lock and rollback. Earlier shared Docker DNS failures and temporary replacement 502s remain dated evidence; no shared-host repair, restart, gateway change or unrelated probing is authorized by this handoff.

No Stitch or decorative numbering. Derek's standing permission covers the gathered business assets across sources and authorized environments; preserve provenance without another permission request. REA did not run: the helper launch was rejected by automatic execution review (`rejected: blocked by policy`). Derek's browser/devtools fallback superseded the earlier mandatory-REA interpretation, and actual reference/rendered/interaction evidence was accepted. Do not retry the rejected helper.

The maintained Slack directory already has all three correct short URLs. Final handoff reads it back without editing; no directory write ownership was transferred. Keep the canceled coordination backlog canceled and avoid routine interthread broadcasts.

## Retention

Retain localhost:4310, app dependencies, build output and the current source for the imminent Derek photo update; recheck when that scoped update ends. Retain originals, the verified current ZIP, provenance/index and actual QA receipts. Do not modify the parallel photo collection staging during normal handoff.

Earlier owned rehearsal containers/networks/synthetic volume, dedicated builder/cache and first-release local images were removed. The verified transport archive (22,687,232 bytes) and two superseded unsent packages (28,665,262 bytes) were recycled with recovery verified; recycling is not disk space freed. Infrastructure staging was cleaned separately.

All three hosted services remain required. The original direct-release recovery image may now be superseded after the third managed release. Its exact current container/rollback/retention references need a host inspection before removal; defer that cleanup to a bounded authorized host-maintenance check after the imminent photo update, preserving current plus two previous successful managed releases. No broad Docker cleanup or host mutation is part of final handoff.
