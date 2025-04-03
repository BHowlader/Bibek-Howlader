let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

// Newsletter Elements
const newsletterBtn = document.querySelector('.newsletter-btn');
const newsletterModal = document.getElementById('newsletterModal');
const closeModal = document.querySelector('.close-modal');

// Scroll-based Section Highlighting
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

// Mobile Menu Toggle
if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("show");
        menuIcon.classList.toggle("bx-menu");
        menuIcon.classList.toggle("bx-x");
    });
}

// Newsletter Modal Handling
newsletterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newsletterModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    newsletterModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === newsletterModal) {
        newsletterModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle HubSpot Form Submission Feedback
window.addEventListener('message', (event) => {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
        if (event.data.id === '0b3db9d4-10f7-4918-8c20-ef1e74098d5e') {
            alert('🚀 Subscription successful! Welcome to my research network.');
            newsletterModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

// Initial Page Load Scroll
window.onload = function() {
    if (!location.hash) {
        window.scrollTo(0, 0);
    }
};