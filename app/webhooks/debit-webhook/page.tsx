import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function DebitWebhookPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Debit Webhook</h1>
          <p className="text-muted-foreground">Sent when a debit is posted against your Ztake balance or VA.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">When is it triggered?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Debit Webhook is triggered whenever funds are debited from your Ztake account. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Payout transactions initiated from your account</li>
            <li>Service fees or charges</li>
            <li>Refund reversals</li>
            <li>Any other debit operations</li>
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
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-black">
            {`{
  "event": "account.debit",
  "data": {
    "id": "evt_123",
    "transaction_id": "TXN_123456",
    "amount": 1000,
    "currency": "INR",
    "status": "SUCCESS",
    "type": "PAYOUT",
    "reference_id": "PAYOUT_001",
    "account_number": "7722771001",
    "beneficiary_name": "David Peter",
    "beneficiary_account": "77220101845051",
    "beneficiary_ifsc": "FDRL0007777",
    "payment_mode": "IMPS",
    "timestamp": "2024-01-20T10:30:00Z"
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
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
            <p className="text-sm font-medium text-blue-800 mb-1">Note</p>
            <p className="text-sm text-blue-700">
              If we don't receive a 200 response, Ztake will retry the webhook delivery up to 3 times with exponential
              backoff.
            </p>
          </div>
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
                  <td className="py-2 px-4">Debited amount</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>status</code>
                  </td>
                  <td className="py-2 px-4">String</td>
                  <td className="py-2 px-4">Transaction status (SUCCESS/FAILED)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DocLayout>
  )
}
