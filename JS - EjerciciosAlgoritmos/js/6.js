// 6.Elabora un algoritmo para leer un número
// y determinar si es par o impar
let botonEjecutar = document.querySelector("#botonEjecutar");
botonEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    let form = document.querySelector("#formEjecutar");
    let num = [];
    num[0] = form.num1.value;
    console.log(num[0]);

    if(num[0] % 2 == 0) {
        console.log("El numero que escribiste fue: "+ num[0] +" y es par.");
        document.getElementById("resultado").innerHTML=
        "El numero que escribiste fue: "+ num[0] +" y es par.";
    } else {
        console.log("El numero que escribiste fue: "+ num[0] +" y es impar.");
        document.getElementById("resultado").innerHTML=
        "El numero que escribiste fue: "+ num[0] +" y es impar."
    }
    }
    
);


// let num1 = parseFloat(prompt("Escribe un número"));
// if (isNaN(num1)) {
//     let num1 = parseFloat(prompt("No escribiste nada, por favor, escribelo de nuevo:"));
// }
console.log();



