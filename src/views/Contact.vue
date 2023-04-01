<script setup>import Cabecera from '@/components/Cabecera.vue'</script>
<template>
                <Cabecera bckpage="./past-events" nxtpage="./stats"/>
        <form class="d-flex flex-column align-items-center pt-5 pb-5 pe-5 ps-2">
            <div class="mb-3">
                <label for="InputName" class="form-label">Name: </label>
                <input type="text" class="form-control" id="InputName" aria-describedby="InputName">
            </div>
            <div class="mb-3">
                <label for="InputEmail1" class="form-label">Email:</label>
                <input type="email" class="form-control" id="InputEmail1" aria-describedby="InputEmail1">
            </div>
            <div class="mb-3">
                <label for="InputText" class="form-label">Messagge:</label>
                <textarea class="form-control" name="InputText" id="InputText" cols="22"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </template>