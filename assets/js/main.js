
let categorias =[];
let categoriasHtml="";
let categoriesContainer=  document.getElementById("chkCategories")

    fetch(datajson)

    .then(response => { return response.json() })
    .then(data => {

        console.log(data)
        for (let event of data.events) {
            let currentDate = new Date(data.currentDate);
            let eventDate = new Date(event.date);
            generateCardss(event.image, event.name, event.description, event.price);

            if(!categorias.includes(event.category)){
                    categorias.push(event.category)
                    categoriasHtml +=`<li class="nav-item">
                    <label><input type="checkbox" id="${event.category}" value="${event.category}"> ${event.category}</label>
                </li>`
                    };
        };
        console.log(categorias);
        tarjetai.innerHTML = htmlEvents;
        categoriesContainer.innerHTML=categoriasHtml;



    })






