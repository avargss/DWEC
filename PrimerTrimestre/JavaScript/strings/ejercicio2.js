function enviarEmail(nombre, edad, mensaje, correo) {
    // Comprobar parámetros válidos
    if (typeof nombre !== 'string' || typeof edad !== 'number' || edad < 0 || typeof mensaje !== 'string' || typeof correo !== 'string') {
        return null;
    }

    // Comprobar si el usuario es válido o no
    let estado = edad >= 18
        ? `${nombre} es un usuario válido`
        : `${nombre} no es un usuario válido`;

    // Crear el mensaje del correo
    const mensajeEmail = `${nombre} ${edad >= 18 ? " es un usuario válido" : " no es un usuario válido"}`; // Ambos métodos son correctos pero a Nuria le gusta más este.
                        /*`Un usuario ha enviado un nuevo mensaje:
                         Nombre: ${nombre}
                         Edad: ${edad}
                         Estado: ${estado}
                         Mensaje: ${mensaje}
                         Correo: ${correo};`*/

    // Devolver el mensaje del correo
    return mensajeEmail;
}

let resultado = enviarEmail("Knekro", 20, "Mondongo, god no?", "knekro@example.com");
console.log(resultado);
