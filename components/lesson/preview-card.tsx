"use client"

import { useEffect, useMemo, useRef } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CodeBlock } from "./code-block"

type Props = {
  title?: string
  language: "html" | "css"
  code: string
  // For CSS, previewHtml is required. For HTML, we will default to code if previewHtml is not provided.
  previewHtml?: string
  showLineNumbers?: boolean
  enableDarkMode?: boolean // New prop to enable dark mode previews
}

export function PreviewCard({ title, language, code, previewHtml, showLineNumbers, enableDarkMode = false }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { theme } = useTheme()

  const srcDoc = useMemo(() => {
    const html = language === "html" ? previewHtml || code : previewHtml || "<div>Provide previewHtml for CSS</div>"
    const css = language === "css" ? code : ""
    const isDarkMode = enableDarkMode && theme === "dark"
    
    return [
      "<!doctype html>",
      '<html lang="en">',
      "<head>",
      '<meta charset="utf-8" />',
      '<meta name="viewport" content="width=device-width, initial-scale=1" />',
      "<style>",
      // Base reset for consistent preview
      "*,*::before,*::after{box-sizing:border-box}",
      "html,body{margin:0;padding:0}",
      `body{font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Noto Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial; line-height:1.5; padding:16px; ${
        isDarkMode 
          ? "color:#f9fafb; background:#1f2937;" 
          : "color:#111827; background:#ffffff;"
      }}`,
      "img{max-width:100%;height:auto}",
      // Additional dark mode styles
      isDarkMode ? `
        h1, h2, h3, h4, h5, h6 { color: #f3f4f6; }
        a { color: #60a5fa; }
        a:visited { color: #a78bfa; }
        blockquote { border-left: 4px solid #6b7280; padding-left: 1rem; color: #d1d5db; }
        code { background: #374151; color: #f9fafb; padding: 0.125rem 0.25rem; border-radius: 0.25rem; }
        table { border-collapse: collapse; }
        th, td { border: 1px solid #4b5563; padding: 0.5rem; }
        th { background: #374151; }
        input, select, textarea { background: #374151; color: #f9fafb; border: 1px solid #6b7280; }
        button { background: #4b5563; color: #f9fafb; border: 1px solid #6b7280; }
      ` : "",
      css,
      "</style>",
      "</head>",
      "<body>",
      html,
      "</body>",
      "</html>",
    ].join("")
  }, [language, code, previewHtml, theme, enableDarkMode])

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const onLoad = () => {
      try {
        const doc = iframe.contentDocument
        if (!doc) return
        // Auto-size height to content with improved sizing
        const h = Math.max(
          doc.body.scrollHeight,
          doc.documentElement.scrollHeight,
          doc.body.offsetHeight,
          doc.documentElement.offsetHeight,
        )
        // Better height calculation with min/max constraints
        const newHeight = Math.min(Math.max(h + 20, 120), 600) // Added padding and increased max height
        iframe.style.height = newHeight + "px"
      } catch {
        // ignore
      }
    }
    iframe.addEventListener("load", onLoad)
    return () => {
      iframe.removeEventListener("load", onLoad)
    }
  }, [srcDoc])

  return (
    <Card className="overflow-hidden">
      {title && (
        <CardHeader className="pb-3">
          <CardTitle className="text-balance text-base md:text-lg">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="p-3 md:p-6">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview" className="text-xs md:text-sm">Preview</TabsTrigger>
            <TabsTrigger value="code" className="text-xs md:text-sm">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-3">
            <div className="rounded-md border overflow-hidden">
              <iframe
                ref={iframeRef}
                title={title || "Live preview"}
                srcDoc={srcDoc}
                className="h-[160px] md:h-[200px] w-full"
                sandbox="allow-same-origin"
              />
            </div>
          </TabsContent>
          <TabsContent value="code" className="mt-3">
            <CodeBlock code={code} language={language} showLineNumbers={showLineNumbers} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
