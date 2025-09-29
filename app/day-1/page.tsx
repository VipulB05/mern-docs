import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const topics = [
    {
      title: "HTML",
      href: "/day-1/html",
      points: ["Structure", "Semantic tags", "Forms"],
    },
    {
      title: "CSS",
      href: "/day-1/css",
      points: ["Box Model", "Flexbox", "Grid", "Responsive"],
    },
  ]

  return (
    <main className="min-h-dvh">
      <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-pretty text-4xl font-semibold tracking-tight md:text-5xl">Learn Web Foundations</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A concise, hands-on curriculum covering HTML and CSS essentials. Clear explanations, live previews, and
            copyable examples.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="/html">Start with HTML</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/css">Go to CSS</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((t) => (
            <Card key={t.title} className="transition-all hover:shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{t.title}</span>
                  <ArrowRight className="size-5 text-muted-foreground" />
                </CardTitle>
                <CardDescription>What you&apos;ll learn</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-5 leading-7 marker:text-primary">
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button asChild size="sm" variant="outline">
                    <Link href={t.href} aria-label={`Open ${t.title} lesson`}>
                      Open lesson
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
