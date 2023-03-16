//funcion que recibiendo una categoria pushea en un array las NO repetidas y retorna un str con los elementos del dom que las representan


function saveCategoriesHtml(category) {
    let catHtml= ``;
    if (!categorias.includes(category)) {
        categorias.push(category)
        catHtml = `<li class="nav-item">
        <label><input type="checkbox" name="category" id="${category}" class="chkBoxes" value="${category}"> ${category}</label>
    </li>`
    }
    return catHtml;
}

/**
 * funcion que recibiendo una los parametros correspondientes y retorna un str con los elementos del dom que representan las tarjetas
 * @param {*} id  id de la card
 * @param {*} image imagen de la card
 * @param {*} name nombre de la card
 * @param {*} description descripcion de la card
 * @param {*} price precio de la card
 * @param {*} category categoria de la card
 * @returns retorna un string con los elementos que representan las tarjetas
 */
//notese que `data-category="${category}" ` nos permite guardar informacion dentro de etiquetas
function generateCards(id, image, name, description, price, category) {
    return `<div class="col-12 col-md-6 col-lg-3"  >
    <div class="card h-100 m-4 m-md-0 m-lg-0 " data-category="${category}">
    <img src="${image}" height="180" class="m-2" alt=""> 
        <div class="card-body d-flex flex-column align-items-center justify-content-between">
            <h3 class="card-title">${name}</h3>
            <p class="card-text">${description}</p>
            <div class="d-flex w-75 gap-3 justify-content-between">
                <p>Price: $${price}</p>
                <a href="./details.html?id=${id}" class="btn btn-primary ">Details</a>
            </div>
        </div>
    </div>
    </div>`;
};

/**
 * funcion que recibiendo un evento retorna un str con los elementos del dom que representan una tarjeta Details
 * @param {*} event
 * @returns 
 */

function detailsCard(event) {
    return `<div class="card flex-md-row flex-lg-row" data-category="${event.category}">
    <img src="${event.image}"  class="border m-md-3 me-md-1 col-md-6 m-lg-3 me-lg-1 col-lg-6" alt="cinema">
    <div class="card-body d-flex flex-column border ms-lg-1 m-lg-3 align-items-center col-lg-6 ms-md-1 m-md-3 col-md-6 justify-content-between">
        <div class ="nd-card w-100" >
            <div class="d-flex justify-content-between ">
                <h5 class="card-title fs-3">${event.name}</h5>
                <p class="fs-6">${event.date}</p>
            </div>
            <p class="fs-5">${event.category}</p>
            <p class="col-12 fs-6 flex-wrap">${event.description}</p>
            <div class="d-flex justify-content-between">
                <p >Place: ${event.place}</p>
                <p >Capacity: ${event.capacity}</p>
                <p id="Assistance">Assistance: ${event.assistance}</p>
                <p id="Estimate">Estimate: ${event.estimate}</p>
            </div>
        </div>
        <div class="d-flex w-100 gap-3 justify-content-between footer-card">
                    <p class="fs-5 ">Price: $${event.price}</p>
                    <a href="javascript:history.back()" class="btn btn-primary fs-5">Back</a>
        </div>
    </div>
</div>`
    
}