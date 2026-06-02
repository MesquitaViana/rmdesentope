/* ==========================================
   MENU MOBILE
========================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("nav--active");
        document.body.classList.toggle("menu-open");

        menuToggle.innerHTML = nav.classList.contains("nav--active")
            ? "✕"
            : "☰";

    });

}

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav && menuToggle) {

            nav.classList.remove("nav--active");
            document.body.classList.remove("menu-open");
            menuToggle.innerHTML = "☰";

        }

    });

});


/* ==========================================
   HEADER AO ROLAR
========================================== */

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("header--scroll");

        } else {

            header.classList.remove("header--scroll");

        }

    });

}


/* ==========================================
   SCROLL SUAVE
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==========================================
   ANIMAÇÕES DE ENTRADA
========================================== */

const animatedElements = document.querySelectorAll(
    ".card, .step, .service-grid, .about__box, .form"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

} else {

    animatedElements.forEach(el => {

        el.classList.add("show");

    });

}


/* ==========================================
   WHATSAPP FLOAT
========================================== */

const whatsappFloat = document.querySelector(".whatsapp-float");

if (whatsappFloat) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            whatsappFloat.classList.add("visible");

        } else {

            whatsappFloat.classList.remove("visible");

        }

    });

}