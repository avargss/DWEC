/*function eliminarElementosDuplicados(lista) {
    return [...new Set(lista)];
}

const conRepes = [1,2,2,3,3,5,5,6,7,8,9,9];
const sinRepes = eliminarElementosDuplicados(conRepes);

console.log(sinRepes);*/

function eliminarElementosDuplicados(lista) {
    return lista.filter((e, i) => lista.indexOf(e) === i);
}

const conRepes = [1,2,2,3,3,5,5,6,7,8,9,9];
const sinRepes = eliminarElementosDuplicados(conRepes);

console.log(sinRepes);