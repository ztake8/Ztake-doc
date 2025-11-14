---
title: Fetch Balance
slug: /ztake-payouts/fetch-balance
---

# Fetch Balance

Retrieve your current available balance and ledger details.

### Sample cURL

\`\`\`bash
curl -X POST "https://api.ztake.in/client/initiatepayout" \
  -H "Authorization: Bearer {{API_KEY}}" \
  -H "Content-Type: application/json" \
  -d '{"amount":100, "payment_mode":"UPI", "reference_id":"ref_12345", "upi":"beneficiary@bank" }'
\`\`\`

### Responses

\`\`\`json
{ "status": "success", "data": { "transaction_id": "txn_12345" } }
\`\`\`
