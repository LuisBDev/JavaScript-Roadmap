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

//Destructuring arrays
const numeros = [10, 20, 30, 40];
//const [primero, segundo, tercero, cuarto] = numeros;
//const [, , tercero] = numeros;
const [primero, ...segundo] = numeros;
console.log(segundo); //[20,30,40]


