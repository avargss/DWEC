window.onload = () => {
    selectContinent(companies);
    showCountries();

}

const selectContinent = (companies) => {

    for (continent of companies) {

        let option = document.createElement("option");
        option.textContent = continent.continent;

        document.querySelector("#continentes").appendChild(option)
    }
}

const showCountries = () => {

    const infoTabla = document.querySelector(".info"); // El . es porque es una clase, si es id es #
    let countries = [];
    infoTabla.innerHTML = ""; // Para vaciar el contenido

    companies.forEach(c => {
        c.countries.forEach(c2 => {
            countries.push(c2.name);
        })
    });

    countries.sort();

    countries.forEach(p => {
        const fila = document.createElement("tr");
        fila.setAttribute("class", "listaPais");
        const celda = document.createElement("td");

        celda.innerHTML = p;
        fila.appendChild(celda);
        infoTabla.appendChild(fila);
    });
}

const showCountriesPerContinent = (event) => {
    event.preventDefault();

    let selectedContinent = document.querySelector("#continentes").value;
    const infoTabla = document.querySelector(".info");
    infoTabla.innerHTML = "";

    if (!selectedContinent || selectedContinent === "Selecciona un continente") {
        showCountries();
        return;
    }

    countries = companies.find(c => c.continent === selectedContinent);

    let countryArr = [];

    if (selectedContinent) {
        countries.countries.forEach(c => {
            countryArr.push(c.name);
        })
    }

    countryArr.sort();

    countryArr.forEach(p => {
        const filaPais = document.createElement("tr");
        filaPais.setAttribute("class", "listaPais");
        const celdaPais = document.createElement("td");

        celdaPais.innerHTML = p;
        filaPais.appendChild(celdaPais);

        infoTabla.appendChild(filaPais);
    })
}

