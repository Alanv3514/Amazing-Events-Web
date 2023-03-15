let mayorAsistencia;
let menorAsistencia;
let mayorCapacidad;
let allEvents = [];
let eventoPasado = [];
let eventoFuturo = [];
let pasCatFiltrados = [];
let futCatFiltrados = [];
let UHAevent = [{ name: "blank", assistance: 0, estimate: 0, capacity: 1 }];
let ULAevent = [{ name: "blank", assistance: 1, estimate: 1, capacity: 1 }];
let PHAevent = [{ name: "blank", assistance: 0, estimate: 0, capacity: 1 }];
let PLAevent = [{ name: "blank", assistance: 1, estimate: 1, capacity: 1 }];

let AttendanceHtml = ``;
let UpStatsHtml = ``;
let PastStatsHtml = ``;
let htmlTable = ``;
fetch(datajson)
    .then(response => { return response.json() })
    .then(data => {

        for (let event of data.events) {
            let eventDate = new Date(event.date);
            currentDate = new Date(data.currentDate);
            allEvents.push(event)
            logicCategoria(currentDate, eventDate, event)
        }
        allEvents.sort(function(a,b){return b.capacity-a.capacity;})

        makeTable()

        let tablita = document.getElementsByClassName('table-responsive')
        tablita[0].innerHTML = htmlTable

        console.log(UHAevent)
        console.log(ULAevent)
        console.log(PLAevent)
        console.log(PHAevent)

        console.log(eventoPasado)
        console.log(eventoFuturo)

        console.log(pasCatFiltrados)
        console.log(futCatFiltrados)
    });

function guardarCategoria(event, eventArray, MontoRecaudado, AsistenciasCat, CapacityCat) {
    var index = eventArray.findIndex(function (obj) {
        return obj.nameCat === event.category;
    });

    if (index == -1) {
        eventArray.push({
            nameCat: event.category,
            recaudado: MontoRecaudado,
            asistencias: AsistenciasCat,
            capacity: CapacityCat,
        });
    }
    else {
        eventArray[index].recaudado += MontoRecaudado;
        eventArray[index].asistencias += AsistenciasCat;
        eventArray[index].capacity += CapacityCat;
    }
}



function logicCategoria(currentDate, eventDate, event) {
    if (currentDate < eventDate) {
        eventoPasado.push(event)
        let MontoRecaudado = event.price * event.estimate
        guardarCategoria(event, futCatFiltrados, MontoRecaudado, event.estimate, event.capacity)

        if ((UHAevent[0].estimate / UHAevent[0].capacity) == (event.estimate / event.capacity)) {
            UHAevent.unshift(event);

        }
        else if ((UHAevent[0].estimate / UHAevent[0].capacity) < (event.estimate / event.capacity)) {
            UHAevent = [];
            UHAevent.unshift(event);
        }

        if ((ULAevent[0].estimate / ULAevent[0].capacity) == (event.estimate / event.capacity)) {
            ULAevent.unshift(event);
        }
        else if ((ULAevent[0].estimate / ULAevent[0].capacity) > (event.estimate / event.capacity)) {
            ULAevent = [];
            ULAevent.unshift(event);
        }
    }
    else {
        eventoFuturo.push(event)
        let MontoRecaudado = event.price * event.assistance
        guardarCategoria(event, pasCatFiltrados, MontoRecaudado, event.assistance, event.capacity)

        if ((PHAevent[0].assistance / PHAevent[0].capacity) == (event.assistance / event.capacity)) {
            PHAevent.unshift(event);

        }
        else if ((PHAevent[0].assistance / PHAevent[0].capacity) < (event.assistance / event.capacity)) {
            PHAevent = [];
            PHAevent.unshift(event);
        }

        if ((PLAevent[0].assistance / PLAevent[0].capacity) == (event.assistance / event.capacity)) {
            PLAevent.unshift(event);
        }
        else if ((PLAevent[0].assistance / PLAevent[0].capacity) > (event.assistance / event.capacity)) {
            PLAevent = [];
            PLAevent.unshift(event);
        }

    }
}

function sortCapacity() { }



function makeTable() {

    htmlTable = `<div class="table-responsive pt-lg-5 pb-lg-5 pe-lg-5 ps-lg-2 me-lg-5 ms-lg-5">
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
                    for (i = 0; i < Math.max(PHAevent.length, PLAevent.length); i++) {
                        const PLAeventPercent = PLAevent.hasOwnProperty(i) ? ` : ${PLAevent[i].assistance / PLAevent[i].capacity * 100}%` : '';
                        const PHAeventPercent = PHAevent.hasOwnProperty(i) ? ` : ${PHAevent[i].assistance / PHAevent[i].capacity * 100}%` : '';
                        const PHAeventName = PHAevent.hasOwnProperty(i) ? `${PHAevent[i].name}${PHAeventPercent} ` : '';
                        const PLAeventName = PLAevent.hasOwnProperty(i) ? `${PLAevent[i].name}${PLAeventPercent} ` : '';
                        htmlTable += `<tr>
                                          <td>${PHAeventName}</td>
                                          <td>${PLAeventName}</td>
                                          <td>${allEvents[i].name} : ${allEvents[i].capacity} </td>
                                        </tr>`;
                    }
    for (i = 0; i < Math.max(UHAevent.length, ULAevent.length); i++) {
        const ULAeventPercent = ULAevent.hasOwnProperty(i) ? ` : ${ULAevent[i].estimate / ULAevent[i].capacity * 100}%` : '';
        const UHAeventPercent = UHAevent.hasOwnProperty(i) ? ` : ${UHAevent[i].estimate / UHAevent[i].capacity * 100}%` : '';
        const UHAeventName = UHAevent.hasOwnProperty(i) ? `${UHAevent[i].name}${UHAeventPercent} ` : '';
        const ULAeventName = ULAevent.hasOwnProperty(i) ? `${ULAevent[i].name}${ULAeventPercent} ` : '';

        htmlTable += `<tr>
                                          <td>${UHAeventName}</td>
                                          <td>${ULAeventName}</td>
                                          <td>${allEvents[i+Math.max(PHAevent.length, PLAevent.length)].name} : ${allEvents[i+Math.max(PHAevent.length, PLAevent.length)].capacity}</td>
                                        </tr>`;
    }





    htmlTable += `<tr>
                        <th class="bg-body-secondary" colspan="3">Upcoming events statistics by category</th>
                    </tr>
                    <tr >
                        <th>Categories</th>
                        <th>Revenues</th>
                        <th>Percentage of attendance</th>
                    </tr>`

    for (i = 0; ((i < pasCatFiltrados.length)); i++) {
        let percent = ((pasCatFiltrados[i].asistencias) / (pasCatFiltrados[i].capacity) * 100)
        htmlTable += `<tr >
                        <td>${pasCatFiltrados[i].nameCat}</td>
                        <td>$${pasCatFiltrados[i].recaudado}</td>
                        <td>${percent.toFixed(2)}%</td>
                    </tr>`
    }

    htmlTable += `<tr>
                        <th class="bg-body-secondary" colspan="3">Past events statistics by category</th>
                    </tr>
                    <tr >
                        <th>Categories</th>
                        <th>Revenues</tg>
                        <th>Percentage of attendance</th>
                    </tr>`
    for (i = 0; ((i < futCatFiltrados.length)); i++) {
        let percent = ((futCatFiltrados[i].asistencias) / (futCatFiltrados[i].capacity) * 100)

        htmlTable += `<tr>
                        <td>${futCatFiltrados[i].nameCat}</td>
                        <td>$${futCatFiltrados[i].recaudado}</td>
                        <td>${percent.toFixed(2)}%</td>
                    </tr>`
    }
    `
                </tbody>
            </table>
        </div>`
}