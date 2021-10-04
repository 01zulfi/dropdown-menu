function DOMFactory(element, attributes) {
  const newElement = document.createElement(element);
  for (const attribute in attributes) {
    newElement[attribute] = attributes[attribute];
  }
  return newElement;
}

function createList(menu, menuStyles) {
  const listParent = DOMFactory("ul", { style: menuStyles.join(";") });
  if (!menu) return listParent;
  for (const item of menu) {
    const listItem = DOMFactory("li", item);
    listParent.append(listItem);
  }
  return listParent;
}

function renderDropdownMenu(targetId, button, menu, menuStyles = []) {
  const targetElement = document.getElementById(targetId);
  const dropdownButton = DOMFactory("button", button);
  const dropdownList = createList(menu, menuStyles);
  targetElement.append(dropdownButton, dropdownList);
  dropdownButton.addEventListener("click", () =>
    dropdownList.classList.toggle("active")
  );
}

renderDropdownMenu(
  "dropdown",
  {
    textContent: "This is the dropdown",
    className: "wow",
  },
  [
    { textContent: "hkldjflakdjflajfdkljl", href: "#" },
    { textContent: "one", href: "#" },
    { textContent: "one", href: "#" },
    { textContent: "one", href: "#" },
    { textContent: "one", href: "#" },
    { textContent: "one", href: "#" },
  ],
  ["background-color: black", "color: white"]
);

renderDropdownMenu("dropdown2", { textContent: "hah" }, [
  { textContent: "why" },
]);
