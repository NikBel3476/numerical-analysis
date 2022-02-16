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

import { read } from "./read";
import { calcPolynomial, calcPolynomialHorner } from "./Utilities";

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
    console.log(`x = ${x[0]} +- ${x[1]} a5 = ${a5[0]} +- ${a5[1]}`);

    const coefficients: [number, number][] = [a0, a1, a2, a3, a4, a5];

    const sumHorner = calcPolynomialHorner(x, coefficients);
    const sum = calcPolynomial(x, coefficients);

    console.log(
        `--------------------------
    Результат по схеме Горнера
    Сумма = ${sumHorner[0]}
    Погрешность = ${sumHorner[1]}`
    );

    console.log(
        `--------------------------
    Результат без схемы Горнера
    Сумма = ${sum[0]}
    Погрешность = ${sum[1]}`
    );

    console.log('--------------------------');
    console.log(`Погршеность по схеме Горнера ${sumHorner[1] > sum[1] ? '>' : '<='} погрешность без схемы`);

    const digits = sumHorner[0].toString();

    const significantFigures = sumHorner[0].toString().replace(/^0+/, '').replace(/0+$/, '').replace('.', '');;
    console.log(`Значащие цифры ${significantFigures.split('').join(' ')}`);

    const ints = sumHorner[0].toString().replace(/\..*/, '');
    const fractional = sumHorner[0].toString().replace(/^.*\./, '');

    let trulyDigits = sumHorner[0].toString().replace('.', '');
    for (let i = -fractional.length; i < ints.length; i++) {
        if (sumHorner[1] > Math.pow(10, i)) {
            trulyDigits = trulyDigits.slice(0, trulyDigits.length - 1);
        }
    }

    console.log(`Верные числа ${trulyDigits.split('').join(' ')}`);

    process.exit(1);
}

main().catch((e: Error) => {
    console.error(e);
});
