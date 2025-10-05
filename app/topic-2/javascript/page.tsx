'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { PreviewCard } from "@/components/lesson/preview-card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function JavascriptLessonPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="JavaScript Fundamentals"
      intro="JavaScript brings interactivity to web pages. You’ll learn the core language concepts, modern ES6 features, array methods, and basic DOM manipulation."
      toc={[
        { href: "#basics", label: "Variables & Functions" },
        { href: "#es6", label: "ES6 Features" },
        { href: "#array-methods", label: "Array Methods" },
        { href: "#dom", label: "DOM Basics & Events" },
        { href: "#project", label: "Mini Project" },
      ]}
    >
      {/* ---------- Navigation Buttons ---------- */}
      <div className="mb-4 flex flex-row gap-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/topic-2')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      {/* ---------- Section 1: Basics ---------- */}
      <LessonSection id="basics" title="Variables, Functions, Loops, Arrays, and Objects">
        <p className="text-muted-foreground mb-3">
          JavaScript is a versatile, dynamically typed language used in both browsers and servers. 
          Start by understanding how to declare variables, create functions, use loops, and work with arrays and objects.
        </p>

        <CodeBlock
          language="js"
          code={`// Variables
let name = "
";
const age = 21;
var city = "Bangalore";

// Functions
function greet(user) {
  return \`Hello, \${user}!\`;
}
console.log(greet(name));

// Loops
for (let i = 0; i < 3; i++) {
  console.log("Count:", i);
}

// Arrays & Objects
const fruits = ["apple", "banana", "mango"];
const user = { name: "Sumit", course: "MERN" };
console.log(fruits[1], user.name);
`}
        />
      </LessonSection>

      {/* ---------- Section 2: ES6 Features ---------- */}
      <LessonSection id="es6" title="ES6 Features">
        <p className="text-muted-foreground mb-3">
          ES6 introduced modern features like arrow functions, destructuring, template literals, default parameters, and spread/rest operators. These make code cleaner and more expressive.
        </p>

        <CodeBlock
          language="js"
          code={`// Arrow functions
const add = (a, b) => a + b;

// Template literals
const user = "Abhiram";
console.log(\`Welcome, \${user}!\`);

// Destructuring
const person = { name: "Sumit", age: 22 };
const { name, age } = person;
console.log(name, age);

// Spread operator
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
console.log(moreNums);
`}
        />
      </LessonSection>

      {/* ---------- Section 3: Array Methods ---------- */}
      <LessonSection id="array-methods" title="Array Methods (map, filter, reduce)">
        <p className="text-muted-foreground">
          Array methods like <code>map()</code>, <code>filter()</code>, and <code>reduce()</code> 
          let you process data efficiently using a functional style.
        </p>
        <CodeBlock
          language="js"
          code={`const numbers = [1, 2, 3, 4, 5];

// map()
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter()
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// reduce()
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log("Sum:", sum);`}
        />
      </LessonSection>

      {/* ---------- Section 4: DOM ---------- */}
      <LessonSection id="dom" title="DOM Basics & Events">
        <p className="text-muted-foreground">
          The DOM (Document Object Model) represents the page structure. JavaScript can change elements, listen to user actions, and dynamically update content.
        </p>
        <PreviewCard
          title="DOM Manipulation Example"
          language="html"
          code={`<!-- index.html -->
<button id="changeText">Click Me!</button>
<p id="message">Original text</p>

<script>
  const button = document.getElementById("changeText");
  const message = document.getElementById("message");

  button.addEventListener("click", () => {
    message.textContent = "Text changed via JavaScript!";
  });
</script>`}
        />
      </LessonSection>

      {/* ---------- Section 5: Project ---------- */}
      <LessonSection id="project" title="Mini Project – To-Do List">
        <p className="text-muted-foreground">
          Let’s apply what you’ve learned! Build a simple to-do list app with add and remove functionality using the DOM.
        </p>
        <PreviewCard
          title="To-Do List App"
          language="html"
          code={`<!-- Simple To-Do App -->
<h2>To-Do List</h2>
<input type="text" id="taskInput" placeholder="Enter a task">
<button id="addBtn">Add Task</button>
<ul id="taskList"></ul>

<script>
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const list = document.getElementById("taskList");

  addBtn.addEventListener("click", () => {
    const task = input.value.trim();
    if (!task) return;

    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => li.remove());
    list.appendChild(li);
    input.value = "";
  });
</script>`}
        />
      </LessonSection>
    </LessonLayout>
  )
}
