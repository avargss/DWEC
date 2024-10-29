function swapcase(params) {
    let cambio = "";

    params.split("").forEach(e => {
        if (e === e.toUpperCase()) {
            cambio += e.toLowerCase();
        } else {
            cambio += e.toUpperCase();
        }
    });

    return cambio;
}

console.log(swapcase("SuPeRmAn"));