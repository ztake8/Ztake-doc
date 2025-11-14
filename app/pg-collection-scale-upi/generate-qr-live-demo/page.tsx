import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function GenerateQRLiveDemoPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Generate QR for live demo</h1>
          <p className="text-muted-foreground">Create QR payloads for demonstration and testing.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/pg/generateQR</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">POST</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Body:</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
                {`{
  "amount": 100,
  "order_id": "DEMO_001",
  "description": "Test Payment"
}`}
              </pre>
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
    "qr_id": "QR_123456",
    "qr_code": "data:image/png;base64,iVBORw0KG...",
    "qr_string": "upi://pay?pa=demo@ztake&pn=Demo...",
    "amount": 100,
    "order_id": "DEMO_001",
    "expires_at": "2024-01-20T12:00:00Z"
  },
  "message": "QR Code Generated Successfully"
}`}
          </pre>
        </Card>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="text-sm font-medium text-blue-800 mb-1">Note</p>
          <p className="text-sm text-blue-700">
            Use this endpoint for testing and demo purposes. For production, use the regular dynamic VPA or payment link
            APIs.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
