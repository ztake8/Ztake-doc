import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function FetchSubVAPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Fetch Sub VA</h1>
          <p className="text-muted-foreground">Retrieve details and current balance for a specific Sub VA.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/client/fetchSubVA</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">GET</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Query Parameters:</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">{`?sub_va_id=SVA_123456`}</pre>
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
    "account_number": "7722771002",
    "ifsc": "UTIB0CCH274",
    "customer_name": "David Peter",
    "customer_email": "[email protected]",
    "customer_phone": "9876543210",
    "reference_id": "CUST_12345",
    "status": "ACTIVE",
    "balance": 1500.50,
    "created_at": "2024-01-15T10:30:00Z"
  },
  "message": "Sub VA Details Fetched Successfully"
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
