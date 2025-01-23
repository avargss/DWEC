const selectContinent = (companies) => {

    for (continent of companies) {

        let opcion = document.createElement("option");
        opcion.textContent = continent.continent;

        document.querySelector("#continentes").appendChild(opcion);
    }

}

selectContinent(companies);

const showCountries = () => {

    const infoTabla = document.querySelector(".info"); // El . es porque es una clase
    let countries = [];
    infoTabla.innerHTML = ""; // Para vaciar el contenido

    companies.forEach(c => {
        c.countries.forEach(c2 => {
            countries.push(c2.name);
        })
    });

    countries.sort();

    countries.forEach(p => { // Aquí recorro el array para crear una fila y celda por cada país de la lista
        const filaPais = document.createElement("tr");
        filaPais.setAttribute("class", "listaPais");
        const celdaPais = document.createElement("td");

        celdaPais.innerHTML = p;
        filaPais.appendChild(celdaPais);

        infoTabla.appendChild(filaPais);
    });
}

showCountries();

const showCountriesPerContinent = (event) => {
    event.preventDefault();

    let selectedContinent = document.querySelector("#continentes").value;
    const infoTabla = document.querySelector(".info"); // El . es porque es una clase
    infoTabla.innerHTML = ""; // Para vaciar el contenido

    if (!selectedContinent || selectedContinent === "Selecciona un continente") {
        showCountries();
        return;
    }

    countries = companies.find(c => c.continent == selectedContinent);

    let countryArr = [];

    if (selectedContinent) {
        countries.countries.forEach(c => {
            countryArr.push(c.name);
        })
    };

    countryArr.sort();

    countryArr.forEach(p => {
        const filaPais = document.createElement("tr");
        filaPais.setAttribute("class", "listaPais");
        const celdaPais = document.createElement("td");

        celdaPais.innerHTML = p;
        filaPais.appendChild(celdaPais);

        infoTabla.appendChild(filaPais);
    })
};

const howManyCompanies = (event) => {
    event.preventDefault();

    let selectedContinent = document.querySelector("#continentes").value;
    const infoTabla = document.querySelector(".info"); // El . es porque es una clase
    infoTabla.innerHTML = ""; // Para vaciar el contenido

    if (!selectedContinent || selectedContinent === "Selecciona un continente") {
        showCountries();
        return;
    }

    countries = companies.find(c => c.continent == selectedContinent);

    let countryArr = [];

    if (selectedContinent) {
        countries.countries.forEach(c => {
            countryArr.push(c);
        })
    };

    countryArr.sort();

    countryArr.forEach(p => {
        const filaPais = document.createElement("tr");
        filaPais.setAttribute("class", "listaPais");
        const celdaPais = document.createElement("td");
        const celdaNum = document.createElement("td");

        celdaPais.innerHTML = p.name;
        celdaNum.innerHTML = p.companies.length;
        filaPais.appendChild(celdaPais);
        filaPais.appendChild(celdaNum);

        infoTabla.appendChild(filaPais);
    })
}

const companyNames = (event) => {
    event.preventDefault();

    let selectedContinent = document.querySelector("#continentes").value;
    const infoTabla = document.querySelector(".info"); // El . es porque es una clase
    infoTabla.innerHTML = ""; // Para vaciar el contenido

    if (!selectedContinent || selectedContinent === "Selecciona un continente") {
        showCountries();
        return;
    }

    countries = companies.find(c => c.continent == selectedContinent);

    let countryArr = [];

    if (selectedContinent) {
        countries.countries.forEach(c => {
            countryArr.push(c);
        })
    };

    countryArr.sort();

    countryArr.forEach(p => {
        const filaPais = document.createElement("tr");
        filaPais.setAttribute("class", "listaPais");

        const celdaPais = document.createElement("td");
        const celdaNum = document.createElement("td");
        const celdaNames = document.createElement("td");

        celdaPais.innerHTML = p.name;
        celdaNum.innerHTML = p.companies.length;

        celdaNames.innerHTML = p.companies.map(m => Object.keys(m));

        filaPais.appendChild(celdaPais);
        filaPais.appendChild(celdaNum);
        filaPais.appendChild(celdaNames);

        infoTabla.appendChild(filaPais);
    })
}

document.querySelector("#allCountries").addEventListener("click", showCountriesPerContinent);
document.querySelector("#numberOfCompanies").addEventListener("click", howManyCompanies);
document.querySelector("#companyNames").addEventListener("click", companyNames);