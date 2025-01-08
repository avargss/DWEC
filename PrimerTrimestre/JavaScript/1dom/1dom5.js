let arrColors = ["#FF0000", "#77a345", "#1F75FE", "#ffffff", "#000000", "#123456"];

let celdas = document.querySelectorAll("td"); // El querySelectorAll devuelve una lista. Por eso se le pone < length o <= length -1.

function colors() {
    let j = 0
    for (let i = 0; i < celdas.length; i++) { // "celdas" representa toda la tabla. "i" accede a cada celda.

        if (j == arrColors.length) {
            j = 0;
        }

        celdas[i].style.backgroundColor = arrColors[j];
        j++;
    }

}

colors();