
<script src="../js/main"></script>
<template>
        <nav class="navbar navbar-expand-lg bg-body-light pt-5 pb-5 pe-5 ps-2">
            <form class="d-flex container-fluid" role="search">
                <div class="container-fluid">
                    <fieldset class="d-flex">
                        <li v-for="category of categorias"  class="nav-item me-3" style="list-style: none;">
                            <label><input  v-model="selectCategorias" type="checkbox" name="category" :id="category" class="chkBoxes" :value="category"> {{category}}</label>
                        </li>
                    </fieldset>
                </div>
                <input v-model="texto" class="form-control me-2 mb-2" type="search" placeholder="Search" aria-label="Search"
                    id="search-input">
                    {{filtroDoble}}
                <button class="btn btn-secondary btn-outline-secondary mb-2 " type="button"><img
                        src="./assets/img/lupa.png" height="16" class="op-75" alt="" id="search-button"></button>
            </form>
        </nav>
</template>