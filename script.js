console.log("Script cargado exitosamente");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const edad = document.getElementById("edad");
const direccion = document.getElementById("direccion");
const provincia = document.getElementById("provincia");
const codigoPostal = document.getElementById("codigo-postal");

// Celdas de la tabla de resumen
const resumenNombre = document.getElementById("resumen-nombre");
const resumenApellido = document.getElementById("resumen-apellido");
const resumenEmail = document.getElementById("resumen-email");
const resumenTelefono = document.getElementById("resumen-telefono");
const resumenEdad = document.getElementById("resumen-edad");
const resumenDireccion = document.getElementById("resumen-direccion");
const resumenProvincia = document.getElementById("resumen-provincia");
const resumenCP = document.getElementById("resumen-cp");
const resumenMetodo = document.getElementById("resumen-metodo-contacto");
const resumenSuscripciones = document.getElementById("resumen-suscripciones");

// Verificar que estamos en la página de contacto
if (nombre && resumenNombre) {

    // Función para actualizar la tabla
    function actualizarResumen() {
        resumenNombre.innerText = nombre.value;
        resumenApellido.innerText = apellido.value;
        resumenEmail.innerText = email.value;
        resumenTelefono.innerText = telefono.value;
        resumenDireccion.innerText = direccion.value;
        resumenProvincia.innerText = provincia.value;
        resumenCP.innerText = codigoPostal.value;

        // Verificar la edad
        const valorEdad = edad.value;

        if (valorEdad !== "" && Number(valorEdad) < 18) {
            resumenEdad.innerText = valorEdad + " (Menor de edad)";
            resumenEdad.style.backgroundColor = "#ffcccc";
        } else {
            resumenEdad.innerText = valorEdad;
            resumenEdad.style.backgroundColor = "";
        }

        // Obtener el método de contacto seleccionado
        const metodoSeleccionado = document.querySelector(
            'input[name="metodo-contacto"]:checked'
        );

        resumenMetodo.innerText = metodoSeleccionado
            ? metodoSeleccionado.value
            : "";

        // Obtener las suscripciones seleccionadas
        const suscripcionesSeleccionadas = document.querySelectorAll(
            'input[name="suscripciones"]:checked'
        );

        const suscripciones = [];

        suscripcionesSeleccionadas.forEach(function (opcion) {
            suscripciones.push(opcion.value);
        });

        resumenSuscripciones.innerText = suscripciones.join(", ");
    }

    // Eventos input para los campos de texto y números
    nombre.addEventListener("input", actualizarResumen);
    apellido.addEventListener("input", actualizarResumen);
    email.addEventListener("input", actualizarResumen);
    telefono.addEventListener("input", actualizarResumen);
    edad.addEventListener("input", actualizarResumen);
    direccion.addEventListener("input", actualizarResumen);
    codigoPostal.addEventListener("input", actualizarResumen);

    // Evento change para provincia
    provincia.addEventListener("change", actualizarResumen);

    // Eventos change para método de contacto y suscripciones
    document.querySelectorAll(
        'input[name="metodo-contacto"]'
    ).forEach(function (opcion) {
        opcion.addEventListener("change", actualizarResumen);
    });

    document.querySelectorAll(
        'input[name="suscripciones"]'
    ).forEach(function (opcion) {
        opcion.addEventListener("change", actualizarResumen);
    });

    // Mostrar los valores iniciales
    actualizarResumen();
}


// BOTÓN LEER MÁS / LEER MENOS

const botonLeerMas = document.getElementById(
    "btn-leer-mas-tiradomoreira-5676-19"
);

const cvCompleto = document.querySelector(".cv-completo");

// Verificar que estamos en la página Acerca de
if (botonLeerMas && cvCompleto) {

    botonLeerMas.addEventListener("click", function () {

        if (window.getComputedStyle(cvCompleto).display === "none") {

            cvCompleto.style.display = "block";
            botonLeerMas.innerText = "Leer menos";

        } else {

            cvCompleto.style.display = "none";
            botonLeerMas.innerText = "Leer más";

        }

    });

}