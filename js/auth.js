// ======================================
// Password Toggle
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const toggleButtons = document.querySelectorAll(
        ".toggle-password, .register-toggle-password, .register-confirm-password"
    );

    toggleButtons.forEach(button => {

        button.addEventListener("click", function () {

            const input = this.previousElementSibling;

            if (!input) return;

            if (input.type === "password") {

                input.type = "text";

                this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

            } else {

                input.type = "password";

                this.innerHTML = '<i class="fa-solid fa-eye"></i>';

            }

        });

    });

});


