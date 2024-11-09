let total, cantidad, multiplicacion, suma, producto;
total = 0;
let seguir;
let carrito =[];
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
function disposeProducts (){
    let espacio = document.getElementById("mejoresProductos");
    
    for(const prod of productos){
    let contenedor = document.createElement("div");
    contenedor.className = "tarjetasProductos";
    contenedor.innerHTML = `

                <h2>${prod.nombre}</h2>
                <img src="../img/jarron.jpg"" alt="Imagen producto x" class = "imgprod">
                <h3>$ ${prod.precio}</h3>
                <button>añadir</button>

    `;
    espacio.appendChild(contenedor);
}
}
disposeProducts();


let titulo2 = document.getElementById("hDinamico");
titulo2.innerText = "Aqui puedo cambiar el texto que tengo en el HTML desde JS";

let containerCards = document.getElementById("container-cards");
containerCards.innerHTML = `
            <div class ="cuadro">
                <h2>
                    PRODUCTO1
                </h2>
                <p>
                    Informacion del producto
                </p>
                <button>añadir</button>
            </div>

`
let contenedor= document.getElementById("contenedor");
let parrafo = document.createElement("p");
parrafo.innerText =' esto es un parrafo creado desde JS';
contenedor.appendChild(parrafo);