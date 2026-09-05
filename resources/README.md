# Resources Guide

> **A curated catalog of the world's best free learning resources for frontend engineering.**  
> Designed to provide maximum conceptual depth without overwhelming you with endless tutorials.

---

## The Resource Philosophy

1. **One Primary Resource First:**
   For every stage and topic, we designate **one primary resource**. Work through it completely before consulting alternatives. Jumping between multiple tutorials gives a false sense of productivity while delaying hands-on coding.
2. **Official Documentation as Authoritative Reference:**
   Modern frontend frameworks and browser APIs evolve quickly. We train you from Day 1 to reference official documentation (MDN, React.dev, TypeScript Handbook, Nextjs.org) rather than outdated blog posts or videos.
3. **Practice Over Consumption:**
   Reading or watching a tutorial accounts for only 20% of the learning process. The remaining 80% happens when you close the tutorial, open a blank code editor, and write the code yourself.

---

## Stage-to-Resource Mapping Table

| Stage | Stage Title | Primary Learning Resource | Alternative Resource | Official Reference | Interactive Practice |
|:-----:|-------------|---------------------------|----------------------|--------------------|----------------------|
| **00** | [How to Study](00-how-to-study.md) | [Learning How to Learn (Coursera)](https://www.coursera.org/learn/learning-how-to-learn) | [Make It Stick (Book)](https://makeitstick.net/) | [Anki Documentation](https://docs.ankiweb.net/) | [Anki Spaced Repetition](https://apps.ankiweb.net/) |
| **01** | [HTML & CSS](01-html-css.md) | [MDN Learn Web Development (HTML/CSS)](https://developer.mozilla.org/en-US/docs/Learn) | [freeCodeCamp Responsive Web Design](https://www.freecodecamp.org/learn/2022/responsive-web-design/) | [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML) / [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS) | [Frontend Mentor Challenges](https://www.frontendmentor.io/challenges) |
| **02** | [JavaScript Fundamentals](02-javascript-fundamentals.md) | [JavaScript.info — The JavaScript Language](https://javascript.info/) | [freeCodeCamp JavaScript Algorithms](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) | [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) | [Codewars (8–7 kyu)](https://www.codewars.com/) |
| **03** | [Modern JavaScript](03-modern-javascript.md) | [JavaScript.info — Part 1 (Objects & Functions)](https://javascript.info/) | [MDN ES6+ Features & Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | [ECMAScript Language Spec (ECMA-262)](https://tc39.es/ecma262/) | [ES6 Katas](https://es6katas.org/) |
| **04** | [DOM & Browser APIs](04-dom-browser-apis.md) | [JavaScript.info — Document, Events, Interfaces](https://javascript.info/document) | [MDN Working with the DOM](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) | [MDN Web APIs Reference](https://developer.mozilla.org/en-US/docs/Web/API) | [Frontend Mentor Junior Projects](https://www.frontendmentor.io/challenges?difficulties=junior) |
| **05** | [Asynchronous JavaScript](05-async-javascript.md) | [JavaScript.info — Promises & async/await](https://javascript.info/async) | [MDN Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) | [MDN Fetch API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) | [Public APIs Directory](https://github.com/public-apis/public-apis) |
| **06** | [Git & GitHub](06-git-github.md) | [GitHub Skills Interactive Courses](https://skills.github.com/) | [Pro Git Book (Free Online)](https://git-scm.com/book/en/v2) | [Git Official Documentation](https://git-scm.com/doc) | [Learn Git Branching (Visual Game)](https://learngitbranching.js.org/) |
| **07** | [React Fundamentals](07-react.md) | [React Official Tutorial (react.dev/learn)](https://react.dev/learn) | [Scrimba Learn React Free Course](https://scrimba.com/learn/learnreact) | [React Official API Reference](https://react.dev/reference/react) | [Frontend Mentor React Projects](https://www.frontendmentor.io/challenges) |
| **08** | [React Hooks & Advanced](08-react-hooks.md) | [React.dev Hooks In-Depth Guide](https://react.dev/reference/react/hooks) | [Epic React by Kent C. Dodds (Articles)](https://kentcdodds.com/blog) | [React.dev Reference Manual](https://react.dev/reference/react) | [React Hooks Katas & Mini-Apps](https://react.dev/learn/reusing-logic-with-custom-hooks) |
| **09** | [Portfolio Projects](09-projects.md) | [Frontend Mentor Real-World Challenges](https://www.frontendmentor.io/challenges) | [freeCodeCamp Certified Projects](https://www.freecodecamp.org/learn/) | [W3C Accessibility Guidelines (WCAG 2.1)](https://www.w3.org/WAI/standards-guidelines/wcag/) | [Vercel & GitHub Pages Deployment](https://vercel.com/) |
| **10** | [TypeScript](10-typescript.md) | [TypeScript Official Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) | [TypeScript Deep Dive (Basarat)](https://basarat.gitbook.io/typescript/) | [TypeScript Reference Manual](https://www.typescriptlang.org/docs/) | [Type Challenges (Beginner Track)](https://github.com/type-challenges/type-challenges) |
| **11** | [Next.js](11-nextjs.md) | [Next.js Official Learn Course](https://nextjs.org/learn) | [Next.js Documentation Guides](https://nextjs.org/docs) | [Next.js App Router API Reference](https://nextjs.org/docs/app/api-reference) | [Vercel Next.js Starter Templates](https://vercel.com/templates/next.js) |

---

## Detailed Guide to Primary Platforms

### 1. MDN Web Docs (Mozilla Developer Network)
- **What it is:** The definitive, industry-standard documentation for HTML, CSS, JavaScript, and Web APIs.
- **How to use it:** Use MDN as your technical dictionary. When you encounter a CSS property (e.g., `grid-template-columns`) or JavaScript method (e.g., `Array.prototype.slice()`), search `MDN [topic]` to inspect exact syntax, parameter descriptions, edge cases, and browser compatibility tables.
- **What NOT to do:** Do not attempt to read MDN linearly like a textbook.

### 2. JavaScript.info
- **What it is:** The most lucid, comprehensive, and conceptually accurate JavaScript guide available on the internet.
- **How to use it:** Read through the assigned chapters sequentially. Solve every "Task" at the bottom of each page without looking at the solution first. Run the code snippets in your browser console or Node.js environment.
- **What NOT to do:** Do not skip the tasks. The tasks test edge cases and common traps.

### 3. React Documentation (react.dev)
- **What it is:** The official React documentation rewritten specifically for modern functional components and hooks.
- **How to use it:** Work through the interactive sandboxes on `react.dev/learn`. The interactive challenges at the end of each page provide immediate feedback on component lifecycle and state management.
- **What NOT to do:** Avoid third-party React tutorials written prior to 2023 that still teach legacy class components (`componentDidMount`, etc.).

### 4. TypeScript Handbook (typescriptlang.org)
- **What it is:** The official guide explaining TypeScript's type system, inference rules, and compiler flags.
- **How to use it:** Study the chapters on Primitive Types, Everyday Types, Interfaces, Generics, and Narrowing. Practice with TypeScript in strict mode (`"strict": true`) from day one.

### 5. Next.js Learn (nextjs.org/learn)
- **What it is:** An interactive project-based course built by the creators of Next.js that teaches the App Router, React Server Components, server actions, and deployment.
- **How to use it:** Follow the tutorial to build the full-stack dashboard application step-by-step.

### 6. W3Schools & GeeksforGeeks
- **What they are:** Quick-reference portals offering bite-sized syntax snippets and algorithmic explanations.
- **How to use them:** Great for a rapid 30-second refresher on syntax or a high-level explanation of an algorithm.
- **What NOT to do:** Do not rely on them as primary deep-dive resources, as explanations can lack architectural nuance compared to MDN or JavaScript.info.

---

## What to Do When You Get Stuck

1. **Check the DevTools Console:** Look at the exact error message and line number. 90% of bugs tell you exactly what went wrong.
2. **Search MDN or Official Docs:** Verify whether the API method is spelled correctly and accepts the arguments you are passing.
3. **Use the 20-Minute Rule:** Struggle actively with a bug for at least 20 minutes before looking up a solution or asking an AI tutor. The cognitive effort spent trying different hypotheses is what builds real debugging skill.
4. **Explain It to the Rubber Duck:** Walk through your code line-by-line out loud. Explaining each line often immediately reveals your false assumptions.