document.addEventListener("DOMContentLoaded", function () {
    // Comentamos o eliminamos la verificación de autenticación
    // if (localStorage.getItem("isAuthenticated") === "true") {
    //     window.location.href = "index.html";  // Redirigir a la calculadora
    //     return;
    // }

    // Comentamos o eliminamos la lógica de manejo del formulario
    // const loginForm = document.getElementById("loginForm");
    // loginForm.addEventListener("submit", function (e) {
    //     e.preventDefault();

    //     const users = [
    //         { username: "gelasio", password: "Sanchez" },
    //         { username: "jesus", password: "Lun@" },
    //         { username: "marcos", password: "Rodrigu3z" },
    //         { username: "paul", password: "Sim0n" },
    //         { username: "sandro", password: "Lin0" },
    //         { username: "bernabe", password: "Rodrigu3z" }
    //     ];

    //     const username = document.getElementById("username").value;
    //     const password = document.getElementById("password").value;
    //     const user = users.find(user => user.username === username && user.password === password);

    //     if (user) {
    //         // Autenticación exitosa
    //         localStorage.setItem("isAuthenticated", "true");
    //         window.location.href = "index.html";  // Redirigir a la calculadora
    //     } else {
    //         // Mostrar mensaje de error si la autenticación falla
    //         document.getElementById("errorMessage").textContent = "Username o password incorrectos";
    //     }
    // });
});
