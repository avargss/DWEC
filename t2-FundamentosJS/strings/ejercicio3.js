function nextChar(arr) {
    let resultado = ``;

    for (let i = 0; i < arr.length; i++) { // Se recorre todo el array con el for
        let char = arr[i];

        if (char == "z") {
            resultado += "a";
            // Se agrega una condición para indicar al programa que si se introduce la z, el siguiente caracter sería la a
        } else if (char == "Z") {
            resultado += "A";
            // Igual que arriba, solo que con mayusculas.
        } else if (char >= "a" && char <= "y" || char >= "A" && char <= "Y") {
            resultado += String.fromCharCode(char.charCodeAt(0) + 1);
            // Se utiliza el método charCodeAt(0) para obtener el código Unicode del carácter, luego se le suma 1 para obtener el siguiente carácter en el alfabeto con String.fromCharCode.
        } else {
            resultado += char;
        }

    }
    return resultado;
}

let arr = "ABC";
let resultado = nextChar(arr);
console.log(resultado);
