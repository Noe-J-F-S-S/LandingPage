document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registroForm");
    const slides = document.querySelectorAll(".carousel .slide");
    let currentSlide = 0;
    const totalSlides = slides.length;

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

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    window.moveSlide = function(n) {
        currentSlide = (currentSlide + n + totalSlides) % totalSlides;
        showSlide(currentSlide);
    };

    setInterval(() => {
        moveSlide(1);
    }, 5000); // Cambia de imagen cada 5 segundos
});