import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function PanPremiumPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">PAN Premium</h1>
        <p className="text-muted-foreground">
          Get complete PAN holder information including father's name, DOB, and more.
        </p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/verify/panPremium</code>
          <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">POST</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto">
            {`{
  "pan": "ABCDE1234F"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
            {`{
  "status": true,
  "data": {
    "pan": "ABCDE1234F",
    "full_name": "DAVID PETER",
    "father_name": "RICHARD DOE",
    "dob": "01/01/1990",
    "status": "VALID"
  }
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
