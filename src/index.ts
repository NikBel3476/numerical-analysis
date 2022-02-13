/*
* Найти значение многочлена в точке x = x0, испльзуя схему Горнера
* P(x) = a0 * x^5 + 0.387 * x^4 + 1.4789 * x^3 + 1.0098 * x^2 + 1.222 * x + a5
* a0 = 1.234 +- 0.001
* a5 = -2.345 +- N * 0.0001
* x = 0.234 * N +- 0.003
* N - количество букв в вашем ФИО
* Рассчитать погрешность
* Найти верные и значащие цифры рузультата
* Рассчитать погрешность без использования схемы Горнера
* Найти коэффициенты многочлена, полученного при делении многочлена P(x) на x - c
* c = 0.987 +- N * 0.0001
*/

import {read} from "./read";
import {calcPolynomial, calcPolynomialHorner} from "./Utilities";

const a0: [number, number] = [1.234, 0.001];
const a1: [number, number] = [0.387, 0];
const a2: [number, number] = [1.4789, 0];
const a3: [number, number] = [1.0098, 0];
const a4: [number, number] = [1.222, 0];

async function main() {
    const valueN = await read('Введите N\n');
    const N = Number(valueN);

    const x: [number, number] = [0.234 * N, 0.003];
    const a5: [number, number] = [-2.345, N * 0.0001];
    console.log(`x = ${x} a5 = ${a5}`);

    const coefficients: [number, number][] = [a0, a1, a2, a3, a4, a5];

    const sumHorner = calcPolynomialHorner(x, coefficients);
    const sum = calcPolynomial(x, coefficients);

    console.log('--------------------------');
    console.log(`Результат по схеме Горнера`);
    console.log(`Сумма = ${sumHorner[0]}`);
    console.log(`Погрешность = ${sumHorner[1]}`);

    console.log('--------------------------');
    console.log(`Результат без использования схемы Горнера`);
    console.log(`Сумма = ${sum[0]}`);
    console.log(`Погрешность = ${sum[1]}`);

    process.exit(1);
}

main().catch((e: Error) => {
    console.error(e);
});
