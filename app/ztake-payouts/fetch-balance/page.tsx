import { DocLayout } from "@/components/doc-layout"

export default function FetchBalancePage() {
  return (
    <DocLayout title="Fetch Balance">
      <h1>Fetch Balance</h1>

      <p>Use this endpoint to check your current wallet balance.</p>

      <h2>Endpoint</h2>
      <pre>
        <code>GET /client/fetchbalance</code>
      </pre>

      <h2>Request Headers</h2>
      <pre>
        <code>{`Authorization: Bearer <YOUR_API_KEY>`}</code>
      </pre>

      <h2>Response</h2>
      <pre>
        <code>{`{
  "status": "success",
  "data": {
    "balance": 50000.00,
    "currency": "INR",
    "last_updated": "2025-01-13T10:30:00Z"
  }
}`}</code>
      </pre>

      <h2>Example cURL</h2>
      <pre>
        <code>{`curl -X GET "https://api.ztake.in/client/fetchbalance" \\
  -H "Authorization: Bearer <YOUR_API_KEY>"`}</code>
      </pre>
    </DocLayout>
  )
}
