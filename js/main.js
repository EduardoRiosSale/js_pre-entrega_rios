let edadIngresada = parseInt(prompt("Ingrese su edad"));
while(edadIngresada < 18)
        edadIngresada = prompt("Edad invalida, ingrese su edad");
        if(edadIngresada < 18){
            alert("No podes ingresar, sos menor de 18")
        }
        else if(edadIngresada >= 18){
            alert("Bienvenido/a sos mayor de 18");
        }



//Funciones declaradas
let nombreIngresado = prompt("Ingrese su Nombre.");
let apellidoIngresado = prompt("Ingrese su Apellido.");
alert("Por favor, a continuacion ingrese su sexo.")
let sexoIngresado = prompt("Hombre, Mujer, Otros ")
let dniIngresado = parseInt(prompt("Ingrese su numero de documento."));
let cuilIngresado = parseInt(prompt("Ingrese su numero de CUIL."));


alert("Bienvenido/a " + nombreIngresado + " " + apellidoIngresado);

//objetos

class usuario{
    constructor(nombreIngresado, apellidoIngresado, edadIngresada, sexoIngresado, dniIngresado, cuilIngresado) 
    {
    this.A_nombre = nombreIngresado;
    this.B_apellido = apellidoIngresado;
    this.C_edad = edadIngresada;
    this.D_sexo = sexoIngresado;
    this.F_dni = dniIngresado;
    this.G_cuil = cuilIngresado;   }

};

function saludar(nombreIngresado, apellidoIngresado){
    console.log("Hola, " + nombreIngresado + " " +  apellidoIngresado + " ¡Bienvenido/a!");
}
saludar(nombreIngresado, apellidoIngresado);

const usuario1 = new usuario(nombreIngresado, apellidoIngresado, edadIngresada, sexoIngresado, dniIngresado, cuilIngresado);
console.log(usuario1);

   // Funciones con retorno

let a = parseInt(prompt("Ingrese monto a solicitar"))
alert("Trabajamos con un interes fijo del 0.80%, por el total del préstamo solicitado")

let ingreseCuotas = parseInt(prompt("Ingrese la cantida de cuotas, hasta 12"))

function sumar(a, b){
    let suma = (a * b);
    return suma;
}
console.log("Usted solicito " + a)
console.log("Monto a devolver " + (a * 1.8) + " en " + ingreseCuotas + " cuotas de: ")
console.log(sumar (a, 1.8) / ingreseCuotas);


function cuotas(ingreseCuotas){
    if (ingreseCuotas <= 12) {
        return ("Usted eligio " + ingreseCuotas + " cuotas")
        
    } else{
        return "Ese numero de cuotas no es valido, por favor elija cuotas del 1 al 12"
    }
}

alert(cuotas(ingreseCuotas));


let x = a * 1.8;
let y = 1;
while(y <= ingreseCuotas){
    z = x / ingreseCuotas;
    console.log("Cuota " + y++ + " $" + z)
    
}

// Arrays
alert("¡ATENCION! A continuación elija que tipo de prestamo quiere ver")
const productos = ["Prestamo Prendario", "Prestamo personal", "Prestamo Hipotecario", "Prestamo Comercial"];

for(let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}

//Funcion Find
const prestamos = [
    {
        tipo:"personal",
        maxCuotas:36,
        hastaPesos: 5000000,
    },
    {
        tipo:"prendario",
        maxCuotas:60,
        hastaPesos:20000000,
    },
    {
        tipo: "hipotecario",
        maxCuotas:84,
        hastaPesos:50000000,
    },
    {
        tipo:"comercial",
        maxCuotas:48,
        hastaPesos:10000000,
    }
]


let buscador = prompt("Mencione el tipo de prestamo: Personal / Prendario / Hipotecario / Comercial.")

const prestamoEncontrados = prestamos.find((prestamo) => prestamo.tipo === buscador)
console.log(prestamoEncontrados)
