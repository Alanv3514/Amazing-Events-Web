import { defineStore } from 'pinia'

export const useallEventListStore = defineStore('allEventss', {
    state: () => ({
        allEvents: [],
        bckEvents: [],
        categorias: [],
        selectCategorias: [],
        currentDate: 0,
        texto: '',
        currentEvent: {},
        pastEvents: [],
        futEvents: [],
        HAevent: [],
        LAevent: [],
        CAPevent: [],
    }),
    getters: {

    },
    actions: {
        addEvent(event) {
            this.allEvents.push(event)
            this.bckEvents.push(event)
            this.HAevent.push(event)
            this.LAevent.push(event)
            this.CAPevent.push(event)
        },
        setCat(event) {
            if (!this.categorias.includes(event.category)) {
                this.categorias.push(event.category)
            }
        },
        setFut(event) {
            if (event.date > this.currentDate){                
                event.assistance = event.estimate;
                event.pattendance = (event.estimate / event.capacity * 100);
                event.recaudado  = event.price * event.estimate;//calculo el monto recaudado por el evento
                this.futEvents.push(event)
            }
            },
        setPast(event) {
            if (event.date < this.currentDate){
                event.estimate = event.assistance;
                event.pattendance = (event.assistance / event.capacity * 100);
                event.recaudado = event.price * event.assistance;//calculo el monto recaudado por el evento
                this.pastEvents.push(event)
            }
        },
        filtroDoble() {
            let primerFiltro = this.bckEvents.filter(evento => (evento.name.toLowerCase().includes(this.texto.toLowerCase()) || evento.description.toLowerCase().includes(this.texto.toLowerCase())))
            this.selectCategorias.length > 0 ?
                this.allEvents = primerFiltro.filter(evento => this.selectCategorias.includes(evento.category)) :
                this.allEvents = primerFiltro
        },
        setCurrentEvent(id) {
            this.currentEvent = this.allEvents.find((event) => event._id === id)
        },
        setAtEvents() {
            console.log("ordenando")
            this.HAevent.sort(function (a, b) { return b.pattendance - a.pattendance; })
            this.LAevent.sort(function (a, b) { return a.pattendance - b.pattendance; })
            this.CAPevent.sort(function (a, b) { return b.capacity - a.capacity; });
        },


    }
})