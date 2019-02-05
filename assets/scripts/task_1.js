"use strict";

console.log('JS veikia');

// Javascript užduotis

// Šiuo metu Lietuvoje yra 69 laipsniai pagal Farenheitą, naudodamiesi JavaScript apskaičiuokite kokia temperatūra yra pagal Celsijų.

// Būtinos sąlygos:
// - Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsniai pagal Celsijų"
// - Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
// - Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
// - Rezultatą išvesti konsolėje

// Sprendimo variantai:
// 1 panaudoti replace()
// 2 panaudoti substring() arba substr()

// Rezultatas:
// Lietuvoje šiuo metu 20.6 laipsniai pagal Celsijų
// Papildoma uzduotis, kad rezultatas butu:
// Lietuvoje šiuo metu 20.5 laipsniai pagal Celsijų

let tekstas = "Lietuvoje šiuo metu laipsniai pagal Celsijų";	
//			   0123456789012345678901234567890123456789012
let tempF = 69;
tempF = (tempF - 32) / 1.8;
console.log(tempF.toFixed(1));

let naujasTekstas = tekstas.replace('laipsniai', tempF.toFixed(1) + ' laipsniai');
console.log(naujasTekstas);

naujasTekstas = tekstas.substr(0, 19) + " " + tempF.toFixed(1) + tekstas.substr(19, 42);
console.log(naujasTekstas);

tempF = parseInt(tempF * 10) / 10;
console.log(tempF);

naujasTekstas = tekstas.replace('laipsniai', tempF.toFixed(1) + ' laipsniai');
console.log(naujasTekstas);

naujasTekstas = tekstas.substr(0, 19) + " " + tempF.toFixed(1) +  tekstas.substr(19, 42);
console.log(naujasTekstas);