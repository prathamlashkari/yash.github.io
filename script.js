
const p = document.querySelector(".btnn")
const v = document.querySelector(".btny")
const img = document.querySelector(".image")


p.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * 100) + 1;
    let rand1 = Math.floor(Math.random() * 20) + 1;
    img.src = "images/sad.gif"
    p.style.left = `${rand}px`
    p.style.top = `${rand1}rem`
})

v.addEventListener('click', () => {
    img.src = "images/yes.gif"
})