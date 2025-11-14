import { DocLayout } from "@/components/doc-layout"
import { Lock, Mail, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VerificationStackAccessPage() {
  return (
    <DocLayout title="Verification Stack - Access Required">
      <div className="prose prose-gray max-w-none">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-orange-100 rounded-lg">
            <Lock className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 m-0">Verification Stack</h1>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
          <div className="flex items-start gap-3">
            <Shield className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mt-0 mb-2">Protected Section</h3>
              <p className="text-gray-700 mb-0">
                The Verification Stack section contains sensitive API documentation for identity verification, KYC, and
                financial verification services. This section is not publicly accessible.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Request Access</h2>

        <p className="text-gray-900">
          To access the Verification Stack documentation, you need to be an authorized Ztake partner with an active API
          account. This section includes:
        </p>

        <ul className="text-gray-900 space-y-2">
          <li>Bank Account Verification (Pennydrop, Sync, Penniless)</li>
          <li>PAN Card Verification (Premium & Lite)</li>
          <li>Aadhaar Verification & OKYC</li>
          <li>Credit Report Integration (CRIF, Experian)</li>
          <li>GST Verification</li>
          <li>Passport & Voter ID Verification</li>
          <li>And more identity verification services</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mt-0 mb-4 flex items-center gap-2">
            <Mail className="h-5 w-5 text-blue-600" />
            How to Get Access
          </h3>

          <div className="space-y-4 text-gray-900">
            <div>
              <p className="font-semibold mb-2">1. Contact Our Sales Team</p>
              <p className="text-gray-700">
                Reach out to our sales team at{" "}
                <a href="mailto:sales@ztake.in" className="text-blue-600 hover:underline">
                  sales@ztake.in
                </a>{" "}
                to discuss your verification needs.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">2. Complete KYB Process</p>
              <p className="text-gray-700">
                Complete our Know Your Business (KYB) verification process and sign the necessary agreements.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">3. Receive API Credentials</p>
              <p className="text-gray-700">
                Once approved, you'll receive your API credentials and access to the full Verification Stack
                documentation.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a href="mailto:sales@ztake.in">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Sales Team</Button>
            </a>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mt-0 mb-3">Already Have Access?</h3>
          <p className="text-gray-700 mb-4">
            If you already have API credentials for the Verification Stack, please log in to your Ztake dashboard to
            access the complete documentation.
          </p>
          <a href="https://ztake.in/login">
            <Button variant="outline" className="border-gray-300 bg-transparent">
              Go to Dashboard
            </Button>
          </a>
        </div>
      </div>
    </DocLayout>
  )
}
