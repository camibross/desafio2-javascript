//parte 2 del desafio//

const inputSticker1 = document.getElementById('Sticker1');
const inputSticker2 = document.getElementById('Sticker2');
const inputSticker3 = document.getElementById('Sticker3');
const verificarBtn = document.getElementById('verificarBtn');
const resultadoParrafo = document.getElementById('resultado');


verificarBtn.addEventListener('click', function() {
    
    const cantidad1 = Number(inputSticker1.value) || 0;
    const cantidad2 = Number(inputSticker2.value) || 0;
    const cantidad3 = Number(inputSticker3.value) || 0;

    const totalStickers = cantidad1 + cantidad2 + cantidad3;

    if (totalStickers <= 10) {
        // La suma es menor o igual a 10
        resultadoParrafo.textContent = `Llevas ${totalStickers} stickers`;
        resultadoParrafo.style.color = 'green';
    } else {
        // La suma es mayor a 10
        resultadoParrafo.textContent = 'Llevas demasiados stickers';
        resultadoParrafo.style.color = 'red';
    }
});
