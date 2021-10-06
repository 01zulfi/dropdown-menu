# dropdown-menu

# How To Install

Use webpack for bundling...

```
npm install render-dropdown-menu
```

# How To Use

```js
renderDropdownMenu(targetId, buttonObject, menuArray, menuStyles, listStyles);
```

`targetId`: (REQUIRED) Id of the div which will act as the parent of the dropdown button and menu <br>
`buttonObject`: (REQUIRED) Object to specify textContent and any attributes of the button <br>
`menuArray`: (REQUIRED) Array of objects to specify the menu items and links <br>
`menuStyles`: (OPTIONAL) Array of strings to define CSS rules of the menu <br>
`listStyles`: (OPTIONAL) Array of strings to define CSS rules of the list <br>

# Example

```js
renderDropdownMenu(
  "dropdownDiv",
  { textContent: "button" },
  [
    { textContent: "Item 1", link: "#" },
    { textContent: "Item2", link: "#" },
  ],
  ["background-color: black", "border: 1px solid red"],
  ["border: 1px solid white"]
);
```

# Caution

Setting own CSS rules will override default CSS. Some rules might break functionality. If more customizing required, use these classes to select the element in the CSS file:

For the menu: 'dropdown-menu-list' <br>
For the list-items: 'dropdown-menu-list-item' <br>
Class applied when dropdown visible: 'active' <br>

(Position of the parent element will be set to relative, any change will alter position of the dropdown)
