const nome = prompt("Inserisci il tuo nome:");
const cognome = prompt("Inserisci qui il tuo cognome:");
const colorePreferito = prompt("Inserisci il tuo colore preferito:");

/* Password con nome, cognome, colore preferito + 21 */
let password = (nome + cognome + colorePreferito + 21);

console.log(password);


/* Password con nome, cognome, colore preferito e a/b */
let primoNumero = prompt("Scegli un numero");
primoNumero = parseInt(primoNumero);

let secondoNumero = prompt("Scegli un altro numero");
secondoNumero = parseInt(secondoNumero);

/* Primo numero maggiore del secondo e divisibile per lo stesso */
let quoziente = (primoNumero/secondoNumero);

let passwordQuoziente = (nome + cognome + colorePreferito + quoziente);

console.log(passwordQuoziente);




/* Password con nome, cognome, colore preferito e numero random */
let numeroRandom = Math.floor(Math.random() * 100) + 1;


let passwordRandom = (nome + cognome + colorePreferito + numeroRandom);

console.log(passwordRandom);