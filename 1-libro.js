function libro (titulo, autor){
    
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
}

libro.prototype.prestar = function prestar(){
    if (this.prestado){
        console.log(`El libro ${this.titulo} no está prestado`);
    } else{ 
        console.log(`El libro ${this.titulo} está prestado`);
    }
}

let libro1 = new libro("El principito", "Artur Camms");
let libro2 = new libro("La Odisea", "Homero");

console.log(libro1.prestado);
libro1.prestar();


