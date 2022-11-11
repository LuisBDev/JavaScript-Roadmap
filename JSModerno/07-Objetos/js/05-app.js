const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m',

        fabricacion: {
            pais: "China"
        }
    }
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.fabricacion);
console.log(producto.informacion.fabricacion.pais);

