//Elaborar un algoritmo para leer 3 números y 
//determinar sí uno es la suma de los otros dos

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

    if(num[0] == (num[1]+num[2])) {
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
    
);



