"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Highlight, themes } from "prism-react-renderer"

type Props = {
  code: string
  language?: "html" | "css" | "js" | "tsx" | string
  className?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = "html", className, showLineNumbers = false }: Props) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // no-op
    }
  }

  const prismTheme = theme === "dark" ? themes.vsDark : themes.github

  return (
    <div className={cn("relative rounded-md border bg-card", className)}>
      <div className="flex items-center justify-between border-b px-3 py-2">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">{language || "code"}</span>
        <Button size="sm" variant="outline" onClick={copy} aria-label="Copy code">
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>

      <div className="overflow-x-auto p-3 text-sm leading-6">
        <Highlight theme={prismTheme} code={code.trim()} language={(language as any) || "markup"}>
          {({ className: cl, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={cl} style={style} aria-label="Code sample">
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })
                return (
                  <div key={i} {...lineProps} className={cn(lineProps.className, "table table-fixed w-full")}>
                    {showLineNumbers && (
                      <span className="table-cell select-none pr-4 text-right text-xs text-muted-foreground align-top">
                        {i + 1}
                      </span>
                    )}
                    <span className="table-cell">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  </div>
                )
              })}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
