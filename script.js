document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        navbar.classList.toggle('active', window.scrollY > 0);
    });
    const scrollRevealOptions = {
        distance: '50px',
        origin: 'bottom',
        duration: 1000
    };
    ScrollReveal().reveal('.navbar', scrollRevealOptions);
    

    const listahabitaciones = document.getElementById("lista-habitaciones");
    const formulariohabitaciones = document.getElementById("formulario-habitaciones");

    let habitaciones = [
        { numero: 101, tipo: "Simple", precio: 80000, estado: "Disponible" },
        { numero: 102, tipo: "Doble", precio: 100000, estado: "Ocupada" },
        { numero: 103, tipo: "Suite", precio: 150000, estado: "Mantenimiento" },
    ];

    function mostrarHabitaciones() {
        listahabitaciones.innerHTML = "";
        habitaciones.forEach(habitacion => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
            <td>${habitacion.numero}</td>
            <td>${habitacion.tipo}</td>
            <td>${habitacion.precio}</td>
            <td>${habitacion.estado}</td>
            <td>
             <button onclick="editarHabitacion(${habitacion.numero})">Editar</button>
             <button onclick="borrarHabitacion(${habitacion.numero})">Eliminar</button>
            </td>`;
            listahabitaciones.appendChild(fila);
        });
    }

    window.editarHabitacion = function(habitacionnumero) {
        const habitacion = habitaciones.find(h => h.numero === habitacionnumero);
        if (habitacion) {
            document.getElementById("numero-habitacion").value = habitacion.numero;
            document.getElementById("tipo-habitacion").value = habitacion.tipo;
            document.getElementById("precio-habitacion").value = habitacion.precio;
            document.getElementById("estado-habitacion").value = habitacion.estado;
        }
    };

    window.borrarHabitacion = function(habitacionNumero) {
        habitaciones = habitaciones.filter(h => h.numero !== habitacionNumero);
        mostrarHabitaciones();
    };

    formulariohabitaciones.querySelector("form").addEventListener("submit", function(evento) {
        evento.preventDefault();
        const numero = parseInt(document.getElementById("numero-habitacion").value);
        const tipo = document.getElementById("tipo-habitacion").value;
        const precio = parseFloat(document.getElementById("precio-habitacion").value);
        const estado = document.getElementById("estado-habitacion").value;

        const indiceHabitacion = habitaciones.findIndex(h => h.numero === numero);
        if (indiceHabitacion !== -1) {
            habitaciones[indiceHabitacion] = { numero, tipo, precio, estado };
        } else {
            habitaciones.push({ numero, tipo, precio, estado });
        }
        formulariohabitaciones.querySelector("form").reset();
        mostrarHabitaciones();
    });

    mostrarHabitaciones();


    const listaTrabajadores = document.getElementById("lista-trabajadores");
    const formularioTrabajadores = document.getElementById("formulario-trabajadores");

    let trabajadores = [
        { id: 1, nombre: "Juan Pérez", cargo: "Recepcionista", ingreso: "08:00", egreso: "16:00" },
        { id: 2, nombre: "María López", cargo: "Limpieza", ingreso: "09:00", egreso: "17:00" },
        { id: 3, nombre: "Carlos Sánchez", cargo: "Seguridad", ingreso: "10:00", egreso: "18:00" },
    ];

    function mostrarTrabajadores() {
        listaTrabajadores.innerHTML = "";
        trabajadores.forEach(trabajador => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
            <td>${trabajador.id}</td>
            <td>${trabajador.nombre}</td>
            <td>${trabajador.cargo}</td>
            <td>${trabajador.ingreso}</td>
            <td>${trabajador.egreso}</td>
            <td>
                <button onclick="editarTrabajador(${trabajador.id})">Editar</button>
                <button onclick="borrarTrabajador(${trabajador.id})">Eliminar</button>
            </td>`;
            listaTrabajadores.appendChild(fila);
        });
    }

    window.editarTrabajador = function(trabajadorId) {
        const trabajador = trabajadores.find(t => t.id === trabajadorId);
        if (trabajador) {
            document.getElementById("id-trabajador").value = trabajador.id;
            document.getElementById("nombre-trabajador").value = trabajador.nombre;
            document.getElementById("cargo-trabajador").value = trabajador.cargo;
            document.getElementById("ingreso-trabajador").value = trabajador.ingreso;
            document.getElementById("egreso-trabajador").value = trabajador.egreso;
        }
    };

    window.borrarTrabajador = function(trabajadorId) {
        trabajadores = trabajadores.filter(t => t.id !== trabajadorId);
        mostrarTrabajadores();
    };

    formularioTrabajadores.querySelector("form").addEventListener("submit", function(evento) {
        evento.preventDefault();
        const id = parseInt(document.getElementById("id-trabajador").value);
        const nombre = document.getElementById("nombre-trabajador").value;
        const cargo = document.getElementById("cargo-trabajador").value;
        const ingreso = document.getElementById("ingreso-trabajador").value;
        const egreso = document.getElementById("egreso-trabajador").value;

        const indiceTrabajador = trabajadores.findIndex(t => t.id === id);
        if (indiceTrabajador !== -1) {
            trabajadores[indiceTrabajador] = { id, nombre, cargo, ingreso, egreso };
        } else {
            trabajadores.push({ id, nombre, cargo, ingreso, egreso });
        }
        formularioTrabajadores.querySelector("form").reset();
        mostrarTrabajadores();
    });

    mostrarTrabajadores();
});

  