function compararDosArrays(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    return array1.every((e, i) => e === array2[i]);
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 4];

console.log(compararDosArrays(array1, array2));
console.log(compararDosArrays(array1, array3));