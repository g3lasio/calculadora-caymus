// Eliminar o comentar la verificación de login en localStorage
document.addEventListener("DOMContentLoaded", function () {
    // Verificación de usuario eliminada para acceso directo a la calculadora

    // Acceso directo a la calculadora sin login
    document.getElementById("calcularBtn").addEventListener("click", calcular);

    // Configurar el atributo data-text para el efecto de glitch en el título
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.setAttribute('data-text', titulo.textContent);
    }

    // Configuración del buscador de tanques
    const buscarTanqueInput = document.getElementById("buscarTanque");
    const tanqueSelect = document.getElementById("tanque");

    // Evento para sincronizar la búsqueda con el selector
    buscarTanqueInput.addEventListener("input", function () {
        const busqueda = this.value.toUpperCase();
        let encontrado = false;

        // Recorrer todas las opciones del selector
        for (let i = 0; i < tanqueSelect.options.length; i++) {
            const opcion = tanqueSelect.options[i];

            // Si la opción comienza con el texto buscado
            if (opcion.value.toUpperCase().startsWith(busqueda)) {
                tanqueSelect.selectedIndex = i;
                encontrado = true;
                break;
            }
        }

        // Si no se encontró coincidencia, mantener la selección actual
        if (!encontrado && busqueda.length > 0) {
            buscarTanqueInput.classList.add("no-match");
        } else {
            buscarTanqueInput.classList.remove("no-match");
        }
    });

    // Sincronizar el selector con el campo de búsqueda
    tanqueSelect.addEventListener("change", function () {
        buscarTanqueInput.value = this.value;
        buscarTanqueInput.classList.remove("no-match");
    });
});

// Elimina este segundo bloque redundante si ya tienes el primer bloque activado
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("calcularBtn").addEventListener("click", calcular);
// });

const tankData = {
    "BL1": { "GALS_PER_INCH": 82.74, "GALS_IN_TOP": 373.56, "TOP_INCHES": 24.15, "TOTAL_GALS": 16239.42 },
    "BL2": { "GALS_PER_INCH": 82.74, "GALS_IN_TOP": 373.56, "TOP_INCHES": 24.15, "TOTAL_GALS": 16239.42 },
    "BL3": { "GALS_PER_INCH": 82.74, "GALS_IN_TOP": 373.56, "TOP_INCHES": 24.15, "TOTAL_GALS": 16239.42 },
    "BL4": { "GALS_PER_INCH": 82.74, "GALS_IN_TOP": 373.56, "TOP_INCHES": 24.15, "TOTAL_GALS": 16239.42 },
    "BR1": { "GALS_PER_INCH": 107.73, "GALS_IN_TOP": 478.88, "TOP_INCHES": 24.25, "TOTAL_GALS": 19523.87 },
    "BR2": { "GALS_PER_INCH": 107.73, "GALS_IN_TOP": 478.88, "TOP_INCHES": 24.25, "TOTAL_GALS": 19523.87 },
    "BR3": { "GALS_PER_INCH": 107.73, "GALS_IN_TOP": 478.88, "TOP_INCHES": 24.25, "TOTAL_GALS": 19523.87 },
    "A1": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A2": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A3": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A4": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A5": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A6": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A7": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A8": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A9": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A10": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A11": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A12": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A13": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A14": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "A15": { "GALS_PER_INCH": 173.0, "GALS_IN_TOP": 1581.0, "TOP_INCHES": 34, "TOTAL_GALS": 52531.2 },
    "B1": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "B2": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "B3": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "B4": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "B5": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "B6": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "B7": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "B8": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "B9": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "C1": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "C2": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "C3": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "C4": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "C5": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "C6": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "C7": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "C8": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "C9": { "GALS_PER_INCH": 105.325, "GALS_IN_TOP": 916.9, "TOP_INCHES": 41, "TOTAL_GALS": 26051.88 },
    "D1": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "D2": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "D3": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "D4": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "D5": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "D6": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "D7": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "D8": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "D9": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "D10": { "GALS_PER_INCH": 99.55, "GALS_IN_TOP": 636, "TOP_INCHES": 29, "TOTAL_GALS": 24734 },
    "D11": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "D12": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "D13": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "D14": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "D15": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "D16": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "D17": { "GALS_PER_INCH": 99.55, "GALS_IN_TOP": 636, "TOP_INCHES": 29, "TOTAL_GALS": 24734 },
    "E1": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "E2": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "E3": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "E4": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "E5": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "E6": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "E7": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "E8": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "E9": { "GALS_PER_INCH": 106.378, "GALS_IN_TOP": 897.904, "TOP_INCHES": 40.90, "TOTAL_GALS": 32932 },
    "E10": { "GALS_PER_INCH": 99.55, "GALS_IN_TOP": 636, "TOP_INCHES": 29, "TOTAL_GALS": 24734 },
    "E11": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "E12": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "E13": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "E14": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "E15": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "E16": { "GALS_PER_INCH": 99.737, "GALS_IN_TOP": 652, "TOP_INCHES": 28.50, "TOTAL_GALS": 33212 },
    "E17": { "GALS_PER_INCH": 99.55, "GALS_IN_TOP": 636, "TOP_INCHES": 29, "TOTAL_GALS": 24734 },
    "F1": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F2": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F3": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F4": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F5": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F6": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F7": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F8": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F9": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F10": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F11": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F12": { "GALS_PER_INCH": 44.678, "GALS_IN_TOP": 263.282, "TOP_INCHES": 19.90, "TOTAL_GALS": 6561.717 },
    "F13": { "GALS_PER_INCH": 39.7, "GALS_IN_TOP": 250, "TOP_INCHES": 18.50, "TOTAL_GALS": 5400 },
    "F14": { "GALS_PER_INCH": 53.8, "GALS_IN_TOP": 350, "TOP_INCHES": 18.50, "TOTAL_GALS": 7346 },
    "F15": { "GALS_PER_INCH": 53.8, "GALS_IN_TOP": 350, "TOP_INCHES": 18.50, "TOTAL_GALS": 7346 },
    "F16": { "GALS_PER_INCH": 53.8, "GALS_IN_TOP": 350, "TOP_INCHES": 18.50, "TOTAL_GALS": 7346 },
    "F17": { "GALS_PER_INCH": 53.8, "GALS_IN_TOP": 350, "TOP_INCHES": 18.50, "TOTAL_GALS": 7346 },
    "F18": { "GALS_PER_INCH": 43.6, "GALS_IN_TOP": 250, "TOP_INCHES": 17, "TOTAL_GALS": 5440 },
    "F19": { "GALS_PER_INCH": 43.6, "GALS_IN_TOP": 250, "TOP_INCHES": 17, "TOTAL_GALS": 5440 },
    "F20": { "GALS_PER_INCH": 43.6, "GALS_IN_TOP": 250, "TOP_INCHES": 17, "TOTAL_GALS": 5440 },
    "F21": { "GALS_PER_INCH": 43.6, "GALS_IN_TOP": 250, "TOP_INCHES": 17, "TOTAL_GALS": 5440 },
    "F22": { "GALS_PER_INCH": 43.6, "GALS_IN_TOP": 250, "TOP_INCHES": 17, "TOTAL_GALS": 5440 },
    "F23": { "GALS_PER_INCH": 43.6, "GALS_IN_TOP": 250, "TOP_INCHES": 17, "TOTAL_GALS": 5440 },
    "G1": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G2": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G3": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G4": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G5": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G6": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G7": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G8": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G9": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G10": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G11": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G12": { "GALS_PER_INCH": 48.8, "GALS_IN_TOP": 238.6, "TOP_INCHES": 16, "TOTAL_GALS": 7112 },
    "G13": { "GALS_PER_INCH": 59.24, "GALS_IN_TOP": 350, "TOP_INCHES": 12, "TOTAL_GALS": 8700 },
    "G14": { "GALS_PER_INCH": 59.24, "GALS_IN_TOP": 350, "TOP_INCHES": 12, "TOTAL_GALS": 8700 },
    "G15": { "GALS_PER_INCH": 59.24, "GALS_IN_TOP": 350, "TOP_INCHES": 12, "TOTAL_GALS": 8700 },
    "H1": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "H2": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "H3": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "H4": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "H5": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "H6": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "H7": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "I1": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "I2": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "I3": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "I4": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "I5": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "I6": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "I7": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "J1": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "J2": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "J3": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "J4": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "J5": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "J6": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "J7": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "K1": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "K2": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "K3": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "K4": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "K5": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "K6": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 },
    "K7": { "GALS_PER_INCH": 440.64, "GALS_IN_TOP": 7551.57, "TOP_INCHES": 58.25, "TOTAL_GALS": 161555 }
};
function calcular() {
    const tanque = document.getElementById("tanque").value;
    const calculo = document.getElementById("calculo").value;
    const input = parseFloat(document.getElementById("input").value);
    const data = tankData[tanque];
    let resultado = 0;
    let unidad = "";

    if (!data || isNaN(input)) {
        resultado = "Entrada inválida o tanque no encontrado.";
    } else if (calculo === "galones") {
        const espacioEnPulgadas = input;
        const galonesEnCuerpo = (espacioEnPulgadas - data.TOP_INCHES) * data.GALS_PER_INCH;
        const galonesTotales = galonesEnCuerpo + data.GALS_IN_TOP;
        resultado = data.TOTAL_GALS - galonesTotales;
        unidad = " Galones";
    } else if (calculo === "pulgadas") {
        const galonesDeseados = input;
        const galonesEspacio = data.TOTAL_GALS - galonesDeseados;
        if (galonesEspacio <= data.GALS_IN_TOP) {
            resultado = galonesEspacio / data.GALS_PER_INCH;
        } else {
            const galonesCuerpo = galonesEspacio - data.GALS_IN_TOP;
            const pulgadasCuerpo = galonesCuerpo / data.GALS_PER_INCH;
            resultado = pulgadasCuerpo + data.TOP_INCHES;
        }
        unidad = " Pulgadas";
    }

    document.getElementById("resultadoTexto").innerText = typeof resultado === "number" ? resultado.toFixed(2) + unidad : resultado;
}
