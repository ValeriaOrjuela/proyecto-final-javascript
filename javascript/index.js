

const producto1= 70000;
const producto2 = 20000;
const producto3 = 80500;
const producto4 = 105800;
const producto5 =38750;

let total, cantidad, multiplicacion, suma,producto;
total=0;
let seguir;
productos = [
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

function agregarProducto(){

}
function actualizarCantidad(cantidad, producto, color){
    for( const prod of productos){
        console.log(prod);
        if (prod.id === producto){
            for (const colord of prod.colorDisp){
                if(colord.color === color){
                    colord.cantidad = colord.cantidad - cantidad;
                }
            }
        }
    }
}

function mostrarColores(producto){
    for(const prod of productos){
        if(prod.id=== producto){
            for(const col of prod.colorDisp){
                console.log(col.color)
            }
        }
    }
}
while(true){
    
    mostrarProductos();

    producto=parseInt(prompt("Cual producto deseas: 1, 2, 3, 4 o 5? "));

    mostrarColores(producto);

    let color = prompt ("Cual de los colores quieres?");

    color = color.toLocaleLowerCase();
    
    multiplicacion= function(precio,cantidad){
        return precio*cantidad;
    }
    switch(producto){
        case 1:
            cantidad=parseInt(prompt("Cuantas unidades quieres: "));
            actualizarCantidad(cantidad, producto, color);
            console.log("Total producto 1: " + multiplicacion(producto1,cantidad));
            total= total + multiplicacion(producto1,cantidad);
            break;
        case 2:
            cantidad=parseInt(prompt("Cuantas unidades quieres: "));
            actualizarCantidad(cantidad, producto, color);
            console.log("Total producto 2: " + multiplicacion(producto2,cantidad));
            total=total + multiplicacion(producto2,cantidad);
            break;
        case 3:
            cantidad=parseInt(prompt("Cuantas unidades quieres: "));
            actualizarCantidad(cantidad, producto, color);
            console.log("Total producto 3: " + multiplicacion(producto3,cantidad));
            total= total + multiplicacion(producto3,cantidad);
            break;
        case 4:
            cantidad=parseInt(prompt("Cuantas unidades quieres: "));
            actualizarCantidad(cantidad, producto, color);
            console.log("Total producto 4: " + multiplicacion(producto4,cantidad));
            total= total + multiplicacion(producto4,cantidad);
            break;
        case 5:
            cantidad=parseInt(prompt("Cuantas unidades quieres: "));
            actualizarCantidad(cantidad, producto, color);
            console.log("Total producto 5: " + multiplicacion(producto5,cantidad));
            total= total + multiplicacion(producto5,cantidad);

            break;
        default:
            alert("No ingresaste una opción valida, intenta de nuevo, recuerda que debes poner solo el número del producto que quieres")
    }

    seguir=prompt("Deseas seguir tu compra? (ingresa 'si' para seguir o 'no' para seguir con el total ");


    if (seguir.toLowerCase()==="no"){
        break;
    }else if(seguir.toLowerCase() !== "si" && seguir.toLowerCase() !== "no"){
        console.log("No ingresaste una opción valida, por lo tanto seguiras con la compra");
    }
    
    
}

console.log("El valor de tu pedido es: "+ total);

function mostrarProductos(){

    const producto1= 70000;
    const producto2 = 20000;
    const producto3 = 80500;
    const producto4 = 105800;
    const producto5 =38750;
    
    console.log("Producto 1: " + producto1);
    console.log("Producto 2: " + producto2);
    console.log("Producto 3: " + producto3);
    console.log("Producto 4: " + producto4);
    console.log("Producto 5: " + producto5);
}



