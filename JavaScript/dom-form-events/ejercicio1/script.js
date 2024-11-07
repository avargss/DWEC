const button = document.getElementById("submit");
const inputs = document.getElementsByTagName("input");
const textarea = document.getElementsByTagName("textarea");

function validacion() {

    // DeJAR LOS COMENTARIOS PARA MAÑANA
    const form = document.querySelector('.needs-validation');

    /* Cuando el botón se pulsa se activa el evento que comprueba si el form se valida. 
    Si no, previene el evento. Si lo valida, se le añade la nueva clase y aparece el mensajito de validacion */

    button.addEventListener('click', event => {
        event.preventDefault();
        
        if (form.checkValidity()) {
            mostrarValidados(inputs, textarea);
        }

        form.classList.add('was-validated');
    });

}

validacion();

function mostrarValidados(inputs, textarea) {

    const prueba = Array.from(inputs);

    const div = document.createElement("div");

    prueba.forEach(element => {
        let p = document.createElement("p");
        p.innerText = element.value;
        div.appendChild(p);
    });

    let p2 = document.createElement("p");
    p2.innerText = textarea[0].value;
    div.appendChild(p2);

    document.body.appendChild(div);
}