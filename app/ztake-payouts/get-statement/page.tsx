import { DocLayout } from "@/components/doc-layout"

export default function GetStatementPage() {
  return (
    <DocLayout title="Get Statement">
      <h1>Get Statement</h1>

      <p>Retrieve your account statement for a specified date range.</p>

      <h2>Endpoint</h2>
      <pre>
        <code>GET /client/statement</code>
      </pre>

      <h2>Query Parameters</h2>

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left p-3 font-semibold">Parameter</th>
              <th className="text-left p-3 font-semibold">Type</th>
              <th className="text-left p-3 font-semibold">Required</th>
              <th className="text-left p-3 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-3">
                <code>from_date</code>
              </td>
              <td className="p-3">string</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Start date (YYYY-MM-DD)</td>
            </tr>
            <tr>
              <td className="p-3">
                <code>to_date</code>
              </td>
              <td className="p-3">string</td>
              <td className="p-3">Yes</td>
              <td className="p-3">End date (YYYY-MM-DD)</td>
            </tr>
            <tr>
              <td className="p-3">
                <code>page</code>
              </td>
              <td className="p-3">number</td>
              <td className="p-3">No</td>
              <td className="p-3">Page number (default: 1)</td>
            </tr>
            <tr>
              <td className="p-3">
                <code>limit</code>
              </td>
              <td className="p-3">number</td>
              <td className="p-3">No</td>
              <td className="p-3">Results per page (default: 50)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Response</h2>
      <pre>
        <code>{`{
  \"status\": \"success\",
  \"data\": {
    \"transactions\": [
      {
        \"txn_id\": \"ZTK123456789\",
        \"type\": \"DEBIT\",
        \"amount\": 1000.00,
        \"balance_after\": 49000.00,
        \"description\": \"Payout to David Peter\",
        \"created_at\": \"2025-01-13T10:30:00Z\"
      }
    ],
    \"pagination\": {
      \"page\": 1,
      \"limit\": 50,
      \"total\": 150
    }
  }
}`}</code>
      </pre>
    </DocLayout>
  )
}
