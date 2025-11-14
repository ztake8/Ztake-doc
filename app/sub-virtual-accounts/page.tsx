import DocLayout from "@/components/doc-layout"

export default function SubVirtualAccountsPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sub Virtual Accounts</h1>
          <p className="text-muted-foreground">
            Sub Virtual Accounts (Sub VAs) let you create segregated virtual accounts for customers or merchants.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">What are Sub Virtual Accounts?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sub Virtual Accounts allow you to create isolated virtual bank accounts under your main Ztake account.
              Each Sub VA has its own account number and can receive, hold, and send funds independently.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Use Cases</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Create dedicated accounts for each of your customers</li>
              <li>Segregate funds for different merchants on your platform</li>
              <li>Automate reconciliation with separate virtual accounts</li>
              <li>Enable wallet-like functionality for end users</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Create unlimited Sub VAs</li>
              <li>Unique account number for each Sub VA</li>
              <li>Real-time balance tracking</li>
              <li>Activate/Deactivate accounts as needed</li>
              <li>Initiate payouts directly from Sub VAs</li>
            </ul>
          </div>
        </div>
      </div>
    </DocLayout>
  )
}
