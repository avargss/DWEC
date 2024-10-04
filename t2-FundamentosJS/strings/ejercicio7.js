function parametrizar(params) {
    /*let cambio = params.replaceAll(" ", "-");
    let minusc = cambio.toLocaleLowerCase();
    return minusc;*/

    return params
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '') //Usando expresiones regulares
        .replace(/\s+/g, '-');

}

console.log(parametrizar("Robin Singh from USA"));