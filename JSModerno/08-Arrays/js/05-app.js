const meses = ["Enero", "Febrero", "Marzo"];
//meses[3] = "Abril";

meses.push("Abril"); //forma recomendada agregar
meses.push("Mayo");

console.table(meses);

const carrito = [];

const producto =
{
    nombre: "Monitor 30 pulgadas",
    precio: "5600"
}
carrito.push(producto);

console.table(carrito);

const producto3 =
{
    nombre: "Test",
    precio: 600
}

carrito.unshift(producto3); //coloca primero q todo
console.table(carrito);