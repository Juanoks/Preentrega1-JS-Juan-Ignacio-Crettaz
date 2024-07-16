const productos = [
    { id: 1, nombre: "Producto 1", precio: 10 },
    { id: 2, nombre: "Producto 2", precio: 20 },
    { id: 3, nombre: "Producto 3", precio: 30 }
];

let carrito = [];
let precioTotal = 0;

function buscarProductoPorId(idProducto) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === idProducto) {
            return productos[i];
        }
    }
    return null;
}

function agregarAlCarrito(idProducto) {
    const producto = buscarProductoPorId(idProducto);
    if (producto) {
        carrito.push(producto);
        precioTotal += producto.precio;
        alert("Has añadido " + producto.nombre + " al carrito.");
    } else {
        alert("Producto no encontrado.");
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        console.log("Contenido del carrito:");
        for (let i = 0; i < carrito.length; i++) {
            console.log(carrito[i].nombre + " - $" + carrito[i].precio);
        }
        console.log("Total: $" + precioTotal);
    }
}

function iniciarCompra() {
    let continuarComprando = true;

    while (continuarComprando) {
        let idProducto = parseInt(prompt("Introduce el ID del producto que querés añadir al carrito (1, 2, 3):"));
        agregarAlCarrito(idProducto);

        continuarComprando = confirm("¿Querés añadir otro producto al carrito?");
    }

    mostrarCarrito();
}

iniciarCompra();
