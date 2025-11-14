import { DocLayout } from "@/components/doc-layout"

export default function ConnectedAccountStatementPage() {
  return (
    <DocLayout title="Connected Account Statement">
      <h1>Connected Account Statement</h1>

      <p>If you manage multiple sub-accounts, use this endpoint to fetch statement for a specific connected account.</p>

      <h2>Endpoint</h2>
      <pre>
        <code>GET /client/connected-account-statement</code>
      </pre>

      <h2>Query Parameters</h2>

      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          <code>account_id</code> - Connected account ID
        </li>
        <li>
          <code>from_date</code> - Start date (YYYY-MM-DD)
        </li>
        <li>
          <code>to_date</code> - End date (YYYY-MM-DD)
        </li>
        <li>
          <code>page</code> - Page number (optional)
        </li>
        <li>
          <code>limit</code> - Results per page (optional)
        </li>
      </ul>

      <h2>Response</h2>
      <pre>
        <code>{`{
  "status": "success",
  "data": {
    "account_id": "ACC123",
    "account_name": "Merchant ABC",
    "transactions": [
      {
        "txn_id": "ZTK123456789",
        "type": "DEBIT",
        "amount": 500.00,
        "balance_after": 5000.00,
        "description": "Payout",
        "created_at": "2025-01-13T10:30:00Z"
      }
    ]
  }
}`}</code>
      </pre>
    </DocLayout>
  )
}
