const test = require("node:test");
const assert = require("node:assert/strict");

const { estimateQuote } = require("../src/server");

test("quote estimate increases for larger surfaces", () => {
  assert.ok(estimateQuote(2500, "herbe") > estimateQuote(500, "herbe"));
});

test("thorny terrain costs more than regular grass", () => {
  assert.ok(estimateQuote(1200, "ronces") > estimateQuote(1200, "herbe"));
});
