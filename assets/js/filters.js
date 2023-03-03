let searchCategory = document.querySelectorAll("input[type='checkbox']")
console.log(searchCategory);

function filterCards() {
    const searchValue = searchInput.value.toLowerCase();
    let show = true;
    let selectedCategories = [];
    const cards = cardContainer.querySelectorAll('.card');

    for (let checkbox of searchCategory) {
        if (checkbox.checked) {
            selectedCategories.push(checkbox.value);
        }
    }
    cards.forEach(card => {
        const name = card.querySelector('.card-title').textContent.toLowerCase();
        const category = card.dataset.category;
        console.log(category)
        if (name.includes(searchValue)) {
            show = true;
        } else {
            show = false;
        }
        if (selectedCategories.length > 0 && !selectedCategories.includes(category)) {
            show = false;
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