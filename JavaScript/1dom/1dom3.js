function countHeading() {

    for (let i = 1; i <= 6; i++) {
        let elem = document.createElement(`h${i}`);
        elem.textContent = `Heading ${i}`;
        document.body.appendChild(elem);
    }
}

countHeading();