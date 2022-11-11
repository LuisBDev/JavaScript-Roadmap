const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,

}

const medidas = {
    peso: "1kg",
    medida: "1m",
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

//Spread operator o rest operator
const resultado2 = { ...producto, ...medidas };
//(forma mas usada)

console.log(resultado);
console.log(resultado2);