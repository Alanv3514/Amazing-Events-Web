const categoriesContainer=  document.getElementById("chkCategories"); // obtenemos el container para nuestros checkboxes
const searchInput = document.getElementById('search-input');//obtenemos el input de texto para el filtro buscador
const searchButton = document.getElementById('search-button');//obtenemos el input de boton para el filtro 
const cardContainer = document.getElementById('cardC');//obtenemos el container para las cards
let currentDate = new Date(data.currentDate);//guardamos la fecha actual del data
let htmlEvents = ""; //creamos una variable auxiliar.
let categoriasHtml="";//creamos una variable auxiliar.
let categorias =[];//creamos un array para guardar las categorias.

