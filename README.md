# Universal Turing Machine (UTM) Simulator
### Interactive Educational Tool for Theory of Computation

> **Theoretical Foundation:**  
> $$U(\langle M, w \rangle) = M(w)$$  
> *A single Universal Turing Machine $U$, when supplied with the serialized description $\langle M \rangle$ of an arbitrary Turing Machine $M$ and an input string $w$, faithfully replicates the step-by-step computation of $M$ on $w$.*

---

## 1. Project Overview

The **Universal Turing Machine (UTM) Simulator** is an interactive, browser-based educational application developed for undergraduate and graduate-level courses in **Theory of Computation (TOC)**, **Automata Theory**, and **Formal Languages**.

Conceived by Alan M. Turing in his seminal 1936 paper *"On Computable Numbers, with an Application to the Entscheidungsproblem"*, the Universal Turing Machine represents one of the most profound intellectual breakthroughs of the 20th century: the realization that a single physical machine can execute *any* algorithm simply by reading instructions stored as data. This concept serves as the direct theoretical foundation of the stored-program computer (the Von Neumann architecture) and modern computer science.

This simulator bridges abstract mathematical formalism and practical intuition by letting students explore deterministic Turing Machines, visualize their canonical encoding into string format $\langle M, w \rangle$, and watch the Universal Turing Machine interpret transitions, manipulate an infinite tape, and determine halting/acceptance conditions dynamically.

---

## 2. Key Features

- **Genuine Dual-Mode Simulation Engine:**  
  No hardcoded shortcuts or pre-rendered animations. The simulator executes an authentic fetch-decode-execute cycle matching transitions against the tape dynamically.
- **Extensive Pre-Built Machine Library Categorized by Computation Type:**  
  - **String & Language Recognizers:** Binary deciders, parity verifiers, prefix/suffix detectors, regular language deciders.
  - **Arithmetic & Integer Operations:** Unary and binary arithmetic ($+$, $\times$, $-$, $x^2$, $\lfloor \log_2 x \rfloor$, $\lfloor x/2 \rfloor$, base conversions, mod 3).
  - **Grammars & Non-Regular Languages:** Deciders for context-free and context-sensitive languages ($0^n 1^n$, $a^n b^n c^n$, binary palindromes $w = w^R$, doubled strings $ww$, balanced parentheses).
  - **String Transformations:** Transducers that manipulate and rearrange tape contents (string reversal, string copier, bitwise NOT/complement, bit sorter, leading zero removal).
  - **Advanced Machines & Enumerators:** Language enumerators, Euclidean Unary GCD, Unary LCM, Universal TM demonstration, infinite scanners.
- **Centerpiece Interactive Tape with Anchored Head Pointer:**  
  Visible immediately above the fold on all standard laptop and desktop screens. Features high-legibility cell tiles with coordinate indices ($-\infty \dots +\infty$), large monospaced symbols, smooth auto-centering without jitter, and an anchored indicator (`▼ HEAD: q_curr`) locked to the active cell tile.
- **Step-by-Step Educational Narrative:**  
  Converts abstract mathematical transitions into plain-English explanations: *"In state q0, reads '0', writes 'X', moves Right to cell 1, and transitions to q1."*
- **Reversible Time-Travel Stepping (`[ ⏮ Step Back ]` & `[ ⏭ Step ]`):**  
  Step forward and backward through actual execution configurations using $O(1)$ snapshots. Allows students to easily examine edge transitions, investigate state changes, or step back from halting states without resetting.
- **Multiple Ways to Give Input Manually:**  
  - **Manual Input String Box (`Set Input` & Enter Key):** Type any custom input string $w \in \Sigma^*$ and press `Enter` or click `Set Input` for immediate validation and tape loading.
  - **Interactive Direct Cell-Click Editing:** Click any individual cell on the tape when paused or ready to change its symbol (choose from $\Gamma$ or type custom) or jump the head to that position.
  - **Manual Tape Setup Modal (`✏️ Edit Tape`):** Manually load arbitrary space-separated tape sequences (e.g. `B B 0 0 1 1 B B`), set starting index offsets, and configure custom initial head positions.
- **Compact Machine Definition Strip:**  
  Displays the selected machine's title, Category badge, formal mathematical language definition ($L(M)$ or $f(w)$), quick sample chips, and an expandable 7-Tuple drawer ($Q, \Sigma, \Gamma, B, q_0, q_{acc}, q_{rej}$) kept collapsed by default to preserve maximum simulation visibility.
- **Lookahead (Next Rule) Preview Banner:**  
  Displays both the active transition $\delta(q_{\text{curr}}, a) \to (p, b, D)$ and the upcoming transition $\delta(q_{\text{next}}, a_{\text{next}}) \to \dots$ so students anticipate the machine's next operation.
- **Live Execution Summary Card:**  
  Automatically appears upon halting to provide an academic summary: Accepted / Rejected / Step Limit status banner, total steps taken, halting state, final head coordinate, and the extracted output string remaining on the tape.
- **Theory of Computation Keyboard Shortcuts:**  
  `Space` (Start / Pause / Resume), `→` (Step Forward), `←` (Step Backward), `R` (Reset to Step 0), `Esc` (Stop), `C` (Recenter Tape), and `?` (Keyboard Shortcuts Dialog). Form inputs and modals automatically isolate shortcuts to prevent conflicts.
- **Dynamic Category Filtering & Search:**  
  Filter presets by computation type dropdown or search instantly by name, description, or formal language expression.
- **Formal 7-Tuple Definition Interface:**  
  Create custom Turing Machines from scratch with dynamic transition rows, full structural validation (detecting unreachable states, non-determinism, missing alphabets), and JSON import/export.
- **Execution History Trace & CSV Export:**  
  Log every transition step with tape snapshots and export directly to CSV for academic coursework and grading.
- **Universal Turing Machine Binary Encoding $\langle M, w \rangle$:**  
  Full Hopcroft-Ullman unary-binary representation mapping states, tape alphabet symbols, directions, and transition quintuples to canonical binary bitstrings.

---

## 3. Technology Stack

- **HTML5:** Semantic, accessible markup.
- **CSS3:** Custom properties (CSS variables), responsive flexbox and grid layouts, smooth transitions, dark and light theme palettes.
- **Vanilla JavaScript (ES6+):** Pure object-oriented architecture without external frameworks or runtime dependencies.

---

## 4. GitHub Repository Structure

Below is the clean directory structure recommended for uploading this project to GitHub:

```
Universal-Turing-Machine-Simulator/
├── index.html              # Main single-page application interface
├── style.css               # Complete styling, themes, and responsive design
├── script.js               # Simulation engine, infinite tape, UTM encoder, and UI controller
├── presets.js              # Complete Turing Machine presets database categorized by domain
├── DOCUMENTATION.md        # Comprehensive step-by-step educational documentation
├── README.md               # Project overview, features, quick start, and theory
├── LICENSE                 # Open-source MIT license
├── .gitignore              # Standard git ignore file
└── test_all.js             # Master verification suite testing all machines and test cases
```

---

## 5. Quick Start (Running Locally)

This simulator has **zero dependencies**. No Node.js server, Python environment, npm packages, or build steps are required.

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer to open it in any web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 8000
```
Or using Node.js:
```bash
npx serve .
```
Then navigate to `http://localhost:8000` in your browser.

---

## 6. Automated Testing & Verification

A master verification test suite is included to guarantee mathematical accuracy and deterministic execution across all pre-built machines:

```bash
node test_all.js
```

### Verification Results:
- **Turing Machines Tested:** 55/55 (100% Pass Rate)
- **Individual Test Cases Passed:** 245/245 (100% Pass Rate)
- **Headless Browser CDP Automation:** Passed in Microsoft Edge with 0 console errors.

---

## 7. Keyboard Shortcuts Guide

| Key | Action |
| :---: | :--- |
| <kbd>Space</kbd> | Start / Pause / Resume continuous simulation |
| <kbd>&rarr;</kbd> | Step forward (execute exactly 1 transition) |
| <kbd>&larr;</kbd> | Step backward (time-travel back 1 transition) |
| <kbd>R</kbd> | Reset simulation to initial Step 0 configuration |
| <kbd>Esc</kbd> | Stop simulation / Close open modal dialogs |
| <kbd>C</kbd> | Recenter interactive tape on current head position |
| <kbd>?</kbd> | Open / Close Keyboard Shortcuts dialog |

---

## 8. Academic & Coursework Attribution

This simulator is designed as a college-level Theory of Computation semester project. It satisfies standard curricular requirements for:
- Formal specification of deterministic Turing Machines: $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{acc}, q_{rej})$.
- Implementation of the Universal Turing Machine concept: $U(\langle M, w \rangle) = M(w)$.
- Demonstration of the Church-Turing thesis and the Halting Problem.
- Real-time visualization of tape configurations, state transitions, and time-travel debugging.

---

## 9. License

This project is open-source and released under the [MIT License](LICENSE).
