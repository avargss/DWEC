const person = {
    "nombre": "Noon",
    "edad": 6,
    "aficiones": ["Deportes", "Lectura", "Viajar"],
    "emancipado": true,
}

function crearForm() {
    const entrada = Object.entries(person);
    const keys = Object.keys(person);
    const values = Object.values(person);

    const formulario = document.getElementById("formulario");

    for (let index = 0; index < entrada.length; index++) {
        const div = document.createElement("div");
        div.className = "row";

        const label = document.createElement("label");
        label.innerHTML = keys[index].slice(0, 1).toUpperCase().concat(keys[index]).slice(1);

        div.appendChild(label);

        console.log(typeof values[index]);

        switch (typeof values[index]) {
            case "string":
                const inputText = document.createElement("input");
                inputText.type = "text";
                inputText.value = values[index];
                div.appendChild(inputText);
                break;

            case "number":
                const inputNumber = document.createElement("input");
                inputNumber.type = "number";
                inputNumber.value = values[index];
                div.appendChild(inputNumber);
                break;

            case "object":

                console.log(values[index]);

                const selectObject = document.createElement("select");

                values[index].forEach(valor => {
                    const optionObject = document.createElement("option");
                    optionObject.value = valor;
                    optionObject.textContent = valor

                    selectObject.appendChild(optionObject);
                });

                div.appendChild(selectObject);
                break;

            case "boolean":
                const inputCheck = document.createElement("input");
                inputCheck.type = "checkbox";

                div.appendChild(inputCheck);
                break;

            default:
                console.log("Entrada de datos no válida.");
                break;
        }

        formulario.appendChild(div);

    }

    const submitDiv = document.createElement("div");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Enviar";

    submitDiv.appendChild(submitButton);
    formulario.appendChild(submitDiv);

}

crearForm();