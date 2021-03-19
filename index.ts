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

const sortFn = (a: number, b: number) => b - a

const conversionLoop = (input: number, mappedNumbers: number[], runningRoman: string): string => {

    if (input == 0) return runningRoman

    let arabicNumber = mappedNumbers[0];

    if (arabicNumber <= input) {
        return conversionLoop(
            input - arabicNumber,
            mappedNumbers,
            runningRoman + symbols[arabicNumber],
        )
    } else {
        return conversionLoop(
            input,
            mappedNumbers.slice(1),
            runningRoman
        )
    }
}

const mappedArabicNumbers: number[] = Object.keys(symbols).map(Number).sort(sortFn);

export function convert(number: number): string {
    return conversionLoop(number, mappedArabicNumbers, "")
}
