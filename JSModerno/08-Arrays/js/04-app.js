const meses = ["Enero", "Febrero", "Marzo", "Abril"];

meses[0] = "Reasignado";
meses[4] = "Making new value";

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}