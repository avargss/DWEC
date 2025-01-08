const salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function datosOrdenados() {

	const keys = Object.keys(salaries).length;
	console.log(`Cantidad de objetos: `, keys);

	const values = Object.values(salaries);
	let suma = 0;
	
	for (let valor of values) {
		suma += valor;
	}

	console.log(`Suma de los valores: `, suma);

}

datosOrdenados();