
export default {
    name: "upScript",
    data(){
        return {
            urlApi: 'https://mindhub-xj03.onrender.com/api/amazing',
            dato: [],
            eventos: [],
            bkpEventos: [],
            texto: '',
            categorias: [],
            selectCategorias: [],
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
                        if (eventDate>currentDate) {
                            this.eventos.push(event);
                            this.bkpEventos.push(event);
                            this.setCat(this.eventos)
                        }
                    };
                })
                .catch(error => console.log(error.message))
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