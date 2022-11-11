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

const { nombre, informacion, informacion: { fabricacion } } = producto;
console.log(nombre);
console.log(informacion);
console.log(informacion.fabricacion);
console.log(fabricacion);