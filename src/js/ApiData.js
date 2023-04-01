let urlApi= 'https://mindhub-xj03.onrender.com/api/amazing';
let dato= [];

fetch(urlApi)
.then(response => response.json())
.then(data => {
    dato = data
    console.log("feched");
    
})
.catch(error => console.log(error.message))
export default dato;
