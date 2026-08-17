//Conditional statement with IF ELSE
let a=5
let b=7;
if(a>=b){
    console.log("a is greater than or equal to b");
}
else{
    console.log("a is less than b");
}

//nested if else
let day="Saturday";
if(day==="Saturday"){
    console.log(`Today is ${day} and Holiday`);
}
else if(day==="Sunday"){
    console.log(`Today is ${day} and Holiday`);
}
else{
    console.log(`Today is ${day} and Working Day`);
}


// if else inner if else
let age=20;
if(age>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible to vote");
}

//Finding odd or even or prime number using nested if else
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(`${i} is even number`);
    }
    else{
        let isPrime=true;
        for(let j=2;j<i;j++){
            if(i%j==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            console.log(`${i} is a prime number`);
        }
        else{
            console.log(`${i} is odd number`);
        }
    }

}
       
