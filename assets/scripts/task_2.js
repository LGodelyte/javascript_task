"use strict";

console.log('uzduotis2');
// Javascript-2 uzduotys:

// 1. Per mėnesį avių skaičius išauga 4 kartais. 
// Naudodami WHILE loop ir tris nurodytus kintamuosius, 
// išveskite avių skaičių 12 mėnesių.
let numAvys = 4;
let numMenuo = 1; 
let kiekMenSpausdinti = 12;

numMenuo = 1;
while(numMenuo <= kiekMenSpausdinti){
	numAvys *= 4;
	console.log("Po " + numMenuo + " mėnesio(-ių) bus " + numAvys + " avių!");
	numMenuo++;
}
 
// Štai kaip atrodys pirmos dvi eilutės:
// Po 1 mėnesio(-ių) bus 16 avių!
// Po 2 mėnesio(-ių) bus 64 avių!

//2. Atlikite užduotį #1 su FOR loop
numAvys = 4;
numMenuo = 1; 
kiekMenSpausdinti = 12;

for (numMenuo = 1; numMenuo <= kiekMenSpausdinti; numMenuo++){
	numAvys *= 4;
	console.log("Po " + numMenuo + " mėnesio(-ių) bus " + numAvys + " avių!")
}

// 3. Hidroeleketrinėje yra 19 generatorių. 
// Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. 
// Inžinieriai paprašė tavęs sukurti du ciklus (loops), 
// kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių.

// Pirmiems 4 generatoriams panaudok WHILE loop, likusiems 15 - FOR loop.
// Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):
// Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
// Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

// Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;

currentGen = 1;
while(currentGen <= 4){
	totalMW += 62;
	console.log("#" + currentGen + " įjungtas, pridėjo " + "62 MW, viso generuojama " + totalMW + " MW!");
	currentGen++;
}

for(currentGen = 5; currentGen <=19; currentGen++){
	totalMW += 124;
	console.log("#" + currentGen + " įjungtas, pridėjo " + "124 MW, viso generuojama " + totalMW + " MW!")
}
