import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function ReversePennyDropPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Reverse Penny Drop</h1>
        <p className="text-muted-foreground">Collect Re. 1 from customer to verify their bank account.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/verify/reversePennyDrop</code>
          <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">POST</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto">
            {`{
  "customer_name": "David Peter",
  "reference_id": "RPD_001"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
            {`{
  "status": true,
  "data": {
    "vpa": "verify123@ztake",
    "reference_id": "RPD_001",
    "instructions": "Ask customer to send Re. 1 to this VPA"
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
