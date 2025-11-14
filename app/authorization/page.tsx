import { DocLayout } from "@/components/doc-layout"

export default function AuthorizationPage() {
  return (
    <DocLayout title="Authorization" lastEdit="Sep 29 2025">
      <h1>Authorization</h1>

      <p>
        Ztake authenticates requests using Bearer API keys. Generate and manage keys in your Ztake Dashboard under
        Settings → Developer Controls.
      </p>

      <h2>Examples</h2>

      <p>Header example:</p>
      <pre>
        <code>{`Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json`}</code>
      </pre>

      <p>cURL example:</p>
      <pre>
        <code>{`curl -X GET "https://api.ztake.in/client/fetchbalance" \\
  -H "Authorization: Bearer <YOUR_API_KEY>"`}</code>
      </pre>

      <h2>Notes</h2>

      <p>
        If you use IP whitelisting, only requests from whitelisted IPs will be honored. For webhook security, see the
        Webhooks section.
      </p>
    </DocLayout>
  )
}
