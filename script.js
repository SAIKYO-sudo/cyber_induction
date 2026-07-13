/*==========================================
 LOADING SCREEN
==========================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2500);

});


/*==========================================
 COUNTDOWN TIMER
==========================================*/

// Change this to your event date

const eventDate = new Date("July 15, 2026 12:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("timer").innerHTML =
            "<h2>The Event Has Started 🎉</h2>";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);


/*==========================================
 SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


/*==========================================
 NAVBAR EFFECT
==========================================*/

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 60) {

        nav.style.background = "rgba(5,8,22,.95)";
        nav.style.boxShadow =
            "0 8px 25px rgba(0,229,255,.25)";

    }

    else {

        nav.style.background = "rgba(5,8,22,.55)";
        nav.style.boxShadow = "none";

    }

});


/*==========================================
 HERO FLOAT EFFECT
==========================================*/

const hero = document.querySelector(".glass");

let position = 0;

setInterval(function () {

    position += 0.02;

    hero.style.transform =
        `translateY(${Math.sin(position) * 8}px)`;

}, 30);


/*==========================================
 BUTTON GLOW
==========================================*/

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.boxShadow =
            "0 0 20px #00E5FF,0 0 45px #00FF9C";

    });

    button.addEventListener("mouseleave", function () {

        button.style.boxShadow = "none";

    });

});


/*==========================================
 CONSOLE MESSAGE
==========================================*/

console.log(
"%cWelcome to the FY B.Sc Cybersecurity & Digital Forensics Induction Website",
"color:#00E5FF;font-size:18px;font-weight:bold;"
);
/*==========================================
 SCROLL REVEAL ANIMATION
==========================================*/

const revealElements = document.querySelectorAll(
    ".about-card, .box, .why-card, .timeline-item, .venue-card, .contact-card, footer"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.style.transition = "all .8s ease";

        }

    });

}

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*==========================================
 ACTIVE NAVBAR
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/*==========================================
 CARD HOVER GLOW
==========================================*/

const cards = document.querySelectorAll(".box");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(0,229,255,.22),
            rgba(255,255,255,.08))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.08)";

    });

});


/*==========================================
 HERO FADE
==========================================*/

window.addEventListener("scroll", () => {

    const heroSection = document.querySelector(".hero");

    heroSection.style.opacity = 1 - window.scrollY / 700;

});


/*==========================================
 BACKGROUND PARALLAX
==========================================*/

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    document.querySelector(".background").style.transform =
        `translate(${x}px, ${y}px)`;

});


/*==========================================
 BUTTON PULSE
==========================================*/

setInterval(() => {

    document.querySelectorAll("button").forEach((button) => {

        button.animate(

            [
                { transform: "scale(1)" },
                { transform: "scale(1.04)" },
                { transform: "scale(1)" }

            ],

            {

                duration: 700,
                iterations: 1

            }

        );

    });

}, 5000);


/*==========================================
 PAGE TITLE ANIMATION
==========================================*/

const originalTitle = document.title;

window.addEventListener("blur", () => {

    document.title = "👋 Come Back! You're Invited";

});

window.addEventListener("focus", () => {

    document.title = originalTitle;

});


/*==========================================
 REGISTER BUTTON MESSAGE
==========================================*/

const registerButton = document.querySelector(".register-btn");

if (registerButton) {

    registerButton.addEventListener("click", () => {

        setTimeout(() => {

            alert(
                "🎉 Thank you! You are being redirected to the registration form."
            );

        }, 300);

    });

}
