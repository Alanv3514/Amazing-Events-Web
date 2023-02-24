
function printcard (image, name, description, price )
{
htmlEvents +=     `<div class="col-12 col-md-6 col-lg-3 " >
<div class="card h-100" >
<img src="${image}" height="180" class="m-2" alt=""> 
    <div class="card-body d-flex flex-column align-items-center justify-content-between">
        <h3 class="card-title">${name}</h3>
        <p class="card-text">${description}</p>
        <div class="d-flex w-75 gap-5 justify-content-between">
            <p>$${price}</p>
            <a href="./details.html" class="btn btn-primary ">Ver Mas</a>
        </div>
    </div>
</div>
</div>`;
}
