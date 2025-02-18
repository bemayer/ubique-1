// @ts-expect-error TS(2307): Cannot find module 'assert' or its corresponding t... Remove this comment to see the full error message
import assert from "assert";
import burkeratio from "../../lib/quants/burkeratio.js";

const x = [
  0.003,
  0.026,
  0.015,
  -0.009,
  0.014,
  0.024,
  0.015,
  0.066,
  -0.014,
  0.039,
];
const y = [
  -0.005,
  0.081,
  0.04,
  -0.037,
  -0.061,
  0.058,
  -0.049,
  -0.021,
  0.062,
  0.058,
];

// Example 1: Compute Burke Ratio for a single return series
assert.strictEqual(burkeratio(x, 0, 12), 8.282140961596584);

// Example 2: Compute modified Burke Ratio
assert.strictEqual(burkeratio(x, 0, 12, "modified"), 26.190429341222337);

// Example 3: Invalid input
assert.throws(() => burkeratio([x, y]), /Input must be an array/);
