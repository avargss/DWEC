// Haz un array de personas y muestra el nombre de aquellos que sean mayores de 18.

let personas = [ 
    { nombre: `Andrés`, edad: 30},
    { nombre: `Juan`, edad: 25 },
    { nombre: `Miguel`, edad: 18 },
    { nombre: `Rodolfo`, edad: 15 },
];

const mayoresDeEdad = personas.filter((personas) => personas.edad >= 18);

console.log(mayoresDeEdad);
