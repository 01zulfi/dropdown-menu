function createStyleTag() {
  const CSSRules = `
    body {
      padding: 30px;
    }
    
    div {
      border: 1px solid black;
      position: relative;
      margin: 100px;
      padding-left: 100px;
    }
    
    ul {
      position: absolute;
      top: 0;
      z-index: 1;
      width: fit-content;
      padding: 10px;
      opacity: 0;
      list-style: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      pointer-events: none;
      padding: 10px;
      background-color: aliceblue;
    }
    
    ul.active {
      transition: transform 150ms;
      pointer-events: auto;
      animation: myFrames;
      animation-duration: 250ms;
      animation-fill-mode: forwards;
    }
    
    li {
      padding: 5px;
      border-radius: 5px;
      width: 100%;
      text-align: center;
    }
    
    li:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    
    ul.active li {
      cursor: pointer;
      pointer-events: auto;
    }
    
    @keyframes myFrames {
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
        transform: translateY(10px);
      }
    }
  `;
  return DOMFactory("style", { textContent: CSSRules });
}

function DOMFactory(element, attributes) {
  const newElement = document.createElement(element);
  for (const attribute in attributes) {
    newElement[attribute] = attributes[attribute];
  }
  return newElement;
}

function createList(menu, menuStyles, listStyles) {
  const listParent = DOMFactory("ul", { style: menuStyles.join(";") });
  if (!menu) return listParent;
  for (const item of menu) {
    const listItem = DOMFactory("li", { ...item, style: listStyles.join(";") });
    listParent.append(listItem);
  }
  listParent.addEventListener("click", () =>
    listParent.classList.toggle("active")
  );
  return listParent;
}

function renderDropdownMenu(
  targetId,
  button,
  menu,
  menuStyles = [],
  listStyles = []
) {
  const targetElement = document.getElementById(targetId);
  const dropdownButton = DOMFactory("button", button);
  const dropdownList = createList(menu, menuStyles, listStyles);
  targetElement.append(dropdownButton, dropdownList);
  dropdownButton.addEventListener("click", () =>
    dropdownList.classList.toggle("active")
  );
}

document.head.append(createStyleTag());

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
  ["background-color: lightblue", "color: darkblue"],
  ["background-color: rgba(255,255,255,0.5)"]
);

renderDropdownMenu("dropdown2", { textContent: "hah" }, [
  { textContent: "why" },
]);
