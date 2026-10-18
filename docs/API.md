# Static runtime and external integrations

This landing site has no customer-data backend. The frontend presents sourced menu/visit information and routes customer actions to existing services.

| Route/action | Contract | Acceptance |
|---|---|---|
| `/`, `/menu/`, `/visit/` | Separate static pages with direct URL/refresh support | Actual image returns 200 for all three; rendered pages inspected |
| `/health` | HTTP 200 plain `ok` from nginx | Actual image passed |
| `/version.json` | JSON `revision` equals tested source SHA; no-store | Actual image equals `7fe6ed163f53e84d585c93c65d6c621cc9ad5299` |
| Order online | `https://www.orchardmarketcafe.com/order` | Browser rendered official menu/cart, no transaction |
| Inquiry | `https://www.orchardmarketcafe.com/Contact-Us` | Browser rendered current Name/Phone/Email/Message/reCAPTCHA form; no submission |
| Call | `tel:+14103397700` | Number matches official site and tourism listing |
| Directions | `https://maps.google.com/?daddr=39.3988381,-76.5684423` | Exact official outgoing destination |

No payment/order payload, contact data, cookies or staff credentials are copied. External provider owns current availability, checkout, fulfillment and message delivery. Site does not invent success states or claim customer actions reached staff.

Runtime: static Vite output in read-only nginx-unprivileged image on port 8080, transient tmpfs only. No persistent app data. Planned shared Oracle gateway terminates HTTPS. No visitor-facing preview banner.

2026-10-18: `python scripts/app.py check` passed tests, health, source label and exact application revision `7fe6ed163f53e84d585c93c65d6c621cc9ad5299`. The actual production Compose file then passed an isolated rehearsal using a dedicated network and ephemeral loopback port. Effective read-only root, `/tmp`, `/data`, `/config` tmpfs, no-new-privileges and healthy container were checked. All routes return noindex/nofollow; version and health return no-store; nonexistent page/asset and `.env` return 404. The temporary candidate resources were removed.

The site's Order online and Send an inquiry links were clicked into the existing official services. The ordering menu and contact fields/reCAPTCHA rendered. No transaction or message was submitted. Production HTTPS and all deployed revisions remain pending publication. Astra accepted this backend evidence after reconstruction was accepted using Derek's October 18 browser/devtools fallback. No custom backend is needed.
