import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function PGCollectionCallbackPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">PG Collection Callback</h1>
          <p className="text-muted-foreground">
            UPI collect or payment gateway callbacks are delivered to this webhook.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">When is it triggered?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The PG Collection Callback is triggered for payment gateway events:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>UPI collect request completion</li>
            <li>Static/Dynamic VPA payments</li>
            <li>Payment link completions</li>
            <li>QR code payments</li>
            <li>Payment failures or timeouts</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            Verify request authenticity by validating the{" "}
            <code className="bg-muted px-2 py-1 rounded">X-Ztake-Signature</code> HMAC header using your webhook secret.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Example Payload</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "event": "payment.success",
  "data": {
    "id": "evt_101",
    "payment_id": "PAY_987654",
    "order_id": "ORD_123456",
    "amount": 2500,
    "currency": "INR",
    "status": "SUCCESS",
    "payment_method": "UPI",
    "vpa": "customer@paytm",
    "utr": "UTR123456789012",
    "customer_name": "Jane Smith",
    "customer_email": "[email protected]",
    "customer_phone": "9876543210",
    "reference_id": "ORDER_001",
    "timestamp": "2024-01-20T13:30:00Z"
  }
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Status Values</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Status</th>
                  <th className="text-left py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code className="text-green-600">SUCCESS</code>
                  </td>
                  <td className="py-2 px-4">Payment completed successfully</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code className="text-red-600">FAILED</code>
                  </td>
                  <td className="py-2 px-4">Payment failed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code className="text-yellow-600">PENDING</code>
                  </td>
                  <td className="py-2 px-4">Payment is being processed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code className="text-gray-600">TIMEOUT</code>
                  </td>
                  <td className="py-2 px-4">Payment request timed out</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response Expected</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Your webhook endpoint should return a <code className="bg-muted px-2 py-1 rounded">200 OK</code> status code
            to acknowledge receipt.
          </p>
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
            <p className="text-sm font-medium text-blue-800 mb-1">Note</p>
            <p className="text-sm text-blue-700">
              Process the webhook asynchronously to ensure quick response times. Store the payload and return 200
              immediately, then process in the background.
            </p>
          </div>
        </Card>
      </div>
    </DocLayout>
  )
}
