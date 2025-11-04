import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import MobileActions from "@/components/mobile-actions"

export const metadata: Metadata = {
  title: "Penny Farm Finance - Your Trusted Financial Partner",
  description:
    "Leading financial services provider offering loans, business finance, and comprehensive financial solutions. Get quick approvals and competitive rates.",
  generator: "v0.app",
   // Google Search Console verification
  other: {
    "google-site-verification": "3yh9sWkgaRgXQvLN1RcAwMwnah8akB4xkfmChL7Zv9o", // 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <MobileActions />
      </body>
    </html>
  )
}
