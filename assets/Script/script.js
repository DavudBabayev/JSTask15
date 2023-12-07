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
function hideMenu() {
    menu.style.display = "none";
    document.querySelector(".modal-bg").style.display = "none";
}
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
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        hideMenu();
    }
});


///////FETCH///////
let page = 4
function showData() {
    fetch('http://localhost:3000/robots')
        .then(res => res.json())
        .then(data => {

            data.slice(page - 4, page).forEach(robot => {
                document.querySelector('.sec22').innerHTML += `
            <div class="card">
                    <div class="img"><img src="${robot.image}" alt=""></div>
                    <div class="text">
                        <h5>${robot.name}</h5>
                        <p>${robot.description}</p>
                        <a href="../details.html?id=${robot.id}"><button onclick="deleteData(${robot.id})"> VIEW DETAILS</button></a>
                        <button onclick="deleteRobot(${robot.id})">Delete</button>
                        <button onclick="edit(${robot.id})">Update</button>
                    </div>
                </div>
            `
            });
        });

};

showData()

document.querySelector(".loadBtn").addEventListener("click", () => {
    page += 4;
    showData();
    event.target.style.display = "none";
});

function deleteRobot(id) {
    axios.delete(`http://localhost:3000/robots/${id}`);
    window.location.reload();
};



///////////FORM-UPDATE//////////

const form = document.querySelector("form");
const closeFormButton = document.querySelector(".closeform");
const imgInp = document.querySelector(".image-input")
const formName = document.querySelector(".nameform")
const formCat = document.querySelector(".catform")

function edit(id) {
    form.style.display = "flex";
    closeFormButton.addEventListener("click", (e) => {
        e.preventDefault();
        form.style.display = "none";
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault()

        axios.get(`http://localhost:3000/robots/${id}`)
        let src = imgInp.files[0]
        const reader = new FileReader();

        reader.onload = function (e) {
            const obj = {
                name: formName.value,
                description: formCat.value,
                image: e.target.result
            }
            console.log(obj);
            axios.patch(`http://localhost:3000/robots/${id}`, obj)
        }
        reader.readAsDataURL(src);
    });
}