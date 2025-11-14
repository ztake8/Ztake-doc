import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function PayoutFromSubVAPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Payout from Sub VA</h1>
          <p className="text-muted-foreground">Initiate a payout debiting funds from a Sub VA account.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/client/subVAPayout</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">POST</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Body:</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
                {`{
  "sub_va_id": "SVA_123456",
  "amount": 500,
  "account_number": "77220101845051",
  "ifsc": "FDRL0007777",
  "beneficiaryName": "Richard Hendricks",
  "payment_mode": "IMPS",
  "reference_id": "PAYOUT_12345",
  "transcation_note": "Payment for services"
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
    "transcation_id": "TRAREF00034637453",
    "reference_id": "PAYOUT_12345",
    "amount": 500,
    "payment_mode": "IMPS",
    "status": "PENDING",
    "message": "Transaction Initiated!"
  },
  "message": "Payout Processing"
}`}
          </pre>
        </Card>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="text-sm font-medium text-blue-800 mb-1">Note</p>
          <p className="text-sm text-blue-700">
            The payout will be debited from the specified Sub VA's balance. Ensure the Sub VA has sufficient funds
            before initiating the payout.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
