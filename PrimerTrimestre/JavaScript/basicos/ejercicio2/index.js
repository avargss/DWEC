let num1 = parseInt(prompt("Introduce el primer número: "));
let num2 = parseInt(prompt("Introduce el segundo número: "));

let opcion = parseInt((`¿Qué quieres hacer?
    \n1. Suma\n2. Resta\n3. Multiplicación`));


switch (opcion) {
    case 1:
        console.log("Has elegido suma: ");
        let suma = num1 + num2;

        alert(`${num1} + ${num2} es ${suma}`);
        console.log(`${num1} + ${num2} es ${suma}`);

        break;

    case 2:
        console.log("Has elegido resta: ");
        let resta = num1 - num2;

        alert(`${num1} - ${num2} es ${resta}`);
        console.log(`${num1} - ${num2} es ${resta}`);

        break;

    case 3:
        console.log("Has elegido multiplicacion: ");
        let multi = num1 * num2;

        alert(`${num1} * ${num2} es ${multi}`);
        console.log(`${num1} * ${num2} es ${multi}`);

        break;

    default:
        alert(`Opción no válida.`);
        console.log(`Error`);
        

        break;
}