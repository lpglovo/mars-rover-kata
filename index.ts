const symbols: Record<number, string> = {
  1: "I",
  4: "IV",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

const sortFn = (a: number, b: number) => {
  return b-a;
};

export function convert(number: number): string {
  let output = "";
  while (number > 0) {
    const kNumbers = Object.keys(symbols).map(Number).sort(sortFn);
    for (const kNumber of kNumbers) {
      if (kNumber <= number) {
        output += symbols[kNumber];
        number -= kNumber;
        break;
      }
    }
  }
  return output;
}
