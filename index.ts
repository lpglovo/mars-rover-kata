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

const sortFn = (a: [string, string], b: [string, string]) => {
  return Number(b[0]) - Number(a[0]);
};

export function convert(number: number): string {
  let output = "";
  while (number > 0) {
    const entryArray = Object.entries(symbols).sort(sortFn);
    for (const touple of entryArray) {
      let knumber = Number(touple[0]);
      if (knumber <= number) {
        output += touple[1];
        number -= knumber;
        break;
      }
    }
  }
  return output;
}
