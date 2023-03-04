for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
        generateCards(event._id, event.image, event.name, event.description, event.price, event.category);
        saveCategoriesHtml(event.category)
    }
};

cardContainer.innerHTML = htmlEvents;
categoriesContainer.innerHTML = categoriasHtml;

