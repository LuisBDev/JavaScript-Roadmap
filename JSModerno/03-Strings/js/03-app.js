
//Concatenar strings


const newproduct = "Laptop Ryzen 5";
const price = '1200 USD';

console.log(newproduct.concat(price)); //concatenar
console.log(newproduct.concat("En descuento")); //concatenar

console.log(newproduct + "with price of" + price);

//with backtick
console.log(`${newproduct} with price of ${price}`);
console.log(`Este producto ${newproduct} has
a price of ${price}`);
