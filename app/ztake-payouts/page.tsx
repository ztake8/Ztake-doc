import { DocLayout } from "@/components/doc-layout"

export default function ZtakePayoutsPage() {
  return (
    <DocLayout title="Ztake Payouts">
      <h1>Ztake Payouts</h1>

      <p>
        Ztake Payouts enables you to send money instantly to any bank account, UPI ID, or wallet in India. Our payout
        infrastructure is built for scale, reliability, and speed.
      </p>

      <h2>Features</h2>

      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>
          <strong>Instant Transfers</strong> - Send money 24/7 with IMPS
        </li>
        <li>
          <strong>Bulk Payouts</strong> - Process thousands of payouts in one go
        </li>
        <li>
          <strong>Multiple Modes</strong> - Support for NEFT, IMPS, RTGS, and UPI
        </li>
        <li>
          <strong>99.9% Uptime</strong> - Reliable infrastructure with automatic failover
        </li>
        <li>
          <strong>Real-time Status</strong> - Get instant updates via webhooks
        </li>
      </ul>

      <h2>Getting Started</h2>

      <ol className="list-decimal list-inside space-y-2 mb-4">
        <li>Complete your KYC and get API credentials</li>
        <li>Add funds to your virtual account</li>
        <li>Verify beneficiary bank accounts</li>
        <li>Initiate your first payout</li>
        <li>Set up webhooks for status updates</li>
      </ol>

      <h2>Supported Transfer Modes</h2>

      <div className="grid gap-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2">IMPS</h3>
          <p className="text-sm text-gray-600">Instant transfers 24/7, up to ₹5 lakhs</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2">NEFT</h3>
          <p className="text-sm text-gray-600">Batch transfers during banking hours</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2">RTGS</h3>
          <p className="text-sm text-gray-600">For amounts above ₹2 lakhs</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2">UPI</h3>
          <p className="text-sm text-gray-600">Send to any UPI ID instantly</p>
        </div>
      </div>

      <h2>Pricing</h2>

      <p>
        Competitive pricing starting at ₹2 per transaction. Volume discounts available for high-volume customers.
        Contact sales for custom pricing.
      </p>

      <h2>Next Steps</h2>

      <p>Explore our payout endpoints:</p>

      <ul className="list-disc list-inside space-y-1">
        <li>
          <a href="/ztake-payouts/initiate-payout">Initiate Payout</a>
        </li>
        <li>
          <a href="/ztake-payouts/fetch-balance">Fetch Balance</a>
        </li>
        <li>
          <a href="/ztake-payouts/fetch-transaction-status">Fetch Transaction Status</a>
        </li>
      </ul>
    </DocLayout>
  )
}
