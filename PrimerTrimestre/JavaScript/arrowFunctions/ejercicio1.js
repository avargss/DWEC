// Define un array de personas y crea una arrow function que haga un saludo para cada una.

let personas = [ // Creamos el array con la propiedad de nombre y el nombre de cada persona.
    { nombre: `Andrés` },
    { nombre: `Juan` },
    { nombre: `Miguel` },
    { nombre: `Rodolfo` },
];

const saludar = personas => { // Creamos la función para generar el saludo.
    // La función toma el nombre de cada persona y genera un saludo.
    return personas.map(personas => `Me alegro de verte ${personas.nombre}`); // personas.map() itera sobre cada elemento del array personas.
}

const saludos = saludar(personas); // Con esta otra función llamamos a la anterior pasando el array como argumento. Devuelve un nuevo array con los saludos.
console.log(saludos);