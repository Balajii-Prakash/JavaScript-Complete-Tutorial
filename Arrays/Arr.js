// array= a var like structure which can hold more tha 1 value

let fruits=["apple","orange","banana"]
console.log(fruits)
console.log("=============")
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log("=============")
fruits[0]="Mango"
console.log(fruits)
console.log("=============")
// push=Which is used to add an element at the end of an array
fruits.push("Pomogranate")
console.log(fruits)
console.log("=============")
// pop=Which is used to remove the last element
fruits.pop()
console.log(fruits)
console.log("=============")
// Unshift=WHich is used to add an element at the beginning
fruits.unshift("Jack Fruit")
console.log(fruits)
console.log("=============")
// shift=WHich is used to remove an element at the beginning
fruits.shift()
console.log(fruits)
console.log("=============")

let numOfFruits=fruits.length
let index=fruits.indexOf("orange")
console.log(numOfFruits)
console.log(index)
console.log("=============")

for(let i=0;i<fruits.length;i++ ){
    console.log(fruits[i])
}


// Printing in reverse order
console.log("=============")

for(let i=fruits.length-1;i>=0;i-- ){
    console.log(fruits[i])
}


// Another enhanced version of for loop
console.log("=============")
 for(let fruit of fruits){
    console.log(fruit)
 }


// To sort an array
 console.log("=============")
 fruits.sort()
 console.log(fruits)

 fruits.sort().reverse()
 console.log(fruits)