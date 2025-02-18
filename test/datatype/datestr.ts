// @ts-expect-error TS(2307): Cannot find module 'assert' or its corresponding t... Remove this comment to see the full error message
import assert from "assert";
import datestr from "../../lib/datatype/datestr.js";

// Example 1: Convert a single Unix timestamp to a date string
assert.strictEqual(datestr(1419984000), "2014-12-31");

// Example 2: Convert an array of Unix timestamps to date strings with custom format
assert.deepStrictEqual(datestr([1419984000, 1422662400], "DD-MMM-YY"), [
  "31-Dec-14",
  "31-Jan-15",
]);

// Example 3: Convert a matrix of Unix timestamps to formatted date strings with time
assert.deepStrictEqual(
  datestr(
    [[1419984000, 1422662400], [1423958400, 1425168000]],
    "YY-MM-DD hh:mm:ss",
  ),
  [["14-12-31 12:00:00", "15-01-31 12:00:00"], [
    "15-02-15 12:00:00",
    "15-03-01 12:00:00",
  ]],
);

// Example 4: Convert a timestamp to date string using default format
assert.strictEqual(datestr(1609459200), "2021-01-01");

// Example 5: Convert an array with a single Unix timestamp to date string
assert.deepStrictEqual(datestr([1609459200]), ["2021-01-01"]);
