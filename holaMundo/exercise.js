/*Ejercicio 1
-Crear un programa que se muestre el mayor de dos numeros
*/
let numberOne = 21;
let numberTwo = 52;
if (numberOne > numberTwo) {
    console.log(`El numero mas grande es ${numberOne}`)

} else {
    console.log(`El numero mas grande es ${numberTwo}`)

}

/*Ejercicio 2
-Crear un programa que muestre el mas largo de dos strings
*/
let name = "Javi"
let lastname = "Briseno"
if (name.length > lastname.length) {
    console.log(`El string mas grande es ${name} `)
} else {
    console.log(`El string mas grande es ${lastname} `)
}
/*Ejercicio 3
-Crear un programa que me diga si un numero es divisible entre otro numero
-Indicar si el primer numero es divisible entre el segundo o indicar si no lo es
*/

let numberOne = 10;
let numberTwo = 5;

if (numberOne % numberTwo == 0) {
    console.log("El numero es divisible")
} else {
    console.log("No es divisible")
}




/*Ejercicio 4
-Crear un programa que evalue un string e inidique lo siguiente
- si la cantidad de carcteres es mayor que 10 y la cantidad de caracteres es numero par, mostrar (El texto es largo y sus caracteres son pares)

- -Si la cantidad de caracteres es menor qe 10 y la cantidad de caracteres es numero par, mostrar (el texto es corto y sus caracteres pares)
--- si no cumple con alguna condiciones anteriores, mostrar ("El texto no cumple con alguna especificacion")
*/

let name 