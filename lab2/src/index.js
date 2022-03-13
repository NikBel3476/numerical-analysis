/*
* Задание 1. Пусть число k - кол-во букв в вашем Ф.И.О., m - кол-во букв в вашем полном имени
* Решить систему (матирца задана в коде) методами
*
*/

const read = require('./read');
const {calcElemP} = require("./utilities");

async function main() {
    const k = Number(await read('Введите k\n'));
    const m = 'Никита'.length;

    console.log('----------------------------------------');
    console.log('Метод Холецкого');

    const A = [
        [12 + k, 2, m / 4, 1, 2],
        [4, 113 + k, 1, m / 10, m - 4],
        [1, 2, -24 - k, 3, 4],
        [1, 2 / m, 4, 33 + k, 4],
        [-1, 2, -3, 3 + m, -44 - k]
    ]
    const vector = [1, 2, 3, 4, 5];

    const P = [
        [A[0][0], 0, 0, 0, 0],
        [A[1][0], , 0, 0, 0],
        [A[2][0], , , 0, 0],
        [A[3][0], , , , 0],
        [A[4][0], , , , ]
    ];

    const C = [
        [1, A[0][1] / P[0][0], A[0][2] / P[0][0], A[0][3] / P[0][0], A[0][4] / P[0][0]],
        [0, , , , ],
        [0, 0, , , ],
        [0, 0, 0, , ],
        [0, 0, 0, 0, ],
    ];

    for (let i = 1; i < A.length; i++) {
        for (let j = 1; j <= i; j++) {
            P[i][j] = calcElemP(i, j, A, P, C);
            // TODO: complete the filling of matrices
        }
    }

    console.log('Матрица');
    console.log(A);
    console.log('Матрица P');
    console.log(P);
    console.log('Матрица C');
    console.log(C);
}

main();
