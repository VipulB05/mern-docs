'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function HomePage() {
  const topics = [
    {
      title: "Javascript",
      href: "/topic-2/javascript",
      points: ["Variables, functions, loops, arrays, objects", "ES6 Features (arrow functions, destructing, template literals)", "Array methods (map, filter, reduce)", "DOM basics & events"],
    },
  ]

  const router = useRouter()

  return (
    <main>
      <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push('/')}
            className="flex items-center gap- m-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Button>
      <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-pretty text-4xl font-semibold tracking-tight md:text-5xl">Learn Javascript Essentials</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Concise, hands-on documentation covering core JavaScript concepts — from syntax and ES6 features to DOM manipulation. Includes practical examples, interactive snippets, and mini projects to strengthen understanding.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              aria-label={`Open ${t.title} lesson`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <Card
                className="relative h-full cursor-pointer overflow-hidden border border-border/60 bg-card/60
                          transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/60
                          group-hover:bg-card/80"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg font-semibold">
                    <span className="transition-colors group-hover:text-primary">
                      {t.title}
                    </span>
                    <ArrowRight
                      className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    What you&apos;ll learn
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-sm">
                  <ul className="list-disc pl-5 leading-7 marker:text-primary/70 text-muted-foreground group-hover:text-foreground transition-colors">
                    {t.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                    >
                      <span>Open lesson</span>
                    </Button>
                  </div>
                </CardContent>

                {/* ✨ Decorative hover glow */}
                <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-10 bg-primary" />
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
