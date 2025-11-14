import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function DeactivateSubVAPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Deactivate Sub VA</h1>
          <p className="text-muted-foreground">
            Temporarily stop accepting payments into a Sub VA; funds remain accessible via API.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/client/deactivateSubVA</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">POST</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Body:</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
                {`{
  "sub_va_id": "SVA_123456"
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
    "status": "INACTIVE"
  },
  "message": "Sub VA Deactivated Successfully"
}`}
          </pre>
        </Card>

        <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
          <p className="text-sm font-medium text-yellow-800 mb-1">Important</p>
          <p className="text-sm text-yellow-700">
            When a Sub VA is deactivated, it will no longer accept incoming payments. However, existing funds can still
            be withdrawn or transferred via API.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
