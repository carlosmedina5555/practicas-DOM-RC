const titulo = document.getElementById("titulo")
const btnAnotar = document.getElementById("btn-anotar")
const opcDato = document.getElementById("opcionDato") 
const ingresosHTML = document.getElementById("ingresosHTML")
const egresosHTML = document.getElementById("egresosHTML")
const total = document.getElementById("total")
const monto = document.getElementById("monto")

let idUnico = 1

btnAnotar.addEventListener("click", function(e){
    e.preventDefault();
    addDato();
    ingresoHTML();
    egresoHTML();
    mostrarTotal();
})

function addDato(){
    if(opcDato.value === "ingreso"){
        ingresos.push(new Ingreso(titulo.value, +monto.value, Date.now(), idUnico++))
    } else if(opcDato.value === "egreso") {
        egresos.push(new Egreso(titulo.value, +monto.value, Date.now(), idUnico++))
    } 
}

function ingresoHTML(){
    let htmlIngresos = "";
    ingresos.forEach(function(Ingreso){
        htmlIngresos += `<div class="dato">
        <p>${Ingreso.titulo}</p>
        <p>$<span>${Ingreso.monto}</span></p>
        <button type=button  class="btn-dato" data-id= "${Ingreso.id}">X</button>
        </div>`
    })
    ingresosHTML.innerHTML = htmlIngresos;
    }


function egresoHTML(){
    let htmlEgreso = "";
    egresos.forEach(function(Egreso){
        htmlEgreso += `<div class="dato">
        <p>${Egreso.titulo}</p>
        <p>$<span>${Egreso.monto}</span></p>
        <button type=button  class="btn-dato" data-id= ${Egreso.id}>X</button>
        </div>`
    })
    egresosHTML.innerHTML = htmlEgreso;
    }
    
function mostrarTotal(){
    let totalIngresos = 0
    ingresos.forEach(function(ingreso){
        totalIngresos += ingreso.monto;
    })
    let totalEgresos = 0
    egresos.forEach(function(egreso){
        totalEgresos += egreso.monto;
    })
    total.value = totalIngresos - totalEgresos;
}

const botonDelete = document.querySelectorAll(".btn-dato")
botonDelete.forEach(boton => {
    boton.addEventListener("click", function(e) {
        const idItem = e.target.getAttribute("data-id");
        eliminarItem(idItem)
    })
})


function eliminarItem() {
    ingresos = ingresos.filter(ingreso => ingreso.id !== id);
    egresos = egresos.filter(egreso => egreso.id !== id)
    ingresoHTML();
    egresoHTML();
    mostrarTotal();
}
    