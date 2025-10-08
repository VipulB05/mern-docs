import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "../globals.css"

export const metadata: Metadata = {
  title: "Topic 2: Javascript Essentials | MERN Docs",
  description:
    "JavaScript brings interactivity to web pages. You’ll learn the core language concepts, modern ES6 features, array methods, and basic DOM manipulation.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <main>{children}</main>
      </div>
  )
}
