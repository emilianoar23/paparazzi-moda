document.addEventListener('DOMContentLoaded', function () {
    let formulario = document.getElementById('formulario');
    let modal = document.getElementById('modal');
    let modalMensaje = document.getElementById('modal-mensaje');
    let modalCerrar = document.querySelector('.modal-cerrar');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        let nombre = document.getElementById('nombre').value.trim();
        let apellido = document.getElementById('apellido').value.trim();
        let email = document.getElementById('email').value.trim();
        let consulta = document.getElementById('consulta').value.trim();

        if (nombre === '' || apellido === '' || email === '' || consulta === '') {
            mostrarModal('Por favor, completa todos los campos.');
        } else {
            mostrarModal('¡Formulario enviado!');
        }
    });

    modalCerrar.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    function mostrarModal(mensaje) {
        modalMensaje.textContent = mensaje;
        modal.style.display = 'block';
    }
});