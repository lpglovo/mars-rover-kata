const symbols: Record<number, string> = {
  1: "I",
  5: "V",
  10: "X",
}

export function convert(number: number): string {
  return  symbols[number] ?? ""
}
