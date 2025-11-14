import { DocLayout } from "@/components/doc-layout"

export default function InitiatePayoutPage() {
  return (
    <DocLayout title="Initiate Payout">
      <h1>Initiate Payout</h1>

      <p>Use this endpoint to initiate a payout to a beneficiary bank account or UPI ID.</p>

      <h2>Endpoint</h2>
      <pre>
        <code>POST /payout/initiate</code>
      </pre>

      <h2>Request Headers</h2>
      <pre>
        <code>{`Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json`}</code>
      </pre>

      <h2>Request Body</h2>
      <pre>
        <code>{`{
  \"client_ref_id\": \"unique_txn_123\",
  \"beneficiary_name\": \"David Peter\",
  \"beneficiary_account\": \"1234567890\",
  \"beneficiary_ifsc\": \"HDFC0001234\",
  \"amount\": 1000.00,
  \"transfer_mode\": \"IMPS\",
  \"remarks\": \"Salary payment\"
}`}</code>
      </pre>

      <h2>Parameters</h2>

      <div className="overflow-x-auto">
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
                <code>client_ref_id</code>
              </td>
              <td className="p-3">string</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Unique transaction reference from your system</td>
            </tr>
            <tr>
              <td className="p-3">
                <code>beneficiary_name</code>
              </td>
              <td className="p-3">string</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Name of the beneficiary</td>
            </tr>
            <tr>
              <td className="p-3">
                <code>beneficiary_account</code>
              </td>
              <td className="p-3">string</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Bank account number</td>
            </tr>
            <tr>
              <td className="p-3">
                <code>beneficiary_ifsc</code>
              </td>
              <td className="p-3">string</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Bank IFSC code</td>
            </tr>
            <tr>
              <td className="p-3">
                <code>amount</code>
              </td>
              <td className="p-3">number</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Amount in INR</td>
            </tr>
            <tr>
              <td className="p-3">
                <code>transfer_mode</code>
              </td>
              <td className="p-3">string</td>
              <td className="p-3">Yes</td>
              <td className="p-3">IMPS, NEFT, RTGS, or UPI</td>
            </tr>
            <tr>
              <td className="p-3">
                <code>remarks</code>
              </td>
              <td className="p-3">string</td>
              <td className="p-3">No</td>
              <td className="p-3">Transaction remarks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Response</h2>
      <pre>
        <code>{`{
  "status": "success",
  "message": "Payout initiated successfully",
  "data": {
    "txn_id": "ZTK123456789",
    "client_ref_id": "unique_txn_123",
    "status": "PENDING",
    "amount": 1000.00,
    "utr": null,
    "created_at": "2025-01-13T10:30:00Z"
  }
}`}</code>
      </pre>

      <h2>Status Codes</h2>

      <ul className="list-disc list-inside space-y-1">
        <li>
          <code>200</code> - Payout initiated successfully
        </li>
        <li>
          <code>400</code> - Invalid request parameters
        </li>
        <li>
          <code>401</code> - Unauthorized - Invalid API key
        </li>
        <li>
          <code>402</code> - Insufficient balance
        </li>
        <li>
          <code>429</code> - Rate limit exceeded
        </li>
        <li>
          <code>500</code> - Internal server error
        </li>
      </ul>
    </DocLayout>
  )
}
