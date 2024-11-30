const selectContinent = (companies) => {

    for (continent of companies) {

        let opcion = document.createElement("option");
        opcion.textContent = continent.continent;

        document.querySelector("#continentes").appendChild(opcion);
    }

}

selectContinent(companies);

const showCountries = (companies) => {

    const infoTabla = document.querySelector(".info"); // El . es porque es una clase
    let countries = [];
    infoTabla.innerHTML = ""; // Para vaciar el contenido

    companies.forEach(c => {
        c.countries.forEach(c2=> {
            countries.push(c2.name);
        })
    });
    
    countries.sort();

    countries.forEach(p => { // Aquí recorro el array para crear una fila y celda por cada país de la lista
        const filaPais = document.createElement("tr");
        const celdaPais = document.createElement("td");

        celdaPais.innerHTML = p;
        filaPais.appendChild(celdaPais);

        infoTabla.appendChild(filaPais);
    });
}

showCountries(companies);