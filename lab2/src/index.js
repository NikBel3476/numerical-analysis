/*
* Задание 1. Пусть число k - кол-во букв в вашем Ф.И.О., m - кол-во букв в вашем полном имени
* Решить систему (матирца задана в коде) методами
*
*/

const read = require('./read');

async function main() {
    const k = Number(await read('Введите k\n'));
    const m = 'никита'.length;

    const matrix = [
        [12 + k, 2, m / 4, 1, 2],
        [4, 113 + k, 1, m / 10, m - 4],
        [1, 2, -24 - k, 3, 4],
        [1, 2 / m, 4, 33 + k, 4],
        [-1, 2, -3, 3 + m, -44 - k]
    ]
    const vector = [1, 2, 3, 4, 5];

    const P = [matrix[0]];
    const C = [];

    console.log('Матрица');
    console.log(matrix);
}

main();
