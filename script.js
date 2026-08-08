/* =========================================================
   NyNySpektrum™
   Creative Technology Studio
   Engineering Tomorrow's Digital Reality
   ========================================================= */


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("NyNySpektrum™ digital reality initialized.");


    /* =====================================================
       SMOOTH PORTAL NAVIGATION
    ===================================================== */

    const portalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    portalLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (!targetID || targetID === "#") {
                return;
            }

            const target = document.querySelector(targetID);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       PORTAL ACTIVATION
    ===================================================== */

    const portals = document.querySelectorAll(
        ".portal-container, .section-portal"
    );

    portals.forEach(portal => {

        portal.addEventListener("click", () => {

            portal.classList.add("portal-active");

            setTimeout(() => {
                portal.classList.remove("portal-active");
            }, 1200);

        });

    });


    /* =====================================================
       SECTION REVEAL SYSTEM
    ===================================================== */

    const sections = document.querySelectorAll(
        "section"
    );

    const sectionObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "section-visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* =====================================================
       SERVICE CARD REVEAL
    ===================================================== */

    const serviceCards = document.querySelectorAll(
        ".service-card"
    );

    const cardObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "card-visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    serviceCards.forEach(card => {
        cardObserver.observe(card);
    });


    /* =====================================================
       ROADMAP REVEAL
    ===================================================== */

    const roadmapItems = document.querySelectorAll(
        ".roadmap-item"
    );

    const roadmapObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "roadmap-visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    roadmapItems.forEach(item => {
        roadmapObserver.observe(item);
    });


    /* =====================================================
       PORTAL CORE INTERACTION
    ===================================================== */

    const portalCores = document.querySelectorAll(
        ".portal-core"
    );

    portalCores.forEach(core => {

        core.addEventListener("click", () => {

            core.classList.add("core-activated");

            setTimeout(() => {

                core.classList.remove(
                    "core-activated"
                );

            }, 1000);

        });

    });


    /* =====================================================
       DYNAMIC YEAR
    ===================================================== */

    const yearElements = document.querySelectorAll(
        ".copyright"
    );

    const currentYear = new Date().getFullYear();

    yearElements.forEach(element => {

        element.innerHTML =
            `© ${currentYear} NyNySpektrum™. All Rights Reserved.`;

    });


    /* =====================================================
       PAGE LOAD
    ===================================================== */

    document.body.classList.add(
        "system-ready"
    );

});
