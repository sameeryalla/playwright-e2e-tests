//while loop - do until condition satisfies
//sum of n numbers
let n=10
let sum=0;
let i=1;
while(i<=10){
    sum+=i;
    i++;
    if(i==6)break;
}
console.log(`sum of given number ${sum}`);