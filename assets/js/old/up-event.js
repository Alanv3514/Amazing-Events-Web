fetch(datajson)
    .then(response => { return response.json() })
    .then(data => {
        for (let event of data.events) {
            let eventDate = new Date(event.date);
            currentDate = new Date(data.currentDate);
            if(eventDate > currentDate) {//filtramos por fecha
                categoriasHtml+= saveCategoriesHtml(event.category);
                htmlEvents+= generateCards(event._id, event.image, event.name, event.description, event.price, event.category);
            };
        };
        console.log(htmlEvents)

        searchInput = document.getElementById('search-input');//obtenemos el input de texto para el filtro buscador
        searchButton = document.getElementById('search-button');//obtenemos el input de boton para el filtro 
        cardContainer = document.getElementById('cardC');//obtenemos el container para las cards
        categoriesContainer=  document.getElementById("chkCategories"); // obtenemos el container para nuestros checkboxes
        msg = document.getElementById('voidMsg');//obtenemos el elemento del dom que corresponde a un mensaje predeterminado

        cardContainer.innerHTML = htmlEvents;//inyectamos las tarjetas
        categoriesContainer.innerHTML = categoriasHtml;//inyectamos las checkboxes

        searchCategory = document.querySelectorAll("input[type='checkbox']")//obtenemos los elementos del dom que corresponden a los checkboxes

        //declaramos los listeners
        searchButton.addEventListener('click', filterCards);
        searchInput.addEventListener('input', filterCards);

        for (let checkbox of searchCategory) {
            checkbox.addEventListener('change',filterCards)//asignamos un listener a cada checkbox
        }

        }
    )
