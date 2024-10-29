let csvToArray = (csv, separador = "/") => {
    let filas = csv.trim().split("\n");
    let cabecera = filas[0].split(separador);

    for (const i of cabecera) {
        console.log(i);
        document.querySelector("#cabecera").innerHTML = csv
    }

    for (const i of linea1) {
        // console.log(i);
        document.querySelector("#linea1").innerHTML = linea1
    }

    for (const i of linea2) {
        //console.log(i);
        document.querySelector("#linea2").innerHTML = linea2
    }

    for (const i of linea3) {
        //console.log(i);
        document.querySelector("#linea3").innerHTML = linea3
    }

    for (const i of linea4) {
        //console.log(i);
        document.querySelector("#linea4").innerHTML = linea4
    }
}

csvToArray(csv);
csvToArray(linea1)