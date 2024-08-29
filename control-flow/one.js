// // if

// if(condition){
//     // code to be executed if condition is true 
// }

// // <,>,<=,>=,!=,==,!==,>===

// if (condition) {
    
// } else {
    
// }


// if(condition){

// }else if(condition){

// }else{

// }


const userLoggedIn=true
const debitcard=true

if(userLoggedIn && debitcard){
    console.log("allow to nuy course ")
}

// falsy values=> false,0,-0,0n,"",null,undefined,NaN
// truthy values=> "0",'false'," ",[],{},function(){} and other except falsy values

// how to check is object is empty or not 
const emptyobject={}

if(Object.keys(emptyobject).length===0){
    console.log(`Empty Array`)
}

// false == 0 || false=='' || 0== ''return true

// Nullish Coalescing Operator (??): null defined

// let val;
// val1=5??10
// val =null ?? 10 // used as a safety check against null and undefined

// console.log(val)

// console.log(5)


// Terninary Operator
// let val = 5 > 10 ? "Greater" : "Lesser";

// console.log(val)