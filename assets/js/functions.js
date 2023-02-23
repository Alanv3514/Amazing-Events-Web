
function printcard (image, name, description, price )
{
htmlEvents +=     `<div class="col-12 col-md-6 col-lg-3" >
<div class="card " >
<img src="${image}"width="94%" height="180" class="m-2" alt=""> 
    <div class="card-body d-flex flex-column align-items-center">
        <h3 class="card-title">${name}</h3>
        <p class="card-text">${description}</p>
        <div class="d-flex gap-5">
            <p>$${price}</p>
            <a href="./details.html" class="btn btn-primary ">Ver Mas</a>
        </div>
    </div>
</div>
</div>`;
}
