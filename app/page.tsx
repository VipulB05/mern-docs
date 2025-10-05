import { BookOpen, ArrowRight } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const courseData = [
  { day: 1, title: "Web Basics (HTML + CSS)", topics: 2 },
  { day: 2, title: "JavaScript Fundamentals", topics: 1 },
]


export default function CoursePage() {

  return (
    <div className="min-h-screen bg-background">

      {/* ---------- HERO ---------- */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Developer Documentation
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              MERN Full Stack Developer Documentation
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Master the MERN Stack — from fundamentals to full-stack deployment with the MERN stack.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>No Prerequisites</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- TOPICS ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Topics</h2>
          <p className="text-muted-foreground">
            Click on any topic to view detailed lesson content and code examples
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courseData.map((day) => (
            <Link key={day.day} href={`/topic-${day.day}`} className="block h-full">
              <Card className="group h-full will-change-transform hover:border-primary hover:shadow-lg transition-transform duration-200 ease-out">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                      {day.day}
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <CardTitle className="text-lg">{day.title}</CardTitle>
                  <CardDescription>
                    Day {day.day} • {day.topics} topics
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- AUTHORS ---------- */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">Documentation By</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
              {[
                { name: "Sumit Santhosh Nair", contact: "9632109324 • CSE (AIML) • Semester 5" },
                { name: "Yathartha Aarush", contact: "9632109324 • CSE (AIML) • Semester 5" },
              ].map((person) => (
                <Card
                  key={person.name}
                  className="group relative overflow-hidden border border-border/60 bg-card/60 
                            transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                            hover:border-primary/60 hover:bg-card/80"
                >
                  <CardHeader className="relative z-10 flex flex-col gap-2">
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                        {person.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">
                          {person.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {person.contact}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  {/* ✨ Soft hover glow overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-primary transition-opacity duration-300" />
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
