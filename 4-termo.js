function Termometro() {
}

Termometro.prototype.actualizar = function actualizar(grados) {
    if (grados > 30) {
        console.log(`Hace calor!`);
    } else if (grados < 10) {
    console.log(`Hace frio!`);
    } else {
    console.log(`Temperatura agradable!`);
    }
}
let termometro1 = new Termometro();
termometro1.actualizar(15)