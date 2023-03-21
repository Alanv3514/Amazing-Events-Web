export default {
    name: "detailsScript",
    data(){
        return {
            urlApi: 'https://mindhub-xj03.onrender.com/api/amazing',
            dato: [],
            evento:{},
        }
        
    },
    created(){
        this.traerDatos()
    },
    mounted(){

    },
    methods:{
        traerDatos(){
            const queryString = location.search; //creamos una constante con el search
            console.log(queryString) 
            const params = new URLSearchParams(queryString); //creamos un objeto del tipo queryString
            console.log(params) 
            const id = params.get("id");//obtenemos el parametro ID que pasamos por el url   
            fetch(this.urlApi)
                .then(response => response.json())
                .then(data => {
                    this.dato = data
                    this.evento = data.events.find(evento => evento._id ==id); //seleccionamos dentro de nuestro data el evento correspondiente al id que leimos en el url  
                })
                

                .catch(error => console.log(error.message))
        },

    },
    computed:{
    },
}