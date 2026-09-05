# Stage 05: Asynchronous JavaScript — Mastering Async Patterns

> **Duration:** 3 weeks (18 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Intermediate  
> **Prerequisites:** [Stage 02](02-javascript-fundamentals.md), [Stage 03](03-modern-javascript.md), and [Stage 04](04-dom-browser-apis.md) completed; comfortable with functions, objects, and DOM manipulation.

---

## 1. What This Stage Teaches

This stage demystifies how single-threaded JavaScript executes non-blocking asynchronous operations and communicates with remote web servers:
- **The JavaScript Event Loop:** Single-threaded execution model, Call Stack, Web APIs, Task (Callback) Queue, Microtask Queue (Promises), and render loop priorities.
- **Asynchronous Evolution:** Callbacks, callback hell, inversion of control, and error-first callbacks.
- **Promises:** Three states (`pending`, `fulfilled`, `rejected`), creating promises with `new Promise()`, chaining `.then()`, `.catch()`, and `.finally()`.
- **`async` and `await`:** Ergonomic syntax for asynchronous operations, error handling with `try...catch`, and sequential vs. concurrent execution.
- **Network Requests with `fetch()`:** HTTP methods (`GET`, `POST`, `PUT`, `DELETE`), headers, sending JSON payloads, response streaming, and status handling (`res.ok`, `res.status`).
- **The `fetch` Status Trap:** Understanding why `fetch()` does not reject on HTTP 404 or 500 errors and how to write robust wrapper utilities.
- **Promise Combinators:** `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()`.
- **Request Cancellation:** Using `AbortController` and signals to cancel stale search requests and implement request timeouts.
- **UI State Architecture:** Designing user interfaces that gracefully handle 5 distinct states: *Idle*, *Loading*, *Success*, *Error*, and *Empty*.

---

## 2. Why This Stage Matters

Real-world web applications rarely operate with hardcoded local data. Every modern frontend app fetches user profiles, posts data to backends, streams feeds, and handles server latency.

Asynchronous programming is widely considered the biggest conceptual hurdle for beginner JavaScript developers. If you do not understand the event loop and Promises, your code will suffer from race conditions, unhandled rejections, silent failures, and frozen user interfaces. Mastering async JavaScript gives you the confidence to communicate with any REST or GraphQL API on the web.

---

## 3. Prerequisites

- Firm grasp of JavaScript closures and higher-order callback functions from [Stage 02](02-javascript-fundamentals.md).
- Object destructuring and spread syntax from [Stage 03](03-modern-javascript.md).
- DOM element creation and event handling from [Stage 04](04-dom-browser-apis.md).

---

## 4. What to Install or Prepare

1. **Vite Development Environment:**
   ```bash
   npm create vite@latest stage-05-async-app -- --template vanilla
   cd stage-05-async-app
   npm install
   npm run dev
   ```
2. **REST API Client / Tester (Optional):** Install the Thunder Client or REST Client extension in VS Code to test HTTP endpoints without leaving your editor.
3. **Public API Bookmarks:**
   - [JSONPlaceholder (Free Fake REST API)](https://jsonplaceholder.typicode.com/)
   - [Open-Meteo Weather API (No Key Required)](https://open-meteo.com/)
   - [GitHub REST API](https://docs.github.com/en/rest)

---

## 5. Learning Objectives

By the end of this 3-week stage, you will:
- [ ] Diagram the flow of the JavaScript Event Loop, Call Stack, Microtask Queue, and Callback Queue.
- [ ] Create, chain, and consume native Promises with robust error handling.
- [ ] Write clean, readable asynchronous logic using `async` and `await`.
- [ ] Fetch data from remote REST endpoints using `fetch()` and parse JSON responses.
- [ ] Build a reliable `fetch` wrapper that accurately catches HTTP errors (`404`, `500`) and network drops.
- [ ] Execute concurrent network requests efficiently using `Promise.all()` and `Promise.allSettled()`.
- [ ] Cancel in-flight network requests using `AbortController` to prevent race conditions in live search inputs.
- [ ] Build and deploy a data-driven web app with full loading skeletons, error banners, and retry buttons.

---

## 6. Recommended Learning Order

- **Week 1 (Days 1–6):** Event loop mechanics, callbacks, Promise fundamentals, chaining, and error handling.
- **Week 2 (Days 7–12):** `async`/`await`, `fetch()` API, HTTP status checks, CRUD operations, and `AbortController`.
- **Week 3 (Days 13–18):** Promise combinators, building robust API client modules, UI state management, and the Stage 05 milestone project.

---

## 7. Primary Learning Resources

- **Primary Resource:** [JavaScript.info — Promises, async/await (Part 1, Chapter 11)](https://javascript.info/async)
  - Complete the following chapters in order:
    1. *Introduction: callbacks* (11.1)
    2. *Promise* (11.2)
    3. *Promises chaining* (11.3)
    4. *Error handling with promises* (11.4)
    5. *Promise API* (11.5)
    6. *Async/await* (11.8)
    7. *Fetch* (Part 3, Section 3.1)

---

## 8. Alternative Resources

- **Video Explanation:** [What the heck is the event loop anyway? by Philip Roberts (JSConf)](https://www.youtube.com/watch?v=8aGhZQkoFbQ) — The classic, must-watch talk on the JavaScript runtime.
- **Interactive Event Loop Visualizer:** [Latentflip Loupe](https://latentflip.com/loupe/) — Interactive tool to watch functions enter the call stack, queue, and event loop.
- **MDN Web Docs:** [MDN Asynchronous JavaScript Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous).

---

## 9. Official Documentation

- [MDN Fetch API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Promise Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

---

## 10. Topic-by-Topic Study Sequence

### Week 1: The Event Loop, Callbacks & Promise Foundations

#### Day 1 — Synchronous vs. Asynchronous & The Event Loop
- **Study:** JavaScript's single-threaded nature; non-blocking I/O; Call Stack; Web APIs (timers, network, DOM events); Callback Queue vs. Microtask Queue; Event loop cycle.
- **Practice:** Predict the exact console output order of a script mixing `console.log`, `setTimeout(..., 0)`, and `Promise.resolve().then(...)`.

#### Day 2 — The Callback Pattern & Pitfalls
- **Study:** Asynchronous callbacks; why callbacks were used; callback hell (Pyramid of Doom); inversion of control; error-first callback convention `callback(err, data)`.
- **Practice:** Write nested callback functions simulating reading 3 files in sequence, then observe how difficult error propagation becomes.

#### Day 3 — Promise Basics: Creation & States
- **Study:** What is a Promise? 3 states: `pending`, `fulfilled`, `rejected`; `new Promise((resolve, reject) => ...)`; consuming with `.then()` and `.catch()`.
- **Practice:** Wrap `setTimeout` into a reusable promise-based delay function: `const sleep = (ms) => new Promise(res => setTimeout(res, ms))`.

#### Day 4 — Promise Chaining & Value Passing
- **Study:** Chaining multiple `.then()` calls; returning values from `.then()`; returning a new Promise inside `.then()` for sequential async tasks; avoiding nested promises.
- **Practice:** Chain 3 asynchronous functions in sequence (Fetch user → Fetch user's orders → Calculate order total).

#### Day 5 — Promise Error Handling & `.finally()`
- **Study:** Catching errors in promise chains; how `.catch()` handles rejections anywhere upstream; error re-throwing; the `.finally()` cleanup handler.
- **Practice:** Build a simulated payment processor promise that randomly fails 30% of the time, catches the error, logs a transaction receipt, and hides a spinner in `.finally()`.

#### Day 6 — Week 1 Review & Promise Drills
- **Task:** Convert 3 legacy callback-based functions into clean Promise-returning utilities. Review Anki flashcards.

---

### Week 2: `async` / `await`, The `fetch` API & HTTP

#### Day 7 — `async` and `await` Fundamentals
- **Study:** `async` functions always return a Promise; `await` pauses execution until the promise resolves; translating `.then()` chains into linear `async`/`await` code.
- **Practice:** Rewrite your Day 4 three-step promise chain using clean `async`/`await` and `try...catch` blocks.

#### Day 8 — The `fetch()` API & HTTP Methods
- **Study:** What is HTTP? Requests and responses; `fetch(url)`; parsing responses with `res.json()`, `res.text()`, `res.blob()`; HTTP methods: `GET` and `POST`.
- **Practice:** Fetch a list of posts from `https://jsonplaceholder.typicode.com/posts` and render them as cards in the DOM.

#### Day 9 — The Critical `fetch` Status Code Trap
- **Study:** Why `fetch` does NOT reject on HTTP 400, 404, or 500 responses; the `res.ok` boolean property; checking `res.status`; throwing custom HTTP errors.
- **Practice:** Write a safe `fetchData(url)` helper function that checks `if (!res.ok) throw new Error(...)` and tests it against a non-existent 404 URL.

#### Day 10 — Sending Data: POST, PUT, DELETE & Headers
- **Study:** Sending request bodies with `POST`; setting HTTP headers (`'Content-Type': 'application/json'`); serializing payloads with `JSON.stringify()`; `PUT` for updates; `DELETE` for removal.
- **Practice:** Write functions to create a new post (`POST`), edit a post (`PUT`), and delete a post (`DELETE`) against JSONPlaceholder.

#### Day 11 — Cancelling Requests with `AbortController`
- **Study:** Race conditions in search inputs (fast keystrokes causing earlier slow responses to overwrite later ones); `new AbortController()`; `controller.signal`; `controller.abort()`.
- **Practice:** Build an instant search input that aborts pending fetch requests whenever the user types a new character.

#### Day 12 — Week 2 Review & Mini-Project
- **Task:** Build a "Random Dog Image Generator" that fetches images from the Dog CEO API, displays an animated loading spinner, and includes a "Try Again" button on network error.

---

### Week 3: Combinators, UI States & Milestone Project

#### Day 13 — Promise Combinators: `all` and `allSettled`
- **Study:** Concurrent execution; `Promise.all([p1, p2, p3])` (fails fast on first rejection); `Promise.allSettled([p1, p2, p3])` (waits for all and returns status objects `{ status, value/reason }`).
- **Practice:** Fetch user profile and user posts simultaneously with `Promise.all`, cutting load time in half compared to sequential fetching.

#### Day 14 — Promise Combinators: `race` and `any`
- **Study:** `Promise.race([p1, p2])` (returns first settled: resolved or rejected); implementing request timeouts; `Promise.any([p1, p2])` (returns first fulfilled resolution, ignores rejections unless all reject).
- **Practice:** Build a `fetchWithTimeout(url, ms)` utility using `Promise.race` that automatically cancels requests taking longer than 3 seconds.

#### Day 15 — The 5 UI States Architecture
- **Study:** The five states of every async UI:
  1. *Idle:* Before any action has occurred.
  2. *Loading:* Spinner or skeleton screen visible, buttons disabled.
  3. *Success:* Data rendered cleanly.
  4. *Error:* User-friendly error message with retry button.
  5. *Empty:* Data fetched successfully, but the list contains 0 items.
- **Practice:** Build a complete UI container component that explicitly renders different HTML templates based on the active state.

#### Day 16 — Building an API Client Module
- **Study:** Encapsulating network logic into a dedicated service module; base URLs; setting default headers; centralized error normalization; authentication tokens.
- **Practice:** Build an `apiClient.js` module that exposes clean methods: `api.get(endpoint)`, `api.post(endpoint, data)`, and `api.delete(endpoint)`.

#### Day 17 — Stage 05 Milestone Project: Live Data Dashboard (Architecture)
- **Task:** Select a public REST API (e.g., GitHub User Explorer, Open-Meteo Weather, or Currency Converter). Plan layout, UI state transitions, and debounce logic.

#### Day 18 — Stage 05 Milestone Project: Implementation & Polish
- **Task:** Implement live data fetching, debounced search, `AbortController` cancellation, error retry states, and responsive styling. Deploy live on GitHub Pages or Netlify.

---

## 11. Suggested Time Limits

- **Daily Study Time:** 90 minutes.
  - 30 minutes: Conceptual reading on JavaScript.info / MDN.
  - 45 minutes: Writing async functions, handling network responses, and testing edge cases.
  - 15 minutes: Reviewing Anki cards and updating your study tracker.
- **Total Stage Commitment:** 18 study days × 90 minutes = 27 hours of focused async engineering practice.

---

## 12. Practice Tasks

1. **Async Sleep Function:** Implement `sleep(ms)` and use it inside an `async` loop to print numbers 1 through 5 with a 1-second delay between each.
2. **Safe JSON Fetcher:** Write `fetchJSON(url)` that validates `res.ok`, parses JSON, handles network dropouts, and logs the response time in milliseconds.
3. **Parallel vs. Sequential Benchmark:** Write a benchmark comparing the execution time of fetching 3 endpoints sequentially (`await fetch(...); await fetch(...);`) vs. concurrently with `Promise.all()`.
4. **Timeout Wrapper:** Implement `withTimeout(promise, ms)` using `Promise.race()` and `setTimeout` that rejects with `"Request timed out"` if the target promise takes too long.

---

## 13. Mini-Projects

1. **GitHub Profile Finder:** Search any GitHub username, fetch data from `https://api.github.com/users/{username}`, and display avatar, bio, follower count, and top 5 repositories.
2. **Live Crypto / Currency Tracker:** Fetch real-time exchange rates from a public API, convert amounts between currencies, and update prices automatically every 30 seconds.
3. **Stage 05 Milestone Project: Weather & Forecast Dashboard**
   - Uses the free Open-Meteo API (no API key required).
   - Search cities with instant autocomplete (debounced with `AbortController`).
   - Displays current temperature, wind speed, weather condition icons, and 7-day forecast.
   - Comprehensive UI state handling: loading spinner, empty city state, network error message, and a "Retry" button.
   - Saves recently searched cities in `localStorage`.

---

## 14. Common Mistakes

| Common Mistake | Why It Breaks Applications | How to Fix It |
|----------------|----------------------------|---------------|
| **Assuming `fetch` rejects on 404/500** | `fetch()` resolves normally on HTTP errors; only network crashes cause rejection. | Always check `if (!res.ok) throw new Error(res.statusText)`. |
| **Forgetting to `await res.json()`** | `res.json()` returns a Promise, not parsed data. | Always await the body stream: `const data = await res.json()`. |
| **Sequential Fetches in Loops** | Using `await` inside a standard `forEach` loop executes requests in serial, slowing down the page. | Use `Promise.all(items.map(async item => ...))` for parallel fetching. |
| **Uncaught Promise Rejections** | Forgetting `.catch()` or `try...catch` leaves errors unhandled, crashing Node or logging console errors. | Always wrap `await` expressions in `try...catch` blocks. |
| **Race Conditions on Fast Typing** | Previous slower search requests returning *after* the latest query overwrite recent results. | Cancel preceding requests using `AbortController.abort()`. |

---

## 15. Debugging Guidance

When asynchronous code produces unexpected behavior:
1. **Inspect the DevTools Network Tab:** Look at the failed HTTP request. What was the exact HTTP status code? Click the request and inspect:
   - *Headers:* Did you send the correct `'Content-Type': 'application/json'`?
   - *Payload:* Is your outgoing JSON formatted correctly?
   - *Response:* What error message did the server return in the response body?
2. **Track Promise Resolution:** If your code hangs, log before and after `await`:
   ```javascript
   console.log('Fetching started...');
   const res = await fetch(url);
   console.log('Fetching finished, parsing JSON...');
   ```
3. **Verify Async Function Returns:** Remember that an `async` function *always* returns a Promise. If you log the return value of an async function without `await`, you will see `Promise { <pending> }`.

---

## 16. AI Usage Guidance

- **Effective Prompts:**
  - *"Explain what the Microtask Queue does differently from the Callback Queue in the JavaScript event loop."*
  - *"Why did this fetch request trigger a CORS error, and what does the browser CORS policy actually protect?"*
  - *"How can I structure an AbortController cleanup function to prevent memory leaks?"*
- **What to Avoid:**
  - Do not ask AI to generate your API dashboard project code. Connecting to APIs and handling edge cases is the single most important skill required for professional frontend work.

---

## 17. Completion Checklist

Before moving to Stage 06, verify:
- [ ] Completed all 18 daily lessons and coding exercises.
- [ ] Created 75+ Anki flashcards covering Promises, event loop, fetch, and status codes.
- [ ] Successfully built, tested, and deployed the Stage 05 Milestone Project.
- [ ] Can accurately diagram the Event Loop, Call Stack, and Microtask Queue.
- [ ] Can explain why `fetch()` does not reject on a 404 response.
- [ ] Implemented loading, error, success, and empty states in your project.
- [ ] Updated `progress/README.md` for Stage 05.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for [Stage 06: Git & GitHub](06-git-github.md) when:
1. You can fetch data from any REST API, parse the JSON, and render it to the DOM using `async`/`await`.
2. You instinctively handle network failure and HTTP status errors.
3. You know how to prevent race conditions and cancel pending requests.

---

## 19. Suggested Next Step

Proceed to **[Stage 06: Git & GitHub — Version Control and Collaboration](06-git-github.md)** to organize your projects into professional repositories and establish a clean engineering portfolio!

---

## 20. Further References

- [Jake Archibald: In The Loop (JSConf EU)](https://www.youtube.com/watch?v=cCOL7MC4Pl0) — The definitive visual lecture on browser rendering and event loop tasks.
- [Public APIs Directory](https://github.com/public-apis/public-apis) — A collective list of free public APIs for software development.
- [MDN Fetch API Concepts](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) — In-depth guide to using the Fetch API.