function enviarEmail(nombre, edad, mensaje, correo) {
    // Comprobar parámetros válidos
    if (typeof nombre !== 'string' || typeof edad !== 'number' || edad < 0 || typeof mensaje !== 'string' || typeof correo !== 'string') {
        return null;
    }

    // Determinar el estado del usuario
    const estado = edad >= 18
        ? `${nombre} es un usuario válido`
        : `${nombre} no es un usuario válido`;

    // Crear el mensaje del correo
    const mensajeEmail = `A user has posted a comment from the website:\n` +
                         `Nombre: ${nombre}\n` +
                         `Edad: ${edad}\n` +
                         `Estado: ${estado}\n` +
                         `Mensaje: ${mensaje}\n` +
                         `Correo: ${correo}`;

    // Devolver el mensaje del correo
    return mensajeEmail;
}

// Ejemplo de uso
const resultado = enviarEmail("Knekro", 20, "Mondongo, god no?", "knekro@example.com");
console.log(resultado);
