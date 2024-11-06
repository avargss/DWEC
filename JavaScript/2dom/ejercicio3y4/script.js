function replaceTabooWords() {

    let search = document.body.querySelectorAll("p");

    let tabooWords = ["Ass", "Sex", "Porn", "Balls"];

    // Uso el some para que si words.textContent tiene alguna palabra del array, la reemplaza por "Contenido bloqueado";
    search.forEach(words => {

        // Ejercicio 3
        if (tabooWords.some(taboo => words.textContent.includes(taboo))) {

            console.log("works");
            // Ejercicio 4
            words.textContent = "Contenido bloqueado";
        }
    });
}

replaceTabooWords();