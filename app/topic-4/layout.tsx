import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Topic 4: Tailwind CSS",
  description:
    "Master Tailwind CSS utility-first framework. Learn utility classes, responsive design, customization, dark mode, and building modern UIs with Tailwind CSS with practical examples and live previews.",
  keywords: [
    "Tailwind CSS tutorial",
    "Tailwind CSS",
    "utility-first CSS",
    "Tailwind responsive design",
    "Tailwind dark mode",
    "CSS framework",
    "learn Tailwind",
    "Tailwind components"
  ],
  openGraph: {
    title: "Topic 4: Tailwind CSS | MERN Docs",
    description: "Master Tailwind CSS with hands-on examples and practical projects.",
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
