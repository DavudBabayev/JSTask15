let id = new URLSearchParams(window.location.search).get("id");

fetch(`http://localhost:3000/robots/${id}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('section').innerHTML += `
        <div class="card">
                <div class="img"><img src="${data.image}" alt=""></div>
                <div class="text">
                    <h5>${data.name}</h5>
                    <p>${data.description}</p>
                </div>
            </div>
        `
    });