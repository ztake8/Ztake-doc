import { DocLayout } from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function CreateStaticVPAPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Create Static VPA</h1>
          <p className="text-muted-foreground">
            Use this API to create a static UPI VPA which can be further converted into QR. You can use this product for
            collecting payments offline or online from your customers.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="text-sm font-medium text-blue-900">
            Static VPAs remain constant and can be used for multiple transactions. Perfect for QR codes displayed at
            physical locations or online payment pages.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/client/createStaticVpa</code>
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
  "name": "Richard Hendricks",
  "reference_id": "tabsVsSpaces1"
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
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">name</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Name to be displayed on UPI VPA</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">reference_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Unique reference ID for tracking</td>
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
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-black">
            {`{
  "status": true,
  "statusCode": 200,
  "data": {
    "reference_id": "tabsVsSpaces1",
    "transaction_id": "ZTVA11111",
    "upi": "ztakeupi@yesbank"
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
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">statusCode</td>
                    <td className="border border-slate-300 px-4 py-2">Number</td>
                    <td className="border border-slate-300 px-4 py-2">HTTP status code</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">reference_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Your unique reference ID</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">transaction_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Ztake transaction ID (starts with ZT)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">upi</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Generated UPI VPA for collecting payments</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <h3 className="font-semibold text-amber-900 mb-2">Important Notes</h3>
          <ul className="list-disc list-inside space-y-1 text-amber-900 text-sm">
            <li>The generated UPI VPA can be used indefinitely for multiple transactions</li>
            <li>Convert the UPI VPA to QR code for easy scanning by customers</li>
            <li>Set up webhooks to receive real-time payment notifications</li>
            <li>For Sub Merchant Model, ensure you pass the merchantId parameter</li>
          </ul>
        </div>
      </div>
    </DocLayout>
  )
}
