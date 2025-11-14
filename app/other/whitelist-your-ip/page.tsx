import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function WhitelistYourIPPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Whitelist Your IP</h1>
        <p className="text-muted-foreground">Add IP addresses to your whitelist for enhanced security.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Why Whitelist IPs?</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Enhanced security by restricting API access to specific IPs</li>
            <li>Prevent unauthorized access</li>
            <li>Comply with security policies</li>
            <li>Protect sensitive data</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">How to Whitelist</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Log in to your Ztake dashboard</li>
            <li>Navigate to Settings → Developer Controls</li>
            <li>Find the IP Whitelisting section</li>
            <li>Add your server IP addresses</li>
            <li>Save changes</li>
          </ol>
        </Card>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
          <p className="text-sm font-medium text-blue-800 mb-1">Note</p>
          <p className="text-sm text-blue-700">
            You can whitelist multiple IP addresses. Make sure to add all your production and staging server IPs.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Finding Your IP Address</h2>
          <p className="text-muted-foreground mb-4">To find your server's public IP address:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              For Linux/Mac: Run <code className="bg-muted px-2 py-1 rounded">curl ifconfig.me</code>
            </li>
            <li>
              For Windows: Run <code className="bg-muted px-2 py-1 rounded">curl ifconfig.me</code> in PowerShell
            </li>
            <li>Or visit whatismyip.com from your server</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Important Considerations</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Once enabled, only whitelisted IPs can access the API</li>
            <li>Requests from non-whitelisted IPs will be blocked</li>
            <li>Update your whitelist when changing servers or IPs</li>
            <li>Contact support if you need to remove IP whitelisting</li>
          </ul>
        </Card>
      </div>
    </DocLayout>
  )
}
