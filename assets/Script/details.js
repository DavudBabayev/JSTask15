const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    const scrolled = window.scrollY;

    if (scrolled > 50) {
        nav.style.background = "rgba(0, 0, 255, 0.7)";
    }
    else {
        nav.style.backgroundColor = "violet";
    }
});





let id = new URLSearchParams(window.location.search).get("id");

fetch(`http://localhost:3000/robots/${id}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.sec22').innerHTML += `
        <div class="card">
                <div class="img"><img src="${data.image}" alt=""></div>
                <div class="text">
                    <h5>${data.name}</h5>
                    <p>${data.description}</p>
                </div>
            </div>
        `
    });