# NDT Interview Prep Tool Design

Date: 2026-05-10

## Goal

Build a single-page, bilingual NDT/NDE interview preparation tool for an NDT apprentice applicant. The page should help Haitao practise core NDT principles, four common methods, English written answers, random interview questions, one-hour writing practice, and local rule-based answer feedback.

The first version will be fully local and static: `index.html`, `styles.css`, and `script.js`. It will not require an API key, backend, build step, or internet connection after the files are loaded.

## Source Material

The content will be adapted from three Word documents:

- `C:\Users\haita\Desktop\NDT_Interview_Study_Guide_Haitao.docx`
- `C:\Users\haita\Desktop\NDT_English_Writing_Practice_Haitao.docx`
- `C:\Users\haita\Desktop\Brookes_Bell_and_Shipping_Study_Guide_Haitao.docx`

Key themes:

- NDT/NDE basics and why the work is safety-critical, procedure-focused, and evidence-based.
- Four NDT methods: Magnetic Particle Testing, Eddy Current Testing, Ultrasonic Testing, Radiographic Testing.
- Writing structure: Definition, Principle, Application, Advantages, Limitations, Importance.
- Brookes Bell and shipping context: maritime consultancy, weld inspection, corrosion mapping, reporting, legal and insurance importance.
- Interview questions and model answer cues.

## User Experience

The first screen should be the usable prep dashboard, not a marketing landing page. It should present the tool as a serious but approachable interview practice workspace.

Primary sections:

- Hero/workbench header: `NDT Interview Prep Tool`, short Chinese-English explanation, quick stats or focus chips.
- NDT/NDE basics: concise bilingual overview of what NDT/NDE means and why it matters.
- Four methods: cards for MT/MPT, ET, UT, and RT, each showing principle, best use, advantages, limitations, and short interview phrase.
- Writing template: six-step answer framework with reusable English sentence starters.
- Random interview questions: category filter and random question button.
- One-hour writing practice: generated prompt, 60-minute timer, answer textarea, pause/reset controls.
- Local AI coach: rule-based score, feedback, missing points, and rewrite suggestions.
- Study plan/checklist: short 5-7 day revision plan and final readiness checklist.

## Interactions

All interactions happen in `script.js`.

- Random question button chooses from a local question bank.
- Category chips filter questions by method, writing, shipping, reporting, or general NDT.
- Timer starts at 60:00, can pause/resume, reset, and optionally warns at 10 minutes and 5 minutes remaining.
- Answer textarea tracks word count and estimated paragraph count.
- Score button runs local feedback logic and updates a visible feedback panel.
- Copy buttons can copy template phrases or model structures where useful.

## Local Scoring Rules

The local coach will be transparent. It should not claim to be a real AI model. It will score out of 100 using simple rules:

- 20 points for clear structure and direct answer.
- 20 points for explaining the basic principle.
- 15 points for application/examples.
- 15 points for including advantages and limitations.
- 15 points for including limitations and method-selection judgement.
- 10 points for connecting to safety, integrity, reliability, reporting, or evidence-based decisions.
- 5 points for clarity, length, and professional tone.

Feedback should be practical and bilingual where useful. Examples:

- "Add a limitation: mention access, surface condition, calibration, material type, or radiation safety."
- "Try adding a final sentence linking the method to safety and engineering decisions."
- "Good structure. Now make the principle more specific."

## Visual Style

Use a focused technical study-tool interface:

- Dense but readable dashboard layout.
- Dark navy/graphite base with restrained industrial accents such as amber, teal, and steel.
- Avoid a one-note palette.
- Keep cards simple, with border radius no more than 8px.
- Use responsive layouts so the tool works on desktop and mobile.
- No decorative landing-page hero, no unrelated shopping/concierge content.

## Files To Change

- Replace the existing unrelated `index.html` with the NDT prep tool markup.
- Replace `styles.css` with the new responsive study-tool design.
- Replace `script.js` with question bank, timer, scoring, and UI logic.

## Verification

Manual verification:

- Open `index.html` in a browser.
- Confirm all sections render on desktop and mobile widths.
- Confirm random questions change and category filters work.
- Confirm timer starts, pauses, resumes, and resets.
- Confirm answer scoring produces a score and specific feedback.
- Confirm text does not overflow or overlap.

Known limitation:

- Local scoring is heuristic and cannot truly understand answers like an LLM. It is intentionally designed as a fast practice coach, with a future upgrade path to a real AI API if needed.
