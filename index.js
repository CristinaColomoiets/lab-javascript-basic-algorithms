// Iteration 1: Names and Input
let hacker1 = 'Adrian';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Cristina';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1Letters = hacker1.length;
let hacker2Letters = hacker2.length;
let capitalLetters = hacker1.toUpperCase();

if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Letters} characters.`);
}
else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1Letters}`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Letters}`)
}

// Iteration 3: Loops
// 1. 
let wordSpace = "";
for (let i = 0; i < hacker1Letters; i++) {
    wordSpace += hacker1[i].toUpperCase() + " ";
}
console.log(wordSpace);

// 2.
let wordWithSpace = "";
for (let i = 0; i < capitalLetters.length; i++) {
    wordWithSpace = wordWithSpace + capitalLetters[i] + " ";
    console.log(wordWithSpace);
}


// 3. 
let hacker2_arr = hacker2.split('');
console.log(hacker2_arr);

let arrayReverse = hacker2_arr.reverse();  
console.log('Array reversible: ', arrayReverse);  // concatenar en console.log correctamente, no vale hacer con ---> ${}

let strReverse = arrayReverse.toString();
console.log('String al reves: ', strReverse);

let strReverseClean = strReverse.replaceAll(',', ''); // el metodo era replace

console.log(`La variable hacker2 al revés sin comas: ${strReverseClean}`);


