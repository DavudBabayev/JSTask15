const name = document.querySelector(".name")
const category = document.querySelector(".cat")
const image = document.querySelector(".image")
const img = document.querySelector(".img")

document.querySelector('form').addEventListener("submit", function (event) {
    event.preventDefault()
    let obj = {}
    let src = image.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(src);
    reader.onload = function (e) {
        obj = {
            image: e.target.result,
            name: name.value,
            description: category.value
        }
        axios.post("http://localhost:3000/robots", obj)
    };
    window.location="./index.html"
})