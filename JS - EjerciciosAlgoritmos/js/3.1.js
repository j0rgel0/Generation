// 3. Realizar un algortimo para adivinar un número entre el 1 y el 100 
// en el menor número de pasos posibles
function preguntaNums(){
    let num1 = prompt("Dime el primer número","");
    let num2 = prompt("Dime el segundo número","");
    let num3 = prompt("Dime el tercer número","");

}// preguntaNums

// 1  100   50   89    99   8
function Adivinar() {
    let superior = 100;
    let inferior = 0;
    let noEncontrado = true;
    while(noEncontrado) {
        let mid = parseInt(inferior + ((superior-inferior)/ 2));
        console.log(mid);
        console.log(((superior-inferior)/ 2));
        if (((superior-inferior)/ 2)<1){
            noEncontrado=false;
            alert("Tu número es el " + (parseInt(mid)+1));
            break;
        }//if
        let res = confirm("Tu número es menor o igual a " + mid);
        if (res) {
            superior=mid;
        } else {
            inferior=mid;
        }//if 
        console.log(inferior, superior);
    } //while
} //Adivinar

Adivinar();