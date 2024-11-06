function iconBasedOnExtension() {

    let images = document.querySelectorAll("img");

    images.forEach(image => {
        // Así obtengo la extensión de la imagen a partir del . y la devuelvo con el pop();
        let extension = image.src.split(".").pop().toLowerCase();

        // Crear un elemento img para el logo.
        let icon = document.createElement("img");
        icon.style.width = "50px";

        // Ahora asigno el logo dependiendo de la extensión
        if (extension === "png") {
            icon.src = "icons/png_3304.png";
        } else if (extension === "jpg") {
            icon.src = "icons/jpg_1.jpg"
        }

        image.insertAdjacentElement("afterend", icon)
    })
}

iconBasedOnExtension();