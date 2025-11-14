import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function VerificationStackPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Verification Stack</h1>
          <p className="text-muted-foreground">
            A collection of identity and bank verification services used to onboard customers and validate payouts.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Available Verification APIs</h2>
          <div className="grid gap-3">
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Bank Verification (PennyDrop)</h3>
              <p className="text-xs text-muted-foreground">Verify bank account by dropping a penny</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Sync Bank Verification</h3>
              <p className="text-xs text-muted-foreground">Get instant account holder name</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Penniless Verification</h3>
              <p className="text-xs text-muted-foreground">Verify without dropping any money</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">PAN Premium/Lite</h3>
              <p className="text-xs text-muted-foreground">Verify PAN and get details</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Aadhaar DigiLocker OKYC</h3>
              <p className="text-xs text-muted-foreground">Complete Aadhaar verification</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">GST Verification</h3>
              <p className="text-xs text-muted-foreground">Verify business GST details</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-semibold text-sm">Credit Reports</h3>
              <p className="text-xs text-muted-foreground">CRIF & Experian credit reports</p>
            </div>
          </div>
        </Card>
      </div>
    </DocLayout>
  )
}
