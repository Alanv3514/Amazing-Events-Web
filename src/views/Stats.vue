<script setup>
import Cabecera from '@/components/Cabecera.vue' 
import {computed} from 'vue'
import { storeToRefs } from 'pinia';
import { useallEventListStore } from '../stores/allEventsStore'
const store= useallEventListStore()

const { currentDate, allEvents, HAevent, LAevent, CAPevent} = storeToRefs(store)
let eventos = allEvents.value
let rep=10;





const pastEvents = computed(() => {
    return eventos.filter(event => event.date<currentDate.value);
})

const futEvents = computed(() => {
    return eventos.filter(event => event.date>currentDate.value);
})
const pastCatStats = computed(() => {
        let pastArray = []
        pastEvents.value.forEach(event => {
        event.estimate = event.assistance;
        event.pattendance = (event.assistance / event.capacity * 100);
        let MontoRecaudado = event.price * event.assistance;//calculo el monto recaudado por el evento
        statsByCat(pastArray, event, MontoRecaudado, event.assistance, event.capacity, event.pattendance);
    }); 
        return pastArray                 
})
const futCatStats = computed(() => {
        let futArray = []
        futEvents.value.forEach(event => {
            event.assistance = event.estimate;
            event.pattendance = (event.assistance / event.capacity * 100);
            let MontoRecaudado = event.price * event.assistance;//calculo el monto recaudado por el evento
            statsByCat(futArray, event, MontoRecaudado, event.assistance, event.capacity, event.pattendance);
        
        }); 
        return futArray              
})


function statsByCat(eventArray,event, MontoRecaudado, Asistencias, Capacity, pattendance) {
            var index = eventArray.findIndex((filteredEvent) =>{
                return filteredEvent.nameCat === event.category;
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
        }
        // let HAevent=allEvents;
        // HAevent.sort(function (a, b) { return b.pattendance - a.pattendance; })
        // let LAevent=allEvents;
        // LAevent.sort(function (a, b) { return a.pattendance - b.pattendance; })
        // let CAPevent=allEvents;
        // CAPevent.sort(function (a, b) { return b.capacity - a.capacity; })
        // console.log(HAevent);


</script>

<template>
            <Cabecera bckpage="./contact" nxtpage="./"/>
        <div class="table-responsive pt-lg-5 pb-lg-5 pe-lg-5 ps-lg-2 me-lg-5 ms-lg-5" id="table-Stats">
            <table class="table table-bordered border-dark ">
                <thead>
                    <tr>
                        <th class="bg-body-secondary" colspan="3">Events Statistics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <th >Events with the highest percentage of attendance</th>
                        <th>Events with the lowest percentage of attendance</th>
                        <th>Events with larger capacity</th>
                    </tr>
                    <tr v-for="i in rep">
                        <td >{{HAevent[i].name}} : {{HAevent[i].pattendance.toFixed(2)}}%</td>
                        <td >{{LAevent[i].name}} : {{LAevent[i].pattendance.toFixed(2)}}%</td>
                        <td >{{CAPevent[i].name}} : {{CAPevent[i].capacity}}</td>
                    </tr>
                    <tr>
                        <th class="bg-body-secondary" colspan="3">Upcoming events statistics by category</th>
                    </tr>
                    <tr >
                        <th>Categories</th>
                        <th>Revenues</th>
                        <th>Percentage of attendance</th>
                    </tr>
                    <tr v-for="cat of futCatStats">
                        <td >{{cat.nameCat}}</td>
                        <td >${{cat.recaudado}}</td>
                        <td >{{cat.pAsistencias.toFixed(2)}}%</td>
                    </tr>
                    <tr>
                        <th class="bg-body-secondary" colspan="3">Past events statistics by category</th>
                    </tr>
                    <tr >
                        <th>Categories</th>
                        <th>Revenues</th>
                        <th>Percentage of attendance</th>
                    </tr>
                    <tr v-for="cat of pastCatStats">
                        <td >{{cat.nameCat}}</td>
                        <td >${{cat.recaudado}}</td>
                        <td >{{cat.pAsistencias.toFixed(2)}}%</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </template>