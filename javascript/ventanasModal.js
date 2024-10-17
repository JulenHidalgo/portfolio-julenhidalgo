var auziker = document.getElementById("modalAuziker");
var sign = document.getElementById("modalSign");
var cooking = document.getElementById("modalCooking");
var body = document.querySelector("body");
var botonesCerrar = document.querySelectorAll('.cerrar');

window.onclick = function (event) {
    if (event.target == auziker) {
        auziker.style.display = "none";
        body.style.overflow = "auto";
    }else if(event.target == sign){
        sign.style.display = "none";
        body.style.overflow = "auto";
    }else if(event.target == cooking){
        cooking.style.display = "none";
        body.style.overflow = "auto";
    }
}

function mostrarModalAuziker(){
    auziker.style.display = "flex";
    body.style.overflow = "hidden";
}
function mostrarModalSign(){
    sign.style.display = "flex";
    body.style.overflow = "hidden";
}
function mostrarModalCooking(){
    cooking.style.display = "flex";
    body.style.overflow = "hidden";
}

botonesCerrar.forEach(function (boton) {
    boton.addEventListener('click', function () {
        auziker.style.display = "none";
        sign.style.display = "none";
        cooking.style.display = "none";
        body.style.overflow = "auto";
    });
});