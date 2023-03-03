const datajson = './assets/js/data.json';
const categoriesContainer=  document.getElementById("chkCategories")
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const cardContainer = document.getElementById('cardC');

let htmlEvents = "";
let categoriasHtml="";
let categorias =[];
let flag = false;