// Pide 2 números con un prompt y súmalos. Muestralos por consola.

let primerNum = prompt("Introduce el primer número: ");
let segundoNum = prompt("Introduce el segundo número: ");
let total = primerNum + segundoNum;

console.log(+primerNum + +segundoNum);

// Pide 2 números con un prompt y súmalos con alertas.

primerNum = parseInt(prompt("Introduce el primer número: "));
segundoNum = parseInt(prompt("Introduce el segundo número: "));

alert(primerNum + segundoNum);

// Pide 2 números con un prompt y súmalos con en el body.

primerNum = parseInt(prompt("Introduce el primer número: "));
segundoNum = parseInt(prompt("Introduce el segundo número: "));

let result = primerNum + segundoNum;

document.querySelector(`body`).innerHTML = `La suma es ${result}`;

// Pide 2 números con un prompt y súmalos con en un párrafo.

primerNum = parseInt(prompt("Introduce el primer número: "));
segundoNum = parseInt(prompt("Introduce el segundo número: "));

result = primerNum + segundoNum;

document.querySelector(`body`).innerHTML = `
<p>
        La suma es ${result}     
    </p>`;