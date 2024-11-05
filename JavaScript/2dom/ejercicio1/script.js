function obtainFamilyNodes(event) {
    const element = event.target;

    console.log("Elemento elegido: ", element.tagName, element.id || ", No tiene id");

    // Nodo padre

    const father = element.parentElement;
    console.log("Padre: ", father.tagName, father.id || ", No tiene id");

    // Nodos hermanos

    const siblings = Array.from(father.children).filter(sib => sib !== element.parentElement);
    console.log("Hermanos: ", siblings.map(sib => `${sib.tagName}, ${sib.id || "No tiene id"}`).join(", ") || "No tiene hermanos.");

    // Hermano anterior

    const prevSibling = element.previousElementSibling;
    console.log("Hermano anterior: ", prevSibling ? `${prevSibling.tagName}, ${prevSibling.id || "No tiene id"}` : "No hay hermano anterior.");

    // Hermano siguiente

    const nextSibling = element.nextElementSibling;
    console.log("Hermano siguiente: ", nextSibling ? `${nextSibling.tagName}, ${nextSibling.id || "No tiene id"}` : "No hay siguiente hermano.");

    // Abuelo

    const grandfather = father.parentElement;
    console.log("Abuelo: ", grandfather ? `${grandfather.tagName}, ${grandfather.id || "No tiene id"}` : "No tiene abuelo");

    // Hermanos del abuelo

    const grandfatherSiblings = "";

    // Hermanos del padre

    const fatherSiblings = Array.from(grandfather.children).filter(fSibligs => fSibligs !== father);
    console.log("Hermanos del padre:", fatherSiblings.map(sibling => `${sibling.tagName} ${sibling.id || ", No tiene ID"}`).join(", ") || "No hay hermanos del padre");
    
    // Primos

    const cousins = fatherSiblings.children;
    console.log("Primos: ", cousins ? `${cousins.tagName}, ${cousins.id || "No tiene id"}` : "No tiene primos");

    // Hijos

    const childrens = element.children;
    console.log("Hijos: ", childrens ? `${childrens.tagName}, ${childrens.id || "No tiene id"}` : "No tiene hijos");    

    // Nietos

    const grandChildren = childrens.children;
    console.log("Nietos: ", grandChildren ? `${grandChildren.tagName}, ${grandChildren.id || "No tiene id"}` : "No tiene nietos");
    
    console.log("=======================================================");
    
}

document.querySelector("#child2").addEventListener("click", obtainFamilyNodes)
document.querySelector("#child3").addEventListener("click", obtainFamilyNodes)