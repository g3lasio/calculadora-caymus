document.addEventListener("DOMContentLoaded", function () {
    // Lista de usuarios autorizados
    const users = [
        { username: "gelasio", password: "Sanchez" },
        { username: "jesus", password: "Lun@" },
        { username: "marcos", password: "Rodrigu3z" },
        { username: "paul", password: "Sim0n" },
        { username: "sandro", password: "Lin0" },
        { username: "bernabe", password: "Rodrigu3z" }
    ];

    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");

    // Evento de envío del formulario
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value.trim(); // Eliminamos espacios adicionales
        const password = passwordInput.value.trim(); // Eliminamos espacios adicionales

        console.log("Verificando credenciales...");

        // Buscar usuario
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            console.log("Login correcto. Creando cookie de autenticación...");
            setAuthCookie("isAuthenticated", "true", 7); // Autenticación válida por 7 días
            window.location.href = "index.html"; // Redirigir a la página principal
        } else {
            // Mostrar error si las credenciales no coinciden
            console.log("Username o contraseña incorrectos.");
            errorMessage.textContent = "Username o contraseña incorrectos.";
            errorMessage.style.display = "block";
        }
    });

    // Función para crear una cookie con duración de 7 días
    function setAuthCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
        console.log(`Cookie creada: ${name}=${value}; Expires in: ${days} days`);
    }
});