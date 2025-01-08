// Nuria trato siempre de poner los nombres en inglés para acostumbrarme de cara a lo laboral.
// Si tienes dudas de por qué hay algunos en español y otros en inglés es porque puede que se me haya colado alguno en castellano
// Te lo digo más que nada para que no pienses que me he copiado, he usado constantemente mis apuntes y algo de bootstrap

function showCountries() {
    const countriesSelect = document.getElementById("selectCountry");

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countriesSelect.appendChild(option);
    });
}

function showGenres() {
    const generoContenedor = document.getElementById("inputGenders");

    genders.sort();

    genders.forEach(gender => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "genres";
        checkbox.value = gender;
        checkbox.id = `genre-${gender}`;

        const label = document.createElement("label");
        label.htmlFor = `genre-${gender}`;
        label.textContent = gender;

        generoContenedor.appendChild(checkbox);
        generoContenedor.appendChild(label);
    });
}

function showYears() {
    const anioActual = new Date().getFullYear();
    const selectAnio1 = document.getElementById("year1");
    const selectAnio2 = document.getElementById("year2");

    for (let year = 2000; year <= anioActual; year++) {
        const anio1 = document.createElement("option");
        anio1.value = year;
        anio1.textContent = year;
        selectAnio1.appendChild(anio1);

        const anio2 = document.createElement("option");
        anio2.value = year;
        anio2.textContent = year;
        selectAnio2.appendChild(anio2);
    }
}

window.onload = function () {
    showCountries();
    showGenres();
    showYears();
}

document.getElementById("allGenders").addEventListener("change", function () {
    const isChecked = this.checked;
    const genderCheckboxes = document.querySelectorAll("#inputGenders input[type=checkbox]:not(#allGenders)");
    genderCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
});

document.querySelectorAll("#inputGenders input[type=checkbox]:not(#allGenders)").forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        const allGenders = document.getElementById("allGenders");
        if (!this.checked) {
            allGenders.checked = false;

        } else {
            const genderCheckboxes = document.querySelectorAll("#inputGenders input[type=checkbox]:not(#allGenders)");
            const allChecked = Array.from(genderCheckboxes).every(c => c.checked);
            allGenders.checked = allChecked;
        }
    });
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    filterMovies();
});

function filterMovies() {
    const name = document.getElementById("name").value.toLowerCase();
    const titleChecked = document.getElementById("titleCheck").checked;
    const directorChecked = document.getElementById("directorCheck").checked;
    const actorChecked = document.getElementById("actorCheck").checked;
    const selectedCountry = document.getElementById("selectCountry").value;
    const selectedYear1 = document.getElementById("year1").value;
    const selectedYear2 = document.getElementById("year2").value;
    const allGendersChecked = document.getElementById("allGenders").checked;
    const selectedGenres = Array.from(document.querySelectorAll("input[name='genres']:checked")).map(input => input.value);

    const filteredMovies = pelis.filter(movie => {
        const matchesText = movie.Title.toLowerCase().includes(name) ||
            movie.Director.toLowerCase().includes(name) ||
            movie.Actors.toLowerCase().includes(name);

        const matchesTitle = titleChecked ? movie.Title.toLowerCase().includes(name) : true;
        const matchesDirector = directorChecked ? movie.Director.toLowerCase().includes(name) : true;
        const matchesActor = actorChecked ? movie.Actors.toLowerCase().includes(name) : true;

        const matchesCountry = selectedCountry === "All countries" || movie.Country.includes(selectedCountry);
        const matchesYear = (selectedYear1 === "- - - -" || movie.Year >= selectedYear1) &&
            (selectedYear2 === "- - - -" || movie.Year <= selectedYear2);
        const matchesGenres = allGendersChecked || selectedGenres.some(genre => movie.Genre.toLowerCase().includes(genre.toLowerCase()));

        return matchesText && matchesTitle && matchesDirector && matchesActor && matchesCountry && matchesYear && matchesGenres;
    });

    displayMovies(filteredMovies);
}

function displayMovies() {
    const infoPelis = document.getElementById("infoPelis");
    infoPelis.innerHTML = "";

    const name = document.getElementById("name").value.toLowerCase();
    const titleChecked = document.getElementById("titleCheck").checked;
    const directorChecked = document.getElementById("directorCheck").checked;
    const actorChecked = document.getElementById("actorCheck").checked;
    const selectedCountry = document.getElementById("selectCountry").value;
    const selectedYear1 = document.getElementById("year1").value;
    const selectedYear2 = document.getElementById("year2").value;
    const allGendersChecked = document.getElementById("allGenders").checked;
    const selectedGenres = Array.from(document.querySelectorAll("input[name='genres']:checked")).map(input => input.value);

    const filteredMovies = pelis.filter(p => {
        const matchesText = p.Title.toLowerCase().includes(name) ||
            p.Director.toLowerCase().includes(name) ||
            p.Actors.toLowerCase().includes(name);

        const matchesTitle = titleChecked ? p.Title.toLowerCase().includes(name) : true;
        const matchesDirector = directorChecked ? p.Director.toLowerCase().includes(name) : true;
        const matchesActor = actorChecked ? p.Actors.toLowerCase().includes(name) : true;

        const matchesCountry = selectedCountry === "All countries" || p.Country.includes(selectedCountry);
        const matchesYear = (selectedYear1 === "- - - -" || p.Year >= selectedYear1) &&
            (selectedYear2 === "- - - -" || p.Year <= selectedYear2);
        const matchesGenres = allGendersChecked || selectedGenres.some(genre => p.Genre.toLowerCase().includes(genre.toLowerCase()));

        return matchesText && matchesTitle && matchesDirector && matchesActor && matchesCountry && matchesYear && matchesGenres;
    });

    if (filteredMovies.length > 0) {
        let movieCards = "";

        filteredMovies.forEach(movie => {
            const movieCard = `
                <div class="card" style="width: 18rem;">
                    <h5 class="card-title">${movie.Title}</h5>
                    <div class="card-body">
                    <img src="${movie.Images[0]}" class="card-img-top" alt="${movie.Title}" style="width: 100%;">
                        <button class="details-button btn btn-primary">Details</button>
                        <p>Los datos de la pelicula se muestran al final de la web.</p>
                        <p class="card-text">Genres: ${movie.Genre}</p>
                    </div>
                </div>
            `;
            movieCards += movieCard;
        });

        infoPelis.innerHTML = movieCards;

        const buttons = document.querySelectorAll(".btn-primary");
        buttons.forEach((button, index) => {
            button.addEventListener("click", function () {
                showDetails(button, filteredMovies[index])
            })
        })

    } else {
        const noHayPeli = document.createElement("p");
        noHayPeli.textContent = "No hay películas.";
        infoPelis.appendChild(noHayPeli);
    }
}

function showDetails(button, peli) {
    button.disabled = true;
    const tarjetaPelicula = button.closest(".card");
    tarjetaPelicula.classList.add("highlight-card");

    const resetButton = document.createElement("button");
    resetButton.textContent = "Resetear color";
    resetButton.classList.add("btn", "btn-secondary", "reset-button");

    const closeButton = document.createElement("button");
    closeButton.textContent = "Cerrar";
    closeButton.classList.add("btn", "btn-danger", "close-button");

    const cardBody = tarjetaPelicula.querySelector(".card-body");
    cardBody.prepend(resetButton);
    cardBody.prepend(closeButton);

    // Cerrar la información y habilitar el botón Details
    closeButton.addEventListener("click", function () {
        closeDetails(tarjetaPelicula, button);
    });

    resetButton.addEventListener("click", function () {
        resetCard(tarjetaPelicula, resetButton);
    });

    
    const peliDetalles = `
        <pre id="peliDetalles">${JSON.stringify(peli, null, 2)}</pre>
    `;

    const detallesDiv = document.createElement("div");
    detallesDiv.innerHTML = peliDetalles;

    tarjetaPelicula.appendChild(detallesDiv);

    // Aquí va la función para actualizar el IMDB Rating
    const imdbRatingDiv = document.createElement("div");
    imdbRatingDiv.classList.add("imdb-rating");

    const imdbRatingTitle = document.createElement("h5");
    imdbRatingTitle.textContent = "IMDB Rating";
    imdbRatingDiv.appendChild(imdbRatingTitle);

    const imdbInput = document.createElement("input");
    imdbInput.type = "number";
    imdbInput.min = 0;
    imdbInput.max = 10;
    imdbInput.step = "0.1"; // Esto sirve para que admita un solo decimal
    imdbInput.value = peli.imdbRating || 0;
    imdbInput.classList.add("form-control");
    imdbRatingDiv.appendChild(imdbInput);

    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.classList.add("btn", "btn-primary");
    imdbRatingDiv.appendChild(updateButton);

    cardBody.appendChild(imdbRatingDiv);

    // Este evento sirve para que me actualice el rating en la web pero no en el JSON
    updateButton.addEventListener("click", function () {
        const newRating = parseFloat(imdbInput.value);

        peli.imdbRating = newRating;

        const peliDetallesElemento = document.getElementById("peliDetalles");
        peliDetallesElemento.innerHTML = JSON.stringify(peli, null, 2);
    });
}

function resetCard(tarjetaPelicula, resetButton) {
    tarjetaPelicula.classList.remove("highlight-card");
    resetButton.disabled = true;
    resetButton.remove();
}

function closeDetails(tarjetaPelicula) {
    const detallesDiv = tarjetaPelicula.querySelector("#peliDetalles");
    const imdbRatingDiv = tarjetaPelicula.querySelector(".imdb-rating");

    if (detallesDiv) detallesDiv.remove();
    if (imdbRatingDiv) imdbRatingDiv.remove();

    const detailsButton = tarjetaPelicula.querySelector(".details-button");
    if (detailsButton) detailsButton.disabled = false;

    const resetButton = tarjetaPelicula.querySelector(".reset-button");
    const closeButton = tarjetaPelicula.querySelector(".close-button");
    if (resetButton) resetButton.remove();
    if (closeButton) closeButton.remove();

    tarjetaPelicula.classList.remove("highlight-card");
}