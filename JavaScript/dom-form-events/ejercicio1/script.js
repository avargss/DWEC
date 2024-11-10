// Creo 3 constantes que serán elementos del html sobre los que voy a hacer mi codigo
const button = document.getElementById("submit");
const inputs = document.getElementsByTagName("input");
const textarea = document.getElementsByTagName("textarea");

function validacion() {

    // Creo otra constante que es el formulario entero o todos los que tengan esa clase.
    const form = document.querySelector('.needs-validation');

    /* Cuando el botón se pulsa se previene el envío del form para que se llame a la siguiente función.
    * Después se comprueba la validación del form. Si está todo validado, se muestran los datos de los campos
    */

    button.addEventListener('click', event => {
        event.preventDefault(); // Previene el envío del form para que se muestren los datos

        if (form.checkValidity()) {
            // Si el checkValidity devuelve true me accede a la función para mostrar los datos
            mostrarValidados();
        }

        // Aunque el checkValidity devuelva true o false, el formulario se valida y se le añade la clase

        form.classList.add('was-validated');
    });

}

validacion();

function mostrarValidados() {

    // Agrupo todos los inputs en un array para poder iterar sobre todos a la vez
    const inputGroup = Array.from(inputs);

    // Creo un div donde voy a mostrar los datos de los campos
    const div = document.createElement("div");

    /* forEach con lambda donde element es cada input.
    Se crea un p y se le indica que su contenido es el valor de element.
    Después se añade el p al div para que se muestre. */
    inputGroup.forEach(element => {
        let p = document.createElement("p");
        p.innerText = element.value;
        div.appendChild(p);
    });

    // Lo mismo que arriba pero para el textarea

    let p2 = document.createElement("p");
    p2.innerText = textarea[0].value;
    div.appendChild(p2);

    // Por último se añade el div con ambos p añadidos al body

    document.body.appendChild(div);
}