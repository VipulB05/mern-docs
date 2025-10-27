import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Topic 5: Next.js Essentials",
  description:
    "Learn Next.js, the React framework for production. Master server-side rendering, static site generation, API routes, file-based routing, image optimization, and deployment with practical examples.",
  keywords: [
    "Next.js tutorial",
    "Next.js",
    "React framework",
    "SSR",
    "static site generation",
    "Next.js routing",
    "Next.js API routes",
    "learn Next.js",
    "Next.js deployment"
  ],
  openGraph: {
    title: "Topic 5: Next.js Essentials | MERN Docs",
    description: "Master Next.js framework with hands-on examples and deployment guides.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div className={`font-sans`}>
        <main>{children}</main>
      </div>
  )
}
