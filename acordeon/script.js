window.onload = function crearComunidades() {
    comunidades.forEach(comunidad => {

        let accordion = document.getElementById("comunidadesAccordion");

        accordion.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="header${comunidad.label}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${comunidad.label}" aria-expanded="true" aria-controls="collapse${comunidad.label}">
                        ${comunidad.label} - ${comunidad.provinces.length} provinces
                    </button>
                </h2>
                <div id="collapse${comunidad.label}" class="accordion-collapse collapse show" aria-labelledby="headerAndalucia"
                    data-bs-parent="#accordionComunidades">
                    <div class="accordion-body">
                        <div class="accordion sub-accordion" id="accordion${comunidad.label}">
                            
                        </div>
                    </div>
                </div>
            </div>
        `;

        let subAccordion = document.getElementById(`accordion${comunidad.label}`);

        comunidad.provinces.forEach(provincia => {

            subAccordion.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="header${provincia.label}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${provincia.label}" aria-expanded="true" aria-controls="collapse${provincia.label}">
                        ${provincia.label}
                    </button>
                </h2>
                <div id="collapse${provincia.label}" class="accordion-collapse collapse show" aria-labelledby="headerAndalucia"
                    data-bs-parent="#accordion${comunidad.label}">
                    <div class="accordion-body">
                        <div class="accordion sub-accordion" id="ciudades${provincia.label}">
                            
                        </div>
                    </div>
                </div>
            </div>
            `;

            let ciudades = document.getElementById(`ciudades${provincia.label}`);
            let lista = document.createElement("ul");

            provincia.towns.forEach(ciudad => {
                let item = document.createElement("li");
                item.textContent = ciudad.label;
                lista.append(item);
            });

            ciudades.appendChild(lista);

        });
    });
}