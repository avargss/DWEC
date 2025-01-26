const divProductos = document.querySelector(".productos");
const tbody = document.querySelector(".carrito");
const botonComprar = document.querySelector(".buttonComprar");

window.onload = () => {
    showProductos();
}

function showProductos() {
    products.forEach(p => {
        // Crear la tarjeta de Bootstrap
        const productoCard = document.createElement("div");
        productoCard.classList.add("card", "shadow-sm", "p-3");

        // Imagen del producto
        const imgProducto = document.createElement("img");
        imgProducto.src = `.${p.imagen}`;
        imgProducto.classList.add("card-img-top");
        imgProducto.alt = p.nombre;
        imgProducto.style.height = 200; // Altura fija para uniformidad
        imgProducto.style.objectFit = "cover";

        // Contenido de la tarjeta
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const nombreProducto = document.createElement("h5");
        nombreProducto.classList.add("card-title");
        nombreProducto.textContent = p.nombre;

        const precioProducto = document.createElement("p");
        precioProducto.classList.add("card-text", "fw-bold");
        precioProducto.textContent = `Precio: ${p.precio.toFixed(2)}€`;

        const fechaLanzamientoProducto = document.createElement("p");
        fechaLanzamientoProducto.classList.add("card-text", "text-muted");
        fechaLanzamientoProducto.textContent = `Lanzamiento: ${p.fechaLanzamiento.getFullYear()}`;

        // Stock bajo
        if (p.stock <= 5) {
            precioProducto.textContent += ` - Stock: ${p.stock}`;
            precioProducto.classList.add("text-danger");
        }

        // Input para la cantidad
        const cantidadProducto = document.createElement("input");
        cantidadProducto.type = "number";
        cantidadProducto.min = 1;
        cantidadProducto.max = p.stock;
        cantidadProducto.value = 1;
        cantidadProducto.classList.add("form-control", "my-2");

        cantidadProducto.addEventListener("change", () => {
            if (cantidadProducto.value > p.stock) {
                alert("No hay stock suficiente");
                cantidadProducto.value = 1;
            }
        });

        // Botón de compra
        const aniadirAlCarritoBoton = document.createElement("button");
        aniadirAlCarritoBoton.classList.add("btn", "btn-primary", "w-100");
        aniadirAlCarritoBoton.textContent = "Añadir al carrito";

        // Control de la tabla carrito
        aniadirAlCarritoBoton.addEventListener("click", () => {
            controlCarrito();

            const tbody = document.querySelector(".carrito");
            const tr = document.createElement("tr");

            const cantidadCarrito = document.createElement("td");
            const cantidadNumber = document.createElement("span");
            cantidadNumber.textContent = cantidadProducto.value;

            const disminuirCantidad = document.createElement("button");
            disminuirCantidad.textContent = "-";
            disminuirCantidad.addEventListener("click", () => {
                if (cantidadNumber.textContent > 1) {
                    cantidadNumber.textContent--;
                    cantidadProducto.value--;
                    actualizarTotal(tr, cantidadNumber.textContent, p.precio);
                }
            });

            const aumentarCantidad = document.createElement("button");
            aumentarCantidad.textContent = "+";
            aumentarCantidad.addEventListener("click", () => {
                if (cantidadNumber.textContent < p.stock) {
                    cantidadNumber.textContent++; // Se pone textcontent porque es un span
                    cantidadProducto.value++; // Se pone value porque es un input
                    actualizarTotal(tr, cantidadNumber.textContent, p.precio);
                }
            });

            cantidadCarrito.appendChild(disminuirCantidad);
            cantidadCarrito.appendChild(cantidadNumber);
            cantidadCarrito.appendChild(aumentarCantidad);

            const nombreCarrito = document.createElement("td");
            nombreCarrito.textContent = p.nombre;

            const precioCarrito = document.createElement("td");
            precioCarrito.textContent = p.precio.toFixed(2) + " €";

            const totalCarrito = document.createElement("td");
            totalCarrito.textContent = (cantidadProducto.value * p.precio).toFixed(2) + "€";


            const accion = document.createElement("td");
            const eliminarDelCarrito = document.createElement("button");


            eliminarDelCarrito.textContent = "Eliminar producto";
            eliminarDelCarrito.addEventListener("click", () => {
                tr.remove();
                controlCarrito();
            });

            accion.appendChild(eliminarDelCarrito);

            tr.appendChild(cantidadCarrito);
            tr.appendChild(nombreCarrito);
            tr.appendChild(precioCarrito);
            tr.appendChild(totalCarrito);
            tr.appendChild(accion);

            tbody.appendChild(tr);
            controlCarrito();
        });

        // Añadir elementos al cuerpo de la tarjeta
        cardBody.appendChild(nombreProducto);
        cardBody.appendChild(precioProducto);
        cardBody.appendChild(fechaLanzamientoProducto);
        cardBody.appendChild(cantidadProducto);
        cardBody.appendChild(aniadirAlCarritoBoton);

        // Montar la tarjeta
        productoCard.appendChild(imgProducto);
        productoCard.appendChild(cardBody);

        // Añadir la tarjeta al contenedor principal
        divProductos.appendChild(productoCard);
    });
}

function filtro() {

}

function controlCarrito() {

    if (tbody.children.length > 0) {
        botonComprar.style.display = "block";
    } else {
        botonComprar.style.display = "none";
    }
}

botonComprar.addEventListener("click", () => {
    alert("Se han comprado los productos seleccionados.");
    botonComprar.style.display = "none";
    tbody.innerHTML = "";
});

function actualizarTotal(tr, cantidadProducto, precioProducto) {
    const totalTd = tr.children[3];
    totalTd.textContent = (cantidadProducto * precioProducto).toFixed(2) + "€";
}

// Falta añadir filtro