// eslint-disable-next-line no-unused-vars
function calculateMatrixSum(matrix) {
    let sum = matrix.reduce((acc, row) => {
        return acc + row.reduce((rowSum, num) => rowSum + num, 0);
    }, 0);

    return sum;
}
