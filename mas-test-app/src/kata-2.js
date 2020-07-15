export function kata2(obj, def, path) {
    const evaluate = (p) => {
        const result = p
            .split('.')
            .reduce((o, x) => (o == undefined || o === null) ? o : o[x], obj);
        return (result == undefined) ? def : result;
    }

    return (!path) ? evaluate : evaluate(path);
}