import { convert } from "./index";

function testCase(input: number, output: string) {
  return { input, output,};
}

const tests = [
  testCase(1, "I"),
  testCase(5, "V"),
  testCase(10, "X"),
  testCase(50, "L"),
  testCase(100, "C"),
  testCase(500, "D"),
  testCase(1000, "M"),
  testCase(2, "II"),
  testCase(3, "III"),
  testCase(20, "XX"),
  testCase(2000, "MM"),
  testCase(26, "XXVI"),
  testCase(4, "IV"),
];

describe("roman numbers", () => {
  it.each(tests)("Should return proper output", (test) => {
    expect(convert(test.input)).toBe(test.output);
  });
});
