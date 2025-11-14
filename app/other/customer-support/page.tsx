import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function CustomerSupportPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Customer Support</h1>
        <p className="text-muted-foreground">Get help with your Ztake integration and account.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-sm mb-1">Email Support</p>
              <a href="mailto:[email protected]" className="text-blue-600 underline">
                support@ztake.in
              </a>
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">Technical Support</p>
              <a href="mailto:[email protected]" className="text-blue-600 underline">
                care@ztake.in
              </a>
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">Phone Support</p>
              <p className="text-muted-foreground">+91-9220592512 (Mon-Fri, 10 AM - 6 PM IST)</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Support Hours</h2>
          <p className="text-muted-foreground">
            Our support team is available Monday through Friday, 10:00 AM to 6:00 PM IST. For urgent issues outside
            these hours, please email us and we'll respond as soon as possible.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>API Documentation</li>
            <li>Postman Collection</li>
            <li>Integration Guides</li>
            <li>FAQs</li>
          </ul>
        </Card>
      </div>
    </DocLayout>
  )
}
