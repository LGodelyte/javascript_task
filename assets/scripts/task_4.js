"use strict";

console.log('uzduotis 5');
//Parasyti JavaScript funkcija, kuri suskaiciuotu ivesto masyvo elementu suma 
//(nenaudoti reduce() google sprendimo) ir apskaiciuotu vidurki (2 skaiciai po kablelio)

// pvz.:
// Ivestis: var skaiciai = [1, 3, 6]
// Konsoles formatas:
// "Suma: 10, Vidurkis: 3.33"
var skaiciai = [1, 3, 6];

function countArray(skaicius){
	let suma = 0;
	for(let i = 0; i < skaicius.length; i++){
		 suma += skaicius[i];
	}
	return "Suma: " + suma + ", Vidurkis: " + ((suma / skaicius.length).toFixed(2));
}
 
console.log(countArray(skaiciai));


// 2. Parašyti funkciją į kurią kaip parametrus paduosime skaičių(a) ir skaičių(n).
// Funkcija turėtų vykdyti ciklą(bet koki) nuo 0 iki skaičiaus a reikšmės(imtinai) ir 
//išvesti į konsolę visus ciklo skaičius kurie dalinasi iš n

// pvz.:
// var a = 10;
// var n = 3;

// Rezultatas:
// 0
// 3
// 6
// 9
// var a = 10;
// var n = 3;

function nSkaiciausDalyba(a, n){
	for(let i=0; i<=a; i++){
		if(i % n == 0){
		console.log(i);
		}
	}
}

nSkaiciausDalyba(10, 3);

//Papildomai

//Parasyti JS funkcija kuri pakeltu a laipsniu n 
//(nenaudoti math.pow, nenaudoti ** operatoriaus)

function kelimasLaipsniu(a, n){
	let laipsnis = 1;
	for(let i = 1; i <= n; i++){
		laipsnis *= a;
	}
	return laipsnis;
}

console.log(kelimasLaipsniu(2, 3));