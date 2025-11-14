import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function VerifyIndianPassportPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Verify Indian Passport</h1>
        <p className="text-muted-foreground">Verify Indian passport details.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/verify/passport</code>
          <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">POST</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto">
            {`{
  "passport_number": "A1234567",
  "file_number": "AB1234567890123"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
            {`{
  "status": true,
  "data": {
    "passport_number": "A1234567",
    "name": "David Peter",
    "status": "Active",
    "issue_date": "01/01/2020"
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
