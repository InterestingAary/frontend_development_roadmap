# Stage 01: HTML & CSS — Building the Web's Foundation

> **Duration:** 3 weeks (18 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Beginner  
> **Prerequisites:** [Stage 00: How to Study](00-how-to-study.md) completed; learning environment and Anki configured.

---

## 1. What This Stage Teaches

This stage teaches you how to construct and style modern, responsive, accessible web pages from scratch using pure HTML5 and CSS3:
- Semantic HTML5 document structure, landmark elements (`header`, `nav`, `main`, `article`, `section`, `aside`, `footer`), and text semantics.
- Accessible form controls, input types, client-side validation attributes, and `<label>` associations.
- The CSS box model (content, padding, border, margin), `box-sizing: border-box`, the cascade, and specificity rules.
- Modern CSS layout engines: **Flexbox** (1D alignment) and **CSS Grid** (2D grid systems).
- Mobile-first responsive web design with media queries, fluid typography (`clamp()`), and responsive images (`<picture>`, `srcset`).
- Web accessibility (a11y) fundamentals, WCAG 2.1 contrast guidelines, keyboard focus indicators, and semantic ARIA attributes.
- CSS custom properties (variables), modern pseudo-classes (`:is()`, `:where()`, `:has()`), transitions, and keyframe animations.

---

## 2. Why This Stage Matters

HTML and CSS are the **only two presentation languages browsers understand natively**. Every frontend framework—whether React, Next.js, Vue, or Svelte—ultimately outputs HTML and CSS to the browser.

Skipping or rushing HTML and CSS leads to crippling issues later: unmaintainable layouts, broken mobile views, inaccessible interfaces that exclude users with disabilities, and reliance on heavy CSS utility libraries without understanding what they do under the hood. Mastering HTML semantics and modern CSS layout fundamentals ensures you can turn any design into a fast, accessible, pixel-perfect web application.

---

## 3. Prerequisites

- Completion of [Stage 00: How to Study](00-how-to-study.md).
- Familiarity with basic file creation and folder organization on your computer.
- VS Code and a modern browser (Chrome or Firefox) installed.

---

## 4. What to Install or Prepare

1. **VS Code Extensions:**
   - **Live Server** (`ritwickdey.liveserver`) — Launches a local development server with auto-refresh on save.
   - **Prettier - Code Formatter** (`esbenp.prettier-vscode`) — Formats HTML and CSS cleanly.
   - **Auto Rename Tag** (`formulahendry.auto-rename-tag`) — Renames paired HTML tags automatically.
2. **Project Directory:**
   ```bash
   mkdir stage-01-web && cd stage-01-web
   ```
3. **Browser Bookmarks:**
   - [W3C HTML Validator](https://validator.w3.org/)
   - [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 5. Learning Objectives

By the end of this 3-week stage, you will:
- [ ] Write clean, valid, semantic HTML5 documents without relying on `<div>` soup.
- [ ] Understand and manipulate the CSS box model, margin collapse, and `box-sizing`.
- [ ] Confidently build layouts using **Flexbox** and **CSS Grid** without relying on floats or frameworks.
- [ ] Build responsive pages using a **mobile-first** approach that render beautifully on mobile phones, tablets, and desktops.
- [ ] Build accessible, keyboard-navigable forms with descriptive labels, fieldsets, and validation feedback.
- [ ] Use CSS custom properties (variables) to create a maintainable design token system (colors, typography, spacing).
- [ ] Inspect, debug, and diagnose layout bugs using the browser DevTools Elements panel.
- [ ] Build and deploy a complete multi-page responsive business website from scratch.

---

## 6. Recommended Learning Order

- **Week 1 (Days 1–6):** HTML5 structure, semantic landmarks, text elements, media, the CSS box model, cascade, specificity, and positioning.
- **Week 2 (Days 7–12):** Flexbox in-depth, CSS Grid in-depth, responsive design principles, media queries, and real-world UI layout patterns.
- **Week 3 (Days 13–18):** Accessible HTML forms, accessibility (WCAG), CSS variables, transitions, animations, and the Stage 01 milestone project.

---

## 7. Primary Learning Resources

- **Primary Resource for HTML:** [MDN Web Docs — Learn HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
  - Work through: *Introduction to HTML*, *HTML text fundamentals*, *Creating hyperlinks*, and *Multimedia and embedding*.
- **Primary Resource for CSS:** [MDN Web Docs — Learn CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
  - Work through: *CSS first steps*, *CSS building blocks (the box model & cascade)*, and *CSS layout (Flexbox & Grid)*.

---

## 8. Alternative Resources

- **Interactive Tutorial Track:** [freeCodeCamp — Responsive Web Design Certification](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
  - Offers a hands-on, in-browser code editor with step-by-step challenges and 5 required certification projects.
- **Visual Flexbox & Grid Guides:** [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

---

## 9. Official Documentation

- [MDN HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) — Comprehensive list of all HTML5 elements, attributes, and browser support.
- [MDN CSS Property Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) — Exhaustive documentation for every CSS property, selector, and pseudo-class.
- [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) — The international standard for accessible web design.

---

## 10. Topic-by-Topic Study Sequence

### Week 1: Semantic HTML & The CSS Box Model

#### Day 1 — HTML5 Document Structure & Semantics
- **Study:** `<!DOCTYPE html>`, `<html>`, `<head>`, `<meta charset="utf-8">`, `<meta name="viewport">`, `<title>`, `<body>`.
- **Landmarks:** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`.
- **Text Semantics:** `<h1>`–`<h6>` hierarchy (single `<h1>` per page), `<p>`, `<strong>`, `<em>`, `<blockquote>`, `<ul>`, `<ol>`, `<dl>`, `<a>`.
- **Practice:** Build a semantic blog article page without CSS. Validate at [validator.w3.org](https://validator.w3.org/).

#### Day 2 — CSS Box Model, Specificity & The Cascade
- **Study:** Content, padding, border, margin; `box-sizing: border-box`; vertical margin collapse; the cascade algorithm; selector specificity (Inline > IDs > Classes/Attributes > Elements).
- **Practice:** Create 3 nested boxes. Experiment with margin vs. padding, set up a standard reset (`* { box-sizing: border-box; margin: 0; }`), and inspect box dimensions in DevTools.

#### Day 3 — Typography, Colors & Modern Design Tokens
- **Study:** Font stacks, `font-family`, Google Fonts (`@import` vs `<link>`), `line-height`, `font-weight`, `rem` vs `em` vs `px`. Color formats (`hex`, `rgb`, `hsl`). CSS Custom Properties (`:root { --primary-color: #2563eb; }`).
- **Practice:** Create a typographic style guide with heading scales, body text, and custom properties for a cohesive color palette.

#### Day 4 — Media, Replaced Elements & Responsive Images
- **Study:** `<img>`, `alt` attributes for screen readers, `width`/`height` attributes to prevent Cumulative Layout Shift (CLS), `object-fit: cover`, `<picture>`, `srcset`, and `<figure>`/`<figcaption>`.
- **Practice:** Build an image gallery card with rounded corners, proper aspect ratios, and fallback captions.

#### Day 5 — CSS Normal Flow & Positioning
- **Study:** Normal document flow; `display` (`block`, `inline`, `inline-block`, `none`); `position` (`static`, `relative`, `absolute`, `fixed`, `sticky`); stacking context and `z-index`.
- **Practice:** Build a sticky navigation bar that stays fixed at the top of the viewport on scroll, and a card with an absolute-positioned badge.

#### Day 6 — Week 1 Review & Mini-Project
- **Task:** Build a single-page portfolio bio card incorporating semantic landmarks, design tokens, custom typography, and a sticky header. Audit using DevTools. Review Anki flashcards.

---

### Week 2: Flexbox, Grid & Responsive Layouts

#### Day 7 — Flexbox Fundamentals (1D Layout)
- **Study:** Flex container vs. flex items; main axis vs. cross axis; `flex-direction`, `justify-content`, `align-items`, `flex-wrap`, `gap`. Item properties: `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`.
- **Practice:** Play [Flexbox Froggy](https://flexboxfroggy.com/) (all 24 levels). Build a flexible responsive navigation bar with logo on the left and links on the right using `justify-content: space-between`.

#### Day 8 — CSS Grid Fundamentals (2D Layout)
- **Study:** Grid container vs. grid items; `grid-template-columns`, `grid-template-rows`, `fr` units, `repeat()`, `minmax()`, `gap`. Explicit vs. implicit grid. Grid template areas (`grid-template-areas`).
- **Practice:** Play [Grid Garden](https://cssgridgarden.com/) (all 28 levels). Build a 12-column responsive layout and a classic dashboard layout (header, sidebar, main content, footer).

#### Day 9 — Mobile-First Responsive Design & Media Queries
- **Study:** Why mobile-first? (`min-width` queries instead of `max-width`); standard responsive breakpoints (640px, 768px, 1024px, 1280px); responsive typography with `clamp()`.
- **Practice:** Take your Day 8 dashboard and convert it into a mobile-first responsive layout: single-column on mobile, two-column on tablet, full grid on desktop.

#### Day 10 — Advanced Layout Patterns
- **Study:** The auto-fit vs. auto-fill pattern: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`; flexbox wrapping card decks; preventing flex item overflow with `min-width: 0`.
- **Practice:** Build a responsive product card grid that reorganizes seamlessly from 1 to 2 to 3 to 4 columns without writing a single media query.

#### Day 11 — CSS Architecture & Reusable Utility Classes
- **Study:** Organizing stylesheets: reset, design tokens, base styles, layout components, utility classes; class naming conventions (BEM: Block-Element-Modifier basics); avoiding deep nesting.
- **Practice:** Refactor your CSS files into a structured folder hierarchy (`css/tokens.css`, `css/base.css`, `css/components.css`).

#### Day 12 — Week 2 Review & Layout Challenge
- **Task:** Complete a [Frontend Mentor Newbie Challenge](https://www.frontendmentor.io/challenges?difficulties=newbie) (e.g., "Product Preview Card Component" or "Results Summary Component"). Match the design spec precisely.

---

### Week 3: Forms, Accessibility, Animation & Stage Project

#### Day 13 — Semantic, Accessible HTML Forms
- **Study:** `<form>`, `<label>` with `for` attribute, `<input>` types (`text`, `email`, `password`, `number`, `checkbox`, `radio`), `<textarea>`, `<select>`, `<fieldset>`, `<legend>`, `<button type="submit">`. Validation attributes: `required`, `pattern`, `minlength`.
- **Practice:** Build a multi-section registration form with proper input types, validation attributes, and visual focus states (`:focus-visible`).

#### Day 14 — Web Accessibility (a11y) & WCAG Fundamentals
- **Study:** Screen readers; keyboard navigation (`Tab`, `Shift+Tab`, `Enter`, `Space`); focus rings and `:focus-visible`; color contrast ratios (minimum 4.5:1 for normal text); ARIA attributes (`aria-label`, `aria-expanded`, `aria-hidden`).
- **Practice:** Perform a keyboard-only audit on your forms and navigation. Run an accessibility audit using Chrome DevTools Lighthouse. Score 100 on Accessibility.

#### Day 15 — CSS Transitions, Transforms & Animations
- **Study:** `transition` (`property`, `duration`, `timing-function`, `delay`); `transform` (`translate`, `scale`, `rotate`); `@keyframes` animations; respecting user preferences with `@media (prefers-reduced-motion: reduce)`.
- **Practice:** Add smooth hover transitions to buttons, an animated hamburger menu icon, and a subtle loading spinner using `@keyframes`.

#### Day 16 — Modern CSS Features & Polish
- **Study:** `:has()` parent selector, `:is()` and `:where()` grouping pseudo-classes; CSS scroll-behavior: smooth; backdrop-filter (glassmorphism); custom scrollbars.
- **Practice:** Experiment with `:has()` to highlight an entire card when an internal checkbox is checked.

#### Day 17 — Stage 01 Capstone Project: Architecture & Structure
- **Task:** Plan and build the semantic HTML structure for your multi-page responsive business website (Home, About, Contact). Set up design tokens in `tokens.css`.

#### Day 18 — Stage 01 Capstone Project: Styling, Polish & Deployment
- **Task:** Complete responsive styling across mobile, tablet, and desktop breakpoints. Audit with Lighthouse (target 95+ across all metrics). Deploy to GitHub Pages or Netlify.

---

## 11. Suggested Time Limits

- **Daily Study Time:** 90 minutes per day.
  - 30 minutes: Reading concept documentation on MDN.
  - 45 minutes: Active coding in VS Code.
  - 15 minutes: Inspecting in DevTools, reviewing Anki cards, and writing notes.
- **Total Stage Commitment:** 18 study days × 90 minutes = 27 hours of focused practice.

---

## 12. Practice Tasks

1. **The Pure HTML Article:** Write an entire 800-word blog post using only semantic HTML5 tags with zero CSS. Verify that the document outline is logical.
2. **The 3-Box Centering Drill:** Center a `<div>` inside another `<div>` using 3 distinct CSS methods:
   - Flexbox (`display: flex; justify-content: center; align-items: center;`)
   - CSS Grid (`display: grid; place-items: center;`)
   - Absolute positioning (`position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`)
3. **The Zero-Media-Query Grid:** Build a responsive card layout using `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` that works on all viewport sizes without `@media` queries.
4. **Keyboard-Only Form Test:** Navigate through your Day 13 form using only the `Tab` key and submit it using `Enter`. Ensure focus rings are clearly visible at all times.

---

## 13. Mini-Projects

1. **Component Challenge:** Build an e-commerce Product Card with an image, category badge, title, star rating, price, and "Add to Cart" button with smooth hover states.
2. **Pricing Table Component:** Build a 3-tier pricing component (Free, Pro, Enterprise) highlighting the "Pro" plan with a floating badge and enhanced shadow.
3. **Stage 01 Capstone Project: Responsive Business Website**
   - A fully responsive 3-page site (Home, About, Contact).
   - Clean BEM-style CSS or layered architecture (`reset.css`, `tokens.css`, `base.css`, `components.css`).
   - Accessible navigation with mobile dropdown menu.
   - Contact form with HTML5 validation and focus styles.
   - Deployed live on GitHub Pages, Vercel, or Netlify.

---

## 14. Common Mistakes

| Common Mistake | Why It Breaks Your Site | How to Fix It |
|----------------|-------------------------|---------------|
| **`<div>` Soup** | Using `<div>` for everything destroys accessibility and SEO. | Replace generic divs with `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`. |
| **Missing `box-sizing: border-box`** | Adding padding or border makes elements wider than their defined `width`, breaking layouts. | Add `*, *::before, *::after { box-sizing: border-box; }` at the top of your CSS reset. |
| **Desktop-First CSS** | Writing desktop styles first and overriding with `max-width` media queries leads to bloated, messy CSS. | Write base styles for mobile screens first; use `min-width` queries to progressively enhance for larger viewports. |
| **Removing Outline (`outline: none`)** | Stripping focus outlines prevents keyboard users from knowing which button or input is active. | Use `:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }` instead. |
| **Fixed Widths on Containers (`width: 1200px`)** | Causes horizontal scrollbars on screens smaller than 1200px. | Use `max-width: 1200px; width: 100%; margin-inline: auto;`. |
| **Failing to Provide Image Dimensions** | Browsers do not know image aspect ratios before download, causing layout shift. | Always include explicit `width` and `height` attributes on `<img>` tags. |

---

## 15. Debugging Guidance

When your CSS layout behaves unexpectedly:
1. **Inspect the Box Model:** Right-click the broken element → *Inspect*. Look at the colored box model diagram in the DevTools Styles panel (blue = content, green = padding, yellow = border, orange = margin).
2. **Identify Unwanted Overflow:** If a horizontal scrollbar appears, run this snippet in the browser console to highlight elements causing overflow:
   ```javascript
   document.querySelectorAll('*').forEach(el => {
     if (el.offsetWidth > document.documentElement.offsetWidth) console.log(el);
   });
   ```
3. **Debug Flex & Grid Visually:** In Chrome/Firefox DevTools, click the small `flex` or `grid` badges next to elements in the DOM tree. The browser will overlay lines showing tracks, gaps, and alignment axes.
4. **Trace Specificity Overrides:** Look at the crossed-out properties in the DevTools Styles tab to see which rule is overriding your style and why.

---

## 16. AI Usage Guidance

- **Effective Tutor Prompts:**
  - *"Why is my flex child shrinking even though I set width: 300px? (Explain flex-shrink)."*
  - *"Explain the difference between CSS Grid auto-fit and auto-fill with a simple visual example."*
  - *"Critique this HTML snippet for accessibility and WCAG compliance."*
- **What to Avoid:**
  - Do not ask AI to generate your CSS stylesheets or copy entire designs. Writing the rules yourself is the only way to build spatial layout intuition.

---

## 17. Completion Checklist

Before moving to Stage 02, verify:
- [ ] Completed all 18 daily lessons and hands-on coding tasks.
- [ ] Created 75+ Anki flashcards on HTML semantics, box model, Flexbox, and Grid.
- [ ] Built and deployed the 3-page responsive business website.
- [ ] Validated HTML using the W3C Validator with zero errors.
- [ ] Verified that the site works on mobile (375px), tablet (768px), and desktop (1280px) viewports.
- [ ] Passed a keyboard navigation test and achieved a 95+ Accessibility score on Lighthouse.
- [ ] Updated `progress/README.md` for Stage 01.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for [Stage 02: JavaScript Fundamentals](02-javascript-fundamentals.md) when:
1. You can look at a screenshot or wireframe and immediately visualize the Flexbox and Grid structure needed to build it.
2. You can build a responsive, centered multi-card grid without copying from an external tutorial.
3. You know why semantic HTML elements matter for screen readers and search engines.

---

## 19. Suggested Next Step

Proceed to **[Stage 02: JavaScript Fundamentals — The Language Core](02-javascript-fundamentals.md)** to add programming logic, state, and algorithmic problem-solving to your web skill set!

---

## 20. Further References

- [Every Layout](https://every-layout.dev/) — Reusable, mathematical CSS layout primitives by Heydon Pickering and Andy Bell.
- [A11y Project Checklist](https://www.a11yproject.com/checklist/) — The community-driven web accessibility checklist.
- [Can I Use](https://caniuse.com/) — Up-to-date browser compatibility tables for modern CSS and HTML features.