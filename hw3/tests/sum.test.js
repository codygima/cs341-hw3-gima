// Author: Cody Gima

/**
 * Sum test file taken from the Homework 3 file
 */
const sum = require("../public/javascripts/sum.js");
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
