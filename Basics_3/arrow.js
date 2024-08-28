// const user={
//     username:"hitesh",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.username}, welocme to website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username="Aryan"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username="Aryan"
//     console.log(this.username) // this is not usable in functions
// }
// chai()


// const sum=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo= (num1,num2)=>(num1+num2)// another way to write arrow function with a single line

// console.log(sum(3,4))
// console.log(addTwo(7,8))

const obj1=()=>({username:"aryan"}) // () used to return without the keyword return
console.log(obj1())


