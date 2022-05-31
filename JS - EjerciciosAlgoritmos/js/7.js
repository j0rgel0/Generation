// Conjunto de datos que tienen algo en común
// No tinen un tamaño fijo
let numNombres = 0;
let nombresArray =[];

let botonEjecutar = document.querySelector("#botonEjecutar");
let botonPop = document.querySelector("#botonPop");


botonEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    console.clear();

    let form = document.querySelector("#formEjecutar");
    let nombre = form.nombreInput.value; // Nombre del formulario 
        numNombres++;
        document.getElementById("numNombres").innerHTML="Lleva "+numNombres+" nombres(s).";

        nombresArray.push(nombre);

        document.getElementById("nombresArray").innerHTML= nombresArray;

        let index;

        // for
        document.getElementById("nombresArrayFor").innerHTML = "";
        console.log("Regresión realizada con For");
        for (index = nombresArray.length-1; index >= 0; index--) {
            console.log(nombresArray[index]);
            document.getElementById("nombresArrayFor").innerHTML += `<div>${nombresArray[index]}</div>`;
            }
        
        // while
        document.getElementById("nombresArrayWhile").innerHTML = "";
        index = nombresArray.length-1
        console.log("Regresión realizada con While");
        while (index >= 0) {
            console.log(nombresArray[index]);
            document.getElementById("nombresArrayWhile").innerHTML += `<div>${nombresArray[index]}</div>`;
            index--;
                }

        //do while
        document.getElementById("nombresArrayDoWhile").innerHTML = "";
        index = nombresArray.length-1
        console.log("Regresión realizada con DoWhile");
        do{
            console.log(nombresArray[index]);
            document.getElementById("nombresArrayDoWhile").innerHTML += `<div>${nombresArray[index]}</div>`;
            index--;
        }  while(index >= 0);

    //Limpia formulario
    form.reset();
    });

    botonPop.addEventListener("click",function(event){
        event.preventDefault();
        console.clear();

        //borrar el spam de todo
        document.getElementById("nombresArrayDoWhile").innerHTML = "";
        document.getElementById("nombresArrayWhile").innerHTML = "";
        document.getElementById("nombresArrayFor").innerHTML = "";
        document.getElementById("nombresArray").innerHTML = "";
        document.getElementById("numNombres").innerHTML = "";

        // Borrar la variable de los intentos.
        numNombres = numNombres - 1;

        // Borrar última entrada.
        nombresArray.pop();

        // Actualizar nombres en matriz
        document.getElementById("nombresArray").innerHTML= nombresArray;

        // Actualizar arreglos en el HTML.
        document.getElementById("nombresArrayFor").innerHTML += `<div>${nombresArray}</div>`;
        document.getElementById("nombresArrayWhile").innerHTML += `<div>${nombresArray}</div>`;
        document.getElementById("nombresArrayDoWhile").innerHTML += `<div>${nombresArray}</div>`;
    

                // Actualizar añadidos.
                document.getElementById("numNombres").innerHTML="Lleva "+numNombres+" nombres(s).";

        //Limpia formulario
        form.reset();     
        });