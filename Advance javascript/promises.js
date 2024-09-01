//  const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Promise 1 resolved");
//         console.log("Async task is complete")
//         },2000);
//  })

//  promiseOne.then(function(){
//     console.log("Promise consumed")
//  })


//  new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          resolve();
//          console.log("Aysnc task 2")
//       },1000)
//  }).then(()=>{
//    console.log("Aync two redolved");
   
//  })

 
// const PromiseThree=new Promise((resolve,reject)=>{
//    setTimeout(() => {
//       resolve({name:"aryan",email:"123@gmail.com"})
//    }, 1000);
// })

// PromiseThree.then((user)=>{
//    console.log(user);
   
// })



// const PromiseFour=new Promise((resolve,reject)=>{
//    setTimeout(() => {
//       let error=false
//       if(!error){
//          resolve({username:"aryan",password:"!233"})
//       }else{
//          reject("Something went wrong")
//       }
//    }, 1000);
// })

// PromiseFour
// .then((user)=>{
//    console.log(user)
//    return user.username
// }).then((username)=>{
//    console.log(username)
// }).catch((error)=>{
//    console.log(error)
// }).finally(()=>{
//    console.log("Finally executed")
// })


// const promiseFive= new Promise((resolve,reject)=>{
//    setTimeout(() => {
//       let error=false
//       if(!error){
//          resolve({username:"aryan",password:"!233"})
//       }else{
//          reject("Something went wrong")
//       }
//    }, 1000);
// })

// async function consumePromiseFive() {
//    try {
//       const response=await promiseFive
//       console.log(response)
//    } catch (error) {
//       console.log(error);
      
//    }
   
// }

// consumePromiseFive();
 

// async function getAllUsers() {
//    try {
//       const response=await fetch('https://jsonplaceholder.typicode.com/users')
//       const data=await response.json()
//       console.log(data);
      
//    } catch (error) {
//       console.log("E: ",error);
      
//    }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
   return response.json()
})
.then((data)=>{
   console.log(data);
   
})
.catch((error)=>{
   console.log(error);
   
})
