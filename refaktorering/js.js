let rabatIProcent = 0.2;

function calculatePrice(pris, premiumPris) {
  if (premiumPris) {
    return pris - pris * premiumPris;
  }
  return pris;
}

let nyPris = calculatePrice(800, true);
console.log(nyPris);
