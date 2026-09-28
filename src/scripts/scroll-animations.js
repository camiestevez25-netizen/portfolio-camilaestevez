export function initScrollAnimations() {
  // Solo en navegadores que lo soportan
  if (!("IntersectionObserver" in window)) return;

  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, 
      rootMargin: "0px 0px -50px 0px", 
    }
  );

  elements.forEach((el) => observer.observe(el));
}

// re-inicializar al cambiar de página
document.addEventListener("astro:page-load", initScrollAnimations);
initScrollAnimations();