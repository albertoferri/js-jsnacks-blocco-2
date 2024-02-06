// Snack 2
// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. 
// Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" 
// nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!

// Genera un numero casuale tra 1 e 100 dai indovinare
const numeroSegreto = Math.floor(Math.random() * 100) + 1;
console.log("numero da indovinare: " + numeroSegreto);

// setto variabili a 0
let userNumber = 0;
let tentativi = 0;

// imposto ciclo while
while (userNumber != numeroSegreto){
    tentativi++
    console.log(tentativi);

    // Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" 
    userNumber = prompt("inserisci un numero");
    if (userNumber > numeroSegreto) {
        alert("Il numero è troppo alto. Prova di nuovo.")
    } else if (userNumber < numeroSegreto){
        alert("Il numero è troppo basso. Prova di nuovo.")
    }

    document.getElementById("num").innerHTML = "BRAVO HAI INDOVINATO IL NUMERO VINCENTE: " + numeroSegreto + " IN " + tentativi + " TENTATIVI";
}
document.getElementById("title").innerHTML = "GUESS THE NUMBER"