// Snack 3
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// creo due array con un numero diverso di elementi
const firstArray = [100, 200, 300, 400];
const secondArray = [500, 600, 700, 800, 900, 1000, 1100, 1200];

// Verifica quale array è più corto
while (firstArray.length !== secondArray.length) {

    const userInput = Number(prompt("inserisci un numero"));

    if (firstArray.length < secondArray.length) {
        firstArray.push(userInput);
    } else {
        secondArray.push(userInput);
    }
}
// STAMPO IN PAGINA
document.getElementById("title").innerText = "ARRAY GAME"
document.getElementById("array1").innerHTML = "Il primo array: " + firstArray;
document.getElementById("array2").innerHTML = "Il secondo array: " + secondArray;