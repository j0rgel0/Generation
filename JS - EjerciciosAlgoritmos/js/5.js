//Elaborar un algoritmo para leer 3 números y 
//determinar sí uno es la suma de los otros dos

let botonEjecutar = document.querySelector("#botonEjecutar");
botonEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("mensajeError").innerHTML="";
    document.getElementById("resultado").innerHTML="";

    let form = document.querySelector("#formEjecutar");
    let num = [];
    num[0] = parseFloat(form.num1.value);
    num[1] = parseFloat(form.num2.value);
    num[2] = parseFloat(form.num3.value);
    
    console.log(num[0]);
    console.log(num[1]);
    console.log(num[2]);
    let menor = num[0];
    let mensajeError;

    for (let i = 0; i < num.length; i++) {
        if (isNaN(num[0]) || isNaN(num[1]) || isNaN(num[2])){
            console.log("¿Escríbiste un número?, vuelve a escribir el número por favor");
            document.getElementById("mensajeError").innerHTML="¿Escríbiste un número?, solo acepto números enteros del 1 al 100, vuelve a escribir el número por favor";
            document.getElementById("resultado").innerHTML="";
            break;
        } 
        // else if(num[0] == num[1] || num[1] == num[2] || (num[0] == num[2]) ){
        //     console.log("Escribiste números iguales, elije otro(s) por favor");
        //     document.getElementById("mensajeError").innerHTML="Escribiste números iguales, elije otro(s) por favor";
        //     document.getElementById("resultado").innerHTML="";
        //     break;
        // }
        else if(num[0] == (num[1]+num[2])) {
        console.log("El primer número es igual a la suma del segundo más el tercero: " + num[0] + " = " + num[1] + " + " + num[2]);
        document.getElementById("resultado").innerHTML=
        "El primer número es igual a la suma del segundo más el tercero: " + num[0] + " = " + num[1] + " + " + num[2];

    } else if(num[1] == (num[0]+num[2])) {
        console.log("El segundo número es igual a la suma del primero más el tercero: " + num[1] + " = " + num[0] + " + " + num[2]);
        document.getElementById("resultado").innerHTML=
        "El segundo número es igual a la suma del primero más el tercero: " + num[1] + " = " + num[0] + " + " + num[2];

    } else if(num[2] == (num[0]+num[1])) {
        console.log("El tercer número es igual a la suma del primero más el segundo: " + num[2] + " = " + num[0] + " + " + num[1]);
        document.getElementById("resultado").innerHTML=
        "El tercer número es igual a la suma del primero más el segundo: " + num[2] + " = " + num[0] + " + " + num[1]
    }
    }
    
    }
    
);