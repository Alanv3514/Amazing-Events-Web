export default {
    name: "pastScript",
    data(){
        return {
            urlApi: 'https://mindhub-xj03.onrender.com/api/amazing',
            rute: this.$route.name,
            dato: [],
            alleventos:[],
            eventos: [],
            evento:[],
            bkpEventos: [],
            texto: '',
            categorias: [],
            selectCategorias: [],
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
                    this.dato=data;
                    console.log(this.$route.name); 
                    for (let event of data.events) {
                        let eventDate = new Date(event.date);
                        let currentDate = new Date(data.currentDate);
                        if (this.$route.name =='home') {
                            this.eventos.push(event);
                            this.bkpEventos.push(event);
                            this.setCat(this.eventos)
                        }
                        else if(this.rute =='upcoming-events'){
                            if (eventDate>currentDate) {
                                this.eventos.push(event);
                                this.bkpEventos.push(event);
                                this.setCat(this.eventos)
                            }
                        }
                        else if(this.rute =='past-events'){
                            if (eventDate<currentDate) {
                                this.eventos.push(event);
                                this.bkpEventos.push(event);
                                this.setCat(this.eventos)
                            }
                        }
                        else if(this.rute =='stats'){
                            if (eventDate<currentDate) {
                                event.estimate = event.assistance;
                                event.pattendance = (event.assistance / event.capacity * 100);
                                let MontoRecaudado = event.price * event.assistance;//calculo el monto recaudado por el evento
                                this.statsByCat(this.pastCatStats, event, MontoRecaudado, event.assistance, event.capacity, event.pattendance);
                            }
                            else {
                                event.assistance = event.estimate;
                                event.pattendance = (event.assistance / event.capacity * 100);
                                let MontoRecaudado = event.price * event.assistance;//calculo el monto recaudado por el evento
                                this.statsByCat(this.futCatStats, event, MontoRecaudado, event.assistance, event.capacity, event.pattendance);
                            }
                        }
                        else if(this.rute =='details'){
                            this.evento = data.events.find(evento => evento._id ==id); //seleccionamos dentro de nuestro data el evento correspondiente al id que leimos en el url  
                        }
                        this.alleventos.push(event);
                    };
                    this.assistancesLogic();
                })
                .catch(error => console.log(error.message))
        },

        statsByCat(eventArray,event, MontoRecaudado, Asistencias, Capacity, pattendance) {
            var index = eventArray.findIndex(function (obj) {
                return obj.nameCat === event.category;
            });
        
            if (index == -1) {
                eventArray.push({
                    nameCat: event.category,
                    recaudado: MontoRecaudado,
                    asistencias: Asistencias,
                    capacity: Capacity,
                    pAsistencias: pattendance,
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
            this.alleventos.sort(function (a, b) { return b.pattendance - a.pattendance; })
            for (let i = 0; i < this.alleventos.length / 4; i++) {
                this.HAevent.push(this.alleventos[i]);
            }
            this.alleventos.sort(function (a, b) { return a.pattendance - b.pattendance; })
            for (let i = 0; i < this.alleventos.length / 4; i++) {
                this.LAevent.push(this.alleventos[i]);
            }
            this.alleventos.sort(function (a, b) { return b.capacity - a.capacity; });
        },
        setCat(array){
            array.forEach(event => {
                if(!this.categorias.includes(event.category)){
                    this.categorias.push(event.category)
                }
            })
        },

    },
    computed:{
        filtroDoble(){
            let primerFiltro = this.bkpEventos.filter(evento => (evento.name.toLowerCase().includes(this.texto.toLowerCase())||evento.description.toLowerCase().includes(this.texto.toLowerCase())))
            if(this.selectCategorias.length > 0){
                this.eventos = primerFiltro.filter(evento => this.selectCategorias.includes(evento.category))
            } else {
                this.eventos = primerFiltro
            }
        }
    },
}