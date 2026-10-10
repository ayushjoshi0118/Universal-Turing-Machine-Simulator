# Universal Turing Machine (UTM) Simulator
### Interactive Educational Tool for Theory of Computation

> **Theoretical Foundation:**  
> $$U(\langle M, w \rangle) = M(w)$$  
> *A single Universal Turing Machine $U$, when supplied with the serialized description $\langle M \rangle$ of an arbitrary Turing Machine $M$ and an input string $w$, faithfully replicates the step-by-step computation of $M$ on $w$.*

---

## 1. Project Overview

The **Universal Turing Machine (UTM) Simulator** is an interactive, browser-based educational application developed for undergraduate and graduate-level courses in **Theory of Computation (TOC)**, **Automata Theory**, and **Formal Languages**.

Conceived by Alan M. Turing in his seminal 1936 paper *"On Computable Numbers, with an Application to the Entscheidungsproblem"*, the Universal Turing Machine represents one of the most profound intellectual breakthroughs of the 20th century: the realization that a single physical machine can execute *any* algorithm simply by reading instructions stored as data. This concept serves as the direct theoretical foundation of the stored-program computer (the Von Neumann architecture) and modern computer science.

This simulator bridges abstract mathematical formalism and practical intuition by letting students design arbitrary deterministic Turing Machines, visualize their canonical encoding into string format $\langle M, w \rangle$, and watch the Universal Turing Machine interpret transitions, manipulate an infinite tape, and determine halting/acceptance conditions dynamically.

---

## 2. Key Features

- **Dynamic, Genuine Simulation Engine:**  
  No hardcoded shortcuts or pre-rendered animations. The simulator executes an authentic fetch-decode-execute cycle matching transitions against the tape dynamically.
- **Multiple Ways to Give Input Manually:**  
  - **Manual Input String Box (`📥 Set on Tape` & Enter Key):** Type any custom input string $w \in \Sigma^*$ and press `Enter` or click `📥 Set on Tape` for immediate validation and tape loading.
  - **Interactive Direct Cell-Click Editing:** Click any individual square on the tape when paused or ready to change its symbol (choose from $\Gamma$ or type custom) or jump the head to that position.
  - **Manual Tape Setup Modal (`✏️ Edit Tape Directly`):** Manually load arbitrary space-separated tape sequences (e.g. `B B 0 0 1 1 B B`), set starting index offsets, and configure custom initial head positions.
- **Formal 7-Tuple Definition Interface:**  
  Define $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{accept}, q_{reject}, B)$ with real-time semantic validation (detects undefined states, alphabet mismatches, determinism violations, missing symbols, and duplicate transitions).
- **Two Encoding Schemes Demonstrated:**  
  - **Canonical Structured Tuple Encoding:** $\langle [M: Q=\{\dots\}, \Sigma=\{\dots\}, \Gamma=\{\dots\}, \delta=\{\dots\}], w="\dots" \rangle$
  - **Hopcroft-Ullman Unary-Binary Encoding:** Pure $\{0, 1\}$ bitstring representation using $0 1^i 0 1^j 0 1^k 0 1^l 0 1^m 0$ encoding for transition $\delta(q_i, X_j) = (q_k, X_l, D_m)$ separated by $00$ and delimited with $000$.
- **Bidirectional Dynamically Expanding Tape:**  
  Interactive visual tape supporting negative and positive cell indices ($-\infty \dots +\infty$). Expands dynamically as the head wanders left or right of the initial string without bounds errors.
- **Pedagogical Step-by-Step Narrative:**  
  Every transition generates an English sentence explaining the internal state transition, symbol read, tape overwrite, and head shift.
- **Comprehensive Controls & Speed Regulation:**  
  Run automatically, Step (single transition), Pause, Resume, Reset, and Stop. Speed adjustable from Slow (1200ms) to Fast (100ms).
- **Transition Table Synchronization:**  
  The active rule is highlighted in the transition table with visual flash feedback during each step.
- **Complete Execution Trace History:**  
  Tracks Step number, Current State, Read Symbol, Write Symbol, Movement, Next State, Head Position, and Tape Snapshot. Can be exported to CSV.
- **Halting Problem Protection:**  
  Configurable safety bound (`Max Steps`, default 1000). Reaching the bound triggers `STEP LIMIT REACHED — MACHINE MAY NOT HALT`, explicitly noting that the bound does not prove non-halting (due to the undecidability of $A_{TM}$).
- **Predefined Educational Presets (1-Click Load):**  
  1. *Strings containing '1'*
  2. *Binary strings ending in '1'*
  3. *Equal 0s and 1s: $L = \{0^n 1^n \mid n \ge 1\}$*
  4. *Unary Incrementer ($w \to w+1$)*
  5. *Binary Palindrome Checker*
  6. *Custom / Manual Machine Editor option*
- **JSON Import / Export:**  
  Save custom machines to JSON files and reload them anytime.
- **Light & Dark Theme Toggle:**  
  Full theme customization persisted via `localStorage`.

---

## 3. Technologies Used

- **HTML5:** Semantic document structure, accessible ARIA attributes, SVG vector iconography.
- **CSS3:** Modern CSS Custom Properties (variables), CSS Grid & Flexbox, hardware-accelerated animations, scroll-snap tape alignment.
- **Vanilla JavaScript (ES6+):** Pure object-oriented modular design (`TuringMachine`, `UTMEncoder`, `InfiniteTape`, `UTMSimulator`, `UIManager`).
- **No External Dependencies / No Backend:** Runs locally in any modern browser simply by opening `index.html`. Zero `npm install`, zero build steps, zero node server required.

---

## 4. How the Universal Turing Machine Works

In standard automata theory:
- A specific Turing Machine $M$ has fixed hardware (states and transitions hardwired).
- A **Universal Turing Machine $U$** takes two inputs encoded onto its tape:
  1. A description of $M$, denoted $\langle M \rangle$.
  2. The input string $w$, denoted $\langle w \rangle$.

### Simulation Fetch-Decode-Execute Cycle:
```
  ┌─────────────────────────┐
  │  Current State: q_sim   │
  │  Head Position: h_sim   │
  └────────────┬────────────┘
               │
               ▼
      Read symbol a = Tape[h_sim]
               │
               ▼
      Scan <M> for δ(q_sim, a)
               │
      ┌────────┴────────┐
      ▼                 ▼
[Rule Found]       [No Rule / Undefined]
Write symbol b           │
Shift head L/R           ▼
q_sim ← q_next      Halt (Accept/Reject)
      │
      ▼
Check q_sim == q_acc or q_rej
```

---

## 5. How Encoding Works

To represent a discrete machine $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{accept}, q_{reject})$ as a linear input readable by a single machine, we assign numerical indices to all elements:

### 1. State Mapping ($Q \to \mathbb{N}^+$)
States are ordered $q_1, q_2, \dots, q_n$ and represented as unary strings:
- $q_0 \to 1$ (unary 1)
- $q_1 \to 11$ (unary 2)
- $q_{accept} \to 111$ (unary 3)
- $q_{reject} \to 1111$ (unary 4)

### 2. Symbol Mapping ($\Gamma \to \mathbb{N}^+$)
Tape symbols are ordered $X_1, X_2, \dots, X_m$:
- $0 \to 1$
- $1 \to 11$
- $B \text{ (Blank)} \to 111$

### 3. Direction Mapping
- $L \text{ (Left)} \to 1$
- $R \text{ (Right)} \to 11$
- $S \text{ (Stay)} \to 111$

### 4. Transition Rule Encoding
A transition rule $\delta(q_i, X_j) = (q_k, X_l, D_m)$ is encoded as:
$$0 1^i 0 1^j 0 1^k 0 1^l 0 1^m 0$$

All transitions are concatenated and delimited with `00`:
$$\langle M \rangle = C_1 00 C_2 00 \dots 00 C_p$$

The complete pair with input $w = w_1 w_2 \dots w_k$ is formatted as:
$$000 \langle M \rangle 000 \langle w \rangle 000$$

---

## 6. How to Run the Project

1. Clone or download this repository.
2. Locate `index.html`.
3. Double-click `index.html` to open it in Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.
4. **No web server or build tool required.** Everything runs client-side immediately.

---

## 7. How to Supply Inputs Manually & Create Custom Machines

### A. Supplying Inputs Manually
1. **Via Manual Input String Box:**
   - Type your custom input string into the **Manual Input String $w$** field.
   - Press **`Enter`** or click **`📥 Set on Tape`**. The tape updates instantly.
2. **Via Direct Cell Clicking:**
   - When the simulation is paused or ready, click on **any cell on the tape**.
   - Pick a symbol from $\Gamma$ (e.g. `0`, `1`, `B`, `X`, `Y`) or type a custom character.
   - Click **`🎯 Place Head Here`** to move the head to that position.
3. **Via the Manual Tape Setup Modal:**
   - Click **`✏️ Edit Tape Directly`** in the tape header.
   - Enter arbitrary space-separated tape strings (e.g. `B B 0 0 1 1 B B`), set initial offset indices, and hit **`Apply to Tape`**.

### B. Creating a Custom Turing Machine Manually
1. In the Example Machine dropdown, select **`✏️ Enter Custom Machine Manually...`** (or click the **`✏️ Machine Definition`** tab).
2. Enter States $Q$, Input Alphabet $\Sigma$, Tape Alphabet $\Gamma$, Blank Symbol $B$, and Start/Accept/Reject states.
3. Add transition rules in the **Transition Table** tab using **`+ Add Rule`**.
4. Click **Validate 7-Tuple Definition** to ensure consistency.
5. Export your machine via **`Export JSON`** to save it locally.

---

## 8. Predefined Example Machines

| Preset | Description | Sample Inputs | Expected Outcome |
| :--- | :--- | :--- | :--- |
| **Ex 1: Contains '1'** | Scans right looking for at least one '1'. | `00100`<br>`000` | ACCEPT<br>REJECT |
| **Ex 2: Ends in '1'** | Verifies if the last symbol before blank is '1'. | `101`<br>`100` | ACCEPT<br>REJECT |
| **Ex 3: $0^n 1^n$** | Standard non-regular language: matches 0s with 1s. | `0011`<br>`001` | ACCEPT<br>REJECT |
| **Ex 4: Unary Incrementer** | Appends '1' to a unary sequence ($w \to w+1$). | `111` | OUTPUT `1111` (ACCEPT) |
| **Ex 5: Palindrome Checker** | Recursive palindrome recognizer over $\{0, 1\}$. | `10101`<br>`1011` | ACCEPT<br>REJECT |

---

## 9. Project Structure

```
Universal-Turing-Machine-Simulator/
│
├── index.html          # Semantic HTML5 layout, interactive tape, modals & controls
├── style.css           # Responsive high-contrast styling, dark/light theme, tape visuals
├── script.js           # Modular ES6 classes (TuringMachine, UTMEncoder, InfiniteTape, UTMSimulator, UIManager)
├── DOCUMENTATION.md    # Comprehensive step-by-step user guide & viva preparation cheat sheet
└── README.md           # Project overview, theoretical foundations & technical reference
```

---

## 10. Limitations

1. **Deterministic Single-Tape Model:**  
   The current implementation simulates standard deterministic single-tape Turing machines. Non-deterministic Turing Machines (NTMs) and Multi-tape TMs are not directly simulated, though they are computationally equivalent in power.
2. **Step Limit Safeguard:**  
   Because the Halting Problem is undecidable, the simulator cannot mathematically predict whether an arbitrary machine will enter an infinite loop. It terminates automatically if the configured `Max Steps` is exceeded.
3. **Linear Visualization Range:**  
   The graphical tape centers on the active head and renders a window of up to 15-25 cells simultaneously. Very long tapes ($>10,000$ cells) can be simulated internally, but DOM rendering performance is optimal up to moderate lengths.

---

## 11. Future Improvements

- State transition graph visualization using interactive SVG node-link diagrams.
- Direct compilation of high-level pseudo-code algorithms into Turing Machine transition tables.
- Simulation of Multi-tape Turing Machines with multiple independent read/write heads.
- Step-by-step Turing reduction demonstrations (e.g. reduction from $A_{TM}$ to $HALT_{TM}$).
