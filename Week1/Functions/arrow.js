
//arrow function with params
let total;
let sum=(num1,num2)=>{
    total=0;
    total=num1+num2;
    console.log(`sum of all numbers: ${total}`)
    return total;
}
sum(6,7);
//arrow function with no params
let arrowfn=()=>5>10
console.log(arrowfn());

let greet=name => console.log(`Hello, ${name}`);
greet('Sameer');