# Orchard Market & Cafe

Public-source website project for the Towson restaurant. See kb/HANDOFF.md for current stage and verified deployment state; this repository currently contains the sourced brief and lifecycle scaffold.

Primary pages: Home, complete Menu, Visit. Existing Menufy ordering and inquiry systems remain external integrations. No custom checkout or customer-message backend.

Local commands: `python scripts/app.py start` and `python scripts/app.py check` using Docker. Frontend commands live in app/package.json. The static runtime exposes /health and an uncached /version.json. All environments are noindex.

Branches: derek-dev and abdul-dev are independent previews; main is production. The first full pipeline release is authorized; later release work follows the repository branch policy.
