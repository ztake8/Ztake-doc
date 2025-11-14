---
title: Debit Webhook
slug: /webhooks/debit-webhook
---

# Debit Webhook

Sent when a debit is posted against your Ztake balance or VA.

### Security

Verify request authenticity by validating the `X-Ztake-Signature` HMAC header using your webhook secret.

### Example payload

\`\`\`json
{ "event":"example_event", "data": { "id": "evt_123", "status": "SUCCESS" } }
\`\`\`
