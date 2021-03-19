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
  {
    input: 50,
    output: "L",
  },
  {
    input: 100,
    output: "C",
  },
  {
    input: 500,
    output: "D",
  },
  {
    input: 1000,
    output: "M",
  },
];

describe("roman numbers", () => {
  it.each(tests)("Should return proper output", (test) => {
    expect(convert(test.input)).toBe(test.output);
  });
});
