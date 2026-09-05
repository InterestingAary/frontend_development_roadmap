# Stage 04: DOM & Browser APIs — JavaScript in the Browser

> **Duration:** 3 weeks (18 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Beginner-Intermediate  
> **Prerequisites:** [Stage 01](01-html-css.md), [Stage 02](02-javascript-fundamentals.md), and [Stage 03](03-modern-javascript.md) completed; comfortable with HTML structure and ES6+ syntax.

---

## 1. What This Stage Teaches

This stage bridges JavaScript programming logic with browser interfaces using the Document Object Model (DOM) and Native Web APIs:
- The DOM tree structure: `Node` vs. `Element`, document traversal (`children`, `parentElement`, `nextElementSibling`, `closest()`).
- Modern element querying: `querySelector()`, `querySelectorAll()`, and iterating over `NodeList`.
- Safe DOM modification: `textContent`, `classList` (`add`, `remove`, `toggle`), `dataset` attributes, creating elements (`createElement`), and appending nodes (`append`, `prepend`, `insertAdjacentHTML`).
- The Browser Event System: event listeners (`addEventListener`), the event object, event bubbling, event capturing, `event.target` vs. `event.currentTarget`, `preventDefault()`, and **event delegation**.
- Forms and Input Handling: form submission (`submit` event), reading values with the `FormData` API, and instant validation feedback.
- Client-Side Persistence: `localStorage` and `sessionStorage`, data serialization with `JSON.stringify()`, and managing application state.
- Native Browser Dialogs and Timers: the `<dialog>` HTML5 element (`showModal()`, `close()`), `setTimeout`, `setInterval`, and `requestAnimationFrame`.

---

## 2. Why This Stage Matters

A webpage is static without the DOM. The DOM is the API that allows JavaScript to inspect, alter, animate, and react to user actions inside a browser window.

Every single frontend library—including React—exists to manipulate the DOM on your behalf. If you do not understand how native browser events bubble, what causes layout reflows, or how `localStorage` persists data, you will treat React as an inscrutable black box. Writing interactive vanilla JavaScript applications gives you deep respect and intuitive understanding of how browsers actually render web pages.

---

## 3. Prerequisites

- Semantic HTML and CSS layouts from [Stage 01](01-html-css.md).
- JavaScript data structures, objects, arrays, and functions from [Stage 02](02-javascript-fundamentals.md).
- ES6+ destructuring, modules, and arrow functions from [Stage 03](03-modern-javascript.md).

---

## 4. What to Install or Prepare

1. **Vite Development Server:** Use Vite for rapid local reloading while coding your browser projects:
   ```bash
   npm create vite@latest stage-04-browser-app -- --template vanilla
   cd stage-04-browser-app
   npm install
   npm run dev
   ```
2. **Browser DevTools:** Familiarity with the Console, Elements, and Application tabs.

---

## 5. Learning Objectives

By the end of this 3-week stage, you will:
- [ ] Select, traverse, and inspect DOM elements using modern APIs.
- [ ] Dynamically construct, modify, and remove DOM nodes without introducing XSS vulnerabilities.
- [ ] Master event delegation to handle clicks and inputs efficiently on dynamic lists of elements.
- [ ] Intercept form submissions, validate user inputs, and provide accessible error messages.
- [ ] Persist and synchronize application state across page reloads using `localStorage`.
- [ ] Build modal dialogs using the semantic `<dialog>` element with proper keyboard focus trapping.
- [ ] Build a complete, responsive, state-persistent browser application using pure vanilla JavaScript.

---

## 6. Recommended Learning Order

- **Week 1 (Days 1–6):** The DOM tree, element selection, traversal, attributes, classes, styles, and node creation.
- **Week 2 (Days 7–12):** Browser event model, event bubbling/capturing, event delegation, form handling, and input validation.
- **Week 3 (Days 13–18):** Web Storage (`localStorage`), `<dialog>` modals, timers, UI state management, and the Stage 04 milestone project.

---

## 7. Primary Learning Resources

- **Primary Resource:** [JavaScript.info — Document, Events, Interfaces (Part 2)](https://javascript.info/)
  - Complete the following essential sections in order:
    1. *Document* (Sections 1.1 to 1.11) — DOM tree, searching, attributes, modifying document, styles & classes.
    2. *Introduction to Events* (Sections 2.1 to 2.4) — Browser events, Bubbling and capturing, Event delegation.
    3. *UI Events & Forms* (Sections 3.1, 4.1 to 4.3) — Mouse events, form controls, form submission.

---

## 8. Alternative Resources

- **MDN Web Docs:** [MDN — Manipulating Documents (Web APIs Tutorial)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - Detailed guides on the DOM API and element modification.
- **Interactive Practice:** [Frontend Mentor Junior Challenges](https://www.frontendmentor.io/challenges?difficulties=junior)
  - Real design specs for interactive web apps (e.g., interactive rating component, tip calculator, multi-step form).

---

## 9. Official Documentation

- [MDN Document Object Model (DOM) Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 10. Topic-by-Topic Study Sequence

### Week 1: DOM Traversal, Selection & Manipulation

#### Day 1 — The DOM Tree & Traversal
- **Study:** Window, document, and DOM hierarchy; `Node` vs. `Element`; traversing parents, children, and siblings (`parentElement`, `children`, `firstElementChild`, `nextElementSibling`, `closest()`).
- **Practice:** Given an HTML document, write a function that finds the nearest containing card element using `element.closest('.card')`.

#### Day 2 — Querying the DOM
- **Study:** `document.querySelector()` and `document.querySelectorAll()`; CSS selector matching; why `querySelectorAll` returns a static `NodeList` (and how to convert to array with `[...nodes]`); legacy methods (`getElementById`).
- **Practice:** Query all checked checkboxes on a page and extract their values into an array using `Array.from()` and `.map()`.

#### Day 3 — Modifying Content, Attributes & Classes
- **Study:** `textContent` (safe) vs. `innerHTML` (XSS vulnerability risks); `classList.add()`, `remove()`, `toggle()`, `contains()`; `getAttribute()`, `setAttribute()`, `removeAttribute()`; HTML5 `data-*` attributes and `element.dataset`.
- **Practice:** Build an accordion component where clicking a header toggles an `.is-open` class and updates `aria-expanded`.

#### Day 4 — Creating & Inserting DOM Elements
- **Study:** `document.createElement()`, `element.append()`, `prepend()`, `before()`, `after()`, `remove()`; `element.insertAdjacentHTML()` (`beforebegin`, `afterbegin`, `beforeend`, `afterend`); `DocumentFragment` for batched DOM insertion.
- **Practice:** Write a function that renders a list of 50 items using a `DocumentFragment` to avoid multiple layout repaints.

#### Day 5 — Manipulating CSS Styles from JavaScript
- **Study:** `element.style` (inline styles); computed styles (`getComputedStyle(element)`); updating CSS custom properties dynamically with `document.documentElement.style.setProperty('--theme-color', color)`.
- **Practice:** Build a live theme switcher that changes the primary accent color across the entire webpage by updating CSS custom properties.

#### Day 6 — Week 1 Review & DOM Challenge
- **Task:** Build a dynamic shopping list where users can type an item and click "Add" to insert a new list element with a "Delete" button. Review Anki cards.

---

### Week 2: Browser Events, Forms & Event Delegation

#### Day 7 — The Event Model: Listeners & The Event Object
- **Study:** `addEventListener(type, handler, options)`; removing listeners with `removeEventListener`; the `event` object (`e.target`, `e.type`, `e.key`, `e.clientX`); keyboard events (`keydown`, `keyup`).
- **Practice:** Build an interactive keycode inspector that displays `e.key`, `e.code`, and `e.keyCode` on screen whenever a key is pressed.

#### Day 8 — Event Propagation: Bubbling, Capturing & Delegation
- **Study:** The 3 phases of an event: capturing, target, and bubbling; `e.stopPropagation()`; why event delegation is superior (attaching a single listener to the parent rather than 100 listeners to child items).
- **Practice:** Build a dynamic list where clicking any delete button removes its row using a single listener on `<ul>` checking `e.target.matches('.delete-btn')`.

#### Day 9 — Default Actions & `preventDefault()`
- **Study:** Browser default behaviors (link clicks, form submissions, right-click context menus); preventing defaults with `e.preventDefault()`; passive event listeners for scrolling performance.
- **Practice:** Build a custom tab component where clicking anchor links switches tabs without jumping the page URL.

#### Day 10 — Accessible Form Handling & The `FormData` API
- **Study:** Form events: `submit`, `input`, `change`, `focus`, `blur`; preventing form reload; reading form values in one pass with `new FormData(form)`; converting `FormData` to an object with `Object.fromEntries(formData)`.
- **Practice:** Build a registration form that captures all inputs into a clean JavaScript object on submission without manually querying every input element.

#### Day 11 — Real-Time Input Validation & Accessibility Feedback
- **Study:** Validating inputs on the `input` and `blur` events; showing dynamic error messages; setting `aria-invalid="true"` and `aria-describedby`; disabling submit buttons when inputs are invalid.
- **Practice:** Build a password strength validator that dynamically updates requirements (length, numbers, symbols) as the user types.

#### Day 12 — Week 2 Review & Mini-Project
- **Task:** Build a fully interactive Flashcard Quiz application with score tracking, next/previous buttons, and keyboard shortcuts (`Space` to flip, `ArrowRight` for next).

---

### Week 3: Persistence, Modals & Milestone Project

#### Day 13 — Web Storage API (`localStorage` & `sessionStorage`)
- **Study:** Storage limits (~5MB per origin); synchronous nature; methods (`setItem`, `getItem`, `removeItem`, `clear`); serializing objects with `JSON.stringify()` and deserializing with `JSON.parse()`; error handling quota exceeded.
- **Practice:** Build a user preferences module that remembers dark mode toggle state across browser reloads using `localStorage`.

#### Day 14 — Native HTML5 Modals with the `<dialog>` Element
- **Study:** The `<dialog>` element; opening modal with `dialog.showModal()` vs non-modal `dialog.show()`; closing with `dialog.close()`; built-in backdrop styling (`::backdrop`); native `Escape` key support.
- **Practice:** Build a confirmation modal dialog using `<dialog>` with accessible focus management and smooth backdrop styling.

#### Day 15 — Timers, Debouncing & Throttling Basics
- **Study:** `setTimeout` and `clearTimeout`; `setInterval` and `clearInterval`; the concept of debouncing (delaying execution until user stops typing) vs throttling.
- **Practice:** Write a reusable `debounce(fn, delay)` utility and apply it to a live search filter input.

#### Day 16 — Application Architecture: State-Driven UI
- **Study:** Separation of concerns in vanilla JS: Single Source of Truth (state object) → Render function (DOM updater) → Event listeners (actions that update state and trigger re-render).
- **Practice:** Refactor a todo list so all DOM updates flow strictly from a `state = { items: [] }` model through a single `render()` function.

#### Day 17 — Stage 04 Milestone Project: Interactive Web App (Architecture)
- **Task:** Choose and design your Stage 04 project (e.g., Kanban Board or Interactive Bookmark Manager). Plan the HTML structure, CSS layout, and state schema.

#### Day 18 — Stage 04 Milestone Project: Implementation & Polish
- **Task:** Implement full CRUD operations, event delegation, `localStorage` persistence, and keyboard accessibility. Test edge cases and deploy to GitHub Pages or Netlify.

---

## 11. Suggested Time Limits

- **Daily Study Time:** 90 minutes.
  - 30 minutes: JavaScript.info reading and DevTools inspection.
  - 45 minutes: Active coding of DOM interactions.
  - 15 minutes: Anki flashcard reviews and progress logging.
- **Total Stage Commitment:** 18 study days × 90 minutes = 27 hours of focused browser programming practice.

---

## 12. Practice Tasks

1. **Event Delegation Drill:** Create a `<ul>` with no children. Add a button that appends new `<li>` elements. Verify that a single event listener on the `<ul>` reliably detects clicks on dynamically added list items.
2. **Safe Element Creator:** Write a helper function `createElement(tag, attributes, ...children)` that creates elements safely without using `innerHTML`.
3. **Storage Fallback Wrapper:** Write a storage helper with `get(key)` and `set(key, value)` that wraps calls in `try...catch` and gracefully falls back to an in-memory `Map` if `localStorage` is disabled.
4. **Custom Debounced Filter:** Implement an interactive contact search input that filters a list of 100 names only after the user pauses typing for 300ms.

---

## 13. Mini-Projects

1. **Interactive Tip Calculator:** Calculate tip percentages, split bills between people, and update totals in real time with input validation.
2. **Accessible Toast Notification System:** A floating notification manager that triggers auto-dismissing toast alerts (`setTimeout`) with a close button and progress bar.
3. **Stage 04 Milestone Project: Interactive Kanban / Task Board**
   - Columns for "To Do", "In Progress", and "Done".
   - Add new cards with titles, descriptions, and priority tags.
   - Move cards between columns.
   - Edit card content inline or via modal.
   - Persist all board columns and cards in `localStorage`.
   - Full keyboard accessibility and clean responsive styling.

---

## 14. Common Mistakes

| Common Mistake | Why It Causes Bugs or Security Flaws | How to Fix It |
|----------------|--------------------------------------|---------------|
| **Injecting Untrusted Input with `innerHTML`** | Vulnerable to Cross-Site Scripting (XSS) attacks. | Use `textContent` for plain text, or sanitize input before inserting. |
| **Adding Event Listeners in a Loop** | Attaching individual listeners to 500 list items wastes memory and breaks on new items. | Use **event delegation**: attach a single listener to the parent container. |
| **Forgetting to Call `e.preventDefault()` on Form Submit** | The browser submits via HTTP GET/POST and reloads the page, wiping all state. | Always start form submit handlers with `e.preventDefault()`. |
| **Storing Non-String Values Directly in `localStorage`** | `localStorage.setItem('user', { id: 1 })` converts the object to the string `"[object Object]"`. | Always serialize: `JSON.stringify(data)` and deserialize: `JSON.parse(data)`. |
| **Querying the DOM Repeatedly Inside Loops** | Querying the DOM in tight loops causes severe layout thrashing and slows down the UI. | Cache queries outside loops or use `DocumentFragment`. |

---

## 15. Debugging Guidance

When your browser JavaScript is not interacting with the page as expected:
1. **Verify Element Existence:** Check if your query selector returned `null`:
   ```javascript
   const btn = document.querySelector('.submit-btn');
   if (!btn) console.error('Button not found! Check your CSS selector spelling.');
   ```
2. **Inspect Event Bubbling:** Log `e.target` and `e.currentTarget` inside event handlers:
   ```javascript
   console.log('Clicked element (target):', e.target);
   console.log('Listener holder (currentTarget):', e.currentTarget);
   ```
3. **Inspect LocalStorage in DevTools:** Open DevTools → *Application* tab → *Storage* → *Local Storage* → click your domain to view, edit, or delete stored keys in real time.
4. **Break on DOM Mutation:** In the Elements panel, right-click any element → *Break on* → *Subtree modifications* to pause the debugger the exact millisecond JavaScript modifies that element.

---

## 16. AI Usage Guidance

- **Effective Prompts:**
  - *"Explain why event delegation is more memory-efficient than individual listeners."*
  - *"How does the browser event loop handle UI rendering and requestAnimationFrame?"*
  - *"What are the security implications of innerHTML vs textContent?"*
- **What to Avoid:**
  - Do not ask AI to generate the DOM code for your Kanban project. You must write the event handlers, element creation, and storage logic by hand to develop muscle memory.

---

## 17. Completion Checklist

Before moving to Stage 05, verify:
- [ ] Completed all 18 daily lessons and hands-on coding exercises.
- [ ] Created 75+ Anki flashcards covering DOM methods, event propagation, and browser storage.
- [ ] Successfully built, tested, and deployed the Stage 04 Milestone Project.
- [ ] Can explain the difference between `e.target` and `e.currentTarget` clearly.
- [ ] Can save, retrieve, and handle errors with `localStorage` safely.
- [ ] Updated `progress/README.md` for Stage 04.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for [Stage 05: Asynchronous JavaScript](05-async-javascript.md) when:
1. You can build an interactive UI widget (like a modal, accordion, or tab switcher) in vanilla JavaScript without looking at a tutorial.
2. You instinctively use event delegation on dynamic lists.
3. You know how to update the DOM based on a clean internal state object.

---

## 19. Suggested Next Step

Proceed to **[Stage 05: Asynchronous JavaScript — Mastering Async Patterns](05-async-javascript.md)** to connect your browser applications to external REST APIs and live web data!

---

## 20. Further References

- [JavaScript.info DOM Guide](https://javascript.info/document) — Complete reference for DOM manipulation.
- [MDN Web APIs Overview](https://developer.mozilla.org/en-US/docs/Web/API) — Index of all native browser capabilities.