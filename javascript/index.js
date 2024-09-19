const producto1= 70000;
const producto2 = 20000;
const producto3 = 80500;
const producto4 = 105800;
const producto5 =38750;

let total, cantidad, multiplicacion, suma,producto;
producto=parseInt(prompt("Cual producto deseas: 1, 2, 3, 4 o 5? "));

switch(producto){
    case 1:
        cantidad=parseInt(prompt("Cuantas unidades quieres: "));
        total=producto1*cantidad;
        break;
    case 2:
        cantidad=parseInt(prompt("Cuantas unidades quieres: "));
        total=producto2*cantidad;
        break;
    case 3:
        cantidad=parseInt(prompt("Cuantas unidades quieres: "));
        total=producto3*cantidad;
        break;
    case 4:
        cantidad=parseInt(prompt("Cuantas unidades quieres: "));
        total=producto4*cantidad;
        break;
    case 5:
        cantidad=parseInt(prompt("Cuantas unidades quieres: "));
        total=producto5*cantidad;
        break;
    default:
        alert("No ingresaste una opción valida, intenta de nuevo")
}

console.log("El valor de tu pedido es: "+ total);



