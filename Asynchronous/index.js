
//Asynchronous doesn't wait for anything
//so it is very fast

console.log("first");

setTimeout(()=>{
    console.log("second");
},2000);

console.log("third");


//drawback of asynchronous
let a = 10;
let b =0;

setTimeout(()=>{
    b = 10;
},2000);

console.log(a+b); //it execute before update b