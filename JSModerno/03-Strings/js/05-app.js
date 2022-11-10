const product5 = 'Monitor 20 Pulgadas';

//Usage of .replace()

console.log(product5);
console.log(product5.replace('Pulgadas', '"'));
console.log(product5.replace("Monitor", "Monitor Curvo"));


//Usage of .slice for cutting

console.log(product5.slice(0, 5));
//console.log(product5.slice(a,b));
// a (inicio) , b (fin). Slice toma a y no b.(toma 1 menos)
//si a > b, la funcion .slice no retorna nada


//## Alternativa a .slice -> .substring

console.log(product5.substring(0, 5));
console.log(product5.substring(5, 0));
//si a > b, la funcion .substring invierte el orden de a,b


//Uso de .charAt()

console.log(product5.charAt(2)); //empieza de 0 index









