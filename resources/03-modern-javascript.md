# Stage 03: Modern JavaScript — ES6+ and Beyond

> **Duration:** 3 weeks (18 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Beginner-Intermediate  
> **Prerequisites:** [Stage 02: JavaScript Fundamentals](02-javascript-fundamentals.md) completed; comfortable with variables, loops, objects, arrays, and functions.

---

## 1. What This Stage Teaches

This stage elevates your JavaScript from legacy patterns to modern, idiomatic ES6+ engineering practices:
- **ES Modules (ESM):** Modular architecture using `import`, `export`, named vs. default exports, and dynamic imports.
- **Destructuring Assignment:** Object and array destructuring, default values, property renaming, and nested parameter extraction.
- **Rest and Spread Operators:** Object cloning, array concatenation, rest parameters in functions, and argument spreading.
- **Enhanced Object Literals:** Property value shorthands, computed property names (`[expression]`), and method definitions.
- **Modern Array & Object Utilities:** `Array.prototype.flatMap()`, `Object.entries()`, `Object.fromEntries()`, `Object.hasOwn()`, and array grouping.
- **Symbols, Iterables & Generators:** Well-known Symbols (`Symbol.iterator`), the iterable protocol, and generator functions (`function*` / `yield`).
- **Modern Syntax Ergonomics:** Optional chaining (`?.`), nullish coalescing (`??`), logical assignment operators (`??=`, `&&=`, `||=`).
- **Modern Development Tooling:** Introduction to Vite as an ultra-fast modern bundler and dev server.

---

## 2. Why This Stage Matters

Modern frontend development (especially React and Next.js) is built entirely on ES6+ paradigms. In React codebases, virtually every file utilizes:
- `import` and `export` to organize components.
- Object destructuring to extract props: `function Card({ title, isActive = false })`.
- Spread syntax to update state immutably: `setUser(prev => ({ ...prev, name: 'Alice' }))`.
- Array transformations to render lists: `items.map(item => ...)`.

Without mastering modern ES6+ syntax, reading modern React code looks like alien hieroglyphics. Stage 03 turns these idioms into second nature so that when you arrive at React, the syntax feels natural and intuitive.

---

## 3. Prerequisites

- Solid understanding of JavaScript functions, arrays, objects, and lexical scope from [Stage 02](02-javascript-fundamentals.md).
- Node.js LTS installed.

---

## 4. What to Install or Prepare

1. **Verify Node.js Supports ES Modules:** Ensure your Node version is 18+ (`node -v`).
2. **Initialize Modern Project Folder:**
   ```bash
   mkdir stage-03-modern-js && cd stage-03-modern-js
   npm init -y
   ```
   Add `"type": "module"` to your `package.json` so Node natively treats `.js` files as ES Modules.
3. **Install Vite for Bundling Experiments:**
   ```bash
   npm install -D vite
   ```

---

## 5. Learning Objectives

By the end of this 3-week stage, you will:
- [ ] Structure multi-file JavaScript applications using clean ES module imports and exports.
- [ ] Destructure complex, deeply nested JSON payloads with default values and aliases in one readable line.
- [ ] Construct pure immutable update functions using array and object spread syntax.
- [ ] Use modern optional chaining (`?.`) and nullish coalescing (`??`) to eliminate `TypeError: Cannot read properties of undefined`.
- [ ] Understand custom iterables, Symbols, and generator functions.
- [ ] Set up and run a local Vite development environment.
- [ ] Refactor your Stage 02 CLI project into a modular, production-structured ES6+ codebase.

---

## 6. Recommended Learning Order

- **Week 1 (Days 1–6):** ES Modules, `import`/`export`, destructuring in-depth, rest/spread parameters, and enhanced object literals.
- **Week 2 (Days 7–12):** Modern array methods (`flatMap`, `at`), modern object methods (`Object.fromEntries`), optional chaining, nullish coalescing, and immutability patterns.
- **Week 3 (Days 13–18):** Symbols, Iterators, Generators, Vite introduction, and the Stage 03 refactoring project.

---

## 7. Primary Learning Resources

- **Primary Resource:** [JavaScript.info — Modern JavaScript Chapters](https://javascript.info/)
  - Study chapters:
    1. *Destructuring assignment* (Section 5.10)
    2. *Rest parameters and spread syntax* (Section 6.2)
    3. *Modules, introduction & Export and Import* (Sections 13.1 to 13.3)
    4. *Iterables & Symbols* (Sections 5.6 & 4.7)
    5. *Generators* (Section 12.1)

---

## 8. Alternative Resources

- **Interactive Tutorial:** [ES6 Katas](https://es6katas.org/) — Test-driven learning challenges covering arrow functions, destructuring, spread, and classes.
- **MDN Guides:** [MDN JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and [MDN Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

---

## 9. Official Documentation

- [ECMAScript® 2024 Language Specification](https://tc39.es/ecma262/) — The formal standard for the JavaScript language.
- [Vite Official Documentation](https://vite.dev/guide/) — Guide to the next-generation frontend build tooling.

---

## 10. Topic-by-Topic Study Sequence

### Week 1: Modules, Destructuring & Spread Syntax

#### Day 1 — ES Modules (`import` and `export`)
- **Study:** Why modules replaced script tags and CommonJS; named exports (`export const add = ...`); default exports (`export default ...`); importing with renaming (`import { add as sum }`); re-exporting (`export * from ...`).
- **Practice:** Split a math utility library across 3 separate files (`math.js`, `formatter.js`, `index.js`) and import them into a main application runner.

#### Day 2 — Object Destructuring
- **Study:** Basic extraction (`const { name, age } = user`); default fallback values (`const { role = 'guest' } = user`); property renaming (`const { id: userId } = user`); nested destructuring (`const { address: { city } } = user`).
- **Practice:** Write a function that accepts an options object and extracts 5 settings using destructuring with sensible defaults in the function signature.

#### Day 3 — Array Destructuring & Swapping
- **Study:** Position-based extraction (`const [first, second] = list`); skipping elements (`const [, , third] = list`); rest in destructuring (`const [head, ...tail] = list`); swapping variables without temp variables (`[a, b] = [b, a]`).
- **Practice:** Implement a function that parses CSV coordinates (`"40.7128,-74.0060"`) into `[latitude, longitude]` variables in one line.

#### Day 4 — Spread Operator & Rest Parameters
- **Study:** Rest parameters in functions (`function sum(...nums)`); spreading arrays into calls (`Math.max(...numbers)`); shallow cloning arrays and objects (`const copy = [...items]`, `const newObj = { ...oldObj, updated: true }`).
- **Practice:** Write an immutable state update function that adds a new item to an array and updates an object property without mutating originals.

#### Day 5 — Enhanced Object Literals & Computed Keys
- **Study:** Shorthand properties (`{ name, age }`); shorthand methods (`{ greet() {} }`); computed property names (`{ [keyName]: value }`).
- **Practice:** Build a dynamic form state handler function that takes `(fieldName, fieldValue)` and updates an object using computed property syntax.

#### Day 6 — Week 1 Review & Katas
- **Task:** Solve 10 challenges on [es6katas.org](https://es6katas.org/) focusing on destructuring, rest, and spread. Review Anki flashcards.

---

### Week 2: Modern Methods, Safe Navigation & Immutability

#### Day 7 — Modern Array Methods: `flatMap`, `at`, and `toSorted`
- **Study:** `Array.prototype.at(-1)` for negative indexing; `flatMap()` for mapping and flattening in a single pass; ES2023 non-mutating methods: `toSorted()`, `toReversed()`, `toSpliced()`, and `with()`.
- **Practice:** Take an array of orders containing multiple items and use `flatMap` to generate a flat list of all ordered product IDs.

#### Day 8 — Modern Object Utilities: `fromEntries` and `hasOwn`
- **Study:** `Object.entries(obj)` and `Object.fromEntries(entries)`; converting objects to Maps and back; `Object.hasOwn(obj, prop)` vs legacy `obj.hasOwnProperty(prop)`.
- **Practice:** Write a function that filters an object's properties by value (e.g., remove all keys with `null` or `undefined` values) using `Object.entries` and `Object.fromEntries`.

#### Day 9 — Safe Property Navigation: Optional Chaining (`?.`)
- **Study:** Why `TypeError: Cannot read properties of undefined` happens; optional property access (`user?.address?.street`); optional method calls (`analytics?.track?.()`); optional bracket access (`items?.[0]`).
- **Practice:** Refactor a deeply nested data extraction function that used 5 nested `if` statements into a clean one-liner with `?.`.

#### Day 10 — Nullish Coalescing (`??`) & Logical Assignment
- **Study:** `??` vs `||` (why `||` fails with `0`, `""`, and `false`); logical assignment operators (`??=`, `&&=`, `||=`).
- **Practice:** Write a configuration loader function that sets default timeout to `3000` only if timeout is `null` or `undefined` (allowing `0` as a valid timeout).

#### Day 11 — Deep Dive into Immutability & Pure Functions
- **Study:** Why React requires immutable state; shallow vs deep cloning pitfalls; using `structuredClone()` for deep copies; freezing objects with `Object.freeze()`.
- **Practice:** Build a mini immutable state store that dispatches actions to update deeply nested user preferences without mutating past states.

#### Day 12 — Week 2 Review & Refactoring Drills
- **Task:** Take a legacy JavaScript snippet filled with `var`, `arguments`, and manual loops, and refactor it into clean, idiomatic modern ES6+ code.

---

### Week 3: Advanced Metaprogramming, Vite & Stage Project

#### Day 13 — Symbols & Well-Known Symbols
- **Study:** What is a `Symbol` (unique, immutable primitive); creating private-like object properties; `Symbol.for()` and global registry; `Symbol.iterator`.
- **Practice:** Create an object that uses Symbols as hidden metadata keys that do not appear in `Object.keys()` or `JSON.stringify()`.

#### Day 14 — The Iterable Protocol & Custom Iterators
- **Study:** What makes an object iterable? The `[Symbol.iterator]` method; iterator object with `.next()`; implementing custom iterables that work with `for...of` and spread.
- **Practice:** Build a custom `Range(start, end, step)` iterable class that can be iterated with `for (const num of new Range(1, 10, 2))`.

#### Day 15 — Generator Functions (`function*` & `yield`)
- **Study:** Generator syntax; pauses and resumes with `yield`; two-way communication with `generator.next(value)`; infinite generators (ID generators).
- **Practice:** Build an infinite sequence generator that yields unique auto-incrementing ID tokens on demand.

#### Day 16 — Introduction to Vite & Modern Dev Server
- **Study:** What is a module bundler? Why Vite replaces legacy Webpack; native ES Modules in development; Hot Module Replacement (HMR); running `npm create vite@latest`.
- **Practice:** Initialize a minimal vanilla JavaScript project using Vite. Create two modules and observe instant hot-reloading in the browser.

#### Day 17 — Stage 03 Milestone Project: Modular Architecture
- **Task:** Take your Stage 02 CLI project and restructure it into a modern ES Module architecture. Split logic into `models/`, `services/`, and `utils/` with index export barrels.

#### Day 18 — Stage 03 Milestone Project: Refactoring & Testing
- **Task:** Upgrade all functions to use destructuring, rest/spread, optional chaining, and nullish coalescing. Test the modernized project and push to GitHub.

---

## 11. Suggested Time Limits

- **Daily Study Time:** 90 minutes.
  - 30 minutes: Concept study on JavaScript.info.
  - 45 minutes: Solving exercises and building modules in VS Code.
  - 15 minutes: Adding Anki cards and logging daily progress.
- **Total Stage Commitment:** 18 study days × 90 minutes = 27 hours of focused modern JavaScript practice.

---

## 12. Practice Tasks

1. **Destructuring Parameter Drill:** Write a function `formatTransaction({ id, amount, currency = 'USD', recipient: { name, email } = {} })` that formats receipt messages without throwing if `recipient` is missing.
2. **Immutable Array Replacer:** Write a function `replaceItem(array, index, newValue)` that returns a brand-new array with the updated element using the spread operator or `.with()`.
3. **Falsy Guard with Nullish Coalescing:** Write a function that accepts user options and correctly preserves `0` as an opacity setting and `""` as an empty username, but falls back to defaults if `null` or `undefined`.
4. **Custom Fibonacci Generator:** Implement `function* fibonacci()` that generates infinite Fibonacci numbers and use a loop to print the first 15 numbers.

---

## 13. Mini-Projects

1. **Config Merging Utility:** A robust module that deeply merges user-supplied configuration options with default configurations using spread syntax and nullish operators.
2. **In-Memory Event Emitter:** A class-based event dispatcher using `Map` and `Set` that supports `on(event, callback)`, `off(event, callback)`, and `emit(event, ...args)`.
3. **Stage 03 Milestone Project: Modernized ES Module Application**
   - Refactor the Stage 02 Task Manager into a clean, modular structure.
   - Utilize native ES Modules (`import`/`export`).
   - Cleanly destructure all parameters and configuration objects.
   - Implement immutable data state management.
   - Run and bundle cleanly with Vite.

---

## 14. Common Mistakes

| Common Mistake | Why It Breaks Code | How to Fix It |
|----------------|--------------------|---------------|
| **Defaulting with `||` instead of `??`** | `count = options.count || 10` overwrites `0` with `10` because `0` is falsy. | Use nullish coalescing: `count = options.count ?? 10`. |
| **Shallow Spread Mutation Trap** | `{ ...user, address: user.address }` still shares the exact same nested `address` object reference. | Spread nested objects explicitly: `{ ...user, address: { ...user.address } }`. |
| **Circular Dependencies in Modules** | File A imports File B while File B imports File A, causing undefined references. | Extract shared types and utilities into a separate `shared.js` module. |
| **Forgetting File Extensions in Native Node ESM** | `import { add } from './math'` fails in native Node.js. | Always include the `.js` extension: `import { add } from './math.js'`. |

---

## 15. Debugging Guidance

When working with modern ES Modules and modern syntax:
1. **Module Import Errors in Node:** If you see `SyntaxError: Cannot use import statement outside a module`, ensure your `package.json` contains `"type": "module"`, or use the `.mjs` file extension.
2. **Missing Export Warnings:** If an import evaluates to `undefined`, check whether you used a named export (`export const foo`) or a default export (`export default foo`). Named exports must use curly braces: `import { foo } from './foo.js'`.
3. **Inspect Desugared Destructuring:** If a destructuring statement fails, write out the manual property accesses to verify where the `undefined` or `TypeError` originates.

---

## 16. AI Usage Guidance

- **Effective Prompts:**
  - *"Show me how this nested `Object.assign` call can be rewritten cleanly using object spread syntax."*
  - *"Explain what the `toSorted()` method does differently from `sort()`."*
  - *"What are the trade-offs between named exports and default exports in large teams?"*
- **What to Avoid:**
  - Do not ask AI to refactor your entire codebase automatically. Refactoring line-by-line is how you internalize modern syntax patterns.

---

## 17. Completion Checklist

Before moving to Stage 04, verify:
- [ ] Completed all 18 daily lessons and code refactoring tasks.
- [ ] Created 60+ Anki flashcards covering ES Modules, destructuring, spread, and modern methods.
- [ ] Successfully structured and ran an ES Module project using Vite.
- [ ] Refactored your Stage 02 project to use modern ES6+ idioms with zero legacy syntax.
- [ ] Understand why immutable object updates are required in modern frontend libraries.
- [ ] Updated `progress/README.md` for Stage 03.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for [Stage 04: DOM & Browser APIs](04-dom-browser-apis.md) when:
1. You write `const`, arrow functions, and destructuring without consciously thinking about the syntax.
2. You can organize code across multiple files with clear single-responsibility imports and exports.
3. You know how to safely navigate nested data using `?.` and provide defaults with `??`.

---

## 19. Suggested Next Step

Proceed to **[Stage 04: DOM & Browser APIs — JavaScript in the Browser](04-dom-browser-apis.md)** to connect your JavaScript skills to live browser interfaces!

---

## 20. Further References

- [Exploring ES6 by Dr. Axel Rauschmayer](https://exploringjs.com/es6/) — The authoritative deep-dive into ES2015/ES6.
- [MDN ES6+ Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — Standard reference for modern JavaScript language features.