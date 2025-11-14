import { DocLayout } from "@/components/doc-layout"

export default function PostmanCollectionPage() {
  return (
    <DocLayout title="Postman Collection">
      <h1>Postman Collection</h1>

      <p>Import our comprehensive Postman collection to test all Ztake API endpoints quickly.</p>

      <h2>How to Import</h2>

      <ol className="list-decimal list-inside space-y-2 mb-4">
        <li>Download the collection file from our repository</li>
        <li>Open Postman and click Import</li>
        <li>Select the downloaded JSON file</li>
        <li>Configure your environment variables (API_KEY, BASE_URL)</li>
      </ol>

      <h2>Environment Variables</h2>

      <p>Set up the following variables in Postman:</p>

      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          <code>BASE_URL</code> - https://api.ztake.in
        </li>
        <li>
          <code>API_KEY</code> - Your Ztake API key
        </li>
      </ul>

      <h2>Available Collections</h2>

      <p>The Postman collection includes all endpoints for:</p>

      <ul className="list-disc list-inside space-y-1">
        <li>Payouts</li>
        <li>Sub Virtual Accounts</li>
        <li>PG Collection (UPI)</li>
        <li>Verification Stack</li>
        <li>BBPS</li>
        <li>Webhooks</li>
      </ul>
    </DocLayout>
  )
}
