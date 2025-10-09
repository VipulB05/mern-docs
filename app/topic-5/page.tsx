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
      title: "NextJs",
      href: "/topic-5/nextjs",
      points: [
      "File-based Routing and Dynamic Routes",
      "Server-side Rendering (SSR) and Static Site Generation (SSG)",
      "Client and Server Components in Next.js 13+",
      "Data Fetching with fetch(), getServerSideProps, and getStaticProps",
      "API Routes and Serverless Functions",
      "Optimizing Performance with Caching and Image Optimization",
      "Deploying and Configuring Next.js Applications",
      ]
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
      <section className="container mx-auto max-w-5xl px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Learn NextJS Basics</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-base md:text-lg">
            Clear, hands-on documentation covering core Next.js concepts — from file-based routing and server-side rendering to API routes and dynamic data fetching.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-12 md:pb-16">
        <div className="grid gap-4 md:gap-6 grid-cols-1">
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
