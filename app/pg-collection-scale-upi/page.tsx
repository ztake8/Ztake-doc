import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function PGCollectionPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">PG Collection (Scale UPI)</h1>
          <p className="text-muted-foreground">
            PG Collection enables UPI-based collection flows and auxiliary features like payment links and dynamic VPAs.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">What is Scale UPI?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Scale UPI is Ztake's payment gateway solution that allows you to accept UPI payments at scale. It provides
            multiple collection methods including static VPAs, dynamic VPAs, payment links, and QR codes.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Accept UPI payments via multiple channels</li>
            <li>Create static or dynamic VPAs</li>
            <li>Generate payment links and QR codes</li>
            <li>Trigger UPI collect requests</li>
            <li>Real-time payment notifications</li>
            <li>Refund capabilities</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Collection Methods</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border rounded p-4">
              <h3 className="font-semibold mb-2">Static VPA</h3>
              <p className="text-sm text-muted-foreground">Persistent VPA for recurring collections</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-semibold mb-2">Dynamic VPA</h3>
              <p className="text-sm text-muted-foreground">Single-use VPA for specific transactions</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-semibold mb-2">Payment Links</h3>
              <p className="text-sm text-muted-foreground">Shareable links for easy payments</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-semibold mb-2">QR Codes</h3>
              <p className="text-sm text-muted-foreground">Scannable codes for instant payments</p>
            </div>
          </div>
        </Card>
      </div>
    </DocLayout>
  )
}
