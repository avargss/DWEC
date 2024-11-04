let column = prompt("Introduce el número de columnas que quieres: ");
let rows = prompt("Introduce el número de filas que quieres: ");
let width1 = prompt("Introduce el ancho de las celdas en píxeles: ");
let height1 = prompt("Introduce el alto de las celdas en píxeles: ");

function createTable() {

    const tab = document.querySelector("table");

    for (let i = 1; i <= rows; i++) {
        let tr = document.createElement("tr");
        tab.appendChild(tr);

        for (let j = 1; j <= column; j++) {
            let td = document.createElement("td");
            td.style.width = `${width1}px`;
            td.style.height = `${height1}px`;

            // Esto es el ejercicio 7
            if (j % 2 == 0) {
                td.style.backgroundColor = "red";
            } else {
                td.style.backgroundColor = "blue";
            }

            tr.appendChild(td);
        }
    }

    return tab;
}

createTable();