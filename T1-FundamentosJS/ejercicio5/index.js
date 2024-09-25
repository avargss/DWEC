const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Escoge un més del año por su número: `, (mes) => {
    mes = parseInt(mes);

    if (mes == 1, 3, 5, 7, 8, 10, 12) {
        alert(`El mes seleccionado tiene 31 días.`);
    } else if (mes == 4, 6, 9, 11) {
        alert(`El més seleccionado tiene 30 días.`)
    } else if (mes == 2) {
        alert(`Febrero tiene 28 días. 29 en años bisiestos.`);
    } else {
        alert(`No válido.`);
    }

    rl.close;

});