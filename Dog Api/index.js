function fetchData() {
    fetch("https://www.freetestapi.com/api/v1/dogs")
        .then((res) => res.json(res))
        .then((data) => {
            let store = data.map((e) => `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 py-2">
            <div class="card d-flex me-3 h-100">
                <img src=${e.image} alt=${e.name} class="card-img-top pt-2" style="object-fit: contain; max-width: 100%; max-height: 150px;">
                <div class="card-body">
                <h3 class="card-title">Name: ${e.name}</h3>
                <h3>Origin: ${e.origin}</h3>
                <p class="card-text"><strong>Description</strong>: ${e.description}</p>
                <p class="card-text"><strong>Breed Group</strong>: ${e.breed_group}</p>
                <p class="card-text"><strong>Size</strong>: ${e.size}</p>
                <p class="card-text"><strong>Lifespan</strong>: ${e.lifespan}</p>
                <p class="card-text"><strong>Temperament</strong>: ${e.temperament}</p>
                <p class="card-text"><strong>Colors</strong>: ${e.colors}</p>
                </div>
            </div>
        </div>

    `)

            document.getElementById("container").innerHTML = `
        <div class="row">
            ${store.join("")}
        </div>
    `
        })
        .catch((err) => console.log(err))
}
fetchData()
