"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-base md:text-lg font-semibold truncate">
          MERN Stack Docs
        </Link>
        <div className="flex items-center gap-1 md:gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
