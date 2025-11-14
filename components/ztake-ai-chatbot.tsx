"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Sparkles, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function ZtakeAIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Ztake AI, your documentation assistant. I can help you find information, understand API endpoints, and troubleshoot issues. What can I help you with today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(input)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1000)
  }

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("payout") || lowerQuery.includes("payment")) {
      return "I can help you with payouts! You can use the Initiate Payout endpoint (POST /v2/payouts/initiate) to send payments. Key parameters include amount, beneficiary details, and mode. Would you like to know more about any specific aspect?"
    }

    if (lowerQuery.includes("authorization") || lowerQuery.includes("auth") || lowerQuery.includes("api key")) {
      return "For authorization, you need to include your API key in the Authorization header as 'Bearer YOUR_API_KEY'. You can obtain your API key from the Ztake dashboard. Make sure to keep it secure and never share it publicly."
    }

    if (lowerQuery.includes("webhook")) {
      return "Ztake supports webhooks for real-time notifications. You can configure webhooks for debit events, credit events, verification results, and PG collection callbacks. Each webhook includes a signature for verification. Check the Webhooks section for implementation details."
    }

    if (lowerQuery.includes("virtual account") || lowerQuery.includes("sub va")) {
      return "Sub Virtual Accounts allow you to create segregated accounts for your customers. You can create, activate, deactivate, and manage SVAs through our API. Each SVA has a unique account number and can receive payments independently."
    }

    if (lowerQuery.includes("verification") || lowerQuery.includes("kyc")) {
      return "Our Verification Stack offers multiple verification options including PAN, Aadhaar, Bank Account (Pennydrop), GST, and more. This section requires special access. Please contact our sales team to enable verification APIs for your account."
    }

    if (lowerQuery.includes("upi") || lowerQuery.includes("pg collection")) {
      return "Scale UPI allows you to collect payments via UPI. You can create static VPAs, dynamic VPAs, initiate UPI Collect requests, or generate PG links. Each method supports real-time payment notifications via webhooks."
    }

    if (lowerQuery.includes("error") || lowerQuery.includes("failed")) {
      return "Common error reasons include invalid credentials, insufficient balance, invalid beneficiary details, or network issues. Check the error code in the response for specific details. You can also check transaction status using the Fetch Transaction Status endpoint."
    }

    return "I'm here to help! You can ask me about API endpoints, authentication, webhooks, payouts, virtual accounts, UPI collections, verifications, or troubleshooting. What specific topic would you like to explore?"
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Open Ztake AI Chat"
      >
        <div className="relative">
          {/* Subtle shadow glow */}
          <div className="absolute inset-0 bg-black/5 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />

          {/* Main button with pure glassmorphism - iOS 26 style */}
          <div className="relative flex items-center gap-3 px-6 py-4 rounded-full bg-white/70 backdrop-blur-3xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all hover:scale-105">
            <Sparkles className="h-5 w-5 text-gray-700" />
            <span className="font-semibold text-gray-900">Ztake AI</span>
          </div>
        </div>
      </button>
    )
  }

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isMinimized ? "bottom-6 right-6 w-80 h-16" : "bottom-6 right-6 w-96 h-[600px]"
      }`}
    >
      <div className="relative h-full rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]">
        {/* Subtle ambient shadow */}
        <div className="absolute inset-0 bg-black/5 blur-3xl" />

        {/* Pure glass effect with ultra blur */}
        <div className="relative h-full bg-white/60 backdrop-blur-3xl border border-white/50 rounded-3xl flex flex-col shadow-inner">
          {/* Header with frosted glass */}
          <div className="flex items-center justify-between p-4 border-b border-white/40 bg-white/30 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="relative bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm border border-white/60">
                  <Sparkles className="h-4 w-4 text-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Ztake AI</h3>
                <p className="text-xs text-gray-600">Documentation Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 hover:bg-white/60 backdrop-blur-sm"
              >
                {isMinimized ? (
                  <Maximize2 className="h-4 w-4 text-gray-700" />
                ) : (
                  <Minimize2 className="h-4 w-4 text-gray-700" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 hover:bg-white/60 backdrop-blur-sm"
              >
                <X className="h-4 w-4 text-gray-700" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === "user"
                          ? "bg-gray-900/80 backdrop-blur-xl text-white shadow-[0_4px_16px_0_rgba(0,0,0,0.15)] border border-white/10"
                          : "bg-white/70 backdrop-blur-2xl border border-white/50 text-gray-900 shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-2xl px-4 py-3 shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]">
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input with frosted glass */}
              <div className="p-4 border-t border-white/40 bg-white/30 backdrop-blur-xl">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask me anything about the API..."
                    className="flex-1 bg-white/80 backdrop-blur-sm border-white/60 focus:border-gray-400 focus:ring-gray-300/30 text-gray-900 placeholder:text-gray-500"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="bg-gray-900/80 hover:bg-gray-900 text-white shadow-[0_4px_16px_0_rgba(0,0,0,0.15)] backdrop-blur-sm border border-white/10"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">Powered by AI • Trained on Ztake API Docs</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
