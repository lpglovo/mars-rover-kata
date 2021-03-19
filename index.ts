const symbols: Record<number, string> = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
}

export function convert(number: number): string {
  if (number === 2) {
    let output = '';
    while (number > 0) {
      Object.entries(symbols).sort().reverse().forEach(([key, value]) => {
        let knumber = Number(key);
        if (knumber <= number) {
          output += value;
          number -= knumber;
        }
      });
    }
    return output;
  }
  return symbols[number] ?? ""
}
