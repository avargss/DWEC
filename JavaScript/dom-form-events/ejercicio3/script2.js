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


    forms.forEach(form => {
        submitButton.addEventListener('click', event => {

            event.preventDefault(); // Evitar el envío del formulario.
            
            if (!regExpDni.test(dni)) {
                dni.classList.add("is-invalid");
            }

            if (form.checkValidity()) {
                // Devuelve true si todos los campos son correctos
                console.log("works");
            }

            form.classList.add("was-validated");

        });
    })

}

validacion();