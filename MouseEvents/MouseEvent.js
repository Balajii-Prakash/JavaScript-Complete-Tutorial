//eventListener=listen for specific events to create interactive web pages
//                events: cancelIdleCallback,mouseover, mouseout
//                syntax====>.addEventListner(event,callback/anannymous function/arrow function)  

const myBox=document.getElementById("myBox")
const myButton=document.getElementById("myButton")

// function changeColor(event){
//     //console.log(event)
//     event.target.style.backgroundColor="tomato"
//     event.target.textContent= "OUCH 🫠"


// }
// instead of creating a separate function we can go for the anoanymous or arrow func


//  Method 2
// myBox.addEventListener("click",function(event){
//     event.target.style.backgroundColor="tomato"
//     event.target.textContent= "OUCH 🫠"
// })

// Method 3

// myBox.addEventListener("click",(event)=>{
//     event.target.style.backgroundColor="tomato"
//     event.target.textContent= "OUCH 🫠"
// })

// myBox.addEventListener("mouseover",(event)=>{
//     event.target.style.backgroundColor="yellow"
//     event.target.textContent= "Don't do it 😱"
// })
// myBox.addEventListener("mouseout",(event)=>{
//     event.target.style.backgroundColor="blue"
//     event.target.textContent= "click me 😃"
// })

// myButton.addEventListener("click",(event)=>{
//     event.target.style.backgroundColor="tomato"
//     event.target.textContent= "OUCH 🫠"
// })

// myButton.addEventListener("mouseover",(event)=>{
//     event.target.style.backgroundColor="yellow"
//     event.target.textContent= "Don't do it 😱"
// })
// myButton.addEventListener("mouseout",(event)=>{
//     event.target.style.backgroundColor="blue"
//     event.target.textContent= "click me 😃"
// })

myButton.addEventListener("click",(event)=>{
    myBox.style.backgroundColor="tomato"
    myBox.textContent= "OUCH 🫠"
})

myButton.addEventListener("mouseover",(event)=>{
    myBox.style.backgroundColor="yellow"
    myBox.textContent= "Don't do it 😱"
})
myButton.addEventListener("mouseout",(event)=>{
    myBox.style.backgroundColor="blue"
    myBox.textContent= "click me 😃"
})
