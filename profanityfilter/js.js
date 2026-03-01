let hasTheButtonEverBeenClickedFlag = false;
let theText = document.querySelector("p").textContent;

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];
document.querySelector("button").addEventListener("click", klik);

function klik() {
  if (hasTheButtonEverBeenClickedFlag) {
    console.log("Knappen har allerede været klikket på");
  } else {
    console.log("Knappen har IKKE været klikket på endnu");
    sfw();
  }
  hasTheButtonEverBeenClickedFlag = true;
}

function sfw() {
  console.log("theText", theText);
  curseWords.forEach((word) => {
    console.log("Bad word:", word.bad);
    console.log("Good word:", word.good);
    console.log("**************************");
  });
}
