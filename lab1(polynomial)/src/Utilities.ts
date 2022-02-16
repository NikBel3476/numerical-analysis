export function calcPolynomialHorner (x: [number, number], coeffs: [number, number][]): [number, number] {
    let sum: [number, number] = coeffs[0];

    for (let i = 1; i < coeffs.length; i++) {
        sum = [
            sum[0] * x[0] + coeffs[i][0],
            i > 0 ? sum[1] * x[0] + sum[0] * coeffs[i - 1][1] : coeffs[0][1] // погрешность P0 = погрешность a0
        ];
    }

    return sum;
}

export function calcPolynomial (x: [number, number], coeffs: [number, number][]): [number, number] {
    let result: [number, number] = [1, 1];

    for (let i = 0; i < coeffs.length; i++) {
        if (i > 0) {
            result = sum(result, mult(coeffs[coeffs.length - i - 1], pow(x, i)));
        } else {
            result = coeffs[i]
        }
    }

    return result;
}

function sum (a: [number, number], b: [number, number]): [number, number] {
    return [a[0] + b[0], a[1] + b[1]];
}

function mult (a: [number, number], b: [number, number]): [number, number] {
    return [a[0] * b[0], a[0] * b[1] + b[0] * a[1]];
}

function pow (base: [number, number], exp: number): [number, number] {
    let result = base;

    for (let i = 1; i < exp; i++) {
        result = mult(result, base);
    }

    return result;
}
