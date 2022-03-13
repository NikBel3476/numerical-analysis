/*
* Возвращает рассчитанный элемент для матрицы P
* @param {number} i Индекс строки
* @param {number} j Индекс столбца
* @param {array} A Матрица A
* @param {array} P Матрица P
* @param {array} C Матрица C
* @return {number} элемент матрицы
*/
export const calcElemP = (i, j, A, P, C) => {
    let sum = 0;
    for (let k = 0; k < j; k++) {
        sum += P[i][k] * C[k][j];
    }
    return A[i][j] - sum;
}

/*
* Возвращает рассчитанный элемент для матрицы C
* @param {number} i Индекс строки
* @param {number} j Индекс столбца
* @param {array} A Матрица A
* @param {array} P Матрица P
* @param {array} C Матрица C
* @return {number} элемент матрицы
*/
export const calcElemC = (i, j, A, P, C) => {
    let sum = 0;
    for (let k = 0; k < i; k++) {
        sum += P[i][k] * C[k][j];
    }
    return (A[i][j] - sum) / P[i][i];
}
