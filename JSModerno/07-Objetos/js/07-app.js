const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,

}

const nombreProducto = 'Monitor';
//nombreProducto = 'Tablet'; //Error, no se puede reasignar

producto.disponible = false; //Sí se puede reasignar en objetos
delete producto.precio;
console.log(producto);
