const mobilNavButton = document.querySelector(".mobil-menu");
const navLinks = document.querySelector(".nav-links");

mobilNavButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});