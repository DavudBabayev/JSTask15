let id = new URLSearchParams(window.location.search).get("id");

let sec = document.querySelector("section")

fetch(`http://localhost:3000/robots/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
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
        sec.appendChild(card);
    })