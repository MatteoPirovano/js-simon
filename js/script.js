$(document).ready(
  function() {
    var numeriCasuali = [];
    for (var i = 1; i <=5; i++) {
      var numero = Math.floor(Math.random() * 100) + 1;
      numeriCasuali.push(numero);
    };
    console.log('Numeri casuali', numeriCasuali);
    alert('Ricorda questi numeri e quando sei pronto clicca su ok e attendi 30 secondi: ' + numeriCasuali);

    setTimeout(function() {
      var tentativiUtente = [];
      for (var i = 1; i <=5; i++) {
        var numeroTentativo = parseInt(prompt('Inserisci numero'));
        var controlloNumeri= controllo(numeriCasuali, numeroTentativo );
        if (controlloNumeri==true){
          tentativiUtente.push(numeroTentativo);
        };
      };
      console.log('Tentativi utente', tentativiUtente);
      var numeriIndovinati=0;
      for (var i = 0; i < tentativiUtente.length; i++) {
        numeriIndovinati= numeriIndovinati+1;
      }

      alert('Hai ricordato: ' + numeriIndovinati +' numeri e quei numeri sono: ' + tentativiUtente.join('-'));
    } ,  30000);
  }
)

  // FUNZIONI--------------------------------
  function controllo (array, numero) {
    var check = false;
    for (var i = 0; i < array.length;  i++) {
      if (numero==array[i]) {
        check = true;
        return check;
      }
    }
    return check;
  }
  // \FUNZIONI--------------------------------
