function fecha() {
    const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    const fechaHoy = new Date();
    
    const dia = diaSemana[fechaHoy.getDay()];
    const hora = fechaHoy.getHours();
    const min = fechaHoy.getMinutes();
    const seg = fechaHoy.getSeconds();

    return `${dia} Now ${hora}PM ${min}:${seg}`;
}

console.log(fecha());
