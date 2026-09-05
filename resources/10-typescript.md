# Stage 10: TypeScript — Type-Safe JavaScript

> **Duration:** 3 weeks (18 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Intermediate  
> **Prerequisites:** [Stage 01](01-html-css.md) through [Stage 09](09-projects.md) completed; strong proficiency in JavaScript, React components, props, and hooks.

---

## 1. What This Stage Teaches

This stage transforms you from a dynamic JavaScript developer into an engineer capable of building robust, self-documenting, type-safe web applications using **TypeScript**:
- **The TypeScript Mental Model:** TypeScript as a static analysis compile-time checker; how TypeScript compiles down to clean, plain JavaScript.
- **Compiler Configuration:** Configuring `tsconfig.json` with strict mode enabled (`"strict": true`, `"noImplicitAny": true`).
- **Foundational Types:** Primitive types (`string`, `number`, `boolean`), arrays, tuples, literal types, and type inference vs. explicit annotations.
- **Custom Data Structures:** `interface` vs. `type` aliases, optional properties (`?`), readonly properties, index signatures, and interface inheritance (`extends`).
- **Union Types & Type Narrowing:** Union types (`A | B`), exhaustiveness checking with `never`, and type guards (`typeof`, `instanceof`, `in`, and Discriminated Unions).
- **Generics:** Generic functions `<T>`, generic interfaces, default type parameters, and generic constraints (`<T extends HasId>`).
- **Standard Utility Types:** `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, T>`, and `Readonly<T>`.
- **TypeScript in React:**
  - Typing Component Props and children (`React.ReactNode`).
  - Typing Hooks: `useState<T>`, `useRef<HTMLInputElement>`, and `useReducer`.
  - Typing DOM Event Handlers (`React.MouseEvent`, `React.ChangeEvent`, `React.FormEvent`).
  - Typing Custom Hooks with `as const` tuple returns.
- **Migrating Projects:** Converting existing React `.jsx` codebases to strict TypeScript `.tsx` without taking shortcuts or using `any`.

---

## 2. Why This Stage Matters

JavaScript is dynamically typed: variables can hold any data type at any time, and type mismatches only fail at runtime when a user triggers them in the browser. In large commercial codebases with thousands of files and dozens of developers, runtime type errors (such as `Cannot read properties of undefined`) cause devastating outages.

TypeScript solves this by checking types at **compile time**. It acts as automated documentation that moves with your code, autocompleting component props, catching typos before you save, and allowing fearless refactoring across complex applications. Today, TypeScript is the default industry standard for professional frontend engineering.

---

## 3. Prerequisites

- Complete mastery of JavaScript objects, arrays, functions, and closures from [Stage 02](02-javascript-fundamentals.md) and [Stage 03](03-modern-javascript.md).
- Strong command of React components, props, and hooks from [Stages 07–08](07-react.md).

---

## 4. What to Install or Prepare

1. **Install TypeScript Globally or in Project:**
   ```bash
   npm install -D typescript @types/node
   ```
2. **Initialize a TypeScript Vite Project for Practice:**
   ```bash
   npm create vite@latest stage-10-ts-app -- --template react-ts
   cd stage-10-ts-app
   npm install
   npm run dev
   ```

---

## 5. Learning Objectives

By the end of this 3-week stage, you will:
- [ ] Understand the compile-time type erasure model: types exist during development, not in the browser runtime.
- [ ] Model complex business domains accurately using TypeScript `interface` and `type` definitions.
- [ ] Use discriminated unions to represent mutually exclusive application states cleanly.
- [ ] Write reusable generic functions and components that operate on arbitrary data types while preserving full type safety.
- [ ] Transform and manipulate existing types using built-in utility types (`Pick`, `Omit`, `Partial`).
- [ ] Strongly type every aspect of a React application: component props, event handlers, `useState`, `useRef`, and custom hooks.
- [ ] Eliminate the `any` type completely, adopting `unknown` and type guards where external data is unpredictable.
- [ ] Migrate an existing React application from JavaScript to strict TypeScript.

---

## 6. Recommended Learning Order

- **Week 1 (Days 1–6):** TypeScript fundamentals, primitive types, type inference, interfaces, type aliases, and function typing.
- **Week 2 (Days 7–12):** Union types, type narrowing, discriminated unions, generics, and built-in utility types.
- **Week 3 (Days 13–18):** TypeScript with React (props, events, hooks, contexts), and the Stage 10 codebase migration project.

---

## 7. Primary Learning Resources

- **Primary Resource:** [The TypeScript Handbook (Official Documentation)](https://www.typescriptlang.org/docs/handbook/intro.html)
  - Work through the following handbook sections in order:
    1. *The Basics*
    2. *Everyday Types*
    3. *Narrowing*
    4. *More on Functions*
    5. *Object Types*
    6. *Generics*
    7. *Type Manipulation (Utility Types)*

---

## 8. Alternative Resources

- **Interactive Book:** [TypeScript Deep Dive by Basarat Ali Syed](https://basarat.gitbook.io/typescript/) — The community favorite, free online book with practical real-world patterns.
- **Interactive Practice:** [Type Challenges (Beginner to Intermediate Track)](https://github.com/type-challenges/type-challenges) — Solve TypeScript type puzzle challenges directly in your browser.
- **React + TS Cheatsheet:** [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/) — The definitive reference for typing React components and hooks.

---

## 9. Official Documentation

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TSConfig Reference Manual](https://www.typescriptlang.org/tsconfig) — Comprehensive explanation of compiler flags (`strict`, `noImplicitAny`, `target`, `moduleResolution`).

---

## 10. Topic-by-Topic Study Sequence

### Week 1: Type Systems, Primitives, Objects & Functions

#### Day 1 — The TypeScript Mental Model & `tsconfig.json`
- **Study:** Static vs dynamic typing; compile-time vs runtime; type erasure; the `tsc` compiler; creating `tsconfig.json` with `"strict": true`, `"target": "ES2022"`, and `"moduleResolution": "bundler"`.
- **Practice:** Initialize a small TS project. Write a `.ts` file, compile it with `npx tsc`, and inspect the generated `.js` output to verify type erasure.

#### Day 2 — Primitive Types, Inference & Literal Types
- **Study:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`; when to rely on type inference vs explicit type annotations; literal types (e.g., `let status: 'loading' | 'success' | 'error'`); `as const` assertions.
- **Practice:** Write a function that accepts only specific literal direction strings (`'north' | 'south' | 'east' | 'west'`) and observe compiler errors when passing arbitrary strings.

#### Day 3 — Object Types: `interface` vs. `type`
- **Study:** Defining object structures with `interface` and `type`; optional properties (`?`); `readonly` properties; extending interfaces (`interface Employee extends Person`); type intersections (`type A & B`).
- **Practice:** Model an e-commerce Product domain containing `id`, `name`, `price`, optional `discount`, and readonly `createdAt` timestamp.

#### Day 4 — Arrays, Tuples & Enums vs. Object Maps
- **Study:** Typed arrays (`number[]`, `Array<string>`); fixed-length Tuples (`[number, number]` for coordinates); Why TypeScript `enum` is often discouraged in modern codebases, and how `const STATUS = { ... } as const` provides safer alternatives.
- **Practice:** Create a Coordinate tuple type representing `[latitude, longitude]` and write a function that calculates distances between two tuples.

#### Day 5 — Typing Functions: Parameters, Returns & Callbacks
- **Study:** Function parameter types and return type annotations; optional parameters (`param?: string`); default parameters; function type signatures (`(a: number, b: number) => number`); void return type.
- **Practice:** Build a custom `filterArray<T>` function signature with typed callback parameters.

#### Day 6 — Week 1 Review & Everyday Types
- **Task:** Solve 5 Warm-Up and Easy challenges on [type-challenges](https://github.com/type-challenges/type-challenges) (e.g., Pick, Readonly, Tuple to Object). Add 15 Anki cards.

---

### Week 2: Unions, Narrowing, Generics & Utility Types

#### Day 7 — Union Types & Type Narrowing
- **Study:** What is a union? (`string | number`); Type Narrowing with guards: `typeof` (for primitives), `instanceof` (for classes), and `in` operator (for checking property existence).
- **Practice:** Write a function `formatInput(val: string | number)` that uses `typeof` guards to pad numbers or trim strings safely.

#### Day 8 — Discriminated Unions (The Most Important TS Pattern)
- **Study:** What is a discriminated union? (Multiple object types sharing a common literal tag property like `kind` or `status`); exhaustive pattern matching with `switch (state.status)`; the `never` type for compile-time exhaustiveness guarantees.
- **Practice:** Model an API response state with discriminated unions:
  ```typescript
  type ApiResponse = 
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: User[] }
    | { status: 'error'; error: string };
  ```
  Write a handler function that handles every state exhaustively.

#### Day 9 — Generics Fundamentals (`<T>`)
- **Study:** Why generics are needed (reusable code without losing type information); generic functions: `function getFirstElement<T>(arr: T[]): T | undefined`; generic type aliases: `type ApiResponse<T> = { data: T; status: number }`.
- **Practice:** Write a generic `wrapInArray<T>(item: T): T[]` function and verify that TypeScript accurately infers the returned array element type.

#### Day 10 — Generic Constraints
- **Study:** Restricting generic types with `extends`: `<T extends { id: string }>`; using `keyof` operator to constrain keys: `<T, K extends keyof T>(obj: T, key: K): T[K]`.
- **Practice:** Build a type-safe `getProperty(obj, key)` utility that rejects any key not actually present on the object at compile-time.

#### Day 11 — Essential Utility Types
- **Study:** Transforming existing types without duplicating code:
  - `Partial<T>` (makes all properties optional).
  - `Required<T>` (makes all properties required).
  - `Readonly<T>` (freezes all properties at type level).
  - `Pick<T, K>` (selects a subset of properties).
  - `Omit<T, K>` (removes a subset of properties).
  - `Record<K, T>` (creates dictionary objects with typed keys and values).
- **Practice:** Take a complete `UserProfile` interface and create `UserUpdateInput` using `Partial<Omit<UserProfile, 'id'>>`.

#### Day 12 — Week 2 Review & Generic Drills
- **Task:** Solve 5 Medium challenges on [type-challenges](https://github.com/type-challenges/type-challenges) (e.g., Omit, Exclude, Awaited). Review Anki flashcards.

---

### Week 3: TypeScript with React & Codebase Migration

#### Day 13 — Typing React Components & Props
- **Study:** Creating Vite React projects with TypeScript (`template: react-ts`); typing component props with `interface`; typing optional props with defaults; typing `children` with `React.ReactNode`.
- **Practice:** Build a strongly typed `<Card>` and `<Modal>` component with title, optional badge, and `children`.

#### Day 14 — Typing React Hooks (`useState`, `useRef`, `useReducer`)
- **Study:** How TypeScript infers `useState` primitives; explicit generics for complex or nullable state: `const [user, setUser] = useState<User | null>(null)`; typing DOM refs: `useRef<HTMLInputElement>(null)` vs mutable value refs: `useRef<number | null>(null)`.
- **Practice:** Build a search component that holds a nullable state object and focuses an input element using a strongly typed `useRef`.

#### Day 15 — Typing DOM Events in React
- **Study:** React SyntheticEvent types: `React.MouseEvent<HTMLButtonElement>`, `React.ChangeEvent<HTMLInputElement>`, `React.FormEvent<HTMLFormElement>`, `React.KeyboardEvent`; typing inline handlers vs external handler functions.
- **Practice:** Build an accessible form component with strongly typed `onChange` and `onSubmit` handlers that extract values without using `any`.

#### Day 16 — Typing Custom Hooks & Context API
- **Study:** Typing custom hook returns (using `as const` on tuple returns so TS infers `[Value, Setter]` rather than `(Value | Setter)[]`); typing Context values and Context Providers: `createContext<AuthContextType | undefined>(undefined)`.
- **Practice:** Build a strongly typed `useLocalStorage<T>(key: string, initialValue: T)` hook and test it with both strings and complex objects.

#### Day 17 — Stage 10 Milestone Project: Migration Plan & Setup
- **Task:** Take your Stage 08 or Stage 09 React application. Install TypeScript and React type definitions (`@types/react`, `@types/react-dom`). Set up `tsconfig.json` with strict mode enabled. Rename `.jsx` files to `.tsx`.

#### Day 18 — Stage 10 Milestone Project: Complete TS Migration
- **Task:** Resolve all compiler errors. Model all API payloads, component props, and context states with clean interfaces. Ensure `npx tsc --noEmit` passes with 0 errors and 0 instances of `any`. Push to GitHub.

---

## 11. Suggested Time Limits

- **Daily Study Time:** 90 minutes.
  - 30 minutes: Studying TypeScript handbook chapters.
  - 45 minutes: Solving type challenges and typing React components.
  - 15 minutes: Reviewing Anki cards and recording progress.
- **Total Stage Commitment:** 18 study days × 90 minutes = 27 hours of focused static typing practice.

---

## 12. Practice Tasks

1. **Discriminated Union State Handler:** Write a function that accepts the `ApiResponse` discriminated union from Day 8 and returns a formatted string for each state. Ensure omitting a `case` causes a TypeScript compilation error.
2. **Type-Safe Object Filter:** Write a generic function `filterObject<T extends object>(obj: T, predicate: (val: T[keyof T]) => boolean): Partial<T>` that preserves type information.
3. **Form Event Typing Drill:** Write a React form handler without using `any`:
   ```typescript
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     const formData = new FormData(e.currentTarget);
   };
   ```
4. **Tuple Return Assertion Drill:** Create a custom hook that returns `[count, increment]`. Demonstrate why adding `as const` is necessary for TypeScript to know the second element is a function.

---

## 13. Mini-Projects

1. **Type-Safe Event Emitter:** A class-based event dispatcher where event names and their corresponding payload types are strictly constrained by an interface map.
2. **Generic Autocomplete Search Component:** A React component `<Autocomplete<T> items={items} getLabel={item => item.name} onSelect={item => ...} />` that operates on any arbitrary data shape.
3. **Stage 10 Milestone Project: Complete React + TypeScript Migration**
   - Full migration of an existing React application from JavaScript to TypeScript.
   - Strict compiler flags enabled (`"strict": true`, `"noImplicitAny": true`).
   - All component props, contexts, hooks, and external API responses strongly typed.
   - Zero `any` types permitted.
   - `npm run build` and `npx tsc --noEmit` execute with 0 errors.

---

## 14. Common Mistakes

| Common Mistake | Why It Breaks Type Safety | How to Fix It |
|----------------|---------------------------|---------------|
| **Using `any` as an Escape Hatch** | Disables all TypeScript checking on that variable, defeating the purpose of TypeScript. | Use `unknown` with type guards, or define a proper interface. |
| **Confusing `type` and `interface`** | Not knowing when to choose which. | Use `interface` for public APIs and object models (supports `extends`); use `type` for unions, primitives, and tuples. |
| **Over-Annotating Inferred Types** | Writing `let x: number = 5;` adds clutter without adding safety. | Let TypeScript infer types whenever the initial value is obvious. |
| **Optional Properties vs Nullable Types** | `user?: string` means the property can be omitted; `user: string | null` means the property must be present but can be null. | Use `?` for optional fields; use `| null` for explicit absence of value. |
| **Ignoring Compiler Errors with `// @ts-ignore`** | Silences warnings and leaves latent bugs in production code. | Fix the root type definition or use `// @ts-expect-error` with an explanatory comment if strictly necessary. |

---

## 15. Debugging Guidance

When TypeScript reports compiler errors:
1. **Read the Error from Bottom to Top:** TypeScript error messages can be verbose. Look at the very bottom line of the error popover: it usually pinpoints the exact property mismatch (e.g., `Type 'string' is not assignable to type 'number'`).
2. **Hover to Inspect Inferred Types:** Hover your cursor over any variable or function in VS Code. If TypeScript displays `any`, you forgot a type annotation or an API response is untyped.
3. **Run Type Checks in the Terminal:** Run `npx tsc --noEmit` in your terminal to see all project-wide errors across every file simultaneously.
4. **Use Type Narrowing for `unknown` Data:** If data comes from `JSON.parse()` or an external fetch, type it as `unknown` and validate fields using `typeof` or validation libraries like Zod.

---

## 16. AI Usage Guidance

- **Effective Prompts:**
  - *"Why is TypeScript giving me error TS2322 on this component prop?"*
  - *"How can I write a generic constraint so this function only accepts objects with an 'id' property?"*
  - *"Explain how discriminated unions provide exhaustive type safety in switch statements."*
- **What to Avoid:**
  - Do not ask AI to generate complex mapped types that you do not understand. Stick to readable, maintainable TypeScript idioms.

---

## 17. Completion Checklist

Before moving to Stage 11, verify:
- [ ] Completed all 18 daily lessons and TypeScript handbook chapters.
- [ ] Created 75+ Anki flashcards covering interfaces, unions, generics, and React types.
- [ ] Successfully migrated a complete React project to strict TypeScript with zero `any` types.
- [ ] `npx tsc --noEmit` passes with 0 warnings or errors.
- [ ] Can explain the difference between `interface` and `type` clearly.
- [ ] Can strongly type React component props, DOM events, and custom hooks.
- [ ] Updated `progress/README.md` for Stage 10.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for [Stage 11: Next.js](11-nextjs.md) when:
1. You write React components in `.tsx` with full prop interfaces naturally.
2. You can use Generics to write reusable, type-safe utility functions and components.
3. You no longer fear TypeScript red squiggles—you view the compiler as a helpful pair programmer.

---

## 19. Suggested Next Step

Proceed to **[Stage 11: Next.js — Full-Stack React Framework](11-nextjs.md)** to learn server-side rendering, the App Router, Server Components, and full-stack production deployment!

---

## 20. Further References

- [TypeScript Playground](https://www.typescriptlang.org/play) — In-browser environment for testing types, compiler flags, and viewing compiled JS output.
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) — Indispensable reference for typing modern React patterns.
- [Total TypeScript by Matt Pocock](https://www.totaltypescript.com/) — High-quality tutorials and tips for advanced TypeScript mastery.