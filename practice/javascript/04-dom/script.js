const heading = document.getElementById("heading");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", () => {
  heading.textContent = "You changed the heading with JavaScript!";
});
