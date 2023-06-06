// eslint-disable-next-line no-unused-vars
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let factorial = 1;
    while (n > 1) {
        factorial *= n;
        n--;
    }
    return factorial;
}
