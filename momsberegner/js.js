"Use strict";

function beregnMoms(beloeb, moms = 25) {
  const beloebMedMoms = beloeb + (beloeb * moms) / 100;
  console.log(beloebMedMoms);
}

beregnMoms(100);
