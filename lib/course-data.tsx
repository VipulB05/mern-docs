export interface DayContent {
  day: number
  title: string
  description: string
  sections: Section[]
  tasks: string[]
  projectWork: string
}

export interface Section {
  id: string
  title: string
  content: string
  codeExample?: CodeExample
  subsections?: Subsection[]
}

export interface Subsection {
  title: string
  content: string
  codeExample?: CodeExample
}

export interface CodeExample {
  language: string
  code: string
  filename?: string
}

export const courseContent: DayContent[] = [
  {
    day: 1,
    title: "Web Basics (HTML + CSS)",
    description:
      "Learn the foundation of web development with HTML and CSS. Build your first web page and style it beautifully.",
    sections: [
      {
        id: "html",
        title: "HTML",
        content:
          "HTML (HyperText Markup Language) is the backbone of every web page. It provides structure and meaning to content through semantic tags.",
        subsections: [
          {
            title: "Structure",
            content:
              "Every HTML document follows a basic structure with DOCTYPE, html, head, and body tags. The head contains metadata, while the body contains visible content.",
            codeExample: {
              language: "html",
              code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to Web Development</h1>
  <p>This is my first HTML page!</p>
</body>
</html>`,
            },
          },
          {
            title: "Semantic Tags",
            content:
              "Semantic HTML uses tags that describe their meaning, making your code more readable and accessible. Use header, nav, main, article, section, aside, and footer instead of generic divs.",
            codeExample: {
              language: "html",
              code: `<header>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content goes here...</p>
  </article>
</main>

<footer>
  <p>&copy; 2025 My Website</p>
</footer>`,
            },
          },
          {
            title: "Forms",
            content:
              "Forms allow users to input data. They include various input types, labels, and buttons for submission.",
            codeExample: {
              language: "html",
              code: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4"></textarea>
  
  <button type="submit">Submit</button>
</form>`,
            },
          },
        ],
      },
      {
        id: "css",
        title: "CSS",
        content:
          "CSS (Cascading Style Sheets) controls the visual presentation of HTML elements. Master the box model, flexbox, grid, and responsive design.",
        subsections: [
          {
            title: "Box Model",
            content:
              "Every HTML element is a box with content, padding, border, and margin. Understanding the box model is crucial for layout control.",
            codeExample: {
              language: "css",
              code: `.box {
  /* Content size */
  width: 300px;
  height: 200px;
  
  /* Spacing inside the box */
  padding: 20px;
  
  /* Border around the box */
  border: 2px solid #333;
  
  /* Spacing outside the box */
  margin: 10px;
  
  /* Box sizing includes padding and border in width/height */
  box-sizing: border-box;
}`,
            },
          },
          {
            title: "Flexbox",
            content:
              "Flexbox is a one-dimensional layout system perfect for arranging items in rows or columns with flexible sizing and alignment.",
            codeExample: {
              language: "css",
              code: `.container {
  display: flex;
  justify-content: space-between; /* Horizontal alignment */
  align-items: center; /* Vertical alignment */
  gap: 20px; /* Space between items */
  flex-wrap: wrap; /* Wrap to next line if needed */
}

.item {
  flex: 1; /* Grow to fill available space */
  min-width: 200px;
}`,
            },
          },
          {
            title: "Grid",
            content:
              "CSS Grid is a two-dimensional layout system ideal for complex page layouts with rows and columns.",
            codeExample: {
              language: "css",
              code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-gap: 20px;
  padding: 20px;
}

/* Responsive grid */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; /* Single column on mobile */
  }
}`,
            },
          },
          {
            title: "Responsive Design",
            content:
              "Responsive design ensures your website looks great on all devices using media queries, flexible units, and mobile-first approach.",
            codeExample: {
              language: "css",
              code: `/* Mobile-first approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}`,
            },
          },
        ],
      },
    ],
    tasks: [
      "Build a profile page with HTML + CSS",
      "Add a form with inputs (name, email, message)",
      "Make your page responsive using media queries",
    ],
    projectWork:
      "Create the basic HTML structure and CSS styling for your final project. Focus on semantic HTML and responsive layout.",
  },
]

export function getDayContent(day: number): DayContent | undefined {
  return courseContent.find((content) => content.day === day)
}

export function getAllDays(): number[] {
  return courseContent.map((content) => content.day)
}