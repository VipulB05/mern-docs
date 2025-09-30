"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          Bootcamp
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/day-1/html" className="hover:text-primary">
            HTML
          </Link>
          <Link href="/day-1/css" className="hover:text-primary">
            CSS
          </Link>
          <Link href="/day-2" className="hover:text-primary">
            JavaScript
          </Link>
          <Link href="/day-3" className="hover:text-primary">
            React
          </Link>
          <Button asChild size="sm">
            <Link href="/curriculum">Curriculum</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
