/*
1. Falsy values in JavaScript are values that are considered false when evaluated in a boolean context. The following values are considered falsy:
- false: The boolean value false.
- 0: The number zero.   
- -0: The negative zero.
- 0n: The BigInt zero.
- "": An empty string.
- null: Represents the intentional absence of any object value.
- undefined: Represents a variable that has been declared but has not yet been assigned a value.
- NaN: Represents "Not-a-Number", which is the result of an invalid mathematical operation.
 */

let val=0;
if(val){
    console.log("val is truthy");
}else{
    console.log("val is falsy");
}
val=undefined;
if(val){
    console.log("val is truthy");
}else{
    console.log("val is falsy");
}

let val2=6 + undefined;
console.log("val2: " + val2);
val2=6 + null;
console.log("val2: " + val2);
val2=6 + NaN;
console.log("val2: " + val2);