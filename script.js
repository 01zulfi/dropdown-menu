const dropdownButton = document.querySelector("button");
dropdownButton.addEventListener("click", () => {
  document.querySelector("ul").classList.toggle("active");
});
