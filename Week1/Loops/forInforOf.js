//for in and For of check
let obj={
    "Sameer":39,
    "Chinni":35,
    "Niya":1 
}
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}
let windows=["Chrome","Safari","Edge","Firefox"]
for (let browser of windows){
    console.log(browser);
}