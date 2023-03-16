const { createApp } = Vue

const app = createApp({
    data(){
        return {
            urlApi: 'https://mindhub-xj03.onrender.com/api/amazing',
            dato: [],
            eventos: [],
            bkpEventos: [],
            texto: '',
            categorias: [],
            pastCatStats: [], //Guardaremos informacion sobre las Categorias de eventos pasados
            futCatStats: [],//Guardaremos informacion sobre las Categorias de eventos futuros
            HAevent: [], //Guardaremos informacion sobre la mayor asistencia a eventos
            LAevent: [], //Guardaremos informacion sobre la menor asistencia a eventos
            repetitions:5,
        }
    },
    created(){
        this.traerDatos()
        
    },
    mounted(){

    },
    methods:{
        traerDatos(){
            fetch(this.urlApi)
                .then(response => response.json())
                .then(data => {
                    this.dato = data

                    for (let event of data.events) {
                        let eventDate = new Date(event.date);
                        let currentDate = new Date(data.currentDate);
                        if (eventDate<currentDate) {
                            event.estimate = event.assistance;
                            event.pattendance = (event.assistance / event.capacity * 100);
                            let MontoRecaudado = event.price * event.assistance;//calculo el monto recaudado por el evento
                            this.statsByCat(this.pastCatStats, event, MontoRecaudado, event.assistance, event.capacity);
                            
                        }
                        else {
                            event.assistance = event.estimate;
                            event.pattendance = (event.assistance / event.capacity * 100);
                            let MontoRecaudado = event.price * event.assistance;//calculo el monto recaudado por el evento
                            this.statsByCat(this.futCatStats, event, MontoRecaudado, event.assistance, event.capacity);
                        }
                        this.eventos.push(event);
                    };
                    this.assistancesLogic();
                })
                .catch(error => console.log(error.message))
        },

        statsByCat(eventArray,event, MontoRecaudado, Asistencias, Capacity) {
            var index = eventArray.findIndex(function (obj) {
                return obj.nameCat === event.category;
            });
        
            if (index == -1) {
                eventArray.push({
                    nameCat: event.category,
                    recaudado: MontoRecaudado,
                    asistencias: Asistencias,
                    capacity: Capacity,
                    pAsistencias: (Capacity/Asistencias *100),
                });
            }
            else {
                eventArray[index].recaudado += MontoRecaudado;
                eventArray[index].asistencias += Asistencias;
                eventArray[index].capacity += Capacity;
                eventArray[index].pAsistencias = (eventArray[index].asistencias/eventArray[index].capacity) *100;
            }
        },
        assistancesLogic() {
            this.eventos.sort(function (a, b) { return b.pattendance - a.pattendance; })
            for (i = 0; i < this.eventos.length / 4; i++) {
                this.HAevent.push(this.eventos[i]);
            }
            this.eventos.sort(function (a, b) { return a.pattendance - b.pattendance; })
            for (i = 0; i < this.eventos.length / 4; i++) {
                this.LAevent.push(this.eventos[i]);
            }
            this.eventos.sort(function (a, b) { return b.capacity - a.capacity; });
        },
    },
    computed:{

    },
})

app.mount('#app')