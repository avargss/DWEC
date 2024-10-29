function separar(params) {
    let letras = params.split(" "); // Se separa a partir del espacio.

    let primero = letras[0];
    let segundo = letras[1] ? letras[1][0] + "." : ""; // Si el apellido existe, coge la primera letra. Si no, la variable segundo se asigna a una cadena vacía.

    return `${primero} ${segundo}`;
}

console.log(separar("Alejandro Vargas Garrán"));