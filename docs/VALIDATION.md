# Validation

2026-10-18: identity, official menu depth (57 listings, 11 categories), posted hours, telephone, direction destination and external ordering/inquiry UI inspected in browser. No real order, payment or inquiry submitted.

Sol's populated frontend revision `7fe6ed163f53e84d585c93c65d6c621cc9ad5299` passed build/check and exact 57-record menu reconciliation. Desktop, 390px, 320px, keyboard navigation and 200% CSS zoom checks are detailed in [RECONSTRUCTION.md](RECONSTRUCTION.md). Astra inspected rendered desktop Home and phone Home/Menu/Visit; authentic images loaded and the observed phone layouts contained their content.

Independent runtime preparation passed `python scripts/app.py check` and an isolated rehearsal of the actual production Compose file: healthy read-only container, exact revision, all three pages, noindex headers, no-store version/health and real 404s. Order and inquiry actions reached their existing official interfaces without submitting data. See [API.md](API.md).

Reconstruction acceptance remains blocked: automatic execution review rejected the documented REA helper launch with `rejected: blocked by policy`. Genuine T3 browser observations are retained, but no REA capture is claimed. Refinement, final metadata/social-preview checks, release readiness, first publish, infrastructure and independent live review remain pending.
