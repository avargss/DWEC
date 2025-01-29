window.onload = function () {
    const listaTareas = [
        {
            nombre: "Prueba", fechaVencimiento: `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString()}-${new Date().getDate().toString()}`,
            prioridad: "baja", completado: "No", fechaCreacion: new Date().toLocaleDateString(),
            horaCreacion: new Date().toLocaleTimeString(),
        },
        {
            nombre: "Prueba2", fechaVencimiento: `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString()}-${new Date().getDate().toString()}`,
            prioridad: "media", completado: "No", fechaCreacion: new Date().toLocaleDateString(),
            horaCreacion: new Date().toLocaleTimeString(),
        },
        {
            nombre: "Prueba3", fechaVencimiento: `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString()}-${new Date().getDate().toString()}`,
            prioridad: "alta", completado: "No", fechaCreacion: new Date().toLocaleDateString(),
            horaCreacion: new Date().toLocaleTimeString(),
        }
    ];

    const tabla = document.querySelector("#tbody");
    const nombre = document.querySelector("#nombreTarea");
    const vencimiento = document.querySelector("#vencimientoTarea");
    const prioridad = document.querySelector("#prioridad");

    const btnAgregar = document.querySelector("#updateBtn");
    const btnEditar = document.querySelector("#editBtn");
    const btnCancelar = document.querySelector("#cancelBtn");
    const btnVerTodas = document.querySelector("#verTodasBtn");

    let indiceSeleccionado = null;

    function cargarTabla() {
        tabla.innerHTML = "";
        listaTareas.sort((a, b) => {
            const prioridades = { alta: 1, media: 2, baja: 3 };
            return prioridades[a.prioridad] - prioridades[b.prioridad];
        });

        listaTareas.forEach((tarea, i) => {
            if (tarea.completado === "Si") return;

            const fila = tabla.insertRow();
            fila.dataset.index = i;

            fila.style.backgroundColor = tarea.prioridad === "alta" ? "red" :
                tarea.prioridad === "media" ? "yellow" : "green";

            fila.insertCell().textContent = tarea.nombre;
            fila.insertCell().textContent = tarea.fechaVencimiento;
            fila.insertCell().textContent = tarea.prioridad;

            const selectPrioridad = document.createElement("select");
            selectPrioridad.innerHTML = ` 
                <option value="No" ${tarea.completado === "No" ? "selected" : ""}>No</option>
                <option value="Si" ${tarea.completado === "Si" ? "selected" : ""}>Sí</option>
            `;
            selectPrioridad.addEventListener("change", () => {
                listaTareas[i].completado = selectPrioridad.value;
                if (listaTareas[i].completado === "Si") {
                    cargarTabla();
                }
            });
            fila.insertCell().appendChild(selectPrioridad);

            fila.insertCell().textContent = tarea.fechaCreacion;
            fila.insertCell().textContent = tarea.horaCreacion;

            const acciones = fila.insertCell();
            const btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.addEventListener("click", () => editarTarea(i));

            const btnBorrar = document.createElement("button");
            btnBorrar.textContent = "Borrar";
            btnBorrar.addEventListener("click", () => borrarTarea(i));

            acciones.appendChild(btnEditar);
            acciones.appendChild(btnBorrar);

            fila.addEventListener("click", function () {
                document.querySelectorAll("tr").forEach(r => r.classList.remove("seleccionado"));
                fila.classList.add("seleccionado");
            });
        });
    }

    btnVerTodas.addEventListener("click", function () {
        console.log(listaTareas);
    });

    function validarFecha(fecha) {
        return new Date(fecha) >= new Date().setHours(0, 0, 0, 0);
    }

    function editarTarea(i) {
        indiceSeleccionado = i;
        const tarea = listaTareas[i];

        nombre.value = tarea.nombre;
        vencimiento.value = tarea.fechaVencimiento;
        prioridad.value = tarea.prioridad;

        btnAgregar.classList.add("d-none");
        btnEditar.classList.remove("d-none");
        btnCancelar.classList.remove("d-none");
    }

    function borrarTarea(i) {
        if (confirm("¿Eliminar tarea?")) {
            listaTareas.splice(i, 1);
            cargarTabla();
            resetearFormulario();
        }
    }

    function resetearFormulario() {
        document.querySelector("#tareaForm").reset();
        indiceSeleccionado = null;
    }

    btnAgregar.addEventListener("click", function () {
        if (!nombre.value || !vencimiento.value || !prioridad.value) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        if (!validarFecha(vencimiento.value)) {
            alert("La fecha de vencimiento no puede ser anterior a hoy.");
            return;
        }

        listaTareas.push({
            nombre: nombre.value,
            fechaVencimiento: vencimiento.value,
            prioridad: prioridad.value,
            completado: "No",
            fechaCreacion: new Date().toLocaleDateString(),
            horaCreacion: new Date().toLocaleTimeString(),
        });

        resetearFormulario();
        cargarTabla();
    });

    btnEditar.addEventListener("click", function () {
        if (indiceSeleccionado !== null) {
            if (!validarFecha(vencimiento.value)) {
                alert("La fecha de vencimiento no puede ser anterior a hoy.");
                return;
            }

            listaTareas[indiceSeleccionado].nombre = nombre.value;
            listaTareas[indiceSeleccionado].fechaVencimiento = vencimiento.value;
            listaTareas[indiceSeleccionado].prioridad = prioridad.value;
            resetearFormulario();
            cargarTabla();
        }
    });

    btnCancelar.addEventListener("click", resetearFormulario);

    cargarTabla();
};
