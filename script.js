const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("message").innerHTML = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const fields = [
        "nameError", "emailError", "phoneError",
        "genderError", "passwordError", "confirmError"
    ];

    fields.forEach(function(id) {
        document.getElementById(id).textContent = "";
    });

    let valid = true;

    if (name.length < 2) {
        document.getElementById("nameError").textContent =
            "Enter your full name.";
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";
        valid = false;
    }

    if (!/^[0-9+() -]{8,20}$/.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Enter a valid phone number.";
        valid = false;
    }

    if (gender === "") {
        document.getElementById("genderError").textContent =
            "Please select your gender.";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";
        valid = false;
    }

    if (confirmPassword !== password || confirmPassword === "") {
        document.getElementById("confirmError").textContent =
            "Passwords do not match.";
        valid = false;
    }

    if (valid) {
        document.getElementById("message").innerHTML =
            '<div class="alert alert-success">Registration successful!</div>';

        form.reset();
    }
});