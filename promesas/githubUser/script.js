console.log('Inicio de programa');

document.getElementById("user").addEventListener("change", function () {

    let username = this.value;
    let url = `https://api.github.com/users/${username}`;
    let followers = `https://api.github.com/users/${username}/followers`;
    let following = `https://api.github.com/users/${username}/following`;

    let user = new Promise((resolve, reject) => {
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

    user
        .then((resultado) => {
            console.log('Resultado:', resultado);

            document.getElementById("user-img").src = resultado.avatar_url;
            document.getElementById("user-name").textContent = resultado.name;
            document.getElementById("created-date").textContent = resultado.created_at;
            document.getElementById("followers-list").textContent = resultado.followers;
            document.getElementById("followers-name").textContent = resultado.followers_url;
            document.getElementById("following-list").textContent = resultado.following;
            document.getElementById("following-name").textContent = resultado.following_url;
        })

        .catch((error) => {
            console.log('Error:', error);
            document.getElementById("user-info").value = 'Error 404, no se encuentra el usuario';
        });

        /* Hay que hacer fetch del response.json para que pille los datos de los seguidores y eso */


    /* let followersList = new Promise((resolve, reject) => {
        fetch(followers)
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

     followersList
        .then((resultado2) => {
            console.log('Resultado:', resultado2);

            // document.getElementById("followers-list").textContent = resultado.login;
        }); */

});