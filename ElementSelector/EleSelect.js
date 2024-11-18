
//element selectors

//Methods used to target and manipulate HTML elements

//They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

//1. document.getElementById()

// ELEMENT OR NULL

//1. document.getElementByClassName()// HTML COLLECTION

//3. document.getElementsByTagName()

// HTML COLLECTION

//4. document.querySelector()

// FIRST ELEMENT OR NULL

//5. document.querySelectorAll()

//NODELIST





//1. document.getElementById()
// const myHeading=document.getElementById("my-heading")
// myHeading.style.backgroundColor="yellow";
// myHeading.style.textAlign="center";
// console.log(myHeading)





//const fruits=document.getElementsByClassName("fruits");
// for(let fruit of fruits){
    
//     fruit.style.backgroundColor='red'
    
// }
// Array.from(fruits).forEach((fruit)=>{
//     fruit.style.backgroundColor="green"
// })
// console.log(fruits)


//3. document.getElementsByTagName()

// const h4Elements=document.getElementsByTagName("h4")
// const liElements=document.getElementsByTagName("li")
// Array.from(h4Elements).forEach((h4Element)=>{
//     h4Element.style.backgroundColor="yellow"
// })



// Array.from(liElements).forEach((liElement)=>{
//     liElement.style.backgroundColor="lightblue"
// })


// for(let h4element of h4Elements){
//     h4element.style.backgroundColor="red"
// }


// for (let liElement of liElements ){
//     liElement.style.backgroundColor="green"
// }
//h4Elements[1].style.background="yellow"


//console.log(h4Elements)


//4. document.querySelector() // ===> will return the first matching element or null if it doesnt have any matching element

const element=document.querySelector("ul")
console.log(element)
element.style.backgroundColor="red"


//5. document.querySelectorAll()   ===> this will return a node list, a node list is similar to an HTML collection expect it has builtin methods similar to arrays


// const fruits=document.querySelectorAll(".fruits")
// fruits[0].style.backgroundColor="yellow"

// const foods=document.querySelectorAll("li")
// foods[5].style.backgroundColor="red"

// console.log(foods)

// foods.forEach((food)=>{
//     food.style.backgroundColor="orange"
// })