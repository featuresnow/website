// Trigger animations on load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in-up").forEach(el => {
    el.style.animationPlayState = "running";
  });
});