document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    /*
     * Mobile navigation
     */

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("active");

        });


        /*
         * Close mobile menu after
         * clicking a navigation link.
         */

        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");

            });

        });

    }


    /*
     * Highlight the navigation item
     * corresponding to the current section.
     */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".navbar a");


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            const target =
                link.getAttribute("href");

            if (target === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /*
     * Prevent browser from jumping to an old
     * hash position before the page has loaded.
     */

    if (window.location.hash) {

        setTimeout(function () {

            const target =
                document.querySelector(window.location.hash);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }, 100);

    }

});
