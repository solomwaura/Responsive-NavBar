const btn = document.querySelector(".space");
const menu = document.querySelector(".nav-menu");


btn.addEventListener("click", ()=>{
    btn.classList.toggle("active");
    menu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click",()=>{
    btn.classList.remove("active");
    menu.classList.remove("active");
}))