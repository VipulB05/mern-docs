'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout";
import { LessonSection } from "@/components/lesson/lesson-section";
import { CodeBlock } from "@/components/lesson/code-block";
import { PreviewCard } from "@/components/lesson/preview-card";
import { BackButton } from "@/components/BackButton"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function DemoBox() {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <div className="rounded-md border p-4">
        <div className="mb-2 text-sm font-medium">Box Model</div>
        <div className="rounded-md bg-secondary p-3">
          <div className="rounded-md bg-primary/15 p-3">
            <div className="rounded-md bg-primary/25 p-3">
              <div className="rounded-md bg-primary/35 p-3 text-xs">
                Content (padding → border → margin)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 text-sm font-medium">Flexbox</div>
        <div className="flex gap-2 rounded-md border p-3">
          <div className="rounded-md bg-primary/20 px-3 py-2">1</div>
          <div className="rounded-md bg-primary/20 px-3 py-2">2</div>
          <div className="rounded-md bg-primary/20 px-3 py-2">3</div>
        </div>
      </div>
    </div>
  );
}

export default function CssLessonPage() {
  const router = useRouter()
  return (
    <LessonLayout
      title="CSS Essentials"
      intro="CSS controls presentation. Understand the box model first, then use Flexbox and Grid for layout, and finish with responsive design."
      toc={[
        { href: "#basics", label: "Basics & Selectors" },
        { href: "#colors", label: "Colors & Backgrounds" },
        { href: "#typography", label: "Typography & Text" },
        { href: "#box-model", label: "Box Model" },
        { href: "#positioning", label: "Positioning" },
        { href: "#flexbox", label: "Flexbox" },
        { href: "#grid", label: "Grid" },
        { href: "#responsive", label: "Responsive Design" },
      ]}
    >
      <div className="mb-4 flex flex-row gap-8">
        <BackButton label="Back to Home" />

        <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push('/day-1/html')}
            className="flex items-center gap-2"
          >
            Go to HTML
            <ArrowRight className="h-4 w-4" />
          </Button>
      </div>
      <LessonSection id="basics" title="Basics (Selectors & Common Properties)">
        <p className="text-muted-foreground">
          Start with simple selectors, colors, spacing, and typography. Practice
          with small, focused snippets.
        </p>
        <CodeBlock
          language="css"
          code={`/* Selectors */
p { margin-bottom: 1rem; }
#highlight { background: gold; }
.note { color: #374151; }

/* Typography */
h1 { font-size: 2rem; line-height: 1.2; }
body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif; }

/* Colors, borders, radius */
.box {
  color: #111827;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px;
}

/* Display */
.inline { display: inline; }
.block { display: block; }
.inline-block { display: inline-block; }`}
        />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Typography snippet"
            language="css"
            enableDarkMode
            code={`h1{font-size:2rem;line-height:1.2;margin-bottom:0.5rem}
p{margin:0 0 0.75rem}
.small{font-size:0.875rem;color:#6b7280}`}
            previewHtml={`<h1>Heading</h1><p>Body paragraph with comfortable line-height.</p><p class="small">Small helper text</p>`}
          />
          <PreviewCard
            title="Box styling"
            language="css"
            enableDarkMode
            code={`.box{color:#111827;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:10px;padding:12px;width:260px}`}
            previewHtml={`<div class="box">A simple box with padding, border and radius.</div>`}
          />
        </div>
      </LessonSection>

      <LessonSection id="colors" title="Colors & Backgrounds">
        <p className="text-muted-foreground">
          CSS provides multiple ways to specify colors and create beautiful
          backgrounds. Use modern color functions and understand different color
          formats for better design control.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Color Formats"
            language="css"
            code={`/* Different color formats */
.hex { color: #ff6b35; }
.rgb { color: rgb(255, 107, 53); }
.rgba { color: rgba(255, 107, 53, 0.8); }
.hsl { color: hsl(14, 100%, 60%); }
.hsla { color: hsla(14, 100%, 60%, 0.8); }

/* Named colors */
.named { 
  color: crimson;
  background-color: lightyellow;
}

/* CSS custom properties (variables) */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
}

.custom { 
  color: var(--primary-color);
  border: 2px solid var(--secondary-color);
}`}
          />
          <PreviewCard
            title="Background Properties"
            language="css"
            enableDarkMode
            code={`/* Solid background */
.solid { 
  background-color: #f0f9ff;
  padding: 1rem;
  border-radius: 8px;
}

/* Gradient backgrounds */
.linear-gradient {
  background: linear-gradient(45deg, #3b82f6, #10b981);
  color: white;
  padding: 1rem;
  border-radius: 8px;
}

.radial-gradient {
  background: radial-gradient(circle, #fbbf24, #f59e0b);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 8px;
}`}
            previewHtml={`<div class="solid">Solid background</div>
<div class="linear-gradient">Linear gradient</div>
<div class="radial-gradient">Radial gradient</div>`}
          />
        </div>
        <CodeBlock
          language="css"
          code={`/* Complete color and background example */
.color-showcase {
  /* Background with multiple layers */
  background: 
    linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1)),
    url('/pattern.png') repeat,
    #ffffff;
  background-size: cover, 20px 20px, auto;
  
  /* Border with gradient */
  border: 3px solid;
  border-image: linear-gradient(45deg, #3b82f6, #10b981) 1;
  border-radius: 12px;
  
  /* Text styling */
  color: #1f2937;
  padding: 2rem;
  
  /* Box shadow for depth */
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Color scheme using CSS custom properties */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --color-accent: #f59e0b;
  --color-neutral-50: #f9fafb;
  --color-neutral-900: #111827;
}

.theme-aware {
  color: var(--color-neutral-900);
  background-color: var(--color-neutral-50);
  border: 2px solid var(--color-primary);
  accent-color: var(--color-accent); /* For form controls */
}`}
        />
      </LessonSection>

      <LessonSection id="typography" title="Typography & Text Styling">
        <p className="text-muted-foreground">
          Typography is crucial for readability and visual hierarchy. Master
          font properties, text alignment, and spacing for professional-looking
          designs.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Font Properties"
            language="css"
            enableDarkMode
            code={`/* Font family with fallbacks */
.serif { 
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.125rem;
  line-height: 1.6;
}

.sans-serif {
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}

.monospace {
  font-family: 'Fira Code', Monaco, 'Courier New', monospace;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
}

/* Font variations */
.bold { font-weight: bold; } /* or 700 */
.light { font-weight: 300; }
.italic { font-style: italic; }
.small-caps { font-variant: small-caps; }`}
            previewHtml={`<p class="serif">Serif font for body text</p>
<p class="sans-serif">Sans-serif for modern look</p>
<p class="monospace">Monospace for code</p>
<p class="bold">Bold text</p>
<p class="italic">Italic text</p>
<p class="small-caps">Small Caps Text</p>`}
          />
          <PreviewCard
            title="Text Alignment & Spacing"
            language="css"
            enableDarkMode
            code={`/* Text alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

/* Text decoration */
.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.no-underline { text-decoration: none; }

/* Text transform */
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }

/* Letter and word spacing */
.spaced {
  letter-spacing: 0.1em;
  word-spacing: 0.2em;
}

/* Text indentation */
.indent { text-indent: 2em; }`}
            previewHtml={`<p class="text-center">Centered text</p>
<p class="text-right">Right aligned</p>
<p class="underline">Underlined text</p>
<p class="uppercase">uppercase text</p>
<p class="capitalize">capitalize each word</p>
<p class="spaced">Spaced out text</p>
<p class="indent">This paragraph has text indentation applied to the first line.</p>`}
          />
        </div>
        <CodeBlock
          language="css"
          code={`/* Typography scale and hierarchy */
.typography-scale {
  /* Base font settings */
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #1f2937;
}

/* Heading scale */
.heading-1 {
  font-size: 2.25rem;  /* 36px */
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #111827;
}

.heading-2 {
  font-size: 1.875rem; /* 30px */
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.75rem;
  color: #374151;
}

.heading-3 {
  font-size: 1.5rem;   /* 24px */
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  color: #4b5563;
}

/* Body text variations */
.body-large {
  font-size: 1.125rem; /* 18px */
  line-height: 1.7;
  margin-bottom: 1rem;
}

.body-normal {
  font-size: 1rem;     /* 16px */
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.body-small {
  font-size: 0.875rem; /* 14px */
  line-height: 1.5;
  color: #6b7280;
}

/* Special text styles */
.text-highlight {
  background: linear-gradient(120deg, #fbbf24 0%, #f59e0b 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
}

.text-highlight:hover {
  background-size: 100% 88%;
}

/* Responsive typography */
@media (min-width: 768px) {
  .heading-1 { font-size: 3rem; }
  .heading-2 { font-size: 2.25rem; }
  .heading-3 { font-size: 1.875rem; }
}`}
        />
      </LessonSection>

      <LessonSection id="box-model" title="Box Model">
        <p className="text-muted-foreground">
          Every element is a rectangular box made up of content, padding,
          border, and margin. The <code>box-sizing</code> property controls how
          width/height are calculated.
        </p>
        <CodeBlock
          language="css"
          code={`/* Use border-box to make sizing intuitive */
*, *::before, *::after { box-sizing: border-box; }

/* Visual spacing */
.card {
  padding: 1rem;    /* space inside */
  border: 1px solid var(--color-border);
  margin: 1rem;     /* space outside */
}`}
        />
        <DemoBox />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Padding vs Margin"
            language="css"
            code={`.outer{background:#e5e7eb;padding:12px}
.inner{background:#bfdbfe;margin:12px;padding:8px}`}
            previewHtml={`<div class="outer"><div class="inner">Inner box with margin and padding</div></div>`}
          />
          <PreviewCard
            title="Border and Radius"
            language="css"
            code={`.pill{display:inline-block;padding:6px 12px;border:2px solid #3b82f6;border-radius:9999px}`}
            previewHtml={`<span class="pill">Pill</span>`}
          />
        </div>
      </LessonSection>

      <LessonSection id="positioning" title="Positioning & Layout">
        <p className="text-muted-foreground">
          CSS positioning controls where elements appear on the page. Understand
          static, relative, absolute, fixed, and sticky positioning for precise
          element placement.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Position Types"
            language="css"
            code={`/* Static (default) */
.static {
  position: static;
  /* top, right, bottom, left have no effect */
}

/* Relative positioning */
.relative {
  position: relative;
  top: 10px;
  left: 20px;
  background: #dbeafe;
  padding: 8px;
}

/* Absolute positioning */
.container {
  position: relative;
  height: 100px;
  background: #f3f4f6;
  margin: 10px 0;
}

.absolute {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fbbf24;
  padding: 8px;
  border-radius: 4px;
}

/* Fixed positioning */
.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #10b981;
  color: white;
  padding: 8px;
  border-radius: 4px;
  z-index: 1000;
}`}
            previewHtml={`<div class="relative">Relative positioned</div>
<div class="container">
  Container with relative position
  <div class="absolute">Absolute positioned</div>
</div>`}
          />
          <PreviewCard
            title="Z-Index & Stacking"
            language="css"
            code={`/* Stacking context */
.layer-1 {
  position: relative;
  z-index: 1;
  background: #ef4444;
  padding: 20px;
  color: white;
}

.layer-2 {
  position: relative;
  z-index: 2;
  background: #3b82f6;
  padding: 20px;
  margin-top: -10px;
  margin-left: 10px;
  color: white;
}

.layer-3 {
  position: relative;
  z-index: 3;
  background: #10b981;
  padding: 20px;
  margin-top: -10px;
  margin-left: 20px;
  color: white;
}

/* Float for text wrapping */
.float-left {
  float: left;
  width: 100px;
  height: 100px;
  background: #f59e0b;
  margin: 0 10px 10px 0;
  border-radius: 8px;
}`}
            previewHtml={`<div class="layer-1">Layer 1 (z-index: 1)</div>
<div class="layer-2">Layer 2 (z-index: 2)</div>
<div class="layer-3">Layer 3 (z-index: 3)</div>`}
          />
        </div>
        <CodeBlock
          language="css"
          code={`/* Advanced positioning example */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f3f4f6;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

/* Sticky navigation */
.sticky-nav {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem;
  z-index: 100;
}

/* Centering techniques */
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.center-grid {
  display: grid;
  place-items: center;
  min-height: 200px;
}`}
        />
      </LessonSection>

      <LessonSection id="flexbox" title="Flexbox">
        <p className="text-muted-foreground">
          Flexbox arranges items along a single axis with powerful alignment
          controls. Use it for toolbars, navbars, and one‑dimensional layouts.
        </p>
        <CodeBlock
          language="css"
          code={`.toolbar {
  display: flex;               /* enable flex layout */
  gap: 0.5rem;                 /* spacing between items */
  justify-content: space-between; /* main-axis alignment */
  align-items: center;         /* cross-axis alignment */
}

.item { flex: 1 } /* items can grow to fill space */`}
        />
        <div className="mt-3 flex items-center gap-2 rounded-md border p-3">
          <div className="rounded-md bg-primary/20 px-3 py-2">Start</div>
          <div className="rounded-md bg-primary/20 px-3 py-2">Center</div>
          <div className="rounded-md bg-primary/20 px-3 py-2">End</div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Justify Center"
            language="css"
            code={`.row{display:flex;justify-content:center;gap:8px}
.item{background:#bfdbfe;padding:8px 12px;border-radius:6px}`}
            previewHtml={`<div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>`}
          />
          <PreviewCard
            title="Wrap Rows"
            language="css"
            code={`.row{display:flex;flex-wrap:wrap;gap:8px;max-width:220px}
.item{background:#bbf7d0;padding:8px 12px;border-radius:6px}`}
            previewHtml={`<div class="row"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div></div>`}
          />
        </div>
      </LessonSection>

      <LessonSection id="grid" title="Grid">
        <p className="text-muted-foreground">
          Grid is for two‑dimensional layouts. Define rows and columns and place
          items precisely.
        </p>
        <CodeBlock
          language="css"
          code={`.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* Place an item to span two columns on row 1 */
.feature {
  grid-column: 1 / span 2;
  grid-row: 1;
}`}
        />
        <div className="mt-3 grid grid-cols-3 gap-2 rounded-md border p-3">
          <div className="rounded-md bg-primary/15 p-4">1</div>
          <div className="rounded-md bg-primary/15 p-4">2</div>
          <div className="rounded-md bg-primary/15 p-4">3</div>
          <div className="col-span-2 rounded-md bg-primary/25 p-4">Span 2</div>
          <div className="rounded-md bg-primary/15 p-4">5</div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="auto-fit + minmax"
            language="css"
            code={`.gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px}
.cell{background:#fde68a;border-radius:6px;padding:12px;text-align:center}`}
            previewHtml={`<div class="gallery"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div><div class="cell">4</div></div>`}
          />
          <PreviewCard
            title="Named areas"
            language="css"
            code={`.layout{display:grid;grid-template-areas:"hd hd" "sb main" "ft ft";grid-template-columns:120px 1fr;gap:8px}
.hd{grid-area:hd;background:#c7d2fe}
.sb{grid-area:sb;background:#d1fae5}
.main{grid-area:main;background:#fecaca}
.ft{grid-area:ft;background:#fef3c7}
.layout > *{padding:8px;border-radius:6px}`}
            previewHtml={`<div class="layout"><div class="hd">Header</div><div class="sb">Sidebar</div><div class="main">Main</div><div class="ft">Footer</div></div>`}
          />
        </div>
      </LessonSection>

      <LessonSection id="responsive" title="Responsive Design">
        <p className="text-muted-foreground">
          Use relative units, fluid containers, and media queries. Start
          mobile‑first, then scale up.
        </p>
        <CodeBlock
          language="css"
          code={`/* Mobile-first styles */

.container { max-width: 100%; padding-inline: 1rem; }

/* Enhance at larger screens */
@media (min-width: 768px) {
  .container { max-width: 60ch; margin-inline: auto; }
}

/* Modern container query example */
.card { container-type: inline-size; }

@container (min-width: 420px) {
  .card { display: grid; grid-template-columns: 1fr auto; gap: 1rem; }
}`}
        />
        <div className="mt-3 rounded-md border p-4 text-sm text-muted-foreground">
          Practical tips:
          <ul className="list-disc pl-5 leading-7">
            <li>
              Design mobile-first, then add breakpoints with <code>@media</code>
              .
            </li>
            <li>
              Use flexible units like <code>fr</code>, <code>%</code>, and{" "}
              <code>rem</code>.
            </li>
            <li>
              Set images to <code>max-width: 100%</code> and{" "}
              <code>height: auto</code>.
            </li>
          </ul>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Fluid image"
            language="css"
            enableDarkMode
            code={`.wrap{max-width:320px}
img{max-width:100%;height:auto;border-radius:8px}`}
            previewHtml={`<div class="wrap"><img alt="Placeholder" src="https://picsum.photos/400/240" /></div>`}
          />
          <PreviewCard
            title="Mobile-first layout"
            language="css"
            enableDarkMode
            code={`.cards{display:grid;gap:8px}
@media (min-width:640px){.cards{grid-template-columns:1fr 1fr}}
.card{background:#f3f4f6;padding:12px;border-radius:8px}`}
            previewHtml={`<div class="cards"><div class="card">Card A</div><div class="card">Card B</div><div class="card">Card C</div></div>`}
          />
        </div>
      </LessonSection>
    </LessonLayout>
  );
}
