const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    const scrolled = window.scrollY;

    if (scrolled > 50) {
        nav.style.background = "rgba(0, 0, 255, 0.7)";
    }
    else {
        nav.style.backgroundColor = "transparent";
    }
});

const menu = document.querySelector(".modal-menu");
document.querySelector("#click").addEventListener('click', (event) => {
    event.preventDefault();
    menu.style.display = "block";
    document.querySelector(".modal-bg").style.display = "block";
});
document.querySelector(".close").addEventListener('click', () => {
    menu.style.display = "none";
    document.querySelector(".modal-bg").style.display = "none";
});
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== document.querySelector("#click")) {
        menu.style.display = "none";
        document.querySelector(".modal-bg").style.display = "none";
    }
});


///////FETCH///////

fetch('http://localhost:3000/robots')
    .then(res => res.json())
    .then(data => {
        const robotCardsContainer = document.querySelector('.sec22');

        data.forEach(robot => {
            const card = document.createElement('div');
            card.classList.add('card');

            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img');
            const img = document.createElement('img');
            img.src = robot.image;
            img.alt = '';
            imgDiv.appendChild(img);

            const textDiv = document.createElement('div');
            textDiv.classList.add('text');
            const h5 = document.createElement('h5');
            h5.textContent = robot.name;
            const p = document.createElement('p');
            p.textContent = robot.description;
            const button = document.createElement('button');
            button.textContent = 'VIEW Details';

            textDiv.appendChild(h5);
            textDiv.appendChild(p);
            textDiv.appendChild(button);

            card.appendChild(imgDiv);
            card.appendChild(textDiv);

            robotCardsContainer.appendChild(card);
        });
    })