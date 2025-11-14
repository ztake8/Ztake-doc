---
title: Get Statement
slug: /ztake-payouts/get-statement
---

# Get Statement

Download or stream transaction statements over a date range.

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
