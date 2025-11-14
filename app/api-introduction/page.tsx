import { DocLayout } from "@/components/doc-layout"

export default function APIIntroductionPage() {
  const onThisPage = [
    { title: "Production Base URL", id: "production-base-url" },
    { title: "Easy navigation", id: "easy-navigation" },
  ]

  return (
    <DocLayout title="API Introduction" lastEdit="Sep 29 2025" onThisPage={onThisPage}>
      <h1>API Introduction</h1>

      <p>
        The Ztake API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded
        request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and
        verbs.
      </p>

      <h2 id="production-base-url">Production Base URL</h2>
      <pre>
        <code>https://api.ztake.in/</code>
      </pre>

      <p>
        Reach out to us at <a href="mailto:support@ztake.in">support@ztake.in</a> for any support.
      </p>

      <p>
        For sales - Submit a form here -{" "}
        <a href="https://ztake.in/contact-sales.html">https://ztake.in/contact-sales.html</a>
      </p>

      <h2 id="easy-navigation">Easy navigation</h2>

      <p>
        For Payouts product - refer to <a href="/ztake-payouts">Ztake Payouts</a>
      </p>

      <p>
        For UPI Collection product - refer to <a href="/pg-collection">Scale UPI</a>
      </p>

      <p>
        KYC, Bank Verification and more - refer to <a href="/verification-stack">Verification Stack</a>
      </p>

      <p>
        Electricity, Rent, and 25+ categories - refer to <a href="/bbps">Bill Payments API Stack</a>
      </p>
    </DocLayout>
  )
}
