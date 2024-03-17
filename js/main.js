let nombre = "";
while(nombre === ""){
    nombre = prompt("Ingrese nombre");
    if(nombre === ""){
        alert("Un texto vacio no es válido.");
    }
    else if(nombre !== ""){
        alert("Bienvenido! " + nombre + " te dejamos las cuotas a pagar");
    }
}
let edadIngresada = parseInt(prompt("ingrese su edad"));
if(edadIngresada < 18){
    alert("No podes ingresar, sos menor de 18");
}
else if(edadIngresada >= 18){
    alert("Podes ingresar, sos mayor de 18")
}
let x = 2500000;
let y = 1;
while(x <= 7200000){
    x = x * 1.10;
    z = x / 10;
    console.log("Cuota " + y++ + " $" + x)
    
    };
