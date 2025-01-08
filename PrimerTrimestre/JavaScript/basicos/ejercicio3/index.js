let nota1 = parseInt(prompt(`Introduce la nota de la primera materia: `));
let nota2 = parseInt(prompt(`Introduce la nota de la segunda materia: `));
let nota3 = parseInt(prompt(`Introduce la nota de la tercera materia: `));
let nota4 = parseInt(prompt(`Introduce la nota de la cuarta materia: `));

function promedio() {
    nota1 + nota2 + nota3 + nota4 / 4;

}

if (promedio < 5) {
    console.log(`No pass`);

} else if (promedio = 5) {
    console.log(`Sufficient`);

} else if (promedio = 6) {
    console.log(`Good`);

} else if (promedio = 7) {5
    console.log(`Good`);

} else if (promedio > 7 && promedio < 10) {
    console.log(`Outstanding`);

} else {
    console.log(`No válido`);
    
}

console.log(promedio);
