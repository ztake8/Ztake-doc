import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function UPICollectPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">UPI Collect</h1>
          <p className="text-muted-foreground">
            Use this API to make a payment collection request to the payer's UPI App. The payer (VPA holder) will
            receive a notification on their UPI App for making payment.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="text-sm font-medium text-blue-900">
            <strong>Flow:</strong> Create a Collect request → User receives a notification → User makes a payment → You
            receive a callback from Ztake about the collection status.
          </p>
        </div>

        <div className="bg-slate-100 p-4 rounded">
          <p className="text-sm">
            <strong>Set up Webhook:</strong> Configure webhooks from Ztake Web App → Settings → Developer Controls →
            Webhook → UPI.{" "}
            <a href="/webhooks/pg-collection-callback" className="text-blue-600 hover:underline">
              Learn more
            </a>
            .
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">
                https://api.ztake.in/client/createCollectionRequest
              </code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">POST</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Auth:</p>
              <p className="text-sm">
                Please refer to the{" "}
                <a href="/authorization" className="text-blue-600 hover:underline">
                  Authorization page
                </a>
                .
              </p>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Body:</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-black">
                {`{
  "reference_id": "Sathyatest000334222",
  "amount": 6,
  "device": "ANDROID",
  "upi": "sathyatest@ybl"
}`}
              </pre>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Request Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left">Parameter</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Required</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">reference_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Unique reference ID for tracking</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">amount</td>
                    <td className="border border-slate-300 px-4 py-2">Number</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Amount to be collected (in INR)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">device</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Device type: ANDROID or IOS</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">upi</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Payer's UPI VPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "status": true,
  "statusCode": 200,
  "data": {
    "partnerRef": "Sathyatest000334222",
    "referance": "ZTCA001",
    "upi": "sathyatest@ybl",
    "status": "PENDING"
  },
  "message": "Collect request sent to UPI App"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Webhook Response</h2>
          <p className="text-muted-foreground mb-4">
            You will receive a webhook response after the money is collected successfully or failed due to various
            reasons.
          </p>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "status": true,
  "statusCode": 200,
  "data": {
    "transaction_id": "ZTTR003350149",
    "reference_id": "Sathya-1725963921",
    "order_id": "ZTCA0927983242",
    "account_number": "328478343453535",
    "ifsc": "HDFC0000005",
    "upi": "sathyatest@ybl",
    "amount": 1,
    "payment_mode": "UPI",
    "payment_remark": "",
    "statusDescription": "Collected Successfully",
    "status": "SUCCESS",
    "utr": "425415924630",
    "holderName": "Name of the Bank Account Holder",
    "type": "Credit",
    "charge": 0.02,
    "gst": 0,
    "createdAt": "2024-09-10T10:26:48.286Z",
    "updatedAt": "2024-09-10T10:26:48.321Z"
  },
  "message": "",
  "event": "UPI_COLLECT"
}`}
          </pre>
        </Card>

        <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded">
          <h3 className="font-semibold text-amber-900 mb-2">Important Notes</h3>
          <ul className="list-disc list-inside space-y-1 text-amber-900 text-sm">
            <li>The payer must approve the collect request within their UPI app</li>
            <li>Collect requests typically expire after 5-10 minutes if not approved</li>
            <li>Ensure webhooks are configured to receive payment status updates</li>
            <li>Initial response will have status as PENDING until user approves</li>
          </ul>
        </div>
      </div>
    </DocLayout>
  )
}
