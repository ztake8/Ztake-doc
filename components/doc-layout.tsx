"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink, Lock, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ZtakeAIChatbot } from "@/components/ztake-ai-chatbot"
import { useTheme } from "@/components/theme-provider"

const navigation = [
  { name: "API Introduction", href: "/api-introduction" },
  { name: "Authorization", href: "/authorization" },
  { name: "Postman Collection", href: "/postman-collection" },
  { name: "Adding funds to Virtual Account", href: "/adding-funds-to-virtual-account" },
  { name: "Key things to handle", href: "/key-things-to-handle" },
  { name: "Guide on Ztake AI", href: "/docs-ai-guide" },
  {
    name: "Ztake Payouts",
    items: [
      { name: "Overview", href: "/ztake-payouts" },
      { name: "Initiate Payout", href: "/ztake-payouts/initiate-payout" },
      { name: "Fetch Balance", href: "/ztake-payouts/fetch-balance" },
      { name: "Fetch Transaction Status", href: "/ztake-payouts/fetch-transaction-status" },
      { name: "Get Statement", href: "/ztake-payouts/get-statement" },
      { name: "Connected Account Statement", href: "/ztake-payouts/connected-account-statement" },
    ],
  },
  {
    name: "Sub Virtual Accounts",
    items: [
      { name: "Overview", href: "/sub-virtual-accounts" },
      { name: "Create Sub VA", href: "/sub-virtual-accounts/create-sub-va" },
      { name: "Fetch Sub VA", href: "/sub-virtual-accounts/fetch-sub-va" },
      { name: "Deactivate Sub VA", href: "/sub-virtual-accounts/deactivate-sub-va" },
      { name: "Activate Sub VA", href: "/sub-virtual-accounts/activate-sub-va" },
      { name: "Payout from Sub VA", href: "/sub-virtual-accounts/payout-from-sub-va" },
      { name: "Update Sub VA", href: "/sub-virtual-accounts/update-sub-va" },
      { name: "List Sub-VAs", href: "/sub-virtual-accounts/list-sub-vas" },
    ],
  },
  {
    name: "Webhooks",
    items: [
      { name: "Overview", href: "/webhooks" },
      { name: "Debit Webhook", href: "/webhooks/debit-webhook" },
      { name: "Credit Webhook", href: "/webhooks/credit-webhook" },
      { name: "Verification Webhook", href: "/webhooks/verification-webhook" },
      { name: "PG Collection Callback", href: "/webhooks/pg-collection-callback" },
    ],
  },
  {
    name: "PG Collection (Scale UPI)",
    items: [
      { name: "Overview", href: "/pg-collection-scale-upi" },
      { name: "Create Static VPA", href: "/pg-collection-scale-upi/create-static-vpa" },
      { name: "Create Dynamic VPA", href: "/pg-collection-scale-upi/create-dynamic-vpa" },
      { name: "UPI Collect", href: "/pg-collection-scale-upi/upi-collect" },
      { name: "Create PG Link", href: "/pg-collection-scale-upi/create-pg-link" },
      { name: "Query List Transactions", href: "/pg-collection-scale-upi/query-list-transactions" },
      { name: "Refund Payment", href: "/pg-collection-scale-upi/refund-payment" },
      { name: "Create UPI Sub Merchant", href: "/pg-collection-scale-upi/create-upi-sub-merchant" },
      { name: "Generate QR Live Demo", href: "/pg-collection-scale-upi/generate-qr-live-demo" },
    ],
  },
  {
    name: "Verification Stack",
    items: [
      { name: "Overview", href: "/verification-stack" },
      { name: "Bank Verification (Pennydrop)", href: "/verification-stack/bank-verification-pennydrop" },
      { name: "Bank Verification (Sync)", href: "/verification-stack/bank-verification-sync" },
      { name: "Penniless Account Verification", href: "/verification-stack/penniless-account-verification" },
      { name: "Reverse Penny Drop", href: "/verification-stack/reverse-penny-drop" },
      { name: "PAN Premium", href: "/verification-stack/pan-premium" },
      { name: "PAN Lite", href: "/verification-stack/pan-lite" },
      { name: "Aadhaar Digilocker OKYC", href: "/verification-stack/aadhaar-digilocker-okyc" },
      { name: "Verify IFSC", href: "/verification-stack/verify-ifsc" },
      { name: "CRIF Credit Report", href: "/verification-stack/crif-credit-report" },
      { name: "Experian Credit Report", href: "/verification-stack/experian-credit-report" },
      { name: "Prefill Alternate Bureau", href: "/verification-stack/prefill-alternate-bureau" },
      { name: "Verify GST", href: "/verification-stack/verify-gst" },
      { name: "Verify GST using PAN", href: "/verification-stack/verify-gst-using-pan" },
      { name: "Get Director Phone", href: "/verification-stack/get-director-phone" },
      { name: "Get PAN using Phone", href: "/verification-stack/get-pan-using-phone" },
      { name: "Verify Voter ID", href: "/verification-stack/verify-voter-id" },
      { name: "Verify Indian Passport", href: "/verification-stack/verify-indian-passport" },
    ],
  },
  {
    name: "BBPS (Bill Payments)",
    items: [
      { name: "Overview", href: "/bbps" },
      { name: "List Categories", href: "/bbps/list-categories" },
      { name: "Select Biller", href: "/bbps/select-biller" },
      { name: "Fetch Bill", href: "/bbps/fetch-bill" },
      { name: "Make Bill Payment", href: "/bbps/make-bill-payment" },
      { name: "Fetch Payment Status", href: "/bbps/fetch-payment-status" },
      { name: "List BBPS Transactions", href: "/bbps/list-bbps-transactions" },
    ],
  },
  {
    name: "Other",
    items: [
      { name: "Upsell Cards and Loans", href: "/other/upsell-cards-and-loans" },
      { name: "Customer Support", href: "/other/customer-support" },
      { name: "IP Getting Blacklisted", href: "/other/ip-getting-blacklisted" },
      { name: "Whitelist Your IP", href: "/other/whitelist-your-ip" },
      { name: "eNACH", href: "/other/enach" },
      { name: "Payouts Contact Management", href: "/other/payouts-contact-management" },
    ],
  },
]

interface DocLayoutProps {
  children: React.ReactNode
  title?: string
  lastEdit?: string
  onThisPage?: Array<{ title: string; id: string }>
}

export function DocLayout({ children, title, lastEdit, onThisPage }: DocLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const currentSection = navigation.find((item) => {
      if (item.items) {
        return item.items.some((subItem) => pathname === subItem.href)
      }
      return false
    })
    if (currentSection && !expandedSections.includes(currentSection.name)) {
      setExpandedSections((prev) => [...prev, currentSection.name])
    }
  }, [pathname])

  const toggleSection = (name: string) => {
    setExpandedSections((prev) => (prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]))
  }

  return (
    <div className={`min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-950`}>
      <header className={`sticky top-0 z-50 w-full glass dark:glass transition-all duration-500`}>
        <div className="flex h-12 sm:h-14 md:h-16 items-center justify-between px-2 sm:px-3 md:px-4 lg:px-6 gap-2 sm:gap-3 md:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-1 min-w-0">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden dark:text-white hover:bg-white/20 dark:hover:bg-white/15 rounded-xl transition-all duration-500 active:scale-95 h-8 w-8 sm:h-9 sm:w-9" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
            <Link href="/" className="flex items-center gap-1 sm:gap-1.5 font-bold text-xs sm:text-sm md:text-base hover:opacity-80 transition-opacity duration-500 active:scale-95 truncate">
              <Image src="/assets/ztake-logo.png" alt="Ztake" width={24} height={24} className="sm:w-7 sm:h-7 flex-shrink-0" />
              <span className="text-black dark:text-white truncate font-black">ZTAKE API DOC </span>
            </Link>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Link href="https://identity.getpostman.com/login" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button
                variant="outline"
                size="sm"
                className="gap-1 sm:gap-2 bg-orange-600 text-white hover:bg-orange-700 hover:text-white border-orange-600 rounded-xl transition-all duration-500 hover:shadow-lg active:scale-95 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
              >
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Run in Postman</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-56 sm:w-64 transform glass dark:glass transition-all duration-500 lg:sticky lg:top-12 sm:lg:top-14 md:lg:top-16 lg:h-[calc(100vh-3rem)] sm:lg:h-[calc(100vh-3.5rem)] md:lg:h-[calc(100vh-4rem)] lg:translate-x-0 overflow-y-auto ${
            sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col bg-white/50 dark:bg-gray-900/30 backdrop-blur-3xl">
            <div className="p-2.5 sm:p-3 md:p-4 border-b border-gray-200 dark:border-white/10">
              <div className="relative">
                <Search className="absolute left-2.5 sm:left-3 top-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <Input 
                  type="search" 
                  placeholder="Search" 
                  className="pl-8 sm:pl-9 glass-sm dark:glass-sm bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 dark:text-white dark:placeholder-gray-500 rounded-xl transition-all duration-500 hover:bg-gray-100 dark:hover:bg-white/8 text-xs sm:text-sm py-1.5 sm:py-2" 
                />
              </div>
            </div>
            <nav className="flex-1 overflow-y-auto p-2 sm:p-3 md:p-4">
              <ul className="space-y-0.5 sm:space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {item.items ? (
                      <div>
                        {item.name === "Verification Stack" || item.name === "Sub Virtual Accounts" ? (
                          <Link
                            href={
                              item.name === "Verification Stack"
                                ? "/verification-stack-access"
                                : "/sub-virtual-accounts-access"
                            }
                            className="flex w-full items-center justify-between rounded-xl px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-gray-900 dark:text-white hover:glass-hover dark:hover:glass-hover transition-all duration-500 group"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="flex items-center gap-1.5 min-w-0">
                              <span className="truncate">{item.name}</span>
                              <Lock className="h-3 w-3 text-gray-500 dark:text-gray-400 group-hover:scale-110 transition-transform duration-500 flex-shrink-0" />
                            </span>
                            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform duration-500 flex-shrink-0" />
                          </Link>
                        ) : (
                          <button
                            onClick={() => toggleSection(item.name)}
                            className="flex w-full items-center justify-between rounded-xl px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/8 transition-all duration-500 group"
                          >
                            <span className="truncate">{item.name}</span>
                            {expandedSections.includes(item.name) ? (
                              <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-500 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform duration-500 flex-shrink-0" />
                            )}
                          </button>
                        )}
                        {expandedSections.includes(item.name) &&
                          item.name !== "Verification Stack" &&
                          item.name !== "Sub Virtual Accounts" && (
                            <ul className="ml-1.5 sm:ml-2 mt-0.5 sm:mt-1 space-y-0.5 border-l border-gray-200 dark:border-white/10 pl-1.5 sm:pl-2 md:pl-2.5">
                              {item.items.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    className={`block rounded-lg px-1.5 sm:px-2 md:px-2.5 py-1 sm:py-1.5 text-xs sm:text-sm transition-all duration-500 group truncate ${
                                      pathname === subItem.href
                                        ? "nav-item-active"
                                        : "nav-item"
                                    }`}
                                    onClick={() => setSidebarOpen(false)}
                                  >
                                    <span className="group-hover:translate-x-0.5 inline-block transition-transform duration-500 truncate">{subItem.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block rounded-xl px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-500 group truncate ${
                          pathname === item.href ? "nav-item-active" : "nav-item"
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="group-hover:translate-x-0.5 inline-block transition-transform duration-500 truncate">{item.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <main className="flex-1 lg:flex w-full">
          <div className="flex-1 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 md:py-8 max-w-5xl w-full">
            {title && (
              <div className="mb-4 sm:mb-6 md:mb-8">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1.5 sm:mb-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-500 truncate">
                  <span>Documentation</span>
                  <ChevronRight className="h-3 w-3 flex-shrink-0" />
                </div>
                {lastEdit && <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-500">Last edit {lastEdit}</div>}
              </div>
            )}
            {children}
          </div>

          {onThisPage && onThisPage.length > 0 && (
            <aside className="hidden xl:block w-52 2xl:w-60 glass dark:glass border-l border-gray-200 dark:border-white/10 p-3 md:p-4 lg:p-5">
              <div className="sticky top-20">
                <h4 className="font-semibold text-xs lg:text-sm text-gray-900 dark:text-white mb-2 lg:mb-3">On this page</h4>
                <ul className="space-y-0.5 sm:space-y-1">
                  {onThisPage.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`} 
                        className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white block rounded-lg px-1.5 lg:px-2 py-1 lg:py-1.5 transition-all duration-500 hover:bg-white/40 dark:hover:bg-white/8 group truncate"
                      >
                        <span className="group-hover:translate-x-0.5 inline-block transition-transform duration-500 truncate">{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </main>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-gray-900/40 dark:bg-black/60 lg:hidden backdrop-blur-md transition-all duration-500 active:backdrop-blur-lg" onClick={() => setSidebarOpen(false)} />
      )}

      <ZtakeAIChatbot />
    </div>
  )
}

export default DocLayout
