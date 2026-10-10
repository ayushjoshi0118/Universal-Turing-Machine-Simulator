/**
 * ============================================================================
 * UNIVERSAL TURING MACHINE (UTM) SIMULATOR
 * Theory of Computation Educational Tool
 * 
 * Formal Definition:
 *   U(<M, w>) = M(w)
 * 
 * Architecture:
 *   1. TuringMachine: Formal 7-tuple model & validation
 *   2. UTMEncoder: Canonical string & binary Hopcroft-Ullman encoding
 *   3. InfiniteTape: Bidirectional dynamically expanding tape
 *   4. UTMSimulator: Fetch-decode-execute simulation engine
 *   5. UIManager & Controller: UI rendering, events, animation, audio-visual feedback
 * ============================================================================
 */

'use strict';

/* ============================================================================
 * 1. PRESET MACHINES DATABASE
 * Predefined educational machines covering essential Theory of Computation problems
 * ============================================================================ */
const PRESET_MACHINES = {
  // Example 1: Accept strings containing '1'
  contains1: {
    name: "Accept strings containing '1'",
    description: "Accepts any binary string that contains at least one '1'. Halts and accepts on the first '1' found.",
    states: ["q0", "q1", "qaccept", "qreject"],
    inputAlphabet: ["0", "1"],
    tapeAlphabet: ["0", "1", "B"],
    startState: "q0",
    acceptState: "qaccept",
    rejectState: "qreject",
    blankSymbol: "B",
    sampleInputs: ["00100", "000", "1", "010", "00000"],
    defaultInput: "00100",
    transitions: [
      { currentState: "q0", readSymbol: "0", writeSymbol: "0", moveDirection: "R", nextState: "q0" },
      { currentState: "q0", readSymbol: "1", writeSymbol: "1", moveDirection: "R", nextState: "qaccept" },
      { currentState: "q0", readSymbol: "B", writeSymbol: "B", moveDirection: "R", nextState: "qreject" }
    ]
  },

  // Example 2: Binary strings ending in '1'
  endsIn1: {
    name: "Binary strings ending in '1'",
    description: "Determines if a binary string ends with '1'. Reads to the end of input; if the last symbol seen was '1', accepts.",
    states: ["q0", "q1", "qaccept", "qreject"],
    inputAlphabet: ["0", "1"],
    tapeAlphabet: ["0", "1", "B"],
    startState: "q0",
    acceptState: "qaccept",
    rejectState: "qreject",
    blankSymbol: "B",
    sampleInputs: ["101", "100", "1", "0", "1110"],
    defaultInput: "101",
    transitions: [
      { currentState: "q0", readSymbol: "0", writeSymbol: "0", moveDirection: "R", nextState: "q0" },
      { currentState: "q0", readSymbol: "1", writeSymbol: "1", moveDirection: "R", nextState: "q1" },
      { currentState: "q0", readSymbol: "B", writeSymbol: "B", moveDirection: "R", nextState: "qreject" },
      { currentState: "q1", readSymbol: "0", writeSymbol: "0", moveDirection: "R", nextState: "q0" },
      { currentState: "q1", readSymbol: "1", writeSymbol: "1", moveDirection: "R", nextState: "q1" },
      { currentState: "q1", readSymbol: "B", writeSymbol: "B", moveDirection: "L", nextState: "qaccept" }
    ]
  },

  // Example 3: Language 0ⁿ1ⁿ (Equal 0s and 1s, n >= 1)
  anbn: {
    name: "Language 0ⁿ1ⁿ (Equal 0s and 1s)",
    description: "Standard TOC textbook machine. Crosses off leftmost 0 with 'X', searches for matching 1 to cross with 'Y', then rewinds.",
    states: ["q0", "q1", "q2", "q3", "qaccept", "qreject"],
    inputAlphabet: ["0", "1"],
    tapeAlphabet: ["0", "1", "X", "Y", "B"],
    startState: "q0",
    acceptState: "qaccept",
    rejectState: "qreject",
    blankSymbol: "B",
    sampleInputs: ["01", "0011", "000111", "001", "011"],
    defaultInput: "0011",
    transitions: [
      // q0: Start/Match leftmost 0
      { currentState: "q0", readSymbol: "0", writeSymbol: "X", moveDirection: "R", nextState: "q1" },
      { currentState: "q0", readSymbol: "Y", writeSymbol: "Y", moveDirection: "R", nextState: "q3" },
      { currentState: "q0", readSymbol: "1", writeSymbol: "1", moveDirection: "R", nextState: "qreject" },
      { currentState: "q0", readSymbol: "B", writeSymbol: "B", moveDirection: "R", nextState: "qreject" },
      
      // q1: Move right over remaining 0s and Ys to find matching 1
      { currentState: "q1", readSymbol: "0", writeSymbol: "0", moveDirection: "R", nextState: "q1" },
      { currentState: "q1", readSymbol: "Y", writeSymbol: "Y", moveDirection: "R", nextState: "q1" },
      { currentState: "q1", readSymbol: "1", writeSymbol: "Y", moveDirection: "L", nextState: "q2" },
      { currentState: "q1", readSymbol: "B", writeSymbol: "B", moveDirection: "L", nextState: "qreject" },

      // q2: Rewind left over Ys and 0s until hitting the marker X
      { currentState: "q2", readSymbol: "Y", writeSymbol: "Y", moveDirection: "L", nextState: "q2" },
      { currentState: "q2", readSymbol: "0", writeSymbol: "0", moveDirection: "L", nextState: "q2" },
      { currentState: "q2", readSymbol: "X", writeSymbol: "X", moveDirection: "R", nextState: "q0" },

      // q3: Check that all remaining symbols are Y until blank
      { currentState: "q3", readSymbol: "Y", writeSymbol: "Y", moveDirection: "R", nextState: "q3" },
      { currentState: "q3", readSymbol: "B", writeSymbol: "B", moveDirection: "R", nextState: "qaccept" },
      { currentState: "q3", readSymbol: "0", writeSymbol: "0", moveDirection: "R", nextState: "qreject" },
      { currentState: "q3", readSymbol: "1", writeSymbol: "1", moveDirection: "R", nextState: "qreject" }
    ]
  },

  // Example 4: Unary Incrementer (w -> w + 1)
  unaryInc: {
    name: "Unary Incrementer (w -> w+1)",
    description: "Moves past all 1s in unary representation and appends an extra '1' at the first blank cell.",
    states: ["q0", "qaccept", "qreject"],
    inputAlphabet: ["1"],
    tapeAlphabet: ["1", "B"],
    startState: "q0",
    acceptState: "qaccept",
    rejectState: "qreject",
    blankSymbol: "B",
    sampleInputs: ["111", "1", "1111", "11"],
    defaultInput: "111",
    transitions: [
      { currentState: "q0", readSymbol: "1", writeSymbol: "1", moveDirection: "R", nextState: "q0" },
      { currentState: "q0", readSymbol: "B", writeSymbol: "1", moveDirection: "R", nextState: "qaccept" }
    ]
  },

  // Example 5: Binary Palindrome Checker
  palindrome: {
    name: "Binary Palindrome Checker",
    description: "Determines whether a binary string is a palindrome. Matches the first symbol with the last symbol recursively.",
    states: ["q0", "q_read0", "q_read1", "q_check0", "q_check1", "q_rewind", "qaccept", "qreject"],
    inputAlphabet: ["0", "1"],
    tapeAlphabet: ["0", "1", "B"],
    startState: "q0",
    acceptState: "qaccept",
    rejectState: "qreject",
    blankSymbol: "B",
    sampleInputs: ["10101", "1001", "0110", "1011", "0"],
    defaultInput: "10101",
    transitions: [
      // q0: Inspect first character
      { currentState: "q0", readSymbol: "0", writeSymbol: "B", moveDirection: "R", nextState: "q_read0" },
      { currentState: "q0", readSymbol: "1", writeSymbol: "B", moveDirection: "R", nextState: "q_read1" },
      { currentState: "q0", readSymbol: "B", writeSymbol: "B", moveDirection: "R", nextState: "qaccept" },

      // q_read0: Move right to end to check for matching 0
      { currentState: "q_read0", readSymbol: "0", writeSymbol: "0", moveDirection: "R", nextState: "q_read0" },
      { currentState: "q_read0", readSymbol: "1", writeSymbol: "1", moveDirection: "R", nextState: "q_read0" },
      { currentState: "q_read0", readSymbol: "B", writeSymbol: "B", moveDirection: "L", nextState: "q_check0" },

      // q_read1: Move right to end to check for matching 1
      { currentState: "q_read1", readSymbol: "0", writeSymbol: "0", moveDirection: "R", nextState: "q_read1" },
      { currentState: "q_read1", readSymbol: "1", writeSymbol: "1", moveDirection: "R", nextState: "q_read1" },
      { currentState: "q_read1", readSymbol: "B", writeSymbol: "B", moveDirection: "L", nextState: "q_check1" },

      // q_check0: Match rightmost symbol with 0
      { currentState: "q_check0", readSymbol: "0", writeSymbol: "B", moveDirection: "L", nextState: "q_rewind" },
      { currentState: "q_check0", readSymbol: "B", writeSymbol: "B", moveDirection: "R", nextState: "qaccept" }, // Odd length palindrome
      { currentState: "q_check0", readSymbol: "1", writeSymbol: "1", moveDirection: "R", nextState: "qreject" },

      // q_check1: Match rightmost symbol with 1
      { currentState: "q_check1", readSymbol: "1", writeSymbol: "B", moveDirection: "L", nextState: "q_rewind" },
      { currentState: "q_check1", readSymbol: "B", writeSymbol: "B", moveDirection: "R", nextState: "qaccept" }, // Odd length palindrome
      { currentState: "q_check1", readSymbol: "0", writeSymbol: "0", moveDirection: "R", nextState: "qreject" },

      // q_rewind: Rewind left back to first non-blank symbol
      { currentState: "q_rewind", readSymbol: "0", writeSymbol: "0", moveDirection: "L", nextState: "q_rewind" },
      { currentState: "q_rewind", readSymbol: "1", writeSymbol: "1", moveDirection: "L", nextState: "q_rewind" },
      { currentState: "q_rewind", readSymbol: "B", writeSymbol: "B", moveDirection: "R", nextState: "q0" }
    ]
  }
};


/* ============================================================================
 * 2. TURING MACHINE MODEL & COMPREHENSIVE VALIDATOR
 * Represents the 7-tuple: M = (Q, Sigma, Gamma, delta, q0, q_accept, q_reject)
 * ============================================================================ */
class TuringMachine {
  constructor(config = {}) {
    this.name = config.name || "Custom Turing Machine";
    this.description = config.description || "";
    this.states = config.states ? [...config.states] : [];
    this.inputAlphabet = config.inputAlphabet ? [...config.inputAlphabet] : [];
    this.tapeAlphabet = config.tapeAlphabet ? [...config.tapeAlphabet] : [];
    this.startState = config.startState || "";
    this.acceptState = config.acceptState || "";
    this.rejectState = config.rejectState || "";
    this.blankSymbol = config.blankSymbol || "B";
    this.transitions = config.transitions ? JSON.parse(JSON.stringify(config.transitions)) : [];
  }

  /**
   * Comprehensive Theory of Computation Validation
   * Checks for 10+ potential semantic and structural defects
   */
  validate() {
    const errors = [];
    const warnings = [];

    // 1. States validation
    if (!this.states || this.states.length === 0) {
      errors.push("States set Q cannot be empty.");
    } else {
      const stateSet = new Set();
      for (const s of this.states) {
        if (!s || s.trim() === "") {
          errors.push("State name cannot be empty.");
        } else if (stateSet.has(s.trim())) {
          errors.push(`Duplicate state detected: "${s.trim()}".`);
        }
        stateSet.add(s.trim());
      }
    }

    // 2. Alphabets validation
    if (!this.inputAlphabet || this.inputAlphabet.length === 0) {
      errors.push("Input alphabet Σ cannot be empty.");
    }
    if (!this.tapeAlphabet || this.tapeAlphabet.length === 0) {
      errors.push("Tape alphabet Γ cannot be empty.");
    }

    // Blank symbol must be in Gamma, but NOT in Sigma
    if (!this.blankSymbol || this.blankSymbol.trim() === "") {
      errors.push("Blank symbol (⊔ / B) must be specified.");
    } else {
      const blank = this.blankSymbol.trim();
      if (!this.tapeAlphabet.includes(blank)) {
        errors.push(`Blank symbol "${blank}" must be present in tape alphabet Γ.`);
      }
      if (this.inputAlphabet.includes(blank)) {
        errors.push(`Blank symbol "${blank}" CANNOT be part of input alphabet Σ.`);
      }
    }

    // Input alphabet must be a subset of tape alphabet (Σ ⊆ Γ)
    for (const sym of this.inputAlphabet) {
      if (!this.tapeAlphabet.includes(sym)) {
        errors.push(`Input symbol "${sym}" must also be defined in tape alphabet Γ.`);
      }
    }

    // 3. Start, Accept, and Reject states
    if (!this.startState || !this.states.includes(this.startState)) {
      errors.push(`Start state "${this.startState}" is missing or not declared in states set Q.`);
    }
    if (!this.acceptState || !this.states.includes(this.acceptState)) {
      errors.push(`Accept state "${this.acceptState}" is missing or not declared in states set Q.`);
    }
    if (!this.rejectState || !this.states.includes(this.rejectState)) {
      errors.push(`Reject state "${this.rejectState}" is missing or not declared in states set Q.`);
    }
    if (this.acceptState && this.rejectState && this.acceptState === this.rejectState) {
      errors.push(`Accept state ("${this.acceptState}") and Reject state ("${this.rejectState}") must be distinct.`);
    }

    // 4. Transitions validation
    if (!this.transitions || this.transitions.length === 0) {
      warnings.push("No transitions defined. The machine will immediately halt upon start.");
    } else {
      const seenTransitions = new Set();
      this.transitions.forEach((trans, idx) => {
        const rowNum = idx + 1;
        const { currentState, readSymbol, writeSymbol, moveDirection, nextState } = trans;

        if (!currentState || !this.states.includes(currentState)) {
          errors.push(`Transition #${rowNum}: Current state "${currentState}" is not defined in Q.`);
        }
        if (!readSymbol || !this.tapeAlphabet.includes(readSymbol)) {
          errors.push(`Transition #${rowNum}: Read symbol "${readSymbol}" is not in tape alphabet Γ.`);
        }
        if (!writeSymbol || !this.tapeAlphabet.includes(writeSymbol)) {
          errors.push(`Transition #${rowNum}: Write symbol "${writeSymbol}" is not in tape alphabet Γ.`);
        }
        if (!["L", "R", "S"].includes(moveDirection)) {
          errors.push(`Transition #${rowNum}: Move direction "${moveDirection}" is invalid (must be 'L', 'R', or 'S').`);
        }
        if (!nextState || !this.states.includes(nextState)) {
          errors.push(`Transition #${rowNum}: Next state "${nextState}" is not defined in Q.`);
        }

        // Determinism check: delta(q, a) must have at most one rule
        const key = `${currentState}::${readSymbol}`;
        if (seenTransitions.has(key)) {
          errors.push(`Transition #${rowNum}: Non-deterministic or duplicate rule for δ(${currentState}, ${readSymbol}).`);
        }
        seenTransitions.add(key);

        // Warning if transition from accept or reject state
        if (currentState === this.acceptState || currentState === this.rejectState) {
          warnings.push(`Transition #${rowNum}: Outgoing transition from halting state "${currentState}" will never be executed.`);
        }
      });
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Transition lookup: delta(q, a)
   */
  getTransition(state, symbol) {
    return this.transitions.find(t => t.currentState === state && t.readSymbol === symbol) || null;
  }

  /**
   * Validate an input string against Sigma
   */
  validateInputString(inputStr) {
    if (!inputStr) return { isValid: true, invalidChars: [] };
    const invalidChars = [];
    for (const char of inputStr) {
      if (!this.inputAlphabet.includes(char)) {
        if (!invalidChars.includes(char)) invalidChars.push(char);
      }
    }
    return {
      isValid: invalidChars.length === 0,
      invalidChars
    };
  }
}


/* ============================================================================
 * 3. UTM ENCODER
 * Demonstrates formal Theory of Computation encoding:
 * Converts arbitrary TM M into a standard linear description <M>
 * and pairs it with input: <M, w>
 * ============================================================================ */
class UTMEncoder {
  /**
   * Generates integer and unary mapping dictionaries for states and symbols
   */
  static buildDictionaries(tm) {
    const stateMap = {};
    const symbolMap = {};

    // 1. Order states: start state first, then others, accept, reject
    const orderedStates = [
      tm.startState,
      ...tm.states.filter(s => s !== tm.startState && s !== tm.acceptState && s !== tm.rejectState),
      tm.acceptState,
      tm.rejectState
    ].filter(Boolean);
    const uniqueStates = [...new Set(orderedStates)];

    uniqueStates.forEach((st, idx) => {
      stateMap[st] = {
        codeNumber: idx + 1,
        unary: "1".repeat(idx + 1)
      };
    });

    // 2. Order symbols: 0, 1 (if present), others, blank symbol last
    const orderedSymbols = [
      ...tm.tapeAlphabet.filter(sym => sym !== tm.blankSymbol),
      tm.blankSymbol
    ];
    const uniqueSymbols = [...new Set(orderedSymbols)];

    uniqueSymbols.forEach((sym, idx) => {
      symbolMap[sym] = {
        codeNumber: idx + 1,
        unary: "1".repeat(idx + 1)
      };
    });

    const moveMap = {
      "L": { codeNumber: 1, unary: "1", label: "Left" },
      "R": { codeNumber: 2, unary: "11", label: "Right" },
      "S": { codeNumber: 3, unary: "111", label: "Stay" }
    };

    return { stateMap, symbolMap, moveMap };
  }

  /**
   * Encodes a single transition in Hopcroft-Ullman style:
   * 0 1^i 0 1^j 0 1^k 0 1^l 0 1^m 0
   */
  static encodeTransition(trans, dicts) {
    const qI = dicts.stateMap[trans.currentState]?.unary || "1";
    const xJ = dicts.symbolMap[trans.readSymbol]?.unary || "1";
    const qK = dicts.stateMap[trans.nextState]?.unary || "1";
    const xL = dicts.symbolMap[trans.writeSymbol]?.unary || "1";
    const dM = dicts.moveMap[trans.moveDirection]?.unary || "11";

    return `0${qI}0${xJ}0${qK}0${xL}0${dM}0`;
  }

  /**
   * Creates the full UTM encoding package
   */
  static encode(tm, inputStr = "") {
    const dicts = this.buildDictionaries(tm);

    // 1. Binary theoretical encoding (Hopcroft & Ullman)
    const encodedTransitions = tm.transitions.map(t => this.encodeTransition(t, dicts));
    const binaryMachineCode = encodedTransitions.join("00");

    let binaryInputCode = "";
    if (inputStr && inputStr.length > 0) {
      const encodedInputSymbols = inputStr.split("").map(ch => dicts.symbolMap[ch]?.unary || "1");
      binaryInputCode = "0" + encodedInputSymbols.join("0") + "0";
    } else {
      binaryInputCode = "0"; // epsilon
    }

    const completeBinaryCode = `000${binaryMachineCode}000${binaryInputCode}000`;

    // 2. Canonical human-readable structured encoding
    const canonicalTransitions = tm.transitions.map(t => 
      `(${t.currentState},${t.readSymbol})->(${t.nextState},${t.writeSymbol},${t.moveDirection})`
    ).join("; ");

    const canonicalMachine = `[M: Q={${tm.states.join(",")}}; Σ={${tm.inputAlphabet.join(",")}}; Γ={${tm.tapeAlphabet.join(",")}}; q0=${tm.startState}; q_acc=${tm.acceptState}; q_rej=${tm.rejectState}; B=${tm.blankSymbol}; δ={${canonicalTransitions}}]`;
    const canonicalInput = `w="${inputStr}"`;
    const completeCanonical = `<${canonicalMachine}, ${canonicalInput}>`;

    return {
      completeCanonical,
      canonicalMachine,
      canonicalInput,
      completeBinaryCode,
      binaryMachineCode,
      binaryInputCode,
      dicts
    };
  }
}


/* ============================================================================
 * 4. INFINITE TAPE
 * A bidirectional, dynamically expanding tape with negative & positive indices
 * ============================================================================ */
class InfiniteTape {
  constructor(blankSymbol = "B") {
    this.blankSymbol = blankSymbol;
    this.cells = new Map(); // Map<integer_index, string_symbol>
    this.minWrittenIndex = 0;
    this.maxWrittenIndex = 0;
  }

  /**
   * Reset tape and load initial input string starting at position 0
   */
  loadInput(inputStr, blankSymbol = "B") {
    this.blankSymbol = blankSymbol;
    this.cells.clear();
    this.minWrittenIndex = 0;
    this.maxWrittenIndex = Math.max(0, (inputStr ? inputStr.length : 1) - 1);

    if (inputStr && inputStr.length > 0) {
      for (let i = 0; i < inputStr.length; i++) {
        this.cells.set(i, inputStr[i]);
      }
    } else {
      this.cells.set(0, this.blankSymbol);
    }
  }

  /**
   * Read cell at index (returns blankSymbol if unwritten)
   */
  read(index) {
    if (this.cells.has(index)) {
      return this.cells.get(index);
    }
    return this.blankSymbol;
  }

  /**
   * Write cell at index and update boundary tracking
   */
  write(index, symbol) {
    this.cells.set(index, symbol);
    if (index < this.minWrittenIndex) this.minWrittenIndex = index;
    if (index > this.maxWrittenIndex) this.maxWrittenIndex = index;
  }

  /**
   * Returns slice of tape surrounding the head for visualization
   */
  getVisibleWindow(headPos, padding = 6) {
    const leftBound = Math.min(this.minWrittenIndex, headPos) - padding;
    const rightBound = Math.max(this.maxWrittenIndex, headPos) + padding;

    const windowCells = [];
    for (let idx = leftBound; idx <= rightBound; idx++) {
      const sym = this.read(idx);
      windowCells.push({
        index: idx,
        symbol: sym,
        isBlank: sym === this.blankSymbol,
        isHead: idx === headPos
      });
    }
    return windowCells;
  }

  /**
   * Compact string representation for execution history table
   */
  toPreviewString(headPos) {
    const start = Math.min(this.minWrittenIndex, headPos);
    const end = Math.max(this.maxWrittenIndex, headPos);
    let str = "";
    for (let i = start; i <= end; i++) {
      const sym = this.read(i);
      if (i === headPos) {
        str += `[${sym}]`;
      } else {
        str += sym;
      }
    }
    return str;
  }
}


/* ============================================================================
 * 5. UNIVERSAL TURING MACHINE SIMULATOR ENGINE
 * Genuinely simulates the encoded machine via fetch-decode-execute cycle:
 *   U(<M, w>)
 * ============================================================================ */
class UTMSimulator {
  constructor() {
    this.machine = null;
    this.tape = new InfiniteTape();
    this.inputString = "";
    this.currentState = "";
    this.headPosition = 0;
    this.stepCount = 0;
    this.maxSteps = 1000;
    this.status = "READY"; // READY, RUNNING, PAUSED, ACCEPTED, REJECTED, HALTED, STEP_LIMIT, ERROR
    this.history = [];
    this.lastTransition = null;
    this.lastExplanation = "";
  }

  /**
   * Initialize or reset simulation with a validated machine and input string
   */
  init(machine, inputString = "", maxSteps = 1000) {
    this.machine = machine;
    this.inputString = inputString;
    this.maxSteps = parseInt(maxSteps, 10) || 1000;
    this.tape.loadInput(inputString, machine.blankSymbol);
    this.currentState = machine.startState;
    this.headPosition = 0;
    this.stepCount = 0;
    this.history = [];
    this.lastTransition = null;

    // Check immediate start halt condition
    if (this.currentState === this.machine.acceptState) {
      this.status = "ACCEPTED";
      this.lastExplanation = `Machine started directly in the accept state "${this.currentState}". Execution halted immediately.`;
    } else if (this.currentState === this.machine.rejectState) {
      this.status = "REJECTED";
      this.lastExplanation = `Machine started directly in the reject state "${this.currentState}". Execution halted immediately.`;
    } else {
      this.status = "READY";
      this.lastExplanation = `Simulator ready. Head positioned at cell 0 reading '${this.tape.read(0)}' in initial state '${this.currentState}'.`;
    }

    return this.getStateSnapshot();
  }

  /**
   * Execute exactly ONE transition of the Universal Turing Machine
   */
  step() {
    // Cannot step if already in terminal state
    if (["ACCEPTED", "REJECTED", "HALTED", "STEP_LIMIT", "ERROR"].includes(this.status)) {
      return {
        halted: true,
        status: this.status,
        explanation: `Simulation is already completed with status: ${this.status}. Reset to run again.`
      };
    }

    // Halting protection: check step limit
    if (this.stepCount >= this.maxSteps) {
      this.status = "STEP_LIMIT";
      const explanation = `STEP LIMIT REACHED (${this.maxSteps} steps) — The machine may not halt! Reaching this bound prevents an infinite loop, but does not prove whether the machine halts (Halting Problem).`;
      this.lastExplanation = explanation;
      return {
        halted: true,
        status: this.status,
        explanation
      };
    }

    const stateBefore = this.currentState;
    const headBefore = this.headPosition;
    const readSym = this.tape.read(this.headPosition);

    // Scan transition rule delta(stateBefore, readSym) from encoded machine
    const transition = this.machine.getTransition(stateBefore, readSym);

    // Case 1: Undefined Transition -> Machine halts
    if (!transition) {
      let finalStatus = "HALTED";
      let expl = "";

      if (stateBefore === this.machine.acceptState) {
        finalStatus = "ACCEPTED";
        expl = `The UTM halts in accept state "${stateBefore}". Input string accepted!`;
      } else if (stateBefore === this.machine.rejectState) {
        finalStatus = "REJECTED";
        expl = `The UTM halts in reject state "${stateBefore}". Input string rejected!`;
      } else {
        // In standard TOC, an undefined transition on a non-accept state means rejection/halt
        finalStatus = "REJECTED";
        expl = `No transition defined for δ(${stateBefore}, '${readSym}'). By TOC convention, the machine enters implicit rejection and halts.`;
      }

      this.status = finalStatus;
      this.lastExplanation = expl;
      return {
        halted: true,
        status: this.status,
        explanation: expl
      };
    }

    // Case 2: Apply the transition rule
    const { writeSymbol, moveDirection, nextState } = transition;
    this.lastTransition = transition;

    // 1. Overwrite tape cell at head
    this.tape.write(this.headPosition, writeSymbol);

    // 2. Move head
    let moveOffset = 0;
    let moveWord = "Stay";
    if (moveDirection === "R") {
      moveOffset = 1;
      moveWord = "Right";
    } else if (moveDirection === "L") {
      moveOffset = -1;
      moveWord = "Left";
    }
    this.headPosition += moveOffset;

    // 3. Update simulated machine state
    this.currentState = nextState;
    this.stepCount++;

    // 4. Check whether next state is accept or reject
    let isHalted = false;
    let terminationNote = "";

    if (this.currentState === this.machine.acceptState) {
      this.status = "ACCEPTED";
      isHalted = true;
      terminationNote = ` Reached accept state "${this.currentState}". Input Accepted!`;
    } else if (this.currentState === this.machine.rejectState) {
      this.status = "REJECTED";
      isHalted = true;
      terminationNote = ` Reached reject state "${this.currentState}". Input Rejected!`;
    } else if (this.stepCount >= this.maxSteps) {
      this.status = "STEP_LIMIT";
      isHalted = true;
      terminationNote = ` Maximum simulation steps (${this.maxSteps}) reached. Machine may not halt!`;
    }

    // 5. Construct pedagogical step narrative
    const explanation = `The Universal Turing Machine reads simulated state '${stateBefore}' and tape symbol '${readSym}'. It scans the encoded transition rules for δ(${stateBefore}, '${readSym}'). Found rule: writes '${writeSymbol}', moves head ${moveWord} to index ${this.headPosition}, and transitions simulated state to '${nextState}'.${terminationNote}`;
    this.lastExplanation = explanation;

    // 6. Record in execution history trace
    const historyEntry = {
      step: this.stepCount,
      state: stateBefore,
      read: readSym,
      write: writeSymbol,
      move: moveDirection,
      nextState: nextState,
      headPos: this.headPosition,
      tapePreview: this.tape.toPreviewString(this.headPosition),
      explanation
    };
    this.history.push(historyEntry);

    return {
      halted: isHalted,
      status: this.status,
      transition,
      historyEntry,
      explanation
    };
  }

  /**
   * Capture a full state snapshot for UI binding
   */
  getStateSnapshot() {
    return {
      machineName: this.machine ? this.machine.name : "None",
      statesCount: this.machine ? this.machine.states.length : 0,
      transitionsCount: this.machine ? this.machine.transitions.length : 0,
      inputLength: this.inputString.length,
      currentStep: this.stepCount,
      currentState: this.currentState,
      headPosition: this.headPosition,
      status: this.status,
      visibleTape: this.tape.getVisibleWindow(this.headPosition, 7),
      lastTransition: this.lastTransition,
      lastExplanation: this.lastExplanation,
      historyCount: this.history.length
    };
  }
}


/* ============================================================================
 * 6. UI MANAGER & INTERACTION CONTROLLER
 * Coordinates DOM rendering, event handlers, animations, and sound/visual cues
 * ============================================================================ */
class UIManager {
  constructor() {
    this.simulator = new UTMSimulator();
    this.currentMachine = null;
    this.runTimer = null;
    this.simulationSpeed = 400; // ms per step
    this.cachedEncoding = null;

    this.initDOMElements();
    this.bindEvents();
    this.initTheme();
    this.loadPreset("contains1");
  }

  /**
   * Cache all required DOM references
   */
  initDOMElements() {
    // Header & presets
    this.presetSelect = document.getElementById("presetSelect");
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.theoryModalBtn = document.getElementById("theoryModalBtn");
    this.theoryModal = document.getElementById("theoryModal");
    this.closeTheoryBtn = document.getElementById("closeTheoryBtn");
    this.modalOkBtn = document.getElementById("modalOkBtn");

    // Dashboard metrics
    this.dashMachineName = document.getElementById("dashMachineName");
    this.dashStatesCount = document.getElementById("dashStatesCount");
    this.dashTransCount = document.getElementById("dashTransCount");
    this.dashInputLen = document.getElementById("dashInputLen");
    this.dashCurrentStep = document.getElementById("dashCurrentStep");
    this.dashCurrentState = document.getElementById("dashCurrentState");
    this.dashHeadPos = document.getElementById("dashHeadPos");
    this.dashStatus = document.getElementById("dashStatus");

    // Hero tape header metrics
    this.heroCurrentState = document.getElementById("heroCurrentState");
    this.heroHeadPos = document.getElementById("heroHeadPos");
    this.heroCurrentStep = document.getElementById("heroCurrentStep");
    this.headStateTag = document.getElementById("headStateTag");

    // TM Form Inputs
    this.machineNameInput = document.getElementById("machineNameInput");
    this.statesInput = document.getElementById("statesInput");
    this.inputAlphabetInput = document.getElementById("inputAlphabetInput");
    this.tapeAlphabetInput = document.getElementById("tapeAlphabetInput");
    this.blankSymbolInput = document.getElementById("blankSymbolInput");
    this.startStateInput = document.getElementById("startStateInput");
    this.acceptStateInput = document.getElementById("acceptStateInput");
    this.rejectStateInput = document.getElementById("rejectStateInput");
    this.transitionTableBody = document.getElementById("transitionTableBody");
    this.addTransitionBtn = document.getElementById("addTransitionBtn");
    this.validateTmBtn = document.getElementById("validateTmBtn");
    this.validationAlert = document.getElementById("validationAlert");
    this.importBtn = document.getElementById("importBtn");
    this.exportBtn = document.getElementById("exportBtn");
    this.fileInput = document.getElementById("fileInput");

    // Input & Encoding
    this.inputString = document.getElementById("inputString");
    this.clearInputBtn = document.getElementById("clearInputBtn");
    this.inputErrorMsg = document.getElementById("inputErrorMsg");
    this.inputValidationBadge = document.getElementById("inputValidationBadge");
    this.maxStepsInput = document.getElementById("maxStepsInput");
    this.quickSampleContainer = document.getElementById("quickSampleContainer");
    this.encodeBtn = document.getElementById("encodeBtn");
    this.encodedCompleteDisplay = document.getElementById("encodedCompleteDisplay");
    this.encodedMachineDisplay = document.getElementById("encodedMachineDisplay");
    this.encodedInputDisplay = document.getElementById("encodedInputDisplay");
    this.encodedBinaryDisplay = document.getElementById("encodedBinaryDisplay");
    this.dictStatesList = document.getElementById("dictStatesList");
    this.dictSymbolsList = document.getElementById("dictSymbolsList");

    // Architecture diagram elements
    this.archNodeInput = document.getElementById("archNodeInput");
    this.archNodeUTM = document.getElementById("archNodeUTM");
    this.archNodeTape = document.getElementById("archNodeTape");
    this.archTapePreview = document.getElementById("archTapePreview");
    this.archHeadPos = document.getElementById("archHeadPos");

    // Tape visualization
    this.tapeTrack = document.getElementById("tapeTrack");
    this.centerHeadBtn = document.getElementById("centerHeadBtn");
    this.headStateBadge = document.getElementById("headStateBadge");
    this.stepExplanationText = document.getElementById("stepExplanationText");
    this.explStepBadge = document.getElementById("explStepBadge");

    // Controls
    this.startBtn = document.getElementById("startBtn");
    this.stepBtn = document.getElementById("stepBtn");
    this.pauseBtn = document.getElementById("pauseBtn");
    this.resumeBtn = document.getElementById("resumeBtn");
    this.resetBtn = document.getElementById("resetBtn");
    this.stopBtn = document.getElementById("stopBtn");
    this.speedRange = document.getElementById("speedRange");
    this.speedValueLabel = document.getElementById("speedValueLabel");
    this.speedPresetBtns = document.querySelectorAll(".speed-preset-btn");

    // Transition details
    this.activeTransBadge = document.getElementById("activeTransBadge");
    this.paramCurrState = document.getElementById("paramCurrState");
    this.paramReadSym = document.getElementById("paramReadSym");
    this.paramRuleDisplay = document.getElementById("paramRuleDisplay");
    this.paramWriteSym = document.getElementById("paramWriteSym");
    this.paramMoveDir = document.getElementById("paramMoveDir");
    this.paramNextState = document.getElementById("paramNextState");

    // Execution history
    this.historyTableBody = document.getElementById("historyTableBody");
    this.historyCountBadge = document.getElementById("historyCountBadge");
    this.exportHistoryBtn = document.getElementById("exportHistoryBtn");
    this.clearHistoryBtn = document.getElementById("clearHistoryBtn");
    this.toastContainer = document.getElementById("toastContainer");

    // Manual input & Modal elements
    this.applyInputBtn = document.getElementById("applyInputBtn");
    this.manualTapeModalBtn = document.getElementById("manualTapeModalBtn");
    this.manualTapeModal = document.getElementById("manualTapeModal");
    this.closeManualTapeBtn = document.getElementById("closeManualTapeBtn");
    this.cancelManualTapeBtn = document.getElementById("cancelManualTapeBtn");
    this.applyManualTapeBtn = document.getElementById("applyManualTapeBtn");
    this.clearAllTapeBtn = document.getElementById("clearAllTapeBtn");
    this.manualTapeSequenceInput = document.getElementById("manualTapeSequenceInput");
    this.manualTapeStartIndexInput = document.getElementById("manualTapeStartIndexInput");
    this.manualTapeHeadPosInput = document.getElementById("manualTapeHeadPosInput");

    this.cellEditModal = document.getElementById("cellEditModal");
    this.closeCellEditBtn = document.getElementById("closeCellEditBtn");
    this.editCellIndexSpan = document.getElementById("editCellIndexSpan");
    this.cellSymbolPalette = document.getElementById("cellSymbolPalette");
    this.customCellSymbolInput = document.getElementById("customCellSymbolInput");
    this.setHeadToCellBtn = document.getElementById("setHeadToCellBtn");
    this.saveCellSymbolBtn = document.getElementById("saveCellSymbolBtn");
    this.editingCellIndex = 0;
  }

  /**
   * Bind DOM event handlers
   */
  bindEvents() {
    // Preset change or custom machine editor
    this.presetSelect.addEventListener("change", (e) => {
      if (e.target.value === "custom") {
        this.switchToCustomMachineEditor();
      } else {
        this.loadPreset(e.target.value);
      }
    });

    // Theme toggle
    this.themeToggleBtn.addEventListener("click", () => this.toggleTheme());

    // Clean Tab navigation
    document.querySelectorAll(".nav-tabs .tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-tabs .tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add("active");
      });
    });

    // Manual Tape Modal listeners
    if (this.manualTapeModalBtn) {
      this.manualTapeModalBtn.addEventListener("click", () => this.openManualTapeModal());
    }
    if (this.closeManualTapeBtn) {
      this.closeManualTapeBtn.addEventListener("click", () => this.closeManualTapeModal());
    }
    if (this.cancelManualTapeBtn) {
      this.cancelManualTapeBtn.addEventListener("click", () => this.closeManualTapeModal());
    }
    if (this.applyManualTapeBtn) {
      this.applyManualTapeBtn.addEventListener("click", () => this.applyManualTape());
    }
    if (this.clearAllTapeBtn) {
      this.clearAllTapeBtn.addEventListener("click", () => this.clearAllTapeToBlank());
    }
    if (this.manualTapeModal) {
      this.manualTapeModal.addEventListener("click", (e) => {
        if (e.target === this.manualTapeModal) this.closeManualTapeModal();
      });
    }

    // Cell Edit Modal listeners
    if (this.closeCellEditBtn) {
      this.closeCellEditBtn.addEventListener("click", () => this.closeCellEditModal());
    }
    if (this.saveCellSymbolBtn) {
      this.saveCellSymbolBtn.addEventListener("click", () => this.saveCellSymbol());
    }
    if (this.setHeadToCellBtn) {
      this.setHeadToCellBtn.addEventListener("click", () => this.setHeadToEditingCell());
    }
    if (this.customCellSymbolInput) {
      this.customCellSymbolInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.saveCellSymbol();
        }
      });
    }
    if (this.cellEditModal) {
      this.cellEditModal.addEventListener("click", (e) => {
        if (e.target === this.cellEditModal) this.closeCellEditModal();
      });
    }

    // Theory modal if present
    if (this.theoryModalBtn && this.theoryModal) {
      this.theoryModalBtn.addEventListener("click", () => this.openTheoryModal());
      if (this.closeTheoryBtn) this.closeTheoryBtn.addEventListener("click", () => this.closeTheoryModal());
      if (this.modalOkBtn) this.modalOkBtn.addEventListener("click", () => this.closeTheoryModal());
      this.theoryModal.addEventListener("click", (e) => {
        if (e.target === this.theoryModal) this.closeTheoryModal();
      });
    }

    // Theory tabs inside modal
    document.querySelectorAll(".theory-tab-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".theory-tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".theory-pane").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const targetPane = document.getElementById(`pane-${btn.dataset.theory}`);
        if (targetPane) targetPane.classList.add("active");
      });
    });

    // Encoding tabs
    document.querySelectorAll(".encoding-tabs .tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".encoding-tabs .tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.querySelectorAll(".encoding-card .tab-content").forEach(c => c.classList.add("tab-hidden"));
        const targetTab = document.getElementById(btn.dataset.tab);
        if (targetTab) targetTab.classList.remove("tab-hidden");
      });
    });

    // Form inputs real-time validation triggers
    const triggerValidation = () => {
      this.updateMachineFromForm();
      this.validateAndRenderTM();
    };
    [
      this.machineNameInput, this.statesInput, this.inputAlphabetInput,
      this.tapeAlphabetInput, this.blankSymbolInput, this.startStateInput,
      this.acceptStateInput, this.rejectStateInput
    ].forEach(input => {
      input.addEventListener("input", triggerValidation);
    });

    this.addTransitionBtn.addEventListener("click", () => {
      this.addTransitionRow();
      triggerValidation();
    });
    this.validateTmBtn.addEventListener("click", () => {
      const res = this.validateAndRenderTM(true);
      if (res.isValid) {
        this.showToast("Machine definition is valid and ready!", "success");
      }
    });

    // Import/Export
    this.exportBtn.addEventListener("click", () => this.exportMachineJSON());
    this.importBtn.addEventListener("click", () => this.fileInput.click());
    this.fileInput.addEventListener("change", (e) => this.handleFileImport(e));

    // Input string change & validation
    this.inputString.addEventListener("input", () => {
      this.validateInputStringField();
    });
    this.inputString.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.applyManualInput();
      }
    });
    if (this.applyInputBtn) {
      this.applyInputBtn.addEventListener("click", () => {
        this.applyManualInput();
      });
    }
    this.clearInputBtn.addEventListener("click", () => {
      this.inputString.value = "";
      this.validateInputStringField();
      this.resetSimulation();
      this.showToast("Input string cleared to empty (ε).", "info");
    });

    // Encode button
    this.encodeBtn.addEventListener("click", () => this.generateAndDisplayEncoding(true));

    // Simulation Controls
    this.startBtn.addEventListener("click", () => this.startSimulation());
    this.stepBtn.addEventListener("click", () => this.stepSimulation());
    this.pauseBtn.addEventListener("click", () => this.pauseSimulation());
    this.resumeBtn.addEventListener("click", () => this.resumeSimulation());
    this.resetBtn.addEventListener("click", () => this.resetSimulation());
    this.stopBtn.addEventListener("click", () => this.stopSimulation());

    // Tape navigation
    this.centerHeadBtn.addEventListener("click", () => this.centerTapeOnHead());

    // Speed slider & presets
    this.speedRange.addEventListener("input", (e) => {
      this.setSimulationSpeed(parseInt(e.target.value, 10));
    });
    this.speedPresetBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.speedPresetBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.setSimulationSpeed(parseInt(btn.dataset.speed, 10));
      });
    });

    // History buttons
    this.clearHistoryBtn.addEventListener("click", () => this.clearHistory());
    this.exportHistoryBtn.addEventListener("click", () => this.exportHistoryCSV());
  }

  /* ==================== THEME MANAGEMENT ==================== */
  initTheme() {
    const savedTheme = localStorage.getItem("utm_theme") || "theme-dark";
    document.body.className = savedTheme;
  }

  toggleTheme() {
    if (document.body.classList.contains("theme-dark")) {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
      localStorage.setItem("utm_theme", "theme-light");
    } else {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      localStorage.setItem("utm_theme", "theme-dark");
    }
  }

  openTheoryModal() { this.theoryModal.classList.remove("modal-hidden"); }
  closeTheoryModal() { this.theoryModal.classList.add("modal-hidden"); }

  /* ==================== SPEED MANAGEMENT ==================== */
  setSimulationSpeed(speedMs) {
    this.simulationSpeed = speedMs;
    this.speedRange.value = speedMs;

    let label = "Normal";
    if (speedMs >= 1200) label = "Very Slow";
    else if (speedMs >= 700) label = "Slow";
    else if (speedMs >= 300) label = "Normal";
    else if (speedMs >= 100) label = "Fast";
    else label = "Very Fast";

    this.speedValueLabel.textContent = `${label} (${speedMs}ms)`;

    // Update preset button active state
    this.speedPresetBtns.forEach(btn => {
      if (Math.abs(parseInt(btn.dataset.speed, 10) - speedMs) < 50) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // If currently running, reset interval timer
    if (this.runTimer) {
      clearInterval(this.runTimer);
      this.runTimer = setInterval(() => this.runSimulationTick(), this.simulationSpeed);
    }
  }

  /* ==================== PRESET LOADER ==================== */
  loadPreset(presetKey) {
    const preset = PRESET_MACHINES[presetKey];
    if (!preset) return;

    this.stopSimulation();

    this.machineNameInput.value = preset.name;
    this.statesInput.value = preset.states.join(", ");
    this.inputAlphabetInput.value = preset.inputAlphabet.join(", ");
    this.tapeAlphabetInput.value = preset.tapeAlphabet.join(", ");
    this.blankSymbolInput.value = preset.blankSymbol;
    this.startStateInput.value = preset.startState;
    this.acceptStateInput.value = preset.acceptState;
    this.rejectStateInput.value = preset.rejectState;
    this.inputString.value = preset.defaultInput || "";

    // Populate transition table
    this.transitionTableBody.innerHTML = "";
    preset.transitions.forEach(t => this.addTransitionRow(t));

    // Render quick sample chips
    this.renderQuickSamples(preset.sampleInputs);

    // Update model and initialize
    this.updateMachineFromForm();
    const valResult = this.validateAndRenderTM();
    this.validateInputStringField();
    this.generateAndDisplayEncoding(false);
    this.resetSimulation();

    this.showToast(`Loaded preset: ${preset.name}`, "info");
  }

  renderQuickSamples(samples = []) {
    if (!this.quickSampleContainer) return;
    this.quickSampleContainer.innerHTML = '';
    samples.forEach(sample => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "sample-chip font-mono";
      chip.textContent = sample === "" ? "ε (empty)" : sample;
      chip.addEventListener("click", () => {
        this.inputString.value = sample;
        this.validateInputStringField();
        this.resetSimulation();
      });
      this.quickSampleContainer.appendChild(chip);
    });
  }

  /* ==================== TRANSITION TABLE MANAGEMENT ==================== */
  addTransitionRow(t = null) {
    const row = document.createElement("tr");

    const currState = t ? t.currentState : (this.startStateInput.value || "q0");
    const readSym = t ? t.readSymbol : "0";
    const writeSym = t ? t.writeSymbol : "0";
    const moveDir = t ? t.moveDirection : "R";
    const nextState = t ? t.nextState : (this.startStateInput.value || "q0");

    row.innerHTML = `
      <td><input type="text" class="tbl-cell-input t-curr" value="${currState}" placeholder="q0"></td>
      <td><input type="text" class="tbl-cell-input t-read" value="${readSym}" maxlength="2" placeholder="0"></td>
      <td><input type="text" class="tbl-cell-input t-write" value="${writeSym}" maxlength="2" placeholder="0"></td>
      <td>
        <select class="tbl-cell-input t-move">
          <option value="R" ${moveDir === "R" ? "selected" : ""}>R (Right)</option>
          <option value="L" ${moveDir === "L" ? "selected" : ""}>L (Left)</option>
          <option value="S" ${moveDir === "S" ? "selected" : ""}>S (Stay)</option>
        </select>
      </td>
      <td><input type="text" class="tbl-cell-input t-next" value="${nextState}" placeholder="q0"></td>
      <td><button type="button" class="tbl-del-btn" title="Delete transition">&times;</button></td>
    `;

    // Row input listeners
    row.querySelectorAll("input, select").forEach(el => {
      el.addEventListener("input", () => {
        this.updateMachineFromForm();
        this.validateAndRenderTM();
      });
    });

    row.querySelector(".tbl-del-btn").addEventListener("click", () => {
      row.remove();
      this.updateMachineFromForm();
      this.validateAndRenderTM();
    });

    this.transitionTableBody.appendChild(row);
  }

  /* ==================== MODEL EXTRACTION & VALIDATION ==================== */
  updateMachineFromForm() {
    const parseList = (val) => val.split(",").map(s => s.trim()).filter(Boolean);

    const transitions = [];
    this.transitionTableBody.querySelectorAll("tr").forEach(row => {
      const curr = row.querySelector(".t-curr")?.value.trim();
      const read = row.querySelector(".t-read")?.value.trim();
      const write = row.querySelector(".t-write")?.value.trim();
      const move = row.querySelector(".t-move")?.value.trim();
      const next = row.querySelector(".t-next")?.value.trim();

      if (curr || read || write || next) {
        transitions.push({
          currentState: curr || "",
          readSymbol: read || "",
          writeSymbol: write || "",
          moveDirection: move || "R",
          nextState: next || ""
        });
      }
    });

    this.currentMachine = new TuringMachine({
      name: this.machineNameInput.value.trim() || "Untitled Machine",
      states: parseList(this.statesInput.value),
      inputAlphabet: parseList(this.inputAlphabetInput.value),
      tapeAlphabet: parseList(this.tapeAlphabetInput.value),
      blankSymbol: this.blankSymbolInput.value.trim() || "B",
      startState: this.startStateInput.value.trim(),
      acceptState: this.acceptStateInput.value.trim(),
      rejectState: this.rejectStateInput.value.trim(),
      transitions
    });
  }

  validateAndRenderTM(showSuccessAlert = false) {
    if (!this.currentMachine) this.updateMachineFromForm();
    const result = this.currentMachine.validate();

    if (!result.isValid) {
      this.validationAlert.className = "alert-box alert-danger";
      this.validationAlert.innerHTML = `<strong>Invalid Machine Specification:</strong><br>&bull; ${result.errors.join("<br>&bull; ")}`;
      this.startBtn.disabled = true;
      this.stepBtn.disabled = true;
    } else if (result.warnings.length > 0) {
      this.validationAlert.className = "alert-box alert-warning";
      this.validationAlert.innerHTML = `<strong>Machine Valid (with warnings):</strong><br>&bull; ${result.warnings.join("<br>&bull; ")}`;
      this.startBtn.disabled = false;
      this.stepBtn.disabled = false;
    } else if (showSuccessAlert) {
      this.validationAlert.className = "alert-box alert-success";
      this.validationAlert.innerHTML = `<strong>Formal Definition Valid!</strong> Machine adheres to deterministic Turing Machine criteria.`;
      this.startBtn.disabled = false;
      this.stepBtn.disabled = false;
    } else {
      this.validationAlert.className = "alert-box alert-hidden";
      this.startBtn.disabled = false;
      this.stepBtn.disabled = false;
    }

    // Update dashboard counts
    this.dashMachineName.textContent = this.currentMachine.name;
    this.dashStatesCount.textContent = this.currentMachine.states.length;
    this.dashTransCount.textContent = this.currentMachine.transitions.length;

    return result;
  }

  validateInputStringField() {
    if (!this.currentMachine) return true;
    const inputVal = this.inputString.value;
    const res = this.currentMachine.validateInputString(inputVal);

    if (!res.isValid) {
      this.inputValidationBadge.className = "badge badge-neutral";
      this.inputValidationBadge.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
      this.inputValidationBadge.style.color = "#f87171";
      this.inputValidationBadge.textContent = "Invalid Symbols";
      this.inputErrorMsg.textContent = `Symbols [${res.invalidChars.join(", ")}] are not in input alphabet Σ.`;
      this.startBtn.disabled = true;
      this.stepBtn.disabled = true;
      return false;
    } else {
      this.inputValidationBadge.className = "badge badge-success";
      this.inputValidationBadge.textContent = "Valid";
      this.inputErrorMsg.textContent = "";
      this.startBtn.disabled = false;
      this.stepBtn.disabled = false;
      return true;
    }
  }

  /* ==================== UTM ENCODING DISPLAY ==================== */
  generateAndDisplayEncoding(notifyUser = true) {
    const valRes = this.validateAndRenderTM();
    if (!valRes.isValid) {
      this.showToast("Cannot encode invalid machine. Please fix validation errors.", "error");
      return;
    }

    const encoding = UTMEncoder.encode(this.currentMachine, this.inputString.value);
    this.cachedEncoding = encoding;

    this.encodedCompleteDisplay.textContent = encoding.completeCanonical;
    this.encodedMachineDisplay.textContent = encoding.canonicalMachine;
    this.encodedInputDisplay.textContent = encoding.canonicalInput;
    this.encodedBinaryDisplay.textContent = encoding.completeBinaryCode;

    // Render dictionary lists
    const statesHtml = Object.entries(encoding.dicts.stateMap).map(
      ([st, d]) => `<div>${st} &rarr; ${d.unary} (${d.codeNumber})</div>`
    ).join("");
    this.dictStatesList.innerHTML = statesHtml || "&mdash;";

    const symbolsHtml = Object.entries(encoding.dicts.symbolMap).map(
      ([sym, d]) => `<div>'${sym}' &rarr; ${d.unary} (${d.codeNumber})</div>`
    ).join("");
    this.dictSymbolsList.innerHTML = symbolsHtml || "&mdash;";

    if (notifyUser) {
      this.showToast("Machine & Input encoded successfully into <M, w> format!", "success");
    }
  }

  /* ==================== SIMULATION EXECUTION ==================== */
  resetSimulation() {
    this.pauseSimulation();
    this.updateMachineFromForm();
    const val = this.validateAndRenderTM();
    if (!val.isValid) return;

    const maxSteps = parseInt(this.maxStepsInput.value, 10) || 1000;
    this.simulator.init(this.currentMachine, this.inputString.value, maxSteps);

    // Reset controls state
    this.startBtn.disabled = false;
    this.stepBtn.disabled = false;
    this.pauseBtn.disabled = true;
    this.resumeBtn.disabled = true;
    this.stopBtn.disabled = true;

    // Clear active transition highlight
    this.clearTransitionHighlight();
    this.renderState(this.simulator.getStateSnapshot());
    this.clearHistory();
    this.showToast("Simulator reset to initial state.", "info");
  }

  startSimulation() {
    const isInputValid = this.validateInputStringField();
    const valTM = this.validateAndRenderTM();
    if (!isInputValid || !valTM.isValid) {
      this.showToast("Please resolve validation errors before starting.", "error");
      return;
    }

    // If at step 0 or in halted state, re-init
    if (this.simulator.stepCount === 0 || ["ACCEPTED", "REJECTED", "HALTED", "STEP_LIMIT"].includes(this.simulator.status)) {
      this.simulator.init(this.currentMachine, this.inputString.value, parseInt(this.maxStepsInput.value, 10));
    }

    this.simulator.status = "RUNNING";
    this.startBtn.disabled = true;
    this.stepBtn.disabled = true;
    this.pauseBtn.disabled = false;
    this.resumeBtn.disabled = true;
    this.stopBtn.disabled = false;

    this.animateArchFlow(true);
    this.renderState(this.simulator.getStateSnapshot());

    if (this.runTimer) clearInterval(this.runTimer);
    this.runTimer = setInterval(() => this.runSimulationTick(), this.simulationSpeed);
  }

  runSimulationTick() {
    const result = this.simulator.step();
    this.renderState(this.simulator.getStateSnapshot());

    if (result.transition) {
      this.highlightTransitionInTable(result.transition);
    }

    if (result.historyEntry) {
      this.appendHistoryRow(result.historyEntry);
    }

    if (result.halted) {
      this.pauseSimulation();
      this.handleSimulationFinished(result.status);
    }
  }

  stepSimulation() {
    const isInputValid = this.validateInputStringField();
    const valTM = this.validateAndRenderTM();
    if (!isInputValid || !valTM.isValid) {
      this.showToast("Cannot step: resolve validation errors first.", "error");
      return;
    }

    if (this.simulator.stepCount === 0 && this.simulator.status === "READY") {
      this.simulator.init(this.currentMachine, this.inputString.value, parseInt(this.maxStepsInput.value, 10));
    }

    const result = this.simulator.step();
    this.renderState(this.simulator.getStateSnapshot());

    if (result.transition) {
      this.highlightTransitionInTable(result.transition);
    }

    if (result.historyEntry) {
      this.appendHistoryRow(result.historyEntry);
    }

    if (result.halted) {
      this.handleSimulationFinished(result.status);
    }
  }

  pauseSimulation() {
    if (this.runTimer) {
      clearInterval(this.runTimer);
      this.runTimer = null;
    }
    this.animateArchFlow(false);

    if (this.simulator.status === "RUNNING") {
      this.simulator.status = "PAUSED";
      this.pauseBtn.disabled = true;
      this.resumeBtn.disabled = false;
      this.stepBtn.disabled = false;
      this.renderState(this.simulator.getStateSnapshot());
      this.showToast("Simulation paused.", "info");
    }
  }

  resumeSimulation() {
    if (this.simulator.status === "PAUSED") {
      this.startSimulation();
    }
  }

  stopSimulation() {
    if (this.runTimer) {
      clearInterval(this.runTimer);
      this.runTimer = null;
    }
    this.animateArchFlow(false);
    this.simulator.status = "HALTED";

    this.startBtn.disabled = false;
    this.stepBtn.disabled = true;
    this.pauseBtn.disabled = true;
    this.resumeBtn.disabled = true;
    this.stopBtn.disabled = true;

    this.renderState(this.simulator.getStateSnapshot());
    this.showToast("Simulation stopped and halted.", "warning");
  }

  handleSimulationFinished(finalStatus) {
    this.startBtn.disabled = false;
    this.stepBtn.disabled = true;
    this.pauseBtn.disabled = true;
    this.resumeBtn.disabled = true;
    this.stopBtn.disabled = true;
    this.animateArchFlow(false);

    if (finalStatus === "ACCEPTED") {
      this.showToast("🎉 Input ACCEPTED by Turing Machine!", "success");
    } else if (finalStatus === "REJECTED") {
      this.showToast("🛑 Input REJECTED by Turing Machine.", "error");
    } else if (finalStatus === "STEP_LIMIT") {
      this.showToast("⚠️ Step limit reached — Machine may not halt!", "warning");
    } else {
      this.showToast(`Simulation ended with status: ${finalStatus}`, "info");
    }
  }

  /* ==================== UI STATE RENDERING ==================== */
  renderState(snapshot) {
    // 1. Dashboard metrics (if present in DOM)
    if (this.dashMachineName) this.dashMachineName.textContent = snapshot.machineName;
    if (this.dashStatesCount) this.dashStatesCount.textContent = snapshot.statesCount;
    if (this.dashTransCount) this.dashTransCount.textContent = snapshot.transitionsCount;
    if (this.dashInputLen) this.dashInputLen.textContent = snapshot.inputLength;
    if (this.dashCurrentStep) this.dashCurrentStep.textContent = snapshot.currentStep;
    if (this.dashCurrentState) this.dashCurrentState.textContent = snapshot.currentState;
    if (this.dashHeadPos) this.dashHeadPos.textContent = snapshot.headPosition;

    // Hero metrics
    if (this.heroCurrentState) this.heroCurrentState.textContent = snapshot.currentState;
    if (this.heroHeadPos) this.heroHeadPos.textContent = snapshot.headPosition;
    if (this.heroCurrentStep) this.heroCurrentStep.textContent = snapshot.currentStep;
    if (this.headStateTag) this.headStateTag.textContent = snapshot.currentState;

    // Status Badge / Pill
    if (this.dashStatus) {
      this.dashStatus.textContent = snapshot.status;
      this.dashStatus.className = `status-pill status-${snapshot.status.toLowerCase().replace(/_/g, "-")}`;
    }

    // 2. Tape Visualization
    this.renderTape(snapshot.visibleTape, snapshot.headPosition, snapshot.currentState);

    // 3. Step narrative explanation
    if (this.stepExplanationText) {
      this.stepExplanationText.innerHTML = snapshot.lastExplanation || "Ready to execute simulation.";
    }
    if (this.explStepBadge) {
      this.explStepBadge.textContent = `Step ${snapshot.currentStep}`;
    }

    // 4. Architecture Diagram mini-preview
    if (this.archHeadPos) this.archHeadPos.textContent = snapshot.headPosition;
    if (this.archTapePreview) this.archTapePreview.textContent = this.simulator.tape.toPreviewString(snapshot.headPosition);

    // 5. Active transition details
    if (snapshot.lastTransition) {
      const t = snapshot.lastTransition;
      if (this.activeTransBadge) {
        this.activeTransBadge.className = "badge badge-primary";
        this.activeTransBadge.textContent = "Executing";
      }
      if (this.paramCurrState) this.paramCurrState.textContent = t.currentState;
      if (this.paramReadSym) this.paramReadSym.textContent = `'${t.readSymbol}'`;
      if (this.paramRuleDisplay) this.paramRuleDisplay.textContent = `δ(${t.currentState}, ${t.readSymbol}) → (${t.nextState}, ${t.writeSymbol}, ${t.moveDirection})`;
      if (this.paramWriteSym) this.paramWriteSym.textContent = `'${t.writeSymbol}'`;
      if (this.paramMoveDir) this.paramMoveDir.textContent = t.moveDirection === "R" ? "Right (R)" : t.moveDirection === "L" ? "Left (L)" : "Stay (S)";
      if (this.paramNextState) this.paramNextState.textContent = t.nextState;
    } else {
      if (this.activeTransBadge) {
        this.activeTransBadge.className = "badge badge-neutral";
        this.activeTransBadge.textContent = "Idle";
      }
      if (this.paramCurrState) this.paramCurrState.textContent = snapshot.currentState;
      if (this.paramReadSym) this.paramReadSym.textContent = `'${this.simulator.tape.read(snapshot.headPosition)}'`;
      if (this.paramRuleDisplay) this.paramRuleDisplay.textContent = `δ(${snapshot.currentState}, ${this.simulator.tape.read(snapshot.headPosition)}) = ?`;
      if (this.paramWriteSym) this.paramWriteSym.textContent = "—";
      if (this.paramMoveDir) this.paramMoveDir.textContent = "—";
      if (this.paramNextState) this.paramNextState.textContent = "—";
    }
  }

  renderTape(cellsWindow, headPos, currentState) {
    this.tapeTrack.innerHTML = "";
    this.headStateBadge.textContent = currentState;

    let activeCellElement = null;

    cellsWindow.forEach(cell => {
      const cellEl = document.createElement("div");
      cellEl.className = `tape-cell ${cell.isBlank ? "blank-cell" : ""} ${cell.isHead ? "active-cell" : ""}`;
      cellEl.title = `Click to edit cell #${cell.index} manually`;
      cellEl.innerHTML = `
        <span class="tape-cell-index">${cell.index}</span>
        <span class="tape-cell-symbol">${cell.symbol}</span>
      `;
      // Allow user to click any cell to edit its symbol manually
      cellEl.addEventListener("click", () => {
        this.openCellEditModal(cell.index, cell.symbol);
      });
      if (cell.isHead) {
        activeCellElement = cellEl;
      }
      this.tapeTrack.appendChild(cellEl);
    });

    // Auto-scroll tape to keep active head in center view
    if (activeCellElement) {
      activeCellElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }

  centerTapeOnHead() {
    const activeEl = this.tapeTrack.querySelector(".active-cell");
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }

  /* ==================== MANUAL INPUT & EDITING ==================== */
  applyManualInput() {
    const isValid = this.validateInputStringField();
    if (!isValid) {
      this.showToast("Cannot load invalid input. Check alphabet Σ.", "error");
      return;
    }
    this.resetSimulation();
    this.showToast(`Manual input "${this.inputString.value || 'ε'}" loaded onto tape!`, "success");
  }

  switchToCustomMachineEditor() {
    this.stopSimulation();
    document.querySelectorAll(".nav-tabs .tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    const editorTabBtn = document.querySelector('.nav-tabs .tab-btn[data-tab="tab-editor"]');
    const editorPane = document.getElementById("tab-editor");
    if (editorTabBtn) editorTabBtn.classList.add("active");
    if (editorPane) editorPane.classList.add("active");

    this.machineNameInput.value = "Custom Turing Machine";
    this.showToast("Switched to Manual Machine Editor. Define your 7-tuple and transitions below!", "info");
  }

  openCellEditModal(cellIndex, currentSymbol) {
    if (this.simulator.status === "RUNNING") {
      this.showToast("Pause or reset the simulation before editing cells manually.", "warning");
      return;
    }
    this.editingCellIndex = cellIndex;
    if (this.editCellIndexSpan) this.editCellIndexSpan.textContent = cellIndex;
    if (this.customCellSymbolInput) this.customCellSymbolInput.value = currentSymbol;

    // Populate quick symbol buttons from tape alphabet Γ
    if (this.cellSymbolPalette) {
      this.cellSymbolPalette.innerHTML = "";
      const alphabet = this.currentMachine && this.currentMachine.tapeAlphabet.length > 0 
        ? this.currentMachine.tapeAlphabet 
        : ["0", "1", "B"];
      alphabet.forEach(sym => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `symbol-btn ${sym === currentSymbol ? "selected" : ""}`;
        btn.textContent = sym;
        btn.addEventListener("click", () => {
          this.cellSymbolPalette.querySelectorAll(".symbol-btn").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          if (this.customCellSymbolInput) this.customCellSymbolInput.value = sym;
        });
        this.cellSymbolPalette.appendChild(btn);
      });
    }

    if (this.cellEditModal) {
      this.cellEditModal.classList.remove("modal-hidden");
      if (this.customCellSymbolInput) this.customCellSymbolInput.focus();
    }
  }

  closeCellEditModal() {
    if (this.cellEditModal) this.cellEditModal.classList.add("modal-hidden");
  }

  saveCellSymbol() {
    const rawVal = this.customCellSymbolInput ? this.customCellSymbolInput.value.trim() : "";
    const blank = this.currentMachine ? this.currentMachine.blankSymbol : "B";
    const newSymbol = rawVal.length > 0 ? rawVal : blank;
    
    this.simulator.tape.write(this.editingCellIndex, newSymbol);
    this.closeCellEditModal();
    this.renderState(this.simulator.getStateSnapshot());
    this.showToast(`Cell #${this.editingCellIndex} manually updated to '${newSymbol}'.`, "success");
  }

  setHeadToEditingCell() {
    this.simulator.headPosition = this.editingCellIndex;
    this.closeCellEditModal();
    this.renderState(this.simulator.getStateSnapshot());
    this.showToast(`Tape head manually positioned at cell #${this.editingCellIndex}.`, "info");
  }

  openManualTapeModal() {
    if (this.simulator.status === "RUNNING") {
      this.showToast("Pause or reset the simulation before configuring the tape.", "warning");
      return;
    }

    if (this.manualTapeSequenceInput) {
      this.manualTapeSequenceInput.value = this.inputString.value || "0 0 1 1";
    }
    if (this.manualTapeStartIndexInput) {
      this.manualTapeStartIndexInput.value = 0;
    }
    if (this.manualTapeHeadPosInput) {
      this.manualTapeHeadPosInput.value = this.simulator.headPosition || 0;
    }

    if (this.manualTapeModal) {
      this.manualTapeModal.classList.remove("modal-hidden");
    }
  }

  closeManualTapeModal() {
    if (this.manualTapeModal) this.manualTapeModal.classList.add("modal-hidden");
  }

  applyManualTape() {
    const rawSeq = (this.manualTapeSequenceInput?.value || "").trim();
    const startIndex = parseInt(this.manualTapeStartIndexInput?.value, 10) || 0;
    const headPos = parseInt(this.manualTapeHeadPosInput?.value, 10) || 0;
    const blank = this.currentMachine ? this.currentMachine.blankSymbol : "B";

    let symbols = [];
    if (rawSeq.includes(" ")) {
      symbols = rawSeq.split(/\s+/).filter(Boolean);
    } else if (rawSeq.length > 0) {
      symbols = rawSeq.split("");
    } else {
      symbols = [blank];
    }

    this.simulator.tape.cells.clear();
    this.simulator.tape.minWrittenIndex = startIndex;
    this.simulator.tape.maxWrittenIndex = startIndex + Math.max(0, symbols.length - 1);

    symbols.forEach((sym, offset) => {
      this.simulator.tape.cells.set(startIndex + offset, sym);
    });

    this.simulator.headPosition = headPos;
    this.simulator.stepCount = 0;
    this.simulator.status = "READY";
    this.simulator.history = [];
    this.simulator.lastTransition = null;
    this.simulator.lastExplanation = `Manual tape sequence loaded. Head positioned at cell ${headPos} reading '${this.simulator.tape.read(headPos)}'.`;

    this.closeManualTapeModal();
    this.clearHistory();
    this.renderState(this.simulator.getStateSnapshot());
    this.showToast(`Manual tape loaded with ${symbols.length} symbols!`, "success");
  }

  clearAllTapeToBlank() {
    const blank = this.currentMachine ? this.currentMachine.blankSymbol : "B";
    this.simulator.tape.cells.clear();
    this.simulator.tape.cells.set(0, blank);
    this.simulator.tape.minWrittenIndex = 0;
    this.simulator.tape.maxWrittenIndex = 0;
    this.simulator.headPosition = 0;
    this.simulator.stepCount = 0;
    this.simulator.status = "READY";
    this.simulator.history = [];
    this.simulator.lastTransition = null;
    this.simulator.lastExplanation = "Tape cleared manually to blanks.";

    this.closeManualTapeModal();
    this.clearHistory();
    this.renderState(this.simulator.getStateSnapshot());
    this.showToast("All tape cells reset to blank.", "info");
  }

  /* ==================== TRANSITION HIGHLIGHTING ==================== */
  highlightTransitionInTable(trans) {
    this.clearTransitionHighlight();
    const rows = this.transitionTableBody.querySelectorAll("tr");
    rows.forEach(row => {
      const c = row.querySelector(".t-curr")?.value.trim();
      const r = row.querySelector(".t-read")?.value.trim();
      if (c === trans.currentState && r === trans.readSymbol) {
        row.classList.add("active-transition-row");
        row.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  clearTransitionHighlight() {
    this.transitionTableBody.querySelectorAll(".active-transition-row").forEach(r => {
      r.classList.remove("active-transition-row");
    });
  }

  animateArchFlow(isRunning) {
    const arrows = document.querySelectorAll(".arch-arrow");
    const utmNode = this.archNodeUTM;
    if (isRunning) {
      arrows.forEach(a => a.classList.add("arch-arrow-running"));
      utmNode.classList.add("arch-active-pulse");
    } else {
      arrows.forEach(a => a.classList.remove("arch-arrow-running"));
      utmNode.classList.remove("arch-active-pulse");
    }
  }

  /* ==================== EXECUTION HISTORY ==================== */
  appendHistoryRow(entry) {
    const emptyRow = this.historyTableBody.querySelector(".empty-history-row");
    if (emptyRow) emptyRow.remove();

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.step}</td>
      <td><span class="state-pill">${entry.state}</span></td>
      <td>'${entry.read}'</td>
      <td>'${entry.write}'</td>
      <td>${entry.move}</td>
      <td><span class="next-state-pill">${entry.nextState}</span></td>
      <td>${entry.headPos}</td>
      <td class="font-mono text-xs">${entry.tapePreview}</td>
    `;
    this.historyTableBody.insertBefore(row, this.historyTableBody.firstChild);
    this.historyCountBadge.textContent = `${this.simulator.history.length} Steps`;
  }

  clearHistory() {
    this.historyTableBody.innerHTML = `
      <tr class="empty-history-row">
        <td colspan="8">No transitions executed yet. Start simulation to record execution trace.</td>
      </tr>
    `;
    this.historyCountBadge.textContent = "0 Steps";
  }

  exportHistoryCSV() {
    if (!this.simulator.history || this.simulator.history.length === 0) {
      this.showToast("No execution history to export.", "warning");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Step,Current State,Read Symbol,Write Symbol,Move,Next State,Head Position,Tape Preview\n";

    this.simulator.history.forEach(h => {
      csvContent += `${h.step},"${h.state}","${h.read}","${h.write}","${h.move}","${h.nextState}",${h.headPos},"${h.tapePreview}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `utm_execution_history_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showToast("Execution history exported as CSV.", "success");
  }

  /* ==================== IMPORT / EXPORT JSON ==================== */
  exportMachineJSON() {
    this.updateMachineFromForm();
    const val = this.validateAndRenderTM();
    if (!val.isValid) {
      this.showToast("Machine has validation errors. Fix before exporting.", "error");
      return;
    }

    const exportData = {
      name: this.currentMachine.name,
      description: this.currentMachine.description,
      states: this.currentMachine.states,
      inputAlphabet: this.currentMachine.inputAlphabet,
      tapeAlphabet: this.currentMachine.tapeAlphabet,
      startState: this.currentMachine.startState,
      acceptState: this.currentMachine.acceptState,
      rejectState: this.currentMachine.rejectState,
      blankSymbol: this.currentMachine.blankSymbol,
      transitions: this.currentMachine.transitions
    };

    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const safeName = (this.currentMachine.name || "turing_machine").toLowerCase().replace(/[^a-z0-9]/g, "_");
    link.href = url;
    link.download = `${safeName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    this.showToast(`Exported machine to ${safeName}.json`, "success");
  }

  handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (!imported.states || !imported.transitions) {
          throw new Error("Invalid schema: missing states or transitions array.");
        }

        this.machineNameInput.value = imported.name || "Imported Machine";
        this.statesInput.value = Array.isArray(imported.states) ? imported.states.join(", ") : "";
        this.inputAlphabetInput.value = Array.isArray(imported.inputAlphabet) ? imported.inputAlphabet.join(", ") : "";
        this.tapeAlphabetInput.value = Array.isArray(imported.tapeAlphabet) ? imported.tapeAlphabet.join(", ") : "";
        this.blankSymbolInput.value = imported.blankSymbol || "B";
        this.startStateInput.value = imported.startState || "";
        this.acceptStateInput.value = imported.acceptState || "";
        this.rejectStateInput.value = imported.rejectState || "";

        this.transitionTableBody.innerHTML = "";
        imported.transitions.forEach(t => this.addTransitionRow(t));

        this.updateMachineFromForm();
        this.validateAndRenderTM(true);
        this.generateAndDisplayEncoding(false);
        this.resetSimulation();
        this.showToast(`Imported machine "${imported.name || 'Custom'}" successfully!`, "success");
      } catch (err) {
        this.showToast(`Import failed: ${err.message}`, "error");
      }
      this.fileInput.value = "";
    };
    reader.readAsText(file);
  }

  /* ==================== NOTIFICATIONS (TOASTS) ==================== */
  showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "error") icon = "❌";
    if (type === "warning") icon = "⚠️";

    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

// Bootstrap application once DOM is ready (in browser environment)
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    window.utmApp = new UIManager();
  });
}

// Export for module/testing environments if available
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PRESET_MACHINES,
    TuringMachine,
    UTMEncoder,
    InfiniteTape,
    UTMSimulator,
    UIManager
  };
}
