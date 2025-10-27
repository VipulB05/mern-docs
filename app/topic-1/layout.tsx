import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Topic 1: HTML & CSS",
  description:
    "Learn HTML fundamentals including structure, tags, forms, tables, and media. Master CSS essentials like selectors, colors, typography, box model, positioning, flexbox, grid, and responsive design with live code previews.",
  keywords: [
    "HTML tutorial",
    "CSS tutorial",
    "web development basics",
    "HTML forms",
    "CSS flexbox",
    "CSS grid",
    "responsive design",
    "HTML semantics",
    "CSS box model"
  ],
  openGraph: {
    title: "Topic 1: HTML & CSS | MERN Docs",
    description: "Learn HTML and CSS fundamentals with live code previews and interactive examples.",
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
