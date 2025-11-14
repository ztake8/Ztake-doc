import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function CreateDynamicVPAPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Create Dynamic VPA</h1>
          <p className="text-muted-foreground">
            Use this API to create a dynamic UPI VPA which can be further converted into QR or UPI intent. You can use
            this product for collecting payments offline or online from your customers.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="text-sm font-medium text-blue-900">
            <strong>Flow:</strong> Create a dynamic VPA → Convert it into a QR for offline collection or use as a link
            for online collection → Receive webhook from Ztake about the collection status.
          </p>
        </div>

        <div className="bg-slate-100 p-4 rounded">
          <p className="text-sm">
            <strong>Set up Webhook:</strong> Configure webhooks from Ztake Web App to receive payment notifications.{" "}
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
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/client/createDynamicVpa</code>
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
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
                {`{
  "reference_id": "test0007", // Should be a unique reference ID
  "amount": 1
  // "merchantId": "ZTSUBVA0013" // Pass this param only for Sub Merchant Model
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
                    <td className="border border-slate-300 px-4 py-2">Unique reference ID for this transaction</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">amount</td>
                    <td className="border border-slate-300 px-4 py-2">Number</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Amount to be collected (in INR)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">merchantId</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">No</td>
                    <td className="border border-slate-300 px-4 py-2">Required only for Sub Merchant Model</td>
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
    "transaction_id": "ZTOD24242",
    "amount": 1,
    "reference_id": "test0007",
    "upi": "upi://pay?pa=2498294829424@yesbank&pn=Ztake&am=1&cu=INR&tn=",
    "status": "SUCCESS"
  },
  "message": ""
}`}
          </pre>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Response Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left">Parameter</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">status</td>
                    <td className="border border-slate-300 px-4 py-2">Boolean</td>
                    <td className="border border-slate-300 px-4 py-2">Indicates if the request was successful</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">transaction_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Ztake transaction ID (starts with ZT)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">amount</td>
                    <td className="border border-slate-300 px-4 py-2">Number</td>
                    <td className="border border-slate-300 px-4 py-2">Collection amount in INR</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">reference_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Your unique reference ID</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">upi</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">UPI intent string for payments</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">status</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">VPA creation status</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <h3 className="font-semibold text-amber-900 mb-2">Important Notes</h3>
          <ul className="list-disc list-inside space-y-1 text-amber-900 text-sm">
            <li>Dynamic VPAs are tied to a specific amount for a single transaction</li>
            <li>The UPI intent can be converted to QR code or used directly in apps</li>
            <li>After payment, you'll receive a webhook callback with transaction details</li>
            <li>Ensure your reference_id is unique for each transaction</li>
          </ul>
        </div>
      </div>
    </DocLayout>
  )
}
