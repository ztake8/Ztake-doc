import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function PayoutsContactManagementPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Payouts Contact Management</h1>
        <p className="text-muted-foreground">Manage and store beneficiary details for faster payouts.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">What is Contact Management?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Contact Management allows you to save beneficiary bank account details for future payouts. Once saved, you
            can initiate payouts using just the contact ID without entering bank details each time.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Faster payout initiation</li>
            <li>Reduced errors from re-entering details</li>
            <li>Better tracking of frequent beneficiaries</li>
            <li>Simplified API integration</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Create Contact</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/contacts/create</code>
          <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">POST</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto text-foreground">
            {`{
  \"name\": \"Donald musk\",
  \"email\": \"[email protected]\",
  \"phone\": \"9876543210\",
  \"account_number\": \"77220101845051\",
  \"ifsc\": \"FDRL0007777\",
  \"account_type\": \"savings\"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Use Contact for Payout</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "contact_id": "CONT_123456",
  "amount": 1000,
  "payment_mode": "IMPS",
  "reference_id": "PAYOUT_001"
}`}
          </pre>
        </Card>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="text-sm font-medium text-blue-800 mb-1">Note</p>
          <p className="text-sm text-blue-700">
            All bank account details are encrypted and stored securely. You can update or delete contacts anytime.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
