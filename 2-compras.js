function listaCompras() {
    this.productos = [];   
}

let listas = new listaCompras();
listas.productos.push("manzanas")
listas.productos.push("uva")
listas.productos.push("melocoton")

function mostrar(lista) {
    console.log("Lista de compras: ");
    for (i=0; i < lista.productos.length;i++){
        console.log((i+1) + ". " + lista.productos[i]);
    }
}
mostrar(listas)