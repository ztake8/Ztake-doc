import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function RefundPaymentPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Refund a Payment</h1>
          <p className="text-muted-foreground">
            Refund a transaction (Static, Dynamic, UPI Collect) within the same day of collection using this API.
          </p>
        </div>

        <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
          <p className="text-sm font-medium text-red-900">
            <strong>Important:</strong> Refunds can only be processed on the same day as the original transaction. For
            refunds after the same day, please contact Ztake support.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">
                https://api.ztake.in/client/refundVpaTransaction
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
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
                {`{
  "transaction_id": "ZTTR3312", // Original collection transaction ID
  "reference_id": "sathya-test", // Unique reference ID for the refund
  "amount": 2 // Partial or full amount
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
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">transaction_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Original collection transaction ID from Ztake</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">reference_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">
                      Unique reference ID for this refund transaction
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">amount</td>
                    <td className="border border-slate-300 px-4 py-2">Number</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Refund amount in INR (partial or full)</td>
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
    "refund_id": "ZTRF001",
    "transaction_id": "ZTTR3312",
    "reference_id": "sathya-test",
    "amount": 2,
    "status": "SUCCESS",
    "message": "Refund processed successfully"
  },
  "message": "Refund initiated"
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
                    <td className="border border-slate-300 px-4 py-2">
                      Indicates if the refund request was successful
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">refund_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Ztake refund transaction ID</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">transaction_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Original transaction ID</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">amount</td>
                    <td className="border border-slate-300 px-4 py-2">Number</td>
                    <td className="border border-slate-300 px-4 py-2">Refunded amount</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">status</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Refund status (SUCCESS, PENDING, FAILED)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded">
          <h3 className="font-semibold text-amber-900 mb-2">Important Notes</h3>
          <ul className="list-disc list-inside space-y-1 text-amber-900 text-sm">
            <li>Refunds must be processed on the same day as the original transaction</li>
            <li>Partial refunds are supported - you can refund any amount up to the original transaction amount</li>
            <li>Each refund requires a unique reference_id</li>
            <li>Refund processing typically takes 3-5 business days to reflect in customer's account</li>
            <li>For refunds after the same day, contact Ztake support</li>
          </ul>
        </div>
      </div>
    </DocLayout>
  )
}
