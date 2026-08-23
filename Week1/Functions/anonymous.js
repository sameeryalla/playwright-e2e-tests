//function without name
let addTwoNumber = function (num1, num2){
    let sum=num1 + num2;
    return sum;  
}
console.log(addTwoNumber(1,2));


//function with name
let sum= function addNumbers(num1, num2){
    return num1+num2;
}
console.log(sum(2,1));