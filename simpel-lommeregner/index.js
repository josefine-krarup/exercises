import { $ } from "../utils/utils_lib.js";

$("button").addEventListener("click", knapClick);

function knapClick() {
  const n1 = Number($("#number1").value);
  const n2 = Number($("#number2").value);
  const regneart = $("#regneart").value;

  let resultat;

  if (n1 === "" || n2 === "") {
    $("#svar").textContent = "Indtast to tal";
  } else if (regneart === "plus") {
    resultat = n1 + n2;
  } else if (regneart === "minus") {
    resultat = n1 - n2;
  } else if (regneart === "gange") {
    resultat = n1 * n2;
  } else if (regneart === "dividere") {
    resultat = n1 / n2;
  } else {
    $("#svar").textContent = "Vælg en regneart";
  }

  $("#svar").value = +resultat;
}
