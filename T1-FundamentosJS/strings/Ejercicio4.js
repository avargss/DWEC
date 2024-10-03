function limitadorDeCaracteres(str, numero) {
    
    return str.slice(0, numero); // 0 es la posición del String que toma como primera. Num es la posición hasta la que queremos cortar.

}

console.log(limitadorDeCaracteres("Superman", 4)); // Imprime los primeros 4 carácteres.
console.log(limitadorDeCaracteres("Superman", -2)); // Se puede poner negativo para que recorte desde el final del string.
