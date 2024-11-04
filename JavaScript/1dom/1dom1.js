console.log(document.querySelector("#age-table"));

console.log(document.querySelector("#age-list").childNodes);

console.log(document.querySelector("#age-table td").innerHTML); // Si pongo solo el td también me sirve, ya que me imprime el primero.

let form = document.getElementsByName("search")[0]; // Hay varios name="search". Para imprimir el del formulario se indica cual es el que queremos, si el primero o alguno de los demás con números.
console.log(form);

console.log(form.firstElementChild.firstElementChild);

console.log(form.lastElementChild);