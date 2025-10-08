import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  id: string
  title: string
  children: React.ReactNode
}

export function LessonSection({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 md:scroll-mt-24">
      <Card className="mb-6 md:mb-8">
        <CardHeader className="pb-4 md:pb-6">
          <CardTitle id={`${id}-title`} className="text-balance text-lg md:text-xl lg:text-2xl">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6">{children}</CardContent>
      </Card>
    </section>
  )
}
