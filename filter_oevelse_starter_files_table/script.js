document.querySelectorAll("button").forEach((btn) => {
  console.log("btn", btn);
  btn.addEventListener("click", klik);
  // console.log("i", i);
  // console.log("i", arr);
});

function klik(evt) {
  evt.target;
  console.log("electricVeh", electricVeh);
  if (evt.target.dataset.filter === "electricVeh") {
    showTheseVehicles(electricVeh);
  } else if (evt.target.dataset.filter === "moreThanTwoSeats") {
    showTheseVehicles(moreThanTwoSeats);
  } else if (evt.target.dataset.filter === "electricOwnedByJonas") {
    showTheseVehicles(electricOwnedByJonas);
  } else if (evt.target.dataset.filter === "ryeBreadMorethanOnePass") {
    showTheseVehicles(ryeBreadMorethanOnePass);
  }
  // console.log("klik", evt.target.dataset.filter);
  // showTheseVehicles();
}
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

const electricVeh = vehicles.filter((veh) => veh.isElectric);
console.log("electricVeh", electricVeh);
const moreThanTwoSeats = vehicles.filter((veh) => veh.passengers > 2);
console.log("moreThanTwoSeats", moreThanTwoSeats);
const electricOwnedByJonas = vehicles.filter((veh) => veh.isElectric && veh.ownedBy === "Jonas");
console.log("electricOwnedByJonas", electricOwnedByJonas);
const ryeBreadMorethanOnePass = vehicles.filter((veh) => veh.passengers > 1 && veh.fuel === "Rugbrød");
console.log("ryeBreadMorethanOnePass", ryeBreadMorethanOnePass);

showTheseVehicles(vehicles);
// console.log("arr.stops", arr.stops);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    // console.log("each.stops", each.stops);
    // let stopsText;
    // if (each.stops) {
    //   stopsText = each.stops;
    // } else {
    //   stopsText = "-";
    // }
    tbodyPointer.innerHTML += `<tr>
        <td>${each.type ?? "-"}</td>
        <td>${each.fuel ?? "-"}</td>
        <td>${each.passengers ?? "-"}</td>
        <td>${each.stops ?? "-"}</td>
        <td>${each.ownedBy ?? "-"}</td>
        <td>${each.isElectric ? "Ja" : "Nej"}</td>
        <td>${each.isTandem ? "Ja" : "Nej"}</td>
      </tr>
    `;
  });
}
