import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function QueryListTransactionsPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Query or List Transactions</h1>
          <p className="text-muted-foreground">Query PG transactions, filter by status/date/merchant.</p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/pg/listTransactions</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">GET</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Query Parameters:</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
                {`?status=SUCCESS&from_date=2024-01-01&to_date=2024-01-31&page=1&limit=20`}
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
    "transactions": [
      {
        "transaction_id": "TXN_123456",
        "order_id": "ORDER_001",
        "amount": 1000,
        "status": "SUCCESS",
        "payment_mode": "UPI",
        "customer_vpa": "customer@paytm",
        "utr": "UTR123456789",
        "created_at": "2024-01-15T10:30:00Z"
      }
    ],
    "total": 150,
    "page": 1,
    "limit": 20
  },
  "message": "Transactions Retrieved Successfully"
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
