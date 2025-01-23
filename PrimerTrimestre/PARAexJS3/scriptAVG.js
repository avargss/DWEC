const divProductos = document.getElementById("productos");
const contDivProductos = document.createElement("div");

function showProducts() {
    products.forEach(values => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        const img = document.createElement("img");
        img.src = `.${values.imagen}`;
        img.width = 200;

        const name = document.createElement("h5");
        name.textContent = values.nombre;

        const price = document.createElement("p");
        price.textContent = `Precio: ${values.precio.toFixed(2)}€`;

        if (values.stock < 4) {
            price.textContent = `Precio: ${values.precio.toFixed(2)}€ - Stock: ${values.stock}`;
        }

        const cantidad = document.createElement("input");
        cantidad.type = "number";
        cantidad.min = 1;
        cantidad.max = values.stock;
        cantidad.value = 1;

        cantidad.addEventListener("change", () => {
            if (cantidad.value > values.stock) {
                alert("No hay stock suficiente");
                cantidad.value = 1;
            }
        });

        const botonCompra = document.createElement("button");
        botonCompra.textContent = "Comprar";

        botonCompra.addEventListener("click", () => {
            const tbodyTabla = document.getElementById("tbody");
            const row = document.createElement("tr");

            const cantidadTd = document.createElement("td");
            const cantidadProducto = document.createElement("span");
            cantidadProducto.textContent = cantidad.value;

            const aumentarBoton = document.createElement("button");
            aumentarBoton.textContent = "+";
            aumentarBoton.addEventListener("click", () => {
                if (cantidadProducto.textContent < values.stock) {
                    cantidad.value++;
                    cantidadProducto.textContent++;
                    actualizarTotal(row, cantidadProducto.textContent, values.precio);
                }
            });

            const eliminarBoton = document.createElement("button");
            eliminarBoton.textContent = "-";
            eliminarBoton.addEventListener("click", () => {
                if (cantidadProducto.textContent > 1) {
                    cantidad.value--;
                    cantidadProducto.textContent--;
                    actualizarTotal(row, cantidadProducto.textContent, values.precio);
                }
            });

            cantidadTd.appendChild(eliminarBoton);
            cantidadTd.appendChild(cantidadProducto);
            cantidadTd.appendChild(aumentarBoton);

            const nameTd = document.createElement("td");
            nameTd.textContent = values.nombre;

            const priceTd = document.createElement("td");
            priceTd.textContent = values.precio.toFixed(2) + " €";

            const totalTd = document.createElement("td");
            totalTd.textContent = (cantidad.value * values.precio).toFixed(2) + " €";

            const eliminarTd = document.createElement("td");
            const deleteBtn = document.createElement("button");
            
            deleteBtn.textContent = "Eliminar";
            deleteBtn.addEventListener("click", () => {
                row.remove();
            });
            eliminarTd.appendChild(deleteBtn);

            row.appendChild(cantidadTd);
            row.appendChild(nameTd);
            row.appendChild(priceTd);
            row.appendChild(totalTd);
            row.appendChild(eliminarTd);

            tbodyTabla.appendChild(row);
        });

        productoDiv.appendChild(img);
        productoDiv.appendChild(name);
        productoDiv.appendChild(price);
        productoDiv.appendChild(cantidad);
        productoDiv.appendChild(botonCompra);

        contDivProductos.appendChild(productoDiv);
    });

    divProductos.appendChild(contDivProductos);
}

function actualizarTotal(fila, cantidad, precio) {
    const totalTd = fila.children[3];
    totalTd.textContent = (cantidad * precio).toFixed(2) + " €";
}

window.onload = () => {
    showProducts();
};
