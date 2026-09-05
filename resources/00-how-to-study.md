# Stage 00: How to Study — Learning How to Learn

> **Duration:** 1 week (6 study days)  
> **Daily study time:** 90 minutes  
> **Difficulty:** Beginner  
> **Prerequisites:** None — this is the starting point of the curriculum.

---

## 1. What This Stage Teaches

This stage establishes your foundational cognitive learning methodology, digital note-taking system, spaced repetition workflow, and study habits:
- The neuroscience of learning: Focused mode vs. Diffuse mode thinking.
- Working memory limitations and how to build mental "chunks" through deliberate practice.
- Overcoming procrastination using the habit loop (cue, routine, reward) and Pomodoro blocks.
- Effective technical note-taking using markdown and the Feynman technique.
- Setting up Anki for spaced repetition of programming syntax and conceptual models.
- Establishing an intentional AI usage protocol that accelerates learning without inducing mental atrophy.
- Setting up and committing your progress tracking dashboard in `progress/README.md`.

---

## 2. Why This Stage Matters

Most self-taught developers fail not because programming is inherently too difficult, but because they employ inefficient learning habits: passive video watching, tutorial hopping, rote memorization, and lack of active recall. This creates an **illusion of competence**—you understand what an instructor does on screen, but freeze when facing a blank code editor.

Stage 00 builds your learning engine. By spending your first week mastering active recall, deliberate practice, and note synthesis, you will retain concepts faster, debug with less frustration, and sustain the motivation required to complete the 35-week curriculum.

---

## 3. Prerequisites

- Basic computer literacy: creating folders, managing files, using a web browser with multiple tabs, and typing comfortably.
- A willingness to embrace productive struggle and consistency over cramming.

---

## 4. What to Install or Prepare

1. **Anki (Spaced Repetition Software):** Download and install from [apps.ankiweb.net](https://apps.ankiweb.net/). Create an account to sync flashcards across your computer and phone.
2. **Visual Studio Code:** Download and install from [code.visualstudio.com](https://code.visualstudio.com/).
3. **Workspace Folder:** Create a dedicated local folder for your journey:
   ```bash
   mkdir frontend-roadmap && cd frontend-roadmap
   mkdir notes
   ```
4. **Distraction Blockers:** Install browser extensions (e.g., Cold Turkey, Freedom, or StayFocusd) to block social media during study hours.
5. **Physical Setup:** A dedicated desk space, notebook/pen for scratch thinking, and water bottle.

---

## 5. Learning Objectives

By the end of this stage, you will:
- [ ] Explain the difference between focused and diffuse modes of thinking and how to alternate between them to solve bugs.
- [ ] Implement a 25/5 Pomodoro routine to maintain intense concentration without burnout.
- [ ] Maintain an Anki flashcard deck with at least 25 conceptual cards and complete reviews daily.
- [ ] Establish a standardized markdown note-taking template for recording code concepts.
- [ ] Formulate personal rules for using AI tools as tutors rather than code-generators.
- [ ] Initialize and commit your `progress/README.md` tracking dashboard.

---

## 6. Recommended Learning Order

1. **Days 1–2:** Understand learning neuroscience (focused vs. diffuse thinking, chunking, and memory consolidation).
2. **Day 3:** Master the psychology of procrastination and set up your distraction-free study environment.
3. **Day 4:** Set up your note-taking template and practice the Feynman explanation technique.
4. **Day 5:** Define your strict AI usage protocol and learn how to navigate official documentation.
5. **Day 6:** Initialize your `progress/README.md` tracker, conduct a weekly review, and plan Week 2.

---

## 7. Primary Learning Resources

- **Primary Course:** [Learning How to Learn — Barbara Oakley & Terrence Sejnowski (Coursera)](https://www.coursera.org/learn/learning-how-to-learn)
  - *How to access:* Choose "Enroll for free" and select the **Audit** option to access all video lectures and readings for free.
  - *What to study:* Focus on Week 1 (What is Learning? Focused vs. Diffuse Thinking) and Week 2 (Chunking and Procrastination).

---

## 8. Alternative Resources

- **Book:** [Make It Stick: The Science of Successful Learning](https://makeitstick.net/) by Peter C. Brown, Henry L. Roediger III, and Mark A. McDaniel. Provides in-depth cognitive science research on active retrieval and spaced interleaving.
- **Video Summary:** [How to Learn Anything Fast with the Feynman Technique](https://www.youtube.com/watch?v=_f-qkGJBPts) (5-minute breakdown of active synthesis).

---

## 9. Official Documentation

- [Anki Official User Manual](https://docs.ankiweb.net/) — Essential reference for card types, deck organization, and spaced repetition scheduling algorithms.
- [The Pomodoro Technique Guide](https://francescocirillo.com/pages/pomodoro-technique) — The original time-management methodology.

---

## 10. Topic-by-Topic Study Sequence

### Day 1 — How Learning and Memory Work
- **Time Limit:** 90 minutes.
- **Topics:** Focused vs. diffuse thinking modes; working memory (4 chunks) vs. long-term memory; why cramming fails; the spacing effect.
- **Resource:** *Learning How to Learn*, Week 1 videos (1.1–1.6).
- **Study Plan:**
  - *00–35 min:* Watch Week 1 lectures, jotting down notes in your notebook.
  - *35–65 min:* Write a one-paragraph summary explaining how memories consolidate during sleep.
  - *65–90 min:* Install Anki. Create a deck named `Frontend-Roadmap`. Add 5 cards covering today's concepts.

### Day 2 — Chunking and Deliberate Practice
- **Time Limit:** 90 minutes.
- **Topics:** What is a mental chunk; 4 steps to chunking (focus, comprehension, active practice, repetition); deliberate practice vs. naive practice; interleaving.
- **Resource:** *Learning How to Learn*, Week 2 videos (2.1–2.5).
- **Study Plan:**
  - *00–35 min:* Watch Week 2 lectures on chunking.
  - *35–65 min:* Deconstruct a skill you already possess (e.g., touch typing, riding a bike) into discrete chunks. Write out the steps.
  - *65–90 min:* Add 5 new Anki flashcards on chunk formation and complete all due card reviews.

### Day 3 — Overcoming Procrastination & Habit Design
- **Time Limit:** 90 minutes.
- **Topics:** The habit loop (Cue → Routine → Reward); process over outcome; creating a study trigger; physical and digital environment design.
- **Resource:** *Learning How to Learn*, Week 2 videos (2.6–2.10).
- **Study Plan:**
  - *00–30 min:* Watch lectures on procrastination and habit formation.
  - *30–60 min:* Write your personalized `study-protocol.md` inside your `notes/` folder (defining your study time, desk setup, cue, and break routine).
  - *60–90 min:* Conduct three 25-minute Pomodoro focus blocks with 5-minute physical breaks. Add 5 Anki cards.

### Day 4 — Technical Note-Taking & The Feynman Technique
- **Time Limit:** 90 minutes.
- **Topics:** Cornell method for technical subjects; why writing code snippets by hand enhances encoding; Feynman technique: explaining complex concepts in simple language.
- **Resource:** [Feynman Technique Article](https://fs.blog/feynman-technique/).
- **Study Plan:**
  - *00–30 min:* Read the Feynman technique guide.
  - *30–60 min:* Create `notes/template.md` containing sections for: Key Concepts, Code Examples, Mental Models/Diagrams, and Questions.
  - *60–90 min:* Test the template by taking notes on a topic and creating 5 Anki cards. Review pending Anki cards.

### Day 5 — AI Usage Protocol & Documentation Navigation
- **Time Limit:** 90 minutes.
- **Topics:** How to use Large Language Models (LLMs) productively as a 24/7 tutor; the dangers of code auto-generation; how to verify AI answers against official documentation.
- **Resource:** [`START-HERE.md#5-study-methodology-how-to-learn-effectively`](../START-HERE.md).
- **Study Plan:**
  - *00–30 min:* Formulate your personal rules for AI usage. Save to `notes/ai-protocol.md`.
  - *30–60 min:* Practice prompting an AI: *"Explain the CSS box model to me like I am a beginner, and provide a small ASCII diagram."* Read the answer, then search MDN for "CSS Box Model" to verify accuracy.
  - *60–90 min:* Add 5 Anki cards on documentation search techniques and AI prompt rules.

### Day 6 — Progress Tracker Setup & Weekly Retrospective
- **Time Limit:** 90 minutes.
- **Topics:** The weekly retrospective habit; filling in `progress/README.md`; planning study schedules for Week 2; managing mental fatigue without guilt.
- **Resource:** [`progress/README.md`](../progress/README.md).
- **Study Plan:**
  - *00–30 min:* Read the full `progress/README.md`. Fill in your start date, target pace, and Day 1–6 log entries.
  - *30–60 min:* Perform a weekly review of all notes taken during Stage 00. Identify any fuzzy concepts and add cards to Anki.
  - *60–90 min:* Schedule your study hours for Week 2 (Stage 01: HTML & CSS) on your digital calendar.

---

## 11. Suggested Time Limits

- **Daily Limit:** 90 minutes per day. Do not exceed 2 hours; cognitive returns diminish sharply after 90 minutes of focused analytical learning.
- **Weekly Total:** 6 days × 90 minutes = 9 hours. Use the 7th day for rest and diffuse mental consolidation.

---

## 12. Practice Tasks

1. **Daily Anki Habit:** Complete 100% of due flashcards every morning before touching any other study materials.
2. **Analog Writing Test:** Pick one concept (e.g., "The Spacing Effect") and explain it in 4 sentences on a blank sheet of paper without looking at your notes.
3. **Distraction Audit:** Log every time you feel the urge to switch tabs or check your phone during a 25-minute Pomodoro block.

---

## 13. Mini-Projects

### Stage 00 Capstone: The Personal Learning Operating System
Assemble and commit your personal learning framework to your local workspace:
- `notes/template.md`: Your reusable template for daily coding notes.
- `notes/study-protocol.md`: Your commitment contract specifying study hours, desk habits, and anti-procrastination cues.
- `notes/ai-protocol.md`: Your strict guidelines governing how and when you will interact with AI tools.
- Anki Deck: Containing at least 25 verified flashcards covering Stage 00 concepts.
- `progress/README.md`: Initialized and populated with Stage 00 milestones completed.

---

## 14. Common Mistakes

| Common Mistake | Why It Harms You | How to Fix It |
|----------------|------------------|---------------|
| **Skipping Stage 00 to jump straight to HTML** | You carry undisciplined learning habits into complex coding stages, leading to burnout. | Spend the 6 days building your study system; it will save you months later. |
| **Passive Video Binging** | Watching someone code triggers the illusion of competence without building neural pathways. | Type every example by hand and explain the logic in your own words. |
| **Making Overly Complex Anki Cards** | Cards with paragraphs of text are hard to review and fail to test atomic recall. | Follow the principle of minimum information: one atomic concept per card. |
| **Using AI to Write Practice Code** | Eliminates the mental struggle required to build problem-solving muscle. | Only use AI to explain concepts or critique code *after* you have attempted it yourself. |
| **Studying Without Rest Breaks** | Leads to mental exhaustion and poor memory consolidation. | Strictly follow 25/5 or 50/10 Pomodoro intervals and take real physical breaks. |

---

## 15. Debugging Guidance: Diagnosing Study & Focus Breakdowns

When you find yourself stuck, procrastinating, or unable to focus:
1. **Identify the Resistance:** Procrastination is almost always an emotional reaction to feeling overwhelmed or uncertain about the next immediate step.
2. **Shrink the Scope:** Instead of thinking *"I have to study for 90 minutes,"* tell yourself *"I will sit down and open VS Code for 5 minutes."* Once you start, momentum takes over.
3. **Clear the Digital Clutter:** Close all browser tabs except the primary resource. Put your phone in another room or in "Do Not Disturb" mode.
4. **Leverage the Diffuse Mode:** If you have been banging your head against a confusing concept for 20 minutes, step away from the screen, take a walk, or take a shower. Allow your subconscious mind to synthesize the idea.

---

## 16. AI Usage Guidance

- **Allowed & Recommended:**
  - Asking for plain-English analogies: *"Explain the difference between working memory and long-term memory using a computer RAM analogy."*
  - Asking for Socratic questioning: *"I want to test my understanding of chunking. Ask me 3 questions one by one to test my comprehension."*
  - Generating flashcard ideas from your personal handwritten summaries.
- **Strictly Prohibited:**
  - Asking AI to write your daily summaries or note templates for you.
  - Asking AI to complete Stage projects or exercises.

---

## 17. Completion Checklist

Before moving to Stage 01, verify each item:
- [ ] Completed Weeks 1–2 of *Learning How to Learn* (or equivalent readings).
- [ ] Anki installed with an active `Frontend-Roadmap` deck containing 25+ cards.
- [ ] Reviewed Anki flashcards for 6 consecutive days.
- [ ] Created `notes/template.md`, `notes/study-protocol.md`, and `notes/ai-protocol.md`.
- [ ] Initialized and filled out Stage 00 in `progress/README.md`.
- [ ] Blocked out study times for Week 2 (Stage 01: HTML & CSS) on your personal calendar.

---

## 18. How to Know You Are Ready for the Next Stage

You are ready for Stage 01 when:
1. You can sit down, start a timer, and study for 50 minutes without checking your phone or switching tabs.
2. You can explain focused vs. diffuse thinking and the Feynman technique to someone else without consulting notes.
3. You have a reliable, repeatable daily workflow for taking notes, reviewing flashcards, and tracking progress.

---

## 19. Suggested Next Step

Move forward to **[Stage 01: HTML & CSS — Building the Web's Foundation](01-html-css.md)** to begin writing your first semantic web pages!

---

## 20. Further References

- [Ultralearning by Scott Young](https://www.scotthyoung.com/blog/ultralearning/) — Principles for rapid, self-directed skill acquisition.
- [Atomic Habits by James Clear](https://jamesclear.com/atomic-habits) — Systems and environment design for lasting habits.
- [Anki Essentials (Free eBook)](https://leanpub.com/anki-essentials) — Best practices for creating high-retention flashcards.