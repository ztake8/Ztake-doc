import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function WebhooksPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Webhooks</h1>
          <p className="text-muted-foreground">
            Ztake delivers asynchronous event notifications to your HTTP endpoints. Examples: payment success, payout
            status, VA credit.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">What are Webhooks?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Webhooks are automated messages sent from Ztake to your server when specific events occur. Instead of
            constantly polling our API for updates, webhooks push real-time notifications directly to your application.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Common Use Cases:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Get notified when a payout is completed</li>
              <li>Receive alerts when funds are credited to your account</li>
              <li>Track verification request completions</li>
              <li>Monitor UPI payment collections</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Security</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Verify request authenticity by validating the{" "}
            <code className="bg-muted px-2 py-1 rounded">X-Ztake-Signature</code> HMAC header using your webhook secret.
          </p>
          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
            <p className="text-sm font-medium text-yellow-800 mb-1">Important</p>
            <p className="text-sm text-yellow-700">
              Always verify the webhook signature before processing the payload to ensure the request is genuinely from
              Ztake.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Example Payload</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "event": "example_event",
  "data": {
    "id": "evt_123",
    "status": "SUCCESS"
  }
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Webhook Types</h2>
          <div className="space-y-3">
            <div className="border rounded p-3">
              <h3 className="font-semibold mb-1">Debit Webhook</h3>
              <p className="text-sm text-muted-foreground">Notifies when funds are debited from your account</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold mb-1">Credit Webhook</h3>
              <p className="text-sm text-muted-foreground">Notifies when funds are credited to your account</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold mb-1">Verification Webhook</h3>
              <p className="text-sm text-muted-foreground">Notifies when a verification request is completed</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold mb-1">PG Collection Callback</h3>
              <p className="text-sm text-muted-foreground">Notifies on UPI payment collection events</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Setup Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Log in to your Ztake dashboard</li>
            <li>Navigate to Settings → Webhooks</li>
            <li>Add your webhook endpoint URL</li>
            <li>Select the events you want to receive</li>
            <li>Save your webhook secret for signature verification</li>
          </ol>
        </Card>
      </div>
    </DocLayout>
  )
}
