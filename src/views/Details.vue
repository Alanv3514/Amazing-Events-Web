<script src="../js/details.js"></script>

<template>
        <div class="d-flex justify-content-center p-5">
        <div  id="cardD" class="d-flex container justify-content-around">
            <div class="card flex-md-row flex-lg-row" :data-category="evento.category">
                <img :src="evento.image"  class="border m-md-3 me-md-1 col-md-6 m-lg-3 me-lg-1 col-lg-6" alt="cinema">
                <div class="card-body d-flex flex-column border ms-lg-1 m-lg-3 align-items-center col-lg-6 ms-md-1 m-md-3 col-md-6 justify-content-between">
                    <div class ="nd-card w-100" >
                        <div class="d-flex justify-content-between ">
                            <h5 class="card-title fs-3">{{evento.name}}</h5>
                            <p class="fs-6">{{evento.date}}</p>
                        </div>
                        <p class="fs-5">{{evento.category}}</p>
                        <p class="col-12 fs-6 flex-wrap">{{evento.description}}</p>
                        <div class="d-flex justify-content-between">
                            <p >Place: {{evento.place}}</p>
                            <p >Capacity: {{evento.capacity}}</p>
                            <p id="Assistance">Assistance: {{evento.assistance}}</p>
                            <p id="Estimate">Estimate: {{evento.estimate}}</p>
                        </div>
                    </div>
                    <div class="d-flex w-100 gap-3 justify-content-between footer-card">
                                <p class="fs-5 ">Price: $${{evento.price}}</p>
                                <a href="javascript:history.back()" class="btn btn-primary fs-5">Back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>