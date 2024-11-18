//destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
//                [] = to perform array destructuring
//                () = to perform object destructuring


// To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

//Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

//Destructuring makes it easy to extract only what is needed.

//Example 1
//Swap of two variables

// let a=1
// let b=9;

// [a,b] = [b,a]
// console.log(a)
// console.log(b)

// //EX 2
// const colors=["red","green","blue","orange","pink"];

// [colors[0],colors[4]]=[colors[4],colors[0]]
// console.log(colors)

// //Ex 3

// const [firstColor,secondColor,thirdColor,...extrColor]=colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extrColor)

// //EX 4

// const person1={
//     fisrtName:"Balaji",
//     lastName:"Prakash",
//     age:22,
//     job:"Fry cook"

// }

// const person2={
//     fisrtName:"Sarath",
//     lastName:"Kumar",
//     age:21,
// }
// // const {fisrtName,lastName,age,job}=person1
// // console.log(fisrtName)
// //  console.log(lastName)
// //  console.log(age)
// //  console.log(job)

//  const {fisrtName,lastName,age,job="umemployed"}=person2
//  console.log(fisrtName)
//  console.log(lastName)
//  console.log(age)
//  console.log(job)

// Ex 5 Using functions
function dispalyPerson({fisrtName,lastName,age,job="umemployed"}){
    console.log(fisrtName,lastName)
    console.log(age,job)

}
const person1={
    fisrtName:"Balaji",
    lastName:"Prakash",
    age:22,
    job:"Fry cook"
    
    }
    
const person2={
    fisrtName:"Sarath",
    lastName:"Kumar",
    age:21,
}
dispalyPerson(person1)