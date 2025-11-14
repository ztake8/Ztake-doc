import { DocLayout } from "@/components/doc-layout"

export default function GetAndListContactsPage() {
  return (
    <DocLayout title="Get and List Contacts">
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Use this API to retrieve and list all saved contacts or fetch a specific contact by ID or reference.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">List All Contacts</h2>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm">
            <strong>API URL:</strong> https://api.ztake.in/client/listContacts
          </p>
          <p className="font-mono text-sm mt-2">
            <strong>Method:</strong> GET
          </p>
          <p className="text-sm mt-2">
            <strong>Auth:</strong> Please refer to the Authorization page.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Response</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`{
  "status": true,
  "statusCode": 200,
  "data": {
    "contacts": [
      {
        "contact_id": "BENEF30789",
        "reference": "test0002323",
        "type": "account_number",
        "name": "TestUser",
        "email": "[email protected]",
        "phone": "9876543210",
        "bank_account_number": "132323232323",
        "bank_name": "Test Bank",
        "bank_ifsc_code": "UTIB0CCH274",
        "vpa": "",
        "createdAt": "2025-07-03T10:40:14.494Z"
      }
    ],
    "total": 1
  },
  "message": "Contacts fetched successfully"
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Get Single Contact</h2>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm">
            <strong>API URL:</strong> https://api.ztake.in/client/getContact
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
  "contact_id": "BENEF30789"
  // OR
  "reference": "test0002323"
}`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Response</h3>
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
    "phone": "9876543210",
    "bank_account_number": "132323232323",
    "bank_name": "Test Bank",
    "bank_ifsc_code": "UTIB0CCH274",
    "vpa": "",
    "createdAt": "2025-07-03T10:40:14.494Z"
  },
  "message": "Contact fetched successfully"
}`}</code>
          </pre>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-sm">
            <strong>Note:</strong> You can search for a contact using either the contact_id or reference field.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
