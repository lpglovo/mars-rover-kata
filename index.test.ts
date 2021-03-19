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
  {
    input: 2,
    output: "II",
  },
  {
    input: 3,
    output: "III",
  },
  {
    input: 20,
    output: "XX",
  },
  {
    input: 2000,
    output: "MM",
  },
  {
    input: 4,
    output: "IV",
  },
];

describe("roman numbers", () => {
  it.each(tests)("Should return proper output", (test) => {
    expect(convert(test.input)).toBe(test.output);
  });
});
