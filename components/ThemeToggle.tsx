"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  // Apply the theme to <html>
  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  // Load stored preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") setDarkMode(true)
  }, [])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-card p-3 shadow-md border border-border transition-colors hover:bg-primary hover:text-primary-foreground"
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
