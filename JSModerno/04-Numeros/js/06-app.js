const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

const nuevo = Number.parseInt(numero1);
console.log(typeof (numero1)); //string
console.log(typeof (numero4)); //Number
console.log(typeof (nuevo));

console.log(Number.parseFloat(numero2));

//Check if a number is integer

console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));


