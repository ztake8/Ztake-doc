import { DocLayout } from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function FetchPaymentStatusPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Fetch Payment Status</h1>
        <p className="text-muted-foreground">Check the status of a bill payment transaction.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/bbps/paymentStatus</code>
          <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">GET</code>
          <code className="block bg-muted p-3 rounded text-sm mt-2">?transaction_id=TXN_789012</code>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "status": true,
  "data": {
    "transaction_id": "TXN_789012",
    "status": "SUCCESS",
    "amount": 1250.50,
    "biller_name": "Maharashtra State Electricity Board",
    "payment_date": "2024-01-20T10:30:00Z",
    "receipt_number": "RCP_123456"
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
