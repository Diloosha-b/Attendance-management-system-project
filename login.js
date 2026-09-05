// Simple login credentials
const correctUsername = "admin";
const correctPassword = "1234";

function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorEl = document.getElementById("error");

    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "attendance.html";
    } else {
        errorEl.textContent = "Invalid username or password.";
        errorEl.classList.remove("shake");
        void errorEl.offsetWidth; // restart animation
        errorEl.classList.add("shake");
    }
}

// Allow pressing Enter in either field to submit
["username", "password"].forEach(function (id) {
    document.getElementById(id).addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            login();
        }
    });
});
