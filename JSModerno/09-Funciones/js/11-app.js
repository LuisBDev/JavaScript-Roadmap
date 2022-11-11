//arrow functions con paso de parametros

const aprendiendo = function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
}
const aprendiendo2 = (tecnologia) => `Aprendiendo ${tecnologia}`

const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

aprendiendo("javascript..!");
console.log(aprendiendo2("python"));
console.log(aprendiendo3("Javascript", "Node.JS"));