/* ===========================
TYPING EFFECT
=========================== */

const words = [
    "Aspiring Data Analyst",
    "Aspiring Business Analyst",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent =
            current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}

typeEffect();



/* ===========================
CASE STUDY MODALS
=========================== */

function openModal(modalId) {

    const modal =
        document.getElementById(modalId);

    if (!modal) return;

    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* ===========================
CLOSE MODAL
=========================== */

function closeModal(modalId) {

    const modal =
        document.getElementById(modalId);

    if (!modal) return;

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* ===========================
CLOSE WHEN CLICKING OUTSIDE
=========================== */

const modals =
    document.querySelectorAll(".modal");

modals.forEach(modal => {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            closeModal(modal.id);

        }

    });

});



/* ===========================
CLOSE WITH ESCAPE KEY
=========================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        const activeModal =
            document.querySelector(".modal.active");

        if (activeModal) {

            closeModal(activeModal.id);

        }

    }

});



/* ===========================
ACTIVE NAVIGATION
=========================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* ===========================
SCROLL REVEAL
=========================== */

const revealElements =
    document.querySelectorAll(
        ".project-card, .skill-box, .stat-card, .certificate-card, .timeline-item"
    );


function reveal() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;


        if (
            revealTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();



/* ===========================
NAVBAR SHADOW
=========================== */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow =
            "0 5px 15px rgba(0,0,0,.05)";

    }

});



/* ===========================
SMOOTH BUTTON HOVER
=========================== */

const buttons =
    document.querySelectorAll(
        ".btn, .btn-outline"
    );


buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-4px)";

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translateY(0px)";

        }
    );

});



/* ===========================
FADE IN ON LOAD
=========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});



/* ===========================
CONSOLE MESSAGE
=========================== */

console.log(
    "%c👋 Welcome to my portfolio!",
    "color:#2563EB;font-size:20px;font-weight:bold;"
);

console.log(
    "%cBuilt with HTML, CSS & JavaScript by Fathima Noorain.",
    "color:#6B7280;font-size:14px;"
);
/*So when you create another project later, you simply add:

Project card in project grid and case study modals
A new modal
Change the ID*/