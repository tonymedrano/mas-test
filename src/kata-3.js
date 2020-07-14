export function kata3(n, m) {
    const result = [];
    for (let i = m; i <= n; i++) {

        const divisor = [];
        for (let l = 1; l <= i; l++) {

            if (i % l === 0) {
                divisor.push(l);
            }
        }

        let square = divisor.flatMap(x => [x * x]);

        let sum = square.reduce((acummulator, currentValue) => acummulator + currentValue);

        if (Number.isInteger(Math.sqrt(sum))) {
            result.push([i, sum]);
        }

    }
    return result;
}