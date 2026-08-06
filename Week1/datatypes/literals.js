/*
1. String literals are used to represent t ext in JavaScript. They are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
2. Numeric literals are used to represent numbers in JavaScript. They can be integers (e.g., 42) or floating-point numbers (e.g., 3.14).
3. Boolean literals represent the two truth values: true and false.
4. Null literal represents the intentional absence of any object value and is denoted by the keyword null.
5. Undefined literal represents a variable that has been declared but has not yet been assigned a value, and is denoted by the keyword undefined.
6. Object literals are used to define objects in JavaScript using curly braces ({ }) and key-value pairs.
7. Array literals are used to define arrays in JavaScript using square brackets ([ ]) and comma-separated values.
8. Template literals are a way to create strings that can include embedded expressions, and they are enclosed in backticks (` `). They allow for multi-line strings and string interpolation using the ${expression} syntax.
9. bigint literals are used to represent integers larger than the maximum safe integer in JavaScript, and they are denoted by appending an 'n' to the end of the number (e.g., 9007199254740991n).    
*/  

//string literal
let fname = "Sameer";
let lname = 'Yalla';
let fullName = `${fname} ${lname}`; //template literal
console.log("Full Name: " + fullName);

//number literal
let age = 25;
let height = 5.9;
console.log("Age: " + age + ", Height: " + height);

//boolean literal
let isStudent = false;
let isEmployed = true;
console.log("Is Student: " + isStudent + ", Is Employed: " + isEmployed);

//object literal
let person = {
    firstName: " Sameer",
    lastName: "Yalla",  
    age: 25,
    height: 5.9
};
console.log("Person: " + person.firstName + " " + person.lastName + ", Age: " + person.age + ", Height: " + person.height);

//array literal
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers: " + numbers);
console.log("First number in Array: " + numbers[0]);

//regex literal
let pattern = /[A-Za-z]+/;
console.log("Pattern: " + pattern);

//undefined literal
let undefinedVar;
console.log("Undefined Variable: " + undefinedVar);

//null literal
let nullVar = null;
console.log("Null Variable: " + nullVar);


console.log("type of person: " + typeof(person));
console.log("type of numbers: " + typeof(numbers));
console.log("type of isStudent: " + typeof(isStudent));
console.log(`type of isStudent: ${typeof(isStudent)}`);