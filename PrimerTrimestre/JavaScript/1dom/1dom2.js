console.log(document.getElementsByTagName("a").length);

let tagEnlaces = document.getElementsByTagName("a");
let penultLink = tagEnlaces[tagEnlaces.length - 2];
console.log(penultLink.getAttribute("href"));

let enlacesBelen = Array.from(tagEnlaces).filter(tagEnlaces => tagEnlaces.getAttribute("href") === "https://iesbelen.org");
console.log(enlacesBelen.length);

let p3 = document.querySelectorAll("p")[2];
let enlacesP3 = p3.querySelectorAll("a");
console.log(enlacesP3.length);
