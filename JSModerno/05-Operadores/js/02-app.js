const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Check if two numbers are equal

console.log(numero1 == numero2); //No strict, true
console.log(numero1 === numero2); //Strict, false
console.log(numero1 === Number.parseInt(numero2)); //true

console.log(typeof (numero1));
console.log(typeof (numero2));

//Para negacion, se tiene:

console.log(numero1 != numero2); //false
console.log(numero1 !== numero2); //true



