// Esta función sirve para acceder al archivo JSON y poder cargar sus datos.
function datosJSON() {
    return fetch("libros.json")
        .then(Response => Response.json()) // Convierte la respuesta generada en un json
        .then(data => data.libros) // Extrae la propiedad libros
        .catch(error => console.error(`Error al cargar el archivo json`, error));
} 

/* const datosJSON = [
    {
        "title": "Keeper of the Celestial Flame of Abernethy",
        "genre": "Fantasy",
        "author": "Gloryhammer",
        "pages": 72,
        "published": "2016",
        "read": true,
        "website": ""
    },
    {
        "title": "Holy Flamming Hammer of Unholy Cosmic Frost",
        "genre": "Adventure",
        "author": "Gloryhammer",
        "pages": 350,
        "published": "2005",
        "read": false,
        "website": ""
    },
    {
        "title": "Hootsforce",
        "genre": "Thriller",
        "author": "Angus McFife",
        "pages": 120,
        "published": "2024",
        "read": true,
        "website": ""
    },
    {
        "title": "Into the Terrorvortex of Kor-Virliath",
        "genre": "Fantasy",
        "author": "Gloryhammer",
        "pages": 5000,
        "published": "2022",
        "read": true,
        "website": ""
    },
    {
        "title": "Legendary Enchanted Jetpack",
        "genre": "Thriller",
        "author": "Angus McFife",
        "pages": 780,
        "published": "2003",
        "read": false,
        "website": ""
    }
] */

// Mostrar los géneros de los libros
function mostrarGeneros(libros) {
    const generos = [...new Set(libros.map(libro => libro.genre))]; // Filtra géneros para que no se repitan al imprimirlos

    const divInfo = document.getElementById("informacion");
    divInfo.innerHTML = ""; // Limpia el contenido que puede haber escrito.

    const lista = document.createElement("ul");
    generos.forEach(genero => {
        const item = document.createElement("li");
        item.textContent = genero;
        lista.appendChild(item);
    });

    divInfo.appendChild(lista); // Finalmente muestra la lista de géneros.
}

// Filtrar los libros con más de 300 páginas
function masDe300(libros) {
    const nombres = libros
        .filter(libro => libro.pages > 300)
        .map(libro => libro.title);

    const divInfo = document.getElementById("informacion");
    divInfo.innerHTML = ""; // Limpia el contenido que puede haber escrito.

    const lista = document.createElement("ul");
    nombres.forEach(nombre => {
        const item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });

    divInfo.appendChild(lista); //Muestra la lista de libros filtrados
}

// Mostrar los libros que llevan mas de 2 años publicados

function masDe2Anios(libros) {
    const hoy = new Date(); // Inicializo una constante tipo Date para obtener la fecha de hoy

    const viejos = libros
        .filter(libro => { // Filtra los libros para mostrar los que tienen más de 2 años de antiguedad
            const fechaPublicacion = new Date(libro.published);
            const diffAnios = hoy.getFullYear() - fechaPublicacion.getFullYear();
            return diffAnios > 2;
        })
        .map(libro => libro.title);

    const divInfo = document.getElementById("informacion");
    divInfo.innerHTML = ""; // Limpia el contenido que puede haber escrito.

    const lista = document.createElement("ul");
    viejos.forEach(viejo => {
        const item = document.createElement("li");
        item.textContent = viejo;
        lista.appendChild(item);
    });

    divInfo.appendChild(lista);
}

// Mostrar los autores y cuantos libros han escrito

function autoresLibros(libros) {

    const autores = libros.reduce((contador, libro) => {

        // Si el autor está en el objeto contador, incrementa el número de libros.
        if (contador[libro.author]) {
            contador[libro.author]++;
        } else {
            // Si el autor no está, inicializa el valor del objeto en 1
            contador[libro.author] = 1;
        }
        return contador;
    }, {}) // El objeto inicial se deja vacío

    const divInfo = document.getElementById("informacion");
    divInfo.innerHTML = "";

    const lista = document.createElement("ul");
    for (const numLibros in autores) {
        const item = document.createElement("li");
        item.textContent = `${numLibros}: ${autores[numLibros]} libros`;
        lista.appendChild(item);
    }

    divInfo.appendChild(lista);
}

// Ordenados por fecha (asc)

function leidosPorFechas(libros) {

    const leidos = libros
        .filter(libro => libro.read) // Filtra los libros leídos 
        .sort((a, b) => parseInt(a.published) - parseInt(b.published)) // Ordena por fechas de forma ascendente.

    const divInfo = document.getElementById("informacion");
    divInfo.innerHTML = ""; // Limpia el contenido que puede haber escrito.

    const lista = document.createElement("ul");
    leidos.forEach(libro => {
        const item = document.createElement("li");
        item.textContent = `${libro.title} - ${libro.published}`
        lista.appendChild(item);
    })

    divInfo.appendChild(lista);

}

// Eventos

/* De esta forma hago el ejercicio llamando a la función que accede al JSON mediante un fetch.
 *  Si lo que quiero es acceder al propio JSON que tengo dentro del archivo js, tengo que llamar directamente al método y pasar el JSON por parámetro. 
 */

/* Si no uso el fetch para el JSON mejor pq a la señorita no le gusta que se usen
métodos convencionales y prefiere que nos compliquemos la vida */

document.getElementById("generos").addEventListener("click", () => {
    datosJSON().then(libros => mostrarGeneros(libros))
    /* mostrarGeneros(datosJSON) */
});

document.getElementById("masDe300Paginas").addEventListener("click", () => {
    datosJSON().then(libros => masDe300(libros))
    /* masDe300(datosJSON); */
});

document.getElementById("masDe2Anios").addEventListener("click", () => {
    datosJSON().then(libros => masDe2Anios(libros))
    /* masDe2Anios(datosJSON) */
});

document.getElementById("autoresLibros").addEventListener("click", () => {
    datosJSON().then(libros => autoresLibros(libros))
    /* autoresLibros(datosJSON) */
});

document.getElementById("leidosPorFechas").addEventListener("click", () => {
    datosJSON().then(libros => leidosPorFechas(libros))
    /* leidosPorFechas(datosJSON) */
});