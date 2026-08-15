//arthmetic operators
let a=10;
let b=5;
let sum=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
let mod=a%b;
let exp=a**b;
console.log(`sum=${sum}\n sub=${sub}\n mul=${mul}\n div=${div}\n mod=${mod}\n exp=${exp}`);
let incr;
let decr;
while(a<=20&&b>=0){
    incr=a++;
    decr=b--;
}

console.log(`incr=${incr}\n decr=${decr}`);

//unary operators
console.log(+"3" + 3 + 3);