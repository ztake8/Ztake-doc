import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function IPGettingBlacklistedPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">IP Getting Blacklisted</h1>
        <p className="text-muted-foreground">Understanding and resolving IP blacklist issues.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Why Does This Happen?</h2>
          <p className="text-muted-foreground mb-4">
            Your IP gets automatically blacklisted after making more than 3 bad requests, which include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Requests with invalid authentication tokens</li>
            <li>Requests from non-whitelisted IPs (if IP whitelisting is enabled)</li>
            <li>Multiple failed authentication attempts</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Error Message</h2>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto text-foreground">
            {`{
  \"message\": \"Your IP is blocked, please contact care@ztake.in\"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">How to Resolve</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>
              Send your IP address to{" "}
              <a href="mailto:[email protected]" className="text-blue-600 underline">
                {"care@ztake.in"}
              </a>{" "}
              from your registered email
            </li>
            <li>Our team will remove your IP from the blacklist</li>
            <li>Ensure you're using correct authentication tokens</li>
            <li>If using Postman Web, switch to Postman Desktop application</li>
          </ol>
        </Card>

        <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
          <p className="text-sm font-medium text-yellow-800 mb-1">Postman Users</p>
          <p className="text-sm text-yellow-700">
            If you're testing with Postman's web version and encounter this issue, please switch to the Postman Desktop
            application.
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Prevention Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Always verify your API token before making requests</li>
            <li>Whitelist your IPs in the dashboard settings</li>
            <li>Use proper error handling in your code</li>
            <li>Test with valid credentials</li>
          </ul>
        </Card>
      </div>
    </DocLayout>
  )
}
