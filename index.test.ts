import { convert } from "./index";

const tests = [
  {
    input: 1,
    output: "I",
  },
  {
    input: 5,
    output: "V",
  },
  {
    input: 10,
    output: "X",
  },
];

describe("roman numbers", () => {
  it.each(tests)("Should return proper output", (test) => {
    expect(convert(test.input)).toBe(test.output);
  });
});
