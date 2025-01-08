import Empresa from './Empresa.js';

let nuevoID = 2;
const empresas = [{ "id": "1", "nombre": "google", "direccion": "sv" }];

export function crearEmpresa(nombre, direccion) {
    const id = nuevoID++;
    const nuevaEmpresa = new Empresa(id, nombre, direccion);
    empresas.push(nuevaEmpresa);
    return nuevaEmpresa;
}

export function obtenerEmpresas() {
    return empresas;
}

export function eliminarEmpresa(id) {
    const index = empresas.findIndex(empresa => empresa.id == id);
    if (index !== -1) {
        empresas.splice(index, 1);
    }
}
