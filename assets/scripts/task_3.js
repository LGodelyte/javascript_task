"use strict";

console.log('uzduotis 3');
//DEADLINE 0900h

// 1. Sukurk funkciją didziausiasIsDvieju, kuri priima du skaičius
// ir gražina didesnį skaičių. Nepamiršk galimybės, 
// kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
// Panaudoti salyginius sakinius

function didziausiasIsDvieju(num1, num2){
	if(num1 > num2 ){
	 didziausiasIsDvieju = num1;
	} if(num1 < num2){
	 didziausiasIsDvieju = num2;
	}else {
		didziausiasIsDvieju = num1;
	}
}

didziausiasIsDvieju(5, 3);
console.log(didziausiasIsDvieju);

// 2. Parasyti JavaScript funkcija kuri apsuktu i funkcija paduota skaiciu, 
// skaiciu paduoti kaip argumenta/parametra

//Ivestis: 32243
//Rezultatas: 34223

console.log("\n-----1 variantas");

function reverseNum(number){
	number = number.toString();
	let numberArray = number.split("");
	number = numberArray.reverse().join("");
	console.log(number);
}

reverseNum(32243);

console.log("\n-----2 variantas");

function reverseNum2(number){
	number = number.toString().split("").reverse().join("");
	console.log(number);
}

reverseNum2(32243);


// 3. Parasyti JavaScript funkcija kuri suskaiciuotu kiek raidziu yra tekstineje eiluteje

//Ivestis: JS uzduotis
//Rezultatas: Raidziu skaicius: 10
console.log("\n-----1 variantas");

function countLetters(tekstas){
	tekstas = tekstas.replace(" ", "");
	console.log(tekstas.length);
}

countLetters("JS uzduotis");

console.log("\n-----2 variantas");

function countLetters2(tekstas2){
	for(let i = 0; i <= tekstas2.length; i++)
	tekstas2 = tekstas2.replace(" ", "");
	console.log(tekstas2.length);
}
countLetters2("JS uzduotis");



// BONUS (NEPRIVALOMOS):

// 4. Turime masyvą, kuriame yra trumpos tekstinės eilutės (pateikta apačioje). 
// Mūsų užduotis:

// a. Sukurti funkciją, kuri rastų ilgiausią žodį tekstinėje eilutėje
// b. Panaudojant šią funkciją išvesti kiekvienos eilutės ilgiausią žodį
// (rezultatas turi būti viena tekstinė eilutė)
// c. Išvedant žodžius panaudoti tarpą tarp žodžių
// d. Išvedimas turi būti dinamiškas 
// (pasikeitus masyve esančių eilučių skaičiui - vis tiek gautume
// kiekvienos eilutės ilgiausią žodį)
// e. Rezultatą išvesti konsolėje

// Masyvas
var posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];

function longestWordSentence(posts){
	let sentence = "";
	for(let i = 0; i < posts.length; i++){
		var postArray = longestWord(posts[i]);
		sentence = sentence + " " + postArray;
	}
	return sentence;
}

var sentenceArray = "Sveikinu radus darbą";

function longestWord(str){
 	let strArray = str.split(" ");
 	let ilgis = 0;
 	let word = "";
 	for(let i = 0; i < strArray.length; i++){
 		if (strArray[i].length > ilgis){
 			ilgis = strArray[i].length;
 			word = strArray[i];
 		}		
 	}
 	return word;
 	}
console.log(longestWordSentence(posts));


// 5. Parasyti Javascript funkcija kur priima 2 argumentus/parametrus, 
// simboliu eilute (string) ir raide (string), 
// kuri paskaiciuotu kiek kartu i funkcija paduotoje 
// simboliu eiluteje pasikartoja nurodyta raide.

// Ivestis: “w3resource.com”, “o”
// Rezultatas: 2

function countChar(eilute, raide){
	let eiluteArray = eilute.split(" ");
	let r = "";
	for(let i = 0; i < eiluteArray.length; i++){
		
	}
}
