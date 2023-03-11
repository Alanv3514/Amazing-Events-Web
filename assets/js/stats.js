fetch(datajson)
    .then(response => { return response.json() })
    .then(data => {
        let mayorAsistencia;
        let menorAsistencia;
        let mayorCapacidad;
        let eventoPasado = [];
        let eventoFuturo = [];
        let pasCatFiltrados = [];
        let futCatFiltrados = [];
        for (let event of data.events) {
            let eventDate = new Date(event.date);
            currentDate = new Date(data.currentDate);

            if (currentDate > eventDate) {
                eventoPasado.push(event)
                let MontoRecaudado = event.price * event.assistance
                guardarCategoria(event, futCatFiltrados, MontoRecaudado,event.assistance)

            }
            else {
                eventoFuturo.push(event)
                let MontoRecaudado = event.price * event.estimate
                guardarCategoria(event, pasCatFiltrados, MontoRecaudado,event.assistance)
            }


        }

        console.log(eventoPasado)
        console.log(pasCatFiltrados)
        console.log(eventoFuturo)
        console.log(futCatFiltrados)
    });


function guardarCategoria (event, eventArray, MontoRecaudado,AsistenciasCat){
    if (!eventArray[event.category]) {
        eventArray[event.category] = {
            nameCat: event.category,
            recaudado: MontoRecaudado,
            asistencias: AsistenciasCat
        };
    }
    else {
        eventArray[event.category].recaudado += MontoRecaudado ;
        eventArray[event.category].asistencias += AsistenciasCat ;
    }
}