document.getElementById("enviar").addEventListener("click", (event) => {
    event.preventDefault()
    console.log("Formulario no enviado");
});

valor = document.getElementsByTagName("input").valor;
if (valor == null || valor.lenght == 0 || /^\s+$/.test(valor)) {
    return false;
};