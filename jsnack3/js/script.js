// Snack 3
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// creo due array con un numero diverso di elementi
const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8, 9, 10, 11, 12];

// Verifica quale array è più corto
while (firstArray.length !== secondArray.length) {

    const userInput = Number(prompt("inserisci un numero"));

    if (firstArray.length < secondArray.length) {
        firstArray.push(userInput);
    } else {
        secondArray.push(userInput);
    }
}

console.log("Array 1:", firstArray);
console.log("Array 2:", secondArray);