//substring using slice
let date="2026-08-19";
let year=date.slice(0,4);
console.log(`year of the date is ${year}`);
let month=date.slice(5,7);
console.log(`year of the date is ${month}`);
let dt=date.slice(8);
console.log(`year of the date is ${dt}`);
let yymmdd=date.slice(2);
console.log(`date in req format is ${yymmdd}`);

console.log(`fetch date value ${date.slice(-2)}`);

//Extract substring using spilt
let tStamp="22-08-2026T10:21:55"
let sDate=tStamp.split("T");
console.log(sDate);


//extarct substring using IndiexOf
let str2="App # {123456} submitted";
let start=str2.indexOf("{");
let end=str2.indexOf("}");
console.log(`String starts after index ${start}, end before ${end}`);
let substring=str2.slice(start+1,end);
console.log(`Required substring is ${substring}`);