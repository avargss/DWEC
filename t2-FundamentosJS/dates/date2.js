function mostrarFecha(fecha) {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const fechaDate = new Date(fecha);

    const dia = dias[fechaDate.getDay()];
    const mes = meses[fechaDate.getMonth()];
    const anio = fechaDate.getFullYear();

    return `${dia}, ${mes}, ${anio}`;
}

console.log(mostrarFecha("2024-6-16"));