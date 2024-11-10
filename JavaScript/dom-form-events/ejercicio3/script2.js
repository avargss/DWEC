// Formulario de persona nueva.

const doc = document.getElementById("documentacion");
const dni = document.getElementById("dni");
const telefono = document.getElementById("telefono")
const submitButton = document.getElementById("submit");

const regExpDni = /^\d{8}[A-Z]$/;
const regExpTelf = /^\d{9}$/;

// El input necesita un required para que lo valide bien, si no lo pone como correcto aunque no tenga nada introducido.
function validacion() {

    const forms = document.querySelectorAll('.needs-validation');

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
    submitButton.addEventListener('click', event => {
        event.preventDefault(); // Evitar el envío del formulario.

        forms.forEach(form => {
            // Valida todos los campos usando form.checkValidity() 
            if (form.checkValidity() && dni.classList.contains("is-valid") && telefono.classList.contains("is-valid")) {
                console.log("Formulario válido");
                form.classList.add("was-validated");
            } else {
                console.log("Formulario no válido");
                form.classList.add("was-validated");
            }
        });
    });

}

validacion();