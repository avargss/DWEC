let numNegativos = [-1, -2, -3, -4, -5];

const numeros = numNegativos => {
    return numNegativos.map(numNegativos => -numNegativos);
}

const numPositivos = numeros(numNegativos);
console.log(numPositivos);
