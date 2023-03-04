const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const event = data.events.find(event => event._id ==id);
const div = document.getElementById("cardD");


div.innerHTML =
`<div class="card flex-md-row flex-lg-row" data-category="${event.category}">
<img src="${event.image}" height="300" class="border m-md-3 me-md-1 col-md-6 m-lg-3 me-lg-1 col-lg-6" alt="cinema">
<div class="card-body d-flex flex-column border ms-lg-1 m-lg-3 align-items-center col-lg-6 ms-md-1 m-md-3 col-md-6 justify-content-between">
    <div class ="">
    <h5 class="card-title p-2">${event.name}</h5>
    <p class="col-12">${event.description}</p>
    </div>
    <div class="d-flex w-75 gap-3 justify-content-between footer-card">
            <p>Price: $${event.price}</p>
            <a href="javascript:history.back()" class="btn btn-primary ">Back</a>
    </div>
</div>
</div>`

