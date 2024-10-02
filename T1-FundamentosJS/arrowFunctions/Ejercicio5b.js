let meses = [
    {name: "Enero", number: 1, days: 31},
    {name: "Febrero", number: 2, days: 28},
    {name: "Marzo", number: 3, days: 31},
    {name: "Abril", number: 4, days: 30},
    {name: "Mayo", number: 5, days: 31},
    {name: "Junio", number: 6, days: 30},
    {name: "Julio", number: 7, days: 31},
    {name: "Agosto", number: 8, days: 31},
    {name: "Septiembre", number: 9, days: 30},
    {name: "Octubre", number: 10, days: 31},
    {name: "Noviembre", number: 11, days: 30},
    {name: "Diciembre", number: 12, days: 31},
]


const mesesFiltro = meses.filter((meses) => meses.days == 30).forEach(m => console.log(`Meses con 30 días: `, m.name));
console.log("-----");

meses.filter((meses) => meses.number % 2 == 0).forEach(m => console.log(`Meses pares: `, m.number));
console.log("-----");

const totalDays = meses.reduce((acc, meses) => acc + meses.days, 1);
console.log("Días totales de todos los meses: " + totalDays);
