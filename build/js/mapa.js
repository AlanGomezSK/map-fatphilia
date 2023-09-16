
var map = L.map('map').setView([20.66787647268066, -103.34118385331277], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const antojitosMexicanos = document.getElementById("antojitosMexicanos")
const cafeteria = document.getElementById("cafeteria")
const hamburgesas = document.getElementById("hamburgesas")
const mariscos = document.getElementById("mariscos")
const pizzeria = document.getElementById("pizzeria")
const taqueria = document.getElementById("taqueria")
const cortes = document.getElementById("cortes")
const sushi = document.getElementById("sushi")
const hamYhotDog = document.getElementById("hamYhotDog")
const cocinaOriental = document.getElementById("cocinaOriental")
const bbqYAhu = document.getElementById("bbqYAhu")
const tortasAhogadas = document.getElementById("tortasAhogadas")
const menuderia = document.getElementById("menuderia")
const gusgeria = document.getElementById("gusgeria")
const hotDogs = document.getElementById("hotDogs")
const alitas = document.getElementById("alitas")
const panaderia = document.getElementById("panaderia")
const bar = document.getElementById("bar")
const nieves = document.getElementById("nieves")
const lonches = document.getElementById("lonches")
const munchie = document.getElementById("munchie")

const precio1 = document.getElementById("precio1")
const precio2 = document.getElementById("precio2")




let lightData = L.geoJSON(data,{
    onEachFeature: function (feature, layer) {
        const popupContent =
        `<img class = "estrellas" src="build/img/${feature.properties.imagen}.webp"><br>` +
        `<h1>${feature.properties.nombre}</h1><br>`+
        `<h2>${feature.properties.direccion} </h2>`+
        `<h3>Ticket promedio por persona:${feature.properties.ticket}</h3>`
        layer.bindPopup(popupContent)
    }}).addTo(map)

//console.log(lightData)
var markers = lightData.getLayers()
console.log(markers)
function filtrarMapa(){
    if(antojitosMexicanos.checked){
        for(i=0; i<=markers.length;i++){
            if(i == 1){
                console.log(".")
            }else{
                if(markers[i].feature.properties.tipo == "Cafeteria"){
                    lightData.removeLayer(lightData.getLayers()[i]._leaflet_id)
                }
            }
            
        }
    }else{
        console.log(markers)
        map.addLayer(lightData.getLayers()[0])
    }
}
/*
function filtrarMapa(){    
    const lightData = L.geoJSON(data,{
        onEachFeature: function (feature, layer) {
            const popupContent =
            `<img class = "estrellas" src="build/img/${feature.properties.imagen}.webp"><br>` +
            `<h1>${feature.properties.nombre}</h1><br>`+
            `<h2>${feature.properties.direccion} </h2>`+
            `<h3>Ticket promedio por persona:${feature.properties.ticket}</h3>`
            if(feature.properties.tipo == "Antojitos Mexicanos"){
                if(antojitosMexicanos.checked == true){
                    layer.addTo(map)
                    layer.bindPopup(popupContent)
                }
            }
    }})
}
*/

/*
xd = {
    "cordenada1":20.675532851484427,
    "cordenada2":-103.36712420501716,
    "imagen": '<img class = "estrellas" src="build/img/1.webp"><br>',
    "titulo" : '<h1>Gallo y toro</h1><br>',
    "direccion": "<h2> C. Pedro Moreno 1449, Col Americana</h2>",
    "ticket" : "<h3>Ticket Promedio por Persona: 320</h3>" 
}
var galloYToro = L.marker([xd.cordenada1, xd.cordenada2]).bindPopup(`${xd.imagen}${xd.titulo}${xd.direccion}${xd.ticket}`)
var cafePia = L.marker([20.689671187723356, -103.41464362832407]).bindPopup('<img class = "estrellas" src="build/img/2.webp"><br><h1>Cafe Pia</h1><br><h2>Av Naciones Unidas 6780-local 4, Loma Real</h2><h3>Ticket Promedio por Persona: 320</h3>')
var sanMateoRestaurant = L.marker([20.738891386637537, -103.3138941743286]).bindPopup('<img class = "estrellas" src="build/img/3.webp"><br><h1>San Mateo Restaurante</h1><br><h2>Volcán Zacapu 138, Huentitán El Bajo</h2><h3>Ticket Promedio por Persona: 150</h3>')
var shamBurgers = L.marker([20.708691558342494, -103.40645826268799]).bindPopup('<img class = "estrellas" src="build/img/3.webp"><br><h1>Sham Burgers</h1><br><h2>Av. Acueducto 4295-B, Colinas de San Javie</h2><h3>Ticket Promedio por Persona: 250</h3>')



*/

/*
/*grupos tipo de comida*/ 
/*
var antojitosMexicanosc = L.layerGroup([galloYToro])
var cafeteriac = L.layerGroup([cafePia])
var brunchc = L.layerGroup([sanMateoRestaurant])
var hamburgesasc = L.layerGroup([shamBurgers])
var mariscosc =L.layerGroup([])
var pizzeriac = L.layerGroup([])
var taqueriac = L.layerGroup([])
var cortesc = L.layerGroup([])
var sushic = L.layerGroup([])
var hamburgesasYHotDogsc = L.layerGroup([])
var cocinaOrientalc = L.layerGroup([])
var bbqYAhumadorc = L.layerGroup([])
var tortasAhogadasc = L.layerGroup([]) 
var menuderiac = L.layerGroup([])
var gusgeriac = L.layerGroup([])
var hotDogsc = L.layerGroup([])
var alitasc = L.layerGroup([])
var panaderia = L.layerGroup([])
var barc = L.layerGroup([])
var nievesc = L.layerGroup([])
var lonchesc = L.layerGroup([])
var munchiec =L.layerGroup([])
*/
/*gupos de precio */ 
/*
var muyBarato = L.layerGroup([]) 
var economico = L.layerGroup([antojitosMexicanosc,brunchc])
var precioModerado = L.layerGroup([cafeteriac])
var caro = L.layerGroup([])
*/

/*filtros*
const tiposDeFiltrosPorComida = document.getElementsByClassName("tipo_Defiltros-PorComida-filtro-input")
const tiposDeFiltrosPorTicket = document.getElementsByClassName("tipo_Defiltros-PorTicket-filtro-input")

tiposDeFiltrosPorComida[0].addEventListener('change',(event) =>{
    if (event.target.checked){
        antojitosMexicanosc.addTo(map)
    }
    else{
        antojitosMexicanosc.remove()
    }
})

tiposDeFiltrosPorComida[1].addEventListener('change',(event) =>{
    if (event.target.checked){
        cafeteriac.addTo(map)
    }
    else{
        cafeteriac.remove()
    }
})

tiposDeFiltrosPorComida[2].addEventListener('change',(event) =>{
    if (event.target.checked){
        brunchc.addTo(map)
    }
    else{
        brunchc.remove()
    }
})








/*Desactivar o activar filtros *
const filtroTipoComida = document.getElementsByClassName("tipo_Defiltros-PorComida-input")
const filtroTicketPersona = document.getElementsByClassName("tipo_Defiltros-PorTicket-input")

filtroTipoComida[0].defaultChecked = true
for(i=0; i < tiposDeFiltrosPorTicket.length; i++){
    tiposDeFiltrosPorTicket[i].disabled = true;
    tiposDeFiltrosPorTicket[i].cheked = false;
}

filtroTipoComida[0].addEventListener('change',(event) =>{
    if (event.target.checked == true){
        for(i=0; i < tiposDeFiltrosPorComida.length; i++){
            tiposDeFiltrosPorComida[i].disabled = false;
        }
        for(i=0; i < tiposDeFiltrosPorTicket.length; i++){
            tiposDeFiltrosPorTicket[i].disabled = true;
            tiposDeFiltrosPorTicket[i].checked = false;
        }
    }
})
filtroTicketPersona[0].addEventListener('change',(event) =>{
    if (event.target.checked == true){
        for(i=0; i < tiposDeFiltrosPorTicket.length; i++){
            tiposDeFiltrosPorTicket[i].disabled = false;
        }
        for(i=0; i < tiposDeFiltrosPorComida.length; i++){
            tiposDeFiltrosPorComida[i].disabled = true;
            tiposDeFiltrosPorComida[i].checked = false;
        }
        antojitosMexicanosc.remove()
        cafeteriac.remove()
        brunchc.remove()
    }
})

*/