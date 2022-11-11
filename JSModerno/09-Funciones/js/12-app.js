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


const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`);

carrito.map(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

console.log("\n");

carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

console.log("\n");

console.table(nuevoArreglo); //Retorna nuevo arreglo

