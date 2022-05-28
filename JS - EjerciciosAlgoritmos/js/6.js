// 6.Elabora un algoritmo para leer un número
// y determinar si es par o impar
let botonEjecutar = document.querySelector("#botonEjecutar");
botonEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("mensajeError").innerHTML="";
    document.getElementById("resultado").innerHTML="";

    let form = document.querySelector("#formEjecutar");
    let num = [];
    num[0] = Number(form.num1.value);
    console.log(num[0]);
    let mensajeError;
    let divResultado = document.querySelector('#divResultado');
    let txtResultado = document.querySelector('#resultado');

    for (let i = 0; i < num.length; i++) {
        if (isNaN(num[0])){
            console.log("¿Escríbiste un número?, vuelve a escribir el número por favor");
            document.getElementById("mensajeError").innerHTML="¿Escríbiste un número?, vuelve a escribir el número por favor";
            document.getElementById("resultado").innerHTML="";
            break;
        } else if(num[0] == 0) {
            document.getElementById("resultado").innerHTML=
            "Tal vez dejaste la celda vacía o pusiste cero, quiero decirte que el 0 es par, ¿Por qué, matemáticamente, el cero es un número par? Debido a que cualquier número que puede ser dividido por dos para crear otro número entero es par. El cero pasa esta prueba porque si dividimos a la mitad el cero, el resultado es cero.";
        } else if(num[0] % 2 == 0) {
        console.log("El numero que escribiste fue: "+ num[0] +" y es par.");
        document.getElementById("resultado").innerHTML=
        "El numero que escribiste fue: "+ num[0] +" y es par.";
        divResultado.classList.replace('badge-warning','badge-light');
        txtResultado.classList.replace('text-dark','text-success');
    } else {
        console.log("El numero que escribiste fue: "+ num[0] +" y es impar.");
        document.getElementById("resultado").innerHTML=
        "El numero que escribiste fue: "+ num[0] +" y es impar."
        divResultado.classList.replace('badge-light','badge-warning');
        txtResultado.classList.replace('text-success','text-dark');
    }
    
    }
}
    
);


