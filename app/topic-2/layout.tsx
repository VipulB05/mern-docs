import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Topic 2: JavaScript Essentials",
  description:
    "Master JavaScript fundamentals including variables, loops, functions, objects, ES6 features (arrow functions, destructuring, template literals), array methods (map, filter, reduce), DOM manipulation, and events with practical examples.",
  keywords: [
    "JavaScript tutorial",
    "ES6 JavaScript",
    "JavaScript basics",
    "DOM manipulation",
    "JavaScript arrays",
    "JavaScript functions",
    "JavaScript ES6 features",
    "learn JavaScript"
  ],
  openGraph: {
    title: "Topic 2: JavaScript Essentials | MERN Docs",
    description: "Learn core JavaScript concepts with interactive examples and practical projects.",
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
