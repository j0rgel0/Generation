// 4.Solicitar un entero (entre el 100 y el 200) 
//   y determinar si es múltiplo de 3

let botonEjecutar = document.querySelector("#botonEjecutar");
botonEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    let form = document.querySelector("#formEjecutar");
    let num = [];
    num[0] = form.num1.value;
    console.log(num[0]);

    if(num[0] < 100 || num[0] > 200) {
        console.log("Escribe un número entre el 100 y 200.");
        document.getElementById("resultado").innerHTML=
        "";
        document.getElementById("mensajeError").innerHTML=
        "Escribe un número entre el 100 y 200.";
    } else if(num[0] % 3 == 0) {
        console.log("Si es multiplo de 3.");
        document.getElementById("resultado").innerHTML=
        "Si es multiplo de 3.";
    } else {
        console.log("No es multiplo de 3.");
        document.getElementById("resultado").innerHTML=
        "No es multiplo de 3.";
    }

    
    }
    
);