import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ThemeToggle from "@/components/ThemeToggle" 

export const metadata: Metadata = {
  title: "MERN Full Stack Documentation",
  description:
    "Master web development from HTML to deployment. Build a complete MERN stack application.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased transition-colors duration-300`}
      >
        {children}
        <ThemeToggle />
      </body>
    </html>
  )
}
