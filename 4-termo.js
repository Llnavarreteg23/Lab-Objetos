const prompt = require("prompt-sync")();
function Termometro() {

    this.actualizar = function actualizar(grados) {
        if (grados > 30) {
            console.log(`Hace calor!`);
        } else if (grados < 10) {
        console.log(`Hace frio!`);
        } else {
        console.log(`Temperatura agradable!`);
        }
    }
}

/*Termometro.prototype.actualizar = function actualizar(grados) {
    if (grados > 30) {
        console.log(`Hace calor!`);
    } else if (grados < 10) {
    console.log(`Hace frio!`);
    } else {
    console.log(`Temperatura agradable!`);
    }
}
*/
let termometro1 = new Termometro();
grados = Number(prompt("Digite la temperatura: "))
termometro1.actualizar(grados)