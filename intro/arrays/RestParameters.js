function createPerson(nameA, surnameA, ...cities) {
    const person = {}
    person.name = nameA;
    person.surname = surnameB;
    person.locations = cities;
    cities.forEach(c => console.log(c));

    /// cities.forEach (e => console.log(e));

}

createPerson(`Rodolfo`, `Dorronsoro`, `Málaga`, `Sevilla`, `Madrid`);