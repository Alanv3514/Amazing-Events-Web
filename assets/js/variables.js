let categoriesContainer;// declaramos el container para nuestros checkboxes
let searchInput;//declaramos el input de texto para el filtro buscador
let searchButton;//declaramos el input de boton para el filtro 
let cardContainer; //declaramos el container para las cards
let currentDate;//declaramos la fecha actual del data
let searchCategory;//declaramos los elementos del dom que corresponden a los checkboxes
let msg; //declaramos el elemento del dom que corresponde a un mensaje predeterminado
const datajson = 'https://mindhub-xj03.onrender.com/api/amazing';
let htmlEvents = ""; //creamos una variable auxiliar.
let categoriasHtml="";//creamos una variable auxiliar.
let categorias =[];//creamos un array para guardar las categorias.

