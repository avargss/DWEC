console.log(`Busca en table.html la tabla con id "age-table":`);

function ej1() {
    let tabla = document.getElementById("age-table");
    return tabla;
}

console.log(ej1());

console.log(`-------------------------------`);

console.log(`Todos los label de la tabla (deben haber 3)`);

function ej2() {
    let labels = document.getElementsByTagName("label");
    return labels;
}

console.log(ej2());


console.log(`El primer elemento td con la palabra "Age"`);

function ej3() {
    let td = document.getElementById("age");
    return td;
}

console.log(ej3());


/* El formulario con nombre "search" */

/* El primer input del formulario */

/* El último input del formulario */