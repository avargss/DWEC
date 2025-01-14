console.log('Inicio de programa');

document.getElementById("user").addEventListener("change", function () {
    let username = this.value;
    let url = `https://api.github.com/users/${username}`;
    let followers = `https://api.github.com/users/${username}/followers`;

    // Obtener información del usuario
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API del usuario');
            }
            return response.json();
        })
        .then(userInfo => {
            // Mostrar información del usuario
            document.getElementById("user-img").src = userInfo.avatar_url;
            document.getElementById("user-name").textContent = userInfo.name || username;
            document.getElementById("created-date").textContent = `Creado el: ${new Date(userInfo.created_at).toLocaleDateString()}`;
            document.getElementById("followers-list").textContent = `Seguidores: ${userInfo.followers}`;
        })
        .catch(error => {
            console.error('Error al obtener la información del usuario:', error);
        });

    // Obtener información de los seguidores
    fetch(followers)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener la lista de seguidores');
            }
            return response.json();
        })
        .then(followersInfo => {
            // Limpiar las listas existentes
            const followersNameList = document.getElementById("followers-name");
            followersNameList.innerHTML = '';

            // Mostrar información de cada seguidor
            followersInfo.forEach(follower => {
                // Crear elemento para el nombre y la fecha
                const followerItem = document.createElement('li');
                const profileLink = document.createElement('a');
                profileLink.href = follower.html_url;
                profileLink.textContent = follower.login;
                profileLink.target = '_blank';

                // Crear texto para la fecha
                const creationDate = document.createTextNode(
                    ` (Creado el: ${new Date(follower.created_at).toLocaleDateString()})`
                );

                // Agregar enlace y fecha al elemento de la lista
                followerItem.appendChild(profileLink);
                followerItem.appendChild(creationDate);
                followersNameList.appendChild(followerItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener la información de los seguidores:', error);
        });
});
