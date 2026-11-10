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

/* PIEDRA, PAPEL O TIJERA */


(function () {

    // Verificar que estamos en la página del juego
    const botonPiedra = document.getElementById(
        "btn-piedra-tiradomoreira-5676-19"
    );

    if (!botonPiedra) {
        return;
    }

    const botonPapel = document.getElementById(
        "btn-papel-tiradomoreira-5676-19"
    );

    const botonTijera = document.getElementById(
        "btn-tijera-tiradomoreira-5676-19"
    );

    const botonReiniciar = document.getElementById(
        "btn-reiniciar-tiradomoreira-5676-19"
    );

    const textoGanadas = document.getElementById("ganadas");
    const textoEmpatadas = document.getElementById("empatadas");
    const textoPerdidas = document.getElementById("perdidas");

    const textoRecord = document.getElementById("record");
    const textoUsuario = document.getElementById("jugada-usuario");
    const textoComputadora = document.getElementById(
        "jugada-computadora"
    );

    const mensajeResultado = document.getElementById(
        "mensaje-resultado"
    );

    const listaHistorial = document.getElementById("historial");

    // Opciones disponibles
    const opciones = ["Piedra", "Papel", "Tijera"];

    // Estadísticas de la sesión
    let ganadas = 0;
    let empatadas = 0;
    let perdidas = 0;

    // Clave personalizada para guardar el récord
    const claveRecord = "record-tiradomoreira-5676-19";

    // Recuperar récord guardado
    let record = Number(localStorage.getItem(claveRecord)) || 0;

    textoRecord.innerText = record + " victorias";

    // Función para actualizar las estadísticas
    function actualizarEstadisticas() {
        textoGanadas.innerText = ganadas;
        textoEmpatadas.innerText = empatadas;
        textoPerdidas.innerText = perdidas;
    }

    // Función para guardar y actualizar el récord
    function actualizarRecord() {

        if (ganadas > record) {
            record = ganadas;

            localStorage.setItem(claveRecord, record);

            textoRecord.innerText = record + " victorias";

        }
    }

    // Función principal del juego
    function jugar(eleccionUsuario) {

        // Elección aleatoria de la computadora
        const indiceAleatorio = Math.floor(
            Math.random() * opciones.length
        );

        const eleccionComputadora = opciones[indiceAleatorio];

        // Mostrar las elecciones
        textoUsuario.innerText = "Tu elección: " + eleccionUsuario;

        textoComputadora.innerText =
            "Elección de la computadora: " + eleccionComputadora;

        // Comparar las elecciones
        let resultado = "";

        if (eleccionUsuario === eleccionComputadora) {

            resultado = "¡Empate!";
            empatadas++;

        } else if (
            (eleccionUsuario === "Piedra" &&
                eleccionComputadora === "Tijera") ||

            (eleccionUsuario === "Papel" &&
                eleccionComputadora === "Piedra") ||

            (eleccionUsuario === "Tijera" &&
                eleccionComputadora === "Papel")
        ) {

            resultado = "¡Ganaste!";
            ganadas++;

        } else {

            resultado = "¡Perdiste!";
            perdidas++;

        }

        // Mostrar el resultado
        mensajeResultado.innerText = resultado;

        // Actualizar estadísticas y récord
        actualizarEstadisticas();
        actualizarRecord();

        // Registrar la partida en el historial
        const nuevaPartida = document.createElement("li");

        nuevaPartida.innerText =
            eleccionUsuario + " vs " +
            eleccionComputadora + " - " + resultado;

        listaHistorial.prepend(nuevaPartida);

        // Eliminar el mensaje inicial del historial
        if (listaHistorial.children.length > 10) {
            listaHistorial.removeChild(
                listaHistorial.lastElementChild
            );
        }

    }

    // Eventos de los botones
    botonPiedra.addEventListener("click", function () {
        jugar("Piedra");
    });

    botonPapel.addEventListener("click", function () {
        jugar("Papel");
    });

    botonTijera.addEventListener("click", function () {
        jugar("Tijera");
    });

    // Reiniciar la sesión
    botonReiniciar.addEventListener("click", function () {

        ganadas = 0;
        empatadas = 0;
        perdidas = 0;

        actualizarEstadisticas();

        textoUsuario.innerText = "Tu elección: -";

        textoComputadora.innerText =
            "Elección de la computadora: -";

        mensajeResultado.innerText =
            "¡Hacé tu primera jugada!";

        listaHistorial.innerHTML = "";

        const mensajeInicial = document.createElement("li");

        mensajeInicial.innerText =
            "Todavía no hay partidas registradas.";

        listaHistorial.appendChild(mensajeInicial);

        // El récord histórico se conserva
        textoRecord.innerText = record + " victorias";

    });

})();