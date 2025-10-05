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
    <main id="content" className="container mx-auto max-w-5xl px-4 py-10 md:py-12">
      <header className="mb-8">
        <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">{intro}</p>
      </header>

      <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="md:sticky md:top-24 md:h-[calc(100dvh-8rem)] md:overflow-auto font-bold">
          <nav aria-label="On this page" className="rounded-md border p-3 text-sm">
            <div className="mb-2 font-medium text-muted-foreground">On this page</div>
            <ul className="space-y-2">
              {toc.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="hover:underline">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div>{children}</div>
      </div>

      <Separator className="my-10" />
      <footer className="text-xs text-muted-foreground">Built for learning — keep experimenting!</footer>
    </main>
  )
}
