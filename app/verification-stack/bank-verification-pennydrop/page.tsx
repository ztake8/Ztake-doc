import { DocLayout } from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function BankVerificationPennyDropPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Bank Verification (PennyDrop)</h1>
        <p className="text-muted-foreground">
          Verify bank account details by depositing Re. 1 and get account holder name.
        </p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/verify/pennyDrop</code>
          <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">POST</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto">
            {`{
  "account_number": "77220101845051",
  "ifsc": "FDRL0007777",
  "reference_id": "VER_001"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
            {`{
  "status": true,
  "data": {
    "account_holder_name": "DAVID PETER",
    "account_number": "77220101845051",
    "ifsc": "FDRL0007777",
    "verified": true
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
