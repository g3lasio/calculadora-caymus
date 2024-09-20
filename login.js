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

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Autenticación exitosa
            localStorage.setItem("isAuthenticated", "true");
            window.location.href = "index.html"; // Redirigir a la calculadora
        } else {
            // Mostrar mensaje de error
            errorMessage.textContent = "Usuario o contraseña incorrectos.";
            errorMessage.style.display = "block";
        }
    });
});