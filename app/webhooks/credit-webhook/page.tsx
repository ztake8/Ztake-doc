import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function CreditWebhookPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Credit Webhook</h1>
          <p className="text-muted-foreground">Sent when funds are credited to your account or a virtual account.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">When is it triggered?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Credit Webhook is triggered whenever funds are credited to your Ztake account. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Customer payments via bank transfer or UPI</li>
            <li>Refunds from failed transactions</li>
            <li>Balance additions</li>
            <li>Credits to Sub Virtual Accounts</li>
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
  "event": "account.credit",
  "data": {
    "id": "evt_456",
    "transaction_id": "TXN_789012",
    "amount": 5000,
    "currency": "INR",
    "status": "SUCCESS",
    "type": "PAYMENT",
    "sender_name": "Jane Smith",
    "sender_account": "12345678901",
    "sender_ifsc": "SBIN0001234",
    "utr_number": "UTR123456789012",
    "account_number": "7722771001",
    "payment_mode": "UPI",
    "remarks": "Payment for order #12345",
    "timestamp": "2024-01-20T11:15:00Z"
  }
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response Expected</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Your webhook endpoint should return a <code className="bg-muted px-2 py-1 rounded">200 OK</code> status code
            to acknowledge receipt.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Payload Fields</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Field</th>
                  <th className="text-left py-2 px-4">Type</th>
                  <th className="text-left py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>event</code>
                  </td>
                  <td className="py-2 px-4">String</td>
                  <td className="py-2 px-4">Event type identifier</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>transaction_id</code>
                  </td>
                  <td className="py-2 px-4">String</td>
                  <td className="py-2 px-4">Unique transaction identifier</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>amount</code>
                  </td>
                  <td className="py-2 px-4">Number</td>
                  <td className="py-2 px-4">Credited amount</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>utr_number</code>
                  </td>
                  <td className="py-2 px-4">String</td>
                  <td className="py-2 px-4">Unique Transaction Reference</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>sender_name</code>
                  </td>
                  <td className="py-2 px-4">String</td>
                  <td className="py-2 px-4">Name of the sender</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DocLayout>
  )
}
