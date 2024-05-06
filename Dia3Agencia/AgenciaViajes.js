let persona = [];

function recoger() {
    let nombre = document.getElementById('nombre').value;
    let origen = document.getElementById('origen').value;
    let destino = document.getElementById('destino').value;
    let num_personas = document.getElementById('num_personas').value;
    let fecha_ida = document.getElementById('fecha_ida').value;
    let fecha_vuelta = document.getElementById('fecha_vuelta').value;

    let solicitud = {
        "nombre": nombre,
        "origen": origen,
        "destino": destino,
        "numPersonas": num_personas,
        "fechaIda": fecha_ida,
        "fechaVuelta": fecha_vuelta
    };
    persona.push(solicitud)
    console.log(persona); 
}

function filtrar() {
    let solicitudesFiltradas = [];

    for (let i = 0; i < persona.length; i++) {
        let destino = persona[i].destino.toLowerCase();
        if (destino === 'canarias' || destino === 'mallorca' || destino === 'galicia') {
            solicitudesFiltradas.push(persona[i]);
        } else {
            solicitudesFiltradas.push("destino no es canarias, mallorca ni galicia");
        }
    }

    console.log(solicitudesFiltradas);
}
