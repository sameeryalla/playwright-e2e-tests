//Logical Operators
let val="Monday";
if(typeof val==="string" && val.length<0){
    console.log(`1val=${val}`);
}
else if(typeof val==="string" || val.length>0){
    console.log(`2val=${val}`);
}

let day="Saturday";
if(day==="Saturday" || day==="Sunday"){
    console.log(`Today is ${day} and Holiday`);
}
else{
    console.log(`Today is ${day} and Working Day`);
}

//ternary operator
let age=20;
let result=(age>=18)?"Eligible to vote":"Not Eligible to vote";
console.log(`result1=${result}`);
let day2="Monday"
result=(day2==="Saturday" || day2==="Sunday")?"Today is Holiday":"Today is Working Day";
console.log(`result2=${result}`);