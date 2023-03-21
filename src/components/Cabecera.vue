<script setup>

</script>

<template>
    <div class="bar">
        <nav class="navbar navbar-expand-lg bg-body-secondary border-bottom">
            <div class="container-fluid d-flex align-items-center justify-content-center">

                <a class="navbar-brand w25 p-3 " href="#"><img src="../assets/img/img_logo.png" alt="a-events logo"></a>
                <div class="container-fluid"></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-4 align-items-center justify-content-end w25">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/upcoming-events">Upcoming Events</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/past-events">Past Events</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/stats">Stats</router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div class="bar2 d-flex flex-row justify-content-between border-bottom p-5 bg-body-tertiary">
        <div class="bar_backbutton bar_button">
                <img src="../assets/img/back.png" @click="$router.go(-1)" alt="Back">
        </div>
        <div class="bar_pageTitle">
            <h2>Home</h2>
        </div>
        <div class="bar_nextbutton bar_button">
                <img src="../assets/img/next.png" @click="$router.go(+1)" alt="Next">
        </div>
    </div>
</template>
        