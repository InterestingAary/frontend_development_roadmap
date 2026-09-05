# START-HERE.md — Onboarding Guide

> **Welcome to the Frontend Development Roadmap (`frontend-development-roadmap`)!**  
> Read this guide completely before writing a single line of code or starting Stage 01.

---

## Quick Orientation

| Resource | Purpose |
|----------|---------|
| [`README.md`](README.md) | High-level curriculum overview, stage dependency order, and FAQ |
| [`ROADMAP.md`](ROADMAP.md) | Visual 35-week timeline, milestone deliverables, and stage-by-stage breakdown |
| [`resources/README.md`](resources/README.md) | Guide to external platforms (MDN, JavaScript.info, react.dev, etc.) |
| [`progress/README.md`](progress/README.md) | Your daily log and personal study progress tracker |
| [`resources/00-how-to-study.md`](resources/00-how-to-study.md) | **Stage 00 (Week 1)** — Study habits, Anki setup, and learning systems |

---

## 1. Required Software Setup

Before you start Stage 01, install the following tools on your machine:

| Tool | Recommended Version | Purpose | Download Link |
|------|--------------------|---------|---------------|
| **VS Code** | Latest Stable | Primary code editor | [code.visualstudio.com](https://code.visualstudio.com/) |
| **Node.js** | Current LTS (e.g., 20.x or 22.x) | JavaScript runtime & npm package manager | [nodejs.org](https://nodejs.org/) |
| **Git** | Latest Stable | Version control system | [git-scm.com](https://git-scm.com/) |
| **Google Chrome** or **Firefox** | Latest | Modern browser with Developer Tools | [google.com/chrome](https://www.google.com/chrome/) or [mozilla.org/firefox](https://www.mozilla.org/firefox/) |

### Verify Your Installations

Open your computer's terminal (PowerShell or Terminal on macOS/Linux) and run:

```bash
code --version
node --version
npm --version
git --version
```

If any command prints "command not found" or an error, restart your terminal or re-run the installer for that tool before proceeding.

### Recommended VS Code Extensions

Open VS Code, press `Ctrl+Shift+X` (or `Cmd+Shift+X` on macOS), and install these extensions:

- **Prettier - Code Formatter** (`esbenp.prettier-vscode`): Automatically formats your HTML, CSS, and JavaScript.
- **Live Server** (`ritwickdey.liveserver`): Launches a local development server with live reload for HTML/CSS pages.
- **ESLint** (`dbaeumer.vscode-eslint`): Identifies JavaScript bugs and style issues as you type.
- **Auto Rename Tag** (`formulahendry.auto-rename-tag`): Keeps opening and closing HTML tags in sync automatically.
- **Path Intellisense** (`christian-kohler.path-intellisense`): Autocompletes filenames and relative paths.

### Recommended VS Code Settings

Open your VS Code settings (`Ctrl+,` or `Cmd+,`), switch to JSON mode (top right icon), and add:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "files.autoSave": "afterDelay"
}
```

---

## 2. Basic Computer Skills Checklist

To succeed in this curriculum without frustration, make sure you are comfortable with:

- **File System Navigation:** Understanding relative paths (`./`, `../`, `/`), organizing folders, and file extensions (`.html`, `.css`, `.js`).
- **Terminal Basics:** Running commands, changing directories (`cd folder`), listing directory contents (`ls` or `dir`), and making folders (`mkdir`).
- **Browser Developer Tools:** Opening DevTools (`F12` or `Ctrl+Shift+I` / `Cmd+Option+I`), inspecting elements, and reading console errors.
- **Keyboard Shortcuts:** Copy (`Ctrl+C`), Paste (`Ctrl+V`), Undo (`Ctrl+Z`), Save (`Ctrl+S`), Find (`Ctrl+F`), Quick Open (`Ctrl+P`).

---

## 3. How to Use Browser Developer Tools (DevTools)

Browser DevTools will be your daily pair programmer. You will use them constantly:

1. **Elements / Inspector Panel:**
   - View the active DOM tree and CSS box model (content, padding, border, margin).
   - Test CSS changes live directly in the browser before saving them in your editor.
2. **Console Panel:**
   - Execute JavaScript expressions and test small logic snippets interactively.
   - Inspect errors, warnings, and `console.log()` statements.
3. **Network Panel:**
   - Inspect API HTTP requests, check request headers, response bodies, and HTTP status codes (`200 OK`, `404 Not Found`, `500 Server Error`).
4. **Application / Storage Panel:**
   - Inspect browser storage including `localStorage`, `sessionStorage`, and cookies.
5. **Sources Panel:**
   - Set breakpoints in your JavaScript code and step through execution line-by-line.

> **Daily Habit:** Always keep DevTools open side-by-side or docked to the right while building websites.

---

## 4. How to Use External Learning Resources

Every stage guide provides curated external learning links. To learn effectively without cognitive overload:

1. **One Primary Resource First:**
   - Each topic lists a **Primary Resource**. Work through it completely before touching alternatives.
2. **Type the Code (Never Copy-Paste):**
   - Active typing trains muscle memory and forces your brain to notice syntax details (semicolons, braces, quotes, capitalization).
3. **Use Documentation as a Dictionary, Not a Novel:**
   - MDN and official documentation are authoritative reference guides. Look up specific properties and APIs when you need them; do not attempt to memorize them cover-to-cover.
4. **Don't Resource Hop:**
   - If a concept feels difficult, spend 20 minutes re-reading the code or testing it in DevTools before switching tutorials. Jumping between 5 tutorials gives an illusion of productivity while delaying actual practice.

---

## 5. Study Methodology: How to Learn Effectively

Studying programming is different from memorizing facts for a school exam. You are building mental models and muscle memory.

### Active Recall & Spaced Repetition (Anki)
- Passive reading creates an **illusion of competence**. You feel like you understand because the text makes sense, but you cannot produce the code from memory.
- Install [Anki](https://apps.ankiweb.net/) during Stage 00. Create 3–5 flashcards every day covering syntax patterns, method signatures, and core concepts. Spend 10 minutes reviewing your Anki cards every morning.

### The Pomodoro Technique
- Programmers face intense cognitive load. Study in focused blocks: **25 minutes of deep focus + 5 minutes of rest**, or **50 minutes of focus + 10 minutes of rest**.
- During breaks, stand up, hydrate, and rest your eyes. Do not scroll social media during short breaks.

### The Feynman Technique
- If you cannot explain a concept in simple, jargon-free language to a beginner, you do not truly understand it yet.
- Test yourself: Explain what a closure is, why the CSS box model matters, or how a `fetch` promise works as if you were teaching a friend.

### How to Use AI Responsibly
- **Use AI as a patient tutor:** Ask AI: *"Can you explain how JavaScript closures work with a simple real-world analogy?"* or *"What does this error message mean: Cannot read properties of undefined (reading 'map')?"*
- **Never use AI as an auto-completer for your projects:** Having AI write your practice assignments or project code will completely rob you of the problem-solving reps necessary to become a competent developer. Always write your own code first.

---

## 6. Time Expectations and Pacing

The curriculum comprises **35 weeks (210 daily study lessons)** at **90 minutes per day**:

- **Standard Pace (Recommended):** 35 weeks (~8.5 months) — 9–12 hours/week (1.5–2 hours/day, 6 days/week).
- **Accelerated Pace:** 18–20 weeks (~4.5 months) — 18–20 hours/week (3–3.5 hours/day, 6 days/week).
- **Relaxed Pace:** 50–52 weeks (~1 year) — 5–6 hours/week (~1 hour/day, 5–6 days/week).

---

## 7. What to Do Right Now

1. Ensure your software tools (VS Code, Node.js, Git) are installed and verified.
2. Initialize your progress tracker using [`progress/README.md`](progress/README.md).
3. Open **[`resources/00-how-to-study.md`](resources/00-how-to-study.md)** and begin Day 1 of Stage 00!