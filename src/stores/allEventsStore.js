import {defineStore} from 'pinia'

export const useallEventListStore = defineStore ('allEventss',{
    state: () => ({
        allEvents:[],
        bckEvents:[],
        apiEvents:[],
        categorias:[],
        selectCategorias:[],
        currentDate:0,
        texto:'',
        currentEvent:{},
    }),
    getters: {
        getEventById: (state) => (id) => {
            return state.allEvents.find((event) => event._id === id)
          }
        },
    actions:{    
        addEvent(event){
            this.allEvents.push(event)
            this.bckEvents.push(event)
            this.apiEvents.push(event)
        },
        setCat(event){
                if(!this.categorias.includes(event.category)){
                    this.categorias.push(event.category)
                }
        },
        filtroDoble(){
            let primerFiltro = this.bckEvents.filter(evento => (evento.name.toLowerCase().includes(this.texto.toLowerCase())||evento.description.toLowerCase().includes(this.texto.toLowerCase())))
            this.selectCategorias.length > 0 ?
                this.allEvents = primerFiltro.filter(evento => this.selectCategorias.includes(evento.category)) :
                this.allEvents = primerFiltro
        },
        setCurrentEvent(id){
           this.currentEvent=this.allEvents.find((event) => event._id === id)
    },

    }
})