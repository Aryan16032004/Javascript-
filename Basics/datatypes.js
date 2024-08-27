"use strict"; // treat all js code as newer version

// alert("hello") // not allowed as we are using node not browser

//number
//bigint
//string
//boolean
//null => standalone value
// undefined =>value  not assigned
//symbol =>unique;

// object

// console.log(typeof 123);
// console.log (typeof null) // object
// console.log(typeof undefined) //undefined



// ***************** Datatypes Summary **********

//Primitive
// 7 types : string,number,boolean,null,undefined,symbol,bigint

//Reference type /Non Primitive type

// array,objects,functions

// const id=Symbol('123');
// const anotherId=Symbol('123');

// console.log(id);
// console.log(anotherId)
// console.log(id === anotherId) //false


// const bigNumber=12434314124412414141241n // bigint

// console.log(typeof bigNumber);


//****************************************************** */

// stack(Primitive) => it gives copy of it value
// Heap(Non-primitive) => it provides reference of the value 

let myname="Aryan"
let anotherName=myname;

anotherName="harsh"
console.log(myname)
console.log(anotherName)

let user1={
    email:"aryan@gmail.com",
    name:"Aryan"
}

let user2 =user1
user2.email="123@gmail.com"

console.log(user1.email)
console.log(user2.email);