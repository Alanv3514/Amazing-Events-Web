
        console.log(data)
        for (let event of data.events) {
            let currentDate = new Date(data.currentDate);
            let eventDate = new Date(event.date);
            saveCategoriesHtml(event.category)
            generateCards(event.image, event.name, event.description, event.price,event.category);
            
        };


        console.log(categorias);
        cardContainer.innerHTML = htmlEvents;
        categoriesContainer.innerHTML = categoriasHtml;
        
        
    




