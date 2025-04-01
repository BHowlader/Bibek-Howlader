let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

// Scroll-based highlighting
window.addEventListener("scroll", () => {
    let top = window.scrollY;
    let found = false;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove("active"));

            let activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
                found = true;
            }
        }
    });

    if (!found) {
        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector('.navbar a[href="#home"]').classList.add("active");
    }
});

// Toggle menu for mobile
if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        console.log("Menu icon clicked!");
        if (navbar) {
            navbar.classList.toggle("show");
            console.log("Navbar classList:", navbar.classList);
            menuIcon.classList.toggle("bx-menu");
            menuIcon.classList.toggle("bx-x");
        } else {
            console.error("Navbar not found!");
        }
    });
} else {
    console.error("Menu icon not found! Check the ID #menu-icon.");
}

// Ensure the page scrolls to the top on load if there's no hash
window.onload = function() {
    if (!location.hash) {
        window.scrollTo(0, 0);
    }
};
