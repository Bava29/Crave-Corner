const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}

/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
        REVEAL ANIMATION
=========================================*/

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
        .celebration-banner-content,
        .footer-column,
        .newsletter,
        .footer-bottom
    `);

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(element => {

        observer.observe(element);

    });

});

const dropdowns = document.querySelectorAll(".nav-item.dropdown > a");

dropdowns.forEach(item => {

    item.addEventListener("click", function (e) {

        if (window.innerWidth <= 1199) {

            e.preventDefault();

            const submenu = this.nextElementSibling;

            submenu.classList.toggle("active");

        }

    });

});


/*=========================================
        CELEBRATION COUNTER
=========================================*/

/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter");

if (counters.length) {

    const counterObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            // Rating animation வேண்டாம்
            if (counter.classList.contains("rating")) {
                observer.unobserve(counter);
                return;
            }

            const target = Number(counter.dataset.target);
            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {

                const progress = Math.min((currentTime - startTime) / duration, 1);
                const current = Math.floor(progress * target);

                if (target >= 1000) {

                    counter.textContent = `${Math.floor(current / 1000)}K+`;

                } else {

                    counter.textContent = `${current}+`;

                }

                if (progress < 1) {

                    requestAnimationFrame(updateCounter);

                } else {

                    if (target >= 1000) {

                        counter.textContent = `${target / 1000}K+`;

                    } else {

                        counter.textContent = `${target}+`;

                    }

                }

            }

            requestAnimationFrame(updateCounter);

            observer.unobserve(counter);

        });

    }, {

        threshold: 0.3

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}

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

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

});

const rtlBtn = document.getElementById("rtl-toggle");

if (rtlBtn) {
    rtlBtn.addEventListener("click", () => {
        document.body.classList.toggle("rtl");
    });
}




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


