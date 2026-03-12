const test = require("node:test");
const assert = require("node:assert/strict");

const { estimateQuote, normalizeSurface } = require("../src/pricing");

test("invalid surface falls back to the default quote surface", () => {
  assert.equal(normalizeSurface("pas un nombre"), 1000);
  assert.equal(normalizeSurface(-42), 1000);
});

test("large fields include the manual logistics surcharge", () => {
  const justBelow = estimateQuote(9900, "herbe");
  const justAbove = estimateQuote(10100, "herbe");

  assert.ok(justAbove > justBelow);
});

test("scrubland remains more expensive than regular grass", () => {
  assert.ok(estimateQuote(5000, "friche") > estimateQuote(5000, "herbe"));
});
