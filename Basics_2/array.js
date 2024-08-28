//array

const myArr=[0,4,3,6,2,7,32]
// console.log(myArr[3])

const myArr2=new Array(1,4,6,9,3)
// console.log(myArr2[2])

//Array Methods

// myArr.push(10)
// myArr.push(12)
// myArr.pop()

// myArr.unshift(9) // add element to start
// myArr.shift() // delete first element 

// console.log(myArr.includes(7))
// console.log(myArr.indexOf(7))

// const newArr=myArr.join();// convert array to string
// console.log(newArr)
// console.log(typeof newArr)

// console.log(myArr)

console.log("A ",myArr);
const myn1=myArr.slice(1,3) // it return value from start to end-1 but does not change the original array

console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3); // changes the orginal array by delete start index to end index value
console.log("C ",myArr)
console.log(myn2)

