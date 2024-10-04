let numeros = [1, 2, 3, 4, 5];

const raizQ = numeros => {
    return numeros.map(numeros => numeros ** 2); // .map() itera sobre cada elemento del array.
}

const raizQ2 = raizQ(numeros); // Pasamos el array como argumento 
console.log(raizQ2);