
//se declaran variables que corresponden al ingreso de 5 números
let numberOne = prompt("Ingrese un primer número: ");
let numberTwo = prompt("Ingrese un segundo número: ");
let numberThree = prompt("Ingrese un tercer número: ");
let numberFour = prompt("Ingrese un cuarto número: ");
let numberFive = prompt("Ingrese un quinto número: ");

//se muestra en el documento la suma de las 5 variables
document.write("La suma es: ");
document.write(parseInt(numberOne) + parseInt(numberTwo) + parseInt(numberThree) + parseInt(numberFour) + parseInt(numberFive) + "<br>")

//se muestra en el documento el promedio de las 5 variables
document.write("El promedio de todos los números es: ");
document.write((parseInt(numberOne) + parseInt(numberTwo) + parseInt(numberThree) + parseInt(numberFour) + parseInt(numberFive)) / 5);