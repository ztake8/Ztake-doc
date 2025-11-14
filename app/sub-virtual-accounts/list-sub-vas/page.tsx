import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function ListSubVAsPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">List Sub-VAs</h1>
          <p className="text-muted-foreground">
            List Sub VAs with filters such as active status, creation date, and owner.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/client/listSubVAs</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">GET</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Query Parameters (Optional):</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">{`?status=ACTIVE&page=1&limit=10`}</pre>
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
    "sub_vas": [
      {
        "sub_va_id": "SVA_123456",
        "account_number": "7722771002",
        "customer_name": "David Peter",
        "status": "ACTIVE",
        "balance": 1500.50,
        "created_at": "2024-01-15T10:30:00Z"
      },
      {
        "sub_va_id": "SVA_123457",
        "account_number": "7722771003",
        "customer_name": "Jane Smith",
        "status": "ACTIVE",
        "balance": 2500.00,
        "created_at": "2024-01-16T14:20:00Z"
      }
    ],
    "total": 45,
    "page": 1,
    "limit": 10
  },
  "message": "Sub VAs Listed Successfully"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Query Parameters</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Parameter</th>
                  <th className="text-left py-2 px-4">Type</th>
                  <th className="text-left py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>status</code>
                  </td>
                  <td className="py-2 px-4">String</td>
                  <td className="py-2 px-4">Filter by status (ACTIVE/INACTIVE)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>page</code>
                  </td>
                  <td className="py-2 px-4">Number</td>
                  <td className="py-2 px-4">Page number for pagination</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>limit</code>
                  </td>
                  <td className="py-2 px-4">Number</td>
                  <td className="py-2 px-4">Number of records per page</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DocLayout>
  )
}
