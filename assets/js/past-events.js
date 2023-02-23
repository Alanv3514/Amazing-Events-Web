
console.log(datajson);

fetch(datajson)
.then(response => { return response.json() })
.then(data => {
console.log(data)
    for(let event of data.events){
        let currentDate = new Date(data.currentDate);
        let eventDate = new Date(event.date);
    
        if (eventDate < currentDate) {
            console.log("evento pasado")
            printcard(event.image,event.name,event.description,event.price)
        } else {
            console.log("evento futuro")
        }

    }
    tarjetap= document.getElementById('cardp')
    tarjetap.innerHTML=htmlEvents;
}

)