const buger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

buger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = ""
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`;
    }
  });

  buger.classList.toggle("toggle")
});
