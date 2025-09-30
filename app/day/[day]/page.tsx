import { getDayContent, getAllDays } from "@/lib/course-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Code, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function generateStaticParams() {
  return getAllDays().map((day) => ({
    day: day.toString(),
  }))
}

export default function DayPage({ params }: { params: { day: string } }) {
  const dayNumber = Number.parseInt(params.day)
  const dayContent = getDayContent(dayNumber)

  if (!dayContent) {
    notFound()
  }

  const prevDay = dayNumber > 0 ? dayNumber - 1 : null
  const nextDay = dayNumber < 12 ? dayNumber + 1 : null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Link>
          <div className="flex items-center gap-4">
            <Badge variant="outline">Day {dayContent.day}</Badge>
            <h1 className="hidden text-lg font-semibold md:block">{dayContent.title}</h1>
          </div>
          <div className="flex items-center gap-2">
            {prevDay !== null && (
              <Link href={`/day/${prevDay}`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="ml-2 hidden sm:inline">Day {prevDay}</span>
                </Button>
              </Link>
            )}
            {nextDay !== null && (
              <Link href={`/day/${nextDay}`}>
                <Button variant="ghost" size="sm">
                  <span className="mr-2 hidden sm:inline">Day {nextDay}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">On this page</h3>
                <nav className="space-y-1">
                  {dayContent.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {section.title}
                    </a>
                  ))}
                  <a
                    href="#tasks"
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    Tasks & Assignments
                  </a>
                  <a
                    href="#project"
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    Project Work
                  </a>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            {/* Hero */}
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-xl font-bold text-primary">
                  {dayContent.day}
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{dayContent.title}</h1>
                  <p className="mt-1 text-sm text-muted-foreground">Day {dayContent.day} of 13</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{dayContent.description}</p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {dayContent.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
                    <BookOpen className="h-6 w-6 text-primary" />
                    {section.title}
                  </h2>
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>

                    {section.codeExample && (
                      <Card className="overflow-hidden border-border bg-muted/30">
                        <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
                          <span className="text-xs font-medium uppercase text-muted-foreground">
                            {section.codeExample.language}
                          </span>
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            Copy
                          </Button>
                        </div>
                        <pre className="overflow-x-auto p-4">
                          <code className="text-sm">{section.codeExample.code}</code>
                        </pre>
                      </Card>
                    )}

                    {section.subsections && (
                      <div className="space-y-8">
                        {section.subsections.map((subsection, idx) => (
                          <div key={idx} className="border-l-2 border-primary/30 pl-6">
                            <h3 className="mb-3 text-xl font-semibold text-foreground">{subsection.title}</h3>
                            <p className="mb-4 text-muted-foreground leading-relaxed">{subsection.content}</p>
                            {subsection.codeExample && (
                              <Card className="overflow-hidden border-border bg-muted/30">
                                <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
                                  <span className="text-xs font-medium uppercase text-muted-foreground">
                                    {subsection.codeExample.language}
                                  </span>
                                  <Button variant="ghost" size="sm" className="h-7 text-xs">
                                    Copy
                                  </Button>
                                </div>
                                <pre className="overflow-x-auto p-4">
                                  <code className="text-sm">{subsection.codeExample.code}</code>
                                </pre>
                              </Card>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              ))}

              {/* Tasks */}
              <section id="tasks" className="scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  Tasks & Assignments
                </h2>
                <Card className="border-border bg-card p-6">
                  <ul className="space-y-3">
                    {dayContent.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>

              {/* Project Work */}
              <section id="project" className="scroll-mt-24">
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
                  <Code className="h-6 w-6 text-primary" />
                  Daily Project Work
                </h2>
                <Card className="border-l-4 border-l-primary bg-primary/5 p-6">
                  <p className="text-muted-foreground leading-relaxed">{dayContent.projectWork}</p>
                </Card>
              </section>
            </div>

            {/* Navigation Footer */}
            <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
              {prevDay !== null ? (
                <Link href={`/day/${prevDay}`} className="group">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Previous</div>
                      <div className="font-semibold">Day {prevDay}</div>
                    </div>
                  </Button>
                </Link>
              ) : (
                <div />
              )}
              {nextDay !== null ? (
                <Link href={`/day/${nextDay}`} className="group">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Next</div>
                      <div className="font-semibold">Day {nextDay}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
