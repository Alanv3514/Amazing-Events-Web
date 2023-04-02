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
        pastCatStats: [],
        futCatStats: [],
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
            this.HAevent.sort(function (a, b) { return b.pattendance - a.pattendance; })
            this.LAevent.sort(function (a, b) { return a.pattendance - b.pattendance; })
            this.CAPevent.sort(function (a, b) { return b.capacity - a.capacity; });
        },
        setPFEvents(event) {
            let asistencia = event.assistance ? event.assistance : event.estimate
            event.recaudado = event.price * asistencia;//calculo el monto recaudado por el evento
            event.pattendance = (asistencia / event.capacity * 100);
            event.date > this.currentDate ?
                this.statsByCat(this.futCatStats, event, asistencia) :
                this.statsByCat(this.pastCatStats, event, asistencia)

        },
        statsByCat(eventArray, event, Asistencias) {
            const catName = event.category;
            const foundEvent = eventArray.find((filteredEvent) => filteredEvent.nameCat === catName);

            if (!foundEvent) {
                eventArray.push({
                    nameCat: catName,
                    recaudado: event.recaudado,
                    asistencias: Asistencias,
                    capacity: event.capacity,
                    pAsistencias: event.pattendance,
                });
            } else {
                foundEvent.recaudado += event.recaudado;
                foundEvent.asistencias += Asistencias;
                foundEvent.capacity += event.capacity;
                foundEvent.pAsistencias = (foundEvent.asistencias / foundEvent.capacity) * 100;
            }
        }

    }
})