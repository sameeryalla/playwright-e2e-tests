//string intro
let str1="hello wolrd";
console.log(str1.length);//length of string
for(let i=0;i<str1.length;i++){
    console.log(str1.charAt(i));//printing each character of string
}

let str2='hello wolrd';
let str3=`hello wolrd`;
console.log(str2+" "+str3);
let str4=String("hello wolrd");

console.log(str1===str2);//true
console.log(str2===str3);//true
console.log(str3===str4);//true
console.log(str1===str4);//true
console.log(str1==str2);//true
console.log(str2==str3);//true
console.log(str3==str4);//true
console.log(str1==str4);//true
console.log(str1===str2);//true
console.log(str2===str3);//true
console.log(str3===str4);//true


//string construction
let startDate='2024-06-01';
let endDate='2024-06-30';
let accountNumber='1234567890';
let message=`Your account number ${accountNumber} is active from ${startDate} to ${endDate}.`;
console.log(message);


