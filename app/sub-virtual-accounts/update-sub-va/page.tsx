import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function UpdateSubVAPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Update Sub VA</h1>
          <p className="text-muted-foreground">Change metadata or contact details associated with a Sub VA.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/client/updateSubVA</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">PUT</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Body:</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
                {`{
  "sub_va_id": "SVA_123456",
  "customer_name": "David Peter Updated",
  "customer_email": "[email protected]",
  "customer_phone": "9876543211"
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
    "sub_va_id": "SVA_123456",
    "customer_name": "David Peter Updated",
    "customer_email": "[email protected]",
    "customer_phone": "9876543211",
    "updated_at": "2024-01-20T15:45:00Z"
  },
  "message": "Sub VA Updated Successfully"
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
