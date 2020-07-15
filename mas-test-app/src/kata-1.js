export function kata1(number) {
    return parseFloat(number.toString().split("").reverse().join("")) *
        Math.sign(number);
}