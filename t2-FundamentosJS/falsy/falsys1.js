if (false) {
    // Not reachable
    console.log("Hola mundo");

}

if (null) {
    // Not reachable
    console.log("Hola mundo");
}

if (undefined) {
    // Not reachable
    console.log("Hola mundo");
}

if (0) {
    // Not reachable
    console.log("Hola mundo");
}

if (-0) {
    // Not reachable
    console.log("Hola mundo");
}

if (0n) {
    // Not reachable
    console.log("Hola mundo");
}

if (NaN) {
    // Not reachable
    console.log("Hola mundo");
}

if ("") {
    // Not reachable
    console.log("Hola mundo");
}

salida = test || `` || NaN || null || undefined

if (salida) {
    console.log("No va");
    
} else {
    console.log();
    
}