var auziker = document.getElementById("modalAuziker");
var sign = document.getElementById("modalSign");
var cooking = document.getElementById("modalCooking");
var g5 = document.getElementById("modalG5");
var body = document.querySelector("body");
var botonesCerrar = document.querySelectorAll('.cerrar');

window.onclick = function (event) {
    if (event.target == auziker) {
        auziker.style.display = "none";
        body.style.overflow = "auto";
    } else if (event.target == sign) {
        sign.style.display = "none";
        body.style.overflow = "auto";
    } else if (event.target == cooking) {
        cooking.style.display = "none";
        body.style.overflow = "auto";
    } else if (event.target == g5) {
        g5.style.display = "none";
        body.style.overflow = "auto";
    }
}

function mostrarModalAuziker() {
    auziker.style.display = "flex";
    body.style.overflow = "hidden";
}
function mostrarModalSign() {
    sign.style.display = "flex";
    body.style.overflow = "hidden";
}
function mostrarModalCooking() {
    cooking.style.display = "flex";
    body.style.overflow = "hidden";
}
function mostrarModalG5() {
    g5.style.display = "flex";
    body.style.overflow = "hidden";
}

function cerrarModal() {
    auziker.style.display = "none";
    sign.style.display = "none";
    cooking.style.display = "none";
    g5.style.display = "none";
    body.style.overflow = "auto";
}

botonesCerrar.forEach(function (boton) {
    boton.addEventListener('click', cerrarModal());
});

document.addEventListener("keydown", function (event) {
    // Verifica si la tecla presionada es Escape
    if (event.key === "Escape") {
        cerrarModal(); // Ejecuta el método
    }
});