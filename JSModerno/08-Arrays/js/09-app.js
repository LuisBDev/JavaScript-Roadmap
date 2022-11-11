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

for (let i = 0; i < carrito.length; i++) {
    //console.log(carrito[i]);
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}
console.log("\n");

carrito.forEach(function (producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

console.log("\nArray element: \n");
carrito.forEach(element => {
    console.log(`${element.nombre} - Precio: ${element.precio}`);
});