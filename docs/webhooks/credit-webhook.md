---
title: Credit Webhook
slug: /webhooks/credit-webhook
---

# Credit Webhook

Sent when funds are credited to your account or a virtual account.

### Security

Verify request authenticity by validating the `X-Ztake-Signature` HMAC header using your webhook secret.

### Example payload

\`\`\`json
{ "event":"example_event", "data": { "id": "evt_123", "status": "SUCCESS" } }
\`\`\`
