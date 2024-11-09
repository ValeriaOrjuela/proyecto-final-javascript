

let total, cantidad, multiplicacion, suma, producto;
total = 0;
let seguir;

let productos = [
    {
        id: 1,
        nombre: "Lampara",
        cantidad: 500,
        colorDisp: [
            {
                color: "rojo",
                cantidad: 100,
            },
            {
                color: "verde",
                cantidad: 150,
            },
            {
                color: "blanco",
                cantidad: 50,
            },
            {
                color: "negro",
                cantidad: 400,
            }
        ],
        precio: 5000
    },
    {
        id: 2,
        nombre: "Lampara ninos",
        cantidad: 500,
        colorDisp: [

            {
                color: "blanco",
                cantidad: 35,
            },
            {
                color: "negro",
                cantidad: 20,
            }
        ],
        precio: 10000
    },
    {
        id: 3,
        nombre: "matera",
        cantidad: 500,
        colorDisp: [
            {
                color: "morado",
                cantidad: 500,
            },
            {
                color: "gris",
                cantidad: 200,
            },
            {
                color: "blanco",
                cantidad: 500,
            },
            {
                color: "negro",
                cantidad: 400,
            }
        ],
        precio: 3500
    }
];

function disposeProducts() {
    let espacio = document.getElementById("mejoresProductos");
    productos.forEach(producto => {
        let contenedor = document.createElement("div");
        contenedor.className = "tarjetasProductos";
        contenedor.innerHTML = `

                <h2>${producto.nombre}</h2>
                <img src="../img/jarron.jpg"" alt="Imagen producto x" class = "imgprod">
                <h3>$ ${producto.precio}</h3>
                <button onclick="agregarAlCarrito(${producto.id})">añadir</button>
                `;
        espacio.appendChild(contenedor);

    });
}


function agregarAlCarrito(id) {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = productos.find(prod => prod.id === id);

    const productoEncontrado = CARRITO.find(prod => prod.id === id);
    if (productoEncontrado) {
        productoEncontrado.cantidad += 1;
    } else {
        CARRITO.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(CARRITO));
}

function mostrarCarrito() {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoList = document.getElementById("carrito");
    carritoList.innerHTML = '';
    let total1 = 0;
    CARRITO.forEach((producto, index) => {
        let li = document.createElement("li");
        li.textContent = `${producto.nombre} - ${producto.precio}`;
        li.innerHTML += `
        <button onclick="eliminarDelCarrito(${index})">Eliminar producto</button> 
        `
        carritoList.appendChild(li);
        total1 += producto.precio*producto.cantidad;
    })
    document.getElementById("total").textContent = `total: $${total1}`;
}

document.addEventListener("DOMContentLoaded", () =>{
    disposeProducts();
    mostrarCarrito();
});




// console.log(productos);
// for( const prod of productos){
//     for(const colo of prod.colorDisp){
//         colo.cantidad= colo.cantidad-1;
//         console.log(colo.cantidad);
//     }

// }

function agregarProducto(id, nombre, precio) {
    let color, cantidad
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    let colores = parseInt(prompt("Cuantos colores va a inscribir?"));
    for (let cant = 0; cant <= colores - 1; cant++) {
        color = prompt("Ingrese el color");
        color = color.toLocaleLowerCase()
        cantidad = parseInt(prompt("Cuantos porductos hay de ese color"))
        this.colorDisp = new ColorDisp(color, cantidad);
    }
}

function ColorDisp(color, cantidad) {
    this.color = color;
    this.cantidad = cantidad;

}


// let prod4 = new agregarProducto(4,"producto 4", 20000);
// console.log(prod4);


function actualizarCantidad(cantidad, producto, color) {
    for (const prod of productos) {
        console.log(prod);
        if (prod.id === producto) {
            for (const colord of prod.colorDisp) {
                if (colord.color === color) {
                    colord.cantidad = colord.cantidad - cantidad;
                    if (colord.cantidad <= 1) {
                        prod.colorDisp = prod.colorDisp.filter(mayores => mayores.cantidad >= 1);
                        console.log(prod.colorDisp);
                    }
                }
            }
        }
    }
}

function mostrarColores(producto) {
    for (const prod of productos) {
        if (prod.id === producto) {
            for (const col of prod.colorDisp) {
                console.log(col.color)
            }
        }
    }
}
function totalmult(prod, canti, operacion) {
    let precio
    for (const produ of productos) {
        if (prod === produ.id) {
            precio = produ.precio;
        }
    }
    return operacion(precio, canti);
}
function multi(a, b) {
    return a * b;
}

function verificacionColor(produ, color) {
    let disp
    for (const prod of productos) {
        if (produ === prod.id) {
            for (col of prod.colorDisp) {
                if (color === col.color) {
                    disp = true;
                    return true;
                }
            }
        }
    }
    if (disp != true) {
        return false;
    }
}


while (true) {

    mostrarProductos();

    producto = parseInt(prompt("Cual producto deseas: 1, 2, 3, 4 o 5? "));
    console.log(producto);

    mostrarColores(producto);

    let color = prompt("Cual de los colores quieres?");



    if (producto != NaN) {
        while (verificacionColor(producto, color) == false) {
            if (verificacionColor(producto, color) == false) {
                console.log("Ingresaste un color invalido");
                mostrarColores(producto);
                color = prompt("Cual de los colores quieres?");
                if (color === "") {
                    break;
                }
            };
        };
    }



    color = color.toLocaleLowerCase();


    switch (producto) {
        case 1:
            cantidad = parseInt(prompt("Cuantas unidades quieres: "));
            actualizarCantidad(cantidad, producto, color);
            console.log("Total producto 1: " + totalmult(producto, cantidad, multi));
            total = total + totalmult(producto, cantidad, multi);
            break;
        case 2:
            cantidad = parseInt(prompt("Cuantas unidades quieres: "));
            actualizarCantidad(cantidad, producto, color);
            console.log("Total producto 2: " + totalmult(producto, cantidad, multi));
            total = total + totalmult(producto, cantidad, multi);
            break;
        case 3:
            cantidad = parseInt(prompt("Cuantas unidades quieres: "));
            actualizarCantidad(cantidad, producto, color);
            console.log("Total producto 3: " + totalmult(producto, cantidad, multi));
            total = total + totalmult(producto, cantidad, multi);
            break;
        case 4:
            cantidad = parseInt(prompt("Cuantas unidades quieres: "));
            actualizarCantidad(cantidad, producto, color);
            console.log("Total producto 4: " + totalmult(producto, cantidad, multi));
            total = total + totalmult(producto, cantidad, multi);
            break;
        case 5:
            cantidad = parseInt(prompt("Cuantas unidades quieres: "));
            actualizarCantidad(cantidad, producto, color);
            console.log("Total producto 5: " + totalmult(producto, cantidad, multi));
            total = total + totalmult(producto, cantidad, multi);
            break;
        default:
            alert("No ingresaste una opción valida, intenta de nuevo, recuerda que debes poner solo el número del producto que quieres")
    }

    seguir = prompt("Deseas seguir tu compra? (ingresa 'si' para seguir o 'no' para seguir con el total ");


    if (seguir.toLowerCase() === "no") {
        break;
    } else if (seguir.toLowerCase() !== "si" && seguir.toLowerCase() !== "no") {
        console.log("No ingresaste una opción valida, por lo tanto seguiras con la compra");
    }


}

console.log("El valor de tu pedido es: " + total);

function mostrarProductos() {

    for (prod of productos) {
        console.log(prod.nombre + ": " + prod.precio);
    }
}





