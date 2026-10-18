let a=5
let b="5";
console.log(`data type of a is ${typeof(a)}`);
console.log(`data type of a is ${typeof(b)}`);
if(a==b){
    console.log("true");
} else {
    console.log("false");
}
if(a===b){
    console.log("true");
} else {
    console.log("false");
}
const max_retries=3;

const text="Hello, Sameer";
const age=39;
const salary=142567.56;
const isMarried=true;
const hobbies=["movies","Badminton","cricket"];
const person={
    name:"Sameer",
    age:39};
console.log(`data type of text is ${typeof(text)}`);
console.log(`data type of age is ${typeof(age)}`);
console.log(`data type of salary is ${typeof(salary)}`);
console.log(`data type of isMarried is ${typeof(isMarried)}`);
console.log(`data type of hobbies is ${typeof(hobbies)}`);
console.log(`data type of person is ${typeof(person)}`);    

function basic(a,b){
    return a+b;
}
console.log(`Result of basic function is ${basic(a,b)}`);
console.log(`Result of basic function is ${basic(a,parseInt(b))}`);

//arrow function
let sum=(a,b)=>{
    return a+parseInt(b);
};
console.log(`Result of arrow function is ${sum(a,b)}`);

//array & Loops
const fruits=["apple","banana","mango","grapes"];

for(let i=0;i<=fruits.length-1;i++){
    console.log(`Fruit at index ${i} is ${fruits[i]}`);
}

for(let fruit of fruits){
    let i=0;
    console.log(`Fruit-${i} is ${fruit}`);
    i++;
}

fruits.forEach((fruit,index)=>{
    console.log(`Fruit at index ${index} is ${fruit}}`);
});

//map - transform array into another array
let upper=fruits.map(f=>f.toUpperCase());
console.log(`Upper case fruits are ${upper}`);

//filter  - keep matching items in the array
let filter=fruits.filter(f=>f.length>5);
console.log(`Fruits with length greater than 5 are ${filter}`);

//objects
const person1={
    name:"Sameer",
    age:39,
    hobbies:["movies","Badminton","cricket"],
    email:"sameeryalla@gmail.com",
    greet(){
        console.log(`Hello, ${this.name}`)
    }
};
console.log(`Person name is ${person1.name}`);
console.log(`Person age is ${person1.age}`);
console.log(`Person hobbies are ${person1.hobbies}`);
console.log(`Person email is ${person1.email}`);
person1.greet();
