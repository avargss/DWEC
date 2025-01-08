function dias() {
    const fechaHoy = new Date("12/11/2024");
    const sept15 = new Date("15/09/2024");

    let milisDia = 24 * 60 * 60 * 1000;
    let milisPas = Math.abs(fechaHoy.getTime() - sept15.getTime());

    let diff = Math.round(milisPas / milisDia)

    return diff;
}

console.log(`Días desde el 15 de septiembre: ${dias()}`);

function lunes() {
    const sept15 = new Date("2024-09-15");
    const hoy = new Date();
    let contador = 0;

    while (sept15 <= hoy) {
        if(sept15.getDay() === 1) {
            contador++;
        }

        sept15.setDate(sept15.getDate() + 1)
    }

    return contador;

}

console.log(`Cantidad de lunes desde el 15 de septiembre: ${lunes()}`);
