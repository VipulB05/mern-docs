

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
    day: 0,
    title: "Student Onboarding",
    description:
      "Welcome to the Full Stack Developer Bootcamp! Get familiar with the course structure, meet your instructors, and understand what you'll be building.",
    sections: [
      {
        id: "introduction-students",
        title: "Introduction to the Students",
        content:
          "Welcome to PESU I/O's Full Stack Developer Bootcamp! This course is designed for first-year students with no prior web development experience. Over the next 13 days, you'll transform from a complete beginner to someone capable of building and deploying full-stack web applications.",
      },
      {
        id: "introduction-course",
        title: "Introduction to the Course",
        content:
          "This bootcamp spans 30 hours (20 hours of in-person mentoring + 10 hours of self-learning) divided into 13 days. Each day follows a structured pattern: instructor-led teaching, at-home practice, SME meetups for doubt clearing, and daily project work. By the end, you'll have built a complete MERN stack application of your choice.",
      },
      {
        id: "introduction-web",
        title: "Introduction to Web",
        content:
          "The web is built on three core technologies: HTML (structure), CSS (styling), and JavaScript (interactivity). Modern web development has evolved to include frameworks like React for frontend and Node.js for backend. You'll learn how these technologies work together to create dynamic, full-stack applications that can be accessed from anywhere in the world.",
      },
    ],
    tasks: [
      "Set up your development environment (VS Code, Node.js, Git)",
      "Join the course Discord/Slack channel",
      "Think about what kind of web application you'd like to build as your final project",
    ],
    projectWork:
      "Get familiar with the course structure and expectations. Start brainstorming ideas for your final project.",
  },
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
  {
    day: 2,
    title: "JavaScript",
    description:
      "Add interactivity to your web pages with JavaScript. Learn ES6 features, array methods, and DOM manipulation.",
    sections: [
      {
        id: "basics",
        title: "JavaScript Basics",
        content:
          "JavaScript is the programming language of the web. It adds interactivity and dynamic behavior to websites.",
        subsections: [
          {
            title: "Variables & Data Types",
            content:
              "Modern JavaScript uses let and const for variable declarations. JavaScript has dynamic typing with primitives (string, number, boolean) and objects.",
            codeExample: {
              language: "javascript",
              code: `// Variables
let name = "John"; // Can be reassigned
const age = 25; // Cannot be reassigned
var oldWay = "avoid"; // Old syntax, avoid using

// Data types
const string = "Hello";
const number = 42;
const boolean = true;
const array = [1, 2, 3];
const object = { key: "value" };
const nullValue = null;
const undefinedValue = undefined;`,
            },
          },
          {
            title: "Functions",
            content: "Functions are reusable blocks of code. ES6 introduced arrow functions with shorter syntax.",
            codeExample: {
              language: "javascript",
              code: `// Traditional function
function greet(name) {
  return "Hello, " + name;
}

// Arrow function
const greetArrow = (name) => {
  return \`Hello, \${name}\`;
};

// Concise arrow function
const greetShort = (name) => \`Hello, \${name}\`;

// Usage
console.log(greet("Alice")); // "Hello, Alice"`,
            },
          },
          {
            title: "Loops & Conditionals",
            content: "Control flow with if/else statements and loops (for, while, forEach).",
            codeExample: {
              language: "javascript",
              code: `// Conditionals
const age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// Array iteration
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => {
  console.log(fruit);
});`,
            },
          },
        ],
      },
      {
        id: "es6",
        title: "ES6 Features",
        content: "Modern JavaScript (ES6+) introduced powerful features that make code cleaner and more expressive.",
        subsections: [
          {
            title: "Destructuring",
            content: "Extract values from arrays and objects into variables with concise syntax.",
            codeExample: {
              language: "javascript",
              code: `// Object destructuring
const person = { name: "Alice", age: 25, city: "NYC" };
const { name, age } = person;
console.log(name); // "Alice"

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // "red"

// Function parameters
const greet = ({ name, age }) => {
  return \`\${name} is \${age} years old\`;
};
greet(person); // "Alice is 25 years old"`,
            },
          },
          {
            title: "Template Literals",
            content: "Create strings with embedded expressions using backticks.",
            codeExample: {
              language: "javascript",
              code: `const name = "Bob";
const age = 30;

// Old way
const message1 = "My name is " + name + " and I'm " + age;

// Template literal
const message2 = \`My name is \${name} and I'm \${age}\`;

// Multi-line strings
const html = \`
  <div>
    <h1>\${name}</h1>
    <p>Age: \${age}</p>
  </div>
\`;`,
            },
          },
          {
            title: "Spread & Rest Operators",
            content: "The ... operator can spread arrays/objects or collect remaining parameters.",
            codeExample: {
              language: "javascript",
              code: `// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest parameters
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};
sum(1, 2, 3, 4); // 10`,
            },
          },
        ],
      },
      {
        id: "array-methods",
        title: "Array Methods",
        content: "Powerful array methods for transforming and filtering data without mutating the original array.",
        codeExample: {
          language: "javascript",
          code: `const numbers = [1, 2, 3, 4, 5];

// map: Transform each element
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter: Keep elements that pass a test
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]

// reduce: Combine all elements into a single value
const sum = numbers.reduce((total, num) => total + num, 0);
// 15

// Chaining methods
const result = numbers
  .filter(num => num > 2)
  .map(num => num * 2)
  .reduce((total, num) => total + num, 0);
// 24 (3*2 + 4*2 + 5*2)`,
        },
      },
      {
        id: "dom",
        title: "DOM Manipulation & Events",
        content:
          "The Document Object Model (DOM) represents your HTML as a tree of objects that JavaScript can manipulate.",
        subsections: [
          {
            title: "Selecting Elements",
            content: "Access HTML elements using various selector methods.",
            codeExample: {
              language: "javascript",
              code: `// Select by ID
const header = document.getElementById("header");

// Select by class (returns first match)
const button = document.querySelector(".btn");

// Select all matching elements
const allButtons = document.querySelectorAll(".btn");

// Modern approach (recommended)
const element = document.querySelector("#myId");
const elements = document.querySelectorAll(".myClass");`,
            },
          },
          {
            title: "Modifying Elements",
            content: "Change content, attributes, and styles of HTML elements.",
            codeExample: {
              language: "javascript",
              code: `const element = document.querySelector("#myElement");

// Change text content
element.textContent = "New text";

// Change HTML content
element.innerHTML = "<strong>Bold text</strong>";

// Modify styles
element.style.color = "blue";
element.style.fontSize = "20px";

// Add/remove classes
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("dark-mode");

// Set attributes
element.setAttribute("data-id", "123");`,
            },
          },
          {
            title: "Event Handling",
            content: "Respond to user interactions like clicks, input changes, and form submissions.",
            codeExample: {
              language: "javascript",
              code: `const button = document.querySelector("#myButton");

// Click event
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Input event
const input = document.querySelector("#myInput");
input.addEventListener("input", (e) => {
  console.log("Current value:", e.target.value);
});

// Form submission
const form = document.querySelector("#myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  const formData = new FormData(form);
  console.log("Form submitted:", Object.fromEntries(formData));
});`,
            },
          },
        ],
      },
    ],
    tasks: [
      "Build a to-do list with add/remove functionality",
      "Implement input validation",
      "Add local storage to persist todos",
    ],
    projectWork:
      "Add interactivity to your project using vanilla JavaScript. Implement form handling, dynamic content updates, and user interactions.",
  },
  {
    day: 3,
    title: "React Components & Hooks",
    description:
      "Learn React fundamentals: JSX, components, props, state management with useState, and side effects with useEffect.",
    sections: [
      {
        id: "jsx",
        title: "JSX & Components",
        content:
          "JSX is a syntax extension that lets you write HTML-like code in JavaScript. Components are reusable pieces of UI.",
        subsections: [
          {
            title: "Functional Components",
            content: "Modern React uses functional components - JavaScript functions that return JSX.",
            codeExample: {
              language: "jsx",
              code: `// Simple component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Component with JSX expressions
function Greeting() {
  const name = "Alice";
  const time = new Date().getHours();
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>It's {time > 12 ? "afternoon" : "morning"}</p>
    </div>
  );
}

// Export for use in other files
export default Greeting;`,
            },
          },
          {
            title: "Props",
            content: "Props (properties) pass data from parent to child components, making them reusable and dynamic.",
            codeExample: {
              language: "jsx",
              code: `// Component that receives props
function UserCard({ name, age, email }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Using the component
function App() {
  return (
    <div>
      <UserCard name="Alice" age={25} email="alice@example.com" />
      <UserCard name="Bob" age={30} email="bob@example.com" />
    </div>
  );
}`,
            },
          },
        ],
      },
      {
        id: "usestate",
        title: "State with useState",
        content:
          "useState is a Hook that lets you add state to functional components. State is data that changes over time.",
        codeExample: {
          language: "jsx",
          code: `import { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// State with objects
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <form>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}`,
        },
      },
      {
        id: "useeffect",
        title: "Side Effects with useEffect",
        content:
          "useEffect lets you perform side effects like data fetching, subscriptions, or manually changing the DOM.",
        codeExample: {
          language: "jsx",
          code: `import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Runs after component mounts
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty array = run once on mount
  
  if (loading) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
}

// Effect with dependencies
function Timer({ delay }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, delay);
    
    // Cleanup function
    return () => clearInterval(interval);
  }, [delay]); // Re-run when delay changes
  
  return <p>Count: {count}</p>;
}`,
        },
      },
    ],
    tasks: [
      "Build a counter component with increment/decrement",
      "Create a card list component that displays data from an array",
      "Add filtering functionality to the card list",
    ],
    projectWork:
      "Convert your project to React components. Break down your UI into reusable components with props and state.",
  },
  {
    day: 4,
    title: "React Router + Context API",
    description:
      "Build single-page applications with React Router for navigation and Context API for global state management.",
    sections: [
      {
        id: "react-router",
        title: "React Router",
        content:
          "React Router enables navigation between different views in your single-page application without page reloads.",
        subsections: [
          {
            title: "Basic Routing",
            content: "Set up routes to render different components based on the URL path.",
            codeExample: {
              language: "jsx",
              code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}`,
            },
          },
          {
            title: "Dynamic Routes",
            content: "Create routes with parameters to display different content based on the URL.",
            codeExample: {
              language: "jsx",
              code: `import { useParams, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/post/:postId" element={<Post />} />
    </Routes>
  );
}

function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>User Profile: {id}</h1>
      <button onClick={() => navigate('/')}>
        Go Home
      </button>
    </div>
  );
}`,
            },
          },
        ],
      },
      {
        id: "context-api",
        title: "Context API",
        content:
          "Context provides a way to share data across the component tree without passing props manually at every level.",
        subsections: [
          {
            title: "Creating Context",
            content: "Create a context and provider to share state globally.",
            codeExample: {
              language: "jsx",
              code: `import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };`,
            },
          },
          {
            title: "Using Context",
            content: "Consume context values in any component within the provider.",
            codeExample: {
              language: "jsx",
              code: `import { ThemeProvider, useTheme } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={theme}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}

function Main() {
  const { theme } = useTheme();
  
  return (
    <main className={theme}>
      <p>Current theme: {theme}</p>
    </main>
  );
}`,
            },
          },
        ],
      },
    ],
    tasks: [
      "Build a theme switcher using Context API",
      "Implement navigation between multiple pages",
      "Create a user authentication context (mock login/logout)",
    ],
    projectWork:
      "Add navigation and global state management to your project. Implement theme switching or user authentication context.",
  },
  {
    day: 5,
    title: "Tailwind CSS + Next.js",
    description:
      "Learn utility-first styling with Tailwind CSS and build server-rendered React applications with Next.js.",
    sections: [
      {
        id: "tailwind",
        title: "Tailwind CSS",
        content:
          "Tailwind is a utility-first CSS framework that lets you build custom designs without leaving your HTML.",
        subsections: [
          {
            title: "Utility Classes",
            content:
              "Use pre-defined classes for spacing, colors, typography, and layout instead of writing custom CSS.",
            codeExample: {
              language: "jsx",
              code: `// Traditional CSS approach
<div className="card">
  <h2 className="title">Card Title</h2>
  <p className="description">Card description</p>
</div>

// Tailwind approach
<div className="rounded-lg border border-gray-200 p-6 shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">Card Title</h2>
  <p className="mt-2 text-gray-600">Card description</p>
</div>

// Responsive design
<div className="w-full md:w-1/2 lg:w-1/3">
  <img className="h-48 w-full object-cover md:h-64" src="..." />
</div>`,
            },
          },
          {
            title: "Common Patterns",
            content: "Frequently used Tailwind patterns for layouts, buttons, and cards.",
            codeExample: {
              language: "jsx",
              code: `// Flexbox centering
<div className="flex items-center justify-center min-h-screen">
  <div>Centered content</div>
</div>

// Button styles
<button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
  Click me
</button>

// Card component
<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
  <h3 className="text-xl font-semibold">Card Title</h3>
  <p className="mt-2 text-gray-600">Card content goes here</p>
</div>

// Grid layout
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
            },
          },
        ],
      },
      {
        id: "nextjs",
        title: "Next.js Fundamentals",
        content:
          "Next.js is a React framework that provides server-side rendering, static generation, and file-based routing.",
        subsections: [
          {
            title: "File-Based Routing",
            content: "Next.js automatically creates routes based on your file structure in the app directory.",
            codeExample: {
              language: "plaintext",
              code: `app/
├── page.tsx          → / (home page)
├── about/
│   └── page.tsx      → /about
├── blog/
│   ├── page.tsx      → /blog
│   └── [slug]/
│       └── page.tsx  → /blog/:slug (dynamic)
└── api/
    └── hello/
        └── route.ts  → /api/hello (API route)`,
            },
          },
          {
            title: "Pages & Layouts",
            content: "Create pages and shared layouts for consistent UI across routes.",
            codeExample: {
              language: "tsx",
              code: `// app/page.tsx (Home page)
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
    </main>
  );
}

// app/layout.tsx (Root layout)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b p-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
        {children}
      </body>
    </html>
  );
}`,
            },
          },
          {
            title: "Dynamic Routes",
            content: "Create dynamic pages that respond to URL parameters.",
            codeExample: {
              language: "tsx",
              code: `// app/blog/[slug]/page.tsx
export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <article>
      <h1>Blog Post: {params.slug}</h1>
      <p>Content for {params.slug}</p>
    </article>
  );
}

// Generate static pages at build time
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}`,
            },
          },
        ],
      },
    ],
    tasks: [
      "Build a portfolio/blog scaffold with Tailwind CSS",
      "Create multiple pages using Next.js file-based routing",
      "Implement a responsive navigation bar",
    ],
    projectWork: "Style your project with Tailwind CSS and migrate to Next.js. Use file-based routing for navigation.",
  },
  {
    day: 6,
    title: "HTTP, REST & Postman",
    description: "Understand HTTP protocols, RESTful API design principles, and test APIs using Postman.",
    sections: [
      {
        id: "http",
        title: "HTTP Basics",
        content: "HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web.",
        subsections: [
          {
            title: "HTTP Methods",
            content: "Different HTTP methods represent different types of operations on resources.",
            codeExample: {
              language: "plaintext",
              code: `GET    - Retrieve data (read)
POST   - Create new data
PUT    - Update entire resource
PATCH  - Update partial resource
DELETE - Remove data

Example URLs:
GET    /api/users          → Get all users
GET    /api/users/123      → Get user with ID 123
POST   /api/users          → Create new user
PUT    /api/users/123      → Update user 123
DELETE /api/users/123      → Delete user 123`,
            },
          },
          {
            title: "Status Codes",
            content: "HTTP status codes indicate the result of a request.",
            codeExample: {
              language: "plaintext",
              code: `2xx - Success
200 OK                  → Request succeeded
201 Created             → Resource created successfully
204 No Content          → Success, no content to return

4xx - Client Errors
400 Bad Request         → Invalid request data
401 Unauthorized        → Authentication required
403 Forbidden           → No permission
404 Not Found           → Resource doesn't exist

5xx - Server Errors
500 Internal Server Error → Server-side error
503 Service Unavailable   → Server temporarily down`,
            },
          },
          {
            title: "Headers",
            content: "Headers provide additional information about requests and responses.",
            codeExample: {
              language: "plaintext",
              code: `Common Request Headers:
Content-Type: application/json
Authorization: Bearer <token>
Accept: application/json

Common Response Headers:
Content-Type: application/json
Set-Cookie: sessionId=abc123
Cache-Control: max-age=3600`,
            },
          },
        ],
      },
      {
        id: "rest",
        title: "REST API Principles",
        content:
          "REST (Representational State Transfer) is an architectural style for designing networked applications.",
        codeExample: {
          language: "plaintext",
          code: `REST Principles:

1. Resource-Based URLs
   ✓ /api/users
   ✓ /api/posts/123/comments
   ✗ /api/getUsers
   ✗ /api/deletePost

2. Use HTTP Methods Correctly
   ✓ GET /api/users (retrieve)
   ✓ POST /api/users (create)
   ✗ GET /api/users/delete/123

3. Stateless
   Each request contains all information needed
   Server doesn't store client state

4. JSON Response Format
   {
     "data": [...],
     "message": "Success",
     "status": 200
   }

5. Proper Status Codes
   Return appropriate HTTP status codes`,
        },
      },
      {
        id: "postman",
        title: "Testing with Postman",
        content: "Postman is a tool for testing APIs by sending requests and inspecting responses.",
        subsections: [
          {
            title: "Making Requests",
            content: "Create and send HTTP requests to test your API endpoints.",
            codeExample: {
              language: "plaintext",
              code: `1. Create a new request
2. Select HTTP method (GET, POST, etc.)
3. Enter URL: https://api.example.com/users
4. Add headers if needed:
   Content-Type: application/json
   Authorization: Bearer your-token
5. Add body for POST/PUT requests:
   {
     "name": "John Doe",
     "email": "john@example.com"
   }
6. Click Send
7. View response status, headers, and body`,
            },
          },
          {
            title: "Collections",
            content: "Organize related requests into collections for easy testing and documentation.",
            codeExample: {
              language: "plaintext",
              code: `Create a Collection: "User API"

Requests:
├── Get All Users (GET /api/users)
├── Get User by ID (GET /api/users/:id)
├── Create User (POST /api/users)
├── Update User (PUT /api/users/:id)
└── Delete User (DELETE /api/users/:id)

Benefits:
- Run all requests at once
- Share with team
- Export/import collections
- Add tests and documentation`,
            },
          },
        ],
      },
    ],
    tasks: [
      "Test a public API with Postman (e.g., JSONPlaceholder)",
      "Document all requests in a collection",
      "Create example requests for GET, POST, PUT, DELETE",
    ],
    projectWork:
      "Plan the API endpoints your project will need. Document the request/response format for each endpoint.",
  },
  {
    day: 7,
    title: "Node.js + Express.js Basics",
    description: "Build backend servers with Node.js and Express.js. Create API routes and middleware.",
    sections: [
      {
        id: "nodejs",
        title: "Node.js Fundamentals",
        content: "Node.js is a JavaScript runtime that lets you run JavaScript on the server side.",
        subsections: [
          {
            title: "Setting Up",
            content: "Initialize a Node.js project and install dependencies.",
            codeExample: {
              language: "bash",
              code: `# Initialize project
npm init -y

# Install Express
npm install express

# Install development dependencies
npm install --save-dev nodemon

# package.json scripts
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}`,
            },
          },
          {
            title: "Basic Server",
            content: "Create a simple HTTP server with Node.js.",
            codeExample: {
              language: "javascript",
              code: `// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
            },
          },
        ],
      },
      {
        id: "express",
        title: "Express.js",
        content: "Express is a minimal web framework for Node.js that simplifies building APIs and web applications.",
        subsections: [
          {
            title: "Basic Express Server",
            content: "Set up an Express server with basic routes.",
            codeExample: {
              language: "javascript",
              code: `// server.js
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my API' });
});

// Route with parameters
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: \`User ID: \${id}\` });
});

// POST route
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: 'User created',
    user: { name, email }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
            },
          },
          {
            title: "Middleware",
            content:
              "Middleware functions have access to request and response objects and can modify them or end the request-response cycle.",
            codeExample: {
              language: "javascript",
              code: `const express = require('express');
const app = express();

// Built-in middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Custom logging middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // Pass control to next middleware
});

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  // Verify token (simplified)
  if (token === 'valid-token') {
    next();
  } else {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// Protected route
app.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Access granted' });
});

// Error handling middleware (must be last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});`,
            },
          },
          {
            title: "Route Organization",
            content: "Organize routes into separate files for better code structure.",
            codeExample: {
              language: "javascript",
              code: `// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ users: [] });
});

router.get('/:id', (req, res) => {
  res.json({ user: { id: req.params.id } });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'User created' });
});

module.exports = router;

// server.js
const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());

// Mount routes
app.use('/api/users', userRoutes);

app.listen(3000);`,
            },
          },
        ],
      },
    ],
    tasks: [
      "Build a simple Express API with 2 routes (GET and POST)",
      "Add middleware for logging requests",
      "Test your API with Postman",
    ],
    projectWork: "Create the backend foundation for your project. Set up Express server with basic routes.",
  },
  {
    day: 8,
    title: "Authentication (JWT)",
    description: "Implement secure user authentication with password hashing and JSON Web Tokens (JWT).",
    sections: [
      {
        id: "password-hashing",
        title: "Password Hashing",
        content: "Never store passwords in plain text. Use bcrypt to hash passwords before storing them.",
        codeExample: {
          language: "javascript",
          code: `const bcrypt = require('bcryptjs');

// Hash password before saving
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Compare password during login
async function comparePassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}

// Usage in signup
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  
  // Hash password
  const hashedPassword = await hashPassword(password);
  
  // Save user with hashed password
  const user = { email, password: hashedPassword };
  // Save to database...
  
  res.status(201).json({ message: 'User created' });
});`,
        },
      },
      {
        id: "jwt",
        title: "JSON Web Tokens (JWT)",
        content:
          "JWTs are a secure way to transmit information between parties as a JSON object. Use them for authentication.",
        subsections: [
          {
            title: "Creating Tokens",
            content: "Generate JWT tokens when users log in successfully.",
            codeExample: {
              language: "javascript",
              code: `const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Generate token
function generateToken(userId) {
  const payload = { userId };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
  return token;
}

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Find user in database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Generate token
  const token = generateToken(user._id);
  
  res.json({
    message: 'Login successful',
    token,
    user: { id: user._id, email: user.email }
  });
});`,
            },
          },
          {
            title: "Verifying Tokens",
            content: "Create middleware to verify JWT tokens and protect routes.",
            codeExample: {
              language: "javascript",
              code: `const jwt = require('jsonwebtoken');

// Authentication middleware
function authenticate(req, res, next) {
  // Get token from header
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
}

// Protected route
app.get('/profile', authenticate, async (req, res) => {
  // req.userId is available from middleware
  const user = await User.findById(req.userId);
  res.json({ user });
});

// Another protected route
app.post('/posts', authenticate, async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({
    title,
    content,
    author: req.userId
  });
  res.status(201).json({ post });
});`,
            },
          },
        ],
      },
      {
        id: "complete-auth",
        title: "Complete Auth System",
        content: "Put it all together: signup, login, and protected routes.",
        codeExample: {
          language: "javascript",
          code: `const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const JWT_SECRET = 'your-secret-key';
const users = []; // In-memory storage (use database in production)

// Signup
app.post('/api/auth/signup', async (req, res) => {
  const { email, password, name } = req.body;
  
  // Check if user exists
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }
  
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Create user
  const user = {
    id: Date.now().toString(),
    email,
    name,
    password: hashedPassword
  };
  users.push(user);
  
  // Generate token
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
  
  res.status(201).json({
    message: 'User created',
    token,
    user: { id: user.id, email: user.email, name: user.name }
  });
});

// Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Find user
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Generate token
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
  
  res.json({
    message: 'Login successful',
    token,
    user: { id: user.id, email: user.email, name: user.name }
  });
});

// Auth middleware
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
  }
}

// Protected route
app.get('/api/profile', authenticate, (req, res) => {
  const user = users.find(u => u.id === req.userId);
  res.json({ user: { id: user.id, email: user.email, name: user.name } });
});

app.listen(3000);`,
        },
      },
    ],
    tasks: [
      "Build an Auth API with signup/login endpoints",
      "Implement password hashing with bcrypt",
      "Create a protected route that requires authentication",
    ],
    projectWork:
      "Add authentication to your project. Implement signup, login, and protect routes that require authentication.",
  },
  {
    day: 9,
    title: "Database Integration (MongoDB + CRUD)",
    description: "Connect your application to MongoDB and implement full CRUD operations with Mongoose.",
    sections: [
      {
        id: "mongodb-setup",
        title: "MongoDB Atlas Setup",
        content: "MongoDB Atlas is a cloud database service. Set it up to store your application data.",
        codeExample: {
          language: "plaintext",
          code: `1. Go to mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster (free tier)
4. Create a database user:
   - Username: myuser
   - Password: (generate secure password)
5. Whitelist IP address: 0.0.0.0/0 (allow from anywhere)
6. Get connection string:
   mongodb+srv://myuser:<password>@cluster0.xxxxx.mongodb.net/mydb

7. Install Mongoose:
   npm install mongoose

8. Store connection string in .env:
   MONGODB_URI=mongodb+srv://myuser:password@cluster0.xxxxx.mongodb.net/mydb`,
        },
      },
      {
        id: "mongoose",
        title: "Mongoose Basics",
        content: "Mongoose is an ODM (Object Data Modeling) library that provides a schema-based solution for MongoDB.",
        subsections: [
          {
            title: "Connecting to MongoDB",
            content: "Establish a connection to your MongoDB database.",
            codeExample: {
              language: "javascript",
              code: `const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
            },
          },
          {
            title: "Creating Schemas & Models",
            content: "Define the structure of your data with schemas and create models to interact with collections.",
            codeExample: {
              language: "javascript",
              code: `const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  age: {
    type: Number,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;`,
            },
          },
        ],
      },
      {
        id: "crud",
        title: "CRUD Operations",
        content: "Implement Create, Read, Update, and Delete operations for your data.",
        subsections: [
          {
            title: "Create (POST)",
            content: "Add new documents to your collection.",
            codeExample: {
              language: "javascript",
              code: `const User = require('./models/User');

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, password, age } = req.body;
    
    // Create user
    const user = await User.create({
      name,
      email,
      password,
      age
    });
    
    res.status(201).json({
      message: 'User created successfully',
      user
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`,
            },
          },
          {
            title: "Read (GET)",
            content: "Retrieve documents from your collection.",
            codeExample: {
              language: "javascript",
              code: `// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Find with filters
app.get('/api/users/search', async (req, res) => {
  try {
    const { name, minAge } = req.query;
    
    const filter = {};
    if (name) filter.name = new RegExp(name, 'i');
    if (minAge) filter.age = { $gte: parseInt(minAge) };
    
    const users = await User.find(filter).select('-password');
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
            },
          },
          {
            title: "Update (PUT/PATCH)",
            content: "Modify existing documents in your collection.",
            codeExample: {
              language: "javascript",
              code: `// Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true, runValidators: true }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({
      message: 'User updated successfully',
      user
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Partial update
app.patch('/api/users/:id', async (req, res) => {
  try {
    const updates = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ message: 'User updated', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`,
            },
          },
          {
            title: "Delete (DELETE)",
            content: "Remove documents from your collection.",
            codeExample: {
              language: "javascript",
              code: `// Delete user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({
      message: 'User deleted successfully',
      user
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete multiple users
app.delete('/api/users', async (req, res) => {
  try {
    const { ids } = req.body;
    
    const result = await User.deleteMany({
      _id: { $in: ids }
    });
    
    res.json({
      message: \`\${result.deletedCount} users deleted\`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
            },
          },
        ],
      },
    ],
    tasks: [
      "Set up MongoDB Atlas and get connection string",
      "Build a Notes API with full CRUD operations",
      "Test all CRUD endpoints with Postman",
    ],
    projectWork: "Connect your project to MongoDB and implement CRUD operations for your main data entities.",
  },
  {
    day: 10,
    title: "Best Practices",
    description:
      "Learn professional development practices: error handling, validation, project structure, and documentation.",
    sections: [
      {
        id: "error-handling",
        title: "Error Handling & Validation",
        content: "Proper error handling and input validation are crucial for building robust applications.",
        subsections: [
          {
            title: "Input Validation",
            content: "Validate user input before processing to prevent errors and security issues.",
            codeExample: {
              language: "javascript",
              code: `const { body, validationResult } = require('express-validator');

// Validation middleware
const validateUser = [
  body('email')
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 50 })
    .withMessage('Name too long')
];

// Route with validation
app.post('/api/users', validateUser, async (req, res) => {
  // Check validation results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  // Process valid data
  const { email, password, name } = req.body;
  // Create user...
});`,
            },
          },
          {
            title: "Error Handling Middleware",
            content: "Centralize error handling with middleware for consistent error responses.",
            codeExample: {
              language: "javascript",
              code: `// Custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

// Async error wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Route with error handling
app.get('/api/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    throw new AppError('User not found', 404);
  }
  
  res.json({ user });
}));

// Global error handler (must be last)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  
  console.error(err);
  
  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});`,
            },
          },
        ],
      },
      {
        id: "folder-structure",
        title: "Project Structure",
        content: "Organize your code with a clear folder structure for maintainability and scalability.",
        codeExample: {
          language: "plaintext",
          code: `project/
├── server.js              # Entry point
├── .env                   # Environment variables
├── .gitignore            # Git ignore file
├── package.json          # Dependencies
│
├── config/               # Configuration files
│   └── db.js            # Database connection
│
├── models/              # Database models
│   ├── User.js
│   └── Post.js
│
├── controllers/         # Route logic
│   ├── authController.js
│   ├── userController.js
│   └── postController.js
│
├── routes/              # API routes
│   ├── auth.js
│   ├── users.js
│   └── posts.js
│
├── middleware/          # Custom middleware
│   ├── auth.js
│   ├── errorHandler.js
│   └── validation.js
│
└── utils/               # Helper functions
    ├── AppError.js
    └── asyncHandler.js`,
        },
      },
      {
        id: "environment-variables",
        title: "Environment Variables",
        content: "Store sensitive configuration in environment variables, never in code.",
        codeExample: {
          language: "plaintext",
          code: `# .env file
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/mydb
JWT_SECRET=your-super-secret-key-change-this
JWT_EXPIRE=7d

# .gitignore (IMPORTANT!)
node_modules/
.env
.env.local

# Usage in code
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

// Never do this:
// const JWT_SECRET = "hardcoded-secret"; ❌`,
        },
      },
      {
        id: "documentation",
        title: "API Documentation",
        content: "Document your API endpoints so others (and future you) can understand how to use them.",
        codeExample: {
          language: "markdown",
          code: `# API Documentation

## Base URL
\`http://localhost:3000/api\`

## Authentication
Include JWT token in Authorization header:
\`Authorization: Bearer <token>\`

## Endpoints

### POST /auth/signup
Create a new user account.

**Request Body:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
\`\`\`

**Response (201):**
\`\`\`json
{
  "message": "User created",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
\`\`\`

### GET /users/:id
Get user by ID (requires authentication).

**Response (200):**
\`\`\`json
{
  "user": {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
\`\`\`

**Error (404):**
\`\`\`json
{
  "error": "User not found"
}
\`\`\``,
        },
      },
    ],
    tasks: [
      "Refactor your project with proper folder structure",
      "Add input validation to all routes",
      "Implement centralized error handling",
      "Create API documentation",
    ],
    projectWork: "Refactor your project following best practices. Add validation, error handling, and documentation.",
  },
  {
    day: 11,
    title: "Full-Stack Integration",
    description:
      "Connect your React/Next.js frontend with your Express backend. Make authenticated API calls with Axios.",
    sections: [
      {
        id: "axios",
        title: "API Calls with Axios",
        content: "Axios is a promise-based HTTP client for making API requests from your frontend.",
        subsections: [
          {
            title: "Setup & Basic Requests",
            content: "Install Axios and make basic GET and POST requests.",
            codeExample: {
              language: "bash",
              code: `# Install Axios
npm install axios`,
            },
          },
          {
            title: "Making Requests",
            content: "Use Axios to fetch and send data to your backend API.",
            codeExample: {
              language: "javascript",
              code: `import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// GET request
async function getUsers() {
  try {
    const response = await axios.get(\`\${API_URL}/users\`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    throw error;
  }
}

// POST request
async function createUser(userData) {
  try {
    const response = await axios.post(\`\${API_URL}/users\`, userData);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.data);
    throw error;
  }
}

// PUT request
async function updateUser(id, updates) {
  try {
    const response = await axios.put(\`\${API_URL}/users/\${id}\`, updates);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.data);
    throw error;
  }
}

// DELETE request
async function deleteUser(id) {
  try {
    const response = await axios.delete(\`\${API_URL}/users/\${id}\`);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.data);
    throw error;
  }
}`,
            },
          },
          {
            title: "Axios Instance",
            content: "Create a configured Axios instance for reusable settings.",
            codeExample: {
              language: "javascript",
              code: `// lib/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor (add auth token)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (handle errors)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;`,
            },
          },
        ],
      },
      {
        id: "auth-integration",
        title: "Authentication Integration",
        content: "Implement login/signup in your frontend and store JWT tokens for authenticated requests.",
        subsections: [
          {
            title: "Auth Context",
            content: "Create a context to manage authentication state across your app.",
            codeExample: {
              language: "jsx",
              code: `// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  async function fetchUser() {
    try {
      const response = await api.get('/auth/me');
      setUser(response.data.user);
    } catch (error) {
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    setUser(user);
    return user;
  }

  async function signup(name, email, password) {
    const response = await api.post('/auth/signup', { name, email, password });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    setUser(user);
    return user;
  }

  function logout() {
    localStorage.removeItem('token');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}`,
            },
          },
          {
            title: "Login Component",
            content: "Create a login form that uses the auth context.",
            codeExample: {
              language: "jsx",
              code: `// components/LoginForm.jsx
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border p-2"
        />
      </div>
      
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded border p-2"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}`,
            },
          },
          {
            title: "Protected Routes",
            content: "Create a component to protect routes that require authentication.",
            codeExample: {
              language: "jsx",
              code: `// components/ProtectedRoute.jsx
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return children;
}

// Usage in a page
// app/dashboard/page.jsx
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        <p>This page requires authentication</p>
      </div>
    </ProtectedRoute>
  );
}`,
            },
          },
        ],
      },
      {
        id: "data-fetching",
        title: "Data Fetching Patterns",
        content: "Best practices for fetching and displaying data from your API.",
        codeExample: {
          language: "jsx",
          code: `import { useState, useEffect } from 'react';
import api from '@/lib/axios';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await api.get('/users');
      setUsers(response.data.users);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id) {
    if (!confirm('Are you sure?')) return;
    
    try {
      await api.delete(\`/users/\${id}\`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      alert('Failed to delete user');
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
        },
      },
    ],
    tasks: [
      "Connect your frontend to your backend API",
      "Implement authentication flow (login/signup)",
      "Create protected routes that require authentication",
      "Fetch and display data from your API",
    ],
    projectWork:
      "Complete the full-stack integration of your project. Connect all frontend components to backend APIs with proper authentication.",
  },
  {
    day: 12,
    title: "Git + Deployment",
    description: "Learn version control with Git and deploy your full-stack application to production.",
    sections: [
      {
        id: "git",
        title: "Git Basics",
        content: "Git is a version control system that tracks changes to your code and enables collaboration.",
        subsections: [
          {
            title: "Basic Commands",
            content: "Essential Git commands for everyday development.",
            codeExample: {
              language: "bash",
              code: `# Initialize a new Git repository
git init

# Check status of files
git status

# Add files to staging area
git add .                 # Add all files
git add file.js          # Add specific file

# Commit changes
git commit -m "Add user authentication"

# View commit history
git log
git log --oneline        # Compact view

# Create a new branch
git branch feature-name
git checkout -b feature-name  # Create and switch

# Switch branches
git checkout main

# Merge branches
git checkout main
git merge feature-name

# Push to remote repository
git push origin main

# Pull latest changes
git pull origin main

# Clone a repository
git clone https://github.com/username/repo.git`,
            },
          },
          {
            title: "Git Workflow",
            content: "A typical workflow for working with Git and GitHub.",
            codeExample: {
              language: "bash",
              code: `# 1. Clone repository
git clone https://github.com/username/project.git
cd project

# 2. Create a new branch for your feature
git checkout -b add-login-page

# 3. Make changes to your code
# ... edit files ...

# 4. Check what changed
git status
git diff

# 5. Stage and commit changes
git add .
git commit -m "Add login page with form validation"

# 6. Push branch to GitHub
git push origin add-login-page

# 7. Create Pull Request on GitHub
# Go to GitHub and click "New Pull Request"

# 8. After PR is merged, update main branch
git checkout main
git pull origin main

# 9. Delete feature branch
git branch -d add-login-page`,
            },
          },
          {
            title: ".gitignore",
            content: "Specify files that Git should ignore.",
            codeExample: {
              language: "plaintext",
              code: `# .gitignore

# Dependencies
node_modules/
package-lock.json

# Environment variables
.env
.env.local
.env.production

# Build output
.next/
dist/
build/

# IDE
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Testing
coverage/`,
            },
          },
        ],
      },
      {
        id: "vercel-deployment",
        title: "Deploy Frontend to Vercel",
        content: "Vercel is the best platform for deploying Next.js applications with zero configuration.",
        subsections: [
          {
            title: "Deployment Steps",
            content: "Deploy your Next.js frontend to Vercel.",
            codeExample: {
              language: "bash",
              code: `# Method 1: Using Vercel CLI
npm install -g vercel
vercel login
vercel

# Method 2: Using GitHub (Recommended)
1. Push your code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
6. Add environment variables:
   NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
7. Click "Deploy"

# Your app will be live at:
# https://your-project.vercel.app`,
            },
          },
          {
            title: "Environment Variables",
            content: "Configure environment variables in Vercel dashboard.",
            codeExample: {
              language: "plaintext",
              code: `In Vercel Dashboard:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add variables:

Name: NEXT_PUBLIC_API_URL
Value: https://your-backend.onrender.com/api

Name: NEXT_PUBLIC_APP_URL
Value: https://your-project.vercel.app

Note: Variables starting with NEXT_PUBLIC_ are exposed to the browser`,
            },
          },
        ],
      },
      {
        id: "backend-deployment",
        title: "Deploy Backend to Render",
        content: "Render provides free hosting for Node.js backends with automatic deployments from Git.",
        subsections: [
          {
            title: "Deployment Steps",
            content: "Deploy your Express backend to Render.",
            codeExample: {
              language: "plaintext",
              code: `1. Push your backend code to GitHub

2. Go to render.com and sign up

3. Click "New +" → "Web Service"

4. Connect your GitHub repository

5. Configure:
   - Name: your-backend
   - Environment: Node
   - Build Command: npm install
   - Start Command: node server.js
   - Instance Type: Free

6. Add environment variables:
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=your-mongodb-atlas-uri
   JWT_SECRET=your-secret-key
   FRONTEND_URL=https://your-project.vercel.app

7. Click "Create Web Service"

8. Your API will be live at:
   https://your-backend.onrender.com`,
            },
          },
          {
            title: "CORS Configuration",
            content: "Configure CORS to allow requests from your frontend.",
            codeExample: {
              language: "javascript",
              code: `// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Your routes...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
            },
          },
        ],
      },
      {
        id: "mongodb-atlas",
        title: "MongoDB Atlas (Production)",
        content: "Your MongoDB Atlas database is already production-ready. Just update the connection string.",
        codeExample: {
          language: "plaintext",
          code: `1. Go to MongoDB Atlas dashboard
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Add it to Render environment variables:

MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/mydb

Important:
- Whitelist Render's IP (0.0.0.0/0 for all IPs)
- Use a strong password
- Keep connection string secret`,
        },
      },
      {
        id: "deployment-checklist",
        title: "Deployment Checklist",
        content: "Ensure everything is configured correctly before going live.",
        codeExample: {
          language: "markdown",
          code: `## Pre-Deployment Checklist

### Backend (Render)
- [ ] Environment variables set (MONGODB_URI, JWT_SECRET, etc.)
- [ ] CORS configured with frontend URL
- [ ] MongoDB Atlas IP whitelist updated
- [ ] Error handling implemented
- [ ] API endpoints tested

### Frontend (Vercel)
- [ ] Environment variables set (NEXT_PUBLIC_API_URL)
- [ ] API calls use production backend URL
- [ ] Build succeeds locally
- [ ] No console errors
- [ ] Responsive design tested

### Database (MongoDB Atlas)
- [ ] Connection string updated
- [ ] IP whitelist configured
- [ ] Database user created
- [ ] Collections created

### Git
- [ ] .env files in .gitignore
- [ ] All changes committed
- [ ] Code pushed to GitHub

### Testing
- [ ] Test signup/login flow
- [ ] Test all CRUD operations
- [ ] Test on mobile devices
- [ ] Check browser console for errors`,
        },
      },
    ],
    tasks: [
      "Push your code to GitHub",
      "Deploy frontend to Vercel",
      "Deploy backend to Render",
      "Configure environment variables",
      "Test your live application",
    ],
    projectWork:
      "Deploy your complete project to production. Ensure frontend, backend, and database are all connected and working.",
  },
]

export function getDayContent(day: number): DayContent | undefined {
  return courseContent.find((content) => content.day === day)
}

export function getAllDays(): number[] {
  return courseContent.map((content) => content.day)
}
