# TP6 - Reflexión aplicada

## 1. ¿Cuál fue la opción de juego seleccionada?

    Se seleccionó la opción 4: Piedra, Papel o Tijera. El juego permite competir contra la computadora mediante elecciones aleatorias y registrar las partidas ganadas, empatadas y perdidas.

## 2. Código utilizado para guardar y recuperar el récord

    let record = Number(localStorage.getItem(claveRecord)) || 0;

    if (ganadas > record) {
        record = ganadas;
        localStorage.setItem(claveRecord, record);
    }

## 3. ¿Cómo se evitó que el usuario pudiera acceder fácilmente a las respuestas mediante la consola?

    Se utilizó una función autoejecutable para mantener las variables y funciones del juego dentro de un ámbito local. De esta manera, las variables no quedan disponibles directamente en el ámbito global de JavaScript. También se genera la elección de la computadora dentro de la función que procesa cada partida.