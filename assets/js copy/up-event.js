for (let event of data.events) {
    let eventDate = new Date(event.date);
    if(eventDate > currentDate) {//filtramos por fecha
        categoriasHtml+= saveCategoriesHtml(event.category);
        htmlEvents+= generateCards(event._id, event.image, event.name, event.description, event.price, event.category);
    };
};

cardContainer.innerHTML = htmlEvents;
categoriesContainer.innerHTML = categoriasHtml;

