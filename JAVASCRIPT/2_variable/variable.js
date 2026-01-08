 //in var it can be initialize and reintilize
// var a=10
// a=20                   
// console.log(a);


//in let it can be initialize and reintilize
// let b=500
// b=1000                 
// console.log(b);


//in const it can be initialize but can't able to reinitialize
// const c=60
// c=100                 
// console.log(c);



// var n;
// console.log(n);
// let m;
// console.log(m);

// const c;



//1.Global scope
// var a=10
// console.log("This is a global scope "+a);


//2.block scope
// {
//     let b=50
//     console.log("this area is block scope "+b);
    
// }

//3.function scope or locak scope
// function abc(){
//     let c=400
//     console.log("this is the function scope or local scope "+c);
    
// }
// abc()




//1.Global scope
var a=10
let b=500
const c=1000

console.log("This is a global scope ");
console.log(a,b,c);


//2.block scope
{

    var e=10   //In the block scope only var should able to use or get the output in the global scope 
    let f=500
    const g=1000
    console.log("This area is block scope "+b);
    console.log(a,b,c);
    console.log(e,f,g);
    
}
 console.log("this is the global scope ");
 console.log(e); 
//  console.log(e,f,g);
      
 

//3.function scope or locak scope
function abc(){
    var x=2000
    let y=1000
    const z=3000
    console.log("This is the function scope or local scope "+c);
    console.log(a,b,c);
}
abc()


console.log("This area is global scope");
// console.log(x);
// console.log(y,z);


