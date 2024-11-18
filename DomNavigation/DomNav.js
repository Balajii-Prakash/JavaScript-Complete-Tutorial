// DOM Navigation= The process of navigating the structure of an html document using JavaScript


//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children



//.................firstElementChild...................


// const element=document.getElementById("fruits")
// const firstChild=element.firstElementChild
// firstChild.style.backgroundColor="yellow".

// const ulElements=document.querySelectorAll("ul")

// ulElements.forEach((ulElement)=>{
//     const firstChild=ulElement.firstElementChild
//     firstChild.style.backgroundColor="red"
// })



//.........................lastElementChild.................

// const element=document.getElementById("Desserts")
// const lastChild=element.lastElementChild
// lastChild.style.backgroundColor="green"

// const ulElements=document.querySelectorAll("ul")
// ulElements.forEach((ulElement)=>{
//     const lastChild=ulElement.lastElementChild
//     lastChild.style.backgroundColor="red"
// })


//.......................nextElementSibling...................

// const element=document.getElementById("vegetables")
// const nextSibling=element.nextElementSibling
// nextSibling.style.backgroundColor="blue"



//..........................previousElementSibling.........................

// const element=document.getElementById("banana")
// const preSibling=element.previousElementSibling
// preSibling.style.backgroundColor="red"

//.....................parentElement................................ which will select the elements inside parent class or it will select parent class regarding to the parent class

// const element=document.getElementById("fruits")   ////===>it will select the whole body
// const parent=element.parentElement
// parent.style.backgroundColor="pink"

// const element=document.getElementById("carrot")   ////===>it will select the vegetable class
// const parent=element.parentElement
// parent.style.backgroundColor="pink"


//.........................children......................... ===> it doesnt have buildin method

const element=document.getElementById("desserts")
const children=element.children
// Array.from(children).forEach((child)=>{
//     child.style.backgroundColor="red"
// })
// console.log(children)

children[1].style.backgroundColor="yellow"