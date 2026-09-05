# Stage 09: Portfolio Projects — Applying Everything

> **Duration:** 3 weeks (18 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Intermediate  
> **Prerequisites:** [Stage 01](01-html-css.md) through [Stage 08](08-react-hooks.md) completed; you have mastered HTML/CSS layouts, JavaScript programming, DOM APIs, async networking, and the React ecosystem.

---

## 1. What This Stage Teaches

This stage shifts you from structured exercises to professional, self-directed product engineering by constructing **three distinct, production-grade portfolio projects**:
- **Project 1 (Week 1):** High-Converting Responsive Marketing Landing Page (HTML5, Modern CSS, CSS Grid/Flexbox, accessible navigation, micro-animations, and vanilla JS interactions).
- **Project 2 (Week 2):** Interactive REST API Data Dashboard (React, Vite, client-side routing, custom data-fetching hooks, search debouncing, filtering, dark mode via Context, and loading skeletons).
- **Project 3 (Week 3):** Full-Featured CRUD Web Application (React, persistent backend with Supabase or Firebase, authentication, protected routes, and optimistic UI updates).
- **Production Readiness & Polish:** Comprehensive documentation (`README.md`), automated deployments (Vercel/Netlify), Lighthouse performance audits (90+ on all metrics), WCAG accessibility compliance, and clean Git commit histories.

---

## 2. Why This Stage Matters

Tutorials and guided exercises give you technical knowledge, but **projects prove your capabilities**. Hiring managers, tech leads, and freelance clients do not review certificates; they review deployed applications and GitHub source code.

This dedicated project stage ensures you synthesize everything learned in Stages 01–08 into a cohesive, public engineering portfolio. You will face and overcome the real challenges of software engineering: product planning, architecture decisions, edge-case bugs, responsive testing across real mobile devices, and writing documentation that explains *why* you built what you built.

---

## 3. Prerequisites

- Complete mastery of semantic HTML, Flexbox, and CSS Grid from [Stage 01](01-html-css.md).
- ES6+ JavaScript, DOM APIs, and Async Fetch from [Stages 02–05](02-javascript-fundamentals.md).
- Git branching, atomic commits, and GitHub management from [Stage 06](06-git-github.md).
- React components, hooks (`useState`, `useEffect`, `useReducer`), Context, and React Router from [Stages 07–08](07-react.md).

---

## 4. What to Install or Prepare

1. **Deployment Accounts:** Free accounts on [Vercel](https://vercel.com/) and [Netlify](https://www.netlify.com/) connected to your GitHub account.
2. **Backend-as-a-Service Account:** A free account on [Supabase](https://supabase.com/) or [Firebase](https://firebase.google.com/) for Project 3 authentication and database persistence.
3. **Lighthouse Extension / Chrome DevTools:** To audit performance, accessibility, best practices, and SEO.

---

## 5. Learning Objectives

By the end of this 3-week stage, you will:
- [ ] Translate design mockups into pixel-perfect, accessible, and responsive web pages.
- [ ] Architect a multi-page React application with global state management and persistent authentication.
- [ ] Handle asynchronous network states gracefully with skeletons, empty states, and retry prompts.
- [ ] Write professional GitHub `README.md` files featuring live URLs, architecture diagrams, and tech stack badges.
- [ ] Optimize web assets to achieve 90+ Lighthouse scores across Performance, Accessibility, and SEO.
- [ ] Deploy three complete, production-ready applications live to the internet.

---

## 6. Recommended Learning Order

- **Week 1 (Days 1–6):** *Portfolio Project 1:* Responsive Business / Product Marketing Landing Page (HTML, Modern CSS, Vanilla JS).
- **Week 2 (Days 7–12):** *Portfolio Project 2:* Interactive Analytics / API Data Dashboard (React, Vite, REST API, Context).
- **Week 3 (Days 13–18):** *Portfolio Project 3:* Full-Stack Feature-Rich CRUD Web Application (React, Supabase/Firebase, Auth, Protected Routes).

---

## 7. Primary Learning Resources

- **Project Challenges & Specs:** [Frontend Mentor Challenges](https://www.frontendmentor.io/challenges)
  - Choose one challenge for each category:
    - *HTML/CSS:* Premium landing page (e.g., "Manage Landing Page" or "Bookmark Landing Page").
    - *React & API:* Data-driven application (e.g., "REST Countries API with Color Theme Switcher" or "GitHub User Search App").
    - *Full App:* Interactive application (e.g., "Kanban Task Management Web App" or "Entertainment Web App").

---

## 8. Alternative Resources

- **freeCodeCamp Project Specifications:** [freeCodeCamp Frontend Development Projects](https://www.freecodecamp.org/learn/) (use the user stories and test criteria).
- **Design Inspiration:** [Dribbble](https://dribbble.com/) and [Mobbin](https://mobbin.com/) for mobile UI patterns and interaction inspiration.

---

## 9. Official Documentation

- [W3C Web Content Accessibility Guidelines (WCAG 2.1)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Vercel Deployment Documentation](https://vercel.com/docs)
- [Supabase JavaScript Client Docs](https://supabase.com/docs/reference/javascript/introduction)

---

## 10. Topic-by-Topic Study Sequence

### Week 1: Project 1 — Responsive Marketing Landing Page (HTML, CSS, JS)

#### Day 1 — Project Planning, Wireframing & Design Tokens
- **Tasks:** Choose your landing page concept (e.g., modern SaaS product or creative agency). Define typography, color palette, and spacing scale in `css/tokens.css`. Initialize a new Git repository.
- **Deliverable:** Wireframe diagram and basic HTML skeleton with semantic landmarks (`header`, `nav`, `main`, `sections`, `footer`).

#### Day 2 — Mobile-First Layout & Semantic Sections
- **Tasks:** Build the mobile layout for the Hero section, Feature Highlights grid, and Social Proof testimonials using Flexbox and semantic markup.
- **Deliverable:** Fully responsive mobile structure (375px) with zero horizontal overflow.

#### Day 3 — Desktop Layout & Responsive Grid
- **Tasks:** Implement desktop breakpoints (`min-width: 768px` and `min-width: 1024px`) using CSS Grid. Add multi-column feature cards and a responsive footer.
- **Deliverable:** Polished desktop view matching design specifications.

#### Day 4 — Interactive Features with Vanilla JavaScript
- **Tasks:** Build an accessible mobile hamburger navigation drawer (with focus trapping and `aria-expanded`), an accordion FAQ section, and a testimonial carousel.
- **Deliverable:** Fully functional interactive UI widgets with clean event delegation.

#### Day 5 — Accessible Contact Form & Micro-Interactions
- **Tasks:** Add a newsletter / lead capture form with instant regex validation and success feedback. Add subtle hover transitions and button press micro-interactions.
- **Deliverable:** Validated form with keyboard accessibility.

#### Day 6 — Audit, Polish & Live Deployment
- **Tasks:** Run Chrome Lighthouse audits. Optimize images with WebP formats. Add OpenGraph social share meta tags. Deploy live to GitHub Pages or Netlify. Craft a comprehensive `README.md`.
- **Deliverable:** **Project 1 Live & Public on GitHub.**

---

### Week 2: Project 2 — Interactive REST API Data Dashboard (React)

#### Day 7 — Project 2 Architecture & Vite Setup
- **Tasks:** Initialize a new React project with Vite. Set up project structure (`components/`, `hooks/`, `context/`, `services/`). Connect to a public REST API (e.g., REST Countries API or OpenWeather API).
- **Deliverable:** Working API client module and basic app shell.

#### Day 8 — Component Tree & Data Fetching
- **Tasks:** Build custom `useFetch` hook handling loading states and errors. Render the primary dashboard grid of data cards with responsive CSS Grid.
- **Deliverable:** Data rendered dynamically from the remote API.

#### Day 9 — Search, Filter & Debouncing
- **Tasks:** Add a search input with debouncing to prevent excessive API requests. Implement region/category filter dropdowns and multi-criteria sorting.
- **Deliverable:** Instant, responsive client-side filtering without lag.

#### Day 10 — Detailed View & Client-Side Routing
- **Tasks:** Integrate React Router (`react-router-dom`). Build a detail page (`/item/:id`) that fetches and displays in-depth statistics, charts, or maps.
- **Deliverable:** Multi-page SPA with deep linking and back-button navigation.

#### Day 11 — Global Theme Context & Polish
- **Tasks:** Implement a global `ThemeContext` allowing users to toggle between Light and Dark themes. Add animated loading skeleton cards to eliminate layout shift.
- **Deliverable:** Polished theme toggle and smooth asynchronous state transitions.

#### Day 12 — Audit, Documentation & Vercel Deployment
- **Tasks:** Test edge cases (offline mode, invalid API queries). Author a thorough `README.md` with screenshots and API attribution. Deploy to Vercel.
- **Deliverable:** **Project 2 Live & Public on GitHub.**

---

### Week 3: Project 3 — Full-Featured CRUD Web Application

#### Day 13 — Project 3 Concept & Database Schema
- **Tasks:** Plan a feature-rich web app (e.g., Kanban Task Board, Personal Finance Manager, or Recipe Vault). Set up Supabase or Firebase backend with tables and Row-Level Security (RLS).
- **Deliverable:** Working backend project and database connection in React.

#### Day 14 — User Authentication & Protected Routes
- **Tasks:** Implement User Registration and Login using Supabase/Firebase Auth. Store user session in an `AuthContext`. Build a `<ProtectedRoute>` wrapper that guards private dashboard routes.
- **Deliverable:** Secure authentication flow with redirects.

#### Day 15 — Full CRUD Operations
- **Tasks:** Implement Create, Read, Update, and Delete operations. Allow users to add items, edit existing details inline, and delete items with confirmation dialogs.
- **Deliverable:** Fully functional CRUD interface connected to the cloud database.

#### Day 16 — Optimistic UI Updates & Error Boundaries
- **Tasks:** Implement optimistic UI updates (updating the local React state instantly before the server request completes, rolling back on error). Add React Error Boundaries.
- **Deliverable:** Ultra-fast, responsive user experience with graceful error handling.

#### Day 17 — Advanced Features & Responsive Polish
- **Tasks:** Add search filters, data sorting, image upload support, and responsive mobile adaptations. Perform end-to-end testing across Chrome, Firefox, and Safari.
- **Deliverable:** Feature-complete, tested application.

#### Day 18 — Capstone Launch, Documentation & Portfolio Integration
- **Tasks:** Write an engineering-focused `README.md` detailing architecture, database schema, security rules, and setup instructions. Deploy live to Vercel. Add all 3 projects to your GitHub Profile README.
- **Deliverable:** **Project 3 Live & Complete Portfolio Showcase!**

---

## 11. Suggested Time Limits

- **Daily Study Time:** 90 minutes.
  - 15 minutes: Planning and architecture design.
  - 60 minutes: Active component development and feature implementation.
  - 15 minutes: Testing edge cases, committing code, and updating progress logs.
- **Total Stage Commitment:** 18 study days × 90 minutes = 27 hours of intensive product engineering.

---

## 12. Practice Tasks

1. **Lighthouse Optimization Drill:** Run Lighthouse on your Project 1. Identify any score below 90, fix the issue (e.g., contrast, missing alt tags, uncompressed images), and re-audit until all metrics turn green.
2. **README Writing Drill:** Write a 300-word `README.md` for a project including: Project Title, Live URL, 2-sentence Problem Statement, Architecture Decisions, Tech Stack table, and Local Setup commands.
3. **Optimistic Update Exercise:** Write a React state updater that immediately removes an item from an array when the user clicks "Delete", fires the API `DELETE` request in the background, and restores the item with an error alert if the network fails.
4. **Cross-Browser Testing Drill:** Test all 3 projects on both a desktop browser and an actual mobile smartphone (or mobile device emulation). Verify touch targets are at least 44x44px.

---

## 13. Mini-Projects

The entirety of Stage 09 is dedicated to these 3 major flagship portfolio projects:
1. **Portfolio Project 1:** *Responsive Marketing Landing Page* (HTML, Modern CSS, Vanilla JS)
2. **Portfolio Project 2:** *Interactive REST API Data Dashboard* (React, React Router, Context API, REST API)
3. **Portfolio Project 3:** *Full-Featured Cloud CRUD Web Application* (React, Supabase/Firebase Auth & Database, Protected Routes, Optimistic UI)

---

## 14. Common Mistakes

| Common Mistake | Why It Harms Your Portfolio | How to Fix It |
|----------------|-----------------------------|---------------|
| **Building Generic Clones with No Originality** | Recruiters have seen 1,000 identical Netflix clones; they ignore them. | Customize branding, add unique features, and solve a specific user problem. |
| **Broken Live Deployment Links** | A portfolio link that returns a 404 or white screen guarantees immediate rejection. | Verify your live Vercel/Netlify URLs before adding them to your portfolio. |
| **Empty or Default README Files** | Leaving the default Vite `README.md` looks amateurish and unmotivated. | Write comprehensive documentation explaining architecture, choices, and features. |
| **Neglecting Mobile Viewports** | Over 60% of web traffic is mobile. Broken mobile layouts immediately disqualify a frontend developer. | Test every single page on a 375px mobile viewport from Day 1. |
| **Exposing Private API Keys / Service Secrets** | Committing private backend service keys to public GitHub repos leads to security breaches. | Use `.env.local` files and make sure they are included in `.gitignore`. |

---

## 15. Debugging Guidance

When encountering bugs in production deployments:
1. **Inspect Vercel / Netlify Build Logs:** If a deployment fails, open the build log in your hosting dashboard. 95% of build failures are caused by missing dependencies, incorrect file path casing (Linux environments are case-sensitive), or lint errors.
2. **Check CORS and HTTPS Errors:** If an API works locally but fails in production, check whether your production site is HTTPS while calling an insecure `http://` API, or whether the API requires CORS headers.
3. **Test with Network Throttling:** In DevTools Network tab, switch throttling to *Slow 3G* to verify that loading skeletons display properly and UI elements do not flicker.

---

## 16. AI Usage Guidance

- **Effective Prompts:**
  - *"How can I structure this Supabase Row Level Security (RLS) policy so users can only read and write their own rows?"*
  - *"Review my project README for clarity, technical depth, and presentation."*
  - *"What are some creative edge cases I should test for this e-commerce checkout flow?"*
- **What to Avoid:**
  - Do not ask AI to generate the applications for you. The entire value of portfolio projects is that you understand every single line of code because you wrote it yourself.

---

## 17. Completion Checklist

Before moving to Stage 10, verify:
- [ ] Completed all 18 daily project milestones.
- [ ] Project 1 (Landing Page) built, tested, and deployed with a 95+ Lighthouse score.
- [ ] Project 2 (API Dashboard) built, tested, and deployed with client-side routing and dark mode.
- [ ] Project 3 (Full-Stack CRUD App) built, tested, and deployed with working user authentication.
- [ ] Every project repository has a professional `README.md` with live demo links and screenshots.
- [ ] Pinned all 3 flagship projects to your public GitHub profile.
- [ ] Updated `progress/README.md` for Stage 09.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for [Stage 10: TypeScript](10-typescript.md) when:
1. You have 3 live, working, publicly accessible web applications that you are proud to show a potential employer.
2. You can explain the technical architecture and design trade-offs of your applications during an interview.
3. You feel comfortable architecting React components and managing asynchronous data flows.

---

## 19. Suggested Next Step

Proceed to **[Stage 10: TypeScript — Type-Safe JavaScript](10-typescript.md)** to add industry-standard static typing to your React applications!

---

## 20. Further References

- [Frontend Mentor](https://www.frontendmentor.io/) — Realistic professional UI design challenges.
- [Make a README](https://www.makeareadme.com/) — Guide to authoring clear, informative repository documentation.
- [Google Web Vitals](https://web.dev/vitals/) — Essential metrics for healthy, high-performance web applications.