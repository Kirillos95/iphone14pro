const btn = document.querySelector(".menus-btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});
