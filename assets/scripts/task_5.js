"use strict";

console.log('JS papildoma');

// PAPILDOMOS (NEPRIVALOMOS)

// 1. Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num = 10;
while (num >= 0) {
	if (num % 2 == 0) {
	console.log(num);
	}
	num--;
}
// 2. Keli pakeitimai generatoriu užduočiai. 
// Veikia tik lyginiai generatoriai. 
// Panaudok tik vieną for loop, t.y. tik vieną ciklą.
// Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, 
// o likusieji 15 - po 124 MW.

// Konsolės formatas:
// Generatorius #1 išjungtas.
// Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
// Generatorius #3 išjungtas.
// Generatorius #4 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

// Naudojami kintamieji:
currentGen = 1;
totalGen = 19;
totalMW = 0;

for (currentGen = 1; currentGen <= 19; currentGen++){
	if (currentGen <= 4 && currentGen % 2 == 0){
		totalMW += 62;
		console.log("#" + currentGen + " įjungtas, pridėjo " + "62 MW, viso generuojama " + totalMW + " MW!");
	} else if (currentGen >= 5 && currentGen % 2 == 0){
		totalMW += 124;
		console.log("#" + currentGen + " įjungtas, pridėjo " + "124 MW, viso generuojama " + totalMW + " MW!");
	} else {
		console.log("#" +  currentGen + "išjungtas");
	}
}

