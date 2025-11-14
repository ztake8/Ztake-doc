---
title: Authorization
slug: /authorization
---

# Authorization

Ztake authenticates requests using Bearer API keys. Generate and manage keys in your Ztake Dashboard under Settings → Developer Controls.

## Examples

Header example:
\`\`\`
Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json
\`\`\`

cURL example:
\`\`\`bash
curl -X GET "https://api.ztake.in/client/fetchbalance" -H "Authorization: Bearer <YOUR_API_KEY>"
\`\`\`

## Notes

If you use IP whitelisting, only requests from whitelisted IPs will be honored. For webhook security, see the Webhooks section.
