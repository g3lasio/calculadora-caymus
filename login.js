document.addEventListener("DOMContentLoaded", function() {
    // Check if user is already logged in
    if (localStorage.getItem("authenticated")) {
        window.location.href = "index.html"; // Redirect to the main page if already logged in
    }

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Predefined list of authorized users
        const authorizedUsers = [
            { username: "gelasio", password: "Sanchez" },
            { username: "jesus", password: "Lun@" },
            { username: "marcos", password: "Rodrigu3z" },
            { username: "paul", password: "Sim0n" },
            { username: "sandro", password: "Lin0" },
            { username: "bernabe", password: "Rodrigu3z" }
        ];
        const user = authorizedUsers.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem("authenticated", true);
            window.location.href = "index.html"; // Redirect to the main page after successful login
        } else {
            const errorMessage = document.getElementById("error-message");
            errorMessage.innerText = "Username o Password incorrectos.";
        }
    });
});
