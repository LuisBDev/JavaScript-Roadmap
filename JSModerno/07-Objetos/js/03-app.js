const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

//Add new properties

producto.imagen = "imagen.jpg";

//Delete properties 

delete producto.disponible;

console.log(producto);

