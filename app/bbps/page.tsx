import { DocLayout } from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function BBPSPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">BBPS (Bill Payments)</h1>
          <p className="text-muted-foreground">
            BBPS integration to fetch billers, get bills, and execute bill payments across supported categories.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">What is BBPS?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Bharat Bill Payment System (BBPS) is an integrated bill payment system offering interoperable and accessible
            bill payment services to customers through a network of agents.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Supported Categories</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Electricity</h3>
              <p className="text-xs text-muted-foreground">Pay electricity bills</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Water</h3>
              <p className="text-xs text-muted-foreground">Municipal water bills</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Gas</h3>
              <p className="text-xs text-muted-foreground">LPG and piped gas</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Mobile/DTH</h3>
              <p className="text-xs text-muted-foreground">Recharges and postpaid</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Broadband</h3>
              <p className="text-xs text-muted-foreground">Internet bills</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Insurance</h3>
              <p className="text-xs text-muted-foreground">Premium payments</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">How it Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>List available categories</li>
            <li>Select biller from category</li>
            <li>Fetch bill details</li>
            <li>Make payment</li>
            <li>Get payment confirmation</li>
          </ol>
        </Card>
      </div>
    </DocLayout>
  )
}
