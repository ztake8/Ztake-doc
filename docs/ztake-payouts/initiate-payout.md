---
title: Initiate Payout
slug: /ztake-payouts/initiate-payout
---

# Initiate Payout

Create a new payout to a beneficiary. The request accepts amount, mode (NEFT/IMPS/UPI), reference_id and beneficiary details.

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
