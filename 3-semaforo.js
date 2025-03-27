function Semaforo(){
    this.estado = "rojo" 
    
}
function cambiar(semaforo){
    if (semaforo.estado === "rojo"){
        semaforo.estado = "verde";
    }else if(semaforo.estado === "verde"){
        semaforo.estado = "amarillo";
    }else if(semaforo.estado === "amarillo"){
        semaforo.estado = "rojo";
    }
    console.log("Semáforo ahora está en:", semaforo.estado);     
}
let semaforo = new Semaforo(); 
cambiar(semaforo); 
cambiar(semaforo); 
cambiar(semaforo);