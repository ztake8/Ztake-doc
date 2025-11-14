import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function PrefillAlternateBureauPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Prefill Alternate Bureau</h1>
        <p className="text-muted-foreground">Get customer details from alternate credit bureau.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/verify/alternateBureau</code>
          <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">POST</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto">
            {`{
  "phone": "9876543210"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
            {`{
  "status": true,
  "data": {
    "name": "David Peter",
    "email": "[email protected]",
    "pan": "ABCDE1234F"
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
