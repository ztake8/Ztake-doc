import { DocLayout } from "@/components/doc-layout"

export default function DocsAIGuidePage() {
  return (
    <DocLayout title="Guide on Ztake AI">
      <h1>Guide on Ztake AI</h1>

      <p>
        Ztake AI is your intelligent assistant for navigating our documentation and getting quick answers to your
        integration questions.
      </p>

      <h2>What is Ztake AI?</h2>

      <p>
        Ztake AI is an AI-powered chatbot trained on our entire API documentation. It can help you find information,
        understand API endpoints, and troubleshoot issues quickly.
      </p>

      <h2>How to Use</h2>

      <ol className="list-decimal list-inside space-y-2 mb-4">
        <li>Click the "Ztake AI" button in the top navigation</li>
        <li>Type your question in natural language</li>
        <li>Get instant answers with relevant documentation links</li>
        <li>Ask follow-up questions for clarification</li>
      </ol>

      <h2>Example Questions</h2>

      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>"How do I initiate a payout?"</li>
        <li>"What are the required fields for bank verification?"</li>
        <li>"How do I handle webhook callbacks?"</li>
        <li>"What's the rate limit for the API?"</li>
      </ul>

      <h2>Tips for Best Results</h2>

      <ul className="list-disc list-inside space-y-1">
        <li>Be specific with your questions</li>
        <li>Include context about what you're trying to achieve</li>
        <li>Ask one question at a time for clearer answers</li>
        <li>Use technical terms from our documentation</li>
      </ul>
    </DocLayout>
  )
}
