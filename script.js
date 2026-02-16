const btn = document.getElementById("m-menu");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
