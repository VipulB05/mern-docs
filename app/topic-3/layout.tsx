import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Topic 3: React Essentials",
  description:
    "Learn React fundamentals including components, JSX, props, state management, React hooks, event handling, routing with React Router, Context API, forms, data fetching, and performance optimization with live examples.",
  keywords: [
    "React tutorial",
    "React hooks",
    "React components",
    "React state management",
    "React Router",
    "Context API",
    "learn React",
    "React JavaScript library",
    "React best practices"
  ],
  openGraph: {
    title: "Topic 3: React Essentials | MERN Docs",
    description: "Master React fundamentals with hands-on examples and guided projects.",
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
