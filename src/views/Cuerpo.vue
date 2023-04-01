<script setup>
import Cabecera from '@/components/Cabecera.vue'
import { useallEventListStore } from '../stores/allEventsStore.js';
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
const store = useallEventListStore()

const { texto, bckEvents, categorias, allEvents, selectCategorias } = storeToRefs(store)

const filteredEvents = computed(() => {
    store.filtroDoble(selectCategorias)
})
</script>

<template>

    {{ filteredEvents }}
    <Cabecera bckpage="./stats" nxtpage="./upcoming-events" />
    <nav class="navbar navbar-expand-lg bg-body-light pt-5 pb-5 pe-5 ps-2">
        <form class="d-flex container-fluid"  role="search" :@submit.prevent="filteredEvents">
            <div class="container-fluid">
                <fieldset class="d-flex">
                    <li v-for="category of categorias" class="nav-item me-3" style="list-style: none;">
                        <label><input v-model="store.$state.selectCategorias" type="checkbox" name="category" :id="category"
                                class="chkBoxes" :value="category"> {{ category }}</label>
                    </li>
                </fieldset>
            </div>
            <input v-model="texto" class="form-control me-2 mb-2" type="search" placeholder="Search" aria-label="Search"
            id="search-input" @keydown.enter.prevent="" ref="search-form">
            <!-- <button class="btn btn-secondary btn-outline-secondary mb-2 " type="button"><img src="../assets/img/lupa.png"
                    height="16" class="op-75" alt="" id="search-button"></button> -->
        </form>
    </nav>

    <div class="container pb-5">
        <div class="row g-3 " id="cardC">
            <div class="d-flex justify-content-center flex-wrap">
                <div v-for="event of allEvents" class=" col-12 col-md-6 col-lg-3 m-2">
                    <div class="card h-100 m-4 m-md-0 m-lg-0 " data-category="{{event.category}}">
                        <img :src="event.image" height="180" class="m-2" alt="">
                        <div class="card-body d-flex flex-column align-items-center justify-content-between">
                            <h3 class="card-title">{{ event.name }}</h3>
                            <p class="card-text">{{ event.description }}</p>
                            <div class="d-flex w-75 gap-3 justify-content-between">
                                <p>Price: ${{ event.price }}</p>
                                <router-link :to="{ path: '/details', query: { id: event._id } }"
                                    class="btn btn-primary "  @click='store.setCurrentEvent(event._id)'>Details</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

