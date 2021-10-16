var hamburguer = document.querySelector(".hamburguer")
var mobileMenu = document.querySelector(".menu-mobile")

var activate = () => {
    mobileMenu.classList.toggle('active')
} 

hamburguer.addEventListener("click",activate)