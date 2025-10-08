import type React from "react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export type TocItem = { href: string; label: string }

export function LessonLayout({
  title,
  intro,
  toc,
  children,
}: {
  title: string
  intro: string
  toc: TocItem[]
  children: React.ReactNode
}) {
  return (
    <main id="content" className="container mx-auto max-w-5xl px-4 py-6 md:py-10 lg:py-12">
      <header className="mb-6 md:mb-8">
        <h1 className="text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm md:text-base">{intro}</p>
      </header>

      <div className="grid gap-6 md:gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="order-2 lg:order-1 lg:sticky lg:top-24 lg:h-[calc(100dvh-8rem)] lg:overflow-auto">
          <nav aria-label="On this page" className="rounded-md border p-3 text-sm bg-muted/30">
            <div className="mb-2 font-medium text-muted-foreground text-xs uppercase tracking-wide">
              On this page
            </div>
            <ul className="space-y-1.5">
              {toc.map((t) => (
                <li key={t.href}>
                  <Link 
                    href={t.href} 
                    className="block py-1 text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="order-1 lg:order-2 min-w-0">{children}</div>
      </div>

      <Separator className="my-8 md:my-10" />
      <footer className="text-xs text-muted-foreground text-center md:text-left">
        Built for learning — keep experimenting!
      </footer>
    </main>
  )
}
