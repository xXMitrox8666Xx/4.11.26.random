const intro = document.getElementById("intro");
const contenido = document.getElementById("contenido");

intro.addEventListener("click", () => {
  intro.classList.add("salir");
  contenido.classList.remove("oculto");
  requestAnimationFrame(() => (contenido.style.opacity = 1));
  setTimeout(() => intro.remove(), 800);
});
