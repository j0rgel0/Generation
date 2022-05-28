// 3. Realizar un algortimo para adivinar un número entre el 1 y el 100 
// en el menor número de pasos posibles

// --------------------------------------------------------
// Math.random te da resultados aleatorios entre el 0 y el 1
// Resultados posibles: 0.5, 0.12, 0,7, 0.99
// --------------------------------------------------------
// La función Math.floor() redondea al entero inferior.
// --------------------------------------------------------
// Para encontrar el numero aleatorio se debe seguir la 
// siguiente formula:
// Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
// --------------------------------------------------------


//  Al darle clic, el botón ejecutará el siguiente programa
let botonEjecutar = document.querySelector("#botonEjecutar");
botonEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    console.clear();
    let form = document.querySelector("#formEjecutar");

    let maxAleatorio = 100;
    let minAleatorio = 1;
    let intentos = 0;
    let utilizados =[];
    let numAdivinaAl;
    let = mensajeError;

// Se guarda el número dado por el usuario.
    let numUsuario = Number(form.num1.value);

// Se comienza el ciclo while, que le permitirá
// a la computadora encontrar el número
while(numUsuario != numAdivinaAl){
        //Verificar número diferente de 0, letra, menor a 0 mayor 100
        console.log(numUsuario,typeof(numUsuario));

        //Poner en blanco el span de mensaje de error.
        document.getElementById("mensajeError").innerHTML="";

        if(numUsuario == 0){
            console.log("Escribiste 0 o nada, solo trabajo con números enteros del 1 al 100, vuelve a escribir el número por favor");
            document.getElementById("mensajeError").innerHTML="Escribiste 0 o nada, solo trabajo con números enteros del 1 al 100, vuelve a escribir el número por favor";
            break;
        } else if (isNaN(numUsuario)){
            console.log("¿Escríbiste un número?, solo acepto números enteros del 1 al 100, vuelve a escribir el número por favor");
            document.getElementById("mensajeError").innerHTML="¿Escríbiste un número?, solo acepto números enteros del 1 al 100, vuelve a escribir el número por favor";
            break;
        } else if (!Number.isInteger(numUsuario)){
            console.log("De momento, no trabajo con decímales, solo trabajo con números enteros del 1 al 100, vuelve a escribir el número por favor");
            document.getElementById("mensajeError").innerHTML="De momento, no trabajo con decímales, solo trabajo con números enteros del 1 al 100, vuelve a escribir el número por favor";
            break;
        } else if(numUsuario > 100 || numUsuario < 0){
            console.log("De momento, solo trabajo con números enteros del 1 al 100, vuelve a escribir el número por favor");
            document.getElementById("mensajeError").innerHTML="De momento, solo trabajo con números enteros del 1 al 100, vuelve a escribir el número por favor";
            break;
        }

        document.getElementById("intentos").innerHTML="Lleva "+intentos+" intento(s).";
        numAdivinaAl = Math.floor(Math.random() * ((maxAleatorio+1)-minAleatorio)+minAleatorio);
        intentos++;



        console.log("La computadora escogió:"+numAdivinaAl);
        utilizados.push(numAdivinaAl);

        console.log("N° de intento: "+intentos);
        document.getElementById("intentos").innerHTML=
        "Lleva "+intentos+" intento(s).";
        console.log("Mínimo actual es: "+minAleatorio);
        console.log("Máximo actual es: "+maxAleatorio);
        
        console.log("Se utilizó "+utilizados);
        document.getElementById("utilizados").innerHTML=
        utilizados;

            if(numUsuario > numAdivinaAl){
            minAleatorio = numAdivinaAl + 1;
            // numAdivinaAl = Math.floor(Math.random() * ((maxAleatorio+1)-minAleatorio)+minAleatorio);
            console.log("El numero que adivino la computadora es bajo, necesita buscar otro más alto");
            console.log("Ahora el número mínimo es: "+minAleatorio);
            console.log("-------------------");
        } else if(numUsuario < numAdivinaAl){
            maxAleatorio = numAdivinaAl - 1;
            // numAdivinaAl = Math.floor(Math.random() * ((maxAleatorio+1)-minAleatorio)+minAleatorio);
            console.log("El numero que adivino la computadora es alto, necesita buscar otro más bajo");
            console.log("Ahora el número máximo es: "+maxAleatorio);
            console.log("-------------------");
        } else if(numUsuario == numAdivinaAl){
            console.log("-------------------");
            console.log("T E R M I N A D O");
            console.log("-------------------");
            // utilizados.push(numAdivinaAl);
            // intentos++;
            console.log("N° de intentos: "+intentos);
            document.getElementById("intentos").innerHTML=
            "Lleva "+intentos+" intento(s).";

            console.log("La computadora utilizó "+utilizados);
            document.getElementById("utilizados").innerHTML=
            utilizados;

            document.getElementById("resultado").innerHTML=
                "Terminé, encontré el resultado en "+intentos+" intentos y utilicé los siguientes números ["+utilizados+"].";
            document.getElementById("intentos").innerHTML="Necesitó "+intentos+" intento(s).";
            break;
        }
    } // cierre de while


} //cierre de botón "¡Ejecútalo!"
    
);