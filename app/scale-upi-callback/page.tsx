import { DocLayout } from "@/components/doc-layout"

export default function ScaleUpiCallbackPage() {
  return (
    <DocLayout title="PG Collection Callback">
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Collection and refund status callbacks of Scale UPI APIs will be notified via this webhook.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm">
            <strong>Configuration:</strong> Log on to your Ztake Dashboard → Settings → Developer Controls → Webhooks →
            UPI.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Sample Callback Response</h2>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`{
  "status": true,
  "statusCode": 200,
  "data": {
    "transcation_id": "ZTTR0016",
    "reference_id": "test-1706550855",
    "order_id": "ZTOD0015",
    "account_number": "9378738535",
    "ifsc": "UTIB0CCH274",
    "upi": "test@ybl",
    "amount": 6,
    "payment_mode": "UPI",
    "payment_remark": "",
    "statusDescription": "Collected Successfully",
    "status": "SUCCESS", //SUCCESS, FAILED, PENDING
    "utr": "242424242424",
    "holderName": "",
    "type": "Credit",
    "charge": 0,
    "gst": 0,
    "createdAt": "2024-01-29T17:54:41.849Z",
    "updatedAt": "2024-01-29T17:54:42.455Z"
  },
  "message": "",
  "event": "DYNAMIC_UPI_COLLECTION"
}`}</code>
          </pre>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm font-semibold mb-2">Transaction Status Handling</p>
          <p className="text-sm">
            Please refer to the Key Things to Handle page for the list of statuses you will receive in the "status"
            field.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Status Values</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-4 py-2 text-left">Status</th>
                <th className="border px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">SUCCESS</td>
                <td className="border px-4 py-2">Payment collected successfully</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">FAILED</td>
                <td className="border px-4 py-2">Payment collection failed</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">PENDING</td>
                <td className="border px-4 py-2">Payment is being processed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DocLayout>
  )
}
