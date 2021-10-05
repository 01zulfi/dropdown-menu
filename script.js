function createStyleTag() {
  const CSSRules = `
    ul.dropdown-menu-list {
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
      background-color: white;
    }
    
    ul.dropdown-menu-list.active {
      transition: transform 150ms;
      pointer-events: auto;
      animation: dropdown-animation;
      animation-duration: 250ms;
      animation-fill-mode: forwards;
    }
    
    li.dropdown-menu-list-item {
      padding: 5px;
      border-radius: 5px;
      width: 100%;
      text-align: center;
    }
    
    li.dropdown-menu-list-item:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    
    ul.dropdown-menu-list.active li.dropdown-menu-list-item {
      cursor: pointer;
      pointer-events: auto;
    }
    
    @keyframes dropdown-animation {
      100% {
        opacity: 1;
        transform: translateY(10px);
      }
    }

    @media only screen and (max-width: 768px) {
      ul.dropdown-menu-list {
        width: 80%;
      }
      li.dropdown-menu-list-item {
        background-color: rgba(0,0,0,0.1);
      }
    }
  `;
  return DOMFactory("style", { textContent: CSSRules });
}

document.head.append(createStyleTag());

function DOMFactory(element, attributes) {
  const newElement = document.createElement(element);
  for (const attribute in attributes) {
    newElement[attribute] = attributes[attribute];
  }
  return newElement;
}

function createList(menu, menuStyles, listStyles) {
  const listParent = DOMFactory("ul", {
    style: menuStyles.join(";"),
    className: "dropdown-menu-list",
  });
  if (!menu) return listParent;
  for (const item of menu) {
    const listItem = DOMFactory("li", {
      ...item,
      style: listStyles.join(";"),
      className: "dropdown-menu-list-item",
    });
    listParent.append(listItem);
    listItem.addEventListener("click", () => {
      listParent.classList.toggle("active");
    });
  }
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
  targetElement.style.position = "relative";
  const dropdownButton = DOMFactory("button", {
    ...button,
    className: "dropdown-button",
  });
  const dropdownList = createList(menu, menuStyles, listStyles);
  targetElement.append(dropdownButton, dropdownList);
  dropdownButton.addEventListener("click", () =>
    dropdownList.classList.toggle("active")
  );
}
