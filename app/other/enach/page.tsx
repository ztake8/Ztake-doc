import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function ENACHPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">eNACH</h1>
        <p className="text-muted-foreground">
          Set up automated recurring payments using eNACH (Electronic National Automated Clearing House).
        </p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">What is eNACH?</h2>
          <p className="text-muted-foreground leading-relaxed">
            eNACH is an electronic version of the NACH system that allows businesses to collect recurring payments from
            customers automatically after obtaining their consent. It's ideal for subscriptions, EMIs, insurance
            premiums, and other recurring payment scenarios.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Automated recurring collections</li>
            <li>Paperless mandate registration</li>
            <li>Lower transaction costs compared to other methods</li>
            <li>Support for both debit and credit mandates</li>
            <li>Wide bank coverage across India</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Create an eNACH mandate with customer details</li>
            <li>Customer approves the mandate via net banking/debit card</li>
            <li>Mandate gets registered with the bank</li>
            <li>Execute debits as per the mandate schedule</li>
            <li>Get real-time notifications on payment status</li>
          </ol>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Request Access</h2>
          <p className="text-muted-foreground">
            eNACH is available on request. Contact us at{" "}
            <a href="mailto:[email protected]" className="text-blue-600 underline">
              {"sales@ztake.in"}
            </a>{" "}
            to enable this feature for your account.
          </p>
        </Card>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="text-sm font-medium text-blue-800 mb-1">Note</p>
          <p className="text-sm text-blue-700">
            eNACH mandates typically take 2-3 business days for bank approval after customer authorization.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
