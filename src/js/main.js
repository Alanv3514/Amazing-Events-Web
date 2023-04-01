export default {
    name: 'mainScript',
    data(){
        return {
            urlApi: 'https://mindhub-xj03.onrender.com/api/amazing',
            dato: [],
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
                })
                .catch(error => console.log(error.message))
                
        },
    },

}