document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MANEJO DEL MENÚ HAMBURGUESA ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector("#nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      const isExpanded = navLinks.classList.contains("show");
      hamburger.setAttribute("aria-expanded", isExpanded);
    });
  }

  // --- 2. BOTÓN SCROLL TO TOP (NUEVO) ---
  const scrollBtn = document.querySelector("#scrollToTopBtn");

  if (scrollBtn) {
    // Escucha el evento de scroll en la ventana
    window.addEventListener("scroll", () => {
      // Si el scroll vertical es mayor a 400px...
      if (window.scrollY > 400) {
        scrollBtn.classList.add("show"); // Muestra el botón
      } else {
        scrollBtn.classList.remove("show"); // Oculta el botón
      }
    });
  }

  // --- 3. INICIALIZADOR DE ANIMACIONES (AOS) ---
  AOS.init({
    duration: 800,
    once: false,
    offset: 50,
  });
});
