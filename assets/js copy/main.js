//para cada elemento event dentro de data
for (let event of data.events) {
    categoriasHtml+= saveCategoriesHtml(event.category);// llamo a save Categorieshtml (guarda en categoriasHtml un str con los elementos del dom que representan nuestra checkboxes list.)
    htmlEvents+= generateCards(event._id, event.image, event.name, event.description, event.price,event.category);// llamo a generateCards (guarda en htmlEvents un str con los elementos del dom que representan las tarjetas.)
};
cardContainer.innerHTML = htmlEvents;//inyectamos las tarjetas
categoriesContainer.innerHTML = categoriasHtml;//inyectamos las checkboxes




