const menus = document.getElementsByClassName("navegador_principal-secciones")
const redes = document.getElementsByClassName("navegador_principal-redes")
const navegador = document.getElementsByClassName("navegador_principal")
const boton = document.getElementsByClassName("icon")

boton[0].addEventListener('click',() =>{
    navegador[0].classList.toggle('size')
})