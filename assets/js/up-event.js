

fetch(datajson)
.then(response => { return response.json() })
.then(data => {
console.log(data)
    for(let event of data.events){
        let currentDate = new Date(data.currentDate);
        let eventDate = new Date(event.date);
    
        if (eventDate < currentDate) {
            console.log("evento pasado")
        } else {
            console.log("evento futuro")
            printcard(event.image,event.name,event.description,event.price)
        }

    }
    tarjetau= document.getElementById('cardu')
    tarjetau.innerHTML=htmlEvents;
}

)