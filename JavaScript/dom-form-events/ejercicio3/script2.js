// Formulario de persona nueva.

const doc = document.getElementById("documentacion");
let dni = document.getElementById("dni");
let telefono = document.getElementById("telefono");
const submitButton = document.getElementById("submit");
const agregarButton = document.getElementById("agregar");
let contador = 0;

const regExpDni = /^\d{8}[A-Z]$/;
const regExpTelf = /^\d{9}$/;

function validacionLugares() {
    const formLugar = document.getElementById("lugares");

    submitButton.addEventListener("click", event => {
        event.preventDefault();

        if (formLugar.checkValidity()) {
            alert("pinga");
        } 

        formLugar.classList.add("was-validated");
    });
}

validacionLugares();

// El input necesita un required para que lo valide bien, si no lo pone como correcto aunque no tenga nada introducido.
function validacionPersonas() {

    const form = document.getElementById("formPersona");

    // Validación al salir del campo DNI
    dni.addEventListener('blur', () => {
        if (regExpDni.test(dni.value)) {
            dni.classList.remove("is-invalid");
            dni.classList.add("is-valid");
        } else {
            dni.classList.remove("is-valid");
            dni.classList.add("is-invalid");
        }
    });

    // Validación al salir del campo Teléfono
    telefono.addEventListener('blur', () => {
        if (regExpTelf.test(telefono.value)) {
            telefono.classList.remove("is-invalid");
            telefono.classList.add("is-valid");
        } else {
            telefono.classList.remove("is-valid");
            telefono.classList.add("is-invalid");
        }
    });

    // Validación en el botón de envío
    agregarButton.addEventListener('click', event => {
        event.preventDefault(); // Evitar el envío del formulario.


        // Valida todos los campos usando form.checkValidity() 
        if (form.checkValidity() && dni.classList.contains("is-valid") && telefono.classList.contains("is-valid")) {
            console.log("Formulario válido");
            form.classList.add("was-validated");
            let nombre = document.getElementById("nombre");
            let apellido1 = document.getElementById("apellido1");
            let apellido2 = document.getElementById("apellido2");

            if (contador >= 5) {
                alert("Máximo de 5 personas");
            } else {
                controlDePersonas(nombre.value, apellido1.value, apellido2.value, dni.value, telefono.value);
                nombre.value = "";
                apellido1.value = "";
                apellido2.value = "";
                dni.value = "";
                telefono.value = "";
            }

        } else {
            console.log("Formulario no válido");
            form.classList.add("was-validated");
        }

    });

}

validacionPersonas();

function controlDePersonas(nombre, apellido1, apellido2, dni, telefono) {
    console.log(nombre, apellido1, apellido2, dni, telefono);

    const datos = document.createElement("div");
    datos.innerHTML = `
    <p>
    ${nombre}, ${apellido1}, ${apellido2}, ${dni}, ${telefono}
    </p>`;

    contador++;

    let borrar = document.createElement("button");
    borrar.classList.add("btn", "btn-danger");
    borrar.textContent = "Eliminar persona";

    borrar.addEventListener("click", (event) => {
        event.preventDefault();
        datos.remove();
        contador--;
    });

    datos.appendChild(borrar);
    document.querySelector(".extras").appendChild(datos);

}