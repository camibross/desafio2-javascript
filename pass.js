
/*buscamos a los elementos del Dom */

const select1 = document.getElementById('digito1');
const select2 = document.getElementById('digito2');
const select3 = document.getElementById('digito3');
const ingresarBtn = document.getElementById('ingresarBtn');
const resultadoParrafo = document.getElementById('resultado');

/**
 * Función para llenar un elemento <select> con opciones del 1 al 9.
 * @param {HTMLElement} selectElement - El elemento select que se va a llenar.
 */
function llenarSelect(selectElement) {
    // Agregar una opción por defecto
    let defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "---";
    defaultOption.disabled = true;
    defaultOption.selected = true; // Seleccionada por defecto
    selectElement.appendChild(defaultOption);

    // Agregar las opciones del 1 al 9
    for (let i = 1; i <= 9; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectElement.appendChild(option);
    }
}

// Llenar los tres select al cargar el script
llenarSelect(select1);
llenarSelect(select2);
llenarSelect(select3);


// 2. Lógica de verificación al hacer clic
ingresarBtn.addEventListener('click', function() {
    
    // Obtener los valores seleccionados y concatenarlos para formar la clave
    // Al usar .value, los valores son cadenas de texto (ej: "9", "1", "1")
    const claveIngresada = select1.value + select2.value + select3.value;
    
    // Verificar si se seleccionaron los 3 dígitos
    if (select1.value === "" || select2.value === "" || select3.value === "") {
        resultadoParrafo.textContent = 'Selecciona los 3 dígitos primero.';
        resultadoParrafo.style.color = 'orange';
        return; // Detiene la función si falta un dígito
    }

    // 3. Comparación de contraseñas y mostrar resultado
    if (claveIngresada === '911') {
        resultadoParrafo.textContent = 'password 1 correcto';
        resultadoParrafo.style.color = 'green';
    } else if (claveIngresada === '714') {
        resultadoParrafo.textContent = 'password 2 es correcto';
        resultadoParrafo.style.color = 'green';
    } else {
        resultadoParrafo.textContent = 'password incorrecto';
        resultadoParrafo.style.color = 'red';
    }
});