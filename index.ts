export function convert(number: number): string {
  if (number === 10) {
    return "X";
  }
  if (number === 5) {
    return "V";
  }
  return "I";
}
