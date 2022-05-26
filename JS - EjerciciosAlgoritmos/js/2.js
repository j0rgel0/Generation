//Solicitar 3 números (entre el 1 y el 100) 
// y definir cual es el menor

let botonEjecutar = document.querySelector("#botonEjecutar");
botonEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    let form = document.querySelector("#formEjecutar");
    let num = [];
    num[0] = parseFloat(form.num1.value);
    num[1] = parseFloat(form.num2.value);
    num[2] = parseFloat(form.num3.value);

    console.log(num[0]);
    console.log(num[1]);
    console.log(num[2]);
    let menor = num[0];

    for (let i = 0; i < num.length; i++) {
        if(menor>num[i]){
            menor = num[i];
        }
    }
    document.getElementById("resultado").innerHTML=
    "El número menor es " + menor;
    
    }
    
);