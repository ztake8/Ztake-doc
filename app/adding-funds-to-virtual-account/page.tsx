import { DocLayout } from "@/components/doc-layout"

export default function AddingFundsPage() {
  return (
    <DocLayout title="Adding Funds to Virtual Account">
      <h1>Adding Funds to Virtual Account</h1>

      <p>To use Ztake Payouts, you need to maintain a balance in your virtual account. Here's how to add funds:</p>

      <h2>Bank Transfer Method</h2>

      <ol className="list-decimal list-inside space-y-2 mb-4">
        <li>Log in to your Ztake Dashboard</li>
        <li>Navigate to Wallet → Add Funds</li>
        <li>Copy your unique virtual account details</li>
        <li>Transfer funds from your bank account</li>
        <li>Funds will reflect within 30 minutes</li>
      </ol>

      <h2>UPI Transfer</h2>

      <p>
        You can also add funds instantly using UPI. Your virtual account has a dedicated UPI ID that you can use from
        any UPI app.
      </p>

      <h2>Minimum Balance</h2>

      <p>
        Maintain a minimum balance of ₹1,000 to ensure uninterrupted payout services. Set up low balance alerts in your
        dashboard to get notified.
      </p>

      <h2>Auto-reload</h2>

      <p>
        Enable auto-reload to automatically add funds when your balance falls below a threshold. This ensures your
        payouts are never interrupted.
      </p>
    </DocLayout>
  )
}
