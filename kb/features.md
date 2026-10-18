# Features

Build type: landing. Endpoint: full.

| Capability | Decision | Contract |
|---|---|---|
| Menu | Static presentation | Full 57 listings / 11 source groups with descriptions/prices |
| Ordering | Existing external Menufy | https://www.orchardmarketcafe.com/order |
| Inquiries | Existing external form | https://www.orchardmarketcafe.com/Contact-Us |
| Call | Native telephone | tel:+14103397700 |
| Directions | Official destination | https://maps.google.com/?daddr=39.3988381,-76.5684423 |
| Visit | Verified static facts | Tue–Sun 11–9 dining, carryout until 8:30; Monday closed |

No custom backend, reservations/admin or payments. Static runtime requires /health, uncached /version.json, HTTPS/noindex, direct-route loads and refresh. Mobile/keyboard accessible actions. External form/checkout visible and verified without real submission. [S1–S3]
