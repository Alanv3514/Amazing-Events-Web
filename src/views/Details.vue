<script setup >
            import { useallEventListStore } from '../stores/allEventsStore.js';
            import { storeToRefs } from 'pinia'
            import { computed } from 'vue';
            const store = useallEventListStore()
            const { currentEvent } = storeToRefs(store)
            const queryString = location.search; //creamos una constante con el search
            const params = new URLSearchParams(queryString); //creamos un objeto del tipo queryString
            const id = params.get("id");//obtenemos el parametro ID que pasamos por el url   
            const evento = currentEvent.value
            store.setCurrentEvent(id)
              //seleccionamos dentro de nuestro data el evento correspondiente al id que leimos en el url  

</script>

<template>
        <div class="d-flex justify-content-center p-5">
        <div  id="cardD" class="d-flex container justify-content-around">
            <div class="card flex-md-row flex-lg-row" >
                <img :src="evento.image"  class="border m-md-3 me-md-1 col-md-6 m-lg-3 me-lg-1 col-lg-6" alt="cinema">
                <div class="card-body d-flex flex-column border ms-lg-1 m-lg-3 align-items-center col-lg-6 ms-md-1 m-md-3 col-md-6 justify-content-between">
                    <div class ="nd-card w-100" >
                        <div class="d-flex justify-content-between ">
                            <h5 class="card-title fs-3">{{evento.name}}</h5>
                        </div>
                        <p class="fs-5">{{evento.category}}</p>
                        <p class="col-12 fs-6 flex-wrap">{{evento.description}}</p>
                        <div class="d-flex justify-content-between">
                            <p >Place: {{evento.place}}</p>
                            <p >Capacity: {{evento.capacity}}</p>
                            <p id="Assistance">Assistance/Estimate: {{evento.assistance || evento.estimate }} </p>
                        </div>
                    </div>
                    <div class="d-flex w-100 gap-3 justify-content-between footer-card">
                                <p class="fs-5 ">Price: ${{evento.price}}</p>
                                <a href="javascript:history.back()" class="btn btn-primary fs-5">Back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>