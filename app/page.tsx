import { BookOpen, Code, Calendar, CheckCircle2, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const courseData = [
  { day: 0, title: "Student Onboarding", topics: 3 },
  { day: 1, title: "Web Basics (HTML + CSS)", topics: 2 },
  { day: 2, title: "JavaScript", topics: 4 },
  { day: 3, title: "React Components & Hooks", topics: 3 },
  { day: 4, title: "React Router + Context API", topics: 2 },
  { day: 5, title: "Tailwind CSS + Next.js", topics: 3 },
  { day: 6, title: "HTTP, REST & Postman", topics: 3 },
  { day: 7, title: "Node.js + Express.js Basics", topics: 3 },
  { day: 8, title: "Authentication (JWT)", topics: 3 },
  { day: 9, title: "Database Integration (MongoDB + CRUD)", topics: 3 },
  { day: 10, title: "Best Practices", topics: 4 },
  { day: 11, title: "Full-Stack Integration", topics: 2 },
  { day: 12, title: "Git + Deployment", topics: 4 },
]

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">PESU I/O Bootcamp</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Full Stack Developer Bootcamp
            </h1>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Master web development from HTML to deployment. Build a complete MERN stack application in 30 hours.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>13 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>30 Hours Total</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>No Prerequisites</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Course Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                What You&apos;ll Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Build responsive web pages with HTML, CSS, and Tailwind</li>
                <li>• Master JavaScript (ES6) and DOM manipulation</li>
                <li>• Create React apps with hooks and routing</li>
                <li>• Develop backends with Node.js and Express</li>
                <li>• Work with MongoDB databases</li>
                <li>• Deploy full-stack applications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Final Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build a complete MERN web application with multiple pages, authentication, CRUD operations, Context API
                for state management, and deploy it live on Vercel. Choose any topic you&apos;re passionate about!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Course Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Each day includes instructor-led sessions, hands-on assignments, and progressive project work. You&apos;ll
                build your final project incrementally as you learn new concepts throughout the bootcamp.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Daily Syllabus */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Daily Syllabus</h2>
          <p className="text-muted-foreground">Click on any day to view detailed lesson content and code examples</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courseData.map((day) => (
            <Link key={day.day} href={`/day/${day.day}`}>
              <Card className="group h-full transition-all hover:border-primary hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                      {day.day}
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
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

      {/* Instructors */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">Course Instructors</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>Sumit Santhosh Nair</CardTitle>
                <CardDescription>SRN: PES1UG23AM324 • CSE (AIML) • Semester 5</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Yathartha Aarush</CardTitle>
                <CardDescription>SRN: PES1UG23AM358 • CSE (AIML) • Semester 5</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
