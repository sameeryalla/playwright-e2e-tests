//finding even odd prime number using nested if else
    //iterating 1 to 1000 numbers to check each number is even or odd prime
    for(let i=1;i<=1000;i++){
    //for(let i=1000;i>=1;i--){
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

//for loop with array
let arr=["Apple",10,"Orange",20,"Grapes",30];
console.log(arr);
console.log(arr.length);
let sum=0;
for(let k=0;k<arr.length;k++){
    let temp=arr[k];
    console.log(temp);
    if(typeof temp=== "number"){
        console.log(temp+ " is a number");
        sum+=temp;
    }
    else{
        console.log(temp+ " is not a number");
    }
}
//console.log("The value of sum is:" +sum);
console.log(`The value of sum is: ${sum}`);

//use of break statement
    for(let i=1000;i>=1;i--){
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
