# TP5 - Reflexión aplicada: JavaScript y manipulación del DOM

## 1. Código utilizado para validar la edad

    const valorEdad = edad.value;

    if (valorEdad !== "" && Number(valorEdad) < 18) {
        resumenEdad.innerText = valorEdad + " (Menor de edad)";
        resumenEdad.style.backgroundColor = "#ffcccc";
    } else {
        resumenEdad.innerText = valorEdad;
        resumenEdad.style.backgroundColor = "";
    }

## 2. ¿Por qué se utilizó el evento input en lugar de change?

    Se utilizó el evento input porque permite detectar cada modificación que realiza el usuario mientras escribe en un campo. En cambio, el evento change generalmente se ejecuta cuando el usuario termina de modificar el valor y confirma el cambio, por ejemplo, al salir del campo. Por eso, input permite actualizar la tabla en tiempo real.

## 3. ¿Cómo se evitó que el código genere errores en otras páginas?

    Se utilizaron condiciones para verificar que los elementos existan antes de ejecutar las funciones. Por ejemplo, antes de trabajar con el formulario se comprueba que exista el campo de nombre y su celda de resumen. De esta manera, el código específico de cada página solamente se ejecuta cuando encuentra los elementos correspondientes, evitando errores por referencias nulas (null).desplazamiento.
