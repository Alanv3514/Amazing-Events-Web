<script src="../js/stats.js"> </script>

<template>

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
                    <tr v-for="i in repetitions">
                        <td >{{HAevent[i].name}} : {{HAevent[i].pattendance.toFixed(2)}}%</td>
                        <td >{{LAevent[i].name}} : {{LAevent[i].pattendance.toFixed(2)}}%</td>
                        <td >{{eventos[i].name}} : {{eventos[i].capacity}}</td>
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