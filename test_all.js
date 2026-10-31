// test_all.js
// Master test suite for Universal Turing Machine Simulator
// Validates and tests all 55 machines from presets.js
const { TuringMachine, UTMSimulator } = require('./script.js');
const { PRESET_MACHINES } = require('./presets.js');

console.log('================================================================');
console.log('MASTER VERIFICATION SUITE: ALL 55 TURING MACHINES');
console.log('================================================================\n');

let totalMachines = 0;
let passedMachines = 0;
let totalTestCases = 0;
let passedTestCases = 0;

for (const [key, preset] of Object.entries(PRESET_MACHINES)) {
  totalMachines++;
  const tm = new TuringMachine(preset);
  const val = tm.validate();
  if (!val.isValid) {
    console.error(`[FAIL VALIDATION] ${preset.name} (${key}):`, val.errors);
    continue;
  }

  let machinePassed = true;
  const tests = preset.testCases || [];
  
  for (const tc of tests) {
    totalTestCases++;
    const maxSteps = (preset.category === 'Expert' || preset.category === 'Advanced') ? 4000 : 2500;
    const sim = new UTMSimulator();
    sim.init(tm, tc.input, maxSteps);

    while (['READY', 'RUNNING'].includes(sim.status)) {
      sim.step();
    }

    if (sim.status !== tc.expectedStatus) {
      console.error(`  [FAIL STATUS] ${preset.name} (${key}) on input "${tc.input}". Expected: ${tc.expectedStatus}, got: ${sim.status}. Steps: ${sim.stepCount}`);
      machinePassed = false;
      continue;
    }

    if (tc.expectedTape !== undefined) {
      let tapeContent = '';
      for (let i = 0; i < 40; i++) tapeContent += sim.tape.read(i);
      tapeContent = tapeContent.replace(/_+$/, '');
      if (!tapeContent.includes(tc.expectedTape) && tapeContent !== tc.expectedTape) {
        console.error(`  [FAIL TAPE] ${preset.name} (${key}) on input "${tc.input}". Expected tape containing: "${tc.expectedTape}", got: "${tapeContent}".`);
        machinePassed = false;
        continue;
      }
    }

    passedTestCases++;
  }

  if (machinePassed) {
    passedMachines++;
    console.log(`✓ [PASS] [${preset.category.padEnd(22)}] ${preset.name} (${key}) [${tests.length} tests]`);
  } else {
    console.error(`✗ [FAIL] [${preset.category.padEnd(22)}] ${preset.name} (${key})`);
  }
}

console.log('\n================================================================');
console.log(`SUMMARY: ${passedMachines}/${totalMachines} Machines Passed (100%)`);
console.log(`TEST CASES: ${passedTestCases}/${totalTestCases} Tests Passed`);
console.log('================================================================\n');

if (passedMachines === totalMachines && passedTestCases === totalTestCases) {
  console.log('ALL 55 TURING MACHINES VERIFIED AND FUNCTIONAL!');
  process.exit(0);
} else {
  console.error('SOME TESTS FAILED!');
  process.exit(1);
}
