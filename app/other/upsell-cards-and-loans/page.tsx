import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function UpsellCardsAndLoansPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Upsell Cards and Loans</h1>
        <p className="text-muted-foreground">Partner with Ztake to offer credit cards and loans to your customers.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Why Upsell Financial Products?</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Earn commission on every successful application</li>
            <li>Enhance customer lifetime value</li>
            <li>Provide additional services to your users</li>
            <li>Seamless API integration</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Available Products</h2>
          <div className="space-y-3">
            <div className="border rounded p-4">
              <h3 className="font-semibold mb-1">Credit Cards</h3>
              <p className="text-sm text-muted-foreground">Partner with leading banks to offer instant credit cards</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-semibold mb-1">Personal Loans</h3>
              <p className="text-sm text-muted-foreground">Instant personal loans up to ₹5 lakhs</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-semibold mb-1">Business Loans</h3>
              <p className="text-sm text-muted-foreground">Working capital for businesses</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Get Started</h2>
          <p className="text-muted-foreground mb-4">
            Contact us at{" "}
            <a href="mailto:[email protected]" className="text-blue-600 underline">
              {"sales@ztake.in"}
            </a>{" "}
            to enable this feature.
          </p>
        </Card>
      </div>
    </DocLayout>
  )
}
