// function declaration ==> define a reusable block of code that perform a specific task

// function expression==> a way to define function as value or variables

// As you see here, we have the function keyword without a name for the function. This makes it an expression, which you have to assign to a variable

// Func Exp in simple terms ==> Function without a function name


// const hello= function(){
//     console.log("Hello")
// }
// hello()

// setTimeout(function(){
//     console.log("Hello")
// },3000)
// In Js it is legal to pass entire func as an argumnet...Here in this case SetTimeout(Args,Time in ms)

// const numbers=[1,2,3,4,5,6]
// const squares=numbers.map(square)
// console.log(squares)

// function square(element){     //===> Function Declaration
//     return Math.pow(element,2)
// }

// we can do this by using func declaration


// const numbers=[1,2,3,4,5,6]
// const squares=numbers.map(function(element){     //===> Function expression
//     return Math.pow(element,2)
// })
// console.log(squares)


// Program to cube a number using func declaration

const number=[2,3,4,6,8,10,11,13,15]
const cubes=number.map(function(element){
    return Math.pow(element,3)
})

// Here we use filter method to fill out elements

const evenNums=number.filter(function(element){
    return element%2==0
})


const oddNums=number.filter(function(element){
    return element%2!=0
})

console.log(cubes)
console.log(evenNums)
console.log(oddNums)


/// Here reduce is to used to group them into one
const total=number.reduce(function(accumulator,element){
    return accumulator+element

})

console.log(total)