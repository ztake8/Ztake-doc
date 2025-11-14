import { DocLayout } from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function SelectBillerPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Select Biller</h1>
        <p className="text-muted-foreground">Get list of billers for a specific category.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/bbps/billers</code>
          <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">GET</code>
          <code className="block bg-muted p-3 rounded text-sm mt-2">?category=ELEC</code>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "status": true,
  "data": {
    "billers": [
      {
        "biller_id": "MSEB001",
        "biller_name": "Maharashtra State Electricity Board",
        "state": "Maharashtra"
      },
      {
        "biller_id": "BEST001",
        "biller_name": "BEST Mumbai",
        "state": "Maharashtra"
      }
    ]
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
