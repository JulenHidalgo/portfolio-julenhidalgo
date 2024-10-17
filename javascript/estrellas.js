// Función para generar un número aleatorio en un rango
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Función para crear estrellas aleatoriamente con el carácter "*"
function createStars(numStars) {
    // Obtener el ancho y la altura total del documento
    const documentHeight = document.documentElement.scrollHeight;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.textContent = '*';  // Agregar el carácter "*"

        // Posición aleatoria dentro de la altura y anchura del documento
        star.style.top = getRandomNumber(0, documentHeight) + 'px'; // Posición vertical aleatoria
        star.style.left = getRandomNumber(0, 98) + 'vw'; // Posición horizontal aleatoria

        // Tamaño aleatorio de las estrellas
        const size = getRandomNumber(10, 20) + 'px'; // Tamaño entre 10px y 20px
        star.style.fontSize = size;

        // Añadir la estrella al body
        document.body.appendChild(star);
    }
    
}

// Generar 150 estrellas (ajustar según lo que prefieras)
createStars(300);