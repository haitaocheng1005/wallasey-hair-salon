# NDT Interview Prep Tool Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local, bilingual NDT/NDE interview preparation dashboard with study content, random questions, a one-hour writing timer, and rule-based answer feedback.

**Architecture:** This is a static single-page app. `index.html` owns the semantic structure and fixed content containers, `styles.css` owns the responsive technical dashboard visual system, `script.js` owns question data, timer state, scoring logic, copy actions, and DOM updates.

**Tech Stack:** Plain HTML, CSS, and JavaScript; no backend, no build step, no external dependencies.

---

## File Structure

- Modify `index.html`: replace unrelated TAO Nocturne page with the NDT prep dashboard markup.
- Modify `styles.css`: replace shopping-site styling with responsive study-tool styling.
- Modify `script.js`: replace sourcing-brief logic with question bank, timer, answer analysis, and copy interactions.
- Create `tests/ndt-tool.test.js`: Node-based static regression checks for required sections, data hooks, question bank volume, and scoring/timer functions.

## Task 1: Add Static Regression Tests

**Files:**
- Create: `tests/ndt-tool.test.js`

- [ ] **Step 1: Write failing static tests**

```javascript
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "script.js"), "utf8");

const requiredHtml = [
  "NDT Interview Prep Tool",
  "NDT / NDE Basics",
  "Four Core Methods",
  "Writing Template",
  "Random Interview Questions",
  "1-Hour Writing Practice",
  "Local AI Coach",
  "data-question-card",
  "data-answer-input",
  "data-score-button",
  "data-timer-display",
];

for (const token of requiredHtml) {
  assert.ok(html.includes(token), `index.html should include ${token}`);
}

const methodTokens = [
  "Magnetic Particle Testing",
  "Eddy Current Testing",
  "Ultrasonic Testing",
  "Radiographic Testing",
];

for (const token of methodTokens) {
  assert.ok(html.includes(token), `index.html should include ${token}`);
}

assert.ok(css.includes("@media"), "styles.css should include responsive rules");
assert.ok(css.includes(".method-grid"), "styles.css should style method cards");
assert.ok(css.includes(".practice-layout"), "styles.css should style the writing practice layout");

assert.ok(js.includes("const questionBank"), "script.js should define a local question bank");
const questionMatches = js.match(/prompt:/g) || [];
assert.ok(questionMatches.length >= 18, "question bank should include at least 18 prompts");

for (const fn of ["pickQuestion", "scoreAnswer", "formatTime", "startTimer", "resetTimer"]) {
  assert.ok(js.includes(`function ${fn}`), `script.js should define ${fn}`);
}

console.log("NDT prep tool static checks passed");
```

- [ ] **Step 2: Run tests to verify they fail before implementation**

Run: `node tests/ndt-tool.test.js`

Expected: FAIL because the existing page is still unrelated to the NDT prep tool.

## Task 2: Replace Page Markup

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Implement semantic dashboard markup**

Replace the body with a tool-first layout containing:

```html
<header class="app-header">
  <a class="brand" href="#top" aria-label="NDT Interview Prep Tool home">NDT Prep</a>
  <nav class="main-nav" aria-label="Primary navigation">
    <a href="#basics">Basics</a>
    <a href="#methods">Methods</a>
    <a href="#questions">Questions</a>
    <a href="#practice">Practice</a>
  </nav>
</header>
```

and sections with IDs and data hooks required by the tests: `basics`, `methods`, `template`, `questions`, `practice`, `coach`, and `study-plan`.

- [ ] **Step 2: Include adapted bilingual source content**

Add concise bilingual content for NDT/NDE basics, MT/MPT, ET, UT, RT, writing structure, Brookes Bell/shipping context, reporting importance, and final checklist.

## Task 3: Replace Styling

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Implement responsive technical dashboard styling**

Use CSS variables, restrained industrial colors, grid layouts, cards with radius no more than 8px, readable bilingual typography, and responsive media queries for mobile.

- [ ] **Step 2: Style interactive states**

Add visible states for active question filters, timer warning, score bands, copy feedback, focused controls, and mobile stacked layouts.

## Task 4: Replace JavaScript Behavior

**Files:**
- Modify: `script.js`

- [ ] **Step 1: Add local question data**

Create `questionBank` with at least 18 prompts across categories: general NDT, MT, ET, UT, RT, writing, shipping, reporting, and Brookes Bell.

- [ ] **Step 2: Add question picker**

Implement `pickQuestion(category)` to filter by selected category and update the question card.

- [ ] **Step 3: Add one-hour timer**

Implement `formatTime(seconds)`, `startTimer()`, pause/resume behavior, and `resetTimer()` for a 3600-second writing session.

- [ ] **Step 4: Add local scoring**

Implement `scoreAnswer(text, prompt)` using the 100-point rubric from the design spec. Return score, band, strengths, missing points, and rewrite advice.

- [ ] **Step 5: Wire DOM events**

Connect filter buttons, random question button, timer controls, answer input word count, score button, clear button, and copy buttons.

## Task 5: Verify

**Files:**
- Test: `tests/ndt-tool.test.js`

- [ ] **Step 1: Run static tests**

Run: `node tests/ndt-tool.test.js`

Expected: PASS with `NDT prep tool static checks passed`.

- [ ] **Step 2: Open and inspect the static page**

Run a local static server or open the file directly. Verify the page renders, random questions change, the timer controls work, and scoring returns actionable feedback.
