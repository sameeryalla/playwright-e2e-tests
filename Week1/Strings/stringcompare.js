/*
1. full match
2. partial match
    includes
    startswith
    endswith
    contains
 */

let filename1=` Sameer_Aadhaar.pdf`;
//full match
if(filename1.toLowerCase().trim() === "sameer_aadhaar.pdf"){
    console.log("It matches......");
}
else{
    console.log("not matches......");
}

//partial match
console.log(filename1.toLowerCase().trim().startsWith('sameer'));
console.log(filename1.endsWith('pdf'));