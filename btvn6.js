let x = true;
let y = false;
let z = 10;

console.log (x && y); //false
console.log (x && !y); //true
console.log (x && z == 10) //true
console.log (!(x && z == 10)) //false
console.log (x && y && z == 10) //false
console.log (x && !y && z == 10) //true
console.log (x || y || z == 10) //true
console.log ((x && y) || z != 10) //false
console.log (!(x && z == 10) || y) //false


let a = 1;
let b = "2";
let c = 3;
let d = "4";

console.log (b + d) //"24"
console.log (a + b + c + d) //"1234"
console.log (a - b + c - d) //-2
console.log (a - b - c + d) //"-44"
console.log ((b + d) - (a + c)) //20
console.log ((a + b) - (c + d)) //-22
console.log (a * c + b * d) //11
console.log (-b + d) //-"24"
console.log (-b - d) //-6
console.log (-(b + d)) //24

let age = 25;
let isMarried = false;
let isRich = true;

console.log (age > 25 && isMarried && isRich) //false
console.log ((age <= 25 || isMarried) && isRich) //true
console.log ((age > 10 || isRich) && isMarried) //false
console.log (!(age >= 15 && isMarried) && isRich) //true
console.log (!(age <= 20) || !(isMarried && isRich)) //true
console.log ((age > 8 && !isMarried) || isRich) //true
console.log (!(age < 8 && !isMarried) || isRich) //true
console.log ((age == 8 && isMarried) || !isRich) //false