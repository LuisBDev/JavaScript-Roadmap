const meses = ["Enero", "Febrero", "Marzo"];
//meses[3] = "Abril";

meses.push("Abril"); //forma recomendada agregar
meses.push("Mayo");

// console.table(meses);

const carrito = [];

const producto =
{
    nombre: "Monitor 30 pulgadas",
    precio: "5600"
}

const producto2 =
{
    nombre: "Mouse",
    precio: 600
}
const producto3 =
{
    nombre: "Test",
    precio: 600
}

const producto4 =
{
    nombre: "Celular",
    precio: 900
}
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);
carrito.unshift(producto3); //coloca primero q todo

//Eliminar el ultimo elemento de un arreglo:
console.log("Antes del pop: ");
console.table(carrito);

carrito.pop();
console.log("Despues del pop");
console.table(carrito);
// carrito.shift(); //Elimina del inicio del arreglo


//Eliminar elemento con splice y posicion
//carrito.splice(1, 1);
console.table(carrito);