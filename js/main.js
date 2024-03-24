alert("Bienvenido al simulador de prestamos. Por favor, ingrese los datos que solicitamos a continuación.")

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
let nombreIngresado = prompt("Ingrese su Nombre")
let apellidoIngresado = prompt("Ingrese su Apellido");

alert("Bienvenido/a " + nombreIngresado + " " + apellidoIngresado)

function saludar(nombreIngresado, apellidoIngresado){
    console.log("Hola, " + nombreIngresado + " " +  apellidoIngresado + " ¡Bienvenido/a!");
}
saludar(nombreIngresado, apellidoIngresado);

// Funciones con retorno

let a = parseInt(prompt("Ingrese monto a solicitar"))
alert("Trabajamos con un interes fijo del 0.80%, por el total del préstamo solicitado")

let ingreseCuotas = parseInt(prompt("Ingrese la cantida de cuotas, hasta 12"))

function sumar(a, b){
    let suma = (a * b);
    return suma;
}
console.log("Usted solicito " + "$"+ a)
console.log("Monto a devolver " +"$" + (a * 1.8) + " en " + ingreseCuotas + " cuotas de: ")
console.log(sumar (a, 1.8) / ingreseCuotas);


function cuotas(ingreseCuotas){
    if (ingreseCuotas <= 12) {
        return ("Usted eligio " + ingreseCuotas + " cuotas")
        
    } else{
        return "Ese numero de cuotas no es valido, por favor elija cuotas del 1 al 12"
    }
}

alert(cuotas(ingreseCuotas));
alert(cuotas(ingreseCuotas));


let x = a * 1.8;
let y = 1;
while(y <= ingreseCuotas){
    z = x / ingreseCuotas;
    console.log("Cuota " + y++ + " $" + z)
    
}