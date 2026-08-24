//RestParams for no of parameters using argument obj
let total;
function sum(num1, num2,... nnm){
    total=0;
    console.log(arguments);
    console.log(arguments[2]);
    console.log(arguments.length);
    for(let num of arguments){
        total+=num;
    }
    console.log(`sum of given numbers is: ${total}`);

}

sum(2,3,4,5);
sum(2,3,4,5,6,7);