import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Badge } from "@/components/ui/badge"
import { PreviewCard } from "@/components/lesson/preview-card"

export default function HtmlLessonPage() {
  return (
    <LessonLayout
      title="HTML Fundamentals"
      intro="HTML gives structure and meaning to content. Focus on semantic elements so browsers, assistive tech, and search engines all understand your page."
      toc={[
        { href: "#structure", label: "HTML Structure" },
        { href: "#headings", label: "Headings & Text" },
        { href: "#links", label: "Links & Navigation" },
        { href: "#lists", label: "Lists" },
        { href: "#semantic", label: "Semantic Tags" },
        { href: "#media", label: "Images & Media" },
        { href: "#tables", label: "Tables" },
        { href: "#forms", label: "Forms" },
      ]}
    >
      <LessonSection id="structure" title="HTML Structure">
        <p className="text-muted-foreground">
          A valid HTML document starts with a doctype, followed by the <Badge variant="outline">html</Badge> root.
          Inside it lives the <Badge variant="outline">head</Badge> with metadata and the{" "}
          <Badge variant="outline">body</Badge> with visible content.
        </p>
        <CodeBlock
          language="html"
          code={`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Document title</title>
  </head>
  <body>
    <header>Site name</header>
    <main>
      <h1>Page heading</h1>
      <p>Content...</p>
    </main>
    <footer>© 2025 Your Name</footer>
  </body>
</html>`}
        />
      </LessonSection>

      <LessonSection id="headings" title="Headings & Text Elements">
        <p className="text-muted-foreground">
          Use heading tags <code>h1</code> through <code>h6</code> to create a logical document outline. 
          Combine with text elements like <code>p</code>, <code>strong</code>, <code>em</code>, and others for rich content.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Heading Hierarchy"
            language="html"
            code={`<h1>Main Title (h1)</h1>
<h2>Section Heading (h2)</h2>
<h3>Subsection (h3)</h3>
<h4>Sub-subsection (h4)</h4>
<h5>Minor Heading (h5)</h5>
<h6>Smallest Heading (h6)</h6>`}
          />
          <PreviewCard
            title="Text Elements"
            language="html"
            code={`<p>This is a <strong>paragraph</strong> with 
<em>emphasized text</em> and a 
<mark>highlighted portion</mark>.</p>

<p>We can show <code>inline code</code>, 
<kbd>keyboard input</kbd>, and 
<var>variables</var>.</p>

<blockquote>
  <p>"This is a blockquote for longer citations."</p>
  <cite>— Author Name</cite>
</blockquote>`}
          />
        </div>
        <CodeBlock
          language="html"
          
          code={`<!-- Complete text example -->
<article>
  <h1>The Importance of Semantic HTML</h1>
  
  <p>Writing semantic HTML is <strong>crucial</strong> for web accessibility. 
  It helps <em>assistive technologies</em> understand your content structure.</p>
  
  <h2>Key Benefits</h2>
  <p>Using proper HTML tags provides several advantages:</p>
  
  <ul>
    <li><strong>SEO:</strong> Search engines better understand your content</li>
    <li><strong>Accessibility:</strong> Screen readers can navigate effectively</li>
    <li><strong>Maintainability:</strong> Code is easier to read and update</li>
  </ul>
  
  <blockquote>
    <p>"The power of the Web is in its universality. 
    Access by everyone regardless of disability is an essential aspect."</p>
    <cite>— Tim Berners-Lee, W3C Director</cite>
  </blockquote>
  
  <p><small>Last updated: <time datetime="2025-09-29">September 29, 2025</time></small></p>
</article>`}
        />
      </LessonSection>

      <LessonSection id="links" title="Links & Navigation">
        <p className="text-muted-foreground">
          Links are the foundation of the web. Use the <code>a</code> tag with proper <code>href</code> values 
          for navigation, external resources, and email/phone links.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Basic Links"
            language="html"
            code={`<!-- Internal links -->
<a href="/">Home</a>
<a href="/about">About Us</a>
<a href="#section1">Jump to Section</a>

<!-- External links -->
<a href="https://github.com" target="_blank" rel="noopener">
  GitHub (opens in new tab)
</a>

<!-- Email and phone -->
<a href="mailto:hello@example.com">Send Email</a>
<a href="tel:+1234567890">Call Us</a>`}
          />
          <PreviewCard
            title="Navigation Menu"
            language="html"
            code={`<nav aria-label="Main Navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/category">Category</a></li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>`}
          />
        </div>
      </LessonSection>

      <LessonSection id="lists" title="Lists">
        <p className="text-muted-foreground">
          HTML provides three types of lists: unordered (<code>ul</code>), ordered (<code>ol</code>), 
          and description lists (<code>dl</code>). Each serves different semantic purposes.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Unordered & Ordered Lists"
            language="html"
            code={`<!-- Unordered list -->
<h3>Shopping List</h3>
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges
    <ul>
      <li>Naval oranges</li>
      <li>Blood oranges</li>
    </ul>
  </li>
</ul>

<!-- Ordered list -->
<h3>Recipe Steps</h3>
<ol>
  <li>Preheat oven to 350°F</li>
  <li>Mix dry ingredients</li>
  <li>Add wet ingredients</li>
  <li>Bake for 25 minutes</li>
</ol>`}
          />
          <PreviewCard
            title="Description Lists"
            language="html"
            code={`<h3>Web Technologies</h3>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language - structures content</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets - styles presentation</dd>
  
  <dt>JavaScript</dt>
  <dd>Programming language - adds interactivity</dd>
  <dd>Runs in browsers and servers (Node.js)</dd>
</dl>`}
          />
        </div>
      </LessonSection>

      <LessonSection id="semantic" title="Semantic Tags">
        <p className="text-muted-foreground">
          Semantic elements describe their meaning: use <code>header</code>, <code>nav</code>, <code>main</code>,{" "}
          <code>article</code>, <code>section</code>, <code>aside</code>, and <code>footer</code> to reflect document
          structure. This improves accessibility and SEO compared to generic <code>div</code> elements.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="header"
            language="html"
            code={`<header>
  <h1>Site name</h1>
  <nav aria-label="Primary">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>`}
          />
          <PreviewCard
            title="nav"
            language="html"
            code={`<nav aria-label="Breadcrumb">
  <a href="/">Home</a> / <a href="/docs">Docs</a> / <span>Intro</span>
</nav>`}
          />
          <PreviewCard
            title="main + article"
            language="html"
            code={`<main>
  <article>
    <header>
      <h2>Article title</h2>
      <p><time datetime="2025-09-29">Sep 29, 2025</time></p>
    </header>
    <section>
      <h3>Why semantics?</h3>
      <p>Helps screen readers and SEO.</p>
    </section>
  </article>
</main>`}
          />
          <PreviewCard
            title="aside + footer"
            language="html"
            code={`<aside>
  <ul>
    <li>Related link</li>
    <li>Tag</li>
  </ul>
</aside>
<footer>
  <small>© 2025 Web Foundations</small>
</footer>`}
          />
        </div>
      </LessonSection>

      <LessonSection id="media" title="Images & Media">
        <p className="text-muted-foreground">
          Images, audio, and video enrich web content. Always provide alternative text for images 
          and use proper semantic markup for accessibility.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Images"
            language="html"
            code={`<!-- Basic image -->
<img src="/placeholder.jpg" 
     alt="Description of image content" 
     width="300" height="200">

<!-- Responsive image with srcset -->
<img src="/small.jpg"
     srcset="/small.jpg 480w, 
             /medium.jpg 800w, 
             /large.jpg 1200w"
     sizes="(max-width: 480px) 100vw, 
            (max-width: 800px) 50vw, 
            33vw"
     alt="Responsive image example">

<!-- Image with caption -->
<figure>
  <img src="/chart.png" alt="Sales data chart">
  <figcaption>Q3 2025 Sales Performance</figcaption>
</figure>`}
          />
          <PreviewCard
            title="Audio & Video"
            language="html"
            code={`<!-- Audio with controls -->
<audio controls>
  <source src="/audio.mp3" type="audio/mpeg">
  <source src="/audio.ogg" type="audio/ogg">
  Your browser doesn't support audio.
</audio>

<!-- Video with multiple sources -->
<video controls width="320" height="240" 
       poster="/video-poster.jpg">
  <source src="/video.mp4" type="video/mp4">
  <source src="/video.webm" type="video/webm">
  <track kind="subtitles" src="/subs.vtt" 
         srclang="en" label="English">
  Your browser doesn't support video.
</video>`}
          />
        </div>
      </LessonSection>

      <LessonSection id="tables" title="Tables">
        <p className="text-muted-foreground">
          Tables display tabular data with rows and columns. Use proper table structure with 
          <code>thead</code>, <code>tbody</code>, <code>th</code>, and <code>td</code> for accessibility.
        </p>
        <PreviewCard
          title="Complete Table Example"
          language="html"
          code={`<table>
  <caption>Monthly Sales Report - Q3 2025</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Product A</th>
      <th scope="col">Product B</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">July</th>
      <td>$12,500</td>
      <td>$8,750</td>
      <td>$21,250</td>
    </tr>
    <tr>
      <th scope="row">August</th>
      <td>$15,200</td>
      <td>$9,100</td>
      <td>$24,300</td>
    </tr>
    <tr>
      <th scope="row">September</th>
      <td>$14,800</td>
      <td>$11,200</td>
      <td>$26,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Totals</th>
      <td>$42,500</td>
      <td>$29,050</td>
      <td>$71,550</td>
    </tr>
  </tfoot>
</table>`}
        />
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <PreviewCard
            title="Simple Table"
            language="html"
            code={`<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>30</td>
    <td>San Francisco</td>
  </tr>
</table>`}
          />
          <PreviewCard
            title="Table with Colspan/Rowspan"
            language="html"
            code={`<table>
  <tr>
    <th colspan="2">Personal Info</th>
  </tr>
  <tr>
    <td>Name</td>
    <td>John Doe</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>john@example.com</td>
  </tr>
</table>`}
          />
        </div>
      </LessonSection>

      <LessonSection id="forms" title="Forms">
        <p className="text-muted-foreground">
          Forms collect user input. Always pair inputs with <code>label</code>, group related controls with <code>fieldset</code> and{" "}
          <code>legend</code>, and use native validation via attributes like <code>required</code> and <code>type</code>.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <PreviewCard
            title="Text Inputs"
            language="html"
            code={`<!-- Text input with label -->
<div>
  <label for="fullname">Full Name</label>
  <input id="fullname" name="fullname" type="text" 
         required placeholder="Enter your full name">
</div>

<!-- Email input -->
<div>
  <label for="email">Email Address</label>
  <input id="email" name="email" type="email" 
         required placeholder="you@example.com">
</div>

<!-- Password input -->
<div>
  <label for="password">Password</label>
  <input id="password" name="password" type="password" 
         required minlength="8">
</div>

<!-- Number input -->
<div>
  <label for="age">Age</label>
  <input id="age" name="age" type="number" 
         min="1" max="120" step="1">
</div>`}
          />
          <PreviewCard
            title="Textarea & Select"
            language="html"
            code={`<!-- Textarea -->
<div>
  <label for="message">Message</label>
  <textarea id="message" name="message" 
            rows="4" cols="50" 
            placeholder="Enter your message..."></textarea>
</div>

<!-- Select dropdown -->
<div>
  <label for="country">Country</label>
  <select id="country" name="country" required>
    <option value="">Choose a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="in">India</option>
  </select>
</div>

<!-- Multiple select -->
<div>
  <label for="skills">Skills (hold Ctrl/Cmd)</label>
  <select id="skills" name="skills" multiple size="4">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
    <option value="react">React</option>
  </select>
</div>`}
          />
          <PreviewCard
            title="Checkboxes & Radio Buttons"
            language="html"
            code={`<!-- Checkboxes -->
<fieldset>
  <legend>Interests</legend>
  <div>
    <input type="checkbox" id="webdev" name="interests" value="webdev">
    <label for="webdev">Web Development</label>
  </div>
  <div>
    <input type="checkbox" id="design" name="interests" value="design">
    <label for="design">UI/UX Design</label>
  </div>
  <div>
    <input type="checkbox" id="mobile" name="interests" value="mobile">
    <label for="mobile">Mobile Apps</label>
  </div>
</fieldset>

<!-- Radio buttons -->
<fieldset>
  <legend>Experience Level</legend>
  <div>
    <input type="radio" id="beginner" name="level" value="beginner" checked>
    <label for="beginner">Beginner</label>
  </div>
  <div>
    <input type="radio" id="intermediate" name="level" value="intermediate">
    <label for="intermediate">Intermediate</label>
  </div>
  <div>
    <input type="radio" id="advanced" name="level" value="advanced">
    <label for="advanced">Advanced</label>
  </div>
</fieldset>`}
          />
          <PreviewCard
            title="Complete Contact Form"
            language="html"
            code={`<form action="/contact" method="post">
  <div>
    <label for="name">Name *</label>
    <input id="name" name="name" type="text" required>
  </div>
  
  <div>
    <label for="email">Email *</label>
    <input id="email" name="email" type="email" required>
  </div>
  
  <div>
    <label for="phone">Phone</label>
    <input id="phone" name="phone" type="tel">
  </div>
  
  <fieldset>
    <legend>How can we help? *</legend>
    <div>
      <input type="radio" id="support" name="inquiry" value="support" required>
      <label for="support">Technical Support</label>
    </div>
    <div>
      <input type="radio" id="sales" name="inquiry" value="sales">
      <label for="sales">Sales Question</label>
    </div>
    <div>
      <input type="radio" id="other" name="inquiry" value="other">
      <label for="other">Other</label>
    </div>
  </fieldset>
  
  <div>
    <label for="message">Message *</label>
    <textarea id="message" name="message" required 
              rows="5" placeholder="Tell us more..."></textarea>
  </div>
  
  <div>
    <input type="checkbox" id="newsletter" name="newsletter" value="yes">
    <label for="newsletter">Subscribe to our newsletter</label>
  </div>
  
  <button type="submit">Send Message</button>
  <button type="reset">Clear Form</button>
</form>`}
          />
        </div>
        <div className="mt-6">
          <h4 className="mb-3 text-lg font-semibold">Additional Input Types</h4>
          <PreviewCard
            title="Modern HTML5 Input Types"
            language="html"
            code={`<!-- Date and time inputs -->
<div>
  <label for="birthday">Birthday</label>
  <input id="birthday" name="birthday" type="date">
</div>

<div>
  <label for="meeting">Meeting Time</label>
  <input id="meeting" name="meeting" type="datetime-local">
</div>

<!-- Range slider -->
<div>
  <label for="volume">Volume</label>
  <input id="volume" name="volume" type="range" 
         min="0" max="100" value="50">
  <output for="volume">50</output>
</div>

<!-- Color picker -->
<div>
  <label for="color">Favorite Color</label>
  <input id="color" name="color" type="color" value="#ff0000">
</div>

<!-- File upload -->
<div>
  <label for="resume">Upload Resume</label>
  <input id="resume" name="resume" type="file" 
         accept=".pdf,.doc,.docx">
</div>

<!-- Search input -->
<div>
  <label for="search">Search</label>
  <input id="search" name="search" type="search" 
         placeholder="Search products...">
</div>

<!-- URL input -->
<div>
  <label for="website">Website</label>
  <input id="website" name="website" type="url" 
         placeholder="https://example.com">
</div>`}
          />
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <h4 className="font-semibold mb-2">Form Best Practices:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Always use <code>label</code> elements with <code>for</code> attributes or wrap inputs</li>
            <li>Use <code>name</code> attributes for server submission and <code>id</code> for labels</li>
            <li>Provide helpful <code>placeholder</code> text and validation messages</li>
            <li>Group related fields with <code>fieldset</code> and <code>legend</code></li>
            <li>Use appropriate input types for better mobile UX and validation</li>
            <li>Include <code>required</code> attributes and other validation constraints</li>
            <li>Prefer native inputs over custom widgets for accessibility</li>
          </ul>
        </div>
      </LessonSection>
    </LessonLayout>
  )
}
