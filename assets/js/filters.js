let searchCategory = document.querySelectorAll("input[type='checkbox']")
let msg = document.getElementById('voidMsg');
console.log(searchCategory);

function filterCards() {

    const searchValue = searchInput.value.toLowerCase();
    let show = false;
    let selectedCategories = [];
    const cards = cardContainer.querySelectorAll('.card');
    
    let longCards=cards.length;


    for (let checkbox of searchCategory) {
        if (checkbox.checked) {
            selectedCategories.push(checkbox.value);
        }
    }
    cards.forEach(card => {
        const name = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-text').textContent.toLowerCase();
        const category = card.dataset.category;
        
        if (name.includes(searchValue) || description.includes(searchValue)) {
            show = true;
        } else {
            show = false;
            longCards--;
        }
        if (selectedCategories.length > 0 && !selectedCategories.includes(category)) {
            
            show = false;
        }
        console.log(longCards);
        if(longCards<=0){
            msg.classList.remove("oculto");

        }
        else{
            msg.classList.add("oculto");
        }
        
        card.style.display = show ? 'flex' : 'none';
        card.parentElement.style.display = show ? 'flex' : 'none';
    });
}


searchButton.addEventListener('click', filterCards);
searchInput.addEventListener('input', filterCards);

for (let checkbox of searchCategory) {
    checkbox.addEventListener('change',filterCards)
}

