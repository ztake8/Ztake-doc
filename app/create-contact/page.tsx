import { DocLayout } from "@/components/doc-layout"

export default function CreateContactPage() {
  return (
    <DocLayout title="Create Contact">
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Use this API to create and save a new contact with relevant details like bank account number, IFSC, UPI ID,
          name, mobile number, and identifier tags.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Request</h2>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm">
            <strong>API URL:</strong> https://api.ztake.in/client/createContact
          </p>
          <p className="font-mono text-sm mt-2">
            <strong>Method:</strong> POST
          </p>
          <p className="text-sm mt-2">
            <strong>Auth:</strong> Please refer to the Authorization page.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Body</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`{
  "reference": "Test0000111", //unique id
  "name": "TestUser", //contact name
  "type": "account_number", //account_number, vpa
  "bank_account_number": "13232323232", //conditional
  "bank_ifsc_code": "UTIB0CCH274", //conditional
  "vpa": "", //conditional - only for VPA
  //below params are optional
  "email": "[email protected]",
  "phone": "",
  "bank_name": ""
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Response</h2>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`{
  "status": true,
  "statusCode": 200,
  "data": {
    "contact_id": "BENEF30789",
    "reference": "test0002323",
    "type": "account_number",
    "name": "TestUser",
    "email": "[email protected]",
    "phone": "",
    "bank_account_number": "132323232323",
    "bank_name": "",
    "bank_ifsc_code": "UTIB0CCH274",
    "vpa": "",
    "createdAt": "2025-07-03T10:40:14.494Z"
  },
  "message": "contact created"
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Field Descriptions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-4 py-2 text-left">Field</th>
                <th className="border px-4 py-2 text-left">Type</th>
                <th className="border px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">reference</td>
                <td className="border px-4 py-2">String</td>
                <td className="border px-4 py-2">Unique reference ID for the contact</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">name</td>
                <td className="border px-4 py-2">String</td>
                <td className="border px-4 py-2">Contact's full name</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">type</td>
                <td className="border px-4 py-2">String</td>
                <td className="border px-4 py-2">Type of contact: account_number or vpa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">bank_account_number</td>
                <td className="border px-4 py-2">String</td>
                <td className="border px-4 py-2">Bank account number (required for account_number type)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">bank_ifsc_code</td>
                <td className="border px-4 py-2">String</td>
                <td className="border px-4 py-2">IFSC code (required for account_number type)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">vpa</td>
                <td className="border px-4 py-2">String</td>
                <td className="border px-4 py-2">UPI VPA (required for vpa type)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DocLayout>
  )
}
