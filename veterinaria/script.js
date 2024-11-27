// Función para mostrar mensaje de bienvenida en la página de inicio
function showWelcomeMessage() {
    alert("¡Bienvenido a Veterinaria Paws & Claws! Cuidamos de tus amigos peludos.");
}

// Agregar interactividad al formulario de contacto
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        document.getElementById("formMessage").innerText = `Gracias, ${nombre}. Nos pondremos en contacto contigo pronto.`;
        contactForm.reset();
    });
});
