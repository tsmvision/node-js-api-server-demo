// sample test code.
// const sum = require('./sum');
import sum from './sum';


test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});