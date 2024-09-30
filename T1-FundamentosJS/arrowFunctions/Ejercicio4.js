let numeros = [1, 2, 3, 4, 5];

function arrayMin(numeros) {
    return numeros.reduce(function (p, v) {
        return (p > v ? p : v)

    });
}

function arrayMax(numeros) {
    return numeros.reduce(function (p, v) {
        return (p < v ? p : v)

    });
}
