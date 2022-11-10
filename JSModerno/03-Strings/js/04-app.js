const product4 = '     Monitor 20 Pulgadas     ';
console.log(product4);
console.log(product4.length);

//Eliminar del inicio blankspaces del inicio

console.log(product4.trimStart()); //delete left
console.log(product4.trimStart()); //delete right

//delete both directions (newer function)
console.log(product4.trimStart().trimEnd());

//delete both directions (older trim function )
console.log(product4.trim()); //delete ambas direcciones
