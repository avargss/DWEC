let string1 = "Hola";
let string2 = "Mundo";

// Concatenación tradicional
console.log("Concatenación tradicional");

console.log("\'" + string1 + "\' and \'" + string2 + "\'");
console.log("\"" + string1 + "\' and \'" + string2 + "\"");
console.log("\`" + string1 + "\' and \'" + string2 + "\`");


// Usando String Literals
console.log("\nString literals");

console.log(`\'${string1} and ${string2}\'`);
console.log(`\"${string1} and ${string2}\"`);
console.log(`\`${string1} and ${string2}\``);
