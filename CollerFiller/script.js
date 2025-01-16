
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "cyan",
  "magenta",
];

const btn = document.getElementById("btn");
const colorText = document.getElementById("color");


btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomIndex];
  colorText.textContent =
    colors[randomIndex].charAt(0).toUpperCase() + colors[randomIndex].slice(1);
});
