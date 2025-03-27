function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
}
// Función externa para prestar el libro
function prestar(libro) {
    if (libro.prestado) {
        console.log("El libro está prestado.");
    } else {
        libro.prestado = true;
        console.log("Prestaste el libro " + libro.titulo);
    }
}

let libro1 = new Libro("Hamlet", "William");
prestar(libro1); 
prestar(libro1);