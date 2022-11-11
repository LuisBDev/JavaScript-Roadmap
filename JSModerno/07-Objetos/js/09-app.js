"use strict";  //uso de strict

const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,

}

Object.seal(producto);
//You can't delete, add an element but you
//can modify those elements

//producto.imagen = "imagen.png";
//--> Error Cannot add property imagen, object is not extensible


//Modifying
producto.precio = 500;
console.log(producto);

//Check if a object is sealed
console.log(Object.isSealed(producto));


