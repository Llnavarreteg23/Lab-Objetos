function semaforo() {
    this.estado = "rojo";
}

semaforo.prototype.cambio = function cambiar() {
    
    console.log("Estado actual: "+ this.estado);

    if (this.estado == "rojo"){
        this.estado = "amarillo";
        console.log(this.estado);

    } else if (this.estado == "amarillo"){
        this.estado = "verde";
        console.log(this.estado);
    }
    console.log("Estado actual: " + this.estado);
    

}

let semaforo1 = new semaforo()

semaforo1.cambiar()
semaforo1.cambiar()
semaforo1.cambiar()