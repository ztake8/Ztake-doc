import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function CreateUPISubMerchantPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Create UPI Sub Merchant</h1>
          <p className="text-muted-foreground">Register a sub-merchant for UPI acceptance under your parent account.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/pg/createSubMerchant</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">POST</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Body:</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
                {`{
  "merchant_name": "ABC Traders",
  "merchant_vpa": "abctraders",
  "business_type": "retail",
  "contact_person": "David Peter",
  "email": "[email protected]",
  "phone": "9876543210"
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
    "sub_merchant_id": "SUBM_123456",
    "merchant_name": "ABC Traders",
    "vpa": "abctraders@ztake",
    "status": "ACTIVE",
    "created_at": "2024-01-20T10:00:00Z"
  },
  "message": "Sub Merchant Created Successfully"
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
