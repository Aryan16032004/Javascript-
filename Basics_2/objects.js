// singleton 
// Object.create

// object literals
const mySym=Symbol("key1")

const jsUser={
    name:"Aryan",
    id:12208862,
    [mySym]:"mykey1",// only way to write symbol with square bracket
    "full name":"Aryan Chauhan", 
    city:"agra",
    isLoggedIn:"false",
    lastloginDays:["Monday","Wednesday"]
}

// console.log(jsUser.id)
// console.log(jsUser["id"])// another way to acces object value also the best way 
// console.log(jsUser["full name"]) // only way to access fullname 
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])

// jsUser.id=123456
// Object.freeze(jsUser) // it freezes the object or lock it that no further value will be changed
// jsUser.city="punjab"
// console.log(jsUser)

jsUser.greeting=function(){
    console.log("Hello")
}

jsUser.greeting2=function(){
    console.log(`Hello user ${this["full name"]} your id is ${this.id}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())