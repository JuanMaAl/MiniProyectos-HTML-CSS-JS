const progreso = document.getElementById('progreso');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const circulos = document.querySelectorAll('.circulo');

let activoActual = 1;

siguiente.addEventListener('click', () => {
    activoActual++;

    if(activoActual > circulos.length) {
            activoActual = circulos.length;
    }

})

anterior.addEventListener('click', () => {
    activoActual--;

    if(activoActual < 1) {
            activoActual = 1;
    }

    actualizar();

})

