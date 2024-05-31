document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registroForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;

        if (validateEmail(email)) {
            alert(`Gracias por registrarte, ${nombre}! Te hemos enviado un correo a ${email}.`);
        } else {
            alert('Por favor, introduce un correo electrónico válido.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});