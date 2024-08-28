// function sayMyName(){
//     console.log("My name is John");
// }

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)

// }
// addTwoNumbers(3,4)

// function multiply(number1,number2){
//     // let result=number1*number2
//     // return result
 
//     return number1*number2
// }
// const result=multiply(3,4) 
// console.log(result)

// function loginUserMessage(username){
    
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Aryan"))


// function loginUserMessage(username="sam")// default value sam
// {
//     if(!username){
//         return "username is required"
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

function calculateCarPrice(val1,...num1)// here ... is a rest operator
{
    return num1
}

console.log(calculateCarPrice(200,400,500))

const user={
    username:"Aryna",
    price:100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)

}

// handleObject(user)
handleObject({
    username:"sam",
    price:200
})

const myNewArray=[200,2000,400,500]
function retunrSecondValue(getArray){
    return getArray[1]
}

// console.log(retunrSecondValue(myNewArray))
console.log(retunrSecondValue([200,400,600]))
