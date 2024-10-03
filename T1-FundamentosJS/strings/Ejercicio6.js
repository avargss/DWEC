function protegerEmail(params) {
    let cifrado = params.split("@");

    let cifrado1 = cifrado[0];
    let cifrado2 = cifrado[1];

    let cifrado3 = cifrado1.slice(0, (cifrado1.length / 2)) + "...";

    return cifrado3 + "@" + cifrado2;
}

console.log(protegerEmail("alevargas@gmail.com"));
