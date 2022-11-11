const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
}

//const nombre = producto.nombre;

//Destructuring
// const { nombre } = producto;
// const { precio } = producto;
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
