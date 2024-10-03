function parametrizar(params) {
    let cambio = params.replaceAll(" ", "-");
    let minusc = cambio.toLocaleLowerCase();
    return minusc;
}

console.log(parametrizar("Robin Singh from USA"));