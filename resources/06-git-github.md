# Stage 06: Git & GitHub — Version Control and Collaboration

> **Duration:** 1 week (6 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Beginner  
> **Prerequisites:** [Stage 01](01-html-css.md) through [Stage 05](05-async-javascript.md) completed; you have written and saved multiple projects on your local machine.

---

## 1. What This Stage Teaches

This stage transforms you from a local coder into an engineer capable of professional version control, code collaboration, and public portfolio presentation:
- **Core Mental Model:** Git is a local distributed version control system; GitHub is a cloud hosting platform for Git repositories.
- **The Three Trees of Git:** Working Directory, Staging Area (Index), and Commit History (Repository).
- **Essential Git Commands:** `git init`, `git status`, `git add`, `git commit`, `git diff`, `git log`, `git checkout`/`git switch`, and `git branch`.
- **Commit Craftsmanship:** Writing clear, atomic commit messages following the Conventional Commits specification (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).
- **Branching & Merging:** Feature-branch workflow, fast-forward vs. 3-way merges, and systematically resolving merge conflicts.
- **Remote Operations:** `git remote add`, `git push`, `git pull`, `git fetch`, `git clone`, and handling SSH/HTTPS authentication.
- **GitHub Collaboration Workflows:** Creating Pull Requests (PRs), self-code reviews, issue tracking, and markdown repository README documentation.
- **Deploying to the Web:** Publishing static websites with GitHub Pages.
- **The `.gitignore` File:** Protecting sensitive secrets (`.env`) and excluding bloated dependencies (`node_modules`).

---

## 2. Why This Stage Matters

No professional software engineering team writes code without version control. Git provides a complete chronological audit trail of your code, allowing you to experiment boldly on branches with the guarantee that you can revert mistakes at any time.

Furthermore, **GitHub is your public resume**. Employers, recruiters, and open-source contributors will evaluate your GitHub profile: your commit consistency, repository documentation, clean branch histories, and deployed project demonstrations. Dedicating this week to mastering Git before entering the React ecosystem ensures your upcoming portfolio projects are presented with professional polish.

---

## 3. Prerequisites

- Basic terminal command familiarity (`cd`, `ls`/`dir`, `mkdir`).
- At least two completed coding projects from Stages 01 to 05 stored on your computer.

---

## 4. What to Install or Prepare

1. **Git:** Download and install from [git-scm.com](https://git-scm.com/). Verify with:
   ```bash
   git --version
   ```
2. **GitHub Account:** Register a free account at [github.com](https://github.com/) with a clean, professional username.
3. **Configure Your Identity:**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   git config --global init.defaultBranch main
   ```
4. **SSH Key Setup (Recommended):** Generate and link an SSH key to your GitHub account following the [GitHub SSH Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to push code without password prompts.

---

## 5. Learning Objectives

By the end of this 1-week stage, you will:
- [ ] Explain the difference between Git (the command-line tool) and GitHub (the cloud platform).
- [ ] Initialize repositories, stage changes selectively, and author atomic commits with conventional messages.
- [ ] Create, switch between, and merge feature branches.
- [ ] Intentionally trigger and resolve a Git merge conflict with zero anxiety.
- [ ] Connect local repositories to remote GitHub repositories and push/pull code seamlessly.
- [ ] Author a professional GitHub `README.md` complete with live deployment badges, screenshots, and tech stack details.
- [ ] Deploy static projects live to the web using GitHub Pages.
- [ ] Publish all previously built projects (Stages 01, 02, 04, 05) to your personal GitHub profile.

---

## 6. Recommended Learning Order

- **Day 1:** Git mental model, configuration, staging area, commit basics, and `.gitignore`.
- **Day 2:** Inspecting history, `git diff`, `git log`, and authoring Conventional Commits.
- **Day 3:** Branching strategies, switching branches, merging, and resolving merge conflicts.
- **Day 4:** Remote repositories, GitHub connection (SSH/HTTPS), pushing, pulling, and cloning.
- **Day 5:** Pull Requests (PRs), code reviews, writing exemplary repository documentation (`README.md`), and deploying with GitHub Pages.
- **Day 6:** Stage 06 Milestone: Auditing and publishing all 5 previous projects to public GitHub repositories.

---

## 7. Primary Learning Resources

- **Primary Interactive Course:** [GitHub Skills](https://skills.github.com/)
  - Complete the following hands-on interactive repositories:
    1. *Introduction to GitHub*
    2. *Reviewing pull requests*
    3. *Resolve merge conflicts*
- **Primary Reading:** [Pro Git Book (Free Online by Scott Chacon & Ben Straub)](https://git-scm.com/book/en/v2)
  - Read Chapters 1.1–1.4 (Getting Started), 2.1–2.5 (Git Basics), and 3.1–3.2 (Git Branching).

---

## 8. Alternative Resources

- **Visual Game Simulator:** [Learn Git Branching](https://learngitbranching.js.org/) — Highly recommended interactive visual simulation that visualizes commit DAG trees and branch pointers in real time.
- **Video Tutorial:** [Git and GitHub for Beginners - Crash Course (freeCodeCamp)](https://www.youtube.com/watch?v=RGOj5yH7evk).

---

## 9. Official Documentation

- [Git Official Documentation & Reference Manual](https://git-scm.com/doc)
- [GitHub Docs — Getting Started with Git](https://docs.github.com/en/get-started)
- [Conventional Commits v1.0.0 Specification](https://www.conventionalcommits.org/en/v1.0.0/)

---

## 10. Topic-by-Topic Study Sequence

### Day 1 — Git Mental Model, Staging & `.gitignore`
- **Study:** Distributed version control vs centralized; snapshots vs file diffs; the three trees: Working Directory, Staging Area, Repository; `git init`, `git status`, `git add <file>`, `git commit -m "msg"`. The purpose of `.gitignore`.
- **Practice:** Initialize a dummy folder. Create a `.gitignore` containing `*.log` and `.env`. Create files and observe how `git status` ignores specified files.

### Day 2 — Viewing History, Diffs & Conventional Commits
- **Study:** Inspecting changes with `git diff` and `git diff --staged`; viewing logs with `git log --oneline --graph --all`; amending the most recent commit with `git commit --amend`; Conventional Commits format (`type(scope): subject`).
- **Practice:** Make 3 sequential commits on a project following Conventional Commits format (`feat: add search bar`, `style: center logo`, `docs: update setup steps`). Inspect with `git log --oneline`.

### Day 3 — Branching, Merging & Conflict Resolution
- **Study:** What is a branch? (A lightweight movable pointer to a commit); `git branch <name>`, `git switch <name>` (or `git checkout -b <name>`); fast-forward merges vs 3-way recursive merges; why merge conflicts occur and how conflict markers work (`<<<<<<<`, `=======`, `>>>>>>>`).
- **Practice:** Create a branch `feature-darkmode`. Change a CSS file. Switch back to `main` and edit the exact same CSS line. Merge `feature-darkmode` into `main`, observe the conflict, manually edit the file to resolve it, and complete the merge commit.

### Day 4 — Remote Repositories & GitHub Integration
- **Study:** What is a remote? (`origin`); `git remote add origin <url>`; `git push -u origin main`; `git pull origin main`; `git clone <url>`; setting up personal access tokens or SSH keys.
- **Practice:** Create a new empty public repository on GitHub. Link your local project to it and push your entire commit history to GitHub.

### Day 5 — Pull Requests, Professional READMEs & GitHub Pages
- **Study:** The Pull Request (PR) workflow; writing PR descriptions; code review comments; writing a comprehensive `README.md` (Title, description, screenshot, live demo link, tech stack, installation instructions); hosting static web pages for free using GitHub Pages.
- **Practice:** Create a branch on GitHub, submit a Pull Request to yourself, review the diff, merge it, and enable GitHub Pages in repository settings to make your Stage 01 website live on the internet.

### Day 6 — Stage 06 Milestone: The 5-Repository Portfolio Launch
- **Task:** Take your 5 completed projects from earlier stages:
  1. *Stage 01:* Responsive Business Website (HTML/CSS)
  2. *Stage 02:* CLI Task Manager (Node.js)
  3. *Stage 03:* Modernized ES Module Utility
  4. *Stage 04:* Interactive Browser Web App (Vanilla JS + DOM)
  5. *Stage 05:* Weather / API Dashboard (Async Fetch)
- Initialize each as a clean Git repository with a `.gitignore`, craft a professional `README.md` for each, push them to individual GitHub repositories, and activate GitHub Pages for the web projects. Review Anki cards.

---

## 11. Suggested Time Limits

- **Daily Study Time:** 90 minutes.
  - 30 minutes: Reading Pro Git / interactive tutorials.
  - 45 minutes: Practicing Git commands in the terminal and managing GitHub repositories.
  - 15 minutes: Reviewing Anki flashcards and updating your study tracker.
- **Total Stage Commitment:** 6 study days × 90 minutes = 9 hours of deliberate version control mastery.

---

## 12. Practice Tasks

1. **Terminal Command Drill:** Execute this sequence from memory without looking at notes: initialize repo → stage 2 specific files → commit with conventional message → create new branch → switch to branch → make commit → switch back to main → merge branch.
2. **Conflict Resolution Challenge:** Deliberately create a conflict in a markdown file between two branches and resolve it cleanly in VS Code.
3. **Commit Amending Drill:** Make a commit with a typo in the message, then fix it using `git commit --amend -m "correct message"` without creating a second commit.
4. **Git Ignore Verification:** Verify that `git status` remains completely clean even when a `node_modules/` folder containing 1,000 files is present in your workspace.

---

## 13. Mini-Projects

1. **Git Sandbox Playground:** A dedicated repository where you test advanced commands like `git stash`, `git reset --soft`, and `git cherry-pick`.
2. **GitHub Profile README:** Create a special repository matching your GitHub username (`username/username`) with a markdown profile displaying your bio, active tech stack, and links to your upcoming projects.
3. **Stage 06 Milestone: The Complete Portfolio Publication**
   - 5 independent, clean GitHub repositories.
   - Every repository contains an informative `README.md` with features, setup steps, and architecture overview.
   - Web projects deployed and viewable via live public GitHub Pages URLs.

---

## 14. Common Mistakes

| Common Mistake | Why It Causes Chaos | How to Fix It |
|----------------|---------------------|---------------|
| **Committing `node_modules/` or Secrets** | Balloons repo size into hundreds of MBs and exposes private API keys to the world. | Always create a `.gitignore` before running `git add .`. |
| **Vague Commit Messages (`"fix stuff"`, `"update"`)** | Destroys commit history readability; makes bisecting bugs impossible. | Follow Conventional Commits: `feat(nav): add mobile toggle button`. |
| **Giant, Megalithic Commits** | Committing 20 unrelated changes across 50 files makes code reviews and rollbacks nightmare tasks. | Make **atomic commits**: one logical change or bug fix per commit. |
| **Working Directly on `main`** | Increases risk of breaking working production code while experimenting. | Always create a feature branch (`git switch -c feat/my-feature`) for new work. |
| **Force Pushing to Shared Branches (`git push -f`)** | Overwrites other developers' commit histories and causes data loss. | Never force-push to `main` or shared collaboration branches. |

---

## 15. Debugging Guidance

When Git gets into a confusing state:
1. **Always Check `git status` First:** It tells you what branch you are on, whether you are in the middle of a merge or rebase, and which files have unstaged changes.
2. **Aborting Merges Safely:** If a merge conflict looks completely broken and you want to return to where you were before the merge started:
   ```bash
   git merge --abort
   ```
3. **Temporarily Shelving Work with Stash:** If you need to switch branches quickly but have unfinished unstaged changes:
   ```bash
   git stash
   # switch branches, do work, switch back
   git stash pop
   ```
4. **Visualizing the Commit Graph:** Run this command to see branch pointers clearly:
   ```bash
   git log --oneline --graph --decorate --all
   ```

---

## 16. AI Usage Guidance

- **Effective Prompts:**
  - *"Explain how Git stores objects (blobs, trees, commits) under the hood in the .git folder."*
  - *"What is the difference between git merge and git rebase, and when should a beginner use each?"*
  - *"What does this git status message mean: 'Your branch and origin/main have diverged'?"*
- **What to Avoid:**
  - Do not use AI GUI tools to click buttons for Git. Type every Git command directly in your command-line terminal to master the CLI.

---

## 17. Completion Checklist

Before moving to Stage 07, verify:
- [ ] Completed all 6 daily lessons and interactive GitHub Skills courses.
- [ ] Created 35+ Anki flashcards covering Git commands and branching terminology.
- [ ] Successfully resolved a merge conflict manually.
- [ ] Configured your global Git name, email, and default branch.
- [ ] Published all previous milestone projects to individual, public GitHub repositories with live deployment links.
- [ ] Updated `progress/README.md` for Stage 06.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for [Stage 07: React Fundamentals](07-react.md) when:
1. You can initialize, stage, commit, branch, merge, and push to GitHub using the CLI without looking at a cheatsheet.
2. You can resolve a merge conflict without fear.
3. You have a clean, active GitHub profile with public repositories showcasing your progress.

---

## 19. Suggested Next Step

Proceed to **[Stage 07: React Fundamentals — Building Interactive UIs](07-react.md)** to enter the modern component-based UI framework era!

---

## 20. Further References

- [Oh Shit, Git!?! (Cheat Sheet for Common Git Mistakes)](https://ohshitgit.com/) — Practical, plain-English recipes for getting out of Git messes.
- [Git Flight Rules](https://github.com/k88hudson/git-flight-rules) — Comprehensive guide for what to do when things go wrong in Git.
- [Pro Git Book by Scott Chacon](https://git-scm.com/book/en/v2) — The definitive, free, community-standard Git textbook.