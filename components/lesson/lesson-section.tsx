import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  id: string
  title: string
  children: React.ReactNode
}

export function LessonSection({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle id={`${id}-title`} className="text-balance">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">{children}</CardContent>
      </Card>
    </section>
  )
}
