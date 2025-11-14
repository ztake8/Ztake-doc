import { DocLayout } from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function CreateSubVAPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Create Sub VA</h1>
          <p className="text-muted-foreground">Create a new sub virtual account to allocate funds per customer.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/client/createSubVA</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">POST</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Body:</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
                {`{
  "customer_name": "David Peter",
  "customer_email": "[email protected]",
  "customer_phone": "9876543210",
  "reference_id": "CUST_12345"
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
    "account_number": "7722771002",
    "ifsc": "UTIB0CCH274",
    "customer_name": "David Peter",
    "reference_id": "CUST_12345",
    "status": "ACTIVE",
    "balance": 0
  },
  "message": "Sub VA Created Successfully"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Parameters</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Parameter</th>
                  <th className="text-left py-2 px-4">Type</th>
                  <th className="text-left py-2 px-4">Required</th>
                  <th className="text-left py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>customer_name</code>
                  </td>
                  <td className="py-2 px-4">String</td>
                  <td className="py-2 px-4">Yes</td>
                  <td className="py-2 px-4">Name of the customer</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>customer_email</code>
                  </td>
                  <td className="py-2 px-4">String</td>
                  <td className="py-2 px-4">Yes</td>
                  <td className="py-2 px-4">Email address of the customer</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>customer_phone</code>
                  </td>
                  <td className="py-2 px-4">String</td>
                  <td className="py-2 px-4">Yes</td>
                  <td className="py-2 px-4">Phone number of the customer</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">
                    <code>reference_id</code>
                  </td>
                  <td className="py-2 px-4">String</td>
                  <td className="py-2 px-4">Yes</td>
                  <td className="py-2 px-4">Unique identifier for the Sub VA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DocLayout>
  )
}
