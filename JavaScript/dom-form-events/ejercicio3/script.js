// Formulario de provincias, municipios y localidad.

let comunidad;
let provincia;

const resetSelect = (destino, nombre) => {
    document.querySelector(destino).innerHTML = "";
    let opcion = document.createElement("option");
    opcion.textContent = "Seleccione una " + nombre;
    opcion.setAttribute("value", "")
    document.querySelector(destino).appendChild(opcion);

}

const seleccionarComunidad = (selectMap) => {
    // De esta forma puedo acceder a los datos de selectMap(el json)
    for (comunidad of selectMap) {
        // El bucle es para iterar en todas las comunidades del json
        let opcion = document.createElement("option");
        opcion.textContent = comunidad.label; // En este caso da Andalucía, Valencia...
        opcion.setAttribute("value", comunidad.code);
        document.querySelector("#comunidad").appendChild(opcion);

        /* Se crea el atributo option y se le añade el contenido y un atributo value, que será el código de la comunidad.
        Luego se selecciona todas las etiquetas con id comunidad y se le añaden los options con las
        comunidades del JSON. */
    }
}

const seleccionarProvincia = (event) => {
    /* Creo entender que esto lo que hace es:
    El evento es seleccionar una comunidad en el selectMap, por lo tanto se obtiene
    el codigo y en base a eso se hace el resto de la funcion */
    comunidad = selectMap.find(c => c.code == event.target.value);

    
    
    // Estos son los datos que se le pasan por parámetro a resetSelect para que setee los valores en "";
    resetSelect("#provincia", "provincia");
    resetSelect("#localidad", "localidad");

    // Si se selecciona una comunidad, coge su código y crea los option de provincias.
    if (event.target.value) {
        for (provincia of comunidad.provinces) {
            let opcion = document.createElement("option");
            opcion.textContent = provincia.label; // En este caso me da Almería, Málaga...
            opcion.setAttribute("value", provincia.code);
            document.querySelector("#provincia").appendChild(opcion);
        }
    }

}

const seleccionarLocalidad = (event) => {

    provincia = comunidad.provinces.find(p => p.code == event.target.value);

    if (event.target.value) {
        for (localidad of provincia.towns) {
            let opcion = document.createElement("option");
            opcion.textContent = localidad.label; // En este caso me da Almería, Málaga...
            opcion.setAttribute("value", localidad.code);
            document.querySelector("#localidad").appendChild(opcion);
        }
    }
}

// ¡¡¡¡¡¡¡¡¡¡¡¡IMPORTANTE!!!!!!!!!!!!
// Si no le paso por parámetro el JSON no funciona
seleccionarComunidad(selectMap);
document.querySelector("#comunidad").addEventListener("change", seleccionarProvincia);
document.querySelector("#provincia").addEventListener("change", seleccionarLocalidad);