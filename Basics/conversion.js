let score ="33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber) // NaN

// "33" => 33
//"33abc"=>NaN
// true=>1; false=> 0;
//null=>0

let isloggedIn=1;
let booleanIsLoggedIn=Boolean(isloggedIn);
console.log(booleanIsLoggedIn)

// 1=> true; 0=> false;
//"" => false
//"hitesh" => true

let somenumber=33
let stringNumber=String(somenumber);
console.log(stringNumber);
console.log(typeof stringNumber)