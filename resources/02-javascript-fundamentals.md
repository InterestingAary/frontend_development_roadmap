# Stage 02: JavaScript Fundamentals — The Language Core

> **Duration:** 4 weeks (24 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Beginner  
> **Prerequisites:** [Stage 01: HTML & CSS](01-html-css.md) completed; comfortable with basic file structure and terminal commands.

---

## 1. What This Stage Teaches

This stage teaches you the core programming foundations of the JavaScript language in an isolated environment (Node.js runtime or browser console) without the complexity of the DOM or frontend frameworks:
- JavaScript value types: 7 primitives (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) and reference types (`object`, `array`, `function`).
- Type coercion rules, truthy vs. falsy values, and strict equality (`===`) vs. loose equality (`==`).
- Variables (`let`, `const`), lexical scoping (block, function, global), and hoisting mechanisms.
- Control flow: conditional branching (`if`/`else`, `switch`, ternary), looping constructs (`for`, `while`, `for...of`, `for...in`), and short-circuit evaluation.
- Functions: declarations, expressions, arrow functions, parameter defaults, return statements, the call stack, and closures.
- Objects: property descriptors, bracket vs. dot notation, reference mechanics, memory allocation, object methods, and execution context (`this`).
- Arrays: fundamental operations, mutation vs. non-mutation, indexing, and higher-order iteration methods (`forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`).
- Error handling with `try`, `catch`, `finally`, `throw`, and custom `Error` classes.
- Algorithmic thinking: linear search, binary search, basic sorting, recursion fundamentals, and string/math utilities.

---

## 2. Why This Stage Matters

JavaScript is the **only true programming language that runs natively in web browsers**. Frameworks such as React, Next.js, and Vue do not replace JavaScript; they are written entirely in JavaScript.

Learners who rush into React without solid JavaScript fundamentals struggle constantly: they cannot understand why state updates require object copying, why component renders re-execute closures, or how array methods map data into UI components. Mastering JavaScript as an independent programming language gives you the computational reasoning required to build any software application.

---

## 3. Prerequisites

- Completion of [Stage 01: HTML & CSS](01-html-css.md).
- Understanding of how to open a terminal and execute simple commands.
- Basic logical reasoning (if-then thinking).

---

## 4. What to Install or Prepare

1. **Node.js LTS:** Installed from [nodejs.org](https://nodejs.org/) to run JavaScript directly from your terminal. Verify with:
   ```bash
   node -v
   ```
2. **VS Code Quokka.js Extension (Optional but Recommended):** `WallabyJs.quokka-vscode` allows you to see JavaScript variable values live inline in your editor as you type.
3. **Dedicated Practice Directory:**
   ```bash
   mkdir stage-02-js && cd stage-02-js
   ```

---

## 5. Learning Objectives

By the end of this 4-week stage, you will:
- [ ] Predict JavaScript type coercion behavior and reliably use strict equality (`===`).
- [ ] Write functions using declarations, expressions, and arrow syntax, knowing when to choose each.
- [ ] Explain lexical scope, the scope chain, and closures with accurate mental models.
- [ ] Manipulate objects and arrays using immutable patterns (preventing unwanted mutations).
- [ ] Implement data transformations using `.map()`, `.filter()`, and `.reduce()`.
- [ ] Handle runtime errors gracefully using `try...catch` blocks.
- [ ] Implement foundational computer science algorithms (searching, sorting, and recursion).
- [ ] Build and execute a multi-feature Command-Line Interface (CLI) utility in Node.js.

---

## 6. Recommended Learning Order

- **Week 1 (Days 1–6):** Values, data types, type conversions, variables, operators, conditionals, loops, and function basics.
- **Week 2 (Days 7–12):** Lexical scope, closures, objects, reference types, the `this` keyword, prototypes, and error handling.
- **Week 3 (Days 13–18):** Arrays in depth, mutation vs. pure functions, higher-order iteration methods (`map`, `filter`, `reduce`), `Map`, and `Set`.
- **Week 4 (Days 19–24):** Problem-solving algorithms (search, sort, recursion), strings, regex, Math, Date, and the Stage 02 CLI project.

---

## 7. Primary Learning Resources

- **Primary Course:** [JavaScript.info — The JavaScript Language (Part 1)](https://javascript.info/)
  - Complete the following chapters in order:
    1. *JavaScript Fundamentals* (Sections 2.1 to 2.18)
    2. *Code Quality & Debugging* (Sections 3.1 to 3.6)
    3. *Objects: The Basics* (Sections 4.1 to 4.8)
    4. *Data Types: Arrays, Strings, Numbers, Object Methods* (Sections 5.1 to 5.12)
    5. *Advanced Working with Functions: Rest, Closures, Function Object* (Sections 6.1 to 6.3)
    6. *Error Handling* (Sections 10.1 to 10.2)
  - **Rule:** Complete every "Task" exercise at the bottom of each chapter before checking the solution.

---

## 8. Alternative Resources

- **Interactive Curriculum:** [freeCodeCamp — JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/)
  - In-browser interactive coding challenges covering variables, functions, loops, and object-oriented programming.
- **Video Resource:** [freeCodeCamp JavaScript Full Course for Beginners](https://www.youtube.com/watch?v=jS4aFq5-91M) (for learners who prefer visual walk-throughs).

---

## 9. Official Documentation

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — The definitive reference for grammar, control flow, functions, and expressions.
- [MDN Standard Built-in Objects Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) — Complete API documentation for `Array`, `Object`, `String`, `Math`, and `Promise`.

---

## 10. Topic-by-Topic Study Sequence

### Week 1: Types, Variables, Control Flow & Functions

#### Day 1 — Values, Data Types & Type Coercion
- **Study:** The 8 data types; primitive values vs. objects; `typeof` operator; implicit type coercion in comparisons and arithmetic (`"5" - 2` vs `"5" + 2`); truthy and falsy values (`false`, `0`, `""`, `null`, `undefined`, `NaN`).
- **Practice:** Write a script testing type conversions with `Number()`, `String()`, and `Boolean()`.

#### Day 2 — Variables, Lexical Scoping & Operators
- **Study:** `let` vs `const` vs legacy `var`; block scope vs function scope; temporal dead zone (TDZ); arithmetic operators, comparison operators, logical operators (`&&`, `||`, `!`), nullish coalescing (`??`).
- **Practice:** Create a script demonstrating short-circuit evaluation for assigning default values.

#### Day 3 — Conditional Branching & Loops
- **Study:** `if`, `else if`, `else`; ternary operator (`? :`); `switch...case`; `while` loops, `do...while` loops, `for` loops; `break` and `continue`.
- **Practice:** Implement the classic FizzBuzz challenge (numbers 1 to 100) using a `for` loop and clean conditional branching.

#### Day 4 — Function Declarations, Expressions & Return Values
- **Study:** Function declarations vs. function expressions; arrow functions (`() => {}`); parameters vs. arguments; default parameters; return values and early returns.
- **Practice:** Write a library of conversion functions (Celsius to Fahrenheit, kilograms to pounds, miles to kilometers) with input validation.

#### Day 5 — Execution Context, Call Stack & Closures Intro
- **Study:** How JavaScript executes code: Global Execution Context, function execution contexts, the Call Stack; lexical environment; basic closure concept (a function retaining access to its outer scope).
- **Practice:** Write a `createCounter()` function that returns an increment function maintaining a private internal count variable.

#### Day 6 — Week 1 Review & Logic Challenges
- **Task:** Solve 5 beginner algorithm problems on Codewars or LeetCode (e.g., Reverse a String, Find Maximum Number, Palindrome Checker). Add 15 Anki cards.

---

### Week 2: Objects, Scope, `this` & Error Handling

#### Day 7 — Objects: Creation, Properties & Methods
- **Study:** Object literals; property access (dot notation vs bracket notation `obj[key]`); dynamic property keys; `in` operator; `for...in` loop; object methods.
- **Practice:** Build a `userProfile` object with nested data and methods to update email and calculate user age.

#### Day 8 — Primitive Values vs. Object References
- **Study:** Pass-by-value (primitives) vs. pass-by-reference (objects/arrays); memory addresses; shallow copy (`Object.assign()`, spread `{...obj}`) vs. deep copy (`structuredClone()`).
- **Practice:** Write code demonstrating that mutating a copied object reference alters the original, then fix it using `structuredClone()`.

#### Day 9 — Execution Context & The `this` Keyword
- **Study:** How `this` is determined at call-time; `this` in object methods; `this` in regular functions vs. arrow functions (lexical `this`); explicit binding with `call()`, `apply()`, and `bind()`.
- **Practice:** Create an object with a timer method and demonstrate how an arrow function preserves the lexical `this` context.

#### Day 10 — Prototypes, Prototypal Inheritance & Classes
- **Study:** The prototype chain; `Object.prototype`; `__proto__` vs `prototype`; ES6 `class` syntax, `constructor`, instance methods, and `extends` inheritance.
- **Practice:** Build a `BankAccount` class and a `SavingsAccount` subclass with deposit, withdraw, and interest calculation methods.

#### Day 11 — Error Handling & Defensive Programming
- **Study:** Runtime errors; `try...catch...finally`; throwing errors with `throw new Error()`; standard error types (`TypeError`, `ReferenceError`, `SyntaxError`); custom error classes.
- **Practice:** Write a robust JSON parser function wrapped in `try...catch` that logs custom diagnostic messages without crashing the application.

#### Day 12 — Week 2 Review & Object Drills
- **Task:** Build an in-memory inventory management module using classes, encapsulation, and error handling. Review all Anki cards.

---

### Week 3: Arrays, Higher-Order Methods & Immutability

#### Day 13 — Arrays: Fundamentals & Mutation Methods
- **Study:** Array creation, indexing, `length` property; mutator methods (`push`, `pop`, `shift`, `unshift`, `splice`, `reverse`); non-mutating methods (`slice`, `concat`).
- **Practice:** Write a script that manages a queue of support tickets using push and shift operations.

#### Day 14 — Higher-Order Iteration: `forEach`, `map`, `filter`, `find`
- **Study:** First-class functions; callback functions; `Array.prototype.forEach()` for side effects; `Array.prototype.map()` for transformation; `Array.prototype.filter()` for selection; `find()` and `findIndex()`.
- **Practice:** Given an array of student objects `{ name, score }`, use `filter` to get passing students and `map` to format their names in uppercase.

#### Day 15 — The Power of `reduce`
- **Study:** Anatomy of `reduce(accumulator, current, index, array)`; initial value importance; grouping items, calculating sums, flattening nested arrays, and building lookup tables.
- **Practice:** Write a single `reduce` call that takes a list of transactions `{ category, amount }` and returns an object totaling expenses per category.

#### Day 16 — Immutability Patterns in JavaScript
- **Study:** Why immutability matters in modern programming and React; adding items immutably (`[...arr, newItem]`); removing items immutably (`arr.filter(...)`); updating items immutably (`arr.map(...)`).
- **Practice:** Write a suite of pure helper functions to add, update, and delete items from a todo list array without modifying the original array.

#### Day 17 — Keyed Collections: `Map` and `Set`
- **Study:** Limitations of plain objects as dictionaries; `Map` methods (`set`, `get`, `has`, `delete`, `size`); `Set` for unique values; converting between Sets and Arrays.
- **Practice:** Remove duplicates from an array in one line using `[...new Set(array)]`. Build a word frequency counter using `Map`.

#### Day 18 — Week 3 Review & Array Method Chaining
- **Task:** Chain `.filter()`, `.map()`, and `.reduce()` together to parse, filter, and summarize an array of simulated e-commerce orders.

---

### Week 4: Algorithms, Built-in APIs & Milestone CLI Project

#### Day 19 — Foundational Algorithms: Search & Sort
- **Study:** Linear search vs. binary search (prerequisites and Big-O intuition); how `Array.prototype.sort()` works (ASCII sorting trap vs numeric comparator `(a, b) => a - b`).
- **Practice:** Implement binary search from scratch on a sorted array of numbers.

#### Day 20 — Recursion Fundamentals
- **Study:** Base case vs. recursive step; the call stack during recursion; stack overflow risks; practical recursion (factorials, traversing nested category trees).
- **Practice:** Write a recursive function that counts down to zero, and a recursive function that sums all numbers in a nested array `[1, [2, [3, 4]], 5]`.

#### Day 21 — String Manipulation & Regular Expressions
- **Study:** String methods (`split`, `join`, `slice`, `includes`, `replace`, `trim`); Introduction to Regular Expressions (`test`, `match`, character classes, quantifiers, flags).
- **Practice:** Build a text sanitization function that validates email formats and censors forbidden words.

#### Day 22 — Working with Date, Math & JSON
- **Study:** `Math` methods (`floor`, `ceil`, `round`, `random`); `Date` creation, timestamps (`Date.now()`), formatting; `JSON.stringify()` and `JSON.parse()`.
- **Practice:** Build a utility that generates random UUID-like strings and calculates the exact number of days between two dates.

#### Day 23 — Stage 02 Milestone Project: CLI Task Manager (Architecture)
- **Task:** Set up a Node.js project using `readline` or process arguments (`process.argv`). Design data models for a Command-Line Task Manager (Add, List, Complete, Delete).

#### Day 24 — Stage 02 Milestone Project: CLI Task Manager (Implementation & Polish)
- **Task:** Complete CLI Task Manager. Implement persistent file storage using Node's `fs` module (saving tasks to `tasks.json`), input validation, and clear terminal output formatting.

---

## 11. Suggested Time Limits

- **Daily Study Time:** 90 minutes.
  - 30 minutes: Reading JavaScript.info chapter.
  - 45 minutes: Solving tasks and writing code in Node.js.
  - 15 minutes: Reviewing Anki cards and updating progress notes.
- **Total Stage Commitment:** 24 study days × 90 minutes = 36 hours of focused programming practice.

---

## 12. Practice Tasks

1. **Equality Matrix:** Write a function that compares all combinations of `0`, `""`, `false`, `null`, `undefined`, and `NaN` with both `==` and `===` and outputs an explanation of each result.
2. **Pure Function Refactor:** Take a function that modifies an external global array and refactor it into a pure function that returns a new array.
3. **Custom Array Map:** Implement your own version of `myMap(array, callback)` from scratch using a `for` loop without using `Array.prototype.map`.
4. **Deep Clone Function:** Implement a recursive function `deepClone(obj)` that creates a true deep copy of nested objects and arrays.

---

## 13. Mini-Projects

1. **Console Expense Tracker:** A Node.js terminal app that records income and expenses, calculates net balance, and categorizes spending.
2. **Flashcard Quiz Game:** An interactive terminal quiz that presents questions, tracks scores, and displays final percentages.
3. **Stage 02 Milestone Project: Node.js CLI Task Manager**
   - Interactive command-line interface with arguments (`node app.js add "Buy groceries"`).
   - CRUD operations: Add, List, Mark Complete, Filter by status, Delete.
   - Saves and reads data from a local `tasks.json` file.
   - Comprehensive error handling for invalid commands and corrupted JSON.

---

## 14. Common Mistakes

| Common Mistake | Why It Causes Bugs | How to Fix It |
|----------------|--------------------|---------------|
| **Using Loose Equality (`==`)** | Coerces types unexpectedly (e.g., `"" == 0` is `true`, `false == []` is `true`). | Always use strict equality (`===`) and strict inequality (`!==`). |
| **Mutating Original Arrays** | Calling `.sort()`, `.splice()`, or `.reverse()` mutates the source array in place. | Copy before mutating: `[...arr].sort()` or use modern methods like `.toSorted()`. |
| **Default Numeric Sort Bug** | `[10, 2, 5].sort()` evaluates to `[10, 2, 5]` because it sorts by UTF-16 string code units. | Always provide a comparator: `arr.sort((a, b) => a - b)`. |
| **Accidental Global Variables** | Forgetting `const` or `let` assigns variables to the global scope (`window` or `global`). | Always declare variables with `const` (default) or `let` (if reassigned). |
| **Misunderstanding `typeof null`** | `typeof null` returns `"object"` due to a historical JavaScript bug. | Check for null explicitly: `val === null`. |

---

## 15. Debugging Guidance

When your JavaScript code produces incorrect outputs or crashes:
1. **Read the Call Stack:** Look at the top line of the error message for the error type (e.g., `TypeError: Cannot read properties of undefined (reading 'length')`), then look at the filename and line number.
2. **Strategic `console.log()`:** Log the variable value and its type:
   ```javascript
   console.log('Value:', user, 'Type:', typeof user);
   ```
3. **Use the Node.js / Browser Debugger:** Add the `debugger;` statement in your code and run with:
   ```bash
   node --inspect-brk app.js
   ```
   Open Chrome DevTools (`chrome://inspect`) to step through execution line-by-line and inspect scope variables.
4. **Isolate with Minimal Reproducible Examples:** If an algorithm fails, test it with a 2-element array before testing with 100 elements.

---

## 16. AI Usage Guidance

- **Effective Tutor Prompts:**
  - *"Can you step through this recursive function line by line and show the call stack at each step?"*
  - *"Why does this JavaScript code output NaN? Explain the type coercion happening here."*
  - *"Give me 3 edge-case test inputs that might break my palindrome function."*
- **What to Avoid:**
  - Do not ask AI to solve coding interview challenges or write your CLI project. The entire goal of Stage 02 is to build logic circuitry in your own brain.

---

## 17. Completion Checklist

Before moving to Stage 03, verify:
- [ ] Completed all 24 daily lessons and coding exercises.
- [ ] Maintained a 100+ card Anki deck covering JS data types, scope, closures, and methods.
- [ ] Successfully built, tested, and pushed the Node.js CLI Task Manager project.
- [ ] Can comfortably explain closures and the `this` keyword without looking at notes.
- [ ] Can transform arrays using `.map()`, `.filter()`, and `.reduce()` fluently.
- [ ] Updated `progress/README.md` for Stage 02.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for [Stage 03: Modern JavaScript](03-modern-javascript.md) when:
1. You can write custom functions that accept callbacks and return functions (closures).
2. You instinctively avoid mutating original arrays and know how to perform immutable operations.
3. You can debug runtime errors by reading stack traces rather than guessing blindly.

---

## 19. Suggested Next Step

Proceed to **[Stage 03: Modern JavaScript — ES6+ and Beyond](03-modern-javascript.md)** to learn ES Modules, destructuring, and modern syntactic sugar that form the bedrock of modern React!

---

## 20. Further References

- [You Don't Know JS Yet (Book Series by Kyle Simpson)](https://github.com/getify/You-Dont-Know-JS) — Deep dive into scopes, closures, and object prototypes.
- [Eloquent JavaScript by Marijn Haverbeke](https://eloquentjavascript.net/) — Excellent free online book on programming fundamentals.
- [JavaScript Visualized Series (Lydia Hallie)](https://dev.to/lydiahallie) — Animated visual guides to JS execution context, scope, and event loop.