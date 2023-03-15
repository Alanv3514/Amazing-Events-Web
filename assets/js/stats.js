//Declaracion de variables a utilizar
let allEvents = []; //Guardaremos todos los eventos para manipular su orden mas adelante
let pasCatStats = []; //Guardaremos informacion sobre las Categorias de eventos pasados
let futCatStats = [];//Guardaremos informacion sobre las Categorias de eventos futuros
let HAevent = []; //Guardaremos informacion sobre la mayor asistencia a eventos
let LAevent = []; //Guardaremos informacion sobre la menor asistencia a eventos
let htmlTable = ``; //String donde crearemos nuestra tabla antes de inyectarla al html
let pastEvents = [];
fetch(datajson)
    .then(response => { return response.json() })
    .then(data => {
        for (let event of data.events) {
            let eventDate = new Date(event.date);
            currentDate = new Date(data.currentDate);
            if (eventDate > currentDate) {//si es un evento Futuro
                event.assistance = event.estimate; //agrego la propiedad assistance igual a estimate para evitar problemas futuros de calculo
                let MontoRecaudado = event.price * event.estimate;//calculo el monto recaudado por el evento
                statsByCat(futCatStats, event, MontoRecaudado, event.estimate, event.capacity);// Lleno futCatFiltrados
                event.pattendance = (event.assistance / event.capacity * 100);
            }
            else {
                
                event.estimate = event.assistance;//agrego la propiedad estimate igual a assistance para evitar problemas futuros de calculo
                let MontoRecaudado = event.price * event.assistance;//calculo el monto recaudado por el evento
                statsByCat(pasCatStats, event, MontoRecaudado, event.assistance, event.capacity);//LLeno pasCatFiltrados
                event.pattendance = (event.assistance / event.capacity * 100);
                pastEvents.push(event);
            }
            //Agrego la propiedad pattendance (Porcentaje de asistencia) al evento
            
            allEvents.push(event);//guardo el evento en un array
        }
        assistancesLogic(HAevent, LAevent, pastEvents);//LLeno tanto LAevent como HAevent. 
        htmlTable= makeTable(HAevent, LAevent, pastEvents);//Creo el String con la tabla
        let tablita = document.getElementById("table-Stats");//capturo el elemento que representa mi tabla
        tablita.innerHTML = htmlTable;//inyecto el html en el dom
    });

/**
 * Funcion que dandole los siguientes parametros nos rellena el array de eventos con las estadisticas de la categoria correspondiente al evento en cuestion.
 * @param {*} event evento que queremos evaluar
 * @param {*} eventArray array de eventos que queremos revisar y modificar
 * @param {*} MontoRecaudado monto recaudado por el evento que queremos evaluar
 * @param {*} Asistencias cantidad de asistencias al evento
 * @param {*} Capacity capacidad del evento
 */
function statsByCat(eventArray,event, MontoRecaudado, Asistencias, Capacity) {
    var index = eventArray.findIndex(function (obj) {
        return obj.nameCat === event.category;
    });

    if (index == -1) {
        eventArray.push({
            nameCat: event.category,
            recaudado: MontoRecaudado,
            asistencias: Asistencias,
            capacity: Capacity,
        });
    }
    else {
        eventArray[index].recaudado += MontoRecaudado;
        eventArray[index].asistencias += Asistencias;
        eventArray[index].capacity += Capacity;
    }
}

/**
 * Funcion que rellena HAevent y LAevent en base al array de eventos que le pasemos
 * @param {*} HAevent array de eventos con mayor asistencias
 * @param {*} LAevent array de eventos con menor asistencias
 * @param {*} allEvents array con todos los eventos
 */
function assistancesLogic(HAevent, LAevent, allEvents) {

    allEvents.sort(function (a, b) { return b.pattendance - a.pattendance; })
    for (i = 0; i < allEvents.length / 4; i++) {
        HAevent.push(allEvents[i]);
    }

    allEvents.sort(function (a, b) { return a.pattendance - b.pattendance; })
    for (i = 0; i < allEvents.length / 4; i++) {
        LAevent.push(allEvents[i]);
    }

}


/**
 * Funcion que crea una tabla en funcion e los array de eventos que le pasemos
 * @param {*} HAevent array de eventos con mayor asistencias
 * @param {*} LAevent array de eventos con menor asistencias
 * @param {*} allEvents array con todos los eventos
 * @returns retorna un String con la Tabla creada
 */
function makeTable(HAevent, LAevent, allEvents) {
    let Table=``;
    Table = `<div class="table-responsive pt-lg-5 pb-lg-5 pe-lg-5 ps-lg-2 me-lg-5 ms-lg-5">
            <table class="table table-bordered border-dark ">
                <thead>
                    <tr>
                        <th class="bg-body-secondary" colspan="3">Events Statistics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <th >Events with the highest percentage of attendance</th>
                        <th>Events with the lowest percentage of attendance</th>
                        <th>Events with larger capacity</th>
                    </tr>`
          Table += HAStatsTable (HAevent, LAevent, allEvents);
          Table += `<tr>
                        <th class="bg-body-secondary" colspan="3">Upcoming events statistics by category</th>
                    </tr>
                    <tr >
                        <th>Categories</th>
                        <th>Revenues</th>
                        <th>Percentage of attendance</th>
                    </tr>`
          Table += CatStatisticsTable(futCatStats);
          Table += `<tr>
                        <th class="bg-body-secondary" colspan="3">Past events statistics by category</th>
                    </tr>
                    <tr >
                        <th>Categories</th>
                        <th>Revenues</tg>
                        <th>Percentage of attendance</th>
                    </tr>`
    Table += CatStatisticsTable(pasCatStats);
    Table += `</tbody>
            </table>
        </div>`
        return Table;
}

/**
 * Funcion que crea las <tr></tr> de las estadisticas de categorias
 * @param {*} CatFiltrados Array de stadisticas de categorias
 * @returns retorna un String con el html correspondiente a su insercion en una tabla
 */
function CatStatisticsTable(CatStats){
    let trHtml=``;
    for (i = 0; ((i < CatStats.length)); i++) {
        let percent = ((CatStats[i].asistencias) / (CatStats[i].capacity) * 100)
        trHtml+= `<tr>
                        <td>${CatStats[i].nameCat}</td>
                        <td>$${CatStats[i].recaudado}</td>
                        <td>${percent.toFixed(2)}%</td>
                    </tr>`
    }
    return trHtml;
}


/**
 * Funcion que crea las <tr></tr> de los Porcentajes de Asistencias
 * @param {*} HAevent array de eventos con mayor asistencias
 * @param {*} LAevent array de eventos con menor asistencias
 * @param {*} allEvents array con todos los eventos
 * @returns retorna un String con el html correspondiente a su insercion en una tabla
 */
function HAStatsTable (HAevent, LAevent, allEvents){
    let HAStatsHtml=``;
    allEvents.sort(function (a, b) { return b.capacity - a.capacity; });
    for (i = 0; i < Math.max(HAevent.length, LAevent.length); i++) {
        const LAeventPercent = LAevent.hasOwnProperty(i) ? ` : ${(LAevent[i].assistance / LAevent[i].capacity * 100).toFixed(2)}%` : '';
        const HAeventPercent = HAevent.hasOwnProperty(i) ? ` : ${(HAevent[i].assistance / HAevent[i].capacity * 100).toFixed(2)}%` : '';
        const HAeventName = HAevent.hasOwnProperty(i) ? `${HAevent[i].name}${HAeventPercent} ` : '';
        const LAeventName = LAevent.hasOwnProperty(i) ? `${LAevent[i].name}${LAeventPercent} ` : '';
        HAStatsHtml += `<tr>
                            <td>${HAeventName}</td>
                            <td>${LAeventName}</td>
                            <td>${allEvents[i].name} : ${allEvents[i].capacity} </td>
                        </tr>`;
    }
    return HAStatsHtml;
}