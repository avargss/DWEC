const csv = `1,2,3
4,5,hola
7,8,9`;
console.log(csv);

let csvTo2d = (cvs)=>cvs.split("\n").map(e=> e.split(","));
const arr2d = csvTo2d(csv);
arr2d.forEach(e=> console.log(e));