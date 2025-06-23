        document.addEventListener('DOMContentLoaded', function() {
            const botonMapa = document.getElementById('mostrarMapaBtn');
            const contenedorMapa = document.getElementById('contenedorMapa');
            const mensajeMapa = document.getElementById('mensajeMapa');

           
            let mapaYaCargado = false;
            let leafletMap = null; 

            botonMapa.addEventListener('click', function() {
                if (contenedorMapa.style.display === 'none' || contenedorMapa.style.display === '') {
                    contenedorMapa.style.display = 'flex'; 
                    botonMapa.textContent = 'Ocultar Mapa';

                    if (!mapaYaCargado) {
                        
                        const link = document.createElement('link');
                        link.rel = 'stylesheet';
                        link.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
                        document.head.appendChild(link);

                        
                        const script = document.createElement('script');
                        script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
                        script.onload = function() {
                           
                            if (leafletMap) {
                                leafletMap.remove(); 
                            }
                            contenedorMapa.innerHTML = ''; 

                            leafletMap = L.map('contenedorMapa').setView([0, 0], 2); 

                            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            }).addTo(leafletMap);

                            
                            L.marker([-12.0464, -77.0428]).addTo(leafletMap)
                                .bindPopup('Lima, Perú');
                                
                            
                            mensajeMapa.textContent = "\xa1Mapa interactivo ha sido cargado con \u00E9xito!";
                            mapaYaCargado = true;
                        };
                        document.body.appendChild(script);

                    } else {
                       
                        mensajeMapa.textContent = "\xa1Mapa interactivo visible!";
                        if (leafletMap) {
                            leafletMap.invalidateSize(); 
                        }
                    }
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