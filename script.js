const btn = document.querySelector(".num")
const content = document.querySelector(".tik-tok ")
const close = document.querySelector(".close")

btn.addEventListener("click",() => {
content.style.display = "block"
})
close.addEventListener("click",() => {
    content.style.display = "none"
})
