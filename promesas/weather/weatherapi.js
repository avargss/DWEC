console.log('Inicio de programa');

//document.getElementById("ciudad").addEventListener("change", function () {

let resultP;

const busqueda = async (e) => {

    let q = this.value;
    let apiKey = '206f636edd2545e8a7690809250801';
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${q}`;

    await fetch(url)
        .then((response) => {
            console.log('Response:', response);
            return response.json();
        })

        .then(async (weatherData) => {

            console.log('Weather:', weatherData);

            resultP.innerHTML = `${weatherData.location.name} (${weatherData.current.location.text}). Temp: ${weatherData.current.temp_c}°C`;

            return fetch(weatherData.current.condition.icon);
        })

        .then((iconResponse) => {
            console.log('IconResponse:', iconResponse);
            return iconResponse.blob();
        })

        .then((imgBlob) => {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(imgBlob);
            resultP.insertAdjacentElement("afterbegin", img);
        })

        .catch((error) => {
            console.log('Error:', error);
            re
        });
};



/* let miPromesa = new Promise((resolve, reject) => {
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                reject('Error en la respuesta de la API');
            }
        })
 
        .then(data => resolve(data))
        .catch(error => reject(error));
});
 
miPromesa
    .then((resultado) => {
        // Aquí muestro la información de la API en la consola
        console.log('Resultado:', resultado);
 
        // Y aquí en el html
        document.getElementById("weather-img").src = resultado.current.condition.icon;
        document.getElementById("weather-info").textContent = `Temperatura: ${resultado.current.temp_c}°C, Condición: ${resultado.current.condition.text}`;
 
    })
    .catch((error) => {
        console.log('Error:', error);
        document.getElementById("weather-info").textContent = 'Error 404, no se encuentra la ciudad';
    });
}); */

console.log('Fin de programa');

//});