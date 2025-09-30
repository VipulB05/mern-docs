import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Day 1: HTML & CSS Lessons | PESU IO Web Developer Bootcamp",
  description:
    "Day 1 covers HTML Fundamentals (structure, tags, forms, tables, media) and CSS Essentials (selectors, colors, typography, box model, positioning, flexbox, grid, responsive design) for the PESU IO Web Developer Bootcamp.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading...</div>}>
            <SiteHeader />
            <main>{children}</main>
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
