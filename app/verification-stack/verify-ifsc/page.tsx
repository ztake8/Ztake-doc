import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function VerifyIFSCPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Verify IFSC</h1>
        <p className="text-muted-foreground">Get bank and branch details from IFSC code.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/verify/ifsc</code>
          <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">GET</code>
          <code className="block bg-muted p-3 rounded text-sm mt-2">?ifsc=FDRL0007777</code>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
            {`{
  "status": true,
  "data": {
    "ifsc": "FDRL0007777",
    "bank": "Federal Bank",
    "branch": "Mumbai Branch",
    "address": "123 Main Street, Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra"
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
