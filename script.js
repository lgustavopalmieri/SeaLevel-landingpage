var hamburguer = document.querySelector(".hamburguer")
var mobileMenu = document.querySelector(".menu-mobile")

var activate = () => {
    mobileMenu.classList.toggle('active')
} 

    

hamburguer.addEventListener("click",activate)

function aliens(){
    const aliensBorn = document.querySelector('#aliens-born')
    
    

    setInterval(() => {
        let number = Math.floor(Math.random()*10)
        let numbers = Math.floor(Math.random()*10)
        aliensBorn.innerHTML = '1564898321754'+number + '124357623' + numbers
        
    },1000)
    
    
}

aliens()


