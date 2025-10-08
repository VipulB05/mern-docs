import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Topic 1: HTML & CSS | MERN Docs",
  description:
    "Topic 1 covers HTML Fundamentals (structure, tags, forms, tables, media) and CSS Essentials (selectors, colors, typography, box model, positioning, flexbox, grid, responsive design).",
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
