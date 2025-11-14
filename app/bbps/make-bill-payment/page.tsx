import { DocLayout } from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function MakeBillPaymentPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Make Bill Payment</h1>
        <p className="text-muted-foreground">Process bill payment for a customer.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/bbps/payBill</code>
          <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">POST</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto text-foreground">
            {`{
  "bill_id": "BILL_123",
  "amount": 1250.50,
  "customer_mobile": "9876543210",
  "reference_id": "PAY_001"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "status": true,
  "data": {
    "transaction_id": "TXN_789012",
    "reference_id": "PAY_001",
    "amount": 1250.50,
    "status": "SUCCESS",
    "receipt_number": "RCP_123456",
    "timestamp": "2024-01-20T10:30:00Z"
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
