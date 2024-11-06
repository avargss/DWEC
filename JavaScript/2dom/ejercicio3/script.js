function replaceTabooWords() {

    let search = document.body.querySelectorAll("p");

    let tabooWords = ["Ass", "Sex", "Porn", "Balls"];

    // Uso el some para que si words.textContent tiene alguna palabra del array, la reemplaza por "Contenido bloqueado";
    search.forEach(words => {

        if (tabooWords.some(taboo => words.textContent.includes(taboo))) {

            console.log("works");
            words.textContent = "Contenido bloqueado";
        }
    });
}

replaceTabooWords();