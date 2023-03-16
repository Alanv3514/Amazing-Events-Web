



fetch(datajson)
    .then(response => { return response.json() })
    .then(data => {
        const queryString = location.search; //creamos una constante con el search
        const params = new URLSearchParams(queryString); //creamos un objeto del tipo queryString
        const id = params.get("id");//obtenemos el parametro ID que pasamos por el url
        const event = data.events.find(event => event._id ==id); //seleccionamos dentro de nuestro data el evento correspondiente al id que leimos en el url
        const div = document.getElementById("cardD"); //obtenemos el elemento del dom correspondiente a nuestro Card Container
        let eventDate = new Date(event.date);//convertimos la fecha
        
        //Escribimos la Card correspondiente con sus datos en el dom
        div.innerHTML = detailsCard(event);
        
        //con la siguiente comparacion logica determinamos si necesitamos ocultar el elemento estimate o assistance ya que quedarian indefinidos
        if(currentDate>eventDate){
            document.getElementById("Estimate").classList.add("oculto");
        }
        else{
            document.getElementById("Assistance").classList.add("oculto");
        }
        
        }
    )

