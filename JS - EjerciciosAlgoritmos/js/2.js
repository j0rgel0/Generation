//Solicitar 3 números (entre el 1 y el 100) 
//y definir cual es el mayor

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
        if(num[0] == 0 || num[1] == 0 || num[2] == 0 ){
            console.log("Escribiste 0 o nada en algunas de las entradas, solo trabajo con números enteros del 1 al 100, vuelve a escribir el número por favor");
            document.getElementById("mensajeError").innerHTML="Escribiste 0 o nada, solo trabajo con números enteros del 1 al 100, vuelve a escribir el número por favor";
            document.getElementById("resultado").innerHTML="";
            break;
        } else if (isNaN(num[0]) || isNaN(num[1]) || isNaN(num[2])){
            console.log("¿Escríbiste un número?, solo acepto números enteros del 1 al 100, vuelve a escribir el número por favor");
            document.getElementById("mensajeError").innerHTML="¿Escríbiste un número?, solo acepto números enteros del 1 al 100, vuelve a escribir el número por favor";
            document.getElementById("resultado").innerHTML="";
            break;
        } else if((num[0] > 100 || num[0] < 0) || (num[1] > 100 || num[1] < 0) || (num[2] > 100 || num[2] < 0) ){
            console.log("De momento, solo trabajo con números enteros del 1 al 100, vuelve a escribir el número por favor");
            document.getElementById("mensajeError").innerHTML="De momento, solo trabajo con números enteros del 1 al 100, vuelve a escribir el número por favor";
            document.getElementById("resultado").innerHTML="";
            break;
        } else if(num[0] == num[1] || num[1] == num[2] || (num[0] == num[2]) ){
            console.log("Escribiste números iguales, elije otro(s) por favor");
            document.getElementById("mensajeError").innerHTML="Escribiste números iguales, elije otro(s) por favor";
            document.getElementById("resultado").innerHTML="";
            break;
        }else if(menor>num[i]){
            menor = num[i];
            document.getElementById("resultado").innerHTML=
            "El número menor es " + menor;
        }
    }



    
    }
    
);