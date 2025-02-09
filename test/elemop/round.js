import assert from 'assert';
import round from '../../lib/elemop/round.js';

// Example 1: Round a number to 12 decimal places
assert.strictEqual(round(Math.PI, 12), 3.14159265359);

// Example 2: Round an array of numbers to 2 decimal places
assert.deepStrictEqual(round([-1.4543, 4.5234], 2), [-1.45, 4.52]);

// Example 3: Round an array of numbers to the nearest integer
assert.deepStrictEqual(round([-1.9, -0.2, 3.4, 5.6, 7.0]), [-2, 0, 3, 6, 7]);

// Example 4: Round a matrix of numbers to the nearest integer
assert.deepStrictEqual(round([[1.45, -2.3], [1.1, -4.3]]), [[1, -2], [1, -4]]);

// Example 5: Round a matrix of numbers to 1 decimal place
assert.deepStrictEqual(round([[1.456, -2.354], [1.123, -4.345]], 1), [[1.5, -2.4], [1.1, -4.3]]);

// Example 6: Round a single number without specifying decimal places
assert.strictEqual(round(5.678), 6);

// Example 7: Round an array of negative numbers to 2 decimal places
assert.deepStrictEqual(round([-1.4567, -4.5234], 2), [-1.46, -4.52]);

// Example 8: Round a single negative number to 2 decimal places
assert.strictEqual(round(-2.34567, 2), -2.35);
