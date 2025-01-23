let tabla = document.getElementById("info");

window.onload = function showData() {

    perfiles.forEach(element => {

        let tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.edad}</td>
        <td>${element.profesion}</td>
        <td>${element.ciudad}</td>
        `;

        tabla.appendChild(tr);

    });
}

/* function filterByName() {

    let perfilFiltrado;
    let searchName = document.getElementById("nameInput");

    perfilFiltrado = perfiles.filter((p) => p.nombre === searchName.value);

    tabla.innerHTML = "";

    perfilFiltrado.forEach(element => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.edad}</td>
        <td>${element.profesion}</td>
        <td>${element.ciudad}</td>
        `;

        tabla.appendChild(tr);
    });
}

function findByAge() {

    let foundEmployee;
    let searchAge = document.getElementById("ageInput");

    foundEmployee = perfiles.filter((p) => p.edad >= searchAge.value);
    
    tabla.innerHTML = "";

    foundEmployee.forEach(element => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.edad}</td>
        <td>${element.profesion}</td>
        <td>${element.ciudad}</td>
        `;

        tabla.appendChild(tr);
    });

}

function filterByProffesion() {

} */

function filterData() {

    // Si devuelve true, excluye este campo y filtra por los otros dos
    // Si devuelve false, intenta filtrar por un dato vacío y como todo
    // está relleno, dejaría la tabla vacía

    const searchName = document.getElementById("nameInput").value.toLowerCase();
    const searchAge = parseInt(document.getElementById("ageInput").value) || 0;
    const selectedProfession = document.getElementById("professionSelect").value;

    const perfilFiltrado = perfiles.filter(p => {
        const matchName = searchName ? p.nombre.toLowerCase().includes(searchName) : true;
        const matchAge = p.edad >= searchAge;
        const matchProfession = selectedProfession !== "Todos" ? p.profesion === selectedProfession : true;

        return matchName && matchAge && matchProfession;
    });

    tabla.innerHTML = "";

    perfilFiltrado.forEach(element => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${element.id}</td>
            <td>${element.nombre}</td>
            <td>${element.edad}</td>
            <td>${element.profesion}</td>
            <td>${element.ciudad}</td>
        `;
        tabla.appendChild(tr);
    });
}

document.querySelector("#filterButton").addEventListener("click", filterData);