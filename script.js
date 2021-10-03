const dropdownButton = document.querySelectorAll("button");
dropdownButton.forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelector("ul").classList.toggle("active");
  })
);
