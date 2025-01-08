import { crearEmpresa, obtenerEmpresas, eliminarEmpresa } from './empresaController.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-alta-empresa');
    const tablaEmpresas = document.getElementById('tabla-empresas').querySelector('tbody');
    const submitButton = form.querySelector('button[type="submit"]');

    let editarEmpresas = null;

    const renderTablaEmpresas = () => {
        const empresas = obtenerEmpresas();
        tablaEmpresas.innerHTML = '';
        empresas.forEach(empresa => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${empresa.id}</td>
                <td>${empresa.nombre}</td>
                <td>${empresa.direccion}</td>
                <td>
                    <button class="editar" data-id="${empresa.id}">Editar</button>
                    <button class="eliminar" data-id="${empresa.id}">Eliminar</button>
                </td>
            `;
            tablaEmpresas.appendChild(fila);
        });
    };

    tablaEmpresas.addEventListener('click', (emp) => {
        const empresaId = emp.target.dataset.id;

        if (emp.target.classList.contains('editar')) {
            const empresas = obtenerEmpresas();
            const empresa = empresas.find(emp => emp.id == empresaId);

            if (empresa) {
                form.nombre.value = empresa.nombre;
                form.direccion.value = empresa.direccion;
                editarEmpresas = empresa;
                submitButton.textContent = 'Guardar Cambios';
            }
        }

        if (emp.target.classList.contains('eliminar')) {
            eliminarEmpresa(empresaId);
            renderTablaEmpresas();
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = form.nombre.value;
        const direccion = form.direccion.value;

        if (editarEmpresas) {
            editarEmpresas.nombre = nombre;
            editarEmpresas.direccion = direccion;
            editarEmpresas = null;
            submitButton.textContent = 'Crear Empresa';
        } else {
            crearEmpresa(nombre, direccion);
        }

        renderTablaEmpresas();
        form.reset();
    });

    renderTablaEmpresas();
});
