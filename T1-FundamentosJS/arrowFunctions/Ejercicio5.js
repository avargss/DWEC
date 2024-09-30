let numeros = [10, 20, 30, 40, 50];

let max = 0; //Inicializamos una variable en 0 donde se guardará el valor máximo del array.

for (const numero of numeros) { // Recorremos el array para encontrar el valor más lto y se asigne a la variable `max`

    if (max < numero) { // Evalúa si `max` es menor que `numero` para almacenar en el el valor más grande hasta el momento. Cuando no hay un valor más grande, sale del for.
        max = numero;
    }
}

console.log(max);