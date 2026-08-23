//add two number using function
function addNumbers(num1,num2){
    return num1+num2;
}

let marks1=10;
let mark2=20;
let sum=addNumbers(marks1,mark2);
console.log(`sum of two marks is ${sum}`)
let rand=addNumbers("Sameer"," Yalla");
console.log(`Result of adding two strings ${rand}`);
let hybrid=addNumbers("Sameer",10);
console.log(`Result of adding two different params ${hybrid}`);