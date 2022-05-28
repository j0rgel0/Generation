// 3. Realizar un algortimo para adivinar un número entre el 1 y el 100 
// en el menor número de pasos posibles


// Math.random te da resultados aleatorios entre el 0 y el 1
// Resultados posibles: 0.5, 0.12, 0,7, 0.99

// La función Math.floor() redondea al entero inferior.
// Para encontrar el numero aleatorio se debe seguir la 
// siguiente formula:
// Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);

let maxAleatorio = 100;
let minAleatorio = 1;
let numeroAleatorio = Math.floor(Math.random() * ((maxAleatorio+1)-minAleatorio)+minAleatorio);
console.log (numeroAleatorio)
let intentos = 0;
document.getElementById("intentos").innerHTML=
"Llevas "+intentos+" intento(s).";
let utilizados =[];

let botonEjecutar = document.querySelector("#botonEjecutar");
botonEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    let form = document.querySelector("#formEjecutar");
    let numUsuario = form.num1.value;
    console.log("El número que escogiste fue: "+numUsuario);
    console.log("El número que fue: "+numeroAleatorio);
    console.log("Llevas: "+intentos+" intento(s)");
    document.getElementById("intentos").innerHTML=
    "Llevas "+intentos+" intento(s).";

    utilizados.push(numUsuario);
    document.getElementById("utilizados").innerHTML=
    utilizados;

    if(numUsuario < numeroAleatorio) {
        console.log("El número que escogiste es menor que el que debes adivinar");
        document.getElementById("resultado").innerHTML=
        "El número que escogiste es menor que el que debes adivinar";
        intentos++;
    } else if(numUsuario > numeroAleatorio) {
        console.log("El número que escogiste es mayor que el que debes adivinar");
        document.getElementById("resultado").innerHTML=
        "El número que escogiste es mayor que el que debes adivinar";
        intentos++;
    } else if(numeroAleatorio == numUsuario){
        console.log("Lo encontraste!");
        document.getElementById("resultado").innerHTML=
        "Lo encontraste!";

    } // cierre de while
    
} //cierre de botón "¡Ejecútalo!"
    
);