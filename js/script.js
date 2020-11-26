// Un alert espone 5 numeri casuali diversi. FATTO
// Dopo 30 secondi l’utente deve inserire, FATTO
// un prompt alla volta, i numeri che ha visto precedentemente.FATTO
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
var numeriCasuali = [];
for (var i = 1; i <=5; i++) {
var numero = Math.floor(Math.random() * 100) + 1;
numeriCasuali.push(numero);
}
console.log('Numeri casuali', numeriCasuali);
alert(numeriCasuali);

setTimeout(tentativi, 2000);
var tentativiUtente = [];

// FUNZIONI--------------------------------
function tentativi() {
  for (var i = 1; i <=5; i++) {
  var numeroTentativo = parseInt(prompt('Inserisci numero'))
  tentativiUtente.push(numeroTentativo);
  }
  console.log('Tentativi utente', tentativiUtente);
}


// function controllo (primoArray, secondoArray) {
//   var check = false;
//   for (var i = 0; i < array.length;  i++) {
//     if (primoArray==secondoArray) {
//       check = true;
//       return check;
//     }
//   }
//   return check;
// }
