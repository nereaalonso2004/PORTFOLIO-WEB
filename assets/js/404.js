// Pequeña animación al cargar
window.addEventListener("load", () => {
  const content = document.querySelector(".error-content");

  content.style.opacity = "0";
  content.style.transform = "translateY(20px)";

  setTimeout(() => {
    content.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 100);
});
