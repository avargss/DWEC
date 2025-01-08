let numeros = [1, 2, 3, 4, 5];

const valorInicial = 0;
const sumaInicial = numeros.reduce((acumulador, valorActual) => acumulador + valorActual,
    valorInicial
);

const avg = (numeros) => {  // Usando arrow function me imprime `[Function: avg]`. Es porque debo invocarlo en el log o añadiendo la línea const promedio = avg(numeros)
    return sumaInicial / numeros.length;
}

// const avg = sumaInicial /numeros.length;

console.log(avg(numeros));