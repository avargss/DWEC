function obtainFamilyNodes(event) {
    const element = event.target;

    // 1. Padre

    const father = element.parentNode;
    console.log("Padre: ", father ? `${father.tagName}, ${father.id || "no tiene id"}` : "No tiene padre");

    // 2. Todos los hermanos

    const siblings = Array.from(father.children).filter(sib => sib !== element);
    console.log("Hermanos: ", siblings.map(sib => `${sib.tagName}, ${sib.id || "no tiene id"}`).join(", ") || "no tiene hermanos");

    // 3. El hermano anterior

    const prevSibling = element.previousElementSibling;
    console.log("Hermano anterior: ", prevSibling ? `${prevSibling.tagName}, ${prevSibling.id || "no tiene id"}` : "No tiene hermano anterior.");

    // 4. El siguiente hermano

    const nextSibling = element.nextElementSibling;
    console.log("Hermano siguiente: ", nextSibling ? `${nextSibling.tagName}, ${nextSibling.id || "no tiene id"}` : "No tiene hermano siguiente.");

    // 5. El abuelo

    const grandfather = father.parentElement;
    console.log("Hermano anterior: ", grandfather ? `${grandfather.tagName}, ${grandfather.id || "no tiene id"}` : "No tiene abuelo.");

    // 6. Hermanos del abuelo

    const grandfatherSiblings = Array.from(father.parentElement).filter(gra => gra !== father.parentElement);
    console.log("Hermanos del abuelo: ", grandfatherSiblings.map(gra => `${gra.tagName}, ${gra.id || "no tiene id"}`).join(", ") || "no tiene hermanos");

    // 7. Hermanos del padre

    const fatherSiblings = Array.from(grandfather.children).filter(fathSib => fathSib !== element.parentNode);
    console.log("Hermanos del padre: ", fatherSiblings.map(fathSib => `${fathSib.tagName}, ${fathSib.id || "no tiene id"}`).join(", ") || "no tiene hermanos");

    // 8. Primos

    const cousins = fatherSiblings.children;
    console.log("Primos: ", cousins ? `${cousins.tagName}, ${cousins.id || "no tiene id"}` : "No tiene primos.");

    // 9. Hijos

    const elemChildren = element.children;
    console.log("Hijos: ", elemChildren ? `${elemChildren.tagName}, ${elemChildren.id || "no tiene id"}` : "No tiene hijos.");

    // 10. Nietos

    const grandson = elemChildren.children;
    console.log("Nietos: ", grandson ? `${grandson.tagName}, ${grandson.id || "no tiene id"}` : "No tiene nietos.");

    console.log("========================================================");
}

document.querySelector("#child2").addEventListener("click", obtainFamilyNodes);
document.querySelector("#child3").addEventListener("click", obtainFamilyNodes);
document.querySelector("#person1 td").addEventListener("click", obtainFamilyNodes);