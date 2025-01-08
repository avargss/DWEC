let images = [
    "images/pic1.png",
    "images/pic2.png",
    "images/pic3.png"
];

let index = 0;
let prevImageButton = document.querySelector("#prevBtn");
let nextImageButton = document.querySelector("#nextBtn");
let imagen = document.getElementById("imagen");


function nextImg() {
    // Si el index es mayor que la longitud del array, este vuelve a ser 0 para mostrar la primera imagen.
    if (index >= images.length - 1) {
        index = 0;
    } else {
        index++;
    }
    replaceImage(index);
}

function prevImg() {
    // Si el index es menor o igual a 0, se le asigna un valor igual a la longitud del array para que vaya a la última imagen.
    if (index <= 0) {
        index = images.length - 1;
    } else {
        index--;
    }
    replaceImage(index);
}

function replaceImage() {

    //imagen.getAttribute("src").replace("", images[index]);
    //imagen.getAttribute(selec);

    imagen.src = images[index]; // Indica que el src de la imagen es el array con la posición indicada.
    prevImageButton.disabled = index === 0; // Deshabilita el botón si la posición es 0
    nextImageButton.disabled = index === images.length - 1; // Deshabilita el botón si la posición es la última del array
    imagen.style.width = "50%";
}

prevImageButton.addEventListener("click", prevImg);
nextImageButton.addEventListener("click", nextImg);

replaceImage();