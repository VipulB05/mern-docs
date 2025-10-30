import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Topic 6: MongoDB",
  description:
    "Get started with MongoDB: installation options, connecting from Node, CRUD operations, indexes, aggregation, schema design, and deployment best practices.",
  keywords: ["MongoDB tutorial", "NoSQL", "CRUD", "Mongoose", "aggregation", "indexes", "MongoDB Atlas"],
  openGraph: {
    title: "Topic 6: MongoDB | MERN Docs",
    description: "Practical MongoDB guide for beginners with examples for the Node.js ecosystem.",
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
