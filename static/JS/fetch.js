fetch('http://localhost:8000/api')
    .then(response => response.json())
    .then(data => {
        const datosOrdenados = data.content.sort((a, b) => a.title.localeCompare(b.title))

        const container = document.getElementById('container')

        datosOrdenados.forEach(dato => {
            const card = document.createElement('div')
            card.classList.add( 'card','rounded-lg', 'overflow-hidden', 'mb-5')

            const imageContainer = document.createElement("img");
            imageContainer.classList.add("card-img-top");
            imageContainer.src = dato.title_image_full;

            const title = document.createElement('h2')
            title.classList.add('card-title', 'px-4')
            title.textContent = dato.title

            const location = document.createElement('p')
            location.classList.add('card-text', 'px-4', 'pb-4', 'pb-5')
            location.textContent = dato.location

            card.appendChild(imageContainer);
            card.appendChild(title);
            card.appendChild(location);
            container.appendChild(card);
        })
    })
    .catch(error => console.error(error))
