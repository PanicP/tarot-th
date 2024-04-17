export const intToRoman = (num: number): string => {
    if (num === 0) {
        return 'O'
    }

    const romanNumerals: { [key: number]: string } = {
        0: '',
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }

    const keys = Object.keys(romanNumerals)
        .map(Number)
        .sort((a, b) => b - a)

    let result = ''
    let i = 0

    while (num > 0) {
        if (num >= keys[i]) {
            result += romanNumerals[keys[i]]
            num -= keys[i]
        } else {
            i++
        }
    }

    return result
}
