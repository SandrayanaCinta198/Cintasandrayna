// MENU MOBILE

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}


// TUTUP MENU SETELAH LINK DIKLIK

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
    });

});


// ANIMASI SAAT SCROLL

const elements = document.querySelectorAll(
    ".card, .profile-image, .profile-text, .gallery-item, .contact-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});
