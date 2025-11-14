import { DocLayout } from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function FetchBillPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Fetch Bill</h1>
        <p className="text-muted-foreground">Fetch bill details for a customer.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/bbps/fetchBill</code>
          <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">POST</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto text-foreground">
            {`{
  "biller_id": "MSEB001",
  "customer_params": {
    "consumer_number": "123456789"
  }
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "status": true,
  "data": {
    "bill_id": "BILL_123",
    "customer_name": "David Peter",
    "bill_amount": 1250.50,
    "due_date": "2024-01-31",
    "bill_date": "2024-01-01",
    "bill_period": "Dec 2023"
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
