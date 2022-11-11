//Undefined

let numero;

console.log(numero); //undefined

console.log(typeof (numero)); //undefined


// Null
let numero2 = null;
console.log(numero2); //null
console.log(typeof (numero2)); //object

console.log(numero == numero2); //true, why?
// null == object -> true, why?

console.log(numero === numero2); //false
// null === object -> false. Good


