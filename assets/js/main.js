const categories = new Set();

    fetch(datajson)

    .then(response => { return response.json() })
    .then(data => {

        console.log(data)
        for (let event of data.events) {
            let currentDate = new Date(data.currentDate);
            let eventDate = new Date(event.date);
            generateCardss(event.image, event.name, event.description, event.price);

            categories.add(event.category);

        };
        tarjetai.innerHTML = htmlEvents;

        const categoriesArray = Array.from(categories);


    })


