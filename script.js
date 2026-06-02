const backToTopButton = document.querySelector(".back-to-top");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

function updateNavigation() {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;

    if (window.scrollY >= sectionTop) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentSectionId}`;
    link.classList.toggle("is-active", isActive);
  });
}

function updateBackToTopButton() {
  const shouldShowButton = window.scrollY > 480;
  backToTopButton.classList.toggle("is-visible", shouldShowButton);
}

window.addEventListener("scroll", () => {
  updateNavigation();
  updateBackToTopButton();
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

updateNavigation();
updateBackToTopButton();
