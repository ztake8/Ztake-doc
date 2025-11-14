import DocLayout from "@/components/doc-layout"
import { Card } from "@/components/ui/card"

export default function AadhaarDigilockerOKYCPage() {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Aadhaar DigiLocker OKYC</h1>
        <p className="text-muted-foreground">Complete Aadhaar verification with OTP validation via DigiLocker.</p>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Step 1: Generate OTP</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">
            https://api.ztake.in/verify/aadhaar/generateOTP
          </code>
          <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">POST</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto">
            {`{
  "aadhaar_number": "123456789012"
}`}
          </pre>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Step 2: Verify OTP</h2>
          <code className="block bg-muted p-3 rounded text-sm mb-2">https://api.ztake.in/verify/aadhaar/verifyOTP</code>
          <pre className="bg-muted p-4 rounded text-sm mt-4 overflow-x-auto">
            {`{
  "request_id": "REQ_123",
  "otp": "123456"
}`}
          </pre>
        </Card>
      </div>
    </DocLayout>
  )
}
