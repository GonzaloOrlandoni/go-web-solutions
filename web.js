document.addEventListener("DOMContentLoaded", () => {
  // --- MENÚ HAMBURGUESA ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector("#nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      const isExpanded = navLinks.classList.contains("show");
      hamburger.setAttribute("aria-expanded", isExpanded);
    });
  }

  // --- INICIALIZADOR DE ANIMACIONES (AOS) ---
  AOS.init({
    duration: 800,
    once: false, // <-- Asegúrate que esto esté en 'false'
    offset: 50,
  });
});
