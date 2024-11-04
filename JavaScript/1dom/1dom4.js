const boton = document.createElement("button");
const input = document.createElement("input");
const list = document.createElement("ol");

boton.textContent = "Insertar en la lista";

document.body.appendChild(input);
document.body.appendChild(boton);
document.body.appendChild(list);

let arr = [];

function addToList() {

    if (arr.includes(input.value)) {
        alert("Elemento duplicado.")
    } else {

        arr.push(input.value);

        const li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);

        input.value = "";
    }
}

boton.addEventListener("click", addToList);