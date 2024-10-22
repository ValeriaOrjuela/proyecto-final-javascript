

const producto1 = 70000;
const producto2 = 20000;
const producto3 = 80500;
const producto4 = 105800;
const producto5 = 38750;

let total, cantidad, multiplicacion, suma, producto;
total = 0;
let seguir;
let productos = [
    {
        id: 1,
        nombre: "producto 1",

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
        nombre: "producto 2",

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
        nombre: "producto 3",

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

// console.log(productos);
// for( const prod of productos){
//     for(const colo of prod.colorDisp){
//         colo.cantidad= colo.cantidad-1;
//         console.log(colo.cantidad);
//     }

// }

function agregarProducto() {

}
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

    mostrarColores(producto);

    let color = prompt("Cual de los colores quieres?");
    while (verificacionColor(producto, color) == false) {
        if (verificacionColor(producto, color) == false) {
            console.log("Ingresaste un color invalido");
            mostrarColores(producto);
            color = prompt("Cual de los colores quieres?");
        };
    };


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



