// Conjunto de datos que tienen algo en común
// No tinen un tamaño fijo
let numNombres = 1;
let nombresArray =[];

let botonEjecutar = document.querySelector("#botonEjecutar");
botonEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    console.clear();

    let form = document.querySelector("#formEjecutar");
    let nombre = form.nombreInput.value; // nombre del formulario 

        document.getElementById("numNombres").innerHTML="Lleva "+numNombres+" nombres(s).";
        numNombres++;
        nombresArray.push(nombre);

        document.getElementById("nombresArray").innerHTML=
        nombresArray;

    });