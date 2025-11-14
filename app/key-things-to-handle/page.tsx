import { DocLayout } from "@/components/doc-layout"

export default function KeyThingsPage() {
  return (
    <DocLayout title="Key Things to Handle">
      <h1>Key Things to Handle</h1>

      <p>Follow these best practices when integrating with Ztake API to ensure smooth operations:</p>

      <h2>1. Webhook Implementation</h2>

      <p>
        Always implement webhooks for real-time updates on transactions. Never rely solely on polling APIs to check
        transaction status.
      </p>

      <h2>2. Idempotency</h2>

      <p>
        Use unique <code>vendor_id</code> for each transaction to prevent duplicate payouts. The same client_ref_id
        will return the status of the original transaction.
      </p>

      <h2>3. Error Handling</h2>

      <p>
        Implement proper error handling for all API responses. Check both HTTP status codes and the response body for
        detailed error messages.
      </p>

      <h2>4. Rate Limiting</h2>

      <p>
        Our API has rate limits to ensure service quality. Implement exponential backoff for retries when you hit rate
        limits.
      </p>

      <h2>5. IP Whitelisting</h2>

      <p>
        For enhanced security, whitelist your server IPs in the Ztake dashboard. This prevents unauthorized API access
        even if your API key is compromised.
      </p>

      <h2>6. Balance Management</h2>

      <p>
        Always check your balance before initiating bulk payouts. Set up low balance alerts to avoid payout failures.
      </p>

      <h2>7. Testing</h2>

      <p>Use our sandbox environment for testing. Never test with production API keys or real bank accounts.</p>
    </DocLayout>
  )
}
