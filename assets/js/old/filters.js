

//Funcion filtrar tarjetas
function filterCards() {
    const searchValue = searchInput.value.toLowerCase();//normalizamos la busqueda del input text
    let show = false;//inicializamos una bandera que utilizaremos para saber si debemos filtrar o no la tarjeta a analizar
    let selectedCategories = [];//inicializamos un array que usaremos para pushear los checkbox activos
    const cards = cardContainer.querySelectorAll('.card');//capturamos todos los elementos tarjeta del dom
    let longCards=cards.length;//inicializamos una variable que nos seriva para lograr que la funcion pueda determinar cuando no hay resultados sin importar la cantidad de tarjetas que existan

    //recorremos las cateogias checkeadas y las pusheamos en un array
    for (let checkbox of searchCategory) {
        if (checkbox.checked) {
            selectedCategories.push(checkbox.value);
        }
    }
    //recorremos las tarjetas
    cards.forEach(card => {
        //guardamos en constantes nombre, descripcion y categoria (la categoria fue guardada en el dom con la ayuda de data-*) para poder recuperarla aqui
        const name = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-text').textContent.toLowerCase();
        const category = card.dataset.category;

        //evaluamos el filtro de input buscando coincidencias tanto en el nombre como descripcion
        if (name.includes(searchValue) || description.includes(searchValue)) {
            show = true;//si encuentro coincidencia, la tarjeta se debe mostrar
        } else {
            show = false;//si no encuentro coincidencia, la tarjeta se debe ocultar
            
        }

        //evaluamos el filtro de checkboxes teniendo en cuenta que esten seleccionados al menos 1 
        if (selectedCategories.length > 0 && !selectedCategories.includes(category)) {
            show = false;//si no encuentro coincidencia entre la categoria de la tarjeta y las categorias marcadas, oculto la tarjeta
        }

        if(!show){//compruebo si efectivamente se oculto el mensaje
            longCards--;//disminuyo en 1 el contador de tarjetas
        }

        //evaluo si todas las tarjetas quedaron ocultas
        if(longCards<=0){
            msg.classList.remove("oculto");//si oculte todas las tarjetas, debo mostrar el mensaje de "no se han encontrado coincidencias"
        }
        else{
            msg.classList.add("oculto");//este condicional es necesario para volver a ocultar el mensaje en caso de cambiar el filtro de busqueda y encontrar tarjetas nuevamente
        }

        card.style.display = show ? 'flex' : 'none';//si la bandera show esta arriba la tarjeta se muestra flex, caso contrario no se muestra
        card.parentElement.style.display = show ? 'flex' : 'none';//por la estructura de mis cards necesito ocultar tambien un div padre de dicha card para evitar que las tarjetas queden flotando al momento de filtrar y puedan reubicarse automaticamente
    });
}



