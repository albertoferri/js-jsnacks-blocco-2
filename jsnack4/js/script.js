// Snack 4
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// Richiedi all'utente di inserire un numero tramite prompt
const userNumber = Number( prompt("Inserisci un numero:"));

// stampo in pagina il titolo
document.getElementById("title").innerText = "ODD-EVEN GAME";


// Verifica se il numero è pari o dispari
if (userNumber % 2 == 0) {
    // Se è pari, stampa il numero
    document.getElementById("num").innerHTML = ("Il numero inserito è pari: " + userNumber);
} else {
    // Se è dispari, stampa il numero successivo
    document.getElementById("num").innerHTML = ("Il numero inserito è dispari. Il numero successivo è: " + (userNumber + 1));
}