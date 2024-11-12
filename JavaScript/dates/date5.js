const day = new Date("12/11/2024");
const year = 2070;

let howManyMondays = (day, year) => {

    let match = 0;
    let years = [];

    // Mientras que el año actual sea menor que 2070
    while (day.getFullYear() <= year) {
        // Si el día es Lunes, haz eso
        if (day.getDay() == 1) {
            match++;
            years.push(day.getFullYear());
        }
        day.setFullYear(day.getFullYear() + 1);
    }
    years.push(`Total: ` + match);
    return years;
}

console.log(howManyMondays(day, year));