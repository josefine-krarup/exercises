"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "de";
// console.log(texts.da.texts[]);
texts[locale].texts.forEach((elm) => {
  console.log(elm.location);
  document.querySelector(elm.location).textContent = "Bassemand";
});
