"use strict";  //uso de strict

const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,

}

//Modificando valores o agregando

// producto.disponible = false;
// producto.imagen = "imagen.png";
// delete producto.nombre;

//Evitando que se modifiquen los elementos

//Uso de Object.freeze()

Object.freeze(producto);
//delete producto.nombre;
console.log(producto);

//Checking if a object is frozen.
console.log(Object.isFrozen(producto));