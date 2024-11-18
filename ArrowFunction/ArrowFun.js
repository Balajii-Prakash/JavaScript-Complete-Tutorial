//Arrow Function===> a concise way to write function expression good for simple functions that you use only once 
//                    (parameters)=> same code

//Basically, the arrow function syntax looks as follows:

// const myFunction = (param1, param2, ...) => {
//      function body
//   }

// How to Convert a Regular Function to an Arrow Function Easily
// You can follow these three easy steps to convert a regular function to an arrow function:

// Replace the function keyword with the variable keyword const
// Add the = symbol after the function name and before the parentheses
// Add the => symbol after the parentheses
// Usually, a function is never changed after the declaration, so we use the const keyword instead of let.

// The code below should help you visualize the steps:

// function greetings(name) {
//     return `Hello, ${name}!`;
//   }
  
//   // step 1: replace function with const
//   const greetings(name) {
//     return `Hello, ${name}!`;
//   }
  
//   // step 2: add = after the function name
//   const greetings = (name) {
//     return `Hello, ${name}!`;
//   }
  
//   // step 3: add => after the parentheses
//   const greetings = (name) => {
//     return `Hello, ${name}!`;
//   }

// Why Arrow Functions Are Recommended Over Regular Functions
// The arrow function syntax offers improvements to the way you write a function in JavaScript, such as:

// You can write short functions in a more straightforward manner
// For single-line functions, the return statement can be implicit
// The this keyword is not bound to the function.


//EXAMPLE 1


// const hello= function(){
//     console.log('Hello!')
// }
// hello()

// The more concise way is below using Js Arrow Function

// const hello =()=> console.log("Hello!")

// hello()

// const hello =(name)=> console.log(name)

// hello("Balaji")


// const hello =(firstName,lastName)=> {
//     console.log(firstName+" "+lastName)
// }
// hello("Balaji","Praskash")


// syntax====> setTimeout(callback Func,Time in milliSecond)

// setTimeout(hello,3000)

// function hello(){
//     console.log("Hello!")
// }

// setTimeout(function(){
//     console.log("Hello!")
// }
// ,2000)

// By Using Arrow Function

// setTimeout(()=> console.log("Hello"),2000)


// Now we will look into Arrow Func using map(),filter(),reduce()


//Map() method
// const numbers=[1,2,3,5,7]
// const squares=numbers.map((Element)=>Math.pow(Element,2))
// const cubes=numbers.map((Element)=>Math.pow(Element,3))
// console.log(squares)
// console.log(cubes)

//Filter() method

const numbers=[1,2,3,5,6,7,8,12]
const evenNums=numbers.filter((Element)=>Element%2==0)
const oddNumns=numbers.filter((Element)=>Element%2!=0)
console.log(evenNums)
console.log(oddNumns)

// Reduce() method
const total=numbers.reduce((accumulator,Element)=>accumulator+Element)
console.log(total)







