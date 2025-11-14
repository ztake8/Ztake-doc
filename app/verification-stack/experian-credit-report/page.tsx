import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function ExperianCreditReportPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Experian Credit Report</h1>
        <p className="text-muted-foreground">Pull Experian credit report instantly.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/verify/experianReport</code>
          <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">POST</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto">
            {`{
  "pan": "ABCDE1234F",
  "phone": "9876543210",
  "consent": true
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
            {`{
  "status": true,
  "data": {
    "credit_score": 780,
    "report_url": "https://...",
    "summary": {...}
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
