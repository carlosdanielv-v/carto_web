document.addEventListener('DOMContentLoaded', function() {
    const botonMapa = document.getElementById('mostrarMapaBtn');
    const contenedorMapa = document.getElementById('contenedorMapa');
    const mensajeMapa = document.getElementById('mensajeMapa');

    let mapaInicializado = false;

    function inicializarMapaReal() {
        if (!mapaInicializado) {
            console.log("Simulando la inicialización de un mapa real...");
            mensajeMapa.textContent = "¡Mapa (placeholder) cargado!";
            mapaInicializado = true;
        }
    }

    botonMapa.addEventListener('click', function() {
        if (contenedorMapa.style.display === 'none' || contenedorMapa.style.display === '') {
            contenedorMapa.style.display = 'block';
            botonMapa.textContent = 'Ocultar Mapa';
            inicializarMapaReal();
        } else {
            contenedorMapa.style.display = 'none';
            botonMapa.textContent = 'Mostrar Mapa';
            mensajeMapa.textContent = 'El mapa ha sido ocultado.';
        }

        setTimeout(() => {
            mensajeMapa.textContent = '';
        }, 3000);
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});