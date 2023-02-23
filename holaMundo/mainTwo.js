//concatenacion
let foo = "Ra";
let bar = 8;
let result = foo + bar;
console.log(result)

console.log(typeof foo);
//typeof(Te muestra el tipo de dato que esta almacenado)

//templete strings
//revisar 8;21 clase



/*Operadores comparacion*/
let foo = 8; //number
let bar = "8"; //string
console.log(foo == bar); //true
console.log(foo === bar); //false
console.log(foo != bar); //false (considera el valor)
console.log(foo !== bar); //true(extrema comparacion)




/*IF*/
let foo = 8; //number
let bar = "8"; //string
if (foo === bar) {
    console.log("son iguales")
} else if (foo != bar) {
    console.log("no son identicos")
} else {
    console.log("no se que quieres hacer")
}


let fullName = "Rafael Villsaeñor Reyes";
console.log(fullName.length)