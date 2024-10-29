const { log } = require("console");
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const meses31 = [1, 3, 5, 7, 8, 10, 12];
const meses30 = [4, 6, 9, 11];

rl.question(`Escoge un mes del año por su número: `, (mes) => {
    mes = parseInt(mes);

    // Este método es efectivo pero no el más eficiente.
    /* if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
        console.log(`El mes seleccionado tiene 31 días.`);
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        console.log(`El mes seleccionado tiene 30 días.`)
    } else if (mes === 2) {
        console.log(`Febrero tiene 28 días. 29 en años bisiestos.`);
    } else {
        console.log(`No válido.`);
    } */

    // La forma más eficiente de hacer este código sería usando arrays que he definido arriba:
    if (meses31.includes(mes)) {
        console.log(`El mes seleccionado tiene 31 días.`);
    } else if (meses30.includes(mes)) {
        console.log(`El mes seleccionado tiene 30 días.`);
    } else if (mes == 2) {
        console.log(`Febrero tiene 28 días. 29 en años bisiestos.`);
    } else {
        console.log(`No válido.`);
        
    }

    rl.close();

});