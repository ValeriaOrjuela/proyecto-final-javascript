

const producto1= 70000;
const producto2 = 20000;
const producto3 = 80500;
const producto4 = 105800;
const producto5 =38750;

let total, cantidad, multiplicacion, suma,producto;
total=0;
let seguir;
while(true){
    
    mostrarProductos();

    producto=parseInt(prompt("Cual producto deseas: 1, 2, 3, 4 o 5? "));
    multiplicacion= function(precio,cantidad){
        return precio*cantidad;
    }
    switch(producto){
        case 1:
            cantidad=parseInt(prompt("Cuantas unidades quieres: "));
            console.log("Total producto 1: " + multiplicacion(producto1,cantidad));
            total= total + multiplicacion(producto1,cantidad);
            break;
        case 2:
            cantidad=parseInt(prompt("Cuantas unidades quieres: "));
            console.log("Total producto 2: " + multiplicacion(producto2,cantidad));
            total=total + multiplicacion(producto2,cantidad);
            break;
        case 3:
            cantidad=parseInt(prompt("Cuantas unidades quieres: "));
            console.log("Total producto 3: " + multiplicacion(producto3,cantidad));
            total= total + multiplicacion(producto3,cantidad);
            break;
        case 4:
            cantidad=parseInt(prompt("Cuantas unidades quieres: "));
            console.log("Total producto 4: " + multiplicacion(producto4,cantidad));
            total= total + multiplicacion(producto4,cantidad);
            break;
        case 5:
            cantidad=parseInt(prompt("Cuantas unidades quieres: "));
            console.log("Total producto 5: " + multiplicacion(producto5,cantidad));
            total= total + multiplicacion(producto5,cantidad);

            break;
        default:
            alert("No ingresaste una opción valida, intenta de nuevo, recuerda que debes poner solo el número del producto que quieres")
    }

    seguir=prompt("Deseas seguir tu compra? (ingresa 'si' para seguir o 'no' para seguir con el total ");

    console.log(seguir.toLowerCase())

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



