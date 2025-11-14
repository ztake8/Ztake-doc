import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function VerificationWebhookPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Verification Webhook</h1>
          <p className="text-muted-foreground">Sent when an identity or bank verification completes.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">When is it triggered?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Verification Webhook is triggered when verification requests are completed:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Bank account verification (Penny Drop)</li>
            <li>PAN verification</li>
            <li>Aadhaar verification</li>
            <li>GST verification</li>
            <li>Any other verification API calls</li>
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
  "event": "verification.completed",
  "data": {
    "id": "evt_789",
    "verification_id": "VER_123456",
    "type": "BANK_ACCOUNT",
    "status": "SUCCESS",
    "account_number": "77220101845051",
    "ifsc": "FDRL0007777",
    "account_holder_name": "DAVID PETER",
    "bank_name": "Federal Bank",
    "reference_id": "REF_001",
    "timestamp": "2024-01-20T12:00:00Z"
  }
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Verification Types</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Type</th>
                  <th className="text-left py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>BANK_ACCOUNT</code>
                  </td>
                  <td className="py-2 px-4">Bank account verification via penny drop</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>PAN</code>
                  </td>
                  <td className="py-2 px-4">PAN card verification</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>AADHAAR</code>
                  </td>
                  <td className="py-2 px-4">Aadhaar verification via OTP</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>GST</code>
                  </td>
                  <td className="py-2 px-4">GST number verification</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>IFSC</code>
                  </td>
                  <td className="py-2 px-4">IFSC code verification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response Expected</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your webhook endpoint should return a <code className="bg-muted px-2 py-1 rounded">200 OK</code> status code
            to acknowledge receipt.
          </p>
        </Card>
      </div>
    </DocLayout>
  )
}
