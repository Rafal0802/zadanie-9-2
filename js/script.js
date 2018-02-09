// script.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = prompt('Tablica zawiera następujące imiona: ' + allNames + ' - wpisz nowe aby dodać: ');


if ((allNames.indexOf(newName) === -1) && (newName != 0)){
	allNames.push(newName);
	console.log('[ ' + allNames + ' ] Nowe imię zostało dodane!');
	alert('Nowe imię zostało dodane, aktualna tablica z imionami: ' + allNames);
} else if (newName == 0){
	console.log('[ ' + allNames + ' ] Imię nie zostało podane!');
	alert('Imię nie zostało podane!');
} else {
	console.log('[ ' + allNames + ' ] Podane nowe imię już istnieje! Nie zostało dodane!');
	alert('Imię już istnieje i nie zostanie dodane!');
}



