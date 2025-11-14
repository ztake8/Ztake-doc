import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function CreatePGLinkPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Create PG Link</h1>
          <p className="text-muted-foreground">
            Use this API to create a Payment Gateway Link to redirect and collect payments from your customers.
          </p>
        </div>

        <div className="bg-slate-100 p-4 rounded">
          <h3 className="font-semibold mb-3">Supported Payment Modes:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>UPI</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>Credit / Prepaid Card</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>Debit Card</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>Net Banking</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>Wallets</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>Bank EMI</span>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="text-sm font-medium text-blue-900">
            <strong>Payment Flow:</strong>
          </p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-900 mt-2">
            <li>Create a PG Link using this API</li>
            <li>Redirect your payer to the link in a browser</li>
            <li>The payer completes the payment</li>
            <li>Receive a webhook from Ztake with the collection status</li>
          </ol>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">API Request</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium mb-1">API URL:</p>
              <code className="block bg-muted p-3 rounded text-sm">https://api.ztake.in/client/createPGCollection</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Method:</p>
              <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">POST</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Auth:</p>
              <p className="text-sm">
                Please refer to the{" "}
                <a href="/authorization" className="text-blue-600 hover:underline">
                  Authorization page
                </a>
                .
              </p>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Request Body:</p>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
                {`{
  "reference_id": "REF0028", // Should be a unique value
  "amount": 50000,
  "name": "Sathya", // Payer name
  "phone": "9999888899", // Payer phone
  "email": "sathya@example.com", // Payer email
  "success_url": "https://app.ztake.in/app/dashboard", // Payment success redirection
  "failure_url": "https://ztake.in/" // Payment failed redirection
}`}
              </pre>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded text-sm text-amber-900">
              <strong>Note:</strong> All body params are mandatory
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Request Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left">Parameter</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Required</th>
                    <th className="border border-slate-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">reference_id</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Unique reference ID for this transaction</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">amount</td>
                    <td className="border border-slate-300 px-4 py-2">Number</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Amount in paise (50000 = ₹500)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">name</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Payer's name</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">phone</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Payer's phone number</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">email</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">Payer's email address</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">success_url</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">URL to redirect on successful payment</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-mono text-sm">failure_url</td>
                    <td className="border border-slate-300 px-4 py-2">String</td>
                    <td className="border border-slate-300 px-4 py-2">Yes</td>
                    <td className="border border-slate-300 px-4 py-2">URL to redirect on failed payment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Response Body</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "status": true,
  "statusCode": 200,
  "data": {
    "reference_id": "REF0028",
    "pg_order_id": "ZTPG007",
    "redirectUrl": "https://app.ztake.in/v2/pay/d73759329dac621cbcee176fe8c4",
    "amount": 50000,
    "name": "Sathya",
    "phone": "9999888899",
    "email": "sathya@example.com",
    "success_url": "https://app.ztake.in/app/dashboard",
    "failure_url": "https://ztake.in/"
  },
  "message": ""
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Sample Callback Response</h2>
          <p className="text-muted-foreground mb-4">
            Once payment is collected, you will receive a callback.{" "}
            <a href="/webhooks/pg-collection-callback" className="text-blue-600 hover:underline">
              Learn more
            </a>
            .
          </p>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  "status": true,
  "statusCode": 200,
  "data": {
    "transaction_id": "TEZTTR00321443",
    "reference_id": "REF001755076992",
    "pg_order_id": "TEZTPG00225",
    "amount": 1,
    "payment_mode": "CREDIT CARD",
    "card_network": "RUPAY",
    "card_masked_number": "0969",
    "card_issuer": "STATE BANK OF MAURITIUS",
    "status": "SUCCESS",
    "utr": "122114516166",
    "holderName": "Harish",
    "type": "Credit",
    "charge": 1.00,
    "gst": 0.18
  },
  "event": "PG_LINK_COLLECTION"
}`}
          </pre>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Possible values for payment_mode</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "UPI",
                "IMPS",
                "DEBIT CARD",
                "CREDIT CARD",
                "NET BANKING",
                "MOBILE WALLET",
                "OLA MONEY",
                "EMI",
                "PAY LATER",
                "E CHALAN",
                "NEFT",
              ].map((mode) => (
                <span key={mode} className="bg-slate-100 px-3 py-1 rounded border text-sm font-mono">
                  {mode}
                </span>
              ))}
            </div>
          </div>
        </Card>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <h3 className="font-semibold text-amber-900 mb-2">Important Notes</h3>
          <ul className="list-disc list-inside space-y-1 text-amber-900 text-sm">
            <li>Redirect users to the redirectUrl provided in the response</li>
            <li>Amount should be in paise (multiply rupees by 100)</li>
            <li>Ensure webhooks are configured to receive payment status updates</li>
            <li>The payment link remains valid for 24 hours</li>
            <li>Supports all major payment methods including UPI, Cards, Net Banking, and Wallets</li>
          </ul>
        </div>
      </div>
    </DocLayout>
  )
}
