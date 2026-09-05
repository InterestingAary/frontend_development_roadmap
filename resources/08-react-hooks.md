# Stage 08: React Hooks & Advanced React — Deeper React Patterns

> **Duration:** 3 weeks (18 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Intermediate-Advanced  
> **Prerequisites:** [Stage 07: React Fundamentals](07-react.md) completed; fluent with components, props, and `useState`.

---

## 1. What This Stage Teaches

This stage elevates your React engineering capabilities from basic components to professional, multi-page application architectures:
- **Synchronizing with `useEffect`:** Managing side effects (data fetching, DOM measurements, event listeners), the dependency array contract, and cleanup functions to avoid memory leaks.
- **"You Might Not Need an Effect":** Recognizing when NOT to use `useEffect` (computing derived state during render, handling user events in event handlers).
- **Referencing DOM & Mutable Values with `useRef`:** Accessing native DOM nodes (focus, scroll, media playback) and storing mutable values that persist across renders without triggering a re-render.
- **Custom Hooks:** Abstracting and sharing stateful logic across components into reusable, composable functions (e.g., `useFetch`, `useLocalStorage`, `useWindowSize`).
- **Global State with Context API:** Solving the "prop drilling" anti-pattern using `createContext`, `Provider`, and the `useContext` hook.
- **Predictable State Transitions with `useReducer`:** Managing complex, interdependent state objects using actions, reducers, and dispatch.
- **Client-Side Routing with React Router:** Building Single-Page Applications (SPAs) with `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`, `<NavLink>`, dynamic route params (`useParams`), and programmatic navigation (`useNavigate`).
- **Performance Optimization Fundamentals:** Understanding the cost of re-renders, when to use `React.memo`, `useMemo`, and `useCallback`, and avoiding premature optimization.

---

## 2. Why This Stage Matters

Basic `useState` and props are sufficient for simple isolated widgets, but real-world commercial applications require:
- Network data synchronization that cleans up when components unmount.
- Global application states (authenticated user session, shopping cart items, UI theme) accessible by dozens of components across different routes without passing props through 10 intermediate levels.
- Seamless client-side page transitions without full-page browser refreshes.

Mastering advanced hooks, Context, and routing transitions you from a beginner building toy widgets to a professional software engineer capable of architecting scalable React frontends.

---

## 3. Prerequisites

- Complete comfort with React JSX, props, and `useState` from [Stage 07](07-react.md).
- Understanding of asynchronous Promises and `fetch` from [Stage 05](05-async-javascript.md).

---

## 4. What to Install or Prepare

1. **Vite React Project with React Router:**
   ```bash
   npm create vite@latest stage-08-advanced-react -- --template react
   cd stage-08-advanced-react
   npm install react-router-dom
   npm run dev
   ```

---

## 5. Learning Objectives

By the end of this 3-week stage, you will:
- [ ] Connect components to external systems (APIs, browser events) using `useEffect` with proper cleanup.
- [ ] Avoid common `useEffect` anti-patterns by deriving values directly during render.
- [ ] Manipulate DOM elements directly (e.g., focusing an input on mount) using `useRef`.
- [ ] Extract repeated stateful logic into custom, testable hooks.
- [ ] Build global state providers (Theme, Auth, Cart) using the React Context API without third-party libraries.
- [ ] Refactor complex component state logic into a clean `useReducer` action/dispatcher model.
- [ ] Configure client-side multi-page routing with protected routes and dynamic URL parameters.
- [ ] Build and deploy a multi-route, state-managed React web application.

---

## 6. Recommended Learning Order

- **Week 1 (Days 1–6):** `useEffect` in depth, dependency arrays, cleanup functions, side-effect mental model, and `useRef`.
- **Week 2 (Days 7–12):** Custom hooks, Context API, eliminating prop drilling, and complex state management with `useReducer`.
- **Week 3 (Days 13–18):** React Router for single-page multi-route applications, performance optimization patterns, and the Stage 08 milestone project.

---

## 7. Primary Learning Resources

- **Primary Course:** [React Official Documentation — Managing State & Escape Hatches (react.dev)](https://react.dev/learn)
  - Read and complete exercises for these core chapters:
    1. *Escape Hatches:* Referencing Values with Refs, Manipulating the DOM with Refs, Synchronizing with Effects, You Might Not Need an Effect, Lifecycle of Reactive Effects, Separating Events from Effects, Removing Effect Dependencies, Reusing Logic with Custom Hooks.
    2. *Managing State:* Passing Data Deeply with Context, Extracting State Logic into a Reducer, Scaling Up with Reducer and Context.

---

## 8. Alternative Resources

- **Blog & Articles:** [Kent C. Dodds Blog on React Hooks](https://kentcdodds.com/blog) — Outstanding, deep-dive articles on `useEffect`, Context performance, and custom hook composition.
- **Official Router Guide:** [React Router Official Tutorial](https://reactrouter.com/) — Step-by-step guide to configuring client-side routing.

---

## 9. Official Documentation

- [React API Reference — useEffect](https://react.dev/reference/react/useEffect)
- [React API Reference — useContext](https://react.dev/reference/react/useContext)
- [React API Reference — useReducer](https://react.dev/reference/react/useReducer)
- [React API Reference — useRef](https://react.dev/reference/react/useRef)

---

## 10. Topic-by-Topic Study Sequence

### Week 1: Synchronizing with `useEffect` & Refs

#### Day 1 — The `useEffect` Mental Model
- **Study:** What is a side effect? (Anything outside React's pure render cycle: network requests, document title updates, timers, analytics); `useEffect(setup, dependencies)`; how effects run *after* the DOM has been committed.
- **Practice:** Build a component that updates the browser tab title (`document.title`) whenever a counter state updates.

#### Day 2 — The Dependency Array Contract
- **Study:** The 3 dependency modes:
  1. `[a, b]` (runs on mount and whenever `a` or `b` changes).
  2. `[]` (runs once on initial component mount).
  3. No array (runs after *every* single render — usually a bug).
  Why you must never lie to React about dependencies.
- **Practice:** Fetch user data from JSONPlaceholder inside an effect with an empty dependency array `[]` and render the result.

#### Day 3 — Effect Cleanups & Preventing Memory Leaks
- **Study:** Why effects need cleanup; the cleanup function (`return () => { ... }`); cleaning up event listeners, timers (`clearInterval`), and cancelling in-flight fetch requests with `AbortController`.
- **Practice:** Build a window resize tracker component that listens to `window.addEventListener('resize')` inside an effect and removes the listener in the cleanup function.

#### Day 4 — "You Might Not Need an Effect"
- **Study:** Common anti-patterns: using effects to transform data for rendering, using effects to handle user submit clicks; calculating values during render instead of in effects; resetting state on key prop changes.
- **Practice:** Take a component that used an effect to filter an array and refactor it to filter directly during rendering.

#### Day 5 — Manipulating the DOM with `useRef`
- **Study:** What is a ref? (`const ref = useRef(initialValue)`); refs hold mutable data that does not trigger re-renders; connecting refs to DOM elements with `ref={myRef}`; focusing inputs, scrolling to elements, measuring node dimensions.
- **Practice:** Build a search bar component that automatically focuses the input field when the page loads, and includes a button to smoothly scroll to the bottom of the page.

#### Day 6 — Week 1 Review & Effect Auditing
- **Task:** Build a Countdown Timer component with Start, Pause, and Reset buttons using `useState`, `useEffect`, and `useRef` to store the timer ID. Review Anki cards.

---

### Week 2: Custom Hooks, Context & `useReducer`

#### Day 7 — Reusable Stateful Logic with Custom Hooks
- **Study:** What is a custom hook? (A JavaScript function whose name starts with `use` and can call other hooks); extracting duplicated logic; keeping hooks focused and pure.
- **Practice:** Build a custom `useLocalStorage(key, initialValue)` hook that synchronizes a React state variable with the browser's `localStorage`.

#### Day 8 — Advanced Custom Hooks
- **Study:** Composing hooks; passing dependencies into custom hooks; returning state and helper functions.
- **Practice:** Build a `useFetch(url)` hook that handles data fetching, loading states, error states, and automatic request cancellation.

#### Day 9 — Eliminating Prop Drilling with Context
- **Study:** What is prop drilling? When to use Context (global data: theme, user authentication, language preferences); `createContext()`; `<MyContext.Provider value={...}>`; consuming context with `useContext(MyContext)`.
- **Practice:** Build a global Theme Context (`ThemeContext`) with a `<ThemeProvider>` that allows any nested component in the application to toggle between light and dark mode.

#### Day 10 — Combining Context with State & Custom Provider
- **Study:** Packaging context logic into a clean provider component; creating custom hooks for consuming context (e.g., `useTheme()` that throws a helpful error if used outside `ThemeProvider`).
- **Practice:** Build an `AuthContext` with a custom `useAuth()` hook providing `user`, `login(userData)`, and `logout()` methods across the entire app.

#### Day 11 — Predictable State Logic with `useReducer`
- **Study:** When `useState` becomes cumbersome; the Reducer pattern: `(state, action) => newState`; actions as objects (`{ type: 'ADD_ITEM', payload: item }`); `dispatch(action)`; writing pure reducer functions.
- **Practice:** Build a Shopping Cart using `useReducer` handling `ADD_TO_CART`, `REMOVE_FROM_CART`, `UPDATE_QUANTITY`, and `CLEAR_CART` actions.

#### Day 12 — Scaling Up with Reducer and Context Combined
- **Study:** The ultimate React state management pattern: holding complex state in a reducer and providing `state` and `dispatch` through Context to avoid prop drilling.
- **Practice:** Combine your Day 11 shopping cart reducer with a `CartContext` so any component can dispatch cart actions directly.

---

### Week 3: Client-Side Routing, Performance & Milestone Project

#### Day 13 — Client-Side Routing with React Router
- **Study:** Multi-page SPAs; configuring `<BrowserRouter>`; defining routes with `<Routes>` and `<Route path="..." element={<Page />} />`; navigation with `<Link to="...">` and `<NavLink>`.
- **Practice:** Set up a 3-page React application with Home, About, and Products pages with an active navigation bar using `<NavLink>`.

#### Day 14 — Dynamic Routes & Programmatic Navigation
- **Study:** Dynamic URL parameters (`path="/products/:productId"`); extracting params with `useParams()`; programmatic redirects with `useNavigate()`; nested routes and `<Outlet />`.
- **Practice:** Build a Product Details page that reads the product ID from the URL using `useParams()` and fetches the matching product details.

#### Day 15 — Performance Optimization Basics
- **Study:** Why React re-renders; profiling components with React DevTools Profiler; `React.memo` for component memoization; caching expensive computations with `useMemo`; preserving function references with `useCallback`.
- **Practice:** Use `useMemo` to cache a computationally expensive list sorting calculation so it only re-runs when the sort order changes.

#### Day 16 — Application Architecture & Folder Organization
- **Study:** Professional React directory structures: `components/`, `context/`, `hooks/`, `pages/`, `services/`, and `utils/`; keeping components small and focused.
- **Practice:** Restructure your project files into a scalable, feature-based directory hierarchy.

#### Day 17 — Stage 08 Milestone Project: Multi-Route App (Architecture)
- **Task:** Plan and set up your Stage 08 project: an interactive e-commerce store or social dashboard with routing, Context-based cart/auth state, and custom data-fetching hooks.

#### Day 18 — Stage 08 Milestone Project: Implementation & Deployment
- **Task:** Complete all routes, integrate global Context state, implement loading skeletons and error boundaries, and deploy live to Vercel or Netlify.

---

## 11. Suggested Time Limits

- **Daily Study Time:** 90 minutes.
  - 30 minutes: Studying React escape hatches and routing documentation.
  - 45 minutes: Building custom hooks, context providers, and multi-route pages.
  - 15 minutes: Reviewing Anki cards and updating progress logs.
- **Total Stage Commitment:** 18 study days × 90 minutes = 27 hours of advanced React practice.

---

## 12. Practice Tasks

1. **Window Size Hook:** Implement a custom `useWindowSize()` hook that listens to window resize events and returns `{ width, height }`. Ensure the event listener is cleaned up properly.
2. **Outside Click Hook:** Implement `useClickOutside(ref, callback)` that fires a callback function whenever a user clicks outside of the referenced element (essential for dropdowns and modals).
3. **Cart Reducer Drill:** Write a pure reducer function for a shopping cart that correctly calculates updated subtotal and tax amounts on every `ADD` and `REMOVE` action.
4. **Protected Route Component:** Build a `<ProtectedRoute>` wrapper component using React Router that checks `const { user } = useAuth()` and redirects unauthenticated users to `/login`.

---

## 13. Mini-Projects

1. **Persistent Dark/Light Mode Provider:** A complete Theme Context system that reads system preferences, allows manual toggling, and stores the user's choice in `localStorage`.
2. **Infinite Data Scroll Hook:** A custom hook using the browser `IntersectionObserver` API to trigger next-page API fetches when the user scrolls near the bottom of a page.
3. **Stage 08 Milestone Project: Multi-Route E-Commerce Store**
   - Built with Vite, React functional components, and React Router.
   - Pages: Home, Product Catalog, Product Detail (`/products/:id`), and Cart (`/cart`).
   - Global Cart state managed via `CartContext` and `useReducer`.
   - Custom `useFetch` hook handling API requests with loading indicators and error states.
   - Responsive layout, accessible keyboard navigation, and live deployment.

---

## 14. Common Mistakes

| Common Mistake | Why It Breaks Applications | How to Fix It |
|----------------|----------------------------|---------------|
| **Missing Effect Cleanup** | Forgetting to clear timers or abort fetches leads to memory leaks and "state update on unmounted component" warnings. | Always return a cleanup function: `return () => clearInterval(id)`. |
| **Omitting Effect Dependencies** | Omitting state or prop variables from the dependency array causes stale closure bugs. | Include all variables used inside the effect in the dependency array. |
| **Overusing `useEffect` for Derived State** | Setting state inside an effect based on another state causes an extra unnecessary re-render cycle. | Calculate derived values directly during render: `const fullName = firstName + ' ' + lastName`. |
| **Putting Everything in a Single Context** | Putting frequently changing values in a monolithic Context forces every consuming component to re-render. | Split contexts into separate domains (e.g., `AuthContext`, `CartContext`, `ThemeContext`). |
| **Premature Optimization with `useCallback`** | Wrapping every function in `useCallback` adds cognitive overhead and small memory costs with zero performance benefit. | Only use `useCallback` when passing callbacks to memoized children (`React.memo`). |

---

## 15. Debugging Guidance

When troubleshooting advanced React components:
1. **Trace Infinite Render Loops:** If you see `Maximum update depth exceeded`, you are calling a state setter directly during render or inside an effect that updates one of its own dependencies without a guard condition.
2. **Inspect Context Values:** In React DevTools, select the `<Context.Provider>` element to view its active `value` payload. Verify that children are wrapped within the provider in the component tree.
3. **Debug Stale Closures in Effects:** If an effect or timer uses an outdated value of a variable, use an updater function `setState(prev => ...)` or add the variable to the dependency array.
4. **Use React StrictMode:** StrictMode intentionally mounts components twice in development to help you detect uncleaned side effects immediately.

---

## 16. AI Usage Guidance

- **Effective Prompts:**
  - *"Explain why this useEffect needs an AbortController cleanup function and how to write it."*
  - *"How can I refactor these three related useState calls into a single useReducer?"*
  - *"Review this custom hook: are there any memory leaks or stale closure vulnerabilities?"*
- **What to Avoid:**
  - Do not ask AI to architect your global context tree or write your e-commerce project. Building providers and wiring routes yourself is what solidifies full-stack component intuition.

---

## 17. Completion Checklist

Before moving to Stage 09, verify:
- [ ] Completed all 18 daily lessons and code challenges on react.dev.
- [ ] Created 75+ Anki flashcards covering `useEffect`, `useRef`, Context, and `useReducer`.
- [ ] Successfully built, tested, and deployed the Stage 08 Multi-Route Milestone Project.
- [ ] Can write custom hooks from scratch to extract reusable stateful logic.
- [ ] Can explain how cleanup functions prevent memory leaks in asynchronous effects.
- [ ] Configured client-side routing with React Router and URL parameters.
- [ ] Updated `progress/README.md` for Stage 08.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for [Stage 09: Portfolio Projects](09-projects.md) when:
1. You can build a complete multi-page React application with client-side routing and global context state from scratch.
2. You instinctively clean up timers and event listeners in `useEffect`.
3. You can extract repeated component logic into custom hooks without hesitating.

---

## 19. Suggested Next Step

Proceed to **[Stage 09: Portfolio Projects — Applying Everything](09-projects.md)** to build 3 production-grade, portfolio-ready applications that demonstrate your complete frontend engineering capabilities to potential employers!

---

## 20. Further References

- [React.dev: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) — Essential guide to avoiding effect anti-patterns.
- [React Router Documentation](https://reactrouter.com/en/main) — Official documentation for modern client-side routing.
- [A Complete Guide to useEffect by Dan Abramov](https://overreacted.io/a-complete-guide-to-useeffect/) — The definitive mental model for React effects.