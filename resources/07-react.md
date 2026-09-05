# Stage 07: React Fundamentals — Building Interactive UIs

> **Duration:** 4 weeks (24 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Intermediate  
> **Prerequisites:** [Stage 01](01-html-css.md) through [Stage 06](06-git-github.md) completed; strong grasp of modern JavaScript (ES6+), DOM, and asynchronous operations.

---

## 1. What This Stage Teaches

This stage introduces you to component-driven declarative frontend engineering using **React**, the most widely used UI library in modern web development:
- **The React Mental Model:** Declarative vs. imperative programming; user interface as a pure function of state: `UI = f(state)`.
- **Modern React Tooling:** Creating lightning-fast React applications with Vite (`npm create vite@latest`).
- **JSX Architecture:** JavaScript XML syntax, HTML vs JSX differences (`className`, `htmlFor`, self-closing tags), and embedding JavaScript expressions using curly braces `{}`.
- **Component Composition:** Creating reusable functional components, structuring component trees, and utilizing the `children` prop.
- **Props (Properties):** Passing data down unidirectionally, prop destructuring, setting default props, and passing functions as callbacks.
- **State with `useState`:** Understanding why normal variables do not trigger DOM re-renders, the state snapshot mental model, and asynchronous batching.
- **Immutable State Updates:** Using updater functions (`setCount(prev => prev + 1)`), updating state objects cleanly with spread `{ ...prev }`, and updating state arrays immutably (`filter`, `map`, spread).
- **Event Handling:** React SyntheticEvents, passing event handlers vs. invoking them, and parameter passing.
- **Conditional Rendering:** Ternary expressions (`condition ? A : B`), logical AND (`condition && A`), and early return patterns.
- **Rendering Lists & Keys:** Mapping arrays to JSX elements with `.map()`, and why stable, unique `key` props are mandatory for reconciliation.
- **Controlled Components:** Managing form inputs (`<input>`, `<textarea>`, `<select>`) with React state and `onChange` handlers.
- **Lifting State Up:** Sharing state between sibling components by hoisting state to their nearest common parent.

---

## 2. Why This Stage Matters

Building complex, dynamic web applications with vanilla DOM manipulation eventually leads to messy "spaghetti code": you must manually track which DOM elements need updating whenever data changes, which easily causes desynchronization bugs and fragile UIs.

React solves this by introducing a **declarative, component-based paradigm**. You describe how the UI should look for any given state, and React automatically and efficiently updates the DOM to match that state. Because you already mastered vanilla JavaScript fundamentals, DOM APIs, and ES6+ syntax in earlier stages, you will understand *why* React makes these architectural choices rather than treating it like black magic.

---

## 3. Prerequisites

- Thorough understanding of modern JavaScript (arrow functions, destructuring, spread/rest, ES modules) from [Stage 02](02-javascript-fundamentals.md) and [Stage 03](03-modern-javascript.md).
- DOM tree understanding and event handling from [Stage 04](04-dom-browser-apis.md).
- Git and GitHub workflow from [Stage 06](06-git-github.md).

---

## 4. What to Install or Prepare

1. **React Developer Tools Extension:** Install the official Chrome / Firefox extension to inspect React component trees, props, and active hook state live in DevTools.
2. **Initialize a Fresh Vite React Project:**
   ```bash
   npm create vite@latest stage-07-react-app -- --template react
   cd stage-07-react-app
   npm install
   npm run dev
   ```

---

## 5. Learning Objectives

By the end of this 4-week stage, you will:
- [ ] Deconstruct complex visual designs into a hierarchy of atomic, reusable React functional components.
- [ ] Write valid JSX, embed dynamic data, and conditionally render UI elements.
- [ ] Pass data downwards through component trees using props and callback functions.
- [ ] Manage local component memory and user interaction using the `useState` hook.
- [ ] Execute state updates immutably on objects and arrays without mutating existing state directly.
- [ ] Render dynamic collections using `.map()` with stable, unique `key` attributes.
- [ ] Build controlled form inputs that synchronize seamlessly with React state.
- [ ] Hoist state to parent components to coordinate data between multiple sibling components.
- [ ] Build and deploy a complete, interactive, state-driven React web application.

---

## 6. Recommended Learning Order

- **Week 1 (Days 1–6):** React mental model, Vite setup, JSX syntax, functional components, props, and composition.
- **Week 2 (Days 7–12):** State with `useState`, event handlers, re-rendering lifecycle, and updater functions.
- **Week 3 (Days 13–18):** Immutable state updates (objects & arrays), conditional rendering, and rendering lists with keys.
- **Week 4 (Days 19–24):** Controlled forms, lifting state up, component architecture, and the Stage 07 milestone project.

---

## 7. Primary Learning Resources

- **Primary Course:** [React Official Documentation — Learn React (react.dev/learn)](https://react.dev/learn)
  - Work through the following core sections sequentially:
    1. *Describing the UI* (All chapters: Your First Component, Importing and Exporting Components, Writing Markup with JSX, JavaScript in JSX with Curly Braces, Passing Props to a Component, Conditional Rendering, Rendering Lists, Keeping Components Pure).
    2. *Adding Interactivity* (All chapters: Responding to Events, State: A Component's Memory, Render and Commit, State as a Snapshot, Queueing a Series of State Updates, Updating Objects in State, Updating Arrays in State).
    3. *Managing State* (Reacting to Input with State, Choosing the State Structure, Sharing State Between Components).
  - Complete every interactive challenge at the end of each documentation page.

---

## 8. Alternative Resources

- **Interactive Tutorial:** [Scrimba — Learn React for Free (by Bob Ziroll)](https://scrimba.com/learn/learnreact) — Highly engaging in-browser interactive video course where you can pause and edit the code directly inside the video player.
- **Video Resource:** [React Course for Beginners (freeCodeCamp on YouTube)](https://www.youtube.com/watch?v=bMknfKXIFA8).

---

## 9. Official Documentation

- [React Official Documentation (react.dev)](https://react.dev/) — The modern, authoritative guide for React 18 & 19.
- [React API Reference — useState](https://react.dev/reference/react/useState) — Complete technical specification for the `useState` hook.

---

## 10. Topic-by-Topic Study Sequence

### Week 1: The React Philosophy, JSX, Components & Props

#### Day 1 — React Mental Model & Vite Setup
- **Study:** Imperative vs declarative programming; component hierarchy; creating a project with Vite; examining `main.jsx`, `App.jsx`, and `index.html`.
- **Practice:** Spin up a fresh Vite project. Remove template code and render a simple `"Hello React!"` heading. Inspect the DOM to verify how React mounts into `<div id="root">`.

#### Day 2 — JSX Rules & Embedding Expressions
- **Study:** Why JSX is not HTML; JSX rules: return a single root element (or Fragment `<>...</>`), close all tags, use camelCase attributes (`className`, `htmlFor`, `tabIndex`); embedding variables and expressions with `{}`.
- **Practice:** Build a user profile card component that formats user details dynamically using JavaScript expressions inside JSX.

#### Day 3 — Functional Components & Composition
- **Study:** What is a React component? (A JavaScript function that returns JSX); naming conventions (PascalCase); breaking a page into small, single-responsibility components; nesting components.
- **Practice:** Build a layout composed of separate `<Header />`, `<Sidebar />`, `<Feed />`, and `<Footer />` components.

#### Day 4 — Passing Data with Props
- **Study:** Unidirectional data flow (parent to child); passing strings, numbers, booleans, arrays, and objects; destructuring props in function parameters: `function Card({ title, badge })`; default props.
- **Practice:** Build a reusable `<Button variant="primary" size="large" label="Click me" />` component with dynamic styling based on props.

#### Day 5 — The Special `children` Prop
- **Study:** Passing nested JSX elements into components; the `props.children` prop; building wrapper and container components (e.g., `<Card>`, `<Modal>`, `<Container>`).
- **Practice:** Create a reusable `<Card>` container component that wraps arbitrary content passed between its opening and closing tags.

#### Day 6 — Week 1 Review & Pure Components
- **Study:** Keeping components pure (same inputs → same JSX); avoiding side effects during rendering (e.g., mutating external variables).
- **Practice:** Build a component library showcase with 4 reusable components. Review Anki flashcards.

---

### Week 2: State, Event Handling & The Render Lifecycle

#### Day 7 — Responding to Events
- **Study:** Adding event handlers (`onClick`, `onChange`, `onSubmit`); passing a function reference (`onClick={handleClick}`) vs invoking immediately (`onClick={handleClick()}` trap); SyntheticEvent object.
- **Practice:** Build an interactive like button that logs click coordinates to the console and alerts confirmation.

#### Day 8 — State: A Component's Memory (`useState`)
- **Study:** Why local variables don't survive re-renders; `const [state, setState] = useState(initialValue)`; the render-and-commit lifecycle; triggering re-renders by calling state setters.
- **Practice:** Build an interactive counter with "+", "-", and "Reset" buttons that updates the displayed number in real time.

#### Day 9 — State as a Snapshot
- **Study:** How React renders snapshots of state; state values are fixed within a single render cycle; why logging state immediately after calling `setState` shows the old value.
- **Practice:** Write a component with a button that triggers an alert after 3 seconds to demonstrate that the alert captures the state snapshot from the moment the click occurred.

#### Day 10 — Queueing State Updates & Updater Functions
- **Study:** Batching state updates; passing updater functions: `setCount(prev => prev + 1)` vs `setCount(count + 1)`; when updater functions are strictly required.
- **Practice:** Build a button that increments a counter by 3 by chaining three consecutive `setCount(prev => prev + 1)` calls.

#### Day 11 — Managing Multiple Independent States
- **Study:** When to use multiple `useState` calls; keeping unrelated state separate; avoiding redundant state that can be computed from existing state or props.
- **Practice:** Build a profile card where the username, online status toggle, and follower counter each use independent state hooks.

#### Day 12 — Week 2 Review & State Debugging
- **Task:** Build a Toggle Switch component and a Collapsible Accordion widget using `useState`. Inspect component state using the React DevTools extension.

---

### Week 3: Immutability, Conditional Rendering & Lists

#### Day 13 — Updating Objects in State
- **Study:** The golden rule of React state: treat state as read-only (immutable); copying objects with spread syntax: `setUser(prev => ({ ...prev, email: newEmail }))`; updating nested objects safely.
- **Practice:** Build a form that updates a user settings object `{ name, preferences: { theme, notifications } }` immutably.

#### Day 14 — Updating Arrays in State
- **Study:** Adding items immutably (`[...items, newItem]`); removing items immutably (`items.filter(item => item.id !== id)`); updating items immutably (`items.map(item => item.id === id ? { ...item, done: true } : item)`).
- **Practice:** Build a dynamic shopping cart where users can add items, increase quantities, and delete items without mutating the cart array.

#### Day 15 — Conditional Rendering Patterns
- **Study:** Conditional rendering with `if` statements and early returns; ternary operator (`isLoggedIn ? <Dashboard /> : <Login />`); short-circuit logical AND (`hasMessages && <Badge />`); the `0 && <Component />` pitfall.
- **Practice:** Build a notification banner that renders an alert with different color themes and icons based on a `status` prop (`'success'`, `'warning'`, `'error'`).

#### Day 16 — Rendering Lists with `.map()` & The `key` Prop
- **Study:** Transforming arrays of data into JSX lists with `items.map(item => <li key={item.id}>...</li>)`; why keys must be unique among siblings; why using array index as a key leads to state corruption bugs.
- **Practice:** Render a list of 10 products with images, titles, and prices from an array of mock data using stable unique ID keys.

#### Day 17 — Reordering, Sorting & Filtering Lists
- **Study:** Deriving filtered lists in render; sorting arrays without mutating state: `const sorted = [...items].sort(...)`; combining filters with search inputs.
- **Practice:** Build a filterable product table with a search input and category dropdown that filters the displayed list instantly.

#### Day 18 — Week 3 Review & Mini-Project
- **Task:** Build an interactive Bookmarks Manager where users can add URLs with custom tags, filter by tag, and delete bookmarks.

---

### Week 4: Controlled Forms, Lifting State Up & Milestone Project

#### Day 19 — Controlled Form Components
- **Study:** Uncontrolled vs. controlled components; the two-way binding pattern: `value={text}` and `onChange={e => setText(e.target.value)}`; controlled `<textarea>` and `<select>` dropdowns; controlled checkboxes (`checked={isChecked}`).
- **Practice:** Build a newsletter signup form with validation that displays a personalized thank-you message upon submission.

#### Day 20 — Multi-Input Form Handling with a Single State Object
- **Study:** Managing complex forms using a single state object; using the input `name` attribute dynamically: `setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))`.
- **Practice:** Build a user registration form with 5 inputs (name, email, password, role, agree to terms) managed by a single state object.

#### Day 21 — Lifting State Up (Shared State)
- **Study:** Why sibling components cannot pass data directly to each other; hoisting state to their common parent; passing state down as props, passing updater functions down as callbacks.
- **Practice:** Build a temperature converter where entering a value in Celsius instantly updates a sibling Fahrenheit input, and vice-versa.

#### Day 22 — Component Hierarchy & State Structure Design
- **Study:** Identifying where state should live; avoiding deeply nested state; normalizing data; identifying single sources of truth.
- **Practice:** Draw the component tree on paper for a Task Management app before writing any code. Identify state locations.

#### Day 23 — Stage 07 Milestone Project: Architecture & Setup
- **Task:** Initialize your Stage 07 project with Vite (e.g., Personal Expense Tracker or Recipe Box). Create component files, mock data, and initial state structures.

#### Day 24 — Stage 07 Milestone Project: Implementation & Polish
- **Task:** Implement full CRUD features, controlled input forms, category filtering, and responsive styling. Test thoroughly and push to GitHub.

---

## 11. Suggested Time Limits

- **Daily Study Time:** 90 minutes.
  - 30 minutes: Reading react.dev documentation and interactive sandbox tutorials.
  - 45 minutes: Building components and managing state in VS Code.
  - 15 minutes: Reviewing Anki cards and recording daily achievements in `progress/README.md`.
- **Total Stage Commitment:** 24 study days × 90 minutes = 36 hours of deliberate React practice.

---

## 12. Practice Tasks

1. **The Counter Triad:** Build a counter component with three buttons: "+1", "+5", and "Reset". Ensure updates use updater functions (`prev => prev + 1`).
2. **Immutable Array Updater:** Write a function that takes an array of todo objects and toggles the `completed` boolean of a specific ID without mutating the original array:
   ```javascript
   setTodos(prev => prev.map(todo => todo.id === targetId ? { ...todo, completed: !todo.completed } : todo));
   ```
3. **The Index-as-Key Bug Demonstration:** Build a list of items where each item has an input field. Use array index as the key. Delete the first item and observe how the input value erroneously shifts to the next item. Fix it with unique ID keys.
4. **Controlled Form Drill:** Build a form with a text input, range slider, and checkbox. Display a live JSON preview of the form state directly beneath the form in real time.

---

## 13. Mini-Projects

1. **Interactive Accordion FAQ:** A component that displays a list of questions where clicking any question expands its answer while collapsing previously opened ones.
2. **Dynamic Habit Tracker:** Track daily habits with completion checkboxes, calculate total streak counts, and filter habits by category.
3. **Stage 07 Milestone Project: Interactive Personal Finance / Expense Tracker**
   - Built with Vite and React functional components.
   - Add new transactions with description, amount, date, and category (Income vs Expense).
   - Display dynamic summary metrics (Total Income, Total Expenses, Net Balance) derived from state.
   - Filter transactions by category or search term.
   - Delete individual transactions.
   - Clean, accessible styling and deployed live on Vercel or GitHub Pages.

---

## 14. Common Mistakes

| Common Mistake | Why It Breaks React | How to Fix It |
|----------------|---------------------|---------------|
| **Direct State Mutation (`state.count++`)** | React detects state changes by shallow reference comparison. Mutating the existing object prevents re-renders. | Always create a new copy: `setState(prev => prev + 1)` or `{ ...prev }`. |
| **Calling Event Handlers Immediately** | Writing `onClick={handleClick()}` invokes the function during rendering, often triggering infinite loops. | Pass the function reference: `onClick={handleClick}` or `onClick={() => handleClick(id)}`. |
| **Using Array Indices as `key`** | Reordering or deleting list items causes React to misidentify component identities, breaking internal state. | Use stable, unique IDs: `key={item.id}` (use UUIDs or database IDs). |
| **Duplicating State That Can Be Computed** | Storing `items` and `filteredItems` in separate states causes sync bugs when items change. | Store only raw `items` in state; calculate `const filteredItems = items.filter(...)` in render. |
| **The `0 && <Component />` Trap** | In JavaScript, `0 && JSX` evaluates to the number `0`, which React renders onto the screen. | Use explicit booleans: `items.length > 0 && <Component />`. |

---

## 15. Debugging Guidance

When your React components don't render or update as expected:
1. **Use the React Developer Tools:** Inspect the component in the *Components* tab in DevTools. Look at its current `props` and `hooks` state values to see if the state actually changed.
2. **Verify State Update Immutability:** If your component does not re-render after calling `setState`, ensure you did not accidentally mutate the previous object or array. Check if you returned a new reference.
3. **Track Component Render Cycles:** Place a `console.log('Rendering [ComponentName]:', state)` at the top of your component function to see exactly when and why it re-executes.
4. **Check the DevTools Console for Missing Keys:** React will display a clear warning if any item in a mapped list is missing a unique `key` prop.

---

## 16. AI Usage Guidance

- **Effective Prompts:**
  - *"Explain how React decides when to re-render a component with a simple diagram."*
  - *"Why is array index dangerous to use as a key when rendering dynamic lists in React?"*
  - *"Critique my component state structure: is this state redundant or can it be derived?"*
- **What to Avoid:**
  - Do not ask AI to generate your React milestone application. Constructing component hierarchies, writing state handlers, and lifting state up yourself is critical to thinking in React.

---

## 17. Completion Checklist

Before moving to Stage 08, verify:
- [ ] Completed all 24 daily lessons and coding exercises on react.dev.
- [ ] Created 80+ Anki flashcards covering JSX rules, useState, and component composition.
- [ ] Successfully built, tested, and deployed the Stage 07 Milestone Project.
- [ ] Can explain why React state must be updated immutably without consulting notes.
- [ ] Can write controlled forms with multiple inputs cleanly.
- [ ] Can lift state up to synchronize sibling components.
- [ ] Updated `progress/README.md` for Stage 07.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for [Stage 08: React Hooks & Advanced React](08-react-hooks.md) when:
1. You think naturally in components, breaking down any visual interface into a tree of functional components.
2. You can manage local component state, handle events, and map lists with unique keys effortlessly.
3. You know how to pass data down via props and communicate upwards via callback functions.

---

## 19. Suggested Next Step

Proceed to **[Stage 08: React Hooks & Advanced React — Deeper React Patterns](08-react-hooks.md)** to learn side-effect management (`useEffect`), global state with Context, custom hooks, and client-side routing!

---

## 20. Further References

- [Thinking in React (Official react.dev Guide)](https://react.dev/learn/thinking-in-react) — The canonical 5-step process for architecting React interfaces.
- [React Developer Tools (Browser Extension)](https://react.dev/learn/react-developer-tools) — Indispensable tool for inspecting component props and state.
- [Overreacted by Dan Abramov](https://overreacted.io/) — Foundational essays on how React works under the hood.