---
title: PG Collection Callback
slug: /webhooks/pg-collection-callback
---

# PG Collection Callback

UPI collect or payment gateway callbacks are delivered to this webhook.

### Security

Verify request authenticity by validating the `X-Ztake-Signature` HMAC header using your webhook secret.

### Example payload

\`\`\`json
{ "event":"example_event", "data": { "id": "evt_123", "status": "SUCCESS" } }
\`\`\`
