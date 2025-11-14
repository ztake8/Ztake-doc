import { DocLayout } from "@/components/doc-layout"

export default function FetchTransactionStatusPage() {
  return (
    <DocLayout title="Fetch Transaction Status">
      <h1>Fetch Transaction Status</h1>

      <p>Use this endpoint to check the status of a payout transaction.</p>

      <h2>Endpoint</h2>
      <pre>
        <code>GET /payout/status</code>
      </pre>

      <h2>Query Parameters</h2>

      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          <code>client_ref_id</code> - Your unique transaction reference (OR)
        </li>
        <li>
          <code>txn_id</code> - Ztake transaction ID
        </li>
      </ul>

      <h2>Request Example</h2>
      <pre>
        <code>{`GET /payout/status?client_ref_id=unique_txn_123`}</code>
      </pre>

      <h2>Response</h2>
      <pre>
        <code>{`{
  \"status\": \"success\",
  \"data\": {
    \"txn_id\": \"ZTK123456789\",
    \"client_ref_id\": \"unique_txn_123\",
    \"status\": \"SUCCESS\",
    \"amount\": 1000.00,
    \"utr\": \"UTR123456789\",
    \"beneficiary_name\": \"David Peter\",
    \"beneficiary_account\": \"1234567890\",
    \"created_at\": \"2025-01-13T10:30:00Z\",
    \"completed_at\": \"2025-01-13T10:31:00Z\"
  }
}`}</code>
      </pre>

      <h2>Transaction Status Values</h2>

      <ul className="list-disc list-inside space-y-1">
        <li>
          <code>PENDING</code> - Transaction is being processed
        </li>
        <li>
          <code>SUCCESS</code> - Transaction completed successfully
        </li>
        <li>
          <code>FAILED</code> - Transaction failed
        </li>
        <li>
          <code>REVERSED</code> - Transaction was reversed
        </li>
      </ul>
    </DocLayout>
  )
}
