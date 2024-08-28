// const tinderUser=new Object(); // singelton object
const tinderUser={} // this is non-singelton object

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"123@gmail.com",
    fullname:{
       userFullName:{
         firstname:"abc",
        lastname:"def"
       }
    }
}
// console.log(regularUser.fullname.userFullName.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"s",4:"g"}

// const obj3={obj1,obj2} // not to be used it give object in object

// const obj3=Object.assign({},obj1,obj2) // this is used to merge object
// best practice to use {} as target

const obj3={...obj1,...obj2}

// console.log(obj3)

// we can multiple objects in an objects

console.log(Object.keys(tinderUser)) // return array of all keys 
console.log(Object.values(tinderUser)) // return array of all values
console.log(Object.entries(tinderUser))// return arrya of key value pairs 


console.log(tinderUser.hasOwnProperty("isLoggedIn")) // return boolean value if the key exist in object