const colButton = document.createElement("button");
const rowButton = document.createElement("button");

colButton.textContent = "Añadir columna";
rowButton.textContent = "Añadir fila";

document.body.appendChild(colButton);
document.body.appendChild(rowButton);

function addRow() {

    const tab = document.querySelector("table");
    let tr = document.createElement("tr");
    tr.textContent = "4";

    tab.appendChild(tr);
    
}

function addColumn() {
    const tab = document.querySelector("table");
    let td = document.createElement("td");
    td.textContent = "5";

    tab.appendChild(td);
    
}

colButton.addEventListener("click", addColumn);
rowButton.addEventListener("click", addRow);