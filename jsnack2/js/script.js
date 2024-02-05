// Snack 2
// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. 
// Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" 
// nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!

// Genera un numero casuale tra 1 e 100 dai indovinare
const numeroSegreto = Math.floor(Math.random() * 100) + 1;
console.log("numero da indovinare: " + numeroSegreto);

// setto variabile tentativi = 0 per tenere traccia dei tentativi effettuati
let tentativi = 0;