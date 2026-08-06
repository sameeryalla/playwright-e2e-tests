#!
//Define variables and initialize them
var name = "Sameer";//string variable
let _age = 25; //integer variable
const $COUNTRY = "India";//constant variable cannot be reassigned
console.log("Name: " + name + ", Age: " + _age + ", Country: " + $COUNTRY);

var _num1 = 10, _num2 = 20;
let $sum = _num1 + _num2;
console.log("Sum of " + _num1 + " and " + _num2 + " is: " + $sum); 


let count=0
if(true){
    let count=10
    console.log("Count value inside if "+count)
}
console.log("Count value outside if "+count)
