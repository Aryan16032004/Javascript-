// for

// for (let i = 0; i < 10; i++) {
//     if(i==5){
//         console.log("hii");
//     }
//     console.log(i)
    
// }

let myNewArray=["flash","superman","batman","hulk","thor"]
// for (let i = 0; i < myNewArray.length; i++) {
//     console.log(myNewArray[i])
// }

// break and continue

//while loop
// let i=0;
// while(i<10){
//     console.log(i)
//     i++
// }

// let i=1
// do{
//     console.log(i)
//     i++
// }while(i<10)

// Difference between while loop and do-while loop
// while first check the condition then print 
// do-while loop first print and thenc heck the condition

// for of loop
// for (const element of myNewArray) {
//     console.log(element)
// }


// Maps
// const map=new Map()
// map.set('IN',"India")
// map.set('US',"United States")
// map.set('UK',"United Kingdom")
// console.log(map.get('IN'))
// console.log(map)

// [key,value] is used to separate key and value 
// for (const [key,value] of map) {
//     console.log(key)
// }

// const myObject={
//     'game1':'NFS',
//     'game2':'GTA',
// }

// for of loop does not work for objects 


// for in loop example
// for (const key in myObject) {
//    console.log(myObject[key])
// }

// for(const key in myNewArray){
//     console.log(myNewArray[key])
// }

// myNewArray.forEach(element => {
//     console.log(element)
// });

// function printme(ele){
//     console.log(ele)
// }
// myNewArray.forEach(printme)

// myNewArray.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

// const myCoding=[
//     {
//         languageName:"javascript",
//         languageFileName:"js"
//     },{
//         languageName:"python",
//         languageFileName:"py"
//     },{
//         languageName:"java",
//         languageFileName:"java"
//     }
// ]

// myCoding.forEach((item)=>{
//     console.log(item.languageName)
// })


// for each loop does not return

const myNums=[1,2,3,4,5,6,7,8,9]

// const newNums=myNums.filter((num)=>num>4)
// console.log(newNums)

// filter returns a new array and does not change the original array
// it returns a new array with the elements that pass the test implemented by the provided function
// it does not change the original array

//if we want to do the same thing with for each then
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

//map
// const newNums=myNums.map((num)=>num+10)
// console.log(newNums)


// chaining
// const newNums=myNums
// .map((num)=>num*10)
// .map((num)=>num+1)
// .filter((num)=>num>=40)
// console.log(newNums)


//reduce
// const total=myNums.reduce(function(acc,curr_val){
//     console.log(`${acc} and ${curr_val}`)
//     return acc+curr_val
// },0)

// const total=myNums.reduce((acc,curr_val)=>acc+curr_val,0)
// console.log(total)

const shoppingCart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"data science course",
        price:12999
    },
]
const total=shoppingCart.reduce((acc,curr_val)=>acc+curr_val.price,0)
console.log(total)