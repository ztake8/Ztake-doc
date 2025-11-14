---
title: Webhooks
slug: /webhooks
---

# Webhooks

Ztake delivers asynchronous event notifications to your HTTP endpoints. Examples: payment success, payout status, VA credit.

### Security

Verify request authenticity by validating the `X-Ztake-Signature` HMAC header using your webhook secret.

### Example payload

\`\`\`json
{ "event":"example_event", "data": { "id": "evt_123", "status": "SUCCESS" } }
\`\`\`
