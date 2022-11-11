const carrito = [
    {
        nombre: "Monitor",
        precio: 500
    },
    {
        nombre: "TV",
        precio: 600
    },
    {
        nombre: "Laptop",
        precio: 1000
    },
    {
        nombre: "Compu",
        precio: 1002
    }
]


console.log("\n");

carrito.map(function (producto) {

    console.log(`${producto.nombre} - Precio: ${producto.precio}`);

})

console.log("\n");


carrito.forEach(function (producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

//En esencia son iguales, pero map puede retornar un nuevo
//arreglo y foreach no puede.

const nuevoArreglo = carrito.map(function (producto) {

    return `${producto.nombre} - Precio: ${producto.precio}`;

})


const nuevoArreglo2 = carrito.forEach(function (producto) {

    return `${producto.nombre} - Precio: ${producto.precio}`;

})

console.log(nuevoArreglo); //Retorna nuevo arreglo
console.log(nuevoArreglo2); //undefined


