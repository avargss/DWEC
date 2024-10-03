const mayusc1letra = (cadena) => {
    let cambio = "";
    let separacion = cadena.split(" ");

    separacion.forEach(e => {
        cambio += e.charAt(0).toUpperCase()+e.slice(1) + " "; // Slice devuelve la palabra después del primer carácter.
    });

    return cambio;
}

console.log(mayusc1letra("js string exercises"));
