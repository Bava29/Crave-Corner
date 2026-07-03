const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}

window.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(`
        .section-heading,
        .about-wrapper,
        .our-story-wrapper,
        .timeline-item,
        .team-card,
        .why-wrapper,
        .signature-item,
        .signature-menu-card,
        .ingredient-showcase-wrapper,
        .icecream-story-item,
        .favorite-item,
        .favorites-stats > div,
        .favorite-flavor-card,
        .combo-card,
        .combo-step,
        .pairing-card,
        .party-combo-item,
        .package-card,
        .celebration-booking-box,
        .benefit-card,
        .contact-card,
        .contact-form-wrapper,
        .location-card,
        .amenity-card,
        .about-cta-content,
        .menu-cta-content,
        .celebration-banner-content
    `);

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));

});

const dropdowns = document.querySelectorAll(".dropdown > a");

dropdowns.forEach(item => {

    item.addEventListener("click", function (e) {

        if (window.innerWidth <= 992) {

            e.preventDefault();

            const submenu = this.nextElementSibling;

            submenu.classList.toggle("active");

        }

    });

});



/*==============================
        HERO SWIPER
==============================*/

const heroSwiper = new Swiper(".heroSwiper", {

    loop: true,

    speed: 1000,

    spaceBetween: 0,

    effect: "fade",

    fadeEffect: {
        crossFade: true,
    },

    autoplay: {

        delay: 3500,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

    },

});

const treatSwiper = new Swiper(".treatSwiper", {

    loop: true,

    spaceBetween: 30,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false,

    },

    navigation: {

        nextEl: ".treat-next",

        prevEl: ".treat-prev",

    },

    pagination: {

        el: ".treatSwiper .swiper-pagination",

        clickable: true,

    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        576: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        },

        1200: {
            slidesPerView: 4,
        }

    }

});

const testimonialSwiper = new Swiper(".testimonialSwiper", {

    loop: true,

    spaceBetween: 30,

    autoplay: {

        delay: 3500,

        disableOnInteraction: false,

    },

    navigation: {

        nextEl: ".testimonial-next",

        prevEl: ".testimonial-prev",

    },

    pagination: {

        el: ".testimonialSwiper .swiper-pagination",

        clickable: true,

    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
        }

    }

});



const themeButtons = document.querySelectorAll(
    "#themeToggleDesktop, #themeToggleMobile"
);

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

themeButtons.forEach(button => {

    const icon = button.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
    }

    button.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const dark = document.body.classList.contains("dark-mode");

        localStorage.setItem("theme", dark ? "dark" : "light");

        themeButtons.forEach(btn => {

            const i = btn.querySelector("i");

            if (dark) {

                i.classList.replace("fa-moon", "fa-sun");

            } else {

                i.classList.replace("fa-sun", "fa-moon");

            }

        });

    });

});

const rtlButtons = document.querySelectorAll(
    "#rtlToggleDesktop, #rtlToggleMobile"
);

const savedDir = localStorage.getItem("direction") || "ltr";

document.documentElement.setAttribute("dir", savedDir);

rtlButtons.forEach(button => {

    button.addEventListener("click", () => {

        const dir =
            document.documentElement.getAttribute("dir") === "rtl"
                ? "ltr"
                : "rtl";

        document.documentElement.setAttribute("dir", dir);

        localStorage.setItem("direction", dir);

    });

});

//book party counter

const counters = document.querySelectorAll(".counter");
const statsSection = document.querySelector(".celebration-stats");


let started = false;

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting && !started) {

        started = true;

        counters.forEach(counter => {

            if (counter.classList.contains("rating")) return;

            const target = +counter.dataset.target;

            let count = 0;

            const increment = target / 100;

            function updateCounter() {

                count += increment;

                if (count < target) {

                    if (target >= 1000) {

                        counter.innerHTML = Math.ceil(count / 1000) + "K+";

                    }

                    else {

                        counter.innerHTML = Math.ceil(count) + "+";

                    }

                    requestAnimationFrame(updateCounter);

                }

                else {

                    if (target >= 1000) {

                        if (target % 1000 === 0) {

                            counter.innerHTML = (target / 1000) + "K+";

                        }

                        else {

                            counter.innerHTML = target.toLocaleString() + "+";

                        }

                    }

                    else {

                        counter.innerHTML = target + "+";

                    }

                }

            }

            updateCounter();

        });

    }

},
    {
        threshold: 0.4
    });

observer.observe(statsSection);

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

document.querySelectorAll(".toggle-password, .register-toggle-password, .register-confirm-password").forEach(button => {

    button.addEventListener("click", function () {

        const input = this.previousElementSibling;

        if (input.type === "password") {

            input.type = "text";

            this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            input.type = "password";

            this.innerHTML = '<i class="fa-solid fa-eye"></i>';

        }

    });

});

document.querySelectorAll(".toggle-password, .register-toggle-password, .register-confirm-password").forEach(button => {

    button.addEventListener("click", function () {

        const input = this.previousElementSibling;

        if (input.type === "password") {

            input.type = "text";

            this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            input.type = "password";

            this.innerHTML = '<i class="fa-solid fa-eye"></i>';

        }

    });

});

