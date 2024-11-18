// NodeList===> Static collection of HTML elemnts ByteLengthQueuingStrategy(id,class,element)
//             can be created by using querySelectorAll()
//             Similar to an array but no (map,filter,reduce)
//             Noidelist wont update to automatically refelect changes


let buttons=document.querySelectorAll(".MyButtons")
// console.log(buttons)



// buttons.forEach(button=>{
//     button.style.backgroundColor='green'
//     button.textContent+="👍👍"
// })

// click event listner

// buttons.forEach(button=>{
//     button.addEventListener("click",event=>{
//         event.target.style.backgroundColor="red"
//     })
// })

// MouseOVER + MOUSEOUT EVENT LISTNER
// buttons.forEach(button=>{
//     button.addEventListener("mouseover",event=>{
//         event.target.style.backgroundColor="grey"
//     })
// })
// buttons.forEach(button=>{
//     button.addEventListener("mouseout",event=>{
//         event.target.style.backgroundColor="blueviolet"
//     })
// })

//ADD AN ELEMENT

const newButton=document.createElement("button")//// STEP 1

newButton.textContent="Button 5"  //STEP 2

newButton.classList="MyButtons"


//STEP 3
document.body.appendChild(newButton)

console.log(buttons)//====> it will show only the initially created 4 buttons it will not show the newly added button .....because nodelist is static

buttons=document.querySelectorAll(".MyButtons")
console.log(buttons)   // now it will show 5 nodeList   


// step 4

buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.remove()
        buttons=document.querySelectorAll(".MyButtons")
        console.log(buttons)
    })
})