//Añadir funciones en un objeto

const reproductor = {

    reproducir: function (id) {
        console.log(`Reproduciendo una cancion con el id ${id}`);
    },
    pausar: function () {
        console.log(`Pausando..`);
    },
    borrar: function (id) {
        console.log(`Borrando cancion id ${id}`);
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlayList: function (nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    }


}
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("metal");
reproductor.reproducirPlayList("heavy metal");

