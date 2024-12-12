const person = {
    "nombre": "Noon",
    "edad": 6,
    "aficiones": ["Deportes", "Lectura", "Viajar"],
    "emancipado": true
}

function crearForm(p) {
    const entrada = Object.entries(person);
    const keys = Object.keys(person);
    const values = Object.values(person);

    const formulario = document.getElementById("formulario");

    for (let index = 0; index < keys.aficiones.length; index++) {
        const div = document.createElement("div");
        div.className = "row";

        const label = document.createElement("label");
        label.innerHTML = keys[index].slice(0, 1).toUpperCase().concat(keys[index]).slice(1)

        div.appendChild(label);

        console.log(typeof values);

        switch (typeof values[index]) {
            case "String":
                const inputText = document.createElement("input");
                input.type = "text";
                input.value = "texto";
                div.appendChild(input);
                break;

            case "number":
                const inputNumber = document.createElement("input");
                input.type = "number";
                input.value = "numero";
                div.appendChild(input);
                break;

            case "object":
                const inputObject = document.createElement("input");
                input.type = "object";
                input.value = "objeto";
                div.appendChild(input);
                break;

            default:
                console.log("Entrada de datos no válida.");
                break;
        }

        formulario.appendChild(div);

    }
}

crearForm();