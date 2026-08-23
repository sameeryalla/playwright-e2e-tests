//default parameters
function greet(name, greeting){
    console.log(`${name}, ${greeting}`);
}

greet("Sameer","Happy Birthday");

function greet2(name, greeting="Happy birthday"){
    console.log(`${name}, ${greeting}`);
}
greet2("Sameer");


//passinf premetive as parameter
let personObj={
    firstName:"Sameer",
    lastName:"Yalla"
}
function fullName(obj){
    console.log(`Firstname: ${obj.firstName} \n Lastname:${obj.lastName}`);
}
console.log(fullName(personObj));