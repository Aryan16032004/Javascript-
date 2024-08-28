// Immediately invoked Function Expressions (IIFE)

// used to safeguard it from the pollution of global scope and immediately execute i t
(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();// ; neede in iife function

((name)=>{
    //unnamed iife
    console.log(`DB CONNECTED TO ${name}`)
})("aryan");