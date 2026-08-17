//finding even odd prime number using nested if else
    for(let i=1;i<=1000;i++){
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