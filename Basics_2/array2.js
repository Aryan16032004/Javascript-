// const name1=["aryan","ayush","harsh"]

// const name2=["madhav","prem","sahil"]

// name1.push(name2) // it does not concatenate the two array but store array as the data

// console.log(name1)
// console.log(name1[3][0])

// const name3=name1.concat(name2)// merge two arrays and return new array

// const name4=[...name1,...name2]
// same work as concat but here we can concat more than two arrays

// console.log(name4)

// const another_array =[1,2,3,[4,5,6],7,8,[9,10,[11,12]]];
// const real_another_array = another_array.flat(Infinity) // flat is used to write every value separetly we can also value of the depth 

// console.log(real_another_array)

console.log(Array.isArray("Aryan"))
console.log(Array.from("Aryan"))
console.log(Array.from({name1:"Aryan"})) // interesting case as we have to give of what type array we have to made from

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));// combine the value to array
