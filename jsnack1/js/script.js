// Snack 1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

// creo un array vuoto
let numberArray = [];
// imposto la variabile somma a 0
let somma = 0;

// imposto ciclo while per chiedere un numero finche non raggiunge 50
while (somma < 50){
  let userInput = Number(prompt("Enter a number:"));

// controllo che il numero inserito sia corretto
  if (!isNaN(userInput)) {
    // se è corretto --> nell'array
    numberArray.push(userInput);

    // sommo man mano i valori inseriti dall'utente
    somma = 0;
    for (let i = 0; i < numberArray.length; i++) {
      somma += numberArray[i];
    }

    } else{
    alert("Inserisci un numero corretto.");
  }
}

// scrivo in pagina i risultati
document.getElementById('title').innerText = "ARRAY SOMMA";
document.getElementById('array').innerHTML = "Il tuo array di numeri scelti è il seguente: " + numberArray;
document.getElementById('somma').innerHTML = "I tuoi numeri sono stati sommati e il valore è di: " + somma;
