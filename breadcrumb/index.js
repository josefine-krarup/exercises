const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
document.querySelector("button").addEventListener("click", klik);
const ulElement = document.querySelector("ul");
function klik() {
  console.log("KLIK");
  ulElement.innerHTML = "";
  bc.forEach((breadCrumb, index) => {
    const listItem = document.createElement("li");
    if (index === bc.length - 1) {
      listItem.textContent = breadCrumb.name;
    } else {
      const linkItem = document.createElement("a");
      linkItem.href = breadCrumb.link;
      linkItem.textContent = breadCrumb.name;
      listItem.appendChild(linkItem);
    }
    ulElement.appendChild(listItem);
    console.log("Name", breadCrumb.name);
    console.log("Link", breadCrumb.link);
    console.log("****************");
  });
}
