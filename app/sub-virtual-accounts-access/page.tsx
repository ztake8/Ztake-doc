import { DocLayout } from "@/components/doc-layout"
import { Lock, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SubVirtualAccountsAccessPage() {
  return (
    <DocLayout title="Sub Virtual Accounts Access">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-orange-100 rounded-lg">
            <Lock className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Sub Virtual Accounts</h1>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <div className="flex items-start">
            <Lock className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Restricted Access</h3>
              <p className="text-yellow-800">
                The Sub Virtual Accounts API section requires special authorization and is not publicly accessible. This
                feature is available only to approved partners and enterprise customers.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">About Sub Virtual Accounts</h2>
          <p className="text-gray-900 leading-relaxed mb-6">
            Sub Virtual Accounts allow you to create and manage multiple virtual accounts under your main account. This
            feature enables advanced use cases such as:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="text-gray-900">
              <strong>Multi-tenant management:</strong> Segregate funds for different customers or business units
            </li>
            <li className="text-gray-900">
              <strong>Automated reconciliation:</strong> Track payments and payouts at a granular level
            </li>
            <li className="text-gray-900">
              <strong>Marketplace support:</strong> Manage seller accounts and split payments efficiently
            </li>
            <li className="text-gray-900">
              <strong>Escrow services:</strong> Hold funds temporarily before releasing to beneficiaries
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Get Access</h2>
          <p className="text-gray-900 leading-relaxed mb-6">
            To access the Sub Virtual Accounts API documentation and enable this feature for your account, please
            contact our sales team. Our team will evaluate your use case and provide the necessary access credentials.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Sales Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <a href="mailto:sales@ztake.in" className="text-blue-600 hover:text-blue-800 font-medium">
                  sales@ztake.in
                </a>
              </div>
              
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button asChild className="bg-orange-600 text-white hover:bg-orange-700">
              <a href="mailto:sales@ztake.in">Request Access</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/api-introduction">Back to Documentation</a>
            </Button>
          </div>
        </div>
      </div>
    </DocLayout>
  )
}
