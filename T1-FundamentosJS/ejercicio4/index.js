/*let age = parseInt(prompt(`Introduce tu edad: `));

if (age < 18 && age > 120) {
    alert(`Aún estás joven jefe`);
} else {
    alert(`Viejo choto`);
} */


const readline = require('readline');

// Configurar la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario por su edad
rl.question('Introduce tu edad: ', (age) => {
    age = parseInt(age);

    if (age > 18 && age < 120) {
        console.log('Aún estás joven jefe');
    } else {
        console.log('Viejo');
    }

    // Cerrar la interfaz
    rl.close(); // IMPORTANTE si no el programa funciona infinitamente.
});
