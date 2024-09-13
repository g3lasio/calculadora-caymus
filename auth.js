document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el usuario está autenticado
    if (!localStorage.getItem("authenticated")) {
        window.location.href = "login.html"; // Redirige a la página de login si no está autenticado
    }
});
