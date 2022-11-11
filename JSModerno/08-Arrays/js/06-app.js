const carrito = [];

const producto =
{
    nombre: "Monitor 30 pulgadas",
    precio: "5600"
}

const producto2 =
{
    nombre: "TV",
    precio: 350
}

const producto3 =
{
    nombre: "Test",
    precio: 600
}

let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];


console.table(resultado);