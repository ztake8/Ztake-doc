---
title: Verification Webhook
slug: /webhooks/verification-webhook
---

# Verification Webhook

Sent when an identity or bank verification completes.

### Security

Verify request authenticity by validating the `X-Ztake-Signature` HMAC header using your webhook secret.

### Example payload

\`\`\`json
{ "event":"example_event", "data": { "id": "evt_123", "status": "SUCCESS" } }
\`\`\`
