"use strict";

let theme = localStorage.getItem("theme");

if (theme === null) {
  theme = "dark";
}

document.querySelector("#theme_select").value = theme;
setTheme(theme);

document.querySelector("#theme_select").addEventListener("change", theChange);

function theChange(evt) {
  console.log("change", evt.target.value);

  setTheme(evt.target.value);
}

function setTheme(theme) {
  document.querySelector("body").dataset.theme = theme;
  localStorage.setItem("theme", theme);
}
