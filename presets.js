/**
 * ============================================================================
 * UNIVERSAL TURING MACHINE SIMULATOR - PRESET MACHINES DATABASE
 * ============================================================================
 * Categorized by computation type:
 *   - String & Language Recognizers (strings)
 *   - Arithmetic & Integer Operations (integers)
 *   - Grammars & Non-Regular Languages (grammars)
 *   - String Transformations & Data Manipulation (transformations)
 *   - Advanced Machines & Enumerators (advanced)
 *
 * Each preset is a genuine 7-tuple deterministic Turing Machine (Q, Σ, Γ, B, q0, qaccept, qreject)
 * capable of authentic step-by-step execution on the tape.
 *
 * Compatible with both browser environments (window.PRESET_MACHINES) and Node.js.
 * ============================================================================
 */

const PRESET_MACHINES = {
  "contains1": {
    "id": "contains1",
    "name": "Accept strings containing '1'",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Accepts any binary string that contains at least one '1'. Halts and accepts on the first '1' found.",
    "language": "L = { w ∈ {0,1}* | w contains at least one '1' }",
    "states": [
      "q0",
      "q1",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "blankSymbol": "B",
    "sampleInputs": [
      "00100",
      "000",
      "1",
      "010",
      "00000"
    ],
    "defaultInput": "00100",
    "testCases": [
      {
        "input": "00100",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "000",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "endsIn1": {
    "id": "endsIn1",
    "name": "Binary strings ending in '1'",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Determines if a binary string ends with '1'. Reads to the end of input; if the last symbol seen was '1', accepts.",
    "language": "L = { w ∈ {0,1}* | w ends in '1' }",
    "states": [
      "q0",
      "q1",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "blankSymbol": "B",
    "sampleInputs": [
      "101",
      "100",
      "1",
      "0",
      "1110"
    ],
    "defaultInput": "101",
    "testCases": [
      {
        "input": "101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "100",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qaccept"
      }
    ]
  },
  "anbn": {
    "id": "anbn",
    "name": "Language 0ⁿ1ⁿ (Equal 0s and 1s)",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Accepts strings with an equal number of 0s followed by an equal number of 1s (0ⁿ1ⁿ, n ≥ 1). Crosses off matching pairs.",
    "language": "L = { 0ⁿ1ⁿ | n ≥ 1 }",
    "states": [
      "q0",
      "q1",
      "q2",
      "q3",
      "q4",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "X",
      "Y",
      "B"
    ],
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "blankSymbol": "B",
    "sampleInputs": [
      "0011",
      "01",
      "000111",
      "001",
      "011"
    ],
    "defaultInput": "0011",
    "testCases": [
      {
        "input": "0011",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "01",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "001",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "011",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q3"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q2"
      },
      {
        "currentState": "q1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q2",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q3",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q3"
      },
      {
        "currentState": "q3",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q3",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q3",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "unaryInc": {
    "id": "unaryInc",
    "name": "Unary Incrementer (w → w+1)",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes unary increment: appends a '1' to a sequence of 1s (e.g., 111 becomes 1111).",
    "language": "f(1ⁿ) = 1ⁿ⁺¹ (n ≥ 0)",
    "states": [
      "q0",
      "q1",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "1"
    ],
    "tapeAlphabet": [
      "1",
      "B"
    ],
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "blankSymbol": "B",
    "sampleInputs": [
      "111",
      "1",
      "1111",
      "11"
    ],
    "defaultInput": "111",
    "testCases": [
      {
        "input": "111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1111"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11"
      },
      {
        "input": "1111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11111"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "palindrome": {
    "id": "palindrome",
    "name": "Binary Palindrome Checker",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Determines whether a binary string is a palindrome (reads identically forwards and backwards).",
    "language": "L = { w ∈ {0,1}* | w = wᴿ }",
    "states": [
      "q0",
      "q_read0",
      "q_read1",
      "q_check0",
      "q_check1",
      "q_rewind",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "blankSymbol": "B",
    "sampleInputs": [
      "10101",
      "1001",
      "0110",
      "1011",
      "0"
    ],
    "defaultInput": "10101",
    "testCases": [
      {
        "input": "10101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1001",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1011",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_read0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_read1"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_read0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_read0"
      },
      {
        "currentState": "q_read0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_read0"
      },
      {
        "currentState": "q_read0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_check0"
      },
      {
        "currentState": "q_read1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_read1"
      },
      {
        "currentState": "q_read1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_read1"
      },
      {
        "currentState": "q_read1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_check1"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "0",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "1",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q0"
      }
    ]
  },
  "tm01": {
    "id": "tm01",
    "name": "Universal Binary String Recognizer",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Accepts every finite binary string over {0,1}, including the empty string.",
    "language": "L = {0, 1}*",
    "states": [
      "q0",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "010101",
      "111000",
      "001100",
      ""
    ],
    "defaultInput": "010101",
    "testCases": [
      {
        "input": "010101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "111000",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "001100",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm02": {
    "id": "tm02",
    "name": "Contains at Least One 1",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Scans the tape rightward looking for symbol '1'. Halts and accepts as soon as '1' is detected.",
    "language": "L = {w ∈ {0,1}* | w contains at least one '1'}",
    "states": [
      "q0",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "0101",
      "00100",
      "1",
      "000",
      ""
    ],
    "defaultInput": "0101",
    "testCases": [
      {
        "input": "0101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "00100",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "000",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm03": {
    "id": "tm03",
    "name": "Binary Strings Starting with 0",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Inspects the first symbol at cell 0. If '0', traverses the remaining string and accepts; otherwise rejects.",
    "language": "L = {0w | w ∈ {0,1}*}",
    "states": [
      "q0",
      "q_scan",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "01101",
      "0",
      "10101",
      "1",
      ""
    ],
    "defaultInput": "01101",
    "testCases": [
      {
        "input": "01101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "10101",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "1",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_scan",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan"
      },
      {
        "currentState": "q_scan",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan"
      },
      {
        "currentState": "q_scan",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm04": {
    "id": "tm04",
    "name": "Binary Strings Ending with 1",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Traverses to the right end of the binary string, tracking the last seen symbol in its finite state control.",
    "language": "L = {w1 | w ∈ {0,1}*}",
    "states": [
      "q0",
      "q_last0",
      "q_last1",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "1011",
      "1",
      "1000",
      "0",
      ""
    ],
    "defaultInput": "1011",
    "testCases": [
      {
        "input": "1011",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1000",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "0",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_last0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_last1"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_last0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_last0"
      },
      {
        "currentState": "q_last0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_last1"
      },
      {
        "currentState": "q_last0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_last1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_last0"
      },
      {
        "currentState": "q_last1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_last1"
      },
      {
        "currentState": "q_last1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm05": {
    "id": "tm05",
    "name": "Even Number of 0s",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Maintains parity of zeros toggling between q_even and q_odd. Accepts if in q_even when blank is reached.",
    "language": "L = {w ∈ {0,1}* | #0(w) mod 2 = 0}",
    "states": [
      "q_even",
      "q_odd",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q_even",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "0101",
      "111",
      "",
      "000",
      "0"
    ],
    "defaultInput": "0101",
    "testCases": [
      {
        "input": "0101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "111",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "000",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "0",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q_even",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_odd"
      },
      {
        "currentState": "q_even",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_even"
      },
      {
        "currentState": "q_even",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_even"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_odd"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm06": {
    "id": "tm06",
    "name": "Odd Number of 1s",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Tracks parity of ones toggling between q_even and q_odd. Accepts if in q_odd when blank is reached.",
    "language": "L = {w ∈ {0,1}* | #1(w) mod 2 = 1}",
    "states": [
      "q_even",
      "q_odd",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q_even",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "10101",
      "1",
      "010",
      "1100",
      ""
    ],
    "defaultInput": "10101",
    "testCases": [
      {
        "input": "10101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "010",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1100",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q_even",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_odd"
      },
      {
        "currentState": "q_even",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_even"
      },
      {
        "currentState": "q_even",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_even"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_odd"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm07": {
    "id": "tm07",
    "name": "Even Number of a's",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Determines if string over {a,b} contains an even count of symbol 'a'.",
    "language": "L = {w ∈ {a,b}* | #a(w) mod 2 = 0}",
    "states": [
      "q_even",
      "q_odd",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "a",
      "b"
    ],
    "tapeAlphabet": [
      "a",
      "b",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q_even",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "ababbbaa",
      "bb",
      "",
      "aaa",
      "ba"
    ],
    "defaultInput": "ababbbaa",
    "testCases": [
      {
        "input": "ababbbaa",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "bb",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "aaa",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "ba",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q_even",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_odd"
      },
      {
        "currentState": "q_even",
        "readSymbol": "b",
        "writeSymbol": "b",
        "moveDirection": "R",
        "nextState": "q_even"
      },
      {
        "currentState": "q_even",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_even"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "b",
        "writeSymbol": "b",
        "moveDirection": "R",
        "nextState": "q_odd"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm08": {
    "id": "tm08",
    "name": "Odd Number of b's",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Determines if string over {a,b} contains an odd count of symbol 'b'.",
    "language": "L = {w ∈ {a,b}* | #b(w) mod 2 = 1}",
    "states": [
      "q_even",
      "q_odd",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "a",
      "b"
    ],
    "tapeAlphabet": [
      "a",
      "b",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q_even",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "abbab",
      "b",
      "aab",
      "abba",
      ""
    ],
    "defaultInput": "abbab",
    "testCases": [
      {
        "input": "abbab",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "b",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "aab",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "abba",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q_even",
        "readSymbol": "b",
        "writeSymbol": "b",
        "moveDirection": "R",
        "nextState": "q_odd"
      },
      {
        "currentState": "q_even",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_even"
      },
      {
        "currentState": "q_even",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "b",
        "writeSymbol": "b",
        "moveDirection": "R",
        "nextState": "q_even"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_odd"
      },
      {
        "currentState": "q_odd",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm09": {
    "id": "tm09",
    "name": "Equal Number of 0s and 1s in Any Order",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Pairs each unmarked '0' with an unmarked '1' regardless of relative order, crossing them off as X and Y.",
    "language": "L = {w ∈ {0,1}* | #0(w) = #1(w)}",
    "states": [
      "q0",
      "q_find1",
      "q_find0",
      "q_rewind",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "X",
      "Y",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "0101",
      "0011",
      "1100",
      "",
      "0001",
      "011"
    ],
    "defaultInput": "0101",
    "testCases": [
      {
        "input": "0101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0011",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1100",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0001",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "011",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_find1"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find0"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_find1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find1"
      },
      {
        "currentState": "q_find1",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_find1"
      },
      {
        "currentState": "q_find1",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find1"
      },
      {
        "currentState": "q_find1",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_find1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_find0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find0"
      },
      {
        "currentState": "q_find0",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_find0"
      },
      {
        "currentState": "q_find0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find0"
      },
      {
        "currentState": "q_find0",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_find0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q0"
      }
    ]
  },
  "tm10": {
    "id": "tm10",
    "name": "Exactly Two 1s",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Counts occurrences of '1' using states q0, q1, q2, q3+. Accepts if precisely two '1's were read.",
    "language": "L = {w ∈ {0,1}* | #1(w) = 2}",
    "states": [
      "q0",
      "q1",
      "q2",
      "q3",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "0010100",
      "11",
      "01001",
      "10101",
      "1",
      ""
    ],
    "defaultInput": "0010100",
    "testCases": [
      {
        "input": "0010100",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "11",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "01001",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "10101",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "1",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q2"
      },
      {
        "currentState": "q1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q2",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q3"
      },
      {
        "currentState": "q2",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q3",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q3"
      },
      {
        "currentState": "q3",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q3"
      },
      {
        "currentState": "q3",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm11": {
    "id": "tm11",
    "name": "No Consecutive 1s",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Rejects immediately upon encountering two consecutive '1' symbols; accepts upon reaching blank.",
    "language": "L = {w ∈ {0,1}* | '11' not in w}",
    "states": [
      "q0",
      "q_saw1",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "01010",
      "0",
      "1",
      "",
      "0110",
      "11"
    ],
    "defaultInput": "01010",
    "testCases": [
      {
        "input": "01010",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0110",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "11",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_saw1"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_saw1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q_saw1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_saw1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm12": {
    "id": "tm12",
    "name": "Same First and Last Symbol",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Stores the first symbol in state, scans to the end of the input, and verifies the final symbol matches.",
    "language": "L = {w ∈ {0,1}+ | first(w) = last(w)}",
    "states": [
      "q0",
      "q_after0",
      "q_after1",
      "q_scan0",
      "q_scan1",
      "q_check0",
      "q_check1",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "0110",
      "101",
      "0",
      "1",
      "01",
      "10",
      ""
    ],
    "defaultInput": "0110",
    "testCases": [
      {
        "input": "0110",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "01",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "10",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_after0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_after1"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_after0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_after0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan0"
      },
      {
        "currentState": "q_after0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan0"
      },
      {
        "currentState": "q_scan0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan0"
      },
      {
        "currentState": "q_scan0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan0"
      },
      {
        "currentState": "q_scan0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_check0"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_after1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_after1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan1"
      },
      {
        "currentState": "q_after1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan1"
      },
      {
        "currentState": "q_scan1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan1"
      },
      {
        "currentState": "q_scan1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan1"
      },
      {
        "currentState": "q_scan1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_check1"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm13": {
    "id": "tm13",
    "name": "Equal Zeros Followed by Equal Ones",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Classic textbook non-regular language. Matches leftmost 0 with 1 sequentially.",
    "language": "L = {0ⁿ1ⁿ | n ≥ 1}",
    "states": [
      "q0",
      "q1",
      "q2",
      "q3",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "X",
      "Y",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "01",
      "0011",
      "000111",
      "001",
      "011",
      ""
    ],
    "defaultInput": "01",
    "testCases": [
      {
        "input": "01",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0011",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "000111",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "001",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "011",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q3"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q2"
      },
      {
        "currentState": "q1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q2",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q3",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q3"
      },
      {
        "currentState": "q3",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q3",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q3",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm14": {
    "id": "tm14",
    "name": "Even-Length Binary Palindrome",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Accepts binary palindromes of strictly even length, including the empty string.",
    "language": "L = {wwᴿ | w ∈ {0,1}*}",
    "states": [
      "q0",
      "q_scan0",
      "q_scan1",
      "q_check0",
      "q_check1",
      "q_rewind",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "0110",
      "1001",
      "00",
      "11",
      "",
      "010",
      "0",
      "01"
    ],
    "defaultInput": "0110",
    "testCases": [
      {
        "input": "0110",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1001",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "00",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "11",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "010",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "0",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "01",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_scan0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_scan1"
      },
      {
        "currentState": "q_scan0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan0"
      },
      {
        "currentState": "q_scan0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan0"
      },
      {
        "currentState": "q_scan0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_check0"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "0",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_scan1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan1"
      },
      {
        "currentState": "q_scan1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan1"
      },
      {
        "currentState": "q_scan1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_check1"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "1",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q0"
      }
    ]
  },
  "tm15": {
    "id": "tm15",
    "name": "General Binary Palindrome",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Accepts odd-length, even-length, and empty binary palindromes.",
    "language": "L = {w ∈ {0,1}* | w = wᴿ}",
    "states": [
      "q0",
      "q_scan0",
      "q_scan1",
      "q_check0",
      "q_check1",
      "q_rewind",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "10101",
      "1001",
      "0",
      "1",
      "",
      "1011",
      "01"
    ],
    "defaultInput": "10101",
    "testCases": [
      {
        "input": "10101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1001",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1011",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "01",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_scan0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_scan1"
      },
      {
        "currentState": "q_scan0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan0"
      },
      {
        "currentState": "q_scan0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan0"
      },
      {
        "currentState": "q_scan0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_check0"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "0",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_check0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_scan1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan1"
      },
      {
        "currentState": "q_scan1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan1"
      },
      {
        "currentState": "q_scan1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_check1"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "1",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_check1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q0"
      }
    ]
  },
  "tm16": {
    "id": "tm16",
    "name": "Palindrome over {a,b}",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Recognizes general palindromes over the alphabet {a,b}.",
    "language": "L = {w ∈ {a,b}* | w = wᴿ}",
    "states": [
      "q0",
      "q_scana",
      "q_scanb",
      "q_checka",
      "q_checkb",
      "q_rewind",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "a",
      "b"
    ],
    "tapeAlphabet": [
      "a",
      "b",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "abba",
      "aba",
      "a",
      "",
      "aabb",
      "ab"
    ],
    "defaultInput": "abba",
    "testCases": [
      {
        "input": "abba",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "aba",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "a",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "aabb",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "ab",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "a",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_scana"
      },
      {
        "currentState": "q0",
        "readSymbol": "b",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_scanb"
      },
      {
        "currentState": "q_scana",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_scana"
      },
      {
        "currentState": "q_scana",
        "readSymbol": "b",
        "writeSymbol": "b",
        "moveDirection": "R",
        "nextState": "q_scana"
      },
      {
        "currentState": "q_scana",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_checka"
      },
      {
        "currentState": "q_checka",
        "readSymbol": "a",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_checka",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_checka",
        "readSymbol": "b",
        "writeSymbol": "b",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_scanb",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_scanb"
      },
      {
        "currentState": "q_scanb",
        "readSymbol": "b",
        "writeSymbol": "b",
        "moveDirection": "R",
        "nextState": "q_scanb"
      },
      {
        "currentState": "q_scanb",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_checkb"
      },
      {
        "currentState": "q_checkb",
        "readSymbol": "b",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_checkb",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_checkb",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "b",
        "writeSymbol": "b",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q0"
      }
    ]
  },
  "tm17": {
    "id": "tm17",
    "name": "Equal Three Blocks",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Context-sensitive language. Matches 0s, 1s, and 2s in 3-way synchronization.",
    "language": "L = {0ⁿ1ⁿ2ⁿ | n ≥ 1}",
    "states": [
      "q0",
      "q1",
      "q2",
      "q_rewind",
      "q_verify",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1",
      "2"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "2",
      "X",
      "Y",
      "Z",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "012",
      "001122",
      "000111222",
      "00112",
      "0122",
      ""
    ],
    "defaultInput": "012",
    "testCases": [
      {
        "input": "012",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "001122",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "000111222",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "00112",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "0122",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_verify"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "2",
        "writeSymbol": "2",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q2"
      },
      {
        "currentState": "q1",
        "readSymbol": "2",
        "writeSymbol": "2",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "Z",
        "writeSymbol": "Z",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q2",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "Z",
        "writeSymbol": "Z",
        "moveDirection": "R",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "2",
        "writeSymbol": "Z",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q2",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q2",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "Z",
        "writeSymbol": "Z",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_verify"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "Z",
        "writeSymbol": "Z",
        "moveDirection": "R",
        "nextState": "q_verify"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "2",
        "writeSymbol": "2",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm18": {
    "id": "tm18",
    "name": "Ordered Binary Blocks",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Accepts non-empty blocks of 0s followed by non-empty blocks of 1s.",
    "language": "L = {0ⁿ1ᵐ | n,m ≥ 1}",
    "states": [
      "q0",
      "q_zeros",
      "q_ones",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "01",
      "0001111",
      "101",
      "0",
      "1",
      ""
    ],
    "defaultInput": "01",
    "testCases": [
      {
        "input": "01",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0001111",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "101",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "0",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "1",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_zeros"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_zeros",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_zeros"
      },
      {
        "currentState": "q_zeros",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_ones"
      },
      {
        "currentState": "q_zeros",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_ones",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_ones"
      },
      {
        "currentState": "q_ones",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_ones",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm19": {
    "id": "tm19",
    "name": "Twice as Many Ones",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Matches each 0 with exactly two 1s in an ordered binary string.",
    "language": "L = {0ⁿ1²ⁿ | n ≥ 1}",
    "states": [
      "q0",
      "q_find1",
      "q_find2",
      "q_rewind",
      "q_verify",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "X",
      "Y",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "011",
      "001111",
      "00111",
      "01",
      ""
    ],
    "defaultInput": "011",
    "testCases": [
      {
        "input": "011",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "001111",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "00111",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "01",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_find1"
      },
      {
        "currentState": "q0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_verify"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_find1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find1"
      },
      {
        "currentState": "q_find1",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find1"
      },
      {
        "currentState": "q_find1",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find2"
      },
      {
        "currentState": "q_find1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_find2",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find2"
      },
      {
        "currentState": "q_find2",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_find2",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_find2",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_verify"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm20": {
    "id": "tm20",
    "name": "Equal Three-Part Blocks",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Matches block of 0s, block of 1s, and final block of 0s in equal lengths.",
    "language": "L = {0ⁿ1ⁿ0ⁿ | n ≥ 1}",
    "states": [
      "q0",
      "q1",
      "q2",
      "q_rewind",
      "q_verify",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "X",
      "Y",
      "Z",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "010",
      "001100",
      "00110",
      "0100",
      ""
    ],
    "defaultInput": "010",
    "testCases": [
      {
        "input": "010",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "001100",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "00110",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "0100",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_verify"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q2"
      },
      {
        "currentState": "q1",
        "readSymbol": "Z",
        "writeSymbol": "Z",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q2",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "Z",
        "writeSymbol": "Z",
        "moveDirection": "R",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "0",
        "writeSymbol": "Z",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q2",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "Z",
        "writeSymbol": "Z",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_verify"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "Z",
        "writeSymbol": "Z",
        "moveDirection": "R",
        "nextState": "q_verify"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm21": {
    "id": "tm21",
    "name": "Doubled Binary Strings",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Determines midpoint of the string and verifies the first half matches the second half identically.",
    "language": "L = {ww | w ∈ {0,1}*}",
    "states": [
      "q0",
      "q_goto_end",
      "q_mark_right0",
      "q_rewind_mid",
      "q_start_compare",
      "q_compare0",
      "q_compare1_expect_x",
      "q_compare1_expect_y",
      "q_rewind_compare",
      "q_verify_done",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "X",
      "Y",
      "x",
      "y",
      "A",
      "C",
      "a",
      "c",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "00",
      "11",
      "0101",
      "100100",
      "",
      "0110",
      "010",
      "0"
    ],
    "defaultInput": "00",
    "testCases": [
      {
        "input": "00",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "11",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "100100",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0110",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "010",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "0",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_goto_end"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_goto_end"
      },
      {
        "currentState": "q0",
        "readSymbol": "x",
        "writeSymbol": "x",
        "moveDirection": "L",
        "nextState": "q_start_compare"
      },
      {
        "currentState": "q0",
        "readSymbol": "y",
        "writeSymbol": "y",
        "moveDirection": "L",
        "nextState": "q_start_compare"
      },
      {
        "currentState": "q_goto_end",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_goto_end"
      },
      {
        "currentState": "q_goto_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_goto_end"
      },
      {
        "currentState": "q_goto_end",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_mark_right0"
      },
      {
        "currentState": "q_goto_end",
        "readSymbol": "x",
        "writeSymbol": "x",
        "moveDirection": "L",
        "nextState": "q_mark_right0"
      },
      {
        "currentState": "q_goto_end",
        "readSymbol": "y",
        "writeSymbol": "y",
        "moveDirection": "L",
        "nextState": "q_mark_right0"
      },
      {
        "currentState": "q_mark_right0",
        "readSymbol": "0",
        "writeSymbol": "x",
        "moveDirection": "L",
        "nextState": "q_rewind_mid"
      },
      {
        "currentState": "q_mark_right0",
        "readSymbol": "1",
        "writeSymbol": "y",
        "moveDirection": "L",
        "nextState": "q_rewind_mid"
      },
      {
        "currentState": "q_mark_right0",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_mark_right0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind_mid",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_mid"
      },
      {
        "currentState": "q_rewind_mid",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_mid"
      },
      {
        "currentState": "q_rewind_mid",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q_rewind_mid",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q_start_compare",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_start_compare"
      },
      {
        "currentState": "q_start_compare",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_start_compare"
      },
      {
        "currentState": "q_start_compare",
        "readSymbol": "A",
        "writeSymbol": "A",
        "moveDirection": "L",
        "nextState": "q_start_compare"
      },
      {
        "currentState": "q_start_compare",
        "readSymbol": "C",
        "writeSymbol": "C",
        "moveDirection": "L",
        "nextState": "q_start_compare"
      },
      {
        "currentState": "q_start_compare",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_compare0"
      },
      {
        "currentState": "q_compare0",
        "readSymbol": "A",
        "writeSymbol": "A",
        "moveDirection": "R",
        "nextState": "q_compare0"
      },
      {
        "currentState": "q_compare0",
        "readSymbol": "C",
        "writeSymbol": "C",
        "moveDirection": "R",
        "nextState": "q_compare0"
      },
      {
        "currentState": "q_compare0",
        "readSymbol": "X",
        "writeSymbol": "A",
        "moveDirection": "R",
        "nextState": "q_compare1_expect_x"
      },
      {
        "currentState": "q_compare0",
        "readSymbol": "Y",
        "writeSymbol": "C",
        "moveDirection": "R",
        "nextState": "q_compare1_expect_y"
      },
      {
        "currentState": "q_compare0",
        "readSymbol": "x",
        "writeSymbol": "x",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_compare0",
        "readSymbol": "y",
        "writeSymbol": "y",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_compare0",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_verify_done"
      },
      {
        "currentState": "q_compare0",
        "readSymbol": "c",
        "writeSymbol": "c",
        "moveDirection": "R",
        "nextState": "q_verify_done"
      },
      {
        "currentState": "q_compare1_expect_x",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_compare1_expect_x"
      },
      {
        "currentState": "q_compare1_expect_x",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_compare1_expect_x"
      },
      {
        "currentState": "q_compare1_expect_x",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_compare1_expect_x"
      },
      {
        "currentState": "q_compare1_expect_x",
        "readSymbol": "c",
        "writeSymbol": "c",
        "moveDirection": "R",
        "nextState": "q_compare1_expect_x"
      },
      {
        "currentState": "q_compare1_expect_x",
        "readSymbol": "x",
        "writeSymbol": "a",
        "moveDirection": "L",
        "nextState": "q_rewind_compare"
      },
      {
        "currentState": "q_compare1_expect_x",
        "readSymbol": "y",
        "writeSymbol": "y",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_compare1_expect_x",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_compare1_expect_y",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_compare1_expect_y"
      },
      {
        "currentState": "q_compare1_expect_y",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_compare1_expect_y"
      },
      {
        "currentState": "q_compare1_expect_y",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_compare1_expect_y"
      },
      {
        "currentState": "q_compare1_expect_y",
        "readSymbol": "c",
        "writeSymbol": "c",
        "moveDirection": "R",
        "nextState": "q_compare1_expect_y"
      },
      {
        "currentState": "q_compare1_expect_y",
        "readSymbol": "y",
        "writeSymbol": "c",
        "moveDirection": "L",
        "nextState": "q_rewind_compare"
      },
      {
        "currentState": "q_compare1_expect_y",
        "readSymbol": "x",
        "writeSymbol": "x",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_compare1_expect_y",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind_compare",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind_compare"
      },
      {
        "currentState": "q_rewind_compare",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind_compare"
      },
      {
        "currentState": "q_rewind_compare",
        "readSymbol": "A",
        "writeSymbol": "A",
        "moveDirection": "L",
        "nextState": "q_rewind_compare"
      },
      {
        "currentState": "q_rewind_compare",
        "readSymbol": "C",
        "writeSymbol": "C",
        "moveDirection": "L",
        "nextState": "q_rewind_compare"
      },
      {
        "currentState": "q_rewind_compare",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "L",
        "nextState": "q_rewind_compare"
      },
      {
        "currentState": "q_rewind_compare",
        "readSymbol": "c",
        "writeSymbol": "c",
        "moveDirection": "L",
        "nextState": "q_rewind_compare"
      },
      {
        "currentState": "q_rewind_compare",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_compare0"
      },
      {
        "currentState": "q_verify_done",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_verify_done"
      },
      {
        "currentState": "q_verify_done",
        "readSymbol": "c",
        "writeSymbol": "c",
        "moveDirection": "R",
        "nextState": "q_verify_done"
      },
      {
        "currentState": "q_verify_done",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_verify_done",
        "readSymbol": "x",
        "writeSymbol": "x",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_verify_done",
        "readSymbol": "y",
        "writeSymbol": "y",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm22": {
    "id": "tm22",
    "name": "Contains Substring 101",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Searches for the contiguous pattern '101' across the tape.",
    "language": "L = {w ∈ {0,1}* | '101' is a substring of w}",
    "states": [
      "q0",
      "q1",
      "q10",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "110101",
      "0001010",
      "101",
      "111000",
      "000",
      ""
    ],
    "defaultInput": "110101",
    "testCases": [
      {
        "input": "110101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0001010",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "111000",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "000",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q10"
      },
      {
        "currentState": "q1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q10",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q10",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q10",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm23": {
    "id": "tm23",
    "name": "Exactly One Occurrence of 00",
    "category": "String & Language Recognizers",
    "categoryKey": "strings",
    "description": "Counts overlapping occurrences of '00'. Accepts if and only if the count is exactly 1.",
    "language": "L = {w ∈ {0,1}* | count_overlapping('00', w) = 1}",
    "states": [
      "q_c0_not0",
      "q_c0_saw0",
      "q_c1_not0",
      "q_c1_saw0",
      "q_c2",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q_c0_not0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "100101",
      "00101",
      "00",
      "01001",
      "0001",
      "000",
      "0101",
      ""
    ],
    "defaultInput": "100101",
    "testCases": [
      {
        "input": "100101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "00101",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "00",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "01001",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0001",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "000",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "0101",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q_c0_not0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_c0_not0"
      },
      {
        "currentState": "q_c0_not0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_c0_saw0"
      },
      {
        "currentState": "q_c0_not0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_c0_saw0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_c0_not0"
      },
      {
        "currentState": "q_c0_saw0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_c1_saw0"
      },
      {
        "currentState": "q_c0_saw0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_c1_not0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_c1_not0"
      },
      {
        "currentState": "q_c1_not0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_c1_saw0"
      },
      {
        "currentState": "q_c1_not0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_c1_saw0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_c1_not0"
      },
      {
        "currentState": "q_c1_saw0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_c2"
      },
      {
        "currentState": "q_c1_saw0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_c2",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_c2"
      },
      {
        "currentState": "q_c2",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_c2"
      },
      {
        "currentState": "q_c2",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm24": {
    "id": "tm24",
    "name": "Equal Number of a's and b's",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Matches every 'a' with an unrestricted 'b' anywhere on the tape.",
    "language": "L = {w ∈ {a,b}* | #a(w) = #b(w)}",
    "states": [
      "q0",
      "q_findb",
      "q_finda",
      "q_rewind",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "a",
      "b"
    ],
    "tapeAlphabet": [
      "a",
      "b",
      "X",
      "Y",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "ab",
      "ba",
      "aabb",
      "baba",
      "",
      "aaab",
      "abb"
    ],
    "defaultInput": "ab",
    "testCases": [
      {
        "input": "ab",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "ba",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "aabb",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "baba",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "aaab",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "abb",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "a",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_findb"
      },
      {
        "currentState": "q0",
        "readSymbol": "b",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_finda"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_findb",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "R",
        "nextState": "q_findb"
      },
      {
        "currentState": "q_findb",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_findb"
      },
      {
        "currentState": "q_findb",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_findb"
      },
      {
        "currentState": "q_findb",
        "readSymbol": "b",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_findb",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_finda",
        "readSymbol": "b",
        "writeSymbol": "b",
        "moveDirection": "R",
        "nextState": "q_finda"
      },
      {
        "currentState": "q_finda",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_finda"
      },
      {
        "currentState": "q_finda",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_finda"
      },
      {
        "currentState": "q_finda",
        "readSymbol": "a",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_finda",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "a",
        "writeSymbol": "a",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "b",
        "writeSymbol": "b",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q0"
      }
    ]
  },
  "tm25": {
    "id": "tm25",
    "name": "Twice as Many Zeros as Ones",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Matches every '1' with two '0's in arbitrary positions across the tape.",
    "language": "L = {w ∈ {0,1}* | #0(w) = 2 × #1(w)}",
    "states": [
      "q0",
      "q_find0_first",
      "q_find0_first_right",
      "q_find0_second",
      "q_find0_second_right",
      "q_rewind",
      "q_verify",
      "qaccept",
      "qreject"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "X",
      "Y",
      "B"
    ],
    "blankSymbol": "B",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "001",
      "010",
      "100",
      "000011",
      "",
      "0011",
      "01"
    ],
    "defaultInput": "001",
    "testCases": [
      {
        "input": "001",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "010",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "100",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "000011",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "0011",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "01",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_find0_first"
      },
      {
        "currentState": "q0",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "q_verify"
      },
      {
        "currentState": "q_find0_first",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_find0_second"
      },
      {
        "currentState": "q_find0_first",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_find0_first"
      },
      {
        "currentState": "q_find0_first",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_find0_first"
      },
      {
        "currentState": "q_find0_first",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_find0_first"
      },
      {
        "currentState": "q_find0_first",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_find0_first_right"
      },
      {
        "currentState": "q_find0_first_right",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_find0_first_right"
      },
      {
        "currentState": "q_find0_first_right",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find0_first_right"
      },
      {
        "currentState": "q_find0_first_right",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find0_first_right"
      },
      {
        "currentState": "q_find0_first_right",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_find0_second"
      },
      {
        "currentState": "q_find0_first_right",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_find0_second",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_find0_second",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_find0_second"
      },
      {
        "currentState": "q_find0_second",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_find0_second"
      },
      {
        "currentState": "q_find0_second",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_find0_second"
      },
      {
        "currentState": "q_find0_second",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q_find0_second_right"
      },
      {
        "currentState": "q_find0_second_right",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_find0_second_right"
      },
      {
        "currentState": "q_find0_second_right",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find0_second_right"
      },
      {
        "currentState": "q_find0_second_right",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find0_second_right"
      },
      {
        "currentState": "q_find0_second_right",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_find0_second_right",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_verify"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_verify"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_verify",
        "readSymbol": "B",
        "writeSymbol": "B",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-26": {
    "id": "tm-26",
    "name": "Unary Addition",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes unary addition f(n, m) = n + m for input format 1ⁿ+1ᵐ.",
    "language": "f(1ⁿ+1ᵐ) = 1ⁿ⁺ᵐ",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q1",
      "q2",
      "q3"
    ],
    "inputAlphabet": [
      "1",
      "+"
    ],
    "tapeAlphabet": [
      "1",
      "+",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "111+11",
      "1+1",
      "1111+1",
      "111"
    ],
    "defaultInput": "111+11",
    "testCases": [
      {
        "input": "111+11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11111"
      },
      {
        "input": "1+1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11"
      },
      {
        "input": "1111+1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11111"
      },
      {
        "input": "111",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "+",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q3"
      },
      {
        "currentState": "q2",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q3",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q3"
      },
      {
        "currentState": "q3",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-27": {
    "id": "tm-27",
    "name": "Unary Multiplication",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes unary multiplication f(n, m) = n * m for input format 1ⁿ#1ᵐ.",
    "language": "f(1ⁿ#1ᵐ) = 1ⁿˣᵐ",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_check_m",
      "q_zero_out",
      "q_add_end_sep",
      "q_put_E",
      "q_rewind_start",
      "q_scan_first",
      "q_to_second",
      "q_mark_D",
      "q_copy_second",
      "q_append_res",
      "q_reset_Y",
      "q_place_E",
      "q_back_to_sec",
      "q_rewind_to_X",
      "q_write_D",
      "q_erase_inputs",
      "q_erase_second_hash",
      "q_shift_find",
      "q_shift_carry",
      "q_finish",
      "q_move_D",
      "q_rewind_zero"
    ],
    "inputAlphabet": [
      "1",
      "#"
    ],
    "tapeAlphabet": [
      "1",
      "#",
      "X",
      "Y",
      "D",
      "E",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "111#11",
      "11#111",
      "1#1"
    ],
    "defaultInput": "111#11",
    "testCases": [
      {
        "input": "111#11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "111111"
      },
      {
        "input": "11#111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "111111"
      },
      {
        "input": "1#1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_check_m"
      },
      {
        "currentState": "q0",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_zero_out"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_check_m",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_check_m"
      },
      {
        "currentState": "q_check_m",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_add_end_sep"
      },
      {
        "currentState": "q_check_m",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_add_end_sep",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_add_end_sep"
      },
      {
        "currentState": "q_add_end_sep",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_put_E"
      },
      {
        "currentState": "q_put_E",
        "readSymbol": "_",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_scan_first"
      },
      {
        "currentState": "q_scan_first",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_scan_first"
      },
      {
        "currentState": "q_scan_first",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_to_second"
      },
      {
        "currentState": "q_scan_first",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_mark_D"
      },
      {
        "currentState": "q_to_second",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_to_second"
      },
      {
        "currentState": "q_to_second",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_copy_second"
      },
      {
        "currentState": "q_copy_second",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_copy_second"
      },
      {
        "currentState": "q_copy_second",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_append_res"
      },
      {
        "currentState": "q_copy_second",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_reset_Y"
      },
      {
        "currentState": "q_append_res",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_res"
      },
      {
        "currentState": "q_append_res",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_res"
      },
      {
        "currentState": "q_append_res",
        "readSymbol": "E",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_place_E"
      },
      {
        "currentState": "q_place_E",
        "readSymbol": "_",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_back_to_sec"
      },
      {
        "currentState": "q_back_to_sec",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_back_to_sec"
      },
      {
        "currentState": "q_back_to_sec",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_back_to_sec"
      },
      {
        "currentState": "q_back_to_sec",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_copy_second"
      },
      {
        "currentState": "q_reset_Y",
        "readSymbol": "Y",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_reset_Y"
      },
      {
        "currentState": "q_reset_Y",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_to_X"
      },
      {
        "currentState": "q_rewind_to_X",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_X"
      },
      {
        "currentState": "q_rewind_to_X",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_scan_first"
      },
      {
        "currentState": "q_mark_D",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_mark_D"
      },
      {
        "currentState": "q_mark_D",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_write_D"
      },
      {
        "currentState": "q_write_D",
        "readSymbol": "X",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_erase_inputs"
      },
      {
        "currentState": "q_erase_inputs",
        "readSymbol": "X",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_inputs"
      },
      {
        "currentState": "q_erase_inputs",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_second_hash"
      },
      {
        "currentState": "q_erase_second_hash",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_second_hash"
      },
      {
        "currentState": "q_erase_second_hash",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_shift_find"
      },
      {
        "currentState": "q_shift_find",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_shift_find"
      },
      {
        "currentState": "q_shift_find",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_shift_carry"
      },
      {
        "currentState": "q_shift_find",
        "readSymbol": "E",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_finish"
      },
      {
        "currentState": "q_shift_carry",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_shift_carry"
      },
      {
        "currentState": "q_shift_carry",
        "readSymbol": "D",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_move_D"
      },
      {
        "currentState": "q_move_D",
        "readSymbol": "_",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_shift_find"
      },
      {
        "currentState": "q_finish",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_finish"
      },
      {
        "currentState": "q_finish",
        "readSymbol": "D",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_zero"
      },
      {
        "currentState": "q_rewind_zero",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_zero"
      },
      {
        "currentState": "q_rewind_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_zero_out",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_zero_out"
      },
      {
        "currentState": "q_zero_out",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_zero_out"
      },
      {
        "currentState": "q_zero_out",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-28": {
    "id": "tm-28",
    "name": "Binary Addition",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes binary addition A + B for input format BinaryNumber1+BinaryNumber2.",
    "language": "f(A+B) = A+B in binary",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_find_end",
      "q_check_b",
      "q_to_A",
      "q_restore_b_erase",
      "q_erase_plus",
      "q_clean_A",
      "q_inc_A",
      "q_loop",
      "q_carry_cell0",
      "q_check_neg1",
      "q_start_shift_right",
      "q_sr_pick",
      "q_sr_put0",
      "q_sr_put1",
      "q_sr_putZ",
      "q_sr_back",
      "q_sr_finish"
    ],
    "inputAlphabet": [
      "0",
      "1",
      "+"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "+",
      "X",
      "Y",
      "Z",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "101+11",
      "1+1",
      "110+10",
      "101+0"
    ],
    "defaultInput": "101+11",
    "testCases": [
      {
        "input": "101+11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1000"
      },
      {
        "input": "1+1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "10"
      },
      {
        "input": "110+10",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1000"
      },
      {
        "input": "101+0",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "101"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q0",
        "readSymbol": "+",
        "writeSymbol": "+",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "+",
        "writeSymbol": "+",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_check_b"
      },
      {
        "currentState": "q_check_b",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_check_b"
      },
      {
        "currentState": "q_check_b",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_to_A"
      },
      {
        "currentState": "q_check_b",
        "readSymbol": "+",
        "writeSymbol": "+",
        "moveDirection": "R",
        "nextState": "q_restore_b_erase"
      },
      {
        "currentState": "q_restore_b_erase",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_restore_b_erase"
      },
      {
        "currentState": "q_restore_b_erase",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_plus"
      },
      {
        "currentState": "q_erase_plus",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_plus"
      },
      {
        "currentState": "q_erase_plus",
        "readSymbol": "+",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_clean_A"
      },
      {
        "currentState": "q_to_A",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_to_A"
      },
      {
        "currentState": "q_to_A",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_to_A"
      },
      {
        "currentState": "q_to_A",
        "readSymbol": "+",
        "writeSymbol": "+",
        "moveDirection": "L",
        "nextState": "q_inc_A"
      },
      {
        "currentState": "q_inc_A",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_inc_A"
      },
      {
        "currentState": "q_inc_A",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_loop"
      },
      {
        "currentState": "q_inc_A",
        "readSymbol": "Y",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_carry_cell0"
      },
      {
        "currentState": "q_inc_A",
        "readSymbol": "X",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_loop"
      },
      {
        "currentState": "q_carry_cell0",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_loop"
      },
      {
        "currentState": "q_loop",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_loop"
      },
      {
        "currentState": "q_loop",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_loop"
      },
      {
        "currentState": "q_loop",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_loop"
      },
      {
        "currentState": "q_loop",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_loop"
      },
      {
        "currentState": "q_loop",
        "readSymbol": "+",
        "writeSymbol": "+",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_clean_A",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_clean_A"
      },
      {
        "currentState": "q_clean_A",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_clean_A"
      },
      {
        "currentState": "q_clean_A",
        "readSymbol": "X",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_check_neg1"
      },
      {
        "currentState": "q_clean_A",
        "readSymbol": "Y",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_check_neg1"
      },
      {
        "currentState": "q_check_neg1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_check_neg1",
        "readSymbol": "1",
        "writeSymbol": "Z",
        "moveDirection": "R",
        "nextState": "q_start_shift_right"
      },
      {
        "currentState": "q_start_shift_right",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_start_shift_right"
      },
      {
        "currentState": "q_start_shift_right",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_start_shift_right"
      },
      {
        "currentState": "q_start_shift_right",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_sr_pick"
      },
      {
        "currentState": "q_sr_pick",
        "readSymbol": "0",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_sr_put0"
      },
      {
        "currentState": "q_sr_pick",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_sr_put1"
      },
      {
        "currentState": "q_sr_pick",
        "readSymbol": "Z",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_sr_putZ"
      },
      {
        "currentState": "q_sr_put0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_sr_back"
      },
      {
        "currentState": "q_sr_put1",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_sr_back"
      },
      {
        "currentState": "q_sr_putZ",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_sr_finish"
      },
      {
        "currentState": "q_sr_back",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_sr_pick"
      },
      {
        "currentState": "q_sr_finish",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-29": {
    "id": "tm-29",
    "name": "Binary Subtraction",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes binary subtraction A - B. Rejects if A < B.",
    "language": "f(A-B) = A-B in binary (A ≥ B)",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_find_end",
      "q_check_b",
      "q_to_A",
      "q_erase_b",
      "q_erase_minus",
      "q_rewind_start",
      "q_dec_A",
      "q_loop",
      "q_check_lead",
      "q_accept_zero",
      "q_check_single_zero",
      "q_put_D_cell0",
      "q_shift_left_loop",
      "q_put_into_D_0",
      "q_put_into_D_1",
      "q_erase_D_finish",
      "q_advance_D",
      "q_rewind_to_start_recheck"
    ],
    "inputAlphabet": [
      "0",
      "1",
      "-"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "-",
      "D",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "1000-11",
      "101-101",
      "11-100"
    ],
    "defaultInput": "1000-11",
    "testCases": [
      {
        "input": "1000-11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "101"
      },
      {
        "input": "101-101",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "0"
      },
      {
        "input": "11-100",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "-",
        "writeSymbol": "-",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_check_b"
      },
      {
        "currentState": "q_check_b",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_check_b"
      },
      {
        "currentState": "q_check_b",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_to_A"
      },
      {
        "currentState": "q_check_b",
        "readSymbol": "-",
        "writeSymbol": "-",
        "moveDirection": "R",
        "nextState": "q_erase_b"
      },
      {
        "currentState": "q_erase_b",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_b"
      },
      {
        "currentState": "q_erase_b",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_minus"
      },
      {
        "currentState": "q_erase_minus",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_minus"
      },
      {
        "currentState": "q_erase_minus",
        "readSymbol": "-",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_to_A",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_to_A"
      },
      {
        "currentState": "q_to_A",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_to_A"
      },
      {
        "currentState": "q_to_A",
        "readSymbol": "-",
        "writeSymbol": "-",
        "moveDirection": "L",
        "nextState": "q_dec_A"
      },
      {
        "currentState": "q_dec_A",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_dec_A"
      },
      {
        "currentState": "q_dec_A",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_loop"
      },
      {
        "currentState": "q_dec_A",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_loop",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_loop"
      },
      {
        "currentState": "q_loop",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_loop"
      },
      {
        "currentState": "q_loop",
        "readSymbol": "-",
        "writeSymbol": "-",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_check_lead"
      },
      {
        "currentState": "q_check_lead",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_accept_zero"
      },
      {
        "currentState": "q_check_lead",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_check_single_zero"
      },
      {
        "currentState": "q_check_single_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_check_single_zero",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_put_D_cell0"
      },
      {
        "currentState": "q_check_single_zero",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_put_D_cell0"
      },
      {
        "currentState": "q_put_D_cell0",
        "readSymbol": "0",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_shift_left_loop"
      },
      {
        "currentState": "q_shift_left_loop",
        "readSymbol": "0",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_put_into_D_0"
      },
      {
        "currentState": "q_shift_left_loop",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_put_into_D_1"
      },
      {
        "currentState": "q_shift_left_loop",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_D_finish"
      },
      {
        "currentState": "q_put_into_D_0",
        "readSymbol": "D",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_advance_D"
      },
      {
        "currentState": "q_put_into_D_1",
        "readSymbol": "D",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_advance_D"
      },
      {
        "currentState": "q_advance_D",
        "readSymbol": "_",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_shift_left_loop"
      },
      {
        "currentState": "q_erase_D_finish",
        "readSymbol": "D",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_to_start_recheck"
      },
      {
        "currentState": "q_rewind_to_start_recheck",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_to_start_recheck"
      },
      {
        "currentState": "q_rewind_to_start_recheck",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_start_recheck"
      },
      {
        "currentState": "q_rewind_to_start_recheck",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_check_lead"
      },
      {
        "currentState": "q_accept_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-30": {
    "id": "tm-30",
    "name": "Unary Squaring",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes unary square f(n) = n² for input format 1ⁿ.",
    "language": "f(1ⁿ) = 1ⁿ²",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_dup_find_hash",
      "q_dup_find_end",
      "q_dup_put_one",
      "q_dup_rewind",
      "q_dup_next_1",
      "q_restore_Xs",
      "q_start_mul",
      "q_check_m",
      "q_add_end_sep",
      "q_put_E",
      "q_rewind_start",
      "q_scan_first",
      "q_to_second",
      "q_mark_D",
      "q_copy_second",
      "q_append_res",
      "q_reset_Y",
      "q_place_E",
      "q_back_to_sec",
      "q_rewind_to_X",
      "q_write_D",
      "q_erase_inputs",
      "q_erase_second_hash",
      "q_shift_find",
      "q_shift_carry",
      "q_finish",
      "q_move_D",
      "q_rewind_zero",
      "q_zero_out"
    ],
    "inputAlphabet": [
      "1"
    ],
    "tapeAlphabet": [
      "1",
      "#",
      "X",
      "Y",
      "D",
      "E",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "111",
      "11",
      "1"
    ],
    "defaultInput": "111",
    "testCases": [
      {
        "input": "111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "111111111"
      },
      {
        "input": "11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1111"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_dup_find_hash"
      },
      {
        "currentState": "q_dup_find_hash",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_dup_find_hash"
      },
      {
        "currentState": "q_dup_find_hash",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_dup_find_end"
      },
      {
        "currentState": "q_dup_find_hash",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_dup_put_one"
      },
      {
        "currentState": "q_dup_find_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_dup_find_end"
      },
      {
        "currentState": "q_dup_find_end",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_dup_rewind"
      },
      {
        "currentState": "q_dup_put_one",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_dup_rewind"
      },
      {
        "currentState": "q_dup_rewind",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_dup_rewind"
      },
      {
        "currentState": "q_dup_rewind",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_dup_rewind"
      },
      {
        "currentState": "q_dup_rewind",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_dup_next_1"
      },
      {
        "currentState": "q_dup_next_1",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_dup_find_hash"
      },
      {
        "currentState": "q_dup_next_1",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_restore_Xs"
      },
      {
        "currentState": "q_restore_Xs",
        "readSymbol": "X",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_restore_Xs"
      },
      {
        "currentState": "q_restore_Xs",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_start_mul"
      },
      {
        "currentState": "q_start_mul",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_check_m"
      },
      {
        "currentState": "q_check_m",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_check_m"
      },
      {
        "currentState": "q_check_m",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_add_end_sep"
      },
      {
        "currentState": "q_check_m",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_add_end_sep",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_add_end_sep"
      },
      {
        "currentState": "q_add_end_sep",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_put_E"
      },
      {
        "currentState": "q_put_E",
        "readSymbol": "_",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_scan_first"
      },
      {
        "currentState": "q_scan_first",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_scan_first"
      },
      {
        "currentState": "q_scan_first",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_to_second"
      },
      {
        "currentState": "q_scan_first",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_mark_D"
      },
      {
        "currentState": "q_to_second",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_to_second"
      },
      {
        "currentState": "q_to_second",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_copy_second"
      },
      {
        "currentState": "q_copy_second",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_copy_second"
      },
      {
        "currentState": "q_copy_second",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_append_res"
      },
      {
        "currentState": "q_copy_second",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_reset_Y"
      },
      {
        "currentState": "q_append_res",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_res"
      },
      {
        "currentState": "q_append_res",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_res"
      },
      {
        "currentState": "q_append_res",
        "readSymbol": "E",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_place_E"
      },
      {
        "currentState": "q_place_E",
        "readSymbol": "_",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_back_to_sec"
      },
      {
        "currentState": "q_back_to_sec",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_back_to_sec"
      },
      {
        "currentState": "q_back_to_sec",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_back_to_sec"
      },
      {
        "currentState": "q_back_to_sec",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_copy_second"
      },
      {
        "currentState": "q_reset_Y",
        "readSymbol": "Y",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_reset_Y"
      },
      {
        "currentState": "q_reset_Y",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_to_X"
      },
      {
        "currentState": "q_rewind_to_X",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_X"
      },
      {
        "currentState": "q_rewind_to_X",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_scan_first"
      },
      {
        "currentState": "q_mark_D",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_mark_D"
      },
      {
        "currentState": "q_mark_D",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_write_D"
      },
      {
        "currentState": "q_write_D",
        "readSymbol": "X",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_erase_inputs"
      },
      {
        "currentState": "q_erase_inputs",
        "readSymbol": "X",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_inputs"
      },
      {
        "currentState": "q_erase_inputs",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_second_hash"
      },
      {
        "currentState": "q_erase_second_hash",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_second_hash"
      },
      {
        "currentState": "q_erase_second_hash",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_shift_find"
      },
      {
        "currentState": "q_shift_find",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_shift_find"
      },
      {
        "currentState": "q_shift_find",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_shift_carry"
      },
      {
        "currentState": "q_shift_find",
        "readSymbol": "E",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_finish"
      },
      {
        "currentState": "q_shift_carry",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_shift_carry"
      },
      {
        "currentState": "q_shift_carry",
        "readSymbol": "D",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_move_D"
      },
      {
        "currentState": "q_move_D",
        "readSymbol": "_",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_shift_find"
      },
      {
        "currentState": "q_finish",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_finish"
      },
      {
        "currentState": "q_finish",
        "readSymbol": "D",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_zero"
      },
      {
        "currentState": "q_rewind_zero",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_zero"
      },
      {
        "currentState": "q_rewind_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_zero_out",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_zero_out"
      },
      {
        "currentState": "q_zero_out",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_zero_out"
      },
      {
        "currentState": "q_zero_out",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-31": {
    "id": "tm-31",
    "name": "Integer Division by Two",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes unary floor division by two f(n) = ⌊n/2⌋.",
    "language": "f(1ⁿ) = 1^⌊n/2⌋",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_find_end",
      "q_shift_r_pick",
      "q_shift_r_put",
      "q_write_hash_cell0",
      "q_scan_first_1",
      "q_step_l_twice",
      "q_scan_second_1",
      "q_clean_all",
      "q_found_pair",
      "q_reput_hash",
      "q_rewind_to_zero"
    ],
    "inputAlphabet": [
      "1"
    ],
    "tapeAlphabet": [
      "1",
      "#",
      "X",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "11111",
      "1111",
      "11",
      "1"
    ],
    "defaultInput": "11111",
    "testCases": [
      {
        "input": "11111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11"
      },
      {
        "input": "1111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11"
      },
      {
        "input": "11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": ""
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_shift_r_pick"
      },
      {
        "currentState": "q_shift_r_pick",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_shift_r_put"
      },
      {
        "currentState": "q_shift_r_pick",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_write_hash_cell0"
      },
      {
        "currentState": "q_write_hash_cell0",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_scan_first_1"
      },
      {
        "currentState": "q_shift_r_put",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_step_l_twice"
      },
      {
        "currentState": "q_step_l_twice",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_shift_r_pick"
      },
      {
        "currentState": "q_scan_first_1",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_scan_first_1"
      },
      {
        "currentState": "q_scan_first_1",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_scan_second_1"
      },
      {
        "currentState": "q_scan_first_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_clean_all"
      },
      {
        "currentState": "q_scan_second_1",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_scan_second_1"
      },
      {
        "currentState": "q_scan_second_1",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_found_pair"
      },
      {
        "currentState": "q_scan_second_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_clean_all"
      },
      {
        "currentState": "q_found_pair",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_found_pair"
      },
      {
        "currentState": "q_found_pair",
        "readSymbol": "#",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_reput_hash"
      },
      {
        "currentState": "q_reput_hash",
        "readSymbol": "X",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_scan_first_1"
      },
      {
        "currentState": "q_clean_all",
        "readSymbol": "X",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_clean_all"
      },
      {
        "currentState": "q_clean_all",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_clean_all"
      },
      {
        "currentState": "q_clean_all",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_to_zero"
      },
      {
        "currentState": "q_rewind_to_zero",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_zero"
      },
      {
        "currentState": "q_rewind_to_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-32": {
    "id": "tm-32",
    "name": "Floor Logarithm Base Two",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes unary floor logarithm base 2 f(n) = ⌊log₂ n⌋ for n ≥ 1.",
    "language": "f(1ⁿ) = 1^⌊log₂ n⌋ (n ≥ 1)",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_find_end",
      "q_shift_r_pick",
      "q_shift_r_put",
      "q_write_hash_cell0",
      "q_pass_first_1",
      "q_step_l_twice",
      "q_pass_second_1",
      "q_no_pairs_finish",
      "q_pair_seen",
      "q_pair_seen_second",
      "q_rewind_to_hash_inc",
      "q_reput_hash",
      "q_rewind_to_zero"
    ],
    "inputAlphabet": [
      "1"
    ],
    "tapeAlphabet": [
      "1",
      "#",
      "X",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "11111111",
      "1111",
      "11",
      "1"
    ],
    "defaultInput": "11111111",
    "testCases": [
      {
        "input": "11111111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "111"
      },
      {
        "input": "1111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11"
      },
      {
        "input": "11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": ""
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_shift_r_pick"
      },
      {
        "currentState": "q_shift_r_pick",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_shift_r_put"
      },
      {
        "currentState": "q_shift_r_pick",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_write_hash_cell0"
      },
      {
        "currentState": "q_write_hash_cell0",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_pass_first_1"
      },
      {
        "currentState": "q_shift_r_put",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_step_l_twice"
      },
      {
        "currentState": "q_step_l_twice",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_shift_r_pick"
      },
      {
        "currentState": "q_pass_first_1",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_pass_first_1"
      },
      {
        "currentState": "q_pass_first_1",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_pass_second_1"
      },
      {
        "currentState": "q_pass_first_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_no_pairs_finish"
      },
      {
        "currentState": "q_pass_second_1",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_pass_second_1"
      },
      {
        "currentState": "q_pass_second_1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_pair_seen"
      },
      {
        "currentState": "q_pass_second_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_no_pairs_finish"
      },
      {
        "currentState": "q_pair_seen",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_pair_seen"
      },
      {
        "currentState": "q_pair_seen",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_pair_seen_second"
      },
      {
        "currentState": "q_pair_seen",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_to_hash_inc"
      },
      {
        "currentState": "q_pair_seen_second",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_pair_seen_second"
      },
      {
        "currentState": "q_pair_seen_second",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_pair_seen"
      },
      {
        "currentState": "q_pair_seen_second",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_to_hash_inc"
      },
      {
        "currentState": "q_rewind_to_hash_inc",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_hash_inc"
      },
      {
        "currentState": "q_rewind_to_hash_inc",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind_to_hash_inc"
      },
      {
        "currentState": "q_rewind_to_hash_inc",
        "readSymbol": "#",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_reput_hash"
      },
      {
        "currentState": "q_reput_hash",
        "readSymbol": "X",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_pass_first_1"
      },
      {
        "currentState": "q_reput_hash",
        "readSymbol": "1",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_pass_first_1"
      },
      {
        "currentState": "q_no_pairs_finish",
        "readSymbol": "X",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_no_pairs_finish"
      },
      {
        "currentState": "q_no_pairs_finish",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_no_pairs_finish"
      },
      {
        "currentState": "q_no_pairs_finish",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_to_zero"
      },
      {
        "currentState": "q_rewind_to_zero",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_zero"
      },
      {
        "currentState": "q_rewind_to_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-33": {
    "id": "tm-33",
    "name": "Unary Decrementer",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes unary decrement f(n) = n - 1. Rejects if input is zero (empty string).",
    "language": "f(1ⁿ) = 1ⁿ⁻¹ (n ≥ 1)",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q1",
      "q2",
      "q3"
    ],
    "inputAlphabet": [
      "1"
    ],
    "tapeAlphabet": [
      "1",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "1111",
      "11",
      "1"
    ],
    "defaultInput": "1111",
    "testCases": [
      {
        "input": "1111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "111"
      },
      {
        "input": "11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": ""
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q2"
      },
      {
        "currentState": "q2",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q3"
      },
      {
        "currentState": "q3",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q3"
      },
      {
        "currentState": "q3",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-34": {
    "id": "tm-34",
    "name": "Binary Incrementer",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes binary increment f(n) = n + 1 for non-negative binary integers.",
    "language": "f(n) = n + 1 in binary",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_find_end",
      "q_inc",
      "q_rewind_zero",
      "q_shift_right",
      "q_sr_pick",
      "q_sr_put0",
      "q_sr_put1",
      "q_sr_putZ",
      "q_sr_back",
      "q_sr_finish"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "Z",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "1011",
      "111",
      "0"
    ],
    "defaultInput": "1011",
    "testCases": [
      {
        "input": "1011",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1100"
      },
      {
        "input": "111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1000"
      },
      {
        "input": "0",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_inc"
      },
      {
        "currentState": "q_inc",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_zero"
      },
      {
        "currentState": "q_inc",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_inc"
      },
      {
        "currentState": "q_inc",
        "readSymbol": "_",
        "writeSymbol": "Z",
        "moveDirection": "R",
        "nextState": "q_shift_right"
      },
      {
        "currentState": "q_rewind_zero",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_zero"
      },
      {
        "currentState": "q_rewind_zero",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_zero"
      },
      {
        "currentState": "q_rewind_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_shift_right",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_shift_right"
      },
      {
        "currentState": "q_shift_right",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_shift_right"
      },
      {
        "currentState": "q_shift_right",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_sr_pick"
      },
      {
        "currentState": "q_sr_pick",
        "readSymbol": "0",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_sr_put0"
      },
      {
        "currentState": "q_sr_pick",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_sr_put1"
      },
      {
        "currentState": "q_sr_pick",
        "readSymbol": "Z",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_sr_putZ"
      },
      {
        "currentState": "q_sr_put0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_sr_back"
      },
      {
        "currentState": "q_sr_put1",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_sr_back"
      },
      {
        "currentState": "q_sr_putZ",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_sr_finish"
      },
      {
        "currentState": "q_sr_back",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_sr_pick"
      },
      {
        "currentState": "q_sr_finish",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-35": {
    "id": "tm-35",
    "name": "Binary Decrementer",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes binary decrement f(n) = n - 1. Rejects if input is zero.",
    "language": "f(n) = n - 1 in binary (n ≥ 1)",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_check_zero",
      "q_find_end",
      "q_dec",
      "q_rewind_start",
      "q_check_lead",
      "q_accept_zero",
      "q_check_single_zero",
      "q_put_D_cell0",
      "q_shift_left_loop",
      "q_put_into_D_0",
      "q_put_into_D_1",
      "q_erase_D_finish",
      "q_advance_D",
      "q_rewind_to_start_recheck"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "D",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "1000",
      "101",
      "1",
      "0"
    ],
    "defaultInput": "1000",
    "testCases": [
      {
        "input": "1000",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "111"
      },
      {
        "input": "101",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "100"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "0"
      },
      {
        "input": "0",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_check_zero"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_check_zero",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_check_zero"
      },
      {
        "currentState": "q_check_zero",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_check_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_dec"
      },
      {
        "currentState": "q_dec",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_dec"
      },
      {
        "currentState": "q_dec",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_check_lead"
      },
      {
        "currentState": "q_check_lead",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_accept_zero"
      },
      {
        "currentState": "q_check_lead",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_check_single_zero"
      },
      {
        "currentState": "q_check_single_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_check_single_zero",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_put_D_cell0"
      },
      {
        "currentState": "q_check_single_zero",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_put_D_cell0"
      },
      {
        "currentState": "q_put_D_cell0",
        "readSymbol": "0",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_shift_left_loop"
      },
      {
        "currentState": "q_shift_left_loop",
        "readSymbol": "0",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_put_into_D_0"
      },
      {
        "currentState": "q_shift_left_loop",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_put_into_D_1"
      },
      {
        "currentState": "q_shift_left_loop",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_D_finish"
      },
      {
        "currentState": "q_put_into_D_0",
        "readSymbol": "D",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_advance_D"
      },
      {
        "currentState": "q_put_into_D_1",
        "readSymbol": "D",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_advance_D"
      },
      {
        "currentState": "q_advance_D",
        "readSymbol": "_",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_shift_left_loop"
      },
      {
        "currentState": "q_erase_D_finish",
        "readSymbol": "D",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_to_start_recheck"
      },
      {
        "currentState": "q_rewind_to_start_recheck",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_to_start_recheck"
      },
      {
        "currentState": "q_rewind_to_start_recheck",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_start_recheck"
      },
      {
        "currentState": "q_rewind_to_start_recheck",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_check_lead"
      },
      {
        "currentState": "q_accept_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-36": {
    "id": "tm-36",
    "name": "Unary to Binary Conversion",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Converts unary input 1ⁿ to standard binary representation.",
    "language": "f(1ⁿ) = bin(n)",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_find_end",
      "q_init_counter",
      "q_put_E",
      "q_rewind_to_first_1",
      "q_scan_for_1",
      "q_to_counter",
      "q_inc_last_for_D",
      "q_inc_rev",
      "q_add_E",
      "q_erase_hash_start_rev",
      "q_add_E_last",
      "q_scan_to_E",
      "q_pick_last_bit",
      "q_carry_bit_0",
      "q_carry_bit_1",
      "q_erase_E_accept",
      "q_move_D",
      "q_rewind_blanks",
      "q_rewind_bits"
    ],
    "inputAlphabet": [
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "#",
      "D",
      "E",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "11111",
      "1111",
      "11",
      "1"
    ],
    "defaultInput": "11111",
    "testCases": [
      {
        "input": "11111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "101"
      },
      {
        "input": "1111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "100"
      },
      {
        "input": "11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "10"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_init_counter"
      },
      {
        "currentState": "q_init_counter",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_put_E"
      },
      {
        "currentState": "q_put_E",
        "readSymbol": "_",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_to_first_1"
      },
      {
        "currentState": "q_rewind_to_first_1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_to_first_1"
      },
      {
        "currentState": "q_rewind_to_first_1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_first_1"
      },
      {
        "currentState": "q_rewind_to_first_1",
        "readSymbol": "E",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_to_first_1"
      },
      {
        "currentState": "q_rewind_to_first_1",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_to_first_1"
      },
      {
        "currentState": "q_rewind_to_first_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_to_first_1"
      },
      {
        "currentState": "q_rewind_to_first_1",
        "readSymbol": "D",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_scan_for_1"
      },
      {
        "currentState": "q_scan_for_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_scan_for_1"
      },
      {
        "currentState": "q_scan_for_1",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_to_counter"
      },
      {
        "currentState": "q_scan_for_1",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_inc_last_for_D"
      },
      {
        "currentState": "q_to_counter",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_to_counter"
      },
      {
        "currentState": "q_to_counter",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_inc_rev"
      },
      {
        "currentState": "q_inc_rev",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_first_1"
      },
      {
        "currentState": "q_inc_rev",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_inc_rev"
      },
      {
        "currentState": "q_inc_rev",
        "readSymbol": "E",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_add_E"
      },
      {
        "currentState": "q_add_E",
        "readSymbol": "_",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_to_first_1"
      },
      {
        "currentState": "q_inc_last_for_D",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_erase_hash_start_rev"
      },
      {
        "currentState": "q_inc_last_for_D",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_inc_last_for_D"
      },
      {
        "currentState": "q_inc_last_for_D",
        "readSymbol": "E",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_add_E_last"
      },
      {
        "currentState": "q_add_E_last",
        "readSymbol": "_",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_erase_hash_start_rev"
      },
      {
        "currentState": "q_erase_hash_start_rev",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_erase_hash_start_rev"
      },
      {
        "currentState": "q_erase_hash_start_rev",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_erase_hash_start_rev"
      },
      {
        "currentState": "q_erase_hash_start_rev",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_scan_to_E"
      },
      {
        "currentState": "q_scan_to_E",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan_to_E"
      },
      {
        "currentState": "q_scan_to_E",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan_to_E"
      },
      {
        "currentState": "q_scan_to_E",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_scan_to_E"
      },
      {
        "currentState": "q_scan_to_E",
        "readSymbol": "D",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_scan_to_E"
      },
      {
        "currentState": "q_scan_to_E",
        "readSymbol": "E",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_pick_last_bit"
      },
      {
        "currentState": "q_pick_last_bit",
        "readSymbol": "0",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_bit_0"
      },
      {
        "currentState": "q_pick_last_bit",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_bit_1"
      },
      {
        "currentState": "q_pick_last_bit",
        "readSymbol": "D",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_E_accept"
      },
      {
        "currentState": "q_pick_last_bit",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_pick_last_bit"
      },
      {
        "currentState": "q_carry_bit_0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_carry_bit_0"
      },
      {
        "currentState": "q_carry_bit_0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_carry_bit_0"
      },
      {
        "currentState": "q_carry_bit_0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_bit_0"
      },
      {
        "currentState": "q_carry_bit_0",
        "readSymbol": "D",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_move_D"
      },
      {
        "currentState": "q_carry_bit_1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_carry_bit_1"
      },
      {
        "currentState": "q_carry_bit_1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_carry_bit_1"
      },
      {
        "currentState": "q_carry_bit_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_bit_1"
      },
      {
        "currentState": "q_carry_bit_1",
        "readSymbol": "D",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_move_D"
      },
      {
        "currentState": "q_move_D",
        "readSymbol": "_",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_scan_to_E"
      },
      {
        "currentState": "q_erase_E_accept",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_E_accept"
      },
      {
        "currentState": "q_erase_E_accept",
        "readSymbol": "E",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_blanks"
      },
      {
        "currentState": "q_rewind_blanks",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_blanks"
      },
      {
        "currentState": "q_rewind_blanks",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_bits"
      },
      {
        "currentState": "q_rewind_blanks",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_bits"
      },
      {
        "currentState": "q_rewind_bits",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_bits"
      },
      {
        "currentState": "q_rewind_bits",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_bits"
      },
      {
        "currentState": "q_rewind_bits",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-37": {
    "id": "tm-37",
    "name": "Binary Remainder Modulo 3",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes binary remainder f(n) = n mod 3 for binary number n.",
    "language": "f(n) = bin(n mod 3)",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_mod0",
      "q_mod1",
      "q_erase_for_0",
      "q_mod2",
      "q_erase_for_1",
      "q_erase_for_2",
      "q_write_0_cell0",
      "q_finish_zero",
      "q_write_1_cell0",
      "q_finish_one",
      "q_write_1_cell0_for2",
      "q_write_0_cell1_for2"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "1010",
      "11",
      "101",
      "0"
    ],
    "defaultInput": "1010",
    "testCases": [
      {
        "input": "1010",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      },
      {
        "input": "11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "0"
      },
      {
        "input": "101",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "10"
      },
      {
        "input": "0",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "0"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_mod0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_mod1"
      },
      {
        "currentState": "q_mod0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_mod0"
      },
      {
        "currentState": "q_mod0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_mod1"
      },
      {
        "currentState": "q_mod0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_for_0"
      },
      {
        "currentState": "q_mod1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_mod2"
      },
      {
        "currentState": "q_mod1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_mod0"
      },
      {
        "currentState": "q_mod1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_for_1"
      },
      {
        "currentState": "q_mod2",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_mod1"
      },
      {
        "currentState": "q_mod2",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_mod2"
      },
      {
        "currentState": "q_mod2",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_for_2"
      },
      {
        "currentState": "q_erase_for_0",
        "readSymbol": "0",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_for_0"
      },
      {
        "currentState": "q_erase_for_0",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_for_0"
      },
      {
        "currentState": "q_erase_for_0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_write_0_cell0"
      },
      {
        "currentState": "q_write_0_cell0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_finish_zero"
      },
      {
        "currentState": "q_finish_zero",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_erase_for_1",
        "readSymbol": "0",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_for_1"
      },
      {
        "currentState": "q_erase_for_1",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_for_1"
      },
      {
        "currentState": "q_erase_for_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_write_1_cell0"
      },
      {
        "currentState": "q_write_1_cell0",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_finish_one"
      },
      {
        "currentState": "q_finish_one",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_erase_for_2",
        "readSymbol": "0",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_for_2"
      },
      {
        "currentState": "q_erase_for_2",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_for_2"
      },
      {
        "currentState": "q_erase_for_2",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_write_1_cell0_for2"
      },
      {
        "currentState": "q_write_1_cell0_for2",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_write_0_cell1_for2"
      },
      {
        "currentState": "q_write_0_cell1_for2",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-38": {
    "id": "tm-38",
    "name": "Binary String Reversal",
    "category": "String Transformations",
    "categoryKey": "transformations",
    "description": "Reverses a binary string f(w) = wᴿ.",
    "language": "f(w) = wᴿ for w ∈ {0,1}*",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_find_end",
      "q_add_E",
      "q_rewind_past_hash",
      "q_find_unpicked_left",
      "q_append_0",
      "q_append_1",
      "q_all_picked",
      "q_put_E",
      "q_erase_prefix",
      "q_shift_res_find",
      "q_carry_to_D_0",
      "q_carry_to_D_1",
      "q_finish_rev",
      "q_move_D",
      "q_rewind_zero_rev"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "#",
      "X",
      "Y",
      "D",
      "E",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "10110",
      "1100",
      "1"
    ],
    "defaultInput": "10110",
    "testCases": [
      {
        "input": "10110",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "01101"
      },
      {
        "input": "1100",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "0011"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_add_E"
      },
      {
        "currentState": "q_add_E",
        "readSymbol": "_",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_past_hash"
      },
      {
        "currentState": "q_rewind_past_hash",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_past_hash"
      },
      {
        "currentState": "q_rewind_past_hash",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_past_hash"
      },
      {
        "currentState": "q_rewind_past_hash",
        "readSymbol": "E",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_past_hash"
      },
      {
        "currentState": "q_rewind_past_hash",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_find_unpicked_left"
      },
      {
        "currentState": "q_find_unpicked_left",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_find_unpicked_left"
      },
      {
        "currentState": "q_find_unpicked_left",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_find_unpicked_left"
      },
      {
        "currentState": "q_find_unpicked_left",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_append_0"
      },
      {
        "currentState": "q_find_unpicked_left",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_append_1"
      },
      {
        "currentState": "q_find_unpicked_left",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_all_picked"
      },
      {
        "currentState": "q_append_0",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_append_0"
      },
      {
        "currentState": "q_append_0",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_append_0"
      },
      {
        "currentState": "q_append_0",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_0"
      },
      {
        "currentState": "q_append_0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_append_0"
      },
      {
        "currentState": "q_append_0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_0"
      },
      {
        "currentState": "q_append_0",
        "readSymbol": "E",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_put_E"
      },
      {
        "currentState": "q_append_1",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_append_1"
      },
      {
        "currentState": "q_append_1",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_append_1"
      },
      {
        "currentState": "q_append_1",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_1"
      },
      {
        "currentState": "q_append_1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_append_1"
      },
      {
        "currentState": "q_append_1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_1"
      },
      {
        "currentState": "q_append_1",
        "readSymbol": "E",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_put_E"
      },
      {
        "currentState": "q_put_E",
        "readSymbol": "_",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_past_hash"
      },
      {
        "currentState": "q_all_picked",
        "readSymbol": "X",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_erase_prefix"
      },
      {
        "currentState": "q_all_picked",
        "readSymbol": "Y",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_erase_prefix"
      },
      {
        "currentState": "q_erase_prefix",
        "readSymbol": "X",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_prefix"
      },
      {
        "currentState": "q_erase_prefix",
        "readSymbol": "Y",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_prefix"
      },
      {
        "currentState": "q_erase_prefix",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_shift_res_find"
      },
      {
        "currentState": "q_shift_res_find",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_shift_res_find"
      },
      {
        "currentState": "q_shift_res_find",
        "readSymbol": "0",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_to_D_0"
      },
      {
        "currentState": "q_shift_res_find",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_to_D_1"
      },
      {
        "currentState": "q_shift_res_find",
        "readSymbol": "E",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_finish_rev"
      },
      {
        "currentState": "q_carry_to_D_0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_to_D_0"
      },
      {
        "currentState": "q_carry_to_D_0",
        "readSymbol": "D",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_move_D"
      },
      {
        "currentState": "q_carry_to_D_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_to_D_1"
      },
      {
        "currentState": "q_carry_to_D_1",
        "readSymbol": "D",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_move_D"
      },
      {
        "currentState": "q_move_D",
        "readSymbol": "_",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_shift_res_find"
      },
      {
        "currentState": "q_finish_rev",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_finish_rev"
      },
      {
        "currentState": "q_finish_rev",
        "readSymbol": "D",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_zero_rev"
      },
      {
        "currentState": "q_rewind_zero_rev",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_zero_rev"
      },
      {
        "currentState": "q_rewind_zero_rev",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_zero_rev"
      },
      {
        "currentState": "q_rewind_zero_rev",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-39": {
    "id": "tm-39",
    "name": "Binary String Copier",
    "category": "String Transformations",
    "categoryKey": "transformations",
    "description": "Duplicates a binary string f(w) = w#w.",
    "language": "f(w) = w#w for w ∈ {0,1}*",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_find_end",
      "q_rewind_start",
      "q_copy_next",
      "q_append_copy_0",
      "q_append_copy_1",
      "q_restore_all"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "#",
      "X",
      "Y",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "101",
      "1",
      "00"
    ],
    "defaultInput": "101",
    "testCases": [
      {
        "input": "101",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "101#101"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1#1"
      },
      {
        "input": "00",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "00#00"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end"
      },
      {
        "currentState": "q_find_end",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_copy_next"
      },
      {
        "currentState": "q_copy_next",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_copy_next"
      },
      {
        "currentState": "q_copy_next",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_copy_next"
      },
      {
        "currentState": "q_copy_next",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_append_copy_0"
      },
      {
        "currentState": "q_copy_next",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_append_copy_1"
      },
      {
        "currentState": "q_copy_next",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_restore_all"
      },
      {
        "currentState": "q_append_copy_0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_append_copy_0"
      },
      {
        "currentState": "q_append_copy_0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_copy_0"
      },
      {
        "currentState": "q_append_copy_0",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_copy_0"
      },
      {
        "currentState": "q_append_copy_0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_append_copy_1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_append_copy_1"
      },
      {
        "currentState": "q_append_copy_1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_copy_1"
      },
      {
        "currentState": "q_append_copy_1",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_copy_1"
      },
      {
        "currentState": "q_append_copy_1",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_restore_all",
        "readSymbol": "X",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_restore_all"
      },
      {
        "currentState": "q_restore_all",
        "readSymbol": "Y",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_restore_all"
      },
      {
        "currentState": "q_restore_all",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-40": {
    "id": "tm-40",
    "name": "Binary Complement",
    "category": "String Transformations",
    "categoryKey": "transformations",
    "description": "Inverts every bit in a binary string (0 ↔ 1).",
    "language": "f(w) = w̄ for w ∈ {0,1}*",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_rewind"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "01011",
      "111",
      "000"
    ],
    "defaultInput": "01011",
    "testCases": [
      {
        "input": "01011",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "10100"
      },
      {
        "input": "111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "000"
      },
      {
        "input": "000",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "111"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind"
      },
      {
        "currentState": "q_rewind",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-41": {
    "id": "tm-41",
    "name": "Remove Leading Zeros",
    "category": "String Transformations",
    "categoryKey": "transformations",
    "description": "Removes all leading zeros from a binary numeral, preserving single 0.",
    "language": "Removes leading zeros: 0*w → w (0* → 0)",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_check_single",
      "q_put_D",
      "q_shift_left_loop",
      "q_put_into_D_0",
      "q_put_into_D_1",
      "q_erase_D_finish",
      "q_advance_D",
      "q_rewind_recheck"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "D",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "000101",
      "0000",
      "101",
      "0"
    ],
    "defaultInput": "000101",
    "testCases": [
      {
        "input": "000101",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "101"
      },
      {
        "input": "0000",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "0"
      },
      {
        "input": "101",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "101"
      },
      {
        "input": "0",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "0"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_check_single"
      },
      {
        "currentState": "q_check_single",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_check_single",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_put_D"
      },
      {
        "currentState": "q_check_single",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_put_D"
      },
      {
        "currentState": "q_put_D",
        "readSymbol": "0",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_shift_left_loop"
      },
      {
        "currentState": "q_shift_left_loop",
        "readSymbol": "0",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_put_into_D_0"
      },
      {
        "currentState": "q_shift_left_loop",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_put_into_D_1"
      },
      {
        "currentState": "q_shift_left_loop",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_D_finish"
      },
      {
        "currentState": "q_put_into_D_0",
        "readSymbol": "D",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_advance_D"
      },
      {
        "currentState": "q_put_into_D_1",
        "readSymbol": "D",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_advance_D"
      },
      {
        "currentState": "q_advance_D",
        "readSymbol": "_",
        "writeSymbol": "D",
        "moveDirection": "R",
        "nextState": "q_shift_left_loop"
      },
      {
        "currentState": "q_erase_D_finish",
        "readSymbol": "D",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_recheck"
      },
      {
        "currentState": "q_rewind_recheck",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_recheck"
      },
      {
        "currentState": "q_rewind_recheck",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_recheck"
      },
      {
        "currentState": "q_rewind_recheck",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q0"
      }
    ]
  },
  "tm-42": {
    "id": "tm-42",
    "name": "Binary Symbol Sorting",
    "category": "String Transformations",
    "categoryKey": "transformations",
    "description": "Sorts binary symbols in ascending order, placing all 0s before all 1s.",
    "language": "Sorts binary string: #0(w) zeros followed by #1(w) ones",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_seen_1",
      "q_swap_put_0",
      "q_rewind_accept",
      "q_rewind_start"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "101001",
      "111000",
      "0101",
      "1"
    ],
    "defaultInput": "101001",
    "testCases": [
      {
        "input": "101001",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "000111"
      },
      {
        "input": "111000",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "000111"
      },
      {
        "input": "0101",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "0011"
      },
      {
        "input": "1",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_seen_1"
      },
      {
        "currentState": "q_seen_1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_seen_1"
      },
      {
        "currentState": "q_seen_1",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_swap_put_0"
      },
      {
        "currentState": "q_seen_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_accept"
      },
      {
        "currentState": "q_swap_put_0",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q_rewind_accept",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_rewind_accept"
      },
      {
        "currentState": "q_rewind_accept",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_accept"
      },
      {
        "currentState": "q_rewind_accept",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-43": {
    "id": "tm-43",
    "name": "Balanced Parentheses Recognition",
    "category": "Grammars & Non-Regular Languages",
    "categoryKey": "grammars",
    "description": "Recognizes the Dyck language of well-formed, balanced parentheses.",
    "language": "Dyck language: L = {w ∈ {(,)}* | w is balanced}",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_scan_for_close",
      "q_find_matching_open",
      "q_check_all_matched",
      "q_rewind_start"
    ],
    "inputAlphabet": [
      "(",
      ")"
    ],
    "tapeAlphabet": [
      "(",
      ")",
      "X",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "(()())",
      "(())",
      "(()",
      ")("
    ],
    "defaultInput": "(()())",
    "testCases": [
      {
        "input": "(()())",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "(())",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "(()",
        "expectedStatus": "REJECTED"
      },
      {
        "input": ")(",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q0",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": ")",
        "writeSymbol": ")",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "(",
        "writeSymbol": "(",
        "moveDirection": "R",
        "nextState": "q_scan_for_close"
      },
      {
        "currentState": "q_scan_for_close",
        "readSymbol": "(",
        "writeSymbol": "(",
        "moveDirection": "R",
        "nextState": "q_scan_for_close"
      },
      {
        "currentState": "q_scan_for_close",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_scan_for_close"
      },
      {
        "currentState": "q_scan_for_close",
        "readSymbol": ")",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_find_matching_open"
      },
      {
        "currentState": "q_scan_for_close",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_check_all_matched"
      },
      {
        "currentState": "q_find_matching_open",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_find_matching_open"
      },
      {
        "currentState": "q_find_matching_open",
        "readSymbol": "(",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_find_matching_open",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "(",
        "writeSymbol": "(",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind_start"
      },
      {
        "currentState": "q_rewind_start",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q_check_all_matched",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_check_all_matched"
      },
      {
        "currentState": "q_check_all_matched",
        "readSymbol": "(",
        "writeSymbol": "(",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_check_all_matched",
        "readSymbol": ")",
        "writeSymbol": ")",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_check_all_matched",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-44": {
    "id": "tm-44",
    "name": "Unary Number Equality Comparison",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Compares two unary numbers 1ⁿ#1ᵐ, accepting if n = m and rejecting otherwise.",
    "language": "L = {1ⁿ#1ⁿ | n ≥ 1}",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_to_hash",
      "q_find_right_1",
      "q_rewind_to_X",
      "q_check_next_left",
      "q_check_no_extra_right"
    ],
    "inputAlphabet": [
      "1",
      "#"
    ],
    "tapeAlphabet": [
      "1",
      "#",
      "X",
      "Y",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "111#111",
      "111#11",
      "1#1",
      "1#11"
    ],
    "defaultInput": "111#111",
    "testCases": [
      {
        "input": "111#111",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "111#11",
        "expectedStatus": "REJECTED"
      },
      {
        "input": "1#1",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "1#11",
        "expectedStatus": "REJECTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_to_hash"
      },
      {
        "currentState": "q0",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_to_hash",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_to_hash"
      },
      {
        "currentState": "q_to_hash",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_find_right_1"
      },
      {
        "currentState": "q_to_hash",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_find_right_1",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find_right_1"
      },
      {
        "currentState": "q_find_right_1",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind_to_X"
      },
      {
        "currentState": "q_find_right_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "qreject"
      },
      {
        "currentState": "q_rewind_to_X",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind_to_X"
      },
      {
        "currentState": "q_rewind_to_X",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_to_X"
      },
      {
        "currentState": "q_rewind_to_X",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_X"
      },
      {
        "currentState": "q_rewind_to_X",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_check_next_left"
      },
      {
        "currentState": "q_check_next_left",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_to_hash"
      },
      {
        "currentState": "q_check_next_left",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_check_no_extra_right"
      },
      {
        "currentState": "q_check_no_extra_right",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_check_no_extra_right"
      },
      {
        "currentState": "q_check_no_extra_right",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_check_no_extra_right",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "qreject"
      }
    ]
  },
  "tm-45": {
    "id": "tm-45",
    "name": "Enumerator for {0ⁿ1ⁿ | n ≥ 1}",
    "category": "Advanced Machines & Enumerators",
    "categoryKey": "advanced",
    "description": "Enumerates the language {0ⁿ1ⁿ | n ≥ 1} by writing words #01#0011#000111#... continuously on tape.",
    "language": "Enumerator for L = {0ⁿ1ⁿ | n ≥ 1}",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_init_0",
      "q_init_1",
      "q_init_hash",
      "q_skip_prev_1s",
      "q_find_word_start_hash",
      "q_copy_0s_loop",
      "q_append_new_0",
      "q_append_extra_0",
      "q_back_to_0s",
      "q_skip_new_0s_left",
      "q_restore_prev_0s",
      "q_to_prev_1s",
      "q_append_new_1",
      "q_copy_1s_loop",
      "q_append_extra_1",
      "q_back_to_1s",
      "q_append_final_hash",
      "q_skip_new_word_left",
      "q_restore_prev_1s",
      "q_scan_to_end_hash",
      "q_check_if_end_hash"
    ],
    "inputAlphabet": [
      "0",
      "1",
      "#"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "#",
      "X",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      ""
    ],
    "defaultInput": "",
    "testCases": [
      {
        "input": "",
        "expectedStatus": "STEP_LIMIT",
        "expectedTape": "#01#0011#000111#"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_init_0"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_init_0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_init_0"
      },
      {
        "currentState": "q0",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_init_0"
      },
      {
        "currentState": "q_init_0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_init_1"
      },
      {
        "currentState": "q_init_1",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_init_hash"
      },
      {
        "currentState": "q_init_hash",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_skip_prev_1s"
      },
      {
        "currentState": "q_skip_prev_1s",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_skip_prev_1s"
      },
      {
        "currentState": "q_skip_prev_1s",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_skip_prev_1s"
      },
      {
        "currentState": "q_skip_prev_1s",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_find_word_start_hash"
      },
      {
        "currentState": "q_find_word_start_hash",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_find_word_start_hash"
      },
      {
        "currentState": "q_find_word_start_hash",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_copy_0s_loop"
      },
      {
        "currentState": "q_copy_0s_loop",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_copy_0s_loop"
      },
      {
        "currentState": "q_copy_0s_loop",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_append_new_0"
      },
      {
        "currentState": "q_copy_0s_loop",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_extra_0"
      },
      {
        "currentState": "q_append_new_0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_append_new_0"
      },
      {
        "currentState": "q_append_new_0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_new_0"
      },
      {
        "currentState": "q_append_new_0",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_new_0"
      },
      {
        "currentState": "q_append_new_0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_back_to_0s"
      },
      {
        "currentState": "q_back_to_0s",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_back_to_0s"
      },
      {
        "currentState": "q_back_to_0s",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_back_to_0s"
      },
      {
        "currentState": "q_back_to_0s",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_back_to_0s"
      },
      {
        "currentState": "q_back_to_0s",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_copy_0s_loop"
      },
      {
        "currentState": "q_append_extra_0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_extra_0"
      },
      {
        "currentState": "q_append_extra_0",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_extra_0"
      },
      {
        "currentState": "q_append_extra_0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_append_extra_0"
      },
      {
        "currentState": "q_append_extra_0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_skip_new_0s_left"
      },
      {
        "currentState": "q_skip_new_0s_left",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_skip_new_0s_left"
      },
      {
        "currentState": "q_skip_new_0s_left",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_restore_prev_0s"
      },
      {
        "currentState": "q_restore_prev_0s",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_restore_prev_0s"
      },
      {
        "currentState": "q_restore_prev_0s",
        "readSymbol": "X",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_restore_prev_0s"
      },
      {
        "currentState": "q_restore_prev_0s",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_restore_prev_0s"
      },
      {
        "currentState": "q_restore_prev_0s",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_to_prev_1s"
      },
      {
        "currentState": "q_to_prev_1s",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_to_prev_1s"
      },
      {
        "currentState": "q_to_prev_1s",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_append_new_1"
      },
      {
        "currentState": "q_copy_1s_loop",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_copy_1s_loop"
      },
      {
        "currentState": "q_copy_1s_loop",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_append_new_1"
      },
      {
        "currentState": "q_copy_1s_loop",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_extra_1"
      },
      {
        "currentState": "q_append_new_1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_new_1"
      },
      {
        "currentState": "q_append_new_1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_append_new_1"
      },
      {
        "currentState": "q_append_new_1",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_new_1"
      },
      {
        "currentState": "q_append_new_1",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_back_to_1s"
      },
      {
        "currentState": "q_back_to_1s",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_back_to_1s"
      },
      {
        "currentState": "q_back_to_1s",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_back_to_1s"
      },
      {
        "currentState": "q_back_to_1s",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_back_to_1s"
      },
      {
        "currentState": "q_back_to_1s",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_copy_1s_loop"
      },
      {
        "currentState": "q_append_extra_1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_extra_1"
      },
      {
        "currentState": "q_append_extra_1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_append_extra_1"
      },
      {
        "currentState": "q_append_extra_1",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_append_extra_1"
      },
      {
        "currentState": "q_append_extra_1",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_append_final_hash"
      },
      {
        "currentState": "q_append_final_hash",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_skip_new_word_left"
      },
      {
        "currentState": "q_skip_new_word_left",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_skip_new_word_left"
      },
      {
        "currentState": "q_skip_new_word_left",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_skip_new_word_left"
      },
      {
        "currentState": "q_skip_new_word_left",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_restore_prev_1s"
      },
      {
        "currentState": "q_restore_prev_1s",
        "readSymbol": "X",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_restore_prev_1s"
      },
      {
        "currentState": "q_restore_prev_1s",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_restore_prev_1s"
      },
      {
        "currentState": "q_restore_prev_1s",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_restore_prev_1s"
      },
      {
        "currentState": "q_restore_prev_1s",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_scan_to_end_hash"
      },
      {
        "currentState": "q_scan_to_end_hash",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan_to_end_hash"
      },
      {
        "currentState": "q_scan_to_end_hash",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan_to_end_hash"
      },
      {
        "currentState": "q_scan_to_end_hash",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_check_if_end_hash"
      },
      {
        "currentState": "q_check_if_end_hash",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_scan_to_end_hash"
      },
      {
        "currentState": "q_check_if_end_hash",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan_to_end_hash"
      },
      {
        "currentState": "q_check_if_end_hash",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_scan_to_end_hash"
      },
      {
        "currentState": "q_check_if_end_hash",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_skip_prev_1s"
      }
    ]
  },
  "tm-46": {
    "id": "tm-46",
    "name": "Binary String Enumerator",
    "category": "Advanced Machines & Enumerators",
    "categoryKey": "advanced",
    "description": "Enumerates all finite binary strings in shortlex order: #e#0#1#00#01#10#11#000#...",
    "language": "Enumerator for Σ* in shortlex order",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_init_e",
      "q_init_h1",
      "q_init_0",
      "q_init_h2",
      "q_find_prev_hash",
      "q_copy_word_for_inc",
      "q_app_0",
      "q_app_1",
      "q_restore_copied",
      "q_back_copy",
      "q_go_inc_last_word",
      "q_shortlex_inc",
      "q_find_end_put_hash",
      "q_add_overflow_zero",
      "q_put_hash_close"
    ],
    "inputAlphabet": [
      "0",
      "1",
      "#",
      "e"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "#",
      "e",
      "X",
      "Y",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      ""
    ],
    "defaultInput": "",
    "testCases": [
      {
        "input": "",
        "expectedStatus": "STEP_LIMIT",
        "expectedTape": "#e#0#1#00#01#10#11#000#"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_init_e"
      },
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_init_e"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_init_e"
      },
      {
        "currentState": "q0",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_init_e"
      },
      {
        "currentState": "q_init_e",
        "readSymbol": "_",
        "writeSymbol": "e",
        "moveDirection": "R",
        "nextState": "q_init_h1"
      },
      {
        "currentState": "q_init_h1",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_init_0"
      },
      {
        "currentState": "q_init_0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_init_h2"
      },
      {
        "currentState": "q_init_h2",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_find_prev_hash"
      },
      {
        "currentState": "q_find_prev_hash",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_find_prev_hash"
      },
      {
        "currentState": "q_find_prev_hash",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_find_prev_hash"
      },
      {
        "currentState": "q_find_prev_hash",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_copy_word_for_inc"
      },
      {
        "currentState": "q_copy_word_for_inc",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_copy_word_for_inc"
      },
      {
        "currentState": "q_copy_word_for_inc",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_copy_word_for_inc"
      },
      {
        "currentState": "q_copy_word_for_inc",
        "readSymbol": "0",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_app_0"
      },
      {
        "currentState": "q_copy_word_for_inc",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_app_1"
      },
      {
        "currentState": "q_copy_word_for_inc",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_restore_copied"
      },
      {
        "currentState": "q_app_0",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_app_0"
      },
      {
        "currentState": "q_app_0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_app_0"
      },
      {
        "currentState": "q_app_0",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_app_0"
      },
      {
        "currentState": "q_app_0",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_back_copy"
      },
      {
        "currentState": "q_app_1",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_app_1"
      },
      {
        "currentState": "q_app_1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_app_1"
      },
      {
        "currentState": "q_app_1",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_app_1"
      },
      {
        "currentState": "q_app_1",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_back_copy"
      },
      {
        "currentState": "q_back_copy",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_back_copy"
      },
      {
        "currentState": "q_back_copy",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_back_copy"
      },
      {
        "currentState": "q_back_copy",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_back_copy"
      },
      {
        "currentState": "q_back_copy",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_copy_word_for_inc"
      },
      {
        "currentState": "q_back_copy",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_copy_word_for_inc"
      },
      {
        "currentState": "q_restore_copied",
        "readSymbol": "X",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_restore_copied"
      },
      {
        "currentState": "q_restore_copied",
        "readSymbol": "Y",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_restore_copied"
      },
      {
        "currentState": "q_restore_copied",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_go_inc_last_word"
      },
      {
        "currentState": "q_go_inc_last_word",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_go_inc_last_word"
      },
      {
        "currentState": "q_go_inc_last_word",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_go_inc_last_word"
      },
      {
        "currentState": "q_go_inc_last_word",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_go_inc_last_word"
      },
      {
        "currentState": "q_go_inc_last_word",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_shortlex_inc"
      },
      {
        "currentState": "q_shortlex_inc",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end_put_hash"
      },
      {
        "currentState": "q_shortlex_inc",
        "readSymbol": "1",
        "writeSymbol": "0",
        "moveDirection": "L",
        "nextState": "q_shortlex_inc"
      },
      {
        "currentState": "q_shortlex_inc",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_add_overflow_zero"
      },
      {
        "currentState": "q_add_overflow_zero",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_add_overflow_zero"
      },
      {
        "currentState": "q_add_overflow_zero",
        "readSymbol": "_",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_put_hash_close"
      },
      {
        "currentState": "q_find_end_put_hash",
        "readSymbol": "0",
        "writeSymbol": "0",
        "moveDirection": "R",
        "nextState": "q_find_end_put_hash"
      },
      {
        "currentState": "q_find_end_put_hash",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_end_put_hash"
      },
      {
        "currentState": "q_find_end_put_hash",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_find_prev_hash"
      },
      {
        "currentState": "q_put_hash_close",
        "readSymbol": "_",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_find_prev_hash"
      }
    ]
  },
  "tm-47": {
    "id": "tm-47",
    "name": "Universal Turing Machine Demonstration",
    "category": "Advanced Machines & Enumerators",
    "categoryKey": "advanced",
    "description": "Simulates a Turing Machine program from an encoded description on tape.",
    "language": "Interprets encoded TM program <M, w>",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q1"
    ],
    "inputAlphabet": [
      "0",
      "1",
      "#"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "#",
      "X",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "111#1",
      "11#11"
    ],
    "defaultInput": "111#1",
    "testCases": [
      {
        "input": "111#1",
        "expectedStatus": "ACCEPTED"
      },
      {
        "input": "11#11",
        "expectedStatus": "ACCEPTED"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q1",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q1"
      },
      {
        "currentState": "q1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-48": {
    "id": "tm-48",
    "name": "Unary GCD",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes the greatest common divisor gcd(n, m) in unary using the Euclidean algorithm.",
    "language": "f(1ⁿ#1ᵐ) = 1^gcd(n,m)",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_write_dollar",
      "q_find_E",
      "q_rewind_to_dollar",
      "q_compare_loop",
      "q_to_right_1",
      "q_left_exhausted",
      "q_find_unmarked_right",
      "q_back_to_dollar_and_repeat",
      "q_right_exhausted",
      "q_equal_accept",
      "q_sub_m_minus_n",
      "q_restore_Xs_to_1_accept",
      "q_go_first_1_accept",
      "q_scan_ans_end",
      "q_rewind_cell0_accept",
      "q_restore_X_left",
      "q_clean_Y_right",
      "q_erase_Y_shift_1",
      "q_carry_1_to_hash",
      "q_put_1_after_hash",
      "q_find_next_rem_1",
      "q_restore_unmatched_X",
      "q_erase_matched_X",
      "q_pack_left_to_dollar",
      "q_find_1_to_pack",
      "q_carry_1_to_dollar",
      "q_deposit_1_left"
    ],
    "inputAlphabet": [
      "1",
      "#"
    ],
    "tapeAlphabet": [
      "1",
      "#",
      "X",
      "Y",
      "E",
      "$",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "111111#1111",
      "111#11",
      "1111#1111",
      "11#1111"
    ],
    "defaultInput": "111111#1111",
    "testCases": [
      {
        "input": "111111#1111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11"
      },
      {
        "input": "111#11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1"
      },
      {
        "input": "1111#1111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1111"
      },
      {
        "input": "11#1111",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_write_dollar"
      },
      {
        "currentState": "q_write_dollar",
        "readSymbol": "_",
        "writeSymbol": "$",
        "moveDirection": "R",
        "nextState": "q_find_E"
      },
      {
        "currentState": "q_find_E",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_E"
      },
      {
        "currentState": "q_find_E",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_find_E"
      },
      {
        "currentState": "q_find_E",
        "readSymbol": "_",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_to_dollar"
      },
      {
        "currentState": "q_rewind_to_dollar",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_to_dollar"
      },
      {
        "currentState": "q_rewind_to_dollar",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_rewind_to_dollar"
      },
      {
        "currentState": "q_rewind_to_dollar",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_rewind_to_dollar"
      },
      {
        "currentState": "q_rewind_to_dollar",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_to_dollar"
      },
      {
        "currentState": "q_rewind_to_dollar",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_to_dollar"
      },
      {
        "currentState": "q_rewind_to_dollar",
        "readSymbol": "$",
        "writeSymbol": "$",
        "moveDirection": "R",
        "nextState": "q_compare_loop"
      },
      {
        "currentState": "q_compare_loop",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_compare_loop"
      },
      {
        "currentState": "q_compare_loop",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_compare_loop"
      },
      {
        "currentState": "q_compare_loop",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_to_right_1"
      },
      {
        "currentState": "q_compare_loop",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_left_exhausted"
      },
      {
        "currentState": "q_to_right_1",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_to_right_1"
      },
      {
        "currentState": "q_to_right_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_to_right_1"
      },
      {
        "currentState": "q_to_right_1",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_find_unmarked_right"
      },
      {
        "currentState": "q_find_unmarked_right",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find_unmarked_right"
      },
      {
        "currentState": "q_find_unmarked_right",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_find_unmarked_right"
      },
      {
        "currentState": "q_find_unmarked_right",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_back_to_dollar_and_repeat"
      },
      {
        "currentState": "q_find_unmarked_right",
        "readSymbol": "E",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_right_exhausted"
      },
      {
        "currentState": "q_back_to_dollar_and_repeat",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_back_to_dollar_and_repeat"
      },
      {
        "currentState": "q_back_to_dollar_and_repeat",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_back_to_dollar_and_repeat"
      },
      {
        "currentState": "q_back_to_dollar_and_repeat",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_back_to_dollar_and_repeat"
      },
      {
        "currentState": "q_back_to_dollar_and_repeat",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_back_to_dollar_and_repeat"
      },
      {
        "currentState": "q_back_to_dollar_and_repeat",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_back_to_dollar_and_repeat"
      },
      {
        "currentState": "q_back_to_dollar_and_repeat",
        "readSymbol": "$",
        "writeSymbol": "$",
        "moveDirection": "R",
        "nextState": "q_compare_loop"
      },
      {
        "currentState": "q_left_exhausted",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_left_exhausted"
      },
      {
        "currentState": "q_left_exhausted",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_left_exhausted"
      },
      {
        "currentState": "q_left_exhausted",
        "readSymbol": "E",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_equal_accept"
      },
      {
        "currentState": "q_left_exhausted",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_sub_m_minus_n"
      },
      {
        "currentState": "q_equal_accept",
        "readSymbol": "Y",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_equal_accept"
      },
      {
        "currentState": "q_equal_accept",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_equal_accept"
      },
      {
        "currentState": "q_equal_accept",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_restore_Xs_to_1_accept"
      },
      {
        "currentState": "q_restore_Xs_to_1_accept",
        "readSymbol": "X",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_restore_Xs_to_1_accept"
      },
      {
        "currentState": "q_restore_Xs_to_1_accept",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_restore_Xs_to_1_accept"
      },
      {
        "currentState": "q_restore_Xs_to_1_accept",
        "readSymbol": "$",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_go_first_1_accept"
      },
      {
        "currentState": "q_go_first_1_accept",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan_ans_end"
      },
      {
        "currentState": "q_go_first_1_accept",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_go_first_1_accept"
      },
      {
        "currentState": "q_scan_ans_end",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_scan_ans_end"
      },
      {
        "currentState": "q_scan_ans_end",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_cell0_accept"
      },
      {
        "currentState": "q_rewind_cell0_accept",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_cell0_accept"
      },
      {
        "currentState": "q_rewind_cell0_accept",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      },
      {
        "currentState": "q_sub_m_minus_n",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_sub_m_minus_n"
      },
      {
        "currentState": "q_sub_m_minus_n",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_sub_m_minus_n"
      },
      {
        "currentState": "q_sub_m_minus_n",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_restore_X_left"
      },
      {
        "currentState": "q_restore_X_left",
        "readSymbol": "X",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_restore_X_left"
      },
      {
        "currentState": "q_restore_X_left",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_restore_X_left"
      },
      {
        "currentState": "q_restore_X_left",
        "readSymbol": "$",
        "writeSymbol": "$",
        "moveDirection": "R",
        "nextState": "q_clean_Y_right"
      },
      {
        "currentState": "q_clean_Y_right",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_clean_Y_right"
      },
      {
        "currentState": "q_clean_Y_right",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_clean_Y_right"
      },
      {
        "currentState": "q_clean_Y_right",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_erase_Y_shift_1"
      },
      {
        "currentState": "q_erase_Y_shift_1",
        "readSymbol": "Y",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_Y_shift_1"
      },
      {
        "currentState": "q_erase_Y_shift_1",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_1_to_hash"
      },
      {
        "currentState": "q_erase_Y_shift_1",
        "readSymbol": "E",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_to_dollar"
      },
      {
        "currentState": "q_carry_1_to_hash",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_1_to_hash"
      },
      {
        "currentState": "q_carry_1_to_hash",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_put_1_after_hash"
      },
      {
        "currentState": "q_carry_1_to_hash",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_put_1_after_hash"
      },
      {
        "currentState": "q_put_1_after_hash",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_next_rem_1"
      },
      {
        "currentState": "q_find_next_rem_1",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_find_next_rem_1"
      },
      {
        "currentState": "q_find_next_rem_1",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_1_to_hash"
      },
      {
        "currentState": "q_find_next_rem_1",
        "readSymbol": "E",
        "writeSymbol": "E",
        "moveDirection": "L",
        "nextState": "q_rewind_to_dollar"
      },
      {
        "currentState": "q_right_exhausted",
        "readSymbol": "Y",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_right_exhausted"
      },
      {
        "currentState": "q_right_exhausted",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_right_exhausted"
      },
      {
        "currentState": "q_right_exhausted",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_restore_unmatched_X"
      },
      {
        "currentState": "q_restore_unmatched_X",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_restore_unmatched_X"
      },
      {
        "currentState": "q_restore_unmatched_X",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_restore_unmatched_X"
      },
      {
        "currentState": "q_restore_unmatched_X",
        "readSymbol": "X",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_erase_matched_X"
      },
      {
        "currentState": "q_erase_matched_X",
        "readSymbol": "X",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_matched_X"
      },
      {
        "currentState": "q_erase_matched_X",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_erase_matched_X"
      },
      {
        "currentState": "q_erase_matched_X",
        "readSymbol": "$",
        "writeSymbol": "$",
        "moveDirection": "R",
        "nextState": "q_pack_left_to_dollar"
      },
      {
        "currentState": "q_pack_left_to_dollar",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_find_1_to_pack"
      },
      {
        "currentState": "q_pack_left_to_dollar",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_pack_left_to_dollar"
      },
      {
        "currentState": "q_pack_left_to_dollar",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_to_dollar"
      },
      {
        "currentState": "q_find_1_to_pack",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_find_1_to_pack"
      },
      {
        "currentState": "q_find_1_to_pack",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_1_to_dollar"
      },
      {
        "currentState": "q_find_1_to_pack",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_rewind_to_dollar"
      },
      {
        "currentState": "q_carry_1_to_dollar",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_carry_1_to_dollar"
      },
      {
        "currentState": "q_carry_1_to_dollar",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_deposit_1_left"
      },
      {
        "currentState": "q_carry_1_to_dollar",
        "readSymbol": "$",
        "writeSymbol": "$",
        "moveDirection": "R",
        "nextState": "q_deposit_1_left"
      },
      {
        "currentState": "q_deposit_1_left",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_find_1_to_pack"
      }
    ]
  },
  "tm-49": {
    "id": "tm-49",
    "name": "Unary LCM",
    "category": "Arithmetic & Integer Operations",
    "categoryKey": "integers",
    "description": "Computes the least common multiple lcm(n, m) in unary. For 1111#11, result is 1111 (lcm(4,2)=4).",
    "language": "f(1ⁿ#1ᵐ) = 1^lcm(n,m)",
    "states": [
      "qaccept",
      "qreject",
      "q0",
      "q_check_m",
      "q_test_div",
      "q_mark_n",
      "q_check_n_exhaust",
      "q_find_n_1",
      "q_back_to_m",
      "q_find_next_m",
      "q_reset_m_loop",
      "q_check_if_more_n",
      "q_continue_m",
      "q_divisible_accept",
      "q_erase_m_accept",
      "q_rewind_zero_lcm",
      "q_rewind_1s_lcm"
    ],
    "inputAlphabet": [
      "1",
      "#"
    ],
    "tapeAlphabet": [
      "1",
      "#",
      "X",
      "Y",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "1111#11",
      "11#11"
    ],
    "defaultInput": "1111#11",
    "testCases": [
      {
        "input": "1111#11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "1111"
      },
      {
        "input": "11#11",
        "expectedStatus": "ACCEPTED",
        "expectedTape": "11"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_check_m"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qreject"
      },
      {
        "currentState": "q_check_m",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_check_m"
      },
      {
        "currentState": "q_check_m",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_test_div"
      },
      {
        "currentState": "q_test_div",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_mark_n"
      },
      {
        "currentState": "q_test_div",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_test_div"
      },
      {
        "currentState": "q_test_div",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_check_n_exhaust"
      },
      {
        "currentState": "q_mark_n",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_mark_n"
      },
      {
        "currentState": "q_mark_n",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_mark_n"
      },
      {
        "currentState": "q_mark_n",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_find_n_1"
      },
      {
        "currentState": "q_find_n_1",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_find_n_1"
      },
      {
        "currentState": "q_find_n_1",
        "readSymbol": "1",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_back_to_m"
      },
      {
        "currentState": "q_back_to_m",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_back_to_m"
      },
      {
        "currentState": "q_back_to_m",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_find_next_m"
      },
      {
        "currentState": "q_find_next_m",
        "readSymbol": "Y",
        "writeSymbol": "Y",
        "moveDirection": "R",
        "nextState": "q_find_next_m"
      },
      {
        "currentState": "q_find_next_m",
        "readSymbol": "1",
        "writeSymbol": "Y",
        "moveDirection": "L",
        "nextState": "q_mark_n"
      },
      {
        "currentState": "q_find_next_m",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_reset_m_loop"
      },
      {
        "currentState": "q_reset_m_loop",
        "readSymbol": "Y",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_reset_m_loop"
      },
      {
        "currentState": "q_reset_m_loop",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "L",
        "nextState": "q_check_if_more_n"
      },
      {
        "currentState": "q_check_if_more_n",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "L",
        "nextState": "q_check_if_more_n"
      },
      {
        "currentState": "q_check_if_more_n",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_continue_m"
      },
      {
        "currentState": "q_check_if_more_n",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_divisible_accept"
      },
      {
        "currentState": "q_continue_m",
        "readSymbol": "X",
        "writeSymbol": "X",
        "moveDirection": "R",
        "nextState": "q_continue_m"
      },
      {
        "currentState": "q_continue_m",
        "readSymbol": "#",
        "writeSymbol": "#",
        "moveDirection": "R",
        "nextState": "q_test_div"
      },
      {
        "currentState": "q_divisible_accept",
        "readSymbol": "X",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q_divisible_accept"
      },
      {
        "currentState": "q_divisible_accept",
        "readSymbol": "#",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_m_accept"
      },
      {
        "currentState": "q_erase_m_accept",
        "readSymbol": "1",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_m_accept"
      },
      {
        "currentState": "q_erase_m_accept",
        "readSymbol": "Y",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "q_erase_m_accept"
      },
      {
        "currentState": "q_erase_m_accept",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_zero_lcm"
      },
      {
        "currentState": "q_rewind_zero_lcm",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "L",
        "nextState": "q_rewind_zero_lcm"
      },
      {
        "currentState": "q_rewind_zero_lcm",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_1s_lcm"
      },
      {
        "currentState": "q_rewind_1s_lcm",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "L",
        "nextState": "q_rewind_1s_lcm"
      },
      {
        "currentState": "q_rewind_1s_lcm",
        "readSymbol": "_",
        "writeSymbol": "_",
        "moveDirection": "R",
        "nextState": "qaccept"
      }
    ]
  },
  "tm-50": {
    "id": "tm-50",
    "name": "Infinite Right-Moving Machine",
    "category": "Advanced Machines & Enumerators",
    "categoryKey": "advanced",
    "description": "A non-halting Turing Machine that moves right indefinitely. Demonstrates execution step-limit protection.",
    "language": "Non-halting demonstration (hits safety bound)",
    "states": [
      "qaccept",
      "qreject",
      "q0"
    ],
    "inputAlphabet": [
      "0",
      "1"
    ],
    "tapeAlphabet": [
      "0",
      "1",
      "_"
    ],
    "blankSymbol": "_",
    "startState": "q0",
    "acceptState": "qaccept",
    "rejectState": "qreject",
    "sampleInputs": [
      "101",
      ""
    ],
    "defaultInput": "101",
    "testCases": [
      {
        "input": "101",
        "expectedStatus": "STEP_LIMIT"
      },
      {
        "input": "",
        "expectedStatus": "STEP_LIMIT"
      }
    ],
    "transitions": [
      {
        "currentState": "q0",
        "readSymbol": "0",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "1",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q0"
      },
      {
        "currentState": "q0",
        "readSymbol": "_",
        "writeSymbol": "1",
        "moveDirection": "R",
        "nextState": "q0"
      }
    ]
  }
};

// Universal export for Browser and Node.js
if (typeof window !== 'undefined') {
  window.PRESET_MACHINES = PRESET_MACHINES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRESET_MACHINES };
}
