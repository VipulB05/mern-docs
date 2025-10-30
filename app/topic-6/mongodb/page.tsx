'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function MongoDBLessonPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="MongoDB — Complete Beginner's Guide"
      intro="Start from zero! Learn what MongoDB is, why we use it, how to set it up step-by-step, and master CRUD operations (Create, Read, Update, Delete) with hands-on examples. Perfect for complete beginners with no database experience."
      toc={[
        { href: "#what-is-mongodb", label: "What is MongoDB?" },
        { href: "#setup", label: "Installation Guide" },
        { href: "#mongo-shell", label: "MongoDB Shell" },
        { href: "#database-basics", label: "Database & Collection Basics" },
        { href: "#insert", label: "Insert Operations" },
        { href: "#read", label: "Read Operations" },
        { href: "#update", label: "Update Operations" },
        { href: "#delete", label: "Delete Operations" },
        { href: "#connect", label: "Connecting from Node.js" },
        { href: "#mongoose", label: "Using Mongoose" },
        { href: "#indexes", label: "Database Indexing" },
        { href: "#aggregation", label: "Aggregation Framework" },
        { href: "#schema-design", label: "Schema Design Patterns" },
        { href: "#next-steps", label: "Further Learning" },
      ]}
    >
      <div className="mb-4 flex flex-row gap-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/topic-6')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <LessonSection id="what-is-mongodb" title="What is MongoDB?">
        <p className="text-muted-foreground mb-4">
          Before we dive into MongoDB, let&apos;s understand what a database is. A <strong>database</strong> is simply a place where we store information in an organized way so we can find it later. Think of it like a digital filing cabinet for your application.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Understanding NoSQL vs SQL
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            There are two main types of databases:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><strong>SQL Databases</strong> (like MySQL, PostgreSQL): Store data in tables with fixed columns and rows, like Excel spreadsheets. You need to define the structure upfront.</li>
            <li><strong>NoSQL Databases</strong> (like MongoDB): Store data in flexible formats. MongoDB uses a format similar to JavaScript objects, making it very natural for web developers.</li>
          </ul>
        </div>

        <p className="text-sm font-semibold mb-2">How MongoDB Organizes Data</p>
        <p className="text-muted-foreground mb-3">
          MongoDB uses three main concepts to organize data:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-muted/50 p-3 rounded-md">
            <p className="text-sm font-semibold mb-1">1. Documents</p>
            <p className="text-sm text-muted-foreground">
              A <strong>document</strong> is a single record, like one user&apos;s information or one product. It&apos;s written in JSON format (the same format as JavaScript objects). Each document can have different fields.
            </p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="text-sm font-semibold mb-1">2. Collections</p>
            <p className="text-sm text-muted-foreground">
              A <strong>collection</strong> is a group of related documents, like all users or all products. Think of it as a folder containing similar documents.
            </p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="text-sm font-semibold mb-1">3. Databases</p>
            <p className="text-sm text-muted-foreground">
              A <strong>database</strong> contains multiple collections. For example, an e-commerce app might have a database with collections for users, products, and orders.
            </p>
          </div>
        </div>

        <p className="text-sm font-semibold mb-2">Visual Example</p>
        <CodeBlock
          language="javascript"
          code={`// This is what a document looks like
// It's just like a JavaScript object!
{
  _id: "507f1f77bcf86cd799439011",    // Every document gets a unique ID
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  hobbies: ["reading", "coding"],     // Arrays work perfectly
  address: {                           // You can nest objects too!
    city: "New York",
    country: "USA"
  }
}

// Multiple documents form a collection
// Collection name: "users"
// Documents: [user1, user2, user3, ...]`}
        />

        <div className="mt-4 bg-muted/50 p-4 rounded-md">
          <p className="text-sm font-semibold mb-2">Why MongoDB is Perfect for Beginners</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Uses JSON format - if you know JavaScript objects, you already understand MongoDB documents</li>
            <li>No need to plan your entire database structure before starting</li>
            <li>Easy to add new fields to documents without affecting existing data</li>
            <li>Works seamlessly with Node.js and Express</li>
            <li>Free to use and widely adopted in the industry</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="setup" title="MongoDB Installation Guide">
        <p className="text-muted-foreground mb-3">
          You can install MongoDB locally for development or use MongoDB Atlas (cloud). This section covers local installation for hands-on practice.
        </p>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Step 1: Download MongoDB Community Server</p>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
              <li>Visit <a href="https://www.mongodb.com/try/download/community" target="_blank" className="text-primary underline">mongodb.com/try/download/community</a></li>
              <li>Select the latest stable version for your operating system</li>
              <li>Choose the appropriate package:
                <ul className="list-disc pl-5 mt-1">
                  <li><strong>Windows:</strong> MSI Installer</li>
                  <li><strong>macOS:</strong> TGZ or use Homebrew</li>
                  <li><strong>Linux:</strong> Distribution-specific package</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Step 2: Installation Process</p>
            <div className="text-sm text-muted-foreground space-y-3">
              <div>
                <p className="font-semibold mb-2">Windows (Detailed Steps):</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Double-click the downloaded MSI file to start the installer</li>
                  <li>Click &quot;Next&quot; on the welcome screen</li>
                  <li>Accept the license agreement and click &quot;Next&quot;</li>
                  <li>Choose <strong>&quot;Complete&quot;</strong> installation (recommended for beginners)</li>
                  <li>
                    <strong>Service Configuration Screen - Important!</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li><strong>Install MongoDB as a Service:</strong> Keep this checked ✓</li>
                      <li><strong>Run service as Network Service user:</strong> Keep this selected (recommended)</li>
                      <li><strong>Service Name:</strong> Leave as <code>MongoDB</code></li>
                      <li><strong>Data Directory:</strong> Leave default path (<code>C:\Program Files\MongoDB\Server\7.0\data\</code>)</li>
                      <li><strong>Log Directory:</strong> Leave default path (<code>C:\Program Files\MongoDB\Server\7.0\log\</code>)</li>
                      <li>Click &quot;Next&quot;</li>
                    </ul>
                  </li>
                  <li>On the &quot;Install MongoDB Compass&quot; screen:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Keep it checked if you want a visual interface (recommended for beginners)</li>
                      <li>Or uncheck if you only want to use the command line</li>
                    </ul>
                  </li>
                  <li>Click &quot;Install&quot; and wait for completion (may take a few minutes)</li>
                  <li>Click &quot;Finish&quot; when done</li>
                </ol>

                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-3 rounded-md mt-3">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
                    💡 What does &quot;Install as a Service&quot; mean?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    When MongoDB runs as a Windows service, it starts automatically when your computer boots up. This means you don&apos;t have to manually start MongoDB every time you want to use it. It&apos;s running in the background, ready when you need it!
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-3 rounded-md mt-3">
                  <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                    📝 Adding MongoDB to System PATH (Important!)
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    If the installer didn&apos;t automatically add MongoDB to your PATH, you&apos;ll need to do it manually so you can use <code>mongosh</code> and <code>mongod</code> commands from anywhere:
                  </p>
                  <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
                    <li>Open Windows Search and type &quot;Environment Variables&quot;</li>
                    <li>Click &quot;Edit the system environment variables&quot;</li>
                    <li>In the System Properties window, click &quot;Environment Variables&quot; button</li>
                    <li>Under &quot;System variables&quot; (bottom section), find and select <strong>Path</strong></li>
                    <li>Click &quot;Edit&quot;</li>
                    <li>Click &quot;New&quot; and add this path:
                      <CodeBlock
                        language="text"
                        code={`C:\\Program Files\\MongoDB\\Server\\7.0\\bin`}
                      />
                    </li>
                    <li>Click &quot;OK&quot; on all windows to save</li>
                    <li><strong>Restart your terminal/command prompt</strong> for changes to take effect</li>
                  </ol>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>How to test:</strong> Open a new command prompt and type <code>mongosh --version</code>. If you see the version number, it worked!
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">macOS (using Homebrew):</p>
                <CodeBlock
                  language="bash"
                  code={`brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0`}
                />
              </div>

              <div>
                <p className="font-semibold mb-2">Linux (Ubuntu/Debian):</p>
                <CodeBlock
                  language="bash"
                  code={`wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod`}
                />
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Step 3: Verify Installation</p>
            <p className="text-sm text-muted-foreground mb-2">
              Open your terminal or command prompt and run:
            </p>
            <CodeBlock
              language="bash"
              code={`mongosh --version`}
            />
            <p className="text-sm text-muted-foreground mt-2">
              If installed correctly, you&apos;ll see the MongoDB Shell version number.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md">
            <p className="font-semibold text-sm mb-3">Option 2: MongoDB Atlas (Cloud - Recommended for Beginners)</p>
            <p className="text-sm text-muted-foreground mb-3">
              Don&apos;t want to install anything? MongoDB Atlas is a free cloud database that&apos;s perfect for learning. Here&apos;s the complete step-by-step setup:
            </p>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-2">Step 1: Create an Account</p>
                <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Go to <a href="https://cloud.mongodb.com" target="_blank" className="text-primary underline">cloud.mongodb.com</a></li>
                  <li>Click &quot;Sign Up&quot; and create a free account</li>
                  <li>You can sign up with email or use Google/GitHub</li>
                </ol>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">Step 2: Create a Free Cluster</p>
                <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                  <li>After logging in, click &quot;Build a Database&quot;</li>
                  <li>Choose <strong>M0 FREE</strong> tier (512MB storage, perfect for learning)</li>
                  <li>Select a cloud provider (AWS, Google Cloud, or Azure - doesn&apos;t matter for free tier)</li>
                  <li>Pick a region close to you for better performance</li>
                  <li>Give your cluster a name (or keep the default &quot;Cluster0&quot;)</li>
                  <li>Click &quot;Create Cluster&quot;</li>
                </ol>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">Step 3: Security Setup</p>
                <p className="text-sm text-muted-foreground mb-2">
                  After clicking &quot;Create&quot;, you&apos;ll see a <strong>Security Quickstart</strong> screen:
                </p>
                <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
                  <li>
                    <strong>Create Database User:</strong>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Enter a username (example: <code>myuser</code>)</li>
                      <li>Enter a password or click &quot;Autogenerate Secure Password&quot;</li>
                      <li>⚠️ <strong>Save this password!</strong> You&apos;ll need it to connect</li>
                      <li>Click &quot;Create User&quot;</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Set Network Access:</strong>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Choose &quot;My Local Environment&quot;</li>
                      <li>Click &quot;Add My Current IP Address&quot; (adds your IP automatically)</li>
                      <li>For learning, you can also click &quot;Allow Access from Anywhere&quot; (sets IP to <code>0.0.0.0/0</code>)</li>
                      <li>Click &quot;Finish and Close&quot;</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-3 rounded-md">
                <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                  What is &quot;Service Config&quot;?
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  After clicking &quot;Finish and Close&quot;, you might see options for service configuration. Here&apos;s what to do:
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li><strong>Deployment Type:</strong> Keep it as &quot;Cluster&quot; (already selected)</li>
                  <li><strong>Cloud Provider & Region:</strong> Already set in previous step</li>
                  <li><strong>Cluster Tier:</strong> Should be &quot;M0 Sandbox (Free)&quot;</li>
                  <li><strong>Additional Settings:</strong> Leave everything as default</li>
                  <li>Just click &quot;Create Cluster&quot; or &quot;Confirm&quot; if it appears</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  The cluster will take 3-5 minutes to deploy. You&apos;ll see a progress indicator.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">Step 4: Get Your Connection String</p>
                <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Once the cluster is ready, click the &quot;Connect&quot; button</li>
                  <li>Choose &quot;Connect your application&quot;</li>
                  <li>Select &quot;Driver: Node.js&quot; and the latest version</li>
                  <li>Copy the connection string (looks like <code>mongodb+srv://...</code>)</li>
                  <li>Replace <code>&lt;password&gt;</code> with your actual password</li>
                  <li>Replace <code>myFirstDatabase</code> with your database name</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md">
          <p className="text-sm font-semibold text-green-900 dark:text-green-300 mb-2">
            🎉 You&apos;re All Set!
          </p>
          <p className="text-sm text-muted-foreground">
            Your MongoDB Atlas cluster is now ready to use. You can connect to it from your Node.js application using the connection string you copied. For now, let&apos;s learn the basics using the MongoDB Shell!
          </p>
        </div>
      </LessonSection>

      <LessonSection id="mongo-shell" title="MongoDB Shell (mongosh)">
        <p className="text-muted-foreground mb-3">
          The MongoDB Shell is an interactive JavaScript interface for MongoDB. It allows you to query and manipulate data directly.
        </p>

        <div className="bg-muted/50 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Starting the MongoDB Shell:</p>
          <CodeBlock
            language="bash"
            code={`# Start MongoDB Shell
mongosh

# Connect to a specific database
mongosh "mongodb://localhost:27017"

# Connect to MongoDB Atlas
mongosh "mongodb+srv://username:password@cluster.mongodb.net/"`}
          />
        </div>

        <p className="text-sm text-muted-foreground mb-3">
          Once connected, you&apos;ll see a prompt where you can execute MongoDB commands. The shell provides tab completion and command history for easier navigation.
        </p>
      </LessonSection>

      <LessonSection id="database-basics" title="Database and Collection Basics">
        <p className="text-muted-foreground mb-4">
          Now that MongoDB is installed, let&apos;s learn how to create and work with databases and collections. Don&apos;t worry - it&apos;s simpler than it sounds!
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            Important Concept: Lazy Creation
          </p>
          <p className="text-sm text-muted-foreground">
            MongoDB doesn&apos;t actually create databases or collections until you add data to them. So when you &quot;create&quot; a database, you&apos;re really just telling MongoDB &quot;I want to work with this database&quot;. It only gets created when you insert your first document.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Step 1: Creating/Switching to a Database</p>
            <p className="text-muted-foreground text-sm mb-3">
              The <code>use</code> command tells MongoDB which database you want to work with. If it doesn&apos;t exist, MongoDB will remember the name and create it when you add data.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Tell MongoDB you want to work with a database called "schoolDB"
use schoolDB

// MongoDB will create "schoolDB" when you insert your first document

// To see all your databases
show dbs

// To see which database you're currently using
db`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Step 2: Understanding Collections</p>
            <p className="text-muted-foreground text-sm mb-3">
              A collection is like a folder that holds similar documents. For example, in a school database, you might have a &quot;students&quot; collection, a &quot;teachers&quot; collection, and a &quot;courses&quot; collection.
            </p>
            <p className="text-muted-foreground text-sm mb-3">
              The cool thing about MongoDB is that you don&apos;t usually need to create collections explicitly. When you insert your first document into a collection, MongoDB creates it automatically!
            </p>
            <CodeBlock
              language="javascript"
              code={`// This will automatically create a "students" collection if it doesn't exist
db.students.insertOne({ 
  name: "John", 
  age: 20, 
  major: "Computer Science" 
})

// To see all collections in your current database
show collections

// If you want to create an empty collection manually (rarely needed)
db.createCollection("teachers")`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Quick Reference Commands</p>
            <CodeBlock
              language="javascript"
              code={`// Show all databases
show dbs

// Switch to a database
use myDatabase

// Show current database
db

// Show all collections in current database
show collections

// Delete a database (be careful!)
db.dropDatabase()

// Delete a collection
db.myCollection.drop()`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Viewing Data</p>
            <CodeBlock
              language="javascript"
              code={`// View all documents in a collection
db.students.find()

// Pretty-print output for better readability
db.students.find().pretty()`}
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="insert" title="Adding Data (Insert Operations)">
        <p className="text-muted-foreground mb-4">
          Now comes the fun part - adding data to your database! In MongoDB, we call this <strong>&quot;inserting&quot;</strong> documents. Think of it like adding new entries to your collection.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            What Happens When You Insert?
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            When you insert a document, MongoDB does two important things:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>It saves your document to the collection</li>
            <li>It automatically creates a unique <code>_id</code> field if you don&apos;t provide one (this is like a serial number for your document)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Method 1: Inserting One Document at a Time</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>insertOne()</code> when you want to add a single document. This is like adding one student&apos;s information to your school database.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Let's add a student to our students collection
db.students.insertOne({
  name: "Sarah Johnson",
  age: 20,
  major: "Computer Science",
  email: "sarah@university.edu"
})

// MongoDB responds with something like:
// {
//   acknowledged: true,
//   insertedId: ObjectId("507f1f77bcf86cd799439011")
// }
// The insertedId is the unique ID MongoDB created`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Method 2: Inserting Multiple Documents at Once</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>insertMany()</code> when you have multiple documents to add. This is more efficient than calling <code>insertOne()</code> multiple times. Notice how we put the documents in an array <code>[]</code>.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Add multiple students in one go
db.students.insertMany([
  { 
    name: "Mike Chen", 
    age: 21, 
    major: "Mathematics",
    email: "mike@university.edu"
  },
  { 
    name: "Emily Davis", 
    age: 19, 
    major: "Physics",
    email: "emily@university.edu"
  },
  { 
    name: "Raj Patel", 
    age: 22, 
    major: "Engineering",
    email: "raj@university.edu"
  }
])

// MongoDB responds with:
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("..."),
//     '1': ObjectId("..."),
//     '2': ObjectId("...")
//   }
// }
// Each document gets its own unique ID`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="text-sm font-semibold mb-2">Understanding the _id Field</p>
            <p className="text-sm text-muted-foreground mb-3">
              Every document in MongoDB must have a unique <code>_id</code> field. If you don&apos;t provide one, MongoDB automatically creates an ObjectId for you. You can also provide your own:
            </p>
            <CodeBlock
              language="javascript"
              code={`// MongoDB creates the _id automatically
db.students.insertOne({
  name: "Alex",
  age: 23
})
// Result: { _id: ObjectId("..."), name: "Alex", age: 23 }

// Or provide your own _id
db.students.insertOne({
  _id: "STUDENT001",
  name: "Jordan",
  age: 24
})
// Result: { _id: "STUDENT001", name: "Jordan", age: 24 }`}
            />
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md mt-4">
          <p className="font-semibold text-sm text-green-900 dark:text-green-300 mb-1">Try It Yourself!</p>
          <p className="text-sm text-muted-foreground">
            Open your MongoDB shell and try inserting a few documents about your favorite books or movies. Practice using both <code>insertOne()</code> and <code>insertMany()</code>!
          </p>
        </div>
      </LessonSection>

      <LessonSection id="read" title="Finding Data (Read Operations)">
        <p className="text-muted-foreground mb-4">
          Now that you&apos;ve added data, you need to be able to find it again! In MongoDB, we use <strong>&quot;find&quot;</strong> operations to search for and retrieve documents. Think of it like using a search function or filter in any app.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            How Finding Works
          </p>
          <p className="text-sm text-muted-foreground">
            When you search for documents, you provide a <strong>query</strong> (search criteria) in the form of a JavaScript object. MongoDB then returns all documents that match your criteria. If you don&apos;t provide any criteria, it returns everything!
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Finding All Documents</p>
            <p className="text-muted-foreground text-sm mb-3">
              The simplest query is to find everything in a collection. Just use <code>find()</code> with no parameters:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Get ALL students
db.students.find()

// This returns everything! Like selecting all rows in a spreadsheet

// To make it easier to read, add .pretty()
db.students.find().pretty()

// To get just ONE document (any random document)
db.students.findOne()`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Finding Specific Documents</p>
            <p className="text-muted-foreground text-sm mb-3">
              Usually, you don&apos;t want ALL documents - you want specific ones. Pass an object with the fields you want to match:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Find all students studying Computer Science
db.students.find({ major: "Computer Science" })

// Find all 20-year-old students
db.students.find({ age: 20 })

// Find a specific student by name
db.students.findOne({ name: "Sarah Johnson" })

// You can match multiple fields - ALL must match!
db.students.find({ major: "Computer Science", age: 20 })`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Using Comparison Operators</p>
            <p className="text-muted-foreground text-sm mb-3">
              Sometimes you need more than exact matches. MongoDB has special operators that start with <code>$</code> for comparing values:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Find students OLDER than 20
db.students.find({ age: { $gt: 20 } })      // $gt = greater than

// Find students 20 or older
db.students.find({ age: { $gte: 20 } })     // $gte = greater than or equal

// Find students younger than 25
db.students.find({ age: { $lt: 25 } })      // $lt = less than

// Find students between 20 and 22 (inclusive)
db.students.find({ 
  age: { $gte: 20, $lte: 22 }               // $lte = less than or equal
})

// Find students NOT studying Engineering
db.students.find({ major: { $ne: "Engineering" } })  // $ne = not equal

// Find students in specific majors
db.students.find({ 
  major: { $in: ["Computer Science", "Mathematics", "Physics"] }
})  // $in = any of these values`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="text-sm font-semibold mb-2">Quick Reference: Comparison Operators</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><code>$gt</code> — Greater than (&gt;)</p>
              <p><code>$gte</code> — Greater than or equal (≥)</p>
              <p><code>$lt</code> — Less than (&lt;)</p>
              <p><code>$lte</code> — Less than or equal (≤)</p>
              <p><code>$eq</code> — Equal to (=)</p>
              <p><code>$ne</code> — Not equal (≠)</p>
              <p><code>$in</code> — Matches any value in an array</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Combining Conditions with Logical Operators</p>
            <p className="text-muted-foreground text-sm mb-3">
              Sometimes you need more complex searches. MongoDB has logical operators like AND and OR:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Find students who are Computer Science majors AND over 20
db.students.find({
  $and: [
    { major: "Computer Science" },
    { age: { $gt: 20 } }
  ]
})

// Actually, you can write AND conditions more simply:
db.students.find({
  major: "Computer Science",
  age: { $gt: 20 }
})  // Multiple fields = automatic AND!

// Find students who are EITHER in Physics OR Mathematics
db.students.find({
  $or: [
    { major: "Physics" },
    { major: "Mathematics" }
  ]
})  // At least one condition must be true`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Selecting Specific Fields (Projection)</p>
            <p className="text-muted-foreground text-sm mb-3">
              Sometimes you don&apos;t need all the information from a document - just specific fields. This is called <strong>projection</strong>. It&apos;s like choosing which columns to display in a spreadsheet.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Get ONLY the names and emails (hide everything else)
db.students.find(
  {},                              // First parameter: search criteria (empty = all)
  { name: 1, email: 1, _id: 0 }   // Second parameter: which fields to show
)
// 1 = include this field
// 0 = exclude this field
// Result: Only name and email are returned

// Get everything EXCEPT the age
db.students.find({}, { age: 0 })

// Find Computer Science students, show only their names
db.students.find(
  { major: "Computer Science" },
  { name: 1, _id: 0 }
)`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Sorting Results</p>
            <p className="text-muted-foreground text-sm mb-3">
              You can sort your results in ascending or descending order using <code>sort()</code>:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Sort by age (ascending: youngest first)
db.students.find().sort({ age: 1 })       // 1 = ascending

// Sort by age (descending: oldest first)
db.students.find().sort({ age: -1 })      // -1 = descending

// Sort by multiple fields: first by major, then by age
db.students.find().sort({ major: 1, age: -1 })`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Limiting and Skipping Results</p>
            <p className="text-muted-foreground text-sm mb-3">
              For large collections, you might want to limit how many results you get or skip some results (useful for pagination):
            </p>
            <CodeBlock
              language="javascript"
              code={`// Get only the first 5 students
db.students.find().limit(5)

// Skip the first 10 students, then get the next 5
db.students.find().skip(10).limit(5)
// This is how pagination works!

// Count how many documents match
db.students.find({ major: "Computer Science" }).count()

// Chain them all together: find, sort, skip, limit
db.students.find({ age: { $gte: 20 } })
  .sort({ age: 1 })
  .skip(0)
  .limit(10)`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Sorting Results</p>
            <CodeBlock
              language="javascript"
              code={`// Sort by age in ascending order
db.students.find().sort({ age: 1 })

// Sort by age in descending order
db.students.find().sort({ age: -1 })

// Sort by multiple fields
db.students.find().sort({ dept: 1, age: -1 })`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Limiting and Skipping Documents</p>
            <CodeBlock
              language="javascript"
              code={`// Limit to first 5 documents
db.students.find().limit(5)

// Skip first 2 documents
db.students.find().skip(2)

// Pagination: skip 10, show 5
db.students.find().skip(10).limit(5)

// Count total documents
db.students.countDocuments()

// Count with filter
db.students.countDocuments({ dept: "CSE" })`}
            />
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-md mt-4">
          <p className="font-semibold text-sm mb-2">Common Comparison Operators Summary:</p>
          <table className="w-full text-sm text-muted-foreground">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Operator</th>
                <th className="text-left py-2">Description</th>
                <th className="text-left py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="py-2"><code>$eq</code></td><td>Equal to</td><td><code>{`{ age: { $eq: 22 } }`}</code></td></tr>
              <tr className="border-b"><td className="py-2"><code>$ne</code></td><td>Not equal</td><td><code>{`{ dept: { $ne: "EEE" } }`}</code></td></tr>
              <tr className="border-b"><td className="py-2"><code>$gt</code></td><td>Greater than</td><td><code>{`{ age: { $gt: 20 } }`}</code></td></tr>
              <tr className="border-b"><td className="py-2"><code>$lt</code></td><td>Less than</td><td><code>{`{ age: { $lt: 25 } }`}</code></td></tr>
              <tr><td className="py-2"><code>$in</code></td><td>Matches any value in array</td><td><code>{`{ dept: { $in: ["CSE", "ECE"] } }`}</code></td></tr>
            </tbody>
          </table>
        </div>
      </LessonSection>

      <LessonSection id="update" title="Updating Data (Update Operations)">
        <p className="text-muted-foreground mb-4">
          After inserting data, you&apos;ll often need to change it. Maybe a student changes their major, or their age increases, or you need to add new information. In MongoDB, we <strong>&quot;update&quot;</strong> documents to modify existing data.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            Important Concept: Update Operators
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            When updating, you don&apos;t directly set values. Instead, you use <strong>update operators</strong> that start with <code>$</code> to tell MongoDB HOW to update the data. The most common is <code>$set</code>, which sets a field to a new value.
          </p>
          <p className="text-sm text-muted-foreground">
            Think of it like giving instructions: &quot;SET the major to Computer Science&quot; or &quot;INCREASE the age by 1&quot;.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Updating One Document</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>updateOne()</code> to modify the first document that matches your search criteria. It has two parts: <strong>what to find</strong> and <strong>what to change</strong>.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Update Sarah's major to Data Science
db.students.updateOne(
  { name: "Sarah Johnson" },          // WHAT TO FIND: Find Sarah
  { $set: { major: "Data Science" } } // WHAT TO CHANGE: Set new major
)

// Update multiple fields at once
db.students.updateOne(
  { name: "Mike Chen" },
  { 
    $set: { 
      major: "Computer Science",
      email: "mike.new@university.edu"
    } 
  }
)

// If the field doesn't exist, it will be added!
db.students.updateOne(
  { name: "Emily Davis" },
  { $set: { gpa: 3.8 } }  // Adds a new "gpa" field
)`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Updating Multiple Documents</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>updateMany()</code> when you want to update ALL documents that match your criteria. Perfect for bulk updates!
            </p>
            <CodeBlock
              language="javascript"
              code={`// Give all Computer Science students a new field
db.students.updateMany(
  { major: "Computer Science" },
  { $set: { department: "CS Department" } }
)

// Add a status field to all students under 21
db.students.updateMany(
  { age: { $lt: 21 } },
  { $set: { status: "underclassman" } }
)`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">More Update Operators</p>
            <p className="text-muted-foreground text-sm mb-3">
              Besides <code>$set</code>, there are other useful operators for different types of updates:
            </p>
            <CodeBlock
              language="javascript"
              code={`// $inc - Increase (or decrease) a number
// Useful for ages, scores, counters, etc.
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $inc: { age: 1 } }  // Increase age by 1
)

// Decrease by using negative numbers
db.students.updateOne(
  { name: "Mike Chen" },
  { $inc: { age: -1 } }  // Decrease age by 1
)

// $unset - Remove a field completely
db.students.updateOne(
  { name: "Emily Davis" },
  { $unset: { gpa: "" } }  // Remove the gpa field
)

// $rename - Change the name of a field
db.students.updateMany(
  {},  // All documents
  { $rename: { "email": "emailAddress" } }  // Rename field
)`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Working with Arrays</p>
            <p className="text-muted-foreground text-sm mb-3">
              If a field contains an array (like a list of hobbies or courses), you can add or remove items:
            </p>
            <CodeBlock
              language="javascript"
              code={`// First, let's add a hobbies array to a student
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $set: { hobbies: ["reading", "coding"] } }
)

// $push - Add an item to an array
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $push: { hobbies: "gaming" } }  // Now: ["reading", "coding", "gaming"]
)

// $pull - Remove a specific item from an array
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $pull: { hobbies: "gaming" } }  // Back to: ["reading", "coding"]
)

// Add multiple items at once
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $push: { hobbies: { $each: ["music", "sports"] } } }
)`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="text-sm font-semibold mb-2">Quick Reference: Update Operators</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><code>$set</code> — Set a field to a new value (or create it if it doesn&apos;t exist)</p>
              <p><code>$inc</code> — Increase or decrease a number</p>
              <p><code>$unset</code> — Remove a field</p>
              <p><code>$rename</code> — Rename a field</p>
              <p><code>$push</code> — Add an item to an array</p>
              <p><code>$pull</code> — Remove an item from an array</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Upsert Operation</p>
            <CodeBlock
              language="javascript"
              code={`// Upsert: Update if exists, insert if doesn't exist
db.students.updateOne(
  { name: "Vikram" },
  { $set: { age: 24, dept: "ECE" } },
  { upsert: true }
)

// If Vikram doesn't exist, a new document is created`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Replace Operation</p>
            <CodeBlock
              language="javascript"
              code={`// replaceOne() replaces the entire document
db.students.replaceOne(
  { name: "Asha" },
  { name: "Asha", age: 21, dept: "ISE", city: "Bangalore" }
)

// WARNING: This completely overwrites the old document
// Only the fields in the new document will remain`}
            />
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-md mt-4">
          <p className="font-semibold text-sm mb-2">Update Operators Summary:</p>
          <table className="w-full text-sm text-muted-foreground">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Operator</th>
                <th className="text-left py-2">Description</th>
                <th className="text-left py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="py-2"><code>$set</code></td><td>Updates value of a field</td><td><code>{`{ $set: { age: 23 } }`}</code></td></tr>
              <tr className="border-b"><td className="py-2"><code>$inc</code></td><td>Increments value</td><td><code>{`{ $inc: { age: 1 } }`}</code></td></tr>
              <tr className="border-b"><td className="py-2"><code>$rename</code></td><td>Renames a field</td><td><code>{`{ $rename: { dept: "department" } }`}</code></td></tr>
              <tr><td className="py-2"><code>$unset</code></td><td>Removes a field</td><td><code>{`{ $unset: { age: "" } }`}</code></td></tr>
            </tbody>
          </table>
        </div>
      </LessonSection>

      <LessonSection id="delete" title="Deleting Data (Delete Operations)">
        <p className="text-muted-foreground mb-4">
          Sometimes you need to remove data from your database. Maybe a student graduates, or you need to clean up old records. In MongoDB, we <strong>&quot;delete&quot;</strong> documents to remove them permanently.
        </p>

        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-red-900 dark:text-red-300 mb-2">
            ⚠️ Warning: Deletions are Permanent!
          </p>
          <p className="text-sm text-muted-foreground">
            Unlike updating where you can change data back, deleted documents are gone forever. Always be careful with delete operations, especially <code>deleteMany()</code>! It&apos;s a good idea to run a <code>find()</code> query first to see what you&apos;re about to delete.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Deleting One Document</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>deleteOne()</code> to remove a single document. If multiple documents match, only the first one found will be deleted.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Delete a specific student by name
db.students.deleteOne({ name: "Mike Chen" })

// Delete the first student who is under 18
db.students.deleteOne({ age: { $lt: 18 } })

// Tip: First check what you're deleting!
db.students.find({ name: "Mike Chen" })  // Check if this is what you want
db.students.deleteOne({ name: "Mike Chen" })  // Then delete`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Deleting Multiple Documents</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>deleteMany()</code> to remove ALL documents that match your criteria. Be extra careful with this one!
            </p>
            <CodeBlock
              language="javascript"
              code={`// DANGER! This deletes ALL Computer Science students
db.students.deleteMany({ major: "Computer Science" })

// Delete all students under 18
db.students.deleteMany({ age: { $lt: 18 } })

// Pro tip: Check what you're deleting first!
db.students.find({ major: "Computer Science" }).count()  // How many?
db.students.deleteMany({ major: "Computer Science" })    // Then delete

// MongoDB tells you how many were deleted:
// { acknowledged: true, deletedCount: 5 }`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Deleting Everything from a Collection</p>
            <p className="text-muted-foreground text-sm mb-3">
              To delete ALL documents but keep the collection:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Delete every single document (VERY DANGEROUS!)
db.students.deleteMany({})  // Empty object = match everything

// Or just drop the entire collection:
db.students.drop()  // Removes collection completely
// Returns: true`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Deleting an Entire Database</p>
            <p className="text-muted-foreground text-sm mb-3">
              To remove an entire database with all its collections:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Make absolutely sure you're in the right database!
db  // Check which database you're in

// Then drop it
db.dropDatabase()

// Confirm it's gone
show dbs  // Database won't appear anymore`}
            />
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md mt-4">
          <p className="font-semibold text-sm text-green-900 dark:text-green-300 mb-1">💡 Pro Tip: Always Test First!</p>
          <p className="text-sm text-muted-foreground">
            Run a <code>find()</code> query with the same criteria before deleting. This lets you see exactly what will be deleted. Think of it like looking in the trash can before emptying it!
          </p>
        </div>
      </LessonSection>

      <LessonSection id="tools" title="Essential Development Tools">
        <p className="text-muted-foreground mb-3">
          Several tools are available to enhance your MongoDB development workflow:
        </p>

        <div className="space-y-3">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-1">MongoDB Compass (Visual Interface)</p>
            <p className="text-sm text-muted-foreground mb-2">
              A graphical user interface for visualizing data, executing queries, and managing databases without writing code.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>Download from: <a href="https://www.mongodb.com/try/download/compass" target="_blank" className="text-primary underline">mongodb.com/compass</a></li>
              <li>Connect using your Atlas connection string</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-1">Node.js Database Drivers</p>
            <p className="text-sm text-muted-foreground">
              Install these packages to enable programmatic access from your Node.js applications:
            </p>
          </div>
        </div>

        <CodeBlock
          language="bash"
          code={`# Option 1: Official MongoDB driver (lightweight, minimal abstraction)
npm install mongodb

# Option 2: Mongoose (ODM with schema validation and additional features)
# Recommended for applications requiring structured data models
npm install mongoose`}
        />
      </LessonSection>

      <LessonSection id="connect" title="Connecting from Node.js">
        <p className="text-muted-foreground mb-4">
          While the MongoDB shell is useful for learning and testing, real applications interact with MongoDB through code. The MongoDB Node.js driver provides a programmatic interface for database operations.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Installation
          </p>
          <CodeBlock language="bash" code={`npm install mongodb`} />
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Basic Connection Example:</p>
            <CodeBlock
              language="javascript"
              code={`const { MongoClient } = require('mongodb');

// Local MongoDB connection
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('mystore');
    const products = db.collection('products');

    // Insert a product
    await products.insertOne({
      name: 'Laptop',
      price: 999,
      category: 'Electronics'
    });

    // Find all products
    const allProducts = await products.find({}).toArray();
    console.log(allProducts);

  } finally {
    await client.close();
  }
}

run();`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Using Environment Variables:</p>
            <p className="text-sm text-muted-foreground mb-2">
              Store your connection string in a <code>.env</code> file:
            </p>
            <CodeBlock
              language="bash"
              code={`# .env file
MONGODB_URI=mongodb://localhost:27017/mystore`}
            />

            <CodeBlock
              language="javascript"
              code={`require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI);

async function run() {
  try {
    await client.connect();
    const db = client.db();  // Uses database from URI
    // ... perform operations
  } finally {
    await client.close();
  }
}

run();`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">CRUD Operations in Node.js:</p>
            <CodeBlock
              language="javascript"
              code={`const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function crudExamples() {
  await client.connect();
  const db = client.db('mystore');
  const products = db.collection('products');

  // Create
  await products.insertOne({ name: 'Phone', price: 699 });

  // Read
  const phone = await products.findOne({ name: 'Phone' });
  const expensive = await products.find({ price: { $gt: 500 } }).toArray();

  // Update
  await products.updateOne(
    { name: 'Phone' },
    { $set: { price: 649 } }
  );

  // Delete
  await products.deleteOne({ name: 'Phone' });

  await client.close();
}

crudExamples();`}
            />
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-md mt-4">
          <p className="font-semibold text-sm mb-1">Security Best Practice:</p>
          <p className="text-sm text-muted-foreground">
            Never hardcode connection strings in your code. Always use environment variables and add <code>.env</code> to your <code>.gitignore</code> file.
          </p>
        </div>
      </LessonSection>



      <LessonSection id="mongoose" title="Using Mongoose ODM">
        <p className="text-muted-foreground mb-4">
          Mongoose is an Object Data Modeling (ODM) library that adds schema validation, type casting, and business logic to MongoDB. It's particularly useful for larger applications that need structured data models.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Installation
          </p>
          <CodeBlock language="bash" code={`npm install mongoose`} />
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Connecting with Mongoose:</p>
            <CodeBlock
              language="javascript"
              code={`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mystore')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Defining a Schema:</p>
            <p className="text-sm text-muted-foreground mb-2">
              Schemas define the structure and validation rules for your documents.
            </p>
            <CodeBlock
              language="javascript"
              code={`const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: String,
  inStock: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">CRUD with Mongoose:</p>
            <CodeBlock
              language="javascript"
              code={`const Product = require('./models/Product');

async function run() {
  // Create
  const laptop = await Product.create({
    name: 'Laptop',
    price: 999,
    category: 'Electronics'
  });

  // Read
  const products = await Product.find({ category: 'Electronics' });
  const oneProduct = await Product.findOne({ name: 'Laptop' });

  // Update
  await Product.updateOne(
    { name: 'Laptop' },
    { $set: { price: 899 } }
  );

  // Delete
  await Product.deleteOne({ name: 'Laptop' });
}

run();`}
            />
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-md mt-4">
          <p className="font-semibold mb-2">Mongoose Benefits:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>Schema Validation</strong> — Ensures data consistency</li>
            <li><strong>Type Casting</strong> — Automatic data type conversion</li>
            <li><strong>Middleware</strong> — Pre/post hooks for operations</li>
            <li><strong>Query Building</strong> — Chainable query methods</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="indexes" title="Database Indexing">
        <p className="text-muted-foreground mb-3">
          Indexes are data structures that improve query performance by allowing MongoDB to locate documents more efficiently. Without indexes, MongoDB must scan every document in a collection to find matching results.
        </p>

        <div className="bg-muted/50 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Index Best Practices:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Index fields that are frequently queried (e.g., email, username)</li>
            <li>Index fields used in sorting operations (e.g., createdAt, priority)</li>
            <li>Avoid excessive indexing as it impacts write performance and storage</li>
            <li>Consider compound indexes for queries using multiple fields</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Creating Indexes in Mongoose</p>
            <CodeBlock
              language="javascript"
              code={`const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,    // Automatically creates a unique index
    index: true
  },
  username: {
    type: String,
    index: true
  },
  createdAt: {
    type: Date,
    index: true
  }
});

// Compound index for multi-field queries
userSchema.index({ email: 1, username: 1 });

// Text index for full-text search
userSchema.index({ bio: 'text' });`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Creating Indexes with Native Driver</p>
            <CodeBlock
              language="javascript"
              code={`const collection = db.collection('users');

// Single field index
await collection.createIndex({ email: 1 }, { unique: true });

// Compound index
await collection.createIndex({ lastName: 1, firstName: 1 });

// Index with options
await collection.createIndex(
  { createdAt: -1 },
  { expireAfterSeconds: 3600 }  // TTL index
);`}
            />
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-3">
          <strong>Note:</strong> Index direction is specified using <code>1</code> (ascending) or <code>-1</code> (descending). For single-field indexes, direction matters only when combined with sorting.
        </p>
      </LessonSection>

      <LessonSection id="aggregation" title="Aggregation Framework">
        <p className="text-muted-foreground mb-3">
          The MongoDB aggregation framework provides advanced data processing and analysis capabilities. It allows you to transform, group, and compute values from your documents using a pipeline-based approach.
        </p>

        <div className="bg-muted/50 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Common Use Cases:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Grouping and counting documents by specific criteria</li>
            <li>Calculating statistical aggregates (averages, sums, min/max)</li>
            <li>Filtering and reshaping data for reports</li>
            <li>Performing complex multi-stage data transformations</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Basic Aggregation Example</p>
            <CodeBlock
              language="javascript"
              code={`// Count users by age
const ageDistribution = await User.aggregate([
  {
    $group: {
      _id: '$age',
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

// Calculate average age
const statistics = await User.aggregate([
  {
    $group: {
      _id: null,
      averageAge: { $avg: '$age' },
      totalUsers: { $sum: 1 },
      minAge: { $min: '$age' },
      maxAge: { $max: '$age' }
    }
  }
]);`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Advanced Pipeline Example</p>
            <CodeBlock
              language="javascript"
              code={`// Multi-stage aggregation pipeline
const result = await User.aggregate([
  // Stage 1: Filter documents
  { $match: { age: { $gte: 18 } } },
  
  // Stage 2: Group and calculate
  {
    $group: {
      _id: {
        $dateToString: {
          format: '%Y-%m-%d',
          date: '$createdAt'
        }
      },
      userCount: { $sum: 1 },
      avgAge: { $avg: '$age' }
    }
  },
  
  // Stage 3: Sort results
  { $sort: { _id: -1 } },
  
  // Stage 4: Limit results
  { $limit: 10 },
  
  // Stage 5: Reshape output
  {
    $project: {
      date: '$_id',
      users: '$userCount',
      averageAge: { $round: ['$avgAge', 2] },
      _id: 0
    }
  }
]);`}
            />
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-md mt-4">
          <p className="font-semibold text-sm mb-1">Common Aggregation Stages:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><code>$match</code> — Filter documents (equivalent to find)</li>
            <li><code>$group</code> — Group documents and perform calculations</li>
            <li><code>$sort</code> — Sort documents</li>
            <li><code>$limit</code> — Limit the number of results</li>
            <li><code>$project</code> — Reshape documents and select fields</li>
            <li><code>$lookup</code> — Perform left outer joins</li>
            <li><code>$unwind</code> — Deconstruct array fields</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="schema-design" title="Schema Design Patterns">
        <p className="text-muted-foreground mb-3">
          While MongoDB is schema-flexible, proper data modeling is crucial for application performance and maintainability. The two primary approaches are embedding and referencing.
        </p>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Embedding Pattern</p>
            <p className="text-sm text-muted-foreground mb-2">
              Store related data within a single document. This approach optimizes read operations when data is frequently accessed together.
            </p>
            <CodeBlock
              language="javascript"
              code={`// User document with embedded address
{
  _id: ObjectId("123"),
  name: "Alice",
  email: "alice@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
    country: "USA"
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
}

// Use embedding when:
// - Related data is accessed together
// - Data has a one-to-one or one-to-few relationship
// - Embedded documents are bounded in size`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">Referencing Pattern</p>
            <p className="text-sm text-muted-foreground mb-2">
              Store related data in separate collections and establish relationships using document IDs. This approach is suitable for large or frequently updated data.
            </p>
            <CodeBlock
              language="javascript"
              code={`// User collection
{
  _id: ObjectId("123"),
  name: "Alice",
  email: "alice@example.com"
}

// Posts collection
{
  _id: ObjectId("456"),
  title: "Introduction to MongoDB",
  content: "MongoDB is a NoSQL database...",
  authorId: ObjectId("123"),
  createdAt: ISODate("2024-01-15T10:00:00Z")
}

// Use referencing when:
// - Related data is accessed independently
// - Data has a one-to-many or many-to-many relationship
// - Related data is large or grows unbounded
// - Related data is shared across multiple documents`}
            />
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-md mt-4">
          <p className="font-semibold text-sm mb-1">Design Guidelines:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>Embed</strong> for data with high read-to-write ratio and limited size</li>
            <li><strong>Reference</strong> for frequently updated data or data shared across multiple documents</li>
            <li>Consider your application&apos;s query patterns when designing schemas</li>
            <li>MongoDB documents are limited to 16MB in size</li>
            <li>Avoid deeply nested structures that exceed 100 levels</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="next-steps" title="Further Learning">
        <div className="space-y-3">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-1">Recommended Practice Projects:</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Build a task management application with user authentication</li>
              <li>Develop a blog platform with posts, comments, and categories</li>
              <li>Create an e-commerce catalog with products, orders, and inventory</li>
              <li>Implement a social media feed with users, posts, and interactions</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-1">Advanced Topics to Explore:</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Mongoose middleware and hooks for complex business logic</li>
              <li>Multi-document ACID transactions</li>
              <li>Advanced aggregation pipeline operations</li>
              <li>Replica sets and sharding for horizontal scaling</li>
              <li>Change streams for real-time data synchronization</li>
              <li>Performance optimization and query profiling</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-1">Additional Resources:</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li><a href="https://mongoosejs.com/docs/" target="_blank" className="text-primary underline">Mongoose Documentation</a></li>
              <li><a href="https://www.mongodb.com/docs/" target="_blank" className="text-primary underline">MongoDB Official Documentation</a></li>
              <li><a href="https://university.mongodb.com/" target="_blank" className="text-primary underline">MongoDB University (Free Courses)</a></li>
              <li><a href="https://www.mongodb.com/developer/" target="_blank" className="text-primary underline">MongoDB Developer Hub</a></li>
            </ul>
          </div>
        </div>
      </LessonSection>
    </LessonLayout>
  )
}