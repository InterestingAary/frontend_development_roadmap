# JavaScript → React Learning Roadmap

A practical learning system for beginners who want to become confident with JavaScript first, then learn React the right way.

> **Core principle:** Learn JavaScript well enough that React makes sense.

## Who this repository is for

- Beginners starting web development
- Learners who know some JavaScript but feel weak in fundamentals
- React learners who want stronger problem-solving and JS understanding

## What this repository includes

- A phased JavaScript → React roadmap
- Curated, high-quality learning resources
- Hands-on practice files (JavaScript + React)
- Project guidance by difficulty level
- A progress tracker to build consistency

## Recommended learning order

1. Setup + HTML/CSS + Git basics
2. JavaScript fundamentals
3. Modern JavaScript and modules
4. DOM and browser APIs
5. Asynchronous JavaScript
6. JavaScript internals
7. React fundamentals
8. React state/events/hooks
9. Build projects and iterate
10. Learn TypeScript/Next.js/testing/accessibility

## How to use this repository (practice-first method)

1. Study one topic from resources.
2. Run and modify the matching practice file.
3. Complete the small exercises at the end of files.
4. Build one mini project per phase checkpoint.
5. Mark progress in `progress/README.md`.

## Learning roadmap

### Phase 0 — Setup & foundation habits
**Learn:** VS Code, Node.js LTS, Git, terminal basics, consistent weekly routine.

**Checkpoint:** Create a repo, commit code, and push to GitHub.

### Phase 1 — JavaScript fundamentals (before React)
**Learn:** Variables, data types, type conversion, operators, conditionals, loops, functions, scope, arrays, objects.

**Practice:** `practice/javascript/01-fundamentals/`

**Checkpoint:** Build a console-based quiz or grade calculator.

### Phase 2 — Modern JavaScript (before React)
**Learn:** Destructuring, spread/rest, template literals, default parameters, optional chaining, nullish coalescing, array methods, modules.

**Practice:** `practice/javascript/02-modern-javascript/`

**Checkpoint:** Build a small data transformation script using map/filter/reduce.

### Phase 3 — DOM & browser APIs
**Learn:** Selecting/creating elements, DOM updates, events, event delegation, forms, validation, localStorage.

**Practice:** `practice/javascript/03-dom/`

**Checkpoint:** Build a to-do app that persists tasks in localStorage.

### Phase 4 — Asynchronous JavaScript
**Learn:** Callbacks, Promises, async/await, fetch, JSON, loading/error handling.

**Practice:** `practice/javascript/04-async-javascript/`

**Checkpoint:** Build a users or weather fetch app with loading and error states.

### Phase 5 — JavaScript internals
**Learn:** Scope, closures, hoisting, `this`, prototypes, event loop, microtasks/macrotasks, debouncing, throttling.

**Practice:** `practice/javascript/05-javascript-internals/`

**Checkpoint:** Explain each concept in your own words and write a short demo for each.

### Phase 6 — React fundamentals
**Learn:** Components, JSX, props, conditional rendering, lists and keys.

**Practice:** `practice/react/01-component-basics/`

**Checkpoint:** Build a profile list/cards UI from static JSON.

### Phase 7 — React state and events
**Learn:** `useState`, controlled inputs, event handling, lifting state up.

**Practice:** `practice/react/02-state-events/`

**Checkpoint:** Build a todo app with filters and shared state.

### Phase 8 — React effects and data fetching
**Learn:** `useEffect`, dependencies, API calls, loading/error/empty states.

**Practice:** `practice/react/03-effects-fetch/`

**Checkpoint:** Build a searchable user directory with retry.

### Phase 9 — After React basics
**Learn next:** React Router, Context API, testing, accessibility, TypeScript, Next.js, performance basics.

**Project ideas:** `practice/react/04-projects/README.md`

## How to run examples

### JavaScript files (Node.js)

From repository root:

- Run a file: `node practice/javascript/01-fundamentals/fundamentals.js`
- Check syntax only: `node --check <file-path>`

### DOM browser example

- Open `practice/javascript/03-dom/index.html` in a browser.
- Open DevTools Console to inspect logs and validation behavior.

### React examples

React files require a React environment (recommended: Vite).

- Setup instructions: `practice/react/README.md`
- Copy one example at a time into `src/App.jsx` (or import as component).

## Weekly learning workflow

- **Day 1–2:** Learn concepts from curated resources.
- **Day 3–4:** Run and edit practice files.
- **Day 5:** Build one mini project.
- **Day 6:** Refactor + add one extra feature.
- **Day 7:** Review notes + update progress checklist.

## Track progress

Use `progress/README.md` and mark topics only when both are true:

1. You understand the concept.
2. You built something using it.

## Repository structure

```text
/
├── README.md
├── resources/
│   └── README.md
├── practice/
│   ├── javascript/
│   │   ├── 01-fundamentals/
│   │   ├── 02-modern-javascript/
│   │   ├── 03-dom/
│   │   ├── 04-async-javascript/
│   │   └── 05-javascript-internals/
│   └── react/
│       ├── 01-component-basics/
│       ├── 02-state-events/
│       ├── 03-effects-fetch/
│       └── 04-projects/
└── progress/
    └── README.md
```
